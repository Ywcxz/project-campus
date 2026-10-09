# Wayfinder

*Finding places on campus, and which office handles what*

Wayfinder has two halves: finding places on campus and the way to them, and a guide to which office handles what, with its hours and requirements. [Established] (D-079) The Main Campus has 61.6 hectares of grounds and 188 buildings ([Chapter 2](02-intranet.md)). [Established] By the author's account it divides into an upper and a lower campus, far enough apart to shape Hop-It's design ([Chapter 4.1](04a-hop-it.md)).

## At a glance

| Question | Current answer |
| --- | --- |
| What problem? | New students, parents, and visitors can't easily find buildings, rooms, and offices, or know which office handles a request, so they ask around and make extra trips. [Unresolved] |
| Who needs it? | Incoming and transferring students, parents and visitors, guests at events, Hop-It's riders, and staff sending people to other offices. [Proposed] |
| What evidence? | None at VSU yet. Interviews could ask how first-year students learned their way around, and how many visits a typical request took. [Unresolved] |
| Relation to existing systems? | VSU's Citizen's Charter 2026 lists its services, steps, and processing times, and its document tracker and helpdesk track requests ([Chapter 9](09-related-work.md)). [Established] Wayfinder would point to them and hand people into them, never restate them as its own authority, as D-064 proposes for the network. [Proposed] VSU has completed an inventory of roads, water, drainage, electrical systems, and GIS. [Established] It could become Wayfinder's map if VSU shares it. [Unresolved] (Q-49) OneVSU Mobile and the OneVSU Portal may cover office directories too. [Unresolved] (Q-18) |
| Stage? | A candidate for an early product: the office guide needs accurate information and an owner, not new infrastructure. [Proposed] The map needs VSU's spatial data or a field survey. [Unresolved] |
| Privacy, governance, and cost? | It maps places and offices, not people. [Proposed] Some places, such as laboratories and the data center, are shown without interior detail. [Proposed] Keeping it current is the main cost: every entry needs an owner and a date it was last confirmed. [Proposed] |
| How could it be disproved? | People already find places and offices without trouble; the Citizen's Charter and OneVSU cover the need; or offices won't keep their entries current. [Proposed] |

## Places and the way there

- **Places.** Buildings, rooms, offices, laboratories, dormitories, the VSU Market, gates, and landmarks, each with the names people actually use for it. [Proposed]
- **The way there.** Walking directions between places, including between the upper and lower campus, with landmarks rather than only a line on a map. [Proposed]
- **Offline.** The map and the guide are stored on the phone, so they work with weak signal, as the intranet's innermost ring proposes ([Chapter 2](02-intranet.md)). [Proposed]

## Where to go for what

A person starts from a question, such as replacing a lost ID or requesting a transcript, and Wayfinder answers with the office, its room and the way there, its hours, what to bring, and the official system to use if there is one. [Proposed] Each answer cites the Citizen's Charter or the office itself, with the date it was last confirmed. [Proposed] The network's "reach the right office" use case would point here rather than keep its own directory ([Chapter 3.1](03a-use-cases.md)). [Proposed]

## What builds on it

- Housing shows distance and the way to campus from Wayfinder's places ([Chapter 4.3](04c-housing.md)). [Proposed]
- The marketplace's suggested meeting points are Wayfinder places ([Chapter 4.2](04b-marketplace.md)). [Proposed]
- A digital twin would start from Wayfinder's places ([Chapter 4.5](04e-digital-twin.md)). [Proposed]

## Open questions

- Would VSU share its GIS inventory and the Citizen's Charter in a form Wayfinder can use, and who keeps office information current? (Q-49)
- What will OneVSU cover for students? (Q-18)
- Which places should not be mapped in detail? [Unresolved]
