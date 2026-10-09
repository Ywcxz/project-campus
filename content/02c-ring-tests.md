# Testing the Campus Ring

*A bench test the author can run alone, and a campus test VSU ICT could run later*

Every claim about what the campus ring would do is a hypothesis until something measures it. [Established] Some of it can only be measured on VSU's own network, which needs VSU ICT's agreement. [Established] The mechanisms themselves can be tested on a bench, by the author alone, with the author's own equipment, synthetic data, and no VSU systems or people: whether services keep working when the uplink is cut, whether one copy can serve many, and whether phones catch up after an outage without knocking the service over. [Proposed] (D-088)

> **In short.** Seven tests, each with its measure and its pass mark fixed before it runs. The bench can show that the design works and put numbers on it; it cannot show VSU's traffic, its crowded rooms, or whether anyone would use the result. Results are published with the scripts that produced them, so anyone can run them again. [Proposed]

## At a glance

| Question | Current answer |
| --- | --- |
| What does it test? | Whether the campus ring's mechanisms work: island mode, one copy serving many, notice delivery, posting while offline, catching up after an outage, data use, and running on battery. [Proposed] |
| What does it need? | A small server, a Wi-Fi access point, a few phones, and scripts that act like hundreds of phones, all the author's own, with synthetic content only. Nothing from VSU. [Proposed] (D-014) |
| What can it show? | That the design works in a lab, with numbers: requests, bytes, seconds, megabytes, and hours. [Proposed] |
| What can't it show? | VSU's traffic, Wi-Fi capacity in VSU's crowded rooms, how often VSU's links fail, or whether people would use any of it. Those need Stage 0's measurements with VSU ICT ([Chapter 2](02-intranet.md)) and the field research of [Chapter 8](08-evidence.md). [Established] |
| When? | After the concept note goes to OVPSAS, so it never delays the survey; when exactly is the owner's call. [Proposed] (D-088) |
| How could it fail? | A mechanism the design depends on fails even in a lab, which would narrow the direction before anyone at VSU is asked for anything. [Proposed] |

## The bench

```text
Scripted phones (hundreds) ──┐
Real phones (a few) ─────────┤
                     Wi-Fi access point
                             │
                        Bench server
     campus services in containers: sign-in · names
     notices · files · discussion · an outbox receiver
     an ordinary web cache in front of them
                             │
          Uplink that can be switched on, slowed, or cut
                             │
                     An "outside" server
       standing in for services hosted off campus
```

The server runs the same kind of open components Hop-It uses, in containers VSU could host later: Docker, PostgreSQL, and FastAPI, with an ordinary web cache in front. [Proposed] The uplink can be switched on, slowed to imitate a congested link, or cut. [Proposed] The scripted phones run on a computer on the same network, so they test the servers, the cache, and the sync, not the radio; how Wi-Fi copes with a crowded room is for the campus test and [Chapter 2.2](02b-campus-network.md). [Proposed] The content is synthetic: notices, files, and discussions written for the test, never VSU's data. [Established] (D-014)

## The tests

Each test's measure and pass mark would be fixed before it runs, as the survey's bars were (D-038), so a result cannot be argued into a pass afterwards. [Proposed] The pass marks below are starting proposals for the owner to confirm. [Proposed] (D-088)

| Test | What happens | Measure | Passes if |
| --- | --- | --- | --- |
| 1. Island | The uplink is cut for an hour | Which services still work: sign-in, name lookups, notices, files, and posting | All of them work for the whole hour, and public pages held by the cache stay readable |
| 2. One copy, many readers | 500 scripted phones ask for the same notice and the same 500 KB file within one minute | Requests that reach the server holding them, and bytes over the uplink | Fewer than 1% of the requests reach that server, about 5 of 500 |
| 3. Notice delivery | An official notice is posted while 500 phones are connected | Time until 95% of them have it | Within about a minute, the target D-034 sets for official notices |
| 4. Offline outbox | A phone with no connection posts a report and a question, is closed and reopened, then reconnects | Whether each item arrives, how many times, and in what order | Each arrives exactly once, in order, with the time it was written |
| 5. Catching up | 500 phones reconnect at once after the server has been out of reach for an hour | Server load, what arrives first, and time until every phone is current | Advisories reach every phone within a minute, every phone is current within ten, and the server keeps answering throughout |
| 6. Data per day | A scripted day of campus use: notices, discussion, and a few files | Megabytes per phone per day, against the same content loaded as ordinary web pages | A measurement, not a pass mark |
| 7. Battery | The server and the access point run on a battery pack | Hours of service | A measurement, set beside the four hours for which VSU's solar backup can keep its internet services running (E-043) |

Every row is a proposal. [Proposed] Test 2 checks request collapsing, which HTTP's caching standard allows (E-046); test 1 checks that the cache can keep serving its last copy when the origin is unreachable, as RFC 5861 allows; test 4 checks the phone's outbox, which local-first software depends on (Kleppmann et al., 2019); and test 5 checks the order and the random delays of [Chapter 2.1](02a-emergencies.md). [Proposed] Test 6 puts a number on the network's "text first" promise ([Chapter 3.2](03b-network-design.md)), which the survey's answers on spending (Q-28) can then be set against. [Proposed]

Each test can also be shown as a scene on the documentary site: the uplink cut at ten in the morning on a class day, a suspension announced by 4:30 a.m. and read by thousands, a report written in a dormitory with no signal, and the morning the link comes back after a typhoon. [Proposed]

## What the results would change

- If tests 1 to 5 pass, the mechanisms hold in a lab, and the question moves to whether VSU's traffic and outages justify them, which is Stage 0's measurement with VSU ICT. [Proposed]
- If test 1 fails because sign-in, name lookups, or certificates need the internet, the design solves that before anything else. [Proposed]
- If test 2 or test 5 fails, the cache or the sync design changes before anything is built on it. [Proposed]
- If test 6 shows that a day of campus use costs little data, the case for light use from afar ([Chapter 2](02-intranet.md)) gains a number; if it costs a lot, that case narrows. [Proposed]

## Publishing the results

Each result enters [Chapter 8](08-evidence.md) as an E- row, with the scripts, the settings, and the raw numbers published so that anyone can run the test again. [Proposed] Until someone else does, a result is a primary account no one has checked independently, which Chapter 8's rubric rates Medium. [Established] A bench result says what happened on the bench, and is never presented as a result for VSU. [Proposed]

## The campus test, later

On VSU's own network, the same tests would run with VSU ICT's agreement and a small group of volunteers, alongside Stage 0's measurements of traffic, outages, and hosting. [Proposed] That would be permission to prototype on the ladder of [Chapter 12](12-roadmap.md). [Established] It would need a consent text, a privacy notice, and review by VSU's data protection officer before anyone takes part. [Proposed] Nothing here is asked of VSU before the concept note's two asks. [Established] (D-083)

## Student research

VSU named networking research and experimentation among the aims of its IPv6 work in 2024. [Established] (E-044) The bench test, the campus test, and Stage 0's measurements are the kind of projects students in VSU's computing and engineering programs could take on, if their faculty want them. [Proposed] A faculty member's interest would be one step on the ladder, not collaboration. [Established] (D-029)

## Open questions

- What pass marks should the tests use? (D-088)
- Should the bench run on Hop-It's stack, or test the open-source parts the network might compose? (Q-33)
- Which faculty, if any, would want parts of this as student research?

[Unresolved]

## Sources

Checked on 9 October 2026. The source type follows each entry ([Chapter 9](09-governance.md)).

- IETF. [RFC 9111: HTTP Caching](https://rfc-editor.org/rfc/rfc9111.html), June 2022, Section 4; [RFC 5861: HTTP Cache-Control Extensions for Stale Content](https://rfc-editor.org/rfc/rfc5861.html), May 2010, Section 4. External, standards.
- Brooker, M. [Exponential Backoff And Jitter](https://aws.amazon.com/blogs//architecture/exponential-backoff-and-jitter/), AWS Architecture Blog, 4 March 2015. External, vendor.
- Visayas State University. [VSU is first university in Eastern Visayas to become IPv6 ready](https://www.vsu.edu.ph/articles/news/2534-vsu-is-first-university-in-eastern-visayas-to-become-ipv6-ready), 15 May 2024; [VSU installs hybrid solar power system to strengthen ICT resilience](https://www.vsu.edu.ph/articles/news/3007-vsu-installs-hybrid-solar-power-system-to-strengthen-ict-resilience), 30 June 2026. Official.
- Kleppmann, M., Wiggins, A., van Hardenberg, P., and McGranaghan, M. (2019). Local-first software: you own your data, in spite of the cloud. *Onward! 2019*, 154–178. [doi:10.1145/3359591.3359737](https://doi.org/10.1145/3359591.3359737). Scholarly.
