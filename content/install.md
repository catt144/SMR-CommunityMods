# Installing

## Where to get it

The **Relaunched Fix Pack** is on both stores. They hold the same mod — take
whichever one your copy of the game uses.

[Paradox Mods](https://mods.paradoxplaza.com/mods/156049/Any){ .md-button .md-button--primary }
[Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3787202810){ .md-button }

!!! note "Paradox Mods works on console too"
    Paradox Mods is the route for Xbox and PlayStation as well as PC; the Steam
    Workshop page is for the Steam version of the game.

## Installing a mod

1. Open the mod's page and add it.
2. Launch the game and enable it in the **Mod Manager**.
3. **Restart the game.**

!!! warning "The restart is not optional"
    Enabling or disabling a mod in the Mod Manager only takes effect on a **full
    restart of the game** — all the way out and back in, not a return to the main
    menu. This catches people out constantly, including us: a mod you have just
    switched off is still running until you restart, so anything you test before
    that is testing the old state.

Nothing is patched on disk. The mod wraps the game's own code while it runs, and
no game file is modified.

## Adding it to a save you have already played

That is what the fix pack is built for, and a long-running colony is exactly the
case it was written against. Several of its repairs go looking for damage already
sitting in your save and undo what they can positively identify, the first time
you load.

The general advice applies to any mod and is not specific to this one: **if a save
matters to you, back it up before adding any mod to it for the first time.** On a
console, where you cannot copy files about, make an extra named save first.

## What it puts in your save

The fix pack's bookkeeping, by name rather than as a summary:

- a timestamp on a housing reservation;
- a timestamp on a colonist who has just taken shelter;
- a "the player has set this payload" flag on a rocket;
- a handful of small stamps and flags that let a repair know it has already run,
  or hold one decision for as long as a single weather event lasts.

None of that means anything to the game without the pack. A couple of the stamps
clear themselves the next time you save, and older ones left by earlier versions
are deleted as they are found.

**One item is deliberately not inert.** Where a repair put back a bonus that a
broken patch migration dropped, that bonus is an ordinary one of the kind the game
hands out itself, and it goes on working without us — which is the entire point of
restoring it.

!!! note "The fix pack has no options page, and that is correct"
    There is nothing to configure, so you will not find it in Mod Options —
    nothing is missing, and nothing is broken. There is no way to switch off an
    individual *fix* from inside the game; see [For modders](for-modders.md) for
    the one route that exists.

## Load order

We have not measured how this game decides load order, and we are not going to
guess at it. What the pack does instead is patch the smallest thing that fixes
each bug, call through to whatever another mod has already put in place, and
check the game's code before changing anything.

If you hit a specific conflict, tell us what the other mod is and what you see.

## Console and gamepad players

**While any mod is enabled, the game does not unlock achievements or trophies on
Xbox, PlayStation or the Microsoft Store.** That is the game's own rule and it
applies to every mod. Steam and other PC versions are not affected — achievements
keep unlocking there with mods enabled.

## Checking it is working

The honest answer for a bug-fix mod is that you check by the bug not happening.
The Mod Manager shows you that it is installed and enabled; after that, there is
nothing on screen to look at, because a repaired bug looks like an ordinary game.

If you want more than that, the [For modders](for-modders.md) page describes what
the mod can report about itself, and what we have not yet confirmed about it.
