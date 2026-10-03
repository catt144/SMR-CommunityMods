# The modules

Each module below has its own switch on **Options → Mod Options → Relaunched Fix
Pack: Opt-In Modules**, and each one is off, or at its base setting, until you
change it there. A switch takes effect as soon as you press **Apply**, in both
directions. Installing, removing and the uninstall steps are on
[What it is, installing, removing](index.md).

## Acknowledged warnings

**What it does.** Dismissing a "Building Not Working" warning acknowledges the
buildings it lists: they stay quiet until they recover, and a building that
recovers and breaks again warns again. A newly broken building always warns
immediately. Without this module, dismissing the warning silences it for four game
hours and then it comes back. Only these building warnings change.

**Default.** Off.

**When you turn it off.** The game's own behaviour comes back: dismissing the
warning silences it for four game hours, and then it comes back.

**In your save.** It leaves a small "acknowledged" mark on the buildings you
dismissed. The unmodded game ignores it.

## Multiple Artificial Suns

**What it does.** Lets you build more than one Artificial Sun. The game's own solar
panels only ever look at the first sun for night-time light, so this module also
connects panels to whichever sun covers them, and reconnects them when a sun is
demolished.

!!! note "Panels that were already standing"
    Panels already standing when you switch the module on pick up a second sun
    after you save and load. Panels built afterwards connect straight away.

**Default.** Off.

**When you turn it off.** The one-per-colony limit returns, and suns you have
already built keep working.

## Drone speed and Drone carry capacity

**What it does.** Two dials.

- **Drone speed** adds a multiple of base Drone movement speed on top of any speed
  techs you have. Drones only: rovers and shuttles are untouched. The positions are
  1x (base), 2x, 3x and 5x.
- **Drone carry capacity** adds extra units per trip on top of the base one, and
  the Artificial Muscles breakthrough still stacks. The positions are +0 (base), +1
  and +2.

Both take effect immediately.

**Default.** 1x (base) and +0 (base). The base positions are exactly the unmodded
game.

**When you turn it off.** Put a dial back on its base position and that dial is
exactly the unmodded game again.

!!! warning "Set both dials back to base before you uninstall"
    A dial left off its base position stays in your save as an ordinary bonus after
    the mod is gone, and keeps boosting your drones. Set both dials back to base,
    press **Apply** and save before you remove the mod. The full steps are under
    [Before you uninstall](index.md#before-you-uninstall).

## Service interest tags

**What it does.** Shows which Colonist interests each service building satisfies
(an Electronics Store counts for Shopping and Gaming): in the build menu when you
hover a service building, and as an "Interests" section on a placed building, whose
popout lists the traits that gain or lose something there.

It is display only: how Colonists choose and use services does not change.

**Default.** Off.

**When you turn it off.** The game's own behaviour comes back.

**In your save.** Nothing. It stores nothing in your save.

## Station import/export rows

**What it does.** Set each resource at a Train Station to Import, Export, Balanced
or Not accepted, with a slider for the target. It works on every station, with or
without a Train Hub.

!!! note "Always on while the Train Hub is on"
    While the Train Hub module is on, the rows are on too, whatever this switch
    says.

**Default.** Off.

**When you turn it off.** Stations go back to the game's own requests.

## Train Hub

**What it does.** Adds the Train Hub: a junction where three train lines cross and
cargo changes lines. It stores resources for the stations on its lines, runs its
own drones to build and repair track, and has upgrades of its own. Stations served
by a hub use the hub's Import/Export rows.

While the module is on, Train Stations don't spoil food.

**Default.** Off.

**When you turn it off.** No new hubs can be built, and hubs already built keep
working.

!!! warning "Demolish every Train Hub before removing the mod"
    The Train Hub exists only while the mod is installed. Removing the mod with a
    hub still standing leaves a building in your save that the game no longer
    knows, and the game reports errors when that save loads. Follow
    [Before you uninstall](index.md#before-you-uninstall).

## Elevator Depot

**What it does.** Adds the Elevator Depot: two halves, one on the surface and one
underground, joined by a cabin that carries cargo between them. Set each resource
on the surface half to Import (goes down) or Export (comes up), and the cabin loads
what the other side needs.

- One pair per colony.
- The surface half holds the Import/Export settings.
- Drones can be given access to either half.
- One upgrade doubles its capacity.

**Default.** Off.

**When you turn it off.** No new depot can be built, and a pair already built keeps
working.

!!! warning "Demolish both halves before removing the mod"
    The Elevator Depot exists only while the mod is installed. Removing the mod with
    either half still standing leaves a building in your save that the game no
    longer knows, and the game reports errors when that save loads. Follow
    [Before you uninstall](index.md#before-you-uninstall).
