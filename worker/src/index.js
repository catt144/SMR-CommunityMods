// Report drop — the back end of the site's "Send a report" page.
//
//   PUT  /upload   the raw file goes straight into a private R2 bucket; the reply
//                  is a short code. No notification: a file with no report is
//                  just an orphan that expires with the bucket's lifecycle rule.
//   POST /report   the description becomes a GitHub issue (labelled with the mod
//                  the player picked) and a Discord message links to it. An
//                  optional file code ties an uploaded file to the issue.
//
// Files are never public: the bucket has no public access and this Worker has no
// read route. The issue carries only the file's code.

const MAX_BYTES = 100 * 1024 * 1024; // 100 MB — the free plan's request-body limit
const ALLOWED_EXT = [".sav", ".zip", ".log", ".txt"];

// The dropdown. The key is what the page sends; the label is what a player sees
// in the issue title; `label` is the GitHub label, which must exist (or be
// creatable by the token) on GITHUB_REPO.
const MODS = {
  "fix-pack": { name: "Fix Pack", label: "fix-pack" },
  "opt-in": { name: "Opt-In Modules", label: "opt-in" },
  site: { name: "Website", label: "site" },
  unsure: { name: "Not sure", label: "unsure" },
};
// "What are you reporting?" Optional so a page published before this field
// existed keeps working; a missing or unknown value files as "Not said".
const KINDS = {
  "mod-problem": { name: "Problem with our mod", label: "mod-problem" },
  "game-bug": { name: "Game bug to fix", label: "game-bug" },
};
const PLATFORMS = ["PC (Steam)", "PC (Paradox launcher)", "Steam Deck / Linux", "Xbox", "PlayStation", "Not sure"];

const DESC_MIN = 10;
const DESC_MAX = 4000;
const MODLIST_MAX = 500;

// Crockford base32 without I, L, O, U — no look-alikes when a player retypes it.
const ALPHABET = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
const CODE_RE = /^[0-9A-HJKMNP-TV-Z]{4}-[0-9A-HJKMNP-TV-Z]{4}$/;

function makeCode() {
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  const chars = Array.from(bytes, (b) => ALPHABET[b % 32]);
  return chars.slice(0, 4).join("") + "-" + chars.slice(4).join("");
}

function cleanName(raw) {
  // Keep it a plain file name: no path, no odd characters, bounded length.
  const base = raw.split(/[\\/]/).pop().replace(/[^\w.\- ()]/g, "_").trim();
  return base.slice(0, 120) || "upload";
}

function allowedOrigin(env, request) {
  const origin = request.headers.get("Origin") || "";
  const allowed = (env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim());
  return allowed.includes(origin) ? origin : null;
}

function corsHeaders(env, request) {
  const headers = {
    "Access-Control-Allow-Methods": "PUT, POST, OPTIONS",
    "Access-Control-Allow-Headers": "X-Filename, Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
  const origin = allowedOrigin(env, request);
  if (origin) headers["Access-Control-Allow-Origin"] = origin;
  return headers;
}

function reply(env, request, status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(env, request) },
  });
}

// Player text goes into a public issue. Inside a fenced block nothing renders:
// no @mentions that notify a stranger, no #123 cross-links, no HTML or images.
// The fence is longer than any run of backticks in the text, so it cannot be closed early.
function fence(text) {
  const longest = (text.match(/`+/g) || []).reduce((n, run) => Math.max(n, run.length), 0);
  const ticks = "`".repeat(Math.max(3, longest + 1));
  return `${ticks}text\n${text}\n${ticks}`;
}

function titleFrom(modName, description) {
  const first = description.split(/\r?\n/).find((l) => l.trim()) || "";
  const plain = first.replace(/[@#`<>\[\]]/g, "").replace(/\s+/g, " ").trim().slice(0, 80);
  return `[${modName}] ${plain || "Report from the site form"}`;
}

function notify(env, text) {
  if (!env.DISCORD_WEBHOOK) return Promise.resolve();
  return fetch(env.DISCORD_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // parse: [] — nothing a player types can ping @everyone or a role.
    body: JSON.stringify({ content: text.slice(0, 1900), allowed_mentions: { parse: [] } }),
  }).catch(() => {});
}

async function handleUpload(request, env) {
  const length = Number(request.headers.get("Content-Length"));
  if (!Number.isFinite(length) || length <= 0) {
    return reply(env, request, 411, { error: "Could not tell the file's size." });
  }
  if (length > MAX_BYTES) {
    return reply(env, request, 413, {
      error: "That file is over the 100 MB limit. Please leave it out and mention it in your description.",
    });
  }

  let name;
  try {
    name = cleanName(decodeURIComponent(request.headers.get("X-Filename") || ""));
  } catch {
    name = "upload";
  }
  if (!ALLOWED_EXT.some((ext) => name.toLowerCase().endsWith(ext))) {
    return reply(env, request, 415, {
      error: "Only save files (.sav), .zip, .log and .txt files can be sent here.",
    });
  }

  const code = makeCode();
  try {
    await env.BUCKET.put(`${code}/${name}`, request.body, {
      httpMetadata: { contentType: "application/octet-stream" },
      customMetadata: { uploaded: new Date().toISOString() },
    });
  } catch {
    return reply(env, request, 500, { error: "The upload did not finish. Please try again." });
  }
  return reply(env, request, 200, { code, size: length, name });
}

async function handleReport(request, env, ctx) {
  const raw = await request.text();
  if (raw.length > 20000) return reply(env, request, 413, { error: "That report is too long." });

  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return reply(env, request, 400, { error: "Could not read that report." });
  }

  // A real player never sees this field; a form-filling bot does. Pretend it worked.
  if (typeof data.website === "string" && data.website.trim() !== "") {
    return reply(env, request, 200, { number: 0, url: "" });
  }

  const mod = MODS[data.mod];
  if (!mod) return reply(env, request, 400, { error: "Choose which mod you are having trouble with." });

  const description = typeof data.description === "string" ? data.description.trim() : "";
  if (description.length < DESC_MIN) {
    return reply(env, request, 400, { error: "Please describe what happened, in a sentence or two." });
  }
  if (description.length > DESC_MAX) {
    return reply(env, request, 400, { error: "That description is too long. Please shorten it." });
  }

  const kind = KINDS[data.kind] || null;
  const platform = PLATFORMS.includes(data.platform) ? data.platform : "Not said";
  const modList = typeof data.modList === "string" ? data.modList.trim().slice(0, MODLIST_MAX) : "";

  let fileCode = "";
  if (data.fileCode) {
    if (typeof data.fileCode !== "string" || !CODE_RE.test(data.fileCode)) {
      return reply(env, request, 400, { error: "That file code is not valid." });
    }
    const found = await env.BUCKET.list({ prefix: `${data.fileCode}/`, limit: 1 });
    if (found.objects.length === 0) {
      return reply(env, request, 400, { error: "That file code does not match an upload." });
    }
    fileCode = data.fileCode;
  }

  const title = titleFrom(kind ? `${mod.name} · ${kind.name}` : mod.name, description);
  const body = [
    "*Filed from the site's report form.*",
    "",
    `**Reporting:** ${kind ? kind.name : "Not said"}`,
    `**Mod:** ${mod.name}`,
    `**Platform:** ${platform}`,
    "",
    "**What happened**",
    fence(description),
    "",
    "**Other mods enabled**",
    modList ? fence(modList) : "Not said",
    "",
    `**File:** ${fileCode ? `uploaded privately — code \`${fileCode}\`` : "none"}`,
  ].join("\n");

  const api = (env.GITHUB_API || "https://api.github.com").replace(/\/$/, "");
  let issue = null;
  try {
    const res = await fetch(`${api}/repos/${env.GITHUB_REPO}/issues`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "smr-report-drop",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body, labels: ["from-form", mod.label].concat(kind ? [kind.label] : []) }),
    });
    if (res.ok) issue = await res.json();
  } catch {
    issue = null;
  }

  if (!issue) {
    // GitHub refused or was unreachable. The report must not be lost: put it in
    // Discord in full, and tell the player it was received.
    ctx.waitUntil(
      notify(
        env,
        `⚠️ Could not file a GitHub issue. Report for **${mod.name}** (${platform})` +
          (fileCode ? `, file code **${fileCode}**` : "") +
          `:\n${description}`,
      ),
    );
    return reply(env, request, 200, { number: 0, url: "", saved: true });
  }

  ctx.waitUntil(
    notify(
      env,
      `New report **#${issue.number}** — ${mod.name}: ${title.slice(0, 120)}\n${issue.html_url}` +
        (fileCode ? `\nFile code: **${fileCode}**` : ""),
    ),
  );
  return reply(env, request, 200, { number: issue.number, url: issue.html_url });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(env, request) });
    }
    if (request.method === "GET" && url.pathname === "/") {
      return new Response("ok", { status: 200 });
    }

    const route =
      request.method === "PUT" && url.pathname === "/upload"
        ? "upload"
        : request.method === "POST" && url.pathname === "/report"
          ? "report"
          : null;
    if (!route) return reply(env, request, 404, { error: "not found" });

    // Only the site's own page may write. A missing or foreign Origin is a script
    // or another site, not a player using the form.
    if (!allowedOrigin(env, request)) {
      return reply(env, request, 403, { error: "This page is not allowed to send reports." });
    }

    return route === "upload" ? handleUpload(request, env) : handleReport(request, env, ctx);
  },
};
