# Bug reports & problems

Tell us what went wrong. Your report is filed for you on this project's public
issue page, so you do not need an account, and you can attach a save or a log.

??? tip "Before you report: is it a mod at all?"
    Switch off every mod in the **Mod Manager**, then **fully restart the game**,
    all the way out and back in. Load the save and try again. If the problem is
    still there, no mod is causing it, ours included. It may still be a game bug
    worth reporting: choose "A game bug you would like fixed" below.

    The restart matters: a mod you switch off keeps running until the game
    restarts.

    A few fixes are deliberate judgment calls and can look wrong. They are marked
    *judgment call* on the [fix list](fix-list.md).

**Your description is public.** Anyone can read what you type here, so please leave
out your name, email and anything else personal. An attached file is **not** public.

<form id="report-form" data-endpoint="https://smr-save-drop.stkotor2.workers.dev">
<p><label for="report-kind"><strong>What are you reporting?</strong></label><br>
<select id="report-kind">
<option value="">Choose one…</option>
<option value="mod-problem">A problem caused by one of our mods</option>
<option value="game-bug">A game bug you would like fixed</option>
</select></p>
<p><label for="report-mod"><strong>Which mod is this about?</strong></label><br>
<select id="report-mod">
<option value="">Choose one…</option>
<option value="fix-pack">Relaunched Fix Pack</option>
<option value="opt-in">Relaunched Fix Pack: Opt-In Modules</option>
<option value="site">This website</option>
<option value="unsure">I am not sure</option>
</select></p>
<p><label for="report-platform"><strong>Where do you play?</strong> (optional)</label><br>
<select id="report-platform">
<option value="">Prefer not to say</option>
<option>PC (Steam)</option>
<option>PC (Paradox launcher)</option>
<option>Steam Deck / Linux</option>
<option>Xbox</option>
<option>PlayStation</option>
<option>Not sure</option>
</select></p>
<p><label for="report-description"><strong>What happened?</strong></label><br>
<textarea id="report-description" rows="6" maxlength="4000" style="width:100%"></textarea></p>
<p><label for="report-modlist"><strong>Other mods you had switched on</strong> (optional)</label><br>
<input type="text" id="report-modlist" maxlength="500" style="width:100%"></p>
<p><label for="report-file"><strong>A save or log</strong> (optional — kept private)</label><br>
<input type="file" id="report-file" accept=".sav,.zip,.log,.txt"></p>
<p style="position:absolute;left:-9999px" aria-hidden="true"><label>Leave this empty <input type="text" id="report-website" tabindex="-1" autocomplete="off"></label></p>
<p><button type="submit" class="md-button md-button--primary" id="report-send">Send report</button>
<span id="report-progress"></span></p>
<p id="report-result" role="status"></p>
</form>

Save files (`.sav`), logs (`.log`, `.txt`) and `.zip` files up to 100 MB are
accepted. A description alone is fine too.

## What helps most

- **What happened**, in plain words, and roughly when it started.
- **Whether it survives a save and reload.**
- **A save where it reliably happens**, if you have one.

## After you send it

You get a link to your report. **Keep it:** replies appear there, and we cannot
message you, because the form does not ask for an email address.

## Where to find the files

On PC, saves are in `Saved Games\Surviving Mars Relaunched`, inside a folder named
with a long number, and end in `.savegame.sav`. Logs are in
`%AppData%\Surviving Mars Relaunched\logs`. On Xbox and PlayStation there are no
files to send, and a description on its own is genuinely useful.

## What happens to an attached file

- Only the person who runs this project can open it. It is not public, and your
  report carries only a short code that matches it.
- It is **deleted automatically after 30 days.** To have it gone sooner, say so in
  a comment on your report.
- It is used to find the bug and for nothing else.
- Sending a report connects your browser to Cloudflare, which stores the file and
  passes the report on. Nothing else on this site does.

## Other ways to reach us

The comments on the
[Steam Workshop page](https://steamcommunity.com/sharedfiles/filedetails/?id=3787202810)
work too, and so does the
[issue page](https://github.com/catt144/SMR-CommunityMods/issues) if you have a
GitHub account, though GitHub cannot take a save. Paradox Mods pages have no
comments, so on Xbox or PlayStation this page is the way.
