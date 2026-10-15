# Hop-It

*Scheduled, pooled campus delivery, a later module of the network*

Hop-It is a campus delivery experiment in which customers accept a scheduled delivery window so that orders can be pooled into shared runs. It was planned as the first CAMPUS product and the proof that the project can ship. Since 15 October 2026 it is a later module of the network instead, and a small prototype of the network is the first build. [Established] (D-098, D-099) Its specification is kept for when it is taken up. [Established] Two documents are its sources of truth: the Alpha PRD v1.0 (28 September 2026), which controls, and the Functional Specification v1.0 (27 September 2026). This chapter summarizes them and never overrides them. [Established] (D-027)

## Where the idea came from

The idea starts from VSU's layout. The Main Campus has an upper and a lower campus. Some lower-campus dorms are roughly a five-minute walk from the VSU market, the fast food center is far from parts of upper campus even by motorcycle, and busy students, faculty, and staff often have no one to send. [Unresolved] These are the author's observations as an alumnus, not measurements.

The name comes from the Bisaya *hapit*, as in *magpahapit ko sa tindahan*: asking someone to drop by the store for you on their way. [Established]

## At a glance

| Question | Current answer |
| --- | --- |
| What problem? | On-demand delivery treats every order as a separate urgent trip, so scattered demand duplicates pickup and delivery effort. [Proposed] |
| Who needs it? | Customers on campus (students, faculty, staff), participating vendors, and riders, with Operations running dispatch. [Proposed] |
| What evidence? | The design draws on last-mile delivery research. There is no local demand estimate, field study, or willingness-to-pay data yet. [Established] |
| Relation to existing systems? | Its PRD needs nothing from VSU: no student-system data and no assumed VSU integration. [Established] How it would use the network's membership, as a later module, is open. [Unresolved] (D-098) Students have built delivery services of their own, by the author's account; how they work is not known ([Chapter 10](10-related-work.md)). [Unresolved] |
| Stage? | A later module of the network. [Established] (D-098) When it is taken up: an Alpha with controlled participants, after a synthetic rehearsal. [Established] (PRD §18.2) |
| Privacy, governance, and cost? | It collects only participant name and phone, a username and password for sign-in (D-091), delivery location, and fulfillment evidence, and handles no payments. Retention, consent, privacy notice, and incident handling need approval before real users. [Established] Passwords would be kept only in a form that cannot be read back. [Proposed] |
| How could it be disproved? | Compatible orders turn out too rare to pool, or pooled runs cut effort but break the guardrails on lateness, cancellations, failures, or acceptability. A disproved hypothesis is a valid Alpha result. [Established] |

## The hypothesis

For comparable completed orders, scheduled bundled delivery will reduce distance, rider time, and operational cost per order compared with individual delivery, without breaking agreed guardrails on lateness, cancellations, failures, or participant acceptability. [Proposed] The PRD labels this a hypothesis to measure, never to assume.

```text
scheduled flexibility → compatible demand → human-confirmed bundle
→ shared delivery run → lower effort per completed order
→ service outcomes checked against guardrails
```

The primary outcome is delivery effort per completed order, reported separately for individual and bundled cohorts. No screen or report may claim "savings" from modeled values, and every number is labelled estimated or actual. [Established]

## How the Alpha works

Four roles take part: customer, vendor user, rider, and Admin/Operations, which does human dispatch. Customers choose among three delivery modes:

| Mode | Promise to the customer | Role in the experiment |
| --- | --- | --- |
| Scheduled | Delivery within the chosen window | Treatment: may be pooled |
| Individual | Standalone delivery within its window | Control baseline |
| Priority | Earliest practical delivery | Urgent exception, reported separately |

A customer orders from one vendor, picks a designated campus location and a window, and tracks the order. The vendor accepts, prepares, and marks it ready, and ready orders enter a pool. Operations checks which orders can share a run, confirms a batch, and offers it to a rider. The rider accepts, which freezes the run, then completes the stops in order. Software assists, but a person confirms every dispatch decision. [Established]

Starting defaults, all configurable: 30-minute windows, 30-minute lead time, and at most two orders per run. [Proposed]

## Left out of Alpha on purpose

Payments and wallets; maps, routing, and live traffic; automatic dispatch, AI, and forecasting; open vendor onboarding; full SMS, email, or push messaging; and any CAMPUS sign-on or VSU data. [Established] (PRD §5.2)

The build is a modular monolith: a mobile-first React and TypeScript PWA, a FastAPI API, PostgreSQL, a simple worker, and Docker. [Established] (PRD §5.3) The PRD assumed an existing authentication and participant-management foundation, but no Hop-It code or repository exists yet, so the Alpha builds its sign-in and participant management from the start. [Established] (C-07) The owner has since decided that the Alpha's participants sign in with a username and password checked against Hop-It's own database, in place of the PRD's one-time codes; the PRD and the Functional Specification are to be revised to match. [Established] (D-091)

## Why it no longer comes first

- Its reasons to come first, that it can be built without any VSU system or data and earns credibility through working software, now serve the network prototype, which shows OVPSAS the very thing CAMPUS proposes. [Established] (D-099)
- Students have built delivery services of their own, by the author's account, so delivery is a weaker proof of what CAMPUS can do than the network itself. [Proposed] ([Chapter 10](10-related-work.md))
- Its results would still say nothing about the social/academic network. The two test different hypotheses. [Established]
- Its PRD, its specification, and the decisions made for it (D-091, D-092, D-097) stay in force for when it is taken up. [Established] (D-098)

## Independent of VSU systems, not of VSU

A real-user Alpha on campus still touches the university: delivery locations, vendors in the VSU market, rider access, participant recruitment and consent, and data governance. The PRD itself lists these as needing approval before real users. [Established] (PRD §20) On the milestone ladder in [Chapter 12](12-roadmap.md), running Hop-It with real participants on campus is likely a permission-to-prototype step, and should be treated as one. [Proposed] Hop-It is not run as a business in its Alpha: customers and vendors pay no fees in the first campus test. Any later paid operation would be a separate decision, recorded in the register, that needs VSU's permission, and CAMPUS itself stays non-commercial. [Established] (D-097, D-021)

## Decisions still open before real users

Pilot area and zones; operating hours and slot capacity; window length and the priority promise; who may ride, and on what safety, insurance, and liability terms (Q-07); capacity and restricted items; rider payouts and cost inputs; who covers the test's costs, including riders' pay (Q-56); how payment for the food happens outside the platform; recruitment and consent; the notification provider; retention, privacy notice, and incident process; and the success and guardrail thresholds. [Unresolved] (PRD §20; Spec §17)

Settled since the PRD: sign-in uses a username and password (D-091), and the first test on campus uses selected participants (faculty, staff, students, riders, and vendors), charges customers and vendors no fees, and pays or otherwise rewards riders. [Established] (D-092) With no fees, the test measures delivery effort per order and whether people accept waiting, not what they would pay. [Proposed]

## Road to a decision

```text
PRD → runnable Alpha slices → synthetic rehearsal → individual baseline
→ controlled bundled cohort → evidence report → iterate, expand, or stop
```

[Established] (PRD §22.2)

## Sources

- Agatz, N., Campbell, A., Fleischmann, M., and Savelsbergh, M. (2011). Time Slot Management in Attended Home Delivery. *Transportation Science*, 45(3), 435–449. [doi:10.1287/trsc.1100.0346](https://doi.org/10.1287/trsc.1100.0346)
- Taniguchi, E., Thompson, R. G., and Yamada, T. (2016). New Opportunities and Challenges for City Logistics. *Transportation Research Procedia*, 12, 5–13. [doi:10.1016/j.trpro.2016.02.004](https://doi.org/10.1016/j.trpro.2016.02.004). The Hop-It PRD credits this paper to Savelsbergh and Van Woensel (C-03).
- Hop-It Alpha PRD v1.0 and Functional Specification v1.0, not yet published in this repository. [Unresolved]
