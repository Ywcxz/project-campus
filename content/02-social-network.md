# The Social/Academic Network

*A campus community space that VSU designs and governs*

The centerpiece proposal is VSU's own alternative to Facebook for campus life: a network built for an academic institution, where students, faculty, and staff can do what they now do on Facebook in a form designed for the university. [Established] (D-035) Its policies, interface, structure, feed, privacy, moderation, and communities are shaped and governed for VSU, and its purpose is to connect relevant information to the right people. It leads the first pitch, to OVPSAS. Nothing about it has been approved, built, or tested. [Established]

## At a glance

| Question | Current answer |
| --- | --- |
| What problem? | Reaching the right office or person can take several visits before a conversation even starts. Students take their questions to unofficial Facebook groups instead, where other students answer and anonymity means no one answers for a wrong reply. And there is no easy place for students, faculty, and staff to interact across roles. [Unresolved] These come from the author's observations and need field evidence. |
| Who needs it? | Students first; then faculty and staff, the offices that answer students, and student organizations. [Proposed] |
| What evidence? | None from the field yet. A research plan with an interview guide and a survey draft exists but has not been run. [Established] |
| Relation to existing systems? | It is meant to replace Facebook for campus life, not VSU's official systems. [Established] (D-035) How it relates to official channels and any DIGITS components, such as OneVSU Portal and Mobile, is VSU's decision. [Unresolved] VSU already runs related systems, including a document request tracker, a helpdesk, and staff chat, and the network should hand off to them rather than duplicate them ([Chapter 9](09-related-work.md)). [Proposed] |
| Stage? | Centerpiece proposal. Its first version is not defined, and research comes before any build. [Established] |
| Privacy, governance, and cost? | The highest of any CAMPUS product: identity, moderation, marketplace disputes, message privacy, data retention, hosting, and someone at VSU to run it. [Proposed] |
| How could it be disproved? | Field research finds students can already reach offices and get reliable answers, offices won't answer on the network, a pilot group drifts back to Facebook within weeks, or VSU cannot or will not govern it. [Proposed] |

## What it won't have

- No ads, reels, or stories. [Established] (D-035)
- No feed built to keep people scrolling. [Established] (D-035)
- What people see is ordered by relevance to their role, courses, and communities rather than by engagement. How that ordering works is not designed yet. [Proposed]

## Where it must win first

The vision covers any purpose students, faculty, and staff have, but a first version cannot win every use case at once, and the principles allow no feature without a named reason. The problems above point to three use cases where the network has to beat Facebook first. [Proposed]

1. **Reaching the right person.** A student's question gets to the office or staff member who can answer it, without several visits.
2. **Answers people can trust.** Office replies are marked official, and other answers carry a name and a role, so a wrong answer has an owner.
3. **Talking across roles.** Students, faculty, and staff reach each other in one place, under rules suited to each role.

Each is a hypothesis for field research before it becomes a feature. [Chapter 2.1](02a-use-cases.md) widens the list to 29 candidate use cases.

## What it would include

- **Groups and discussions** for colleges, offices, organizations, and shared interests, each attached to the real campus entity it belongs to.
- **Official channels** where offices post notices that are visibly marked as official.
- **Real-time chat** for groups and individuals.
- **Student services and a marketplace** for listings between members of the community.
- **Profiles, events, and search** across people, groups, places, and posts, limited to what each person is allowed to see.

All of it is [Proposed]. The first version would include only what the research shows is needed.

## What would make it VSU's

- **Labelled information.** Every post shows whether it is official, community knowledge, opinion, or unverified, so a notice from an office never looks like a rumor. [Proposed]
- **Rules written with the university.** Community rules and moderation come from VSU and its community, not from an advertising platform. [Proposed]
- **Membership tied to VSU.** Ideally through the university's own accounts, if VSU allows it. [Unresolved] VSU's e-learning site already offers sign-in with @vsu.edu.ph Google accounts ([Chapter 9](09-related-work.md)). [Established]
- **Real places.** Groups and posts can attach to actual buildings, dorms, and the VSU market. [Proposed]
- **Room to run on campus.** In the long run it could run on the campus intranet, so core functions work without mobile data ([Chapter 4](04-intranet.md)). [Proposed]

## Starting architecture: channels

The July 2026 version of this document organized all information into channels: a college, a course section, an office's official announcements, a marketplace category, or one student organization. People subscribe to the channels that matter to them, and each channel syncs at a speed suited to its content. Official notices arrive within about a minute, discussions and listings sync on a slower cycle, and archives load only when someone opens them. Version 0.2 restores this as the network's starting architecture, which the real-time chat question (Q-04) can still revise. [Established] (D-034)

The channel model replaced an earlier "offline platform" pitch, which had met a fair objection: most students already have some internet access. What survived was a domain model shaped like the university, not a claim about connectivity. [Established]

## How it grew from v0.1

v0.1 already put a community and knowledge layer (profiles, organization pages, discussions, events) at the foundation of its first build, and it ruled out an unrestricted university social network (v0.1 §7.2). Version 0.2 keeps that limit, since the network is bounded and governed. It adds three things v0.1 did not have: real-time chat, a marketplace, and the explicit aim of replacing Facebook for campus life (D-035). Those three carry most of the moderation and privacy load, so each needs its own evidence. [Established] (D-023)

## Hard questions

- **Why would people move?** Everyone is already on Facebook, it is free, and it is familiar. The network wins only by doing the three things above clearly better. [Unresolved]
- **Accountability or safety to speak?** Anonymity in unofficial groups is why a wrong answer carries no consequence. It is also why students dare to raise concerns. A network where every post carries a verified name could silence the criticism it promises to protect, so the design needs both. The direction is set: participation is identified by default, and some categories or sections may let members take part anonymously or under a pseudonym. [Established] (D-046) Dcard's verified-but-unnamed posting is the closest tested precedent ([Chapter 9](09-related-work.md)). [Established] What is open is which sections, and anonymous to whom: on a network VSU runs, a student criticizing VSU needs protection from the institution as well as from other members, so who may reveal an identity, and through what process, decides whether the anonymous sections feel safe. [Unresolved] (Q-16)
- **Will offices answer?** The gap between students and the university is partly organizational. The network closes it only if offices commit to respond, which makes office responsiveness, not software, the real ask of the pitch. [Unresolved] (Q-17)
- **Real-time chat or tiered sync?** The channel model deliberately avoided the always-on infrastructure that instant messaging needs. Real-time chat brings that cost back. [Unresolved]
- **Who moderates?** Moderation needs people, rules, appeals, and an owner inside VSU. [Unresolved]
- **Marketplace risks.** Scams, prohibited items, and disputes between buyers and sellers. [Unresolved]
- **Minors.** Some incoming students may be under 18, and the rules have to account for them. [Unresolved]
- **Privacy law.** The Data Privacy Act of 2012 (Republic Act No. 10173) applies to the personal data involved, and its specific requirements need review before any real users. [Unresolved]

## How it would be tested before it is built

1. **Field research.** Interviews and a survey on how students, faculty, staff, and offices use Facebook and official channels today, starting with the three use cases above, alongside a manual study of public VSU-related Facebook pages and groups ([Chapter 7.1](07a-facebook-study.md)).
2. **Problem synthesis.** Decide whether the problem is real, for whom, and how serious it is. Stop or narrow if it isn't.
3. **A bounded first version, if justified.** One community, for example a college or a set of organizations, with consent, clear rules, and an exit plan. [Proposed]
4. **Gate.** Continue only if people choose it over Facebook for the tasks it targets.
