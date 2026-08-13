# Questions

Every question here was actually asked — during testing, in a bug report, or by
someone deciding whether to install. Use ++ctrl+k++ if you are looking for
something specific.

## Something is broken and you think it might be us

Fair. Three answers, in the order you probably want them.

### Is it this mod?

**The one test that settles it:** switch off every mod in the **Mod Manager**,
then **fully restart the game** — all the way out and back in, not just to the
main menu. Load the save and try again. If the problem is still there, it is not
coming from a mod, ours included.

That restart matters. A mod that has been switched off in the Mod Manager is
still loaded until the game restarts, so testing without the restart tests
nothing.

**Things we do on purpose, which are the ones most likely to look wrong:**

- **More dust devils on some map settings.** The pack restores the wave sizes
  the map settings were written for, and on some settings that is noticeably more
  than the game has ever actually delivered. This one is deliberate and it is
  described in the fix list.
- **Four other judgment calls** — drones retrying a building they once could not
  reach, Biorobots not catching Dust Sickness, colonists taking shelter in
  vacuum, and Edit Payload keeping a row you emptied. All five are marked
  *judgment call* in the [fix list](fix-list.md).
- **Anything from the optional modules**, if you installed that second mod. Those
  are changes to designed behaviour, and each one can be undone where you turned
  it on: *Options → Mod Options*. Seven are switches; the eighth is the pair of
  drone dials, which you undo by putting them back to their base settings.

**A notice that is not ours:** the first time you load a save that was made with
any mod you have since removed, the game itself prints a notice saying the save
refers to a mod that is not there. That is the game, not the mod, and it goes
away as soon as you save again.

### How do I get it out?

1. **Turn it off in the Mod Manager, or remove it from Paradox Mods.**
2. **Restart the game fully.** Until you do, it is still running.

The bugs it was holding back come back. Repairs it already made to your save stay
made — a bonus it removed does not come back, a track it re-numbered stays
re-numbered.

!!! warning "If you used the optional pack's drone dials, do this first"
    A drone dial left off its base setting is stored in your savegame as an
    ordinary bonus, and it keeps boosting your drones after the mod is gone —
    permanently, with nothing left in the game to say where it came from.

    **With your colony loaded**, set both dials back to base, press Apply, then
    save the game — and then uninstall. Setting them to base clears the boost
    from the colony you are playing; saving is what clears it from the file. Done
    from the main menu it clears nothing, because there is no colony to clear.

**You cannot switch off one individual fix from inside the game**, on any
platform. The fix pack has no options page at all — every setting lives in the
optional mod — and the developer console cannot un-apply a fix, because the fixes
are installed long before the game reaches a point where you could type anything.
There *is* one route, and it is a modder's one, with a limit we are straight
about: see [For modders](for-modders.md).

### Where do I tell you?

Please do — a report we can reproduce is worth more to this project than
anything else you can give it. What helps most:

- **what happened**, in plain words;
- **roughly when it started** — a new colony, after a specific building, after an
  update;
- **whether it survives a save and reload**;
- **your platform**, and which mods you had enabled;
- **a save file where it reliably happens**, which is worth a thousand words.

On PC the game's logs are usually in your
`%AppData%\Surviving Mars Relaunched\logs` folder, and ++ctrl+f1++ opens the
official bug reporter — on Steam Deck the game leaves that one out. On Xbox and
PlayStation there are no logs or console commands to collect, and a plain
description is still genuinely useful.

**Two places, and which one you want depends on what you have.**

- **The mod's own page, in the comments.** This is the main route and the one we
  read first. It needs no account beyond the one you already use to install mods,
  and it works on every platform. *(No link yet — nothing is published.)*
- **The project's issue tracker, if you have a save file or a log to attach.**
  Comment sections cannot carry files, and a save where the bug reliably happens
  is worth more than any description of it:
  [github.com/catt144/SMR-CommunityFixPack/issues](https://github.com/catt144/SMR-CommunityFixPack/issues).
  It needs a free GitHub account. One tracker covers both mods — say which one
  you were running and we will sort it out from there.

On Xbox and PlayStation there is nothing to attach in the first place, so the mod
page is the whole route, and a plain description is genuinely useful.

---

## Installing, saves and removing

### Can I add this to a save I have already played?

Yes, including a long one. The fix pack writes almost nothing into your savegame,
and what it writes means nothing to the game without it — with one deliberate
exception, which is [written out on the installing
page](install.md#what-it-puts-in-your-save) along with everything else it stores.
It is built to be safe to add or remove at any time.

The general advice applies to any mod and it is not specific to this one: if a
save matters to you, back it up before adding *any* mod to it for the first time.
On a console, where you cannot copy files about, the equivalent is to make an
extra named save first.

### Can I remove it later?

Yes — see [How do I get it out?](#how-do-i-get-it-out) above, including the one
drone-dial caveat if you use the optional pack.

### Do I need both mods?

No. The **Community Fix Pack** is bug fixes and works entirely on its own. The
**Community Fix Pack: Opt-In Modules** is a separate mod of optional changes,
also standing on its own. Neither needs the other, and they work together.

If you only want your bugs fixed, install the fix pack and stop there.

### Why did my toggles and dials reset?

Because the optional modules moved into their own mod. A new mod is a new set of
options as far as the game is concerned, so previous settings do not carry over.
One visit to *Options → Mod Options* sets them again, and they stay set. Your
savegames are not affected — this is only the mod's own settings.

### Will it fix a save that is already broken?

Sometimes, and here is the honest shape of it.

**Most fixes help immediately.** Anything about ongoing behaviour — drones,
colonists, schedulers, rockets — starts working correctly the moment you load,
because the broken code is simply not running any more.

**Some damage needs active repair, and the pack tries.** Every time you load, it
looks for specific damage already sitting in your save and undoes what it can
positively identify: leaked upgrade bonuses, phantom farm oxygen, a stuck weather
flag, tunnels that were destroyed but still routing, track that could not be
salvaged, a missing turbine bonus, Biorobots still carrying Dust Sickness.

**Every pass is deliberately conservative.** It does nothing when it is unsure,
and it does nothing at all the second time it runs. It is a genuine attempt at
repairing an already-damaged save, not a promise that it will repair *yours*.

**History that is gone stays gone.** Colonists who died stay dead, destroyed
buildings stay destroyed, expeditions lost to the lander bugs are lost. Trains
voided by the station bug cannot be restored exactly — but you can build
replacement trains at any station for Metals and Electronics.

---

## What it changes, and what it does not

### Does this change game balance?

The fix pack repairs defects in the game's own code rather than rebalancing the
game. Preferences and features are not in it; they live in the optional mod,
which you do not need.

Two honest exceptions:

- **Five fixes are judgment calls** rather than plain repairs, marked as such in
  the [fix list](fix-list.md). In two of them the game's code is not wrong at all
  and we made a call anyway.
- **One of them changes how the game feels** — dust devil wave sizes, which on
  some map settings means noticeably more dust devils than any version of the
  game has actually delivered.

### Which fixes are judgment calls?

Five: drones writing a building off after one blocked approach · Biorobots and
Dust Sickness · colonists sheltering in vacuum · Edit Payload remembering what
you told it · dust devil wave sizes. Each one is marked *judgment call* in the
[fix list](fix-list.md), with our reasoning in the entry.

### Why isn't *X* fixed?

Three usual reasons.

- **We could not demonstrate it.** If we could not point at the defect in the
  game's own code, or could not reproduce what was reported, it does not ship. A
  list of things we merely suspect would be worth nothing to you.
- **It is not a defect, it is a design we disagree with.** Those go in the
  optional mod, off by default, or nowhere.
- **The repair would be bigger than the bug.** Some fixes would mean replacing so
  much of the game's own code that the mod would break on the next official
  patch, which is a worse deal than the bug.

### How do I turn one fix off?

Not from inside the game, on any platform. See
[For modders](for-modders.md) for the one route that exists, its limits, and the
part of it we cannot tell you how to do.

The optional pack is the opposite: everything in it is reachable in *Options →
Mod Options*, on every platform, controller included — seven switches and a pair
of dials.

### What happens when the game updates?

Each fix inspects the game's own code before it patches anything, and switches
itself off if the game no longer looks the way that fix was written for. So an
official patch that changes the shape of the code a fix was written for stands
that fix down instead of fighting it.

The pack is built against game version **1.0.7.396349**.

!!! note "The honest limit of that"
    That check notices the code changing *shape* — a function renamed, removed or
    restructured. It cannot notice a function of the same name whose insides were
    quietly edited. If an official patch repairs a bug by rewriting the body of
    the same function, our repair may keep running alongside theirs — which is
    why we watch patches and update rather than promising the mod retires itself.

### Load order — does it matter?

**We have not measured this, and we are not going to guess at it.**

What we can say is what the pack does: it patches the smallest thing that fixes
each bug, calls through to whatever another mod has already put in place rather
than replacing whole systems where it can avoid it, and checks the game's code
before changing anything. That is the effort we make to coexist; it is not a
guarantee and it is not a load-order instruction.

If you have a specific conflict, tell us what the other mod is and what you see —
that is a far better use of your time than shuffling the list.

### Console and gamepad players — anything different?

Two things.

- **While any mod is enabled, the game does not unlock achievements or trophies
  on Xbox, PlayStation or the Microsoft Store.** That is the game's own rule and
  it applies to every mod, not just ours. Steam and other PC versions are not
  affected.
- **The optional mod's settings work everywhere**, from the main menu or in
  game, with a controller. Switching off an individual *fix* is a different
  matter: it takes a second mod written for the purpose, so it is a thing a
  modder does rather than something you can do on any platform, console or PC.

---

## Specific things people report

### I dismissed a "Building Not Working" warning and it came back

**Dismissal genuinely works — it is designed to be temporary, and that is not our
doing.** The game silences that warning for a fixed quiet window after you
dismiss it, and then lets it back if the problem is still there. That is a
defensible design: it refuses to let you permanently silence a warning about
something that is still wrong, because a warning dismissed forever is how you
lose a colony to a problem you forgot about.

There really was a defect here once — the setting that makes dismissal work at
all was missing from the game's own data, and the developers have since put it
back. What you see now is the intended behaviour, which is why there is no fix
for it in the pack.

**Why it still drives you up the wall:** the design has no answer for a building
that can *never* recover — one entombed by a landscaping lake, say. You have seen
the warning, you can do nothing about it, and it will resurface every four game
hours for the rest of the game, because the game cannot tell "unacknowledged
problem" apart from "problem the player has understood and accepted". Four game
hours is a couple of minutes at normal speed and a few seconds at high speed,
which is why it feels relentless when you are running fast. There is a second
wrinkle: the quiet window silences the whole warning *category*, so during it a
freshly broken building is kept quiet too — arguably the opposite of what you
want.

The annoyance is real, so the **optional** mod carries a module for it:
*Acknowledged warnings* changes dismissal to mean "I have seen these particular
buildings". The ones you dismissed stay quiet until they actually recover, if one
later breaks again you are told, and a newly broken building always warns
immediately. It is off until you turn it on.

### My Retirement Dome's hotel is filling up with jobseekers

Leave the Hotel on **"Tourists Only"**. Switched to "Any Colonist" a Hotel stops
being tourist housing and becomes ordinary housing — so an arriving jobseeker
gets a *room*, which means they are not homeless, which means the optional
Nursery / Retirement Dome policy will not move them out. That policy moves
unemployed colonists who have no home in that dome — anyone working there stays,
and a hotel room counts as a home.

### I switched on classic rocket refuelling and my parked rocket did nothing

That is deliberate. A rocket that is *already* sitting parked when you enable the
module picks the behaviour up the next time it lands; rockets that land after you
enable it fill immediately. The alternative was reaching into rockets mid-flight
cycle, and we would rather leave a working system alone. If it bothers you, land
the rocket once.

### I put up a second Artificial Sun and my old solar panels ignore it

Panels that were already standing keep ignoring a second sun until you save and
load. Panels built after you switch the module on bind straight away, and a
reload snaps the older ones into place.
