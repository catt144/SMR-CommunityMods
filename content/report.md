# Report a problem

Tell us what went wrong. Your report is filed for you on this project's public
issue page, so you do not need a GitHub account. If you have a save or a log, you
can attach it here too — GitHub itself cannot take a save, but this page can.

**Your description is public.** Anyone can read what you type here, so please leave
out your name, email and anything else personal. An attached file is **not** public.

<form id="report-form" data-endpoint="https://smr-save-drop.stkotor2.workers.dev">
<p><label for="report-mod"><strong>Which mod are you having trouble with?</strong></label><br>
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
accepted. You can also just describe the problem and send no file.

## After you send it

You get a link to your report on the issue page. **Keep that link:** it is where any
reply from us will appear. We cannot message you, because this form does not ask for
an email address.

## Where to find the files

On PC, saves are in `Saved Games\Surviving Mars Relaunched`, inside a folder named
with a long number. Saves end in `.savegame.sav`. Logs are in
`%AppData%\Surviving Mars Relaunched\logs`. On console there are no files to send,
and a plain description is genuinely useful.

## What happens to an attached file

- Only the person who runs this project can open it. It is not public and there is
  no link to it; your report carries only a short code that matches it.
- It is **deleted automatically after 30 days.** If you would like it gone sooner,
  say so in a comment on your report.
- It is used to find the bug and for nothing else.
- Sending a report connects your browser to Cloudflare, which stores the file and
  passes the report on; nothing else on this site does.
