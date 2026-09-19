# FAQ

Short answers, each with a link to the page that has the detail. Use ++ctrl+k++ to
search the whole site.

!!! tip "Found a bug?"
    Go to **[Bug reports & problems](report.md)**. No account needed, and you can
    attach a save or a log.

## Installing and your saves

### Can I add it to a save I have already played?

Yes, including a long one. That is what it is built for. The pack writes almost
nothing into your save; the full list is on the
[installing page](install.md#what-it-puts-in-your-save).

### Will it fix a save that is already broken?

Partly. Ongoing behaviour is fixed as soon as you load, and some damage is repaired
on load, but what is gone stays gone. The detail is under
[If your save is already broken](install.md#if-your-save-is-already-broken).

### How do I remove it?

Turn it off in the Mod Manager and restart the game fully. What that undoes, and
what it does not, is under [Removing it](install.md#removing-it).

### Does load order matter?

We have not measured it and will not guess. What the pack does to coexist with
other mods is under [Load order](install.md#load-order). If you hit a specific
conflict, [tell us](report.md).

### Anything different on console?

While any mod is enabled, Xbox, PlayStation and the Microsoft Store do not unlock
achievements or trophies. That is the game's rule for every mod; Steam is not
affected.

## What it changes

### Does it change game balance?

No. It repairs defects in the game's own code; preferences and features are not in
it.

### Which fixes are judgment calls?

Four: Biorobots and Dust Sickness, colonists sheltering in vacuum, Edit Payload
remembering what you told it, and one ten-colonist rule for all five factions.
Each is marked *judgment call* on the [fix list](fix-list.md), with the reasoning.

### Why isn't *X* fixed?

Usually one of three reasons:

- **We could not show it.** If we cannot point at the defect in the game's code, or
  reproduce what was reported, it does not ship.
- **It is a design, not a defect.** Designs we disagree with are not bug fixes.
- **The repair would be bigger than the bug.** Replacing that much of the game's
  code would break on the next official patch.

If you think we missed one, [report it](report.md) as a game bug you would like
fixed.

### Can I turn one fix off?

Not from inside the game, on any platform. There is one route, and it takes a
second mod: see [For modders](for-modders.md).

### What happens when the game updates?

Each fix checks the game's code before it patches anything, and stands down if
that code has been renamed, removed or restructured. It cannot notice a function
whose insides were quietly edited, so we read every patch and update the pack.

The store version is built for game version **1.1.0.403908**. For 1.0.7, see
[Playing on 1.0.7](legacy-1-0-7.md).

## Things people report

### I dismissed a "Building Not Working" warning and it came back

That is the game's design, not a bug. Dismissing the warning silences it for a
fixed quiet window, and then it returns if the problem is still there, so a
warning you dismissed cannot be forgotten forever.

It is at its worst for a building that can never recover, such as one entombed by
a landscaping lake: the warning returns every four game hours for the rest of the
game, which is a few seconds at high speed. The quiet window also silences the
whole warning category, so a newly broken building stays quiet during it too.
There was once a real defect here, which the developers have fixed, so there is no
fix for it in the pack.
