# For modders

This page is for people writing or debugging mods. If you are playing the game,
you want the [FAQ](faq.md) instead — nothing here is needed to use the mod.

## What the pack does to the game

Nothing on disk. It patches the game's code **at runtime**. Where a bug can be
hooked, the fix wraps the game's function and calls the original; where the bug
sits mid-function, the fix copies a corrected body instead, and that copy names
in its source the game file and lines it came from — those are the ones most
likely to clash with another mod.

Each fix inspects the code it is about to patch and stands itself down if the
shape it expects is not there. That check reads the shape — renamed, removed,
restructured — not a body quietly rewritten under the same name.

The pack on the store pages is built against game version **1.1.0.403908**; the
frozen build for players who stayed on 1.0.7
([Playing on 1.0.7](legacy-1-0-7.md)) is built against **1.0.7.396349**.

## Switching off an individual fix

Any single fix can be switched off from another mod, without touching this one.
Set the fix's id as a key on the veto table before the pack loads:

```lua
SMRFixPack_Disabled = rawget(_G, "SMRFixPack_Disabled") or {}
SMRFixPack_Disabled["LakeEntombment"] = true
```

The id is the key, not a list entry — a plain list looks valid and switches off
nothing. Ids are the fix file names minus the `Fix_` prefix
(`Code/Fix_LakeEntombment.lua` registers `LakeEntombment`); the save-repair
module `Code/90_SaveSanitizer.lua` registers `SaveSanitizer`.

"Before the pack loads" means your mod has to load first. A veto set before we
load is complete: the fix is registered, marked disabled and never applied.
Setting the id afterwards does not un-install a fix that is already installed.

## The source

Every fix carries a header explaining the defect and citing the game's own code
by file and line, and the development notes behind them are in the same tree.

- [Relaunched Fix Pack repository](https://github.com/catt144/SMR-CommunityFixPack)

## Save data

The mod writes a small, enumerated set of fields into savegames, and all but one
of them mean nothing to the game once the mod is gone. The exception is
deliberate and documented on the [installing
page](install.md#what-it-puts-in-your-save) — where a repair put back a bonus
that a broken patch migration dropped, that bonus is an ordinary one of the kind
the game hands out itself and keeps working after the mod is gone. The full
enumeration lives in the development notes in the repository above.
