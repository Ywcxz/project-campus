# The Social/Academic Network

*A campus community space that VSU designs and governs*

The centerpiece proposal is a community space for VSU, designed by the university and governed by its values: discussions, groups, real-time chat, and student services including a marketplace, offered as an alternative to Facebook for campus life. [Proposed] It leads the first pitch, to OVPSAS. Nothing about it has been approved, built, or tested. [Established]

## At a glance

| Question | Current answer |
| --- | --- |
| What problem? | Much of campus life is assumed to run on Facebook groups, pages, and group chats that VSU neither designed nor governs, where official notices, community knowledge, and rumor look alike. [Unresolved] |
| Who needs it? | Students first; then student organizations, faculty and staff, and the offices that publish official information. [Proposed] |
| What evidence? | None from the field yet. A research plan with an interview guide and a survey draft exists but has not been run. [Established] |
| Relation to existing systems? | It would sit alongside official channels and any DIGITS components such as OneVSU Portal and Mobile, not replace them. How they relate is VSU's decision. It competes for attention with Facebook. [Unresolved] |
| Stage? | Centerpiece proposal. Its first version is not defined, and research comes before any build. [Established] |
| Privacy, governance, and cost? | The highest of any CAMPUS product: identity, moderation, marketplace disputes, message privacy, data retention, hosting, and someone at VSU to run it. [Proposed] |
| How could it be disproved? | Field research finds the current mix of channels isn't a real problem, a pilot group stops using it within weeks, or VSU cannot or will not govern it. [Proposed] |

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
- **Membership tied to VSU.** Ideally through the university's own accounts, if VSU allows it. [Unresolved]
- **Real places.** Groups and posts can attach to actual buildings, dorms, and the VSU market. [Proposed]
- **Room to run on campus.** In the long run it could run on the campus intranet, so core functions work without mobile data ([Chapter 4](04-intranet.md)). [Proposed]

## Starting architecture: channels

The July 2026 version of this document organized all information into channels: a college, a course section, an office's official announcements, a marketplace category, or one student organization. People subscribe to the channels that matter to them, and each channel syncs at a speed suited to its content. Official notices arrive within about a minute, discussions and listings sync on a slower cycle, and archives load only when someone opens them. Version 0.2 restores this as the network's starting architecture. [Proposed] (D-034)

The channel model replaced an earlier "offline platform" pitch, which had met a fair objection: most students already have some internet access. What survived was a domain model shaped like the university, not a claim about connectivity. [Established]

## How it grew from v0.1

v0.1 already put a community and knowledge layer (profiles, organization pages, discussions, events) at the foundation of its first build, and it ruled out an unrestricted university social network (v0.1 §7.2). Version 0.2 keeps that limit, since the network is bounded and governed. It adds three things v0.1 did not have: real-time chat, a marketplace, and the explicit aim of being an alternative to Facebook. Those three carry most of the moderation and privacy load, so each needs its own evidence. [Established] (D-023)

## Hard questions

- **Why would anyone use it alongside Facebook?** People are already on Facebook, it is free, and it is familiar. The network has to do something Facebook does badly on campus, such as separating official notices from rumor. [Unresolved]
- **Does "alternative to Facebook" break principle 3?** "Compete with nothing" sits uneasily with replacing a platform. One reading is to complement VSU's systems and compete only where the campus community is poorly served. That call belongs to the project owner. [Unresolved]
- **Real-time chat or tiered sync?** The channel model deliberately avoided the always-on infrastructure that instant messaging needs. Real-time chat brings that cost back. [Unresolved]
- **Who moderates?** Moderation needs people, rules, appeals, and an owner inside VSU. [Unresolved]
- **Can people criticize the university there?** A university-run space can chill speech, so the rules have to protect criticism explicitly or students won't trust it. [Unresolved]
- **Marketplace risks.** Scams, prohibited items, and disputes between buyers and sellers. [Unresolved]
- **Minors.** Some incoming students may be under 18, and the rules have to account for them. [Unresolved]
- **Privacy law.** The Data Privacy Act of 2012 (Republic Act No. 10173) applies to the personal data involved, and its specific requirements need review before any real users. [Unresolved]
- **Ads and feeds.** Whether there will be advertising or algorithmic feeds has not been decided. [Unresolved]

## How it would be tested before it is built

1. **Field research.** Interviews and a survey on how students, organizations, and offices use Facebook and official channels today.
2. **Problem synthesis.** Decide whether the problem is real, for whom, and how serious it is. Stop or narrow if it isn't.
3. **A bounded first version, if justified.** One community, for example a college or a set of organizations, with consent, clear rules, and an exit plan. [Proposed]
4. **Gate.** Continue only if people keep using it alongside Facebook for the tasks it targets.
