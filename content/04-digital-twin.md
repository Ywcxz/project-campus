# Digital Twin

*A living model of the campus, and the university's long-term aspiration*

A digital twin is an interactive model of the campus: its buildings, rooms, roads, and utilities, the offices in them and what they handle, and what is happening across the grounds. It has its own chapter beside the network because it could become a project as large as the network itself. [Established] (D-081) The author expects it is what VSU would want most from a digital campus in the long run; whether VSU shares that aim is not known. [Unresolved] It keeps the conditions that held it back as a later direction: it needs spatial data, operational integration, and infrastructure far beyond any first product. [Established] (D-077)

The Main Campus has 61.6 hectares of grounds and 188 buildings ([Chapter 2](02-intranet.md)). [Established] The twin's first, smallest step is something people on those grounds could use right away: finding places, and knowing which office handles what. [Proposed] (D-079)

## At a glance

| Question | Current answer |
| --- | --- |
| What problem? | Facilities, utilities, and space information sit in separate places, so planning, maintenance, and emergency response can't see the campus as a whole. [Unresolved] Day to day, new students, parents, and visitors can't easily find buildings and offices, or know which office handles a request, so they ask around and make extra trips. [Unresolved] |
| Who needs it? | Facilities and planning staff, energy managers, and the disaster risk management office for the full model; students, visitors, and Hop-It's riders for its first step. [Proposed] |
| What evidence? | A light review of campus twins at Glasgow and Manchester ([Chapter 10](10-related-work.md)). [Established] Nothing at VSU yet; interviews could ask how first-year students learned their way around and how many visits a typical request took. [Unresolved] |
| Relation to existing systems? | VSU has completed an inventory of roads, water, drainage, electrical systems, and GIS, and DIGITS envisions sensors for energy, water, and facilities. [Established] Its Citizen's Charter 2026 lists services, steps, and processing times, and its document tracker and helpdesk track requests ([Chapter 10](10-related-work.md)). [Established] The twin would point to these and hand people into them, never restate them as its own authority. [Proposed] Any twin would be VSU's own, built on VSU's data; CAMPUS would not own it. [Proposed] OneVSU may cover office directories too. [Unresolved] (Q-18) An unofficial, student-led campus map for VSU describes building search, facility details, events, and walking directions. [Established] (E-052) How well it works and how much it is used are not known, and whether VSU runs or plans a map or directions service of its own has not been confirmed. [Unresolved] (Q-54) The first step is proposed only once systems discovery shows it would not duplicate one. [Proposed] |
| Stage? | The full twin is research only. [Proposed] A full twin is outside any first build. [Established] (v0.1 D-008) Its first step, places and the office guide, needs accurate information and an owner rather than new infrastructure. [Proposed] |
| Privacy, governance, and cost? | The highest infrastructure cost of anything in this document. [Proposed] It maps places and offices, not people; occupancy is counted, never tracked by person (D-089); and utility maps and sensitive rooms, such as laboratories and the data center, are shown without detail. [Proposed] Keeping it current is a standing cost: every entry needs an owner and a date it was last confirmed. [Proposed] |
| How could it be disproved? | VSU's GIS and facility systems already meet planning needs; people find places and offices without trouble; no office wants to maintain a twin; or its cost outweighs what VSU would gain. [Proposed] |

## A path, not a project

Each step stands on its own, and none commits VSU to the next. [Proposed]

1. **Places and the way there.** Buildings, rooms, offices, laboratories, dormitories, the VSU Market, gates, and landmarks, with the names people actually use, and walking directions between them with landmarks rather than only a line on a map. Stored on the phone, so it works with weak signal ([Chapter 2](02-intranet.md)). [Proposed] These are the same places the network uses: a building or landmark that has a place on the network has its location here, and the twin and the network keep one list of places rather than two ([Chapter 3.2](03b-network-design.md)). [Proposed] (D-144)
2. **Where to go for what.** A person starts from a question, such as replacing a lost ID or requesting a transcript, and gets the office, its room and the way there, its hours, what to bring, and the official system to use if there is one, each citing the Citizen's Charter or the office with the date it was last confirmed. [Proposed] The network's "reach the right office" use case would point here ([Chapter 3.1](03a-use-cases.md)). [Proposed]
3. **VSU's spatial data.** The GIS inventory's layers, if VSU shares them. [Unresolved] (Q-49)
4. **Status offices already keep.** Room bookings, outages, and maintenance, linked where VSU permits. [Proposed]
5. **Sensors.** Energy, water, and occupancy readings carried on the campus network's later stage ([Chapter 2](02-intranet.md)). [Deferred] VSU named campus-wide environmental monitoring and connected lab equipment among the aims of its IPv6 work in 2024. [Established] (E-044)

The network's later modules build on the early steps: Housing shows distance and the way to campus from the twin's places, and the marketplace's meeting points are places in it ([Chapter 3](03-social-network.md)). [Proposed]

## What waits

Three-dimensional models, simulation, and live sensor dashboards wait until the earlier steps show an office would use them. [Deferred] In the light review, campus twins serve estates and energy teams first, and the student-facing use is closer to a guide to places, which is why that guide comes first here. [Proposed]

### The spatial interface

The author's longer-term idea is a way into the network itself: browsing CAMPUS by place as well as by list, so that a building shows what is posted in its own place and in the places located there, such as notices, questions, and events. [Proposed] (P-05, P-13) The familiar list would remain for anyone who prefers it. [Proposed]

It stays research only, behind the first step. [Established] (D-093) It needs step 1's places and the network's places with their locations before it has anything to show, it would cost far more to build and keep current than a list, and nothing yet shows that finding things by place beats a list or search for campus tasks. [Proposed] It maps places and what is posted about them, never people. [Established] (D-093)

It would be disproved if people in a test find what they need faster, and with fewer mistakes, in a list than on the map, or if they use the map only in their first weeks on campus. [Proposed]

## Open questions

- Would VSU share its GIS inventory and the Citizen's Charter in a usable form, and who would keep office information current? (Q-49)
- Does VSU itself aim for a digital twin, and which office would own one? [Unresolved]
- What will OneVSU cover for students? (Q-18)
- Does VSU, or do its students, already run or plan a campus map or directions service that the first step should build on instead? (Q-54)
- Would browsing the network by place help people find things faster than a list or search? [Unresolved]
- Which places should not be mapped in detail? [Unresolved]
