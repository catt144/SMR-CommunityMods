# For modders

This page is for people writing or debugging mods. If you are playing the game,
you want the [FAQ](faq.md) instead — nothing here is needed to use either mod.

## What these mods do to the game

Nothing on disk. Both mods patch the game's code **at runtime** — wrapping,
chaining and, where there is no alternative, replacing individual functions while
the game runs. No game file is modified and no asset is overwritten.

Each fix inspects the code it is about to patch before it patches it. If the
shape it expects is not there, that fix reports itself inactive and does nothing
rather than running against code it no longer recognises. The pack is built
against game version **1.0.7.396349**.

!!! note "The honest limit of that check"
    It notices the *shape* of the code changing — renamed, removed, restructured.
    It cannot notice a function of the same name whose body was quietly edited, so
    an official patch that fixes a bug by rewriting the insides of the same
    function will not, on its own, stand our version down.

## Switching off an individual fix

There is exactly one route and it is a modder's one.

Each fix registers itself under a short identifier. Setting that identifier in a
global table **before the fix pack loads** vetoes the fix — the pack registers it,
marks it disabled, and never applies it:

```lua
SMRFixPack_Disabled = SMRFixPack_Disabled or {}
SMRFixPack_Disabled["DustDevilSpawnGate"] = true
```

The optional-modules mod has the same mechanism under its own name:

```lua
SMROptInPack_Disabled = SMROptInPack_Disabled or {}
SMROptInPack_Disabled["NoHomeless"] = true
```

The pack picks up an existing table rather than replacing it, so it does not
matter whether yours or ours is created first — only that the *values* are set
before our code runs.

### Where the identifiers come from

They are the names of the fix files in the pack's public repository, minus the
`Fix_` prefix — `Code/Fix_DustDevilSpawnGate.lua` registers `DustDevilSpawnGate`.
The one exception is the save-repair module, `Code/90_SaveSanitizer.lua`, which
registers `SaveSanitizer`. The optional mod follows the same rule with its own
`Opt_` prefix: `Code/Opt_NoHomeless.lua` registers `NoHomeless`.

- [Community Fix Pack repository](https://github.com/catt144/SMR-CommunityFixPack)
- [Opt-In Modules repository](https://github.com/catt144/SMR-CommunityOptInPack)

Those repositories are public on purpose. Every fix carries a header explaining
the defect, citing the game's own code by file and line, and the development
notes behind them are in the same tree.

### ⛔ The part we cannot tell you: how to guarantee loading first

**We have not measured how mod load order is decided in this game, and we are not
going to invent an answer.** The veto above works if your code runs before ours.
We can state that condition; we cannot hand you a reliable method for meeting it,
and a method that works on one machine and not another would be worse than
silence.

If you have measured it, we would genuinely like to know.

### What the veto does and does not reach

- **A veto set before we load is complete.** The fix is registered, marked
  disabled and never applied, so nothing of ours is installed over the game's own
  function.
- **A veto set later is not, for most fixes.** Nearly every fix is installed once,
  at load, by replacing or wrapping a function; taking the identifier out of the
  table afterwards does not un-install it. A small number of fixes re-read the
  table on every call and become pass-throughs the moment you set it — but you
  cannot tell which from the outside, so do not build on it.
- **The developer console is not a route.** Whatever you type, you type long
  after load.

## Seeing what the pack did

Each pack exposes a listing call — `SMRFixPack.ListFixes()` and
`SMROptInPack.ListFixes()` — which walks every registered fix and writes its
identifier, status and title through the mod's logging path.

!!! warning "We have not yet confirmed where that output lands"
    It goes through the game's own mod-log printing, and we have not verified
    whether that reaches the on-screen console or only the log file. Until
    someone has actually looked at a screen and seen it, we are not going to tell
    you where to look. If you run it and it prints somewhere, tell us where.

Fixes that stand themselves down over a game-code change are also reported in a
dialog naming them — raised once, at the main menu, the next time the game
starts.

## Coexisting with other mods

The house rules the fixes are written under, so you can predict what you are
dealing with:

- **Patch the smallest thing that fixes the bug.** Prefer wrapping a synchronous
  input over replacing a body; prefer replacing one method over rewriting a
  system.
- **Chain, do not clobber.** Where another mod may have wrapped the same
  function, our wrapper calls through to whatever was there.
- **Additive message handlers.** The game's own handlers keep running.
- **Fail safe rather than fail clever.** A fix that cannot verify its target does
  nothing.

We do not attempt to fix other mods' problems, and we do not patch around them.
If ours conflicts with yours, tell us which function and we will look at whether
our patch can be narrower.

## Save data

Both mods write a small, enumerated set of fields into savegames, and all but one
of them mean nothing to the game once the mod is gone. The exception is
documented in plain language on the [FAQ](faq.md#how-do-i-get-it-out) — an
optional drone dial left off its base setting stores an ordinary bonus that
survives uninstalling.

⚠️ **One thing that will mislead you if nobody says it:** the optional mod's
persisted fields carry the **fix pack's** prefix, not its own. They were kept
byte-identical when the two mods were split so that existing savegames did not
have to be migrated. If you are inspecting a save, do not attribute a field to a
mod by its prefix alone. The full enumeration lives in the development notes in
the repositories above.
