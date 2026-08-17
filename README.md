# Community Mods for Surviving Mars — the docs site

The player-facing documentation site for the *Surviving Mars: Relaunched*
community mods. **This repo is the site and nothing else** — no mod code, no
development notes. Everything in `content/` is written for players.

⛔ **Nothing is on the public web yet.** The build workflow is manual-trigger only
and GitHub Pages is not enabled on this repo. The five pages in `content/` are
**written and ready to read**, and they replaced the original layout specimens on
2026-08-13 — but nothing on them is published until the owner turns Pages on.

⚠️ **One thing on them is deliberately unfinished, and it is marked in place:**
there are no store links, because the mod has not been uploaded. Bug reports are
routed as of 2026-08-13 — mod-page comments first, this project's issue tracker
for reports carrying a save or a log.

## The mods this site documents

| mod | repo | what it is |
|---|---|---|
| **Community Fix Pack** | [`catt144/SMR-CommunityFixPack`](https://github.com/catt144/SMR-CommunityFixPack) | bug fixes only; every one repairs a defect verified in the game's own shipped code |

⭐ **Those repos being public is deliberate.** They are the receipts behind every
claim these pages make, working notes and corrections included. This site is
separate from them for one reason only, and it is not secrecy: a player looking
up *"is my bug fixed"* should not land in development notes, and development
notes carry superseded numbers and in-progress wrong answers — fine as receipts,
bad as something people quote back at you.

## Layout

```
mkdocs.yml                          MkDocs + Material config
content/                            every page, written for players
  index.md          the three questions people ask before installing
  install.md        installing, the restart rule, what goes in your save
  fix-list.md       every fix in the pack, folded, searchable
  faq.md            questions — opens with "something is broken and you
                    think it might be us"
  for-modders.md    switching off an individual fix, and what we cannot
                    tell you about load order
.github/workflows/publish-site.yml  manual-trigger Pages build
```

## Previewing it locally

```
python -m pip install mkdocs-material
python -m mkdocs serve
```

then open the address it prints. The CI build needs none of this — it installs
its own copy.

## Publishing it

1. Settings → Pages → Build and deployment → Source: **GitHub Actions**.
2. Actions tab → *Publish docs site* → Run workflow.

⚠️ That URL is public the moment it builds.

## The one rule

⛔ **`docs_dir: content` in `mkdocs.yml` is the exposure gate**, and the CI job
fails the build if it changes, if any path escapes this repo, or if a submodule
appears. This repo has nothing to leak by construction — the check stays anyway,
for the day someone points it back at a mod repo.

---

MIT licensed. Moved out of the fix pack repo on 2026-08-13 so one site can serve
every mod in the family rather than riding inside one of them.
