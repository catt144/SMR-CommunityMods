# Installing

## Where to get it

The **Relaunched Fix Pack** is on both stores. They hold the same mod — take
whichever one your copy of the game uses.

[Paradox Mods](https://mods.paradoxplaza.com/mods/156049/Any){ .md-button .md-button--primary }
[Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3787202810){ .md-button }

!!! note "Paradox Mods works on console too"
    Paradox Mods is the route for Xbox and PlayStation as well as PC; the Steam
    Workshop page is for the Steam version of the game.

!!! note "Still playing on game version 1.0.7?"
    The pack on the store pages is built for the current version of the game.
    There is a separate frozen build for 1.0.7, with its own instructions:
    [Playing on 1.0.7](legacy-1-0-7.md).

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

### If your save is already broken

The pack helps, but it cannot undo everything.

- **Ongoing behaviour is fixed the moment you load.** Drones, colonists,
  schedulers and rockets simply stop running the broken code.
- **Some damage is repaired on load.** The pack looks for specific damage it can
  positively identify: leftover wreckage from the old track-salvage bug, a
  missing turbine bonus, Biorobots still carrying Dust Sickness, a building the
  dust-storm clog left switched off, and a small extractor bonus an earlier
  version of this pack left behind. When it is unsure it does nothing, and it
  never runs a repair twice.
- **What is gone stays gone.** Dead colonists, destroyed buildings and expeditions
  lost to the lander bugs do not come back. Trains lost to the old
  station-demolition bug cannot be restored, but you can build new ones at any
  station for Metals and Electronics.

## Removing it

1. Turn it off in the **Mod Manager**, or remove it from Paradox Mods.
2. **Restart the game fully.** Until you do, it is still running.

The bugs it was holding back come back. Repairs it already made to your save stay
made: a bonus it removed does not return, and a track it re-numbered stays
re-numbered.

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

!!! note "Mod Options has one setting for the pack"
    Under Options > Mod Options > Relaunched Fix Pack there is one switch, **Load
    this pack first**, on by default (see [Load order](#load-order)). There is
    nothing else to configure, and no way to switch off an individual *fix* from
    inside the game; see [For modders](for-modders.md) for the one route that
    exists.

## Load order

When it starts, the pack moves itself to the front of your mod load order, so its
repairs are applied before other mods change the same parts of the game. Your
other mods keep their order. A message tells you when it has done this: the new
order takes effect the next time the game starts, and on PC the message offers to
restart for you. If you installed from Paradox Mods, you will see the message
again after each update of the pack.

To keep your own order instead, turn off **Load this pack first** under Options >
Mod Options > Relaunched Fix Pack. The pack then stops moving itself; it does not
undo a move it has already made.

Either way, every fix is written to work wherever the pack sits: it patches the
smallest thing that fixes each bug, calls through to whatever another mod has
already put in place, and checks the game's code before changing anything.

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

If you want more than that, the [For modders](for-modders.md) page describes how
the mod patches the game and how another mod can switch a single fix off.
