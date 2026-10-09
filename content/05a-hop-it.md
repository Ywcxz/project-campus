# Hop-It

*Scheduled, pooled campus delivery, built independently as a proof of capability*

Hop-It is the first CAMPUS product: a campus delivery experiment in which customers accept a scheduled delivery window so that orders can be pooled into shared runs. It is built independently of university systems, as working proof that the project can ship. [Established] Two documents are its sources of truth: the Alpha PRD v1.0 (28 September 2026), which controls, and the Functional Specification v1.0 (27 September 2026). This chapter summarizes them and never overrides them. [Established] (D-027)

## Where the idea came from

The idea starts from VSU's layout. The Main Campus has an upper and a lower campus. Some lower-campus dorms are roughly a five-minute walk from the VSU market, the fast food center is far from parts of upper campus even by motorcycle, and busy students, faculty, and staff often have no one to send. [Unresolved] These are the author's observations as an alumnus, not measurements.

The name comes from the Bisaya *hapit*, as in *magpahapit ko sa tindahan*: asking someone to drop by the store for you on their way. [Established]

## At a glance

| Question | Current answer |
| --- | --- |
| What problem? | On-demand delivery treats every order as a separate urgent trip, so scattered demand duplicates pickup and delivery effort. [Proposed] |
| Who needs it? | Customers on campus (students, faculty, staff), participating vendors, and riders, with Operations running dispatch. [Proposed] |
| What evidence? | The design draws on last-mile delivery research. There is no local demand estimate, field study, or willingness-to-pay data yet. [Established] |
| Relation to existing systems? | None by design: no CAMPUS sign-on, no student-system data, and no assumed VSU integration. It is not automatically a CAMPUS subsystem. [Established] |
| Stage? | MVP: an Alpha with controlled participants, after a synthetic rehearsal. [Established] |
| Privacy, governance, and cost? | It collects only participant name and phone, delivery location, and fulfillment evidence, and handles no payments. Retention, consent, privacy notice, and incident handling need approval before real users. [Established] |
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

The build is a modular monolith: a mobile-first React and TypeScript PWA, a FastAPI API, PostgreSQL, a simple worker, and Docker, on top of an existing authentication and participant-management foundation. [Established] (PRD §5.3)

## Why Hop-It comes first

- It can be built and tested without any VSU system or data, so it doesn't wait on institutional permission to start. [Established]
- It earns credibility the way this project intends to: working software and measured results, not claims. [Established]
- It exercises what the larger proposal needs, such as roles, permissions, audit trails, and honest metrics, on a small, bounded problem. [Proposed]
- Its results say nothing about the social/academic network. The two test different hypotheses. [Established]

## Independent of VSU systems, not of VSU

A real-user Alpha on campus still touches the university: delivery locations, vendors in the VSU market, rider access, participant recruitment and consent, and data governance. The PRD itself lists these as needing approval before real users. [Established] (PRD §20) On the milestone ladder in [Chapter 12](12-roadmap.md), running Hop-It with real participants on campus is likely a permission-to-prototype step, and should be treated as one. [Proposed]

## Decisions still open before real users

Pilot area and zones; operating hours and slot capacity; window length and the priority promise; capacity and restricted items; fees, payouts, and cost inputs; how payment happens outside the platform; recruitment and consent; the sign-in and notification providers; retention, privacy notice, and incident process; and the success and guardrail thresholds. [Unresolved] (PRD §20; Spec §17)

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
