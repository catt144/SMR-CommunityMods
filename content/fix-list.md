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

??? success "A building clogged by a dust storm never started again"
    **What you saw:** an extractor or factory stopped after a dust storm, said
    "Clogged after a Dust Storm.", and never started again — destroy and rebuild
    was the only way out. Two players reported it.

    **What was wrong:** the dust-storm event switched the building off before it
    asked you what to do, and if that question was ever lost — a save and reload
    while it was on screen, for instance — nothing switched the building back on.

    **After the fix:** the game now runs the timer that switches the building
    back on, so it no longer strands one. What the pack still does is rescue the
    buildings the old code already stranded: a save written before this game
    update is checked once, as it loads, and a building left switched off by that
    bug is switched back on. Saves written since are left alone, so a building
    that is legitimately waiting on your answer keeps waiting.

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

??? success "New arrivals moved into a dome that was switched off, quarantined or without air"
    **What you saw:** a passenger rocket landing and part of its load walking
    into a dome you had switched off or quarantined — one with no life support
    at all — while a working dome stood within walking distance, and the game
    warning of suffocation.

    **What was wrong:** once the working domes in reach had no free homes left,
    the game fell back to the nearest dome the arrivals could walk to, and that
    fallback never checked whether the dome was switched on, open to newcomers,
    or supplied with air and water. Quarantine did not stop them going in.

    **After the fix:** the fallback is the nearest dome that is working, open
    and supplied, so the overflow goes there, even if some of them have to wait
    for a home. If no such dome can be reached, the game decides as it always
    did.

??? success "A stale answer to whether colonists could travel between domes"
    **What you saw:** the game's own answer to whether colonists could travel
    between two domes could be out of date after you built or removed a Shuttle
    Hub.

    **What was wrong:** that answer was cached, and nothing ever told the cache
    that shuttle availability had changed.

    **After the fix:** the cache notices the change. On the current version of
    the game, migration picks its destination by a different route, so this is a
    repair to a stale value rather than a cure for colonists refusing to move.

??? success "Colonists queued for shuttles from a hub you had switched off"
    **What you saw:** colonists waiting for a ride that was never coming, from a
    Shuttle Hub you had turned off yourself.

    **What was wrong:** a hub switched off by the player still counted as
    "shuttle transport is available" for the whole colony, even though a hub
    that is off will never launch anything.

    **After the fix:** a hub you switch off stops counting. Only hubs you have
    left switched on count.

??? success "Beds stayed reserved for colonists who were never going to take them"
    **What you saw:** free beds in a dome, homeless colonists outside it, and
    nothing happening.

    **What was wrong:** a bed could stay reserved for a colonist who was never
    going to arrive — one still waiting for a ride that never came, or one who
    set off on foot — and those reservations are invisible in the interface.

    **After the fix:** reservations held by a colonist who can no longer use the
    bed are released, and stale ones expire. A bed held for a colonist away on an
    expedition is kept for their return.

??? success "A bed that fell vacant sat empty while colonists were homeless"
    **What you saw:** a colonist dying, retiring or moving out, and their home
    staying empty for hours while homeless colonists waited.

    **What was wrong:** the dome only re-checked its homeless when *you* made
    housing available — built a residence, or switched one back on. A home
    emptied by anything else was invisible until each homeless colonist's own
    periodic check came round, which in a large colony is every twelve hours.

    **After the fix:** a home that falls vacant is offered to the dome's homeless
    straight away.

??? success "The Saint's dome blessing never reached anybody"
    **What you saw:** nothing, which is the problem — the blessing meant for the
    Religious colonists in the Saint's dome had never applied to a single one of
    them.

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
    from it are cured when you load the save. The current game has retired these
    dust-sickness events; the fix stays for saves that still carry the illness.

    **⚠️ Worth knowing:** this one is a judgment call rather than a repair. There
    is no coding error here — a dust illness that infects synthetic colonists is a
    thematic judgment, and we made it.

??? question "Colonists on asteroids stood in vacuum until they died — *judgment call*"
    **What you saw:** asteroid colonists idling outdoors and bleeding Health
    with nothing telling them to go inside.

    **What was wrong:** the game has no reflex for a colonist with nowhere to
    be, so they simply stand there.

    **After the fix:** a colonist whose home is up and running, idling out in
    vacuum, is sent home once half their oxygen time is gone.

    **⚠️ Worth knowing:** this is a judgment call. We added a behaviour the game
    does not have rather than repairing one it has — an absence, not a mistake.

??? question "A faction turned on you over unemployment in a dome of three — *judgment call*"
    **What you saw:** a faction turning on you over "unemployment" in a dome of a
    handful of colonists that was still being built, with nobody unemployed in
    the colony.

    **What was wrong:** nothing, in code terms. Four of the five factions count
    any dome, however small, so one idle colonist in a dome of three is "more
    than 10% unemployment". The Justice Movement's identical dislike waits until
    a dome has ten colonists.

    **After the fix:** all five use the same ten-colonist rule, for homelessness
    too.

    **⚠️ Worth knowing:** this one is a judgment call. Four factions do exactly
    what their own rule says; we took the fifth faction's ten-colonist threshold
    as the one all five were meant to share.

??? success "Expeditions took colonists from their Naturalist Habitat and never brought them home"
    **What you saw:** colonists who lived in a Naturalist Habitat went off on an
    anomaly expedition you never picked them for, and when the rocket came back
    they were moved into a dome instead of going home. The habitat quietly lost
    its residents, one expedition at a time.

    **What was wrong:** on the way home the game looks for somewhere the returning
    colonist can walk to from the landing site. A habitat sitting further away
    than that walk was never considered, even though it was still their home, so
    the game chose them a new one.

    **After the fix:** habitat residents can join expeditions like anyone and come
    back to their own habitat. If the habitat is out of walking range of the
    landing, they are set down at its door, the same way the rocket picked them
    up. If that home can no longer be used, they go to the nearest safe dome.

    **⚠️ Worth knowing:** an earlier version of this pack kept habitat residents
    out of automatic expedition crews instead, as a judgment call. That
    restriction is gone — this repairs the return itself, so there is no longer a
    reason to hold them back. One case has not been watched in a running game: a
    crew that comes home by train rather than walking or being set down.

??? success "An expedition crew with no home left was sent to a dome that could not keep them alive"
    **What you saw:** an expedition coming back to find its home demolished or
    shut down, and the colonists walking into a dome that was switched off,
    quarantined or without air — while a working dome stood within reach.

    **What was wrong:** the return picks a replacement home before it checks
    whether that dome is working, so the nearest dome won even when it was dead.
    It is the same gap as the one new arrivals used to fall into.

    **After the fix:** a returning colonist with nowhere to go now heads for the
    nearest dome that is working and has air, even if its homes are all taken,
    rather than the nearest dome of any kind. If nothing safe can be reached, the
    game decides as it always did.

    **⚠️ Worth knowing:** this one has not been watched happening in a running
    game — it needs a colony where the nearest dome is dead and a working one is
    still in reach, which is hard to set up on purpose. It reuses the same
    working-dome test as the new-arrivals fix further up this section, which has
    been watched working.

---

## Drones & logistics

??? success "Drone Hubs paralysed themselves every time an Extender flickered"
    **What you saw:** a dusty night of power cuts, and your drones repeatedly
    dropping everything and standing idle.

    **What was wrong:** a Drone Hub Extender losing or regaining power made its
    hub tear down and rebuild its entire list of work — twice — and every drone
    already walking towards a job was kicked back to Idle. A brownout, a
    malfunction, a repair, or you toggling it yourself all did it.

    **After the fix:** changes within two seconds of each other are handled as
    one, so a flickering Extender costs the fleet one interruption instead of one
    per flicker.

??? success "Drones could not finish a delivery to a landed automatic rocket"
    **What you saw:** deliveries to a landed automatic rocket that never
    completed, no matter what priority you set.

    **What was wrong:** once every game hour the rocket re-issued its work
    requests, cancelling the orders of every drone already walking towards it.

    **After the fix:** requests that have not changed are left alone, so the
    drones arrive.

??? success "Building an artificial lake buried the rover that built it"
    **What you saw:** the RC Constructor that placed a lake, and any drones
    working the site, reading as dead.

    **What was wrong:** the pass that clears units off a construction site skips
    the constructor doing the clearing, and it runs *before* the basin is dug, so
    anything still standing there (including units that had been moved and
    wandered back) was sealed under the new terrain and ran out of power.

    **After the fix:** the moment the basin exists, anything standing in it is
    sent to solid ground nearby, so the rover drives out instead of being sealed
    in.

??? success "Starting a landscaping job yanked drones out of the RC Commander they were boarding"
    **What you saw:** drones pulled back out of an RC Commander they were
    climbing into — sometimes more than once — when you started a landscaping job
    nearby.

    **What was wrong:** the pass that clears units off a new landscaping area
    builds an exclusion for units that are mid-boarding, and then does not use
    it.

    **After the fix:** the exclusion is used, and boarding drones are left alone.

---

## Buildings & economy

??? success "Large Wind Turbines never got their Frictionless Composites bonus"
    **What you saw:** a colony that researched Frictionless Composites and saw
    its Large Wind Turbines produce exactly as before, while other turbines
    improved.

    **What was wrong:** the patch migration meant to re-apply that breakthrough
    to existing saves only ever restored it to one of the three turbine types.

    **After the fix:** the bonus is restored when you load an affected save.

??? success "Dry Farming did not cut the water of the Feeding the Future farms"
    **What you saw:** after researching the Dry Farming breakthrough, ordinary
    farms used half the water, but Small Farms, Underground Farms, Small
    Underground Farms and Automated Farms used as much as before.

    **What was wrong:** the breakthrough says it cuts the water of crops, but it
    names the base game's three plant farms one by one. The Feeding the Future
    farms were never added to that list.

    **After the fix:** those four farms get the same cut. A save that has
    already researched Dry Farming gets it the next time you load it.

    **⚠️ Worth knowing:** Fungal Farms and Insect Farms still get no cut. The
    base game leaves its Fungal Farm out on purpose, and the Insect Farm is
    treated the same way.

??? success "The Rare Metals Extractor's hammer, and six other machines, worked without their sounds and effects"
    **What you saw:** a Rare Metals Extractor hammering in silence, no pump beat
    from a MOXIE or a Water Extractor, Shuttle Hub shuttles landing and taking
    off without their touchdown and lift-off sounds, an RC Driller and an RC
    Dozer at work without their drill and shovel sounds, and no dust at The
    Excavator's buckets.

    **What was wrong:** those sounds and effects are timed to marks in each
    machine's animation, and the game ships no marks for any of them, so nothing
    ever set them off. The hammer and the MOXIE also looked their marks up in a
    way that could never find them, and the Water Extractor started listening
    before its pump was moving.

    **After the fix:** the marks are there and the lookups work, so the effects
    play in time with the animation. Existing saves pick them up when they load,
    or at the vehicle's next job — no switching buildings off and on.

    **⚠️ Worth knowing:** this is sound and visuals only; nothing about
    production changes. The drill-style Rare Metals Extractor and the white
    MOXIE have no such effects by design — use **Change Skin** on the extractor
    to switch it to the hammer and hear the strikes.

??? success "An Advanced Orbital Probe could downgrade an already deep-scanned sector"
    **What you saw:** firing an Advanced Orbital Probe before researching
    Adapted Probes turned a neighbouring sector that was already deep-scanned
    back into a merely "Scanned" one, inviting a pointless repeat deep scan.

    **What was wrong:** the probe scans every sector in its pattern the same
    way, without checking whether a sector already has a better scan than the
    one it is about to give it.

    **After the fix:** a sector that has already been deep-scanned stays
    deep-scanned; scanning it again wastes no time.

## Trains

??? success "Salvaging one piece of track deleted the whole line and its trains"
    **What you saw:** an entire train line — and every train assigned to it —
    gone after salvaging a single hex. Instantly, with no confirmation.

    **What was wrong:** the salvage path could take the whole track with the
    piece. Curved sections and short tracks were the worst of it.

    **After the fix:** salvaging a piece salvages that piece. Loading a save also
    clears out the wreckage of the old behaviour — orphaned track pieces and
    invisible leftovers that could not be removed by hand.

??? success "Salvaging track refunded a stub's worth of Metals however long the line was"
    **What you saw:** a long line handing back the same few Metals as the
    shortest possible piece — and salvaging *part* of a track returning nothing
    at all.

    **What was wrong:** track is built in sections, and the refund only ever
    counted one of them.

    **After the fix:** the refund follows what the track actually cost, and
    partial salvage leaves the resources as a stockpile where they stood.

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

??? success "A repair the game meant to run on old track had never run"
    **What you saw:** most likely nothing, and possibly a track network that
    would not connect on an old save.

    **What was wrong:** one of the game's own repair passes for saves from an
    earlier version was written so that it did nothing. The current game has
    corrected that, but a save that already recorded the repair as done will
    never run it.

    **After the fix:** the pass runs properly, once, when you load. A track it
    cannot sort keeps its old order, and the rest carry on.

    **⚠️ Worth knowing:** we cannot tell you this fixes a symptom you have. It
    puts your save into the state the game's own migration intended, and on our
    test save it corrected several tracks and stayed corrected.

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

??? success "An expedition that needed an RC Commander refused an RC Seeker"
    **What you saw:** an anomaly expedition asking for an RC Commander would not
    load your RC Seeker and said there were not enough rovers, although the
    Seeker is a Commander model. A colony whose only rover of that kind was a
    Seeker could never send the expedition.

    **What was wrong:** the expedition looks for rovers by their exact model, so
    a rover built on another model never counted as that model. The same refusal
    applied to every rover model built on another one.

    **After the fix:** a rover model fills a request for the rover it is built
    on, and the cargo panel shows the rover actually loaded (for example
    *Seeker 1/1*). It works one way only: an expedition asking for a Seeker still
    will not take a plain Commander, and a colony that owns the exact rover keeps
    the game's own choice. When the only suitable rover is busy, the panel now
    says so instead of showing no warning.

---

## Story & mysteries

??? success "The Wildfire mystery could not finish: infected colonists never went for the cure"
    **What you saw:** once the Wildfire cure was found, the infected colonists
    stayed infected and the mystery never ended. Players got past it by closing
    their hospitals or draining Sanity.

    **What was wrong:** the cure only works when an infected colonist visits a
    medical building. The 1.1.0 game now pays a dome's medical care to its
    colonists at home, so an infected colonist under a Medical Center never
    fell ill enough to be sent, and never visited.

    **After the fix:** once the cure is found, an infected colonist's daily
    outing is a visit to a medical building, and the visit cures them. They
    give up one ordinary outing, once. It needs no DLC; the stall happens in the
    base game.

    **⚠️ Worth knowing:** a colony with no medical building at all still has
    nowhere to send them, as before.

??? success "The Philosopher's Stone mystery hung one step from the end"
    **What you saw:** the mystery stuck at its finale, forever, with nothing left
    to click.

    **What was wrong:** the crystal announces its departure exactly one sol after
    it completes, and the mystery only starts listening for that announcement
    after you answer the epilogue popup. Leave the popup sitting there for more
    than a sol — minimised, ignored — and the announcement had already happened.

    **After the fix:** the departure is re-announced every hour for ten sols, so
    answering the popup any time in that window lets the mystery finish.

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

## Under the hood

These two repair things you cannot see today. They are here because they are
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

---

## One known issue after this update

**An Outside Ranch that still looks closed.** If your Outside Ranch still looks
closed after terraforming has opened your domes, salvage it and rebuild it once;
it will come back open. This can only happen in a colony that ran an earlier
version of the pack with Open Domes already in force: that version deliberately
held the ranch on the closed building, and now that the game handles the ranch
itself, nothing reopens the ones already held. It is appearance only — the ranch
has all nine of its stockpile spots either way, so nothing you produced is
stranded. A ranch built from now on is unaffected.

---

## What is not on this page

**Bugs we investigated and could not demonstrate.** If we could not show a defect
in the game's own code, or could not reproduce what was reported, it is not in
the pack and it is not on this list. A list of things we *think* might be wrong
would be worth nothing to you.

**Things we merely disagree with.** Preferences, quality-of-life changes and
behaviour the game clearly intends are not bug fixes, and they are not in the
pack.
