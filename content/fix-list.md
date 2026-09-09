# Is my bug fixed?

**Search rather than scroll** — press ++ctrl+k++ (or use the search box at the
top) and type what went wrong in your game: *meteor*, *colonists suffocate*,
*train*, *drones stuck*, *rocket*, *dome full*. Every entry on this page is
written with the words you would use, not the words we would use, and the search
looks inside the folded entries as well as at their titles.

A search result drops you at the right **section** rather than at the entry
itself, so the last step is yours: the entry titles are all visible while they are
folded — click the one that matches.

This page lists every fix in the **Relaunched Fix Pack**. Each entry says what you
saw, what was wrong underneath, and what happens now.

!!! note "How to read an entry"
    Most entries are plain repairs: the game's code says one thing, does another,
    and the pack makes it do what it says.

    A handful are marked **judgment call**. Those are still repairs we stand
    behind, but each one required deciding what the game *meant*, and reasonable
    people could decide differently. We would rather flag them than fold them in
    quietly. Some entries also carry a **Worth knowing** note — read those, they
    are where the caveats live.

    Fixes that repair damage already sitting in your savegame say so in their
    entry. They only change something they can positively identify as wrong.

---

## Disasters & weather

??? success "Bombardment missiles arrived in a neat parallel row"
    **What you saw:** an incoming barrage flying in as a rank of missiles on
    identical lines rather than converging from different directions.

    **What was wrong:** the game picked a separate angle for each missile and
    then launched them all along the first one.

    **After the fix:** each missile uses the angle picked for it.

---

## Colonists & domes

??? success "Colonists walked across the surface between two domes and suffocated"
    **What you saw:** colonists moving between two nearby domes going over the
    open surface instead of through the passage you built for them — a walk their
    oxygen only survives if nothing delays them.

    **What was wrong:** below a certain distance the game never looked for a
    passage route at all, and sent them walking.

    **After the fix:** the passage is used.

??? success "Rocket loads of new arrivals died on their way to a dome"
    **What you saw:** colonists disembarking and dying on the surface, or
    landing somewhere they could not walk out of.

    **What was wrong:** when nothing walkable was available, the game picked the
    nearest dome by straight-line distance and sent them anyway.

    **After the fix:** they wait by the rocket instead of setting off for
    somewhere unreachable, and they do not disembark into ground with no way out.

??? success "Colonists stayed homeless after you built a Shuttle Hub"
    **What you saw:** homeless colonists — or colonists stuck in the wrong dome —
    who stayed put even after you built the Shuttle Hub that would have carried
    them.

    **What was wrong:** the answer to "can anyone get from here to there" was
    cached, and nothing ever told the cache that shuttles now existed.

    **After the fix:** building a hub is noticed, and the colonists move.

??? success "Colonists queued for shuttles from a hub you had switched off"
    **What you saw:** colonists waiting for a ride that was never coming, from a
    Shuttle Hub you had turned off yourself.

    **What was wrong:** a hub switched off by the player still counted as
    "shuttle transport is available" for the whole colony, even though a hub
    that is off will never launch anything.

    **After the fix:** a hub you switch off stops counting. Suspensions the game
    imposes on itself — a dust storm, for instance — still count as before.

??? success "A dome sat half empty and still refused to house anyone"
    **What you saw:** free beds in a dome, homeless colonists outside it, and
    nothing happening.

    **What was wrong:** housing reserved for a colonist who never arrived was
    never released. Those reservations are invisible in the interface and had no
    expiry at all.

    **After the fix:** a reservation that is going nowhere is released again.

??? success "A dome read as full while its power was out"
    **What you saw:** births and new arrivals refused by a dome that plainly had
    room, usually during a power or oxygen dip.

    **What was wrong:** the "free living space" figure that births and
    immigration are gated on counted only residences that were running at that
    instant, while the code that actually moves colonists in counted every
    residence you had switched on. The two disagreed.

    **After the fix:** they agree.

??? success "A bed that fell vacant sat empty while colonists were homeless"
    **What you saw:** a colonist dying, retiring or moving out, and their home
    staying empty for hours while homeless colonists waited.

    **What was wrong:** the dome only re-checked its homeless when *you* made
    housing available — built a residence, or switched one back on. A home
    emptied by anything else was invisible until each homeless colonist's own
    periodic check came round, which in a large colony is every twelve hours.

    **After the fix:** a home that falls vacant is offered to the dome's homeless
    straight away.

??? success "Night-shift colonists never came back to work after midnight"
    **What you saw:** night-shift buildings quietly running understaffed.

    **What was wrong:** a colonist who was busy when their shift started —
    eating, resting, seeing a doctor — skipped the rest of that shift instead of
    going to work when they finished.

    **After the fix:** they go to work.

??? success "The Gene Forging research did nothing at all"
    **What you saw:** no change in rare trait chances after researching it.

    **What was wrong:** the tech defines its bonus, and no part of the game ever
    read it — only its sibling Gene Selection was wired up.

    **After the fix:** both add together, the way the numbers say.

??? success "The Saint's dome blessing never reached anybody"
    **What you saw:** nothing, which is the problem — the trait's colony-wide
    effect had never applied to a single colonist.

    **What was wrong:** the code that files a colonist under their trait and the
    code that applies the trait's dome-wide bonus used two different names for
    the same thing, so the bonus was applied to a group nobody was in.

    **After the fix:** the blessing lands on the dome's colonists, in existing
    saves as well as new ones — the wrong filing was written into the dome, so
    loading an affected save re-does it.

    **⚠️ Worth knowing:** game version 1.1.0 repaired this one itself, in its own
    way, and for a while the game's repair and ours cancelled each other out —
    with the pack installed, no Saint blessed anyone. The pack now stands aside
    on 1.1.0 and instead repairs, on load, a save that was played while the two
    were fighting. On the current game version this is no longer a bug the pack
    is holding back.

??? question "Biorobots caught Dust Sickness — *judgment call*"
    **What you saw:** your synthetic colonists losing Health in every dust storm,
    and — on the rule where the sick may not work — barred from working until the
    cure was researched.

    **What was wrong:** nothing, in code terms. The event that hands out the
    illness excludes children and nobody else.

    **After the fix:** Biorobots do not catch it, and Biorobots already suffering
    from it are cured when you load the save.

    **⚠️ Worth knowing:** this one is a judgment call rather than a repair. There
    is no coding error here — a dust illness that infects synthetic colonists is a
    thematic judgment, and we made it.

??? success "You were never told when a Founder gained a trait"
    **What you saw:** the notification, never.

    **What was wrong:** its own eligibility check could never come out true, so
    it had never fired once.

    **After the fix:** it fires.

??? question "Colonists on asteroids stood in vacuum until they died — *judgment call*"
    **What you saw:** asteroid colonists idling outdoors and bleeding Health
    with nothing telling them to go inside.

    **What was wrong:** the game has no reflex for a colonist with nowhere to
    be, so they simply stand there.

    **After the fix:** a colonist idling in vacuum heads home before their
    oxygen runs out.

    **⚠️ Worth knowing:** this is a judgment call. We added a behaviour the game
    does not have rather than repairing one it has — an absence, not a mistake.

---

## Drones & logistics

??? success "Drone Hubs paralysed themselves every time an Extender flickered"
    **What you saw:** a dusty night of power cuts, and your drones repeatedly
    dropping everything and standing idle.

    **What was wrong:** a Drone Hub Extender losing or regaining power made its
    hub tear down and rebuild its entire list of work — twice — and every drone
    already walking towards a job was kicked back to Idle. A brownout, a
    malfunction, a repair, or you toggling it yourself all did it.

    **After the fix:** the flapping is bundled into a single short pass, so a
    flickering extender costs the fleet one interruption instead of one per
    flicker in each direction.

??? success "Drones could not finish a delivery to a landed automatic rocket"
    **What you saw:** deliveries to a landed automatic rocket that never
    completed, no matter what priority you set.

    **What was wrong:** the rocket cancelled the orders of every drone walking
    towards it, once per game hour — so any trip that took longer than an hour
    could never finish.

    **After the fix:** the orders stand, and the drones arrive.

??? success "Building an artificial lake buried the rover that built it"
    **What you saw:** the RC Constructor that placed a lake, and any drones
    working the site, reading as dead.

    **What was wrong:** the pass that clears units off a construction site
    deliberately exempts the rover doing the building — and it runs *before* the
    basin is dug, so anything standing there (including units that had been moved
    and wandered back) was sealed under the new terrain and ran out of power.

    **After the fix:** the moment the basin exists, anything standing in it is
    sent out using the game's own escape behaviour — so the rover walks out
    instead of being sealed in.

??? success "Starting a landscaping job yanked colonists out of the vehicle they were boarding"
    **What you saw:** colonists pulled back out of a rover or train they were
    stepping into — sometimes more than once — when you started a landscaping job
    nearby.

    **What was wrong:** the pass that clears units off a new landscaping area
    builds an exclusion for units that are mid-boarding, and then does not use
    it.

    **After the fix:** the exclusion is used, and boarding is left alone.

---

## Buildings & economy

??? success "A salvaged farm kept supplying its dome with oxygen forever"
    **What you saw:** a dome with more oxygen than its buildings could account
    for, growing every time you rebuilt a farm.

    **What was wrong:** salvaging a farm did not remove the oxygen it had been
    contributing, and each rebuild added another invisible supply on top.

    **After the fix:** the supply goes with the farm, and phantom oxygen already
    in your save is cleaned out when you load it.

??? success "A destroyed tunnel still worked as a shortcut"
    **What you saw:** rovers and colonists routing through a tunnel that was
    standing in ruins.

    **What was wrong:** loading a save handed every tunnel its pathfinding
    shortcut back without checking whether it was still standing. Destroying one
    in the same session worked correctly — it was the reload that undid it.

    **After the fix:** a destroyed tunnel stays destroyed, and existing saves are
    corrected the moment you load them.

??? success "Large Wind Turbines never got their Frictionless Composites bonus"
    **What you saw:** a colony that researched Frictionless Composites and saw
    its Large Wind Turbines produce exactly as before, while other turbines
    improved.

    **What was wrong:** the patch migration meant to re-apply that breakthrough
    to existing saves only ever restored it to one of the three turbine types.

    **After the fix:** the bonus is restored when you load an affected save.

## Trains

??? success "Salvaging one piece of track deleted the whole line and its trains"
    **What you saw:** an entire train line — and every train assigned to it —
    gone after salvaging a single hex. Instantly, with no confirmation.

    **What was wrong:** the salvage path could take the whole track with the
    piece. Curved sections and short tracks were the worst of it.

    **After the fix:** salvaging a piece salvages that piece. Loading a save also
    clears out the wreckage of the old behaviour — orphaned track pieces and
    invisible leftovers that could not be removed by hand.

??? success "Meteor-damaged track could not be salvaged at all"
    **What you saw:** clicking Salvage on damaged track and nothing happening —
    from the button, from Ctrl+click, from anywhere.

    **What was wrong:** damaged pieces were missing a piece of internal
    bookkeeping that made every salvage attempt on that track fail silently.

    **After the fix:** they can be salvaged, and track already damaged in your
    save is repaired when you load it.

??? success "Salvaging track refunded a stub's worth of Metals however long the line was"
    **What you saw:** a long line handing back the same few Metals as the
    shortest possible piece — and salvaging *part* of a track returning nothing
    at all.

    **What was wrong:** track is built in sections, and the refund only ever
    counted one of them.

    **After the fix:** the refund follows what the track actually cost, and
    partial salvage leaves the resources as a stockpile where they stood.

??? success "Trains dumped cargo at stations you had told not to store it"
    **What you saw:** Waste Rock (or anything else) appearing at a station whose
    switch for that resource was off — and then another train hauling it back
    out, forever.

    **What was wrong:** unloading ignored the station's resource switches
    completely.

    **After the fix:** unloading respects them — as long as somewhere else on
    that train's route will take the resource. If no station on the route accepts
    it the train still unloads rather than carrying it about for the rest of the
    game, and a train on its way to be stored always empties itself.

??? success "Demolishing a station permanently deleted its trains"
    **What you saw:** your colony's train count silently shrinking, until no
    station could send out a train at all.

    **What was wrong:** trains docked at a demolished station — or mid-trip from
    it — were destroyed rather than returned to the colony's pool.

    **After the fix:** they are stored properly and can be redeployed.

??? success "A station attached straight to a Train Tunnel never bridged the power grid"
    **What you saw:** a Train Tunnel that did not join your grids, although its
    own description promises it does.

    **What was wrong:** the grid work is skipped for very short tracks, and a
    station attached directly to a tunnel or to another station makes exactly
    such a track.

    **After the fix:** the connection is made.

??? success "Two train buildings fought over the same connector hex forever"
    **What you saw:** two train buildings placed so their track connectors meet
    on the same hex, neither of which ever holds a usable connection.

    **What was wrong:** each building claimed the hex and destroyed the other's
    connector, back and forth, with an internal check that noticed and did not
    stop it.

    **After the fix:** an occupied connector is left where it is.

??? success "Waiting on the platform was charged again as time on the train"
    **What you saw:** a Comfort penalty on passengers, and travel-time figures on
    trains and tracks, larger than the journey actually was.

    **What was wrong:** the moment a colonist reached the platform was never
    re-stamped when they boarded, so their wait was counted a second time as part
    of the ride.

    **After the fix:** waiting counts as waiting and riding counts as riding.

??? success "A repair the game meant to run on old track had never run"
    **What you saw:** most likely nothing, and possibly a track network that
    would not connect on an old save.

    **What was wrong:** one of the game's own migration passes for saves from an
    earlier version was written in a way that made it do nothing at all.

    **After the fix:** the pass is run properly, once, when you load.

    **⚠️ Worth knowing:** we cannot tell you this fixes a symptom you have. It
    puts your save into the state the game's own migration intended, and on our
    test save it corrected several tracks and stayed corrected. It runs over
    every track you have; if one of them refuses to be walked, that track is left
    exactly as the game restored it and the rest carry on.

---

## Rockets & asteroids

??? success "Automatic rockets and landers took off with nothing aboard"
    **What you saw:** endless empty round trips between Mars and an asteroid.

    **What was wrong:** the launch decision did not require anything to have been
    loaded.

    **After the fix:** they wait for cargo. The game's own one-sol departure
    timer still applies, so a rocket that has waited that long and been given
    nothing still goes — empty trips become the exception rather than the cycle.

??? question "Edit Payload forgot what you told it, every trip — *judgment call*"
    **What you saw:** a payload row you deliberately emptied filled straight back
    in from the flight policy's list, every single time you opened the dialog —
    and since every landing clears the payload, that was every trip.

    **What was wrong:** the dialog treats the policy's list as a refill rather
    than as a starting suggestion.

    **After the fix:** a row you emptied stays empty. The defaults still prefill a
    payload you have never configured.

    **⚠️ Worth knowing:** this is a judgment call. Treating the flight policy's
    list as a *default* rather than a *refill* is arguably how it was designed.
    We think a row you deliberately emptied should stay empty.

??? success "RC Transports could be ordered onto trade and refugee rockets"
    **What you saw:** transports accepting an order to interact with rockets they
    have no business at.

    **What was wrong:** the guard that forbids it still names only the rocket
    types that existed before the remaster.

    **After the fix:** it names the current ones.

??? success "The game froze on arrival at an asteroid with subsurface Exotic Minerals"
    **What you saw:** a hard freeze when visiting an asteroid that has Exotic
    Minerals underground. Reported on Linux with NVIDIA graphics.

    **What was wrong:** that deposit's marker sign is the only piece of art of
    its kind in the game — it carries a vertex animation no other sign has. The
    remaster ships a clean, unused sign for the same resource.

    **After the fix:** the deposit uses the clean sign instead. Nothing about the
    deposit itself changes — same resource, same amount, same behaviour.

    **⚠️ Worth knowing:** we could not reproduce the freeze on our own hardware,
    so **we cannot tell you this cures it** — only that it removes the one thing
    that makes those deposits different from every other deposit in the game. If
    you have hit this freeze, we would genuinely like to know whether this helps.

---

## Story & mysteries

??? success "The Philosopher's Stone mystery hung one step from the end"
    **What you saw:** the mystery stuck at its finale, forever, with nothing left
    to click.

    **What was wrong:** the crystal announces its departure exactly one sol after
    it completes, and the mystery only starts listening for that announcement
    after you answer the epilogue popup. Leave the popup sitting there for more
    than a sol — minimised, ignored — and the announcement had already happened.

    **After the fix:** the mystery finishes whether you answered the popup
    promptly or not.

??? success "A Jumbo Cave's Reinforcement could get stuck clearing waste rock forever"
    **What you saw:** a Jumbo Cave mystery stuck on its Reinforcement step — the
    construction site sat "clearing" a patch of waste rock that never finished,
    the Reinforcement never built, and the mystery never completed.

    **What was wrong:** one piece of waste rock on the site sat where the drones
    could not reach it. The game files an unreachable rock away and stops trying
    it, so the site never finished clearing, and the mystery step waited on a
    Reinforcement that could never be built.

    **After the fix:** the unreachable rock is cleared for you, the Reinforcement
    builds, and the mystery carries on. Safe to add to a save where this is
    already happening — the stuck rock is cleared automatically.

??? success "Freeing the wisps paid about a thousandth of the power it promised"
    **What you saw:** the St. Elmo's Fire reward for coexistence arriving as a
    rounding error.

    **What was wrong:** the reward was computed in the wrong unit.

    **After the fix:** it pays what the mystery describes.

??? success "Destroying trapped wisps paid twice what the message promised"
    **What you saw:** the other St. Elmo's Fire ending handing out double
    research — the notification says one amount per wisp and the payout was two.

    **What was wrong:** the reward was granted twice over, once per wisp and once
    for the batch.

    **After the fix:** it pays the amount the message names.

??? success "A meteor could destroy the St. Elmo's Fire sinkhole"
    **What you saw:** the mystery's set-piece simply gone after a large meteor
    strike.

    **What was wrong:** every other mystery set-piece in the game is flagged
    indestructible. This one is not, and nothing else stood between it and the
    meteor.

    **After the fix:** it is treated like its siblings.

??? success "A finished Mirror Sphere site still offered its actions"
    **What you saw:** action buttons on a Mirror Sphere excavation that was
    already complete and had already launched.

    **What was wrong:** the guard against working a finished site compares
    progress against 100, and progress on that site does not run to 100 — so the
    guard could essentially never fire.

    **After the fix:** a finished site stops accepting work.

??? success "A story step asked for a cave-in on a map that does not exist, and the story stopped"
    **What you saw:** an underground anomaly or Buried Wonder sequence stopping
    where it stood, in a game created with the "No Underground and Asteroids"
    rule.

    **What was wrong:** eight story steps ask for a cave-in on the underground
    map *by name* rather than on the map they are running on. With no such map,
    the request errored and the sequence never continued.

    **After the fix:** the request is declined quietly and the story carries on.

## The text and numbers on your screen

??? success "The Domes Overview stopped marking domes in trouble"
    **What you saw:** no red highlight on a dome whose colonists' stats had
    fallen, so nothing stood out at a glance.

    **What was wrong:** the highlight was never applied.

    **After the fix:** low stats are marked again.

??? success "A graph said a resource was barely consumed while its bar was full height"
    **What you saw:** Machine Parts and Electronics reading as almost nothing in
    the Command Center graph caption, next to a tall bar.

    **What was wrong:** the caption's "Consumed" figure left out maintenance,
    which for those resources is most of it.

    **After the fix:** the caption counts what the bar counts.

## Under the hood

These three repair things you cannot see today. They are here because they are
real defects in the game's code, and because other mods, later game updates or a
future DLC can walk straight into them.

??? success "A rocket that had left could have gone on restricting your drones"
    A rocket whose fuel is anything other than plain Fuel leaves an entry behind
    in its hub's list of work restrictions, and nothing ever clears it — so a
    rocket that had launched, left or been destroyed would restrict drone work
    forever. Every rocket the game currently ships uses plain Fuel, so this has
    never happened to anyone; one new rocket type in a patch or a DLC is all it
    would take.

??? success "Two story-scripting defects that the shipped numbers happen to hide"
    One helper returns every object where it was asked for a percentage of them.
    The other is a swap of two timing values written so that both ends up holding
    the larger one — harmless only because the values the game ships with are
    already in the right order. Both run in ordinary play, in a shipped mystery.

??? success "Pre-set building layouts ignored your research"
    A layout-construction preset placed buildings without checking that you had
    researched them, unless the building happened to be purchasable as a resupply
    prefab.

---

## What is not on this page

**Bugs we investigated and could not demonstrate.** If we could not show a defect
in the game's own code, or could not reproduce what was reported, it is not in
the pack and it is not on this list. A list of things we *think* might be wrong
would be worth nothing to you.

**Things we merely disagree with.** Preferences, quality-of-life changes and
behaviour the game clearly intends are not bug fixes, and they are not in the
pack.
