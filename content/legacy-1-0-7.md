# Playing on 1.0.7

The Fix Pack on the store pages is built for the current version of the game. If
you have deliberately stayed on the older **1.0.7** version — usually to finish a
colony that will not load on the newer one — this page has the version of the
pack that matches it.

!!! note "Most people do not need this page"
    If your game updates normally, you are on the current version and the store
    page is all you need. Come back here only if you chose 1.0.7 on purpose.

## Why there are two

The 1.1.0 update fixed a good number of the same bugs this pack was fixing, and
rewrote the code behind many of the others. The current pack is written against
that new code.

Running it on 1.0.7 would mean fixes written for one version of the game landing
on a different one — which is the exact kind of mismatch this pack exists to
avoid. So the last build made for 1.0.7 is kept exactly as it was, and it stays
that way. It will not get new fixes.

## Get it

[Download the 1.0.7 version](https://github.com/catt144/SMR-CommunityFixPack/releases/tag/v5-game-1.0.7){ .md-button .md-button--primary }

## Install it

!!! warning "Remove the store copy first — this step is not optional"
    The game loads whichever copy has the **highest version number**, wherever it
    came from. If you leave the Workshop or Paradox Mods copy in place, the game
    keeps using that one and quietly ignores the copy you installed by hand. It
    will look like it worked. It did not.

1. **Remove the store copy.** Unsubscribe on the Steam Workshop, or uninstall it
   in Paradox Mods. Start the game once, check the Mod Manager no longer lists
   the Relaunched Fix Pack, and quit.

2. **Unzip the download.** Inside is a folder with a single file in it,
   `ModContent.fpk`. Keep them together — the folder is the mod.

3. **Move that folder into your mods folder.** On Windows, paste this into the
   address bar of a File Explorer window:

    ```
    %APPDATA%\Surviving Mars Relaunched\Mods
    ```

    On Mac and Linux it is the `Mods` folder next to the game's other user files.
    If you have ever installed a mod by hand before, it is the same folder.

4. **Start the game, enable it in the Mod Manager, and restart the game fully** —
   all the way out and back in, not just to the main menu. Mods only change state
   on a full restart.

## Check it worked

Open the Mod Manager. The Relaunched Fix Pack should be listed **once**, and
enabled. If you removed the store copy in step 1, then the copy you installed by
hand is the one the game is running.

If it is listed twice, or you are not sure the store copy is really gone, go back
to step 1 — that is the one thing that silently undoes the rest.

## Console players

There is no route for this. Xbox and PlayStation can only install mods through
Paradox Mods, and installing a mod by hand needs a desktop file system. If you are
on console you are on whatever version Paradox has shipped you, and the store
version of the pack is the right one for it.

## Going back

Nothing here is permanent. Delete the folder you added, re-subscribe on the store,
and restart the game. Saves made with the pack load fine without it.
