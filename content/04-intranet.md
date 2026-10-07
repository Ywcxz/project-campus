# Campus Intranet and Local-First Infrastructure

*A long-term backbone, offered as a direction for VSU ICT and DIGITS*

In the long run, CAMPUS points toward campus-controlled infrastructure: essential services that keep working inside VSU's own network and sync outward when connectivity allows. [Proposed] This is a direction offered to VSU ICT and the DIGITS program, not a request. CAMPUS does not ask VSU to build, fund, or host anything here. [Established] (D-022)

## At a glance

| Question | Current answer |
| --- | --- |
| What problem? | Campus services that depend on outside platforms and the internet stall when connectivity does, and their data sits outside VSU's control. [Unresolved] |
| Who needs it? | Students with limited mobile data, offices that need continuity, and VSU ICT as the operator. [Proposed] |
| What evidence? | None yet on VSU's network, hosting, or connectivity patterns. [Unresolved] |
| Relation to existing systems? | It depends entirely on VSU ICT's network, hosting, and security, and on DIGITS plans this document does not assume. [Established] |
| Stage? | Research direction only. A small local-first experiment may fit inside prototyping, but a campus deployment is not on the table. [Established] (v0.1 D-012) |
| Privacy, governance, and cost? | The heaviest of any direction: hardware, maintenance, security, synchronization, monitoring, and staff, all borne by VSU if it is ever adopted. [Proposed] |
| How could it be disproved? | Connectivity proves not to be a barrier for the people it would serve, operating cost outweighs the benefit, or DIGITS already covers the need. [Proposed] |

## The idea, corrected

The idea began as an intranet students could use without mobile data. The July 2026 version of this document reframed it after a fair objection: most students already have some internet access. The lasting value is not offline access for its own sake but an architecture organized around how campus information behaves. [Established]

That architecture has four layers: an interface installed once, data held as small independent objects such as posts and notices, a sync layer that sends only what changed, and storage both on campus servers and on each device. Sync speeds are tiered. Official notices arrive within about a minute, discussions and listings follow on a slower cycle, and archives load on demand. This is the network's starting architecture. [Established] (D-034) None of these techniques is new; what CAMPUS adds is a domain model shaped like the university. [Proposed]

```text
outside services and the internet
        ↑ sync when available
campus layer: VSU-controlled servers and network
        ↓ serves
people · offices · services · data on the physical campus
```

## Why it is a direction, not an ask

VSU ICT owns the network, and DIGITS is VSU's own roadmap. Whether CAMPUS relates to DIGITS at all is for VSU to decide ([Chapter 6](06-vsu-context.md)). This chapter's honest job is narrower: to show where CAMPUS products could run if VSU ever chose such a backbone, and to keep today's work from blocking that path. [Proposed]

In practice, that means building products that could move to campus servers later. Hop-It is built from components (Docker, PostgreSQL, FastAPI) that run on hardware VSU could own. [Proposed]

## Open questions

- Which functions genuinely benefit from running locally?
- What data needs to sync, and how are conflicts resolved?
- How does identity work when the campus is cut off from the internet?
- What infrastructure is realistic for VSU, and who would operate it?
- Is the added complexity worth it?

[Unresolved] (v0.1 §7.7)
