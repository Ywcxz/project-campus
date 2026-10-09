# How the Network Would Work

*Members, communities, knowledge, and rules: a design to test before it is built*

This chapter turns the principles of [Chapter 3](03-social-network.md) into a working design: who can join, how the network is organized, who can see what, how questions find the people who know, how knowledge is kept and when it fades, how helpers are recognized, how notices, trade, and pseudonymous speech work, how the network is governed, and what runs underneath. Every part is a proposal for field research and a pilot to test, and the first version would include only what the evidence calls for. [Proposed]

> **In short.** Members sign in with VSU accounts and carry roles. They join communities that belong to real VSU units, places, organizations, and subjects, each with a named owner and with spaces for notices, questions, guides, events, and discussion. A question is routed to members who chose to help with its topic and to the office responsible, after the network has shown any answer that already exists. Knowledge is labelled, dated, and kept, while conversation fades on a schedule. Helping is recognized without public scores. Pseudonyms hide a member from other members but not from a reveal process that needs two keys. Moderators enforce rules written with the community, offices answer concerns, and neither does the other's job. Everything runs on open components VSU could host. [Proposed]

## The model at a glance

```text
Member ──holds──► Role      student · faculty · staff · office · organization
   │
   ├──joins──► Community ──belongs to──► a VSU unit, place, organization,
   │              │                      or subject, or a topic members start,
   │              │                      with one named owner
   │              └──has──► Space       notices · questions · guides · events
   │                           │        · discussion
   │                           └──holds──► Post   labelled: official · community
   │                                         │    knowledge · opinion · unverified
   │                                         │    · scholarly · external
   │                                         │    dated: current · updated
   │                                         │    · superseded · archived
   │                                         └──may hand off to──► a VSU system
   └──helps with──► Topic   chosen by the member; questions are routed by it
```

These are concepts to test, not a database schema. [Proposed] The model is relational from the first version, so that people, communities, knowledge, places, and events can be linked as they appear, while features that depend on those links, such as finding expertise across the whole university, come later. [Proposed] (D-075) It follows the channel model the network starts from (D-034) and the relational domains of [Chapter 1](01-campus.md). [Established]

## Members and roles

### Who can join

Membership would follow VSU accounts. Since 2023, VSU has given every student, faculty member, and employee a university Google account on the vsu.edu.ph domain, with more than 16,000 Google and Microsoft licenses ready across its five campuses and its Integrated High School that year. [Established] Signing in with those accounts would prove membership without a new password, if VSU allows it. [Unresolved] (Q-06) VSU already limits two student-facing services to its accounts: VSUEE offers Google sign-in with them, and WAIS is open only to VSU account holders. [Established]

Four details of VSU's accounts shape the design. [Proposed]

- **Timing.** Student accounts are issued after the late enrollment period. [Established] New students need another way in during their first weeks, such as a temporary pass tied to their enrollment, or a pilot has to start after accounts are issued. [Proposed] (Q-38)
- **Names.** Student accounts are named after school ID numbers by default. [Established] The network would show a name each member chooses and never display an ID number. [Proposed]
- **High school students.** Integrated High School students also hold VSU accounts. [Established] The pilot admits college members only. [Proposed] (D-069)
- **Graduation.** Accounts can be revoked on non-enrollment or graduation. [Established] Alumni would need a separate path, added later. [Proposed] (D-073, Q-45)

### Roles

| Role | Who | What it adds |
| --- | --- | --- |
| Student | Enrolled college students | Program and year, shown only if the member chooses |
| Faculty | Teaching and research staff | Department, consultation hours, and the topics they choose to help with |
| Staff | Non-teaching employees | Office |
| Office account | A shared account for an office, used by named staff | The only accounts that can post official notices; every post records which staff member made it |
| Organization account | A recognized organization, run by its officers | Survives each change of officers |
| Alumni, later | Graduates, verified separately | Mentoring and question sessions |
| Guest, later | Applicants and parents, by invitation or through a public section | Chosen public spaces only (D-073) |

Program and year are education details, which the Data Privacy Act counts as sensitive personal information; processing them needs the member's consent or another basis the Act allows. [Established] Showing them should be each member's choice. [Proposed] Where role details come from is open: VSU's records with VSU's permission, verification by units and organizations, or a member's own statement marked as unverified. [Unresolved] (Q-39)

## Communities: the network shaped like VSU

A community is the network's unit: a group of members around something real at VSU, with an owner, a membership rule, and its own spaces. Communities exist because the thing they serve exists, not because someone started a chat: the scholarships community exists because scholarships do, and it outlives every student who joins it. [Proposed] (D-062) VSU's 2025 case, in which a lost-and-found group's creator said he had been removed and the only visible administrator appeared to be a dummy account, shows what happens when a community belongs to whoever controls it ([Chapter 3](03-social-network.md)). [Established]

| Community type | Examples at VSU | Owner | Who joins | Who posts notices |
| --- | --- | --- | --- | --- |
| University offices | The President's office, OVPSAS, the registrar, the disaster risk management office | Each office, for its own space | Every member, automatically | Office accounts |
| Faculty and department | The ten Main Campus faculties and their departments | The faculty or department | Its students and staff | Its staff |
| Service | Scholarships, student housing, guidance and counseling, career and job placement | The office responsible | Anyone | The office |
| Subject | A subject taught across sections and batches, such as organic chemistry | Faculty who teach it, with student stewards | Anyone taking it or interested in it | Faculty |
| Organization | The 57 accredited organizations of 2022–23 | Officers, with their adviser | Members | Officers |
| Student council | The University Supreme Student Council and faculty councils | The council | Its constituents | The council |
| Residence | VSU's 21 student dormitories | Dormitory management, with residents | Residents | Management |
| Place | The VSU Market, the library | The office that manages the place | Anyone | The managing office |
| Topic | A crop, coastal research, GIS, photography | The members who start it | Anyone | Its owners |
| Marketplace, linked | Books, uniforms, gadgets, dormitory items, in the Marketplace product ([Chapter 4.2](04b-marketplace.md)) | The network's moderators | Verified members | Moderators |
| Concerns | Problems with services or facilities | The student council and OVPSAS, jointly | Students | The council |
| Hometown, later | Students from the same province or town | The members who start it | Anyone from there | Its owners |

The examples come from VSU's public pages. [Established] Which communities a pilot opens depends on the community it serves (Q-34). [Proposed]

### Spaces inside a community

Inside each community are spaces of different kinds, each with its own posting rights and sync speed. This is how the channel model of D-034 lives on: a notices space syncs within about a minute, and the rest on a slower cycle. [Proposed] A community opens only the spaces it needs, and a large one can divide a space by topic: the scholarships community could hold separate question spaces for CHED, DOST-SEI, local government, private, and university scholarships. [Proposed]

| Space | For | Who posts | Sync |
| --- | --- | --- | --- |
| Notices | Announcements, advisories, deadlines | The owner, or office accounts in university and service communities | Within about a minute |
| Questions | Questions and their answers | Members | Slower cycle |
| Guides | How-to knowledge that many people edit | Members, checked by the office concerned | Slower cycle |
| Events | Activities with a time and place, and their materials afterward | Owners and members | Slower cycle |
| Discussion | Open conversation, with lighter talk kept in its own space | Members | Slower cycle |
| Archive | Everything superseded or past | No one | Opened on demand |

Subject communities hold what outlasts a semester: questions, guides such as what seniors wish they had known before taking a subject, and pointers to the library. Course sections, materials, and grades stay in VSUEE. [Proposed] (D-064) Ratings and reviews of individual teachers are not proposed: faculty evaluation is sensitive and belongs to VSU ([Chapter 9](09-related-work.md)). [Proposed]

### Three rules that keep communities healthy

- **Structure follows VSU.** VSU replaced its colleges with faculties in January 2025, after its 2022–23 list of organizations was made. [Established] The list of units should come from VSU and change when VSU's structure does, not be kept by CAMPUS. [Proposed] (D-062)
- **Every community has an owner.** A community whose owner leaves without a successor is archived, readable but closed, so that it cannot drift into something else, as a lost-and-found group on Facebook did. [Proposed]
- **Communities and spaces open when people need them.** Research on starting online communities advises splitting spaces only after they become active, because many empty spaces make a community look dead. [Established] (Resnick, Konstan, and Chen, 2012) A pilot starts with few communities and adds them on demand. [Proposed]

## Who can see what

Connected does not mean public ([Chapter 8](08-governance.md)). [Established] Every space has one of five visibility levels, and the level is shown on the space. [Proposed]

| Level | Who sees it | For |
| --- | --- | --- |
| Members | Every verified member | Official notices, guides, open questions, events, and most of the marketplace |
| Community | Members of that community | An organization's internal matters, residence matters, and research groups |
| Private | The people in the conversation | Messages, consultations, and mentoring |
| Confidential | The VSU office that handles it, through its own process | Harassment, safeguarding, and formal complaints |
| Public, later | Anyone, including people without accounts | Guides and answers a community chooses to publish for applicants and parents (D-073) |

The confidential level is a door, not a desk. A report of sexual harassment goes to VSU's Anti-Sexual Harassment Office, which already receives complaints, and other formal complaints go to the office whose process covers them; the network runs no complaint process of its own. [Proposed] (D-064)

## Posts, labels, and the life of knowledge

### Types of post

| Type | For | Who can post | It ends when |
| --- | --- | --- | --- |
| Notice | Announcements, advisories, deadlines | Office accounts in official spaces; organizations and councils in their own | It expires, or is updated or withdrawn with its history shown |
| Question | Anything about campus life | Members | It is answered, confirmed by an office, or closed |
| Answer | Replying to a question | Members, under name and role, or a pseudonym where the section allows | It is confirmed, replaced, or marked outdated |
| Discussion | Open conversation | Members | It fades on the retention schedule (D-070) |
| Guide | How-to knowledge that many people edit | Members, checked by the office it concerns | It is superseded or archived |
| Event | Activities with a time and place | Organizations, offices, and members | It has happened, and its materials are kept |
| Listing | Items and services offered | Verified members | It is sold, withdrawn, or expired |
| Poll | A question put to a community | Community owners | It closes, and its results are kept |
| Report | A problem with a facility or service | Members | It is handed to the office or system that handles it |

### Labels

Every post carries one of the six information types of [Chapter 8](08-governance.md), set by who posted it and where, not chosen freely. [Proposed] (D-063)

- **Official:** only office accounts, only in their official spaces.
- **Community knowledge:** guides, and peer answers an office has confirmed.
- **Opinion:** reviews and personal views.
- **Unverified:** claims about official matters from anyone but the office concerned, such as a report that classes are suspended, until the office confirms or denies them.
- **Scholarly:** theses and papers, with their authorship kept.
- **External:** links to outside sources such as PAGASA bulletins.

Labels travel. A reshare or quote keeps the original's label and links back to it. [Proposed] Each official notice has a permanent page that shows whether it is current, and a share card that prints its short link, so a screenshot passed around anywhere can still be checked. [Proposed] A correction updates the same page with its history visible, instead of starting a new post that competes with the old one. [Proposed] H1 of the Facebook study measures how often notices are altered as they travel today, the baseline this design would be judged against. [Established] (D-053)

### Knowledge that knows its age

Notices, confirmed answers, and guides carry a state, the academic year they apply to, and, where one exists, the document they rest on, such as a Board of Regents resolution or a page of the Citizen's Charter. [Proposed] (D-063)

| State | Means | Shown as |
| --- | --- | --- |
| Current | In force for the academic year shown | The default |
| Updated | Changed since first posted | A note of what changed and when, with earlier versions kept |
| Superseded | Replaced by something newer | A banner linking to what replaced it |
| Archived | No longer in force | Kept for the record, and left out of search unless asked for |

Each guide is reviewed by its community at the start of each semester, and an answer confirmed for one academic year asks its office to confirm it again the next. [Proposed] A change of structure or rule flags every post that depends on it for review at once; scene 9 shows how the 2025 change from colleges to faculties would have played out. [Proposed]

### Answers someone stands behind

The patterns come from Stack Exchange's accepted answers and Piazza's instructor-endorsed answers ([Chapter 9](09-related-work.md)). [Established] Discourse, an open-source forum, already lets a topic's owner and staff mark a reply as the solution in chosen categories. [Established] On the network, members answer under a name and role, or a pseudonym where the section allows; an office confirms one answer or posts its own; and the confirmed answer is dated and kept, and new questions like it are pointed to it. [Proposed] A confirmation is only as good as the office behind it, which is why an office's commitment comes before any pilot. [Proposed] (D-068)

## Asking: routing questions to people who know

Most social platforms broadcast: a question goes to everyone in a group, and whoever happens to be online answers. The network routes. [Proposed] (D-071)

```text
a member writes a question
  ──► answers that already exist are shown first ──► found: done
  ──► the asker picks a topic and whom to ask:
      students · faculty · an office · alumni, later
  ──► it reaches a few members who chose that topic,
      and the community's question space
  ──► unanswered after a set time, or only an office can settle it?
      ──► it moves to the office responsible
  ──► the best answer is confirmed, dated, and kept
```

- **Existing answers first.** Before a question posts, the network shows answers that already exist, as Stack Overflow does when it closes an accidental duplicate with a link to the original; it keeps differently worded versions as signposts, because people phrase the same problem in different ways. [Established] Showing answers first spares helpers the fatigue of answering the same question every year. [Proposed]
- **Helpers who chose the topic.** Members opt in to help with topics, such as scholarships, a program, a dormitory, a subject, or a research area, and only questions on those topics reach them. [Proposed] Research on online communities found that members contributed more when reminded that their contributions were unique, and when given specific, challenging goals. [Established] (Ling et al., 2005) A question that reaches a few helpers, each told why it came to them, uses that finding; a question broadcast to everyone does the opposite. [Proposed]
- **Whom to ask.** The asker chooses whether answers should come from students, faculty, an office, or, later, alumni. A question about a scholarship requirement goes to the office as well as to students who have applied; a question about which electives seniors enjoyed goes to students. [Proposed]
- **Escalation.** A question unanswered after a set time, or one only an office can settle, moves to the office responsible, whose response time is part of its commitment (D-068). [Proposed]
- **Fair load.** No helper receives more than a set number of routed questions a week, routed questions rotate among helpers, and faculty receive questions only in the topics they opened and within their consultation norms. [Proposed]
- **Nothing inferred.** Routing uses only the topics members declare and the communities they join. The network never infers what someone knows from what they read, never scores posts to raise or lower their reach, and never ranks people. [Proposed] (D-061, D-071)

VSU already lists its graduate faculty by department, with each one's specialization and research interest. [Established] Faculty who choose to could bring those topics into the network, which would make "who in VSU knows about this?" answerable without building a separate expertise directory. [Proposed]

## Memory: what stays and what fades

The network remembers knowledge and lets conversation fade. [Proposed] (D-070)

| Kind | Examples | How long it is kept | Can its author remove their name? |
| --- | --- | --- | --- |
| Knowledge | Confirmed answers, guides, official notices, event records | As the network's memory, for as long as it is useful, with its state shown | Yes; the post stays, credited to the author's role, such as a 2026 graduate of the Faculty of Engineering |
| Conversation | Discussion, unconfirmed answers, comments | Archived after a set period, then deleted | The author can delete it at any time |
| Transactions | Marketplace listings, event sign-ups | Deleted soon after they close | Yes |
| Private | Messages and consultations | Deleted after a set period unless both sides keep them | Yes |
| Sensitive | Pseudonymous concerns, and anything handed to a VSU office | Under D-065 and the office's own process | Under those rules |

The periods are open. [Unresolved] (Q-43) The Data Privacy Act sets their limits: personal information may be kept only as long as the purpose it was collected for requires, and a member may have personal information blocked or removed when it is outdated, false, unlawfully obtained, or no longer necessary. [Established] A guide written by a student who later graduates is knowledge VSU has a reason to keep; her first-year question about a personal problem is not. [Proposed]

Who owns what members contribute is also open. Guides that many members edit need terms that let others keep editing them after their first author leaves, and that let VSU keep them if it takes the network over. [Unresolved] (Q-44)

### Seeding the memory

A memory starts empty, and an empty network looks dead. [Proposed] Before a pilot opens, its community would be seeded with two kinds of content. Official information is drawn from the Citizen's Charter, VSU's policies, and its service pages, labelled official and linked to its source. Guides are written in a short guide sprint by seniors, organization officers, and alumni who volunteer. [Proposed] Research on starting online communities recommends exactly this: content that is useful to one person before there is a crowd, and staff who contribute when members have not yet. [Established] (Resnick, Konstan, and Chen, 2012)

## Recognition without vanity

A knowledge community lives on its helpers, the seeders in the author's torrent analogy: when no one shares, everyone who asks gets nothing. [Proposed] The design question is how to recognize helpers without turning help into a contest. [Proposed] (D-072)

- **No public scores.** No reputation points, levels, rankings, or meters of how much a member asks against how much they answer. [Proposed] Public metrics steer behavior toward the metric: on Stack Overflow, users increased exactly the activity a badge rewarded as they neared it, and returned to their usual level once they had earned it. [Established] (Anderson et al., 2013) A public asking-versus-answering meter would also single out the members who mostly ask, often the first-year and first-generation students the network most needs to hear from. [Proposed]
- **No price on asking.** Brainly's homework network has students earn points by answering and spend them to ask. [Established] That suits a homework market; on a campus network, asking must always be free. [Proposed]
- **What members see.** Each member sees their own contributions privately, such as how many of their answers were confirmed and how often they were reused, and may choose to show a short line about it on their profile. [Proposed]
- **What communities give.** A community can recognize helpers with named roles, such as peer guide or community steward, given by its owner and shown on their posts, and offices can thank helpers whose answers they confirm. [Proposed]
- **The swarm, not the peer.** The network measures knowledge flow for each community, not each person: the share of questions answered and confirmed, how often answers are reused, how many helpers carry the load, and how long questions wait. These are the pilot's health measures (D-067). [Proposed]

Ranking or classifying members by their activity could also count as profiling, and the National Privacy Commission requires every system that involves profiling or automated decision-making to be registered. [Established] Recognizing helpers without profiling them keeps the network clear of that question. [Proposed]

## What people see: a home that ends

The home screen is a digest, not a feed. [Proposed] (D-061)

1. **Official now.** Unread notices from the member's official spaces, urgent ones first.
2. **For you.** Replies to the member's posts, and questions in the topics they help with.
3. **Your communities.** Posts since the last visit, newest first, grouped by community.
4. **Coming up.** Events and deadlines the member saved or belongs to.
5. **You're caught up.** The end of the page, with nothing loading after it.

No post is ranked by predicted engagement or by any hidden score, and there are no public like counts. [Proposed] Each item says why it is there, such as "from a community you joined" or "a question in a topic you help with", and members can change any of those reasons. [Proposed] Reactions give way to signals with a purpose: "helpful" on answers, "same question" on questions, and "going" on events, which tell owners what matters without turning posts into contests. [Proposed] Members can follow, mute, and leave communities. They can mute official spaces but not leave them, and notices marked urgent always come through. [Proposed] Search covers every space the member can see, and nothing else. [Proposed]

## Notifications with a budget

| Tier | What | How it arrives |
| --- | --- | --- |
| Urgent | Suspensions, emergencies, and safety advisories from authorized offices | At once, even during quiet hours |
| Personal | Replies to the member, messages, routed questions, and confirmations of their answers | At once, outside quiet hours |
| Everything else | New posts, events, and listings | A daily digest the member can turn off |

Quiet hours, overnight by default, protect rest, a reason a Philippine college gave in 2026 when it moved announcements out of group chats. [Established] Urgent notices pass through because VSU's guidelines require typhoon suspensions to be announced by 4:30 a.m. [Established] Each office gets a small, published allowance of urgent notices each semester, so that urgent keeps its meaning. [Proposed]

## Messages, group chats, and real-time chat

Members can message each other and form small group conversations. Norms differ by role: a student writing to a faculty member outside their own classes sends a consultation request, which the faculty member can accept, book into office hours, or point to an office, and no one is expected to answer outside working hours. [Proposed]

Group chats stay where they are. The network does not try to move real-time coordination off Messenger, where nearly everyone already is. [Proposed] (D-074) Instead, every notice, answer, guide, and event has a share card that can be posted into any chat and links back to the current version, so a chat that passes on a notice also passes on the way to check it. [Proposed]

Real-time chat inside the network waits until a pilot shows people want it there. [Proposed] (D-074, Q-04) If it comes, Matrix is the candidate: an open protocol that TU Dresden and LMU Munich run for their students and staff. [Established] Its cost grows with use. Element's sizing guide, for servers without federation, puts up to 500 users at one core and about 1 GiB of memory for the Synapse server plus one core and 4 GiB for its database, and 2,501 to 10,000 users at ten cores and about 8 GiB plus four cores and 16 GiB, with the database growing by about 0.6 GB per active user each year. [Established]

Private messages stay private: moderators cannot read them. A member who reports a message shares that message with the moderators, and anything more needs legal process. [Proposed] Whether to encrypt messages end to end, which also limits what a host can detect and act on, is a question for the legal review. [Unresolved] (Q-36)

## Events that keep their memory

An event is an entity, not a post that scrolls away. It has a time, a place, organizers, and the communities it concerns, and after it happens it keeps its materials, such as slides, photos, recordings, and follow-up discussion, as part of the network's memory. [Proposed] Attendance is shown as a count, with names only for members who choose to show them. [Proposed]

## Student services, and the link to the marketplace

The marketplace is its own product, linked from the network rather than built as one of its spaces. [Established] (D-078) Its design, including who may sell, what may be sold, and how trust is earned, is in [Chapter 4.2](04b-marketplace.md). The network links to it from the communities where trading comes up, such as a dormitory or a subject's book exchange, and shares its verified membership and moderators with it. [Proposed]

- **Services, later.** Tutoring, printing, layout, and photography listings, reviewed only by confirmed clients, with deliveries handed to Hop-It ([Chapter 4.1](04a-hop-it.md)). [Proposed]

## Pseudonymous sections

Participation is identified by default, and some sections may allow anonymous or pseudonymous posts. [Established] (D-046) Q-16 asks which sections, and anonymous to whom. This design proposes an answer to the second part. [Proposed] (D-065)

| Option | Other members see | The network holds | Proposed use |
| --- | --- | --- | --- |
| Named | Name and role | The member's identity | The default |
| Role only | A role, such as "3rd-year student, Faculty of Engineering" | The member's identity | Answers where a name adds nothing |
| Pseudonym | A stable nickname that other members cannot link to the member | The link, under two keys | Concerns about the university; personal problems |
| Fully anonymous | Nothing | Nothing | Not offered |

Dcard's posting under a verified university affiliation without a name is the tested precedent for the role-only option ([Chapter 9](09-related-work.md)). [Established] Full anonymity is not offered, because no one could act on threats, harassment, or exploitation, as Yik Yak's history and the 2025 case at VSU show. [Proposed]

A simpler version, anonymous to other members and verified to VSU, protects a member from peers but not from the institution: if VSU can see who wrote a criticism of VSU, the anonymity protects least where it is needed most. [Proposed] So the link between a nickname and a member would be stored so that no single person can open it: one key held by the student council and one by VSU's data protection officer, or by people they name, so that both must agree. [Proposed] An identity would be revealed only for named violations, such as threats, harassment, impersonation, or sexual content involving a minor, or under legal process, and never for criticizing the university. Every reveal would be logged and reported, in aggregate, each semester. [Proposed] (D-065) Which sections get pseudonyms follows the Facebook study's H4, on the topics people already post about anonymously far more than others. [Established] (D-048, D-050)

## Rules and moderation

### Three jobs, kept apart

Moderation, institutional response, and running the platform are different jobs, done by different people. [Proposed] (D-066)

| Job | Asks | Who | Never |
| --- | --- | --- | --- |
| Community moderation | Is this within the community's rules? | Moderators chosen from each community, student council volunteers, and trained moderators | Removes a post for criticizing VSU, or answers for an office |
| Institutional response | Does this need a response from VSU, and what is it? | The offices responsible, with OVPSAS coordinating | Moderates, hides, or removes posts |
| Platform administration | Is the service running, secure, and backed up? | VSU ICT, or the pilot's operator | Reads private messages, moderates, or answers for offices |

A complaint that an office is hard to deal with is within the rules, so it stays up; whether it needs a response is that office's question, not a moderator's. [Proposed] Keeping the jobs apart is what stops moderators from becoming the university's censors, in practice or in perception, and stops offices from deciding which criticism members get to see. [Proposed]

### Governed as a commons

Ostrom found that commons which lasted shared a set of design principles. [Established] (Ostrom, 1990) Each has a counterpart on the network. [Proposed]

| Ostrom's principle | On the network |
| --- | --- |
| Clear boundaries | Membership through VSU accounts, and communities with defined members |
| Rules suited to local conditions | Rules written for VSU, in its languages, reflecting its principles |
| Those affected help make the rules | A network council with students on it, and rule changes open for comment |
| Monitors accountable to the members | Community moderators drawn from each community's own members |
| Graduated sanctions | A reminder, then removal of the post, then a temporary limit, then suspension |
| Quick, low-cost ways to settle disputes | Appeal within the community first, then to the council |
| The right to organize, recognized | Organizations and councils run their own communities |
| Nested layers | Communities, the network, and VSU's own processes, each handling what the others cannot |

### The speech standard

The rules start from the standard the Supreme Court applied to campus speech in Malabanan v. Ramento: students keep their freedom of speech on campus, discussion of matters affecting their welfare or the public interest is protected, and only conduct that materially disrupts classwork, causes substantial disorder, or invades the rights of others may be restricted, with penalties proportionate to the offense. [Established] On the network, that means criticism of the university, its offices, and its officials stays up, while harassment, threats, doxxing, impersonation, scams, false claims to be official, and sexual content involving minors come down. [Proposed] (D-066) Claims about official matters that an office has not confirmed are labelled unverified rather than removed; removal is kept for impersonating an office and for claims that put people in danger, such as a false evacuation instruction. [Proposed]

### Process

The Santa Clara Principles on transparency and accountability in content moderation set out the process the network would adopt: rules in one place with examples, notice to the member naming the rule and the reason, an appeal heard by someone not involved in the first decision, and regular reports with numbers. [Established] They also ask platforms to tell users when the state was involved in an action. [Established] On a network run by a state university, that principle applies with special force: when VSU's administration, rather than a community moderator, asks for an action, the notice should say so. [Proposed] (D-066)

### Layers

| Layer | Who | Handles |
| --- | --- | --- |
| Community | Moderators chosen from each community, such as organization officers or dormitory representatives | Everyday conduct in that community |
| Network | Trained moderators from among students and staff, and a coordinator | Reports, appeals from communities, and the marketplace |
| Network council | Student council representatives, OVPSAS, faculty, and VSU ICT, with the data protection officer advising | The rules, final appeals, transparency reports, and identity reveals |
| VSU processes | The Anti-Sexual Harassment Office, student discipline, and the Legal Office | Cases beyond the network's rules |
| Outside authorities | The police and other agencies | Crimes, under legal process |

The Safe Spaces Act requires schools to act promptly on gender-based sexual harassment, online harassment included, when they know or reasonably should know of it, and to refer cases to a committee on decorum and investigation. [Established] A VSU-run network would route such reports to VSU's Anti-Sexual Harassment Office, whose public page explains how to file complaints but does not mention online harassment. [Established] How the network's reports reach that office, and how fast, is part of the legal review. [Unresolved] (Q-36)

How much moderation the network needs is unknown, so a pilot would measure reports per hundred members each week and how long each takes. [Proposed] SURF's experience suggests identified membership keeps the load low: its Mastodon pilot for Dutch education institutions needed little intervention, partly because institutional logins make users accountable. [Established]

## Beyond current members

The network grows outward in steps, each with its own verification and its own gate. [Proposed] (D-073)

1. **College students, faculty, and staff** of the Main Campus, through VSU accounts. The pilot stops here (D-069).
2. **Alumni.** VSU accounts can be revoked at graduation, so graduates need a separate path, such as verification against VSU's graduation records, with an alumni role. [Proposed] (Q-45) Alumni would then mentor, answer career questions, and keep helping in the communities they knew, which serves the Strategic Plan's goal of Strong Alumni Engagement. [Proposed]
3. **Applicants and their parents.** A public "Ask VSU" section, where they can ask about programs, admission, and student life and be answered by verified students, alumni, and offices, extends the use case of a window for aspiring students ([Chapter 3.1](03a-use-cases.md)). [Proposed] Parents of first-generation students, who could not ask anyone at home with a college degree, may gain the most. [Proposed] Applicants may be minors, so the section would allow public questions and answers only, with no private messages to them. [Proposed]

Out of scope are minors from outside VSU and the general public. [Proposed] A knowledge exchange open to every level of education, from elementary pupils to professionals, is a different product with different safety duties, and it falls outside CAMPUS (D-021). [Proposed] If the idea belongs anywhere, it is closer to the Education Protocol Concept, which [Chapter 5](05-later-directions.md) records as a separate project. [Proposed]

## Phones, data, and language

- **An installable web app first.** Android accounted for about 87% of mobile web page views in the Philippines in September 2026, and iPhones have received push notifications from web apps added to the home screen since iOS 16.4 in 2023. [Established] One web app can therefore reach almost every phone without app store approval. [Proposed]
- **Text first.** Compressed images, no autoplay video, and only what changed fetched at each sync, so daily use costs little mobile data. [Proposed] How little is for a pilot to measure. [Unresolved]
- **Readable offline.** Notices, guides, and saved events stay on the phone, the device ring of [Chapter 2](02-intranet.md). [Proposed] (D-034)
- **Languages.** Members write in any language. The interface would start in English and Filipino and add Cebuano and Waray if the survey shows people want them. [Proposed] (Q-41) VSU's own barangay, Pangasugan, is among the few places where a further language, Baybayanon, is spoken. [Established]
- **Accessibility.** Scalable text, enough contrast, and support for screen readers, aiming at the Web Content Accessibility Guidelines, in line with the services for students with special needs that CHED lists among student affairs services. [Proposed]

## What runs underneath

```text
Phones and laptops: installable web app, offline copies          Ring 1
      │
Server: in the cloud for a pilot, on campus if VSU chooses       Ring 4, later Ring 2
  sign-in with VSU accounts · roles · communities and spaces
  posts, labels, and states · routing by topic · search
  notifications · retention schedule · moderation and audit log
  chat server, only if a pilot calls for it
      │ reads, with permission               │ links into
VSU's public feeds: website news             VSU systems: helpdesk,
and announcements; WAIS                       document tracker, VSUEE,
                                              my.VSU; Hop-It
```

- **Data model.** People, roles, communities, spaces, posts, topics, places, and events, with the links between them, stored from the first version so that later features can build on them. [Proposed] (D-075)
- **Sign-in.** For a pilot, members can prove membership with a one-time code sent to their VSU email address, which needs no integration with VSU's systems. Single sign-on through OpenID Connect with VSU's Google accounts, limited to the vsu.edu.ph domain, or with VSU's own identity system, would come later with VSU ICT's agreement. [Proposed] (Q-06)
- **Official feeds.** VSU's website already publishes RSS feeds of its news and its announcements. [Established] The network could carry them into the university's official space with their source shown, and could show WAIS advisories, which WAIS already generates as JSON, if VSU's disaster risk management office agrees. [Proposed] (Q-40)
- **Sync.** The channel model's tiers: official notices within about a minute, other spaces on a slower cycle, and archives only when opened. [Established] (D-034)
- **Build.** Two paths are open. One composes open-source parts, such as a forum engine like Discourse and, if needed, a Matrix server, behind a thin VSU layer for roles, communities, labels, states, and routing. The other builds the network from scratch on the stack Hop-It uses. [Proposed] (Q-33) The first is faster and better tested; the second fits the labels, states, and routing more closely and shows more of what the project can build. Either way, everything runs in containers VSU could host later, with no dependence on one cloud's proprietary services ([Chapter 2](02-intranet.md)). [Proposed]
- **Security.** Encrypted connections and storage, a log of every moderator and administrator action, regular backups, and a breach process run with VSU's data protection officer. [Proposed] VSU's own privacy training in 2021 put the guiding rule simply: don't collect what you can't protect. [Established]

## Scenes

These show how the parts would work together. Each is a proposal, and each can become a scenario to test with students. [Proposed]

### 1. A 4:30 a.m. suspension

A typhoon signal is raised overnight. Under VSU's guidelines, collegiate classes are suspended automatically at Signal No. 3, and typhoon suspensions must be announced by 4:30 a.m. [Established] The authorized office posts the suspension once, in the university's official space. It goes out as an urgent notification, the only kind that passes through quiet hours, and appears at the top of every member's home with the WAIS advisory attached. Students share it into their group chats as a card carrying its short link. When the office extends the suspension at noon, it updates the same notice, and the page shows both versions. A post claiming the suspension covers the following week stays labelled unverified until the office speaks. Classes moving to asynchronous mode, as VSU's guidelines provide, are announced in VSUEE, and the network links there. [Proposed]

### 2. The first week

A first-year student whose VSU account has not yet been issued signs in with a temporary pass tied to her enrollment (Q-38). She joins her faculty's community and the first-year guides. A guide written by seniors and checked by the office answers her first question, about her student ID. Her second, about a scholarship requirement, goes to the scholarships community, where a senior answers and the scholarship office confirms by the afternoon. [Proposed]

### 3. The question every batch asks

Before classes start, a first-year student wonders how to renew a scholarship. As she types her question, the network shows a guide a student wrote two years earlier, confirmed by the scholarship office for this academic year, with a note that one requirement changed last semester. She reads it and doesn't post. The student who wrote it has since graduated; she sees, privately, that her guide keeps being read and that the office confirmed it again. No one had to answer the same question one more time. [Proposed]

### 4. Who knows about GIS?

A second-year engineering student has a thesis idea that needs GIS. She asks in the GIS topic community and chooses answers from students and faculty. The question reaches four members who chose GIS as a topic they help with, two seniors and two faculty members, each told why it came to them. A senior replies with the courses she took; a faculty member who listed GIS among her topics invites the student to the open events posted in the community. Nothing about the student was guessed from what she reads, and no helper received more questions than they agreed to. [Proposed]

### 5. An organization changes officers

The outgoing president nominates the new officers, the adviser approves, and ownership of the organization's community moves to them. Members, events, documents, and past announcements stay where they were, and nothing depended on a graduating student's personal account. [Proposed]

### 6. A concern about water in a dormitory

In the concerns community, a student writes under a pseudonym that a dormitory has had no water for three days. Others mark "same issue". The post is within the rules, so the moderators leave it alone; whether it needs a response is the housing office's question, not theirs. A student council representative raises it with the office, which replies in the thread as official, posts a repair date, and later marks it fixed. The student's identity is never revealed. [Proposed]

### 7. A consultation

A student wants advice on a thesis topic from a faculty member in another department. She sends a consultation request, and the faculty member offers a time within his consultation hours. No messages arrive at midnight, and none are expected. [Proposed]

### 8. Selling a lab gown

A graduating student lists a lab gown for verified members, suggests the library entrance as a meeting point, and marks it sold after both sides confirm the exchange. [Proposed]

### 9. When the colleges became faculties

Suppose the network had existed in January 2025, when VSU replaced its colleges with faculties. [Established] Every guide and confirmed answer that named a college would have been flagged for review in its community. Owners would have updated each one with a note of what changed, old names would have pointed to the new ones, and a student searching for a former college's name would still have found the right page. In the spaces VSU's people use today, nothing marks such posts as out of date. [Proposed]

## What stays out of a first version

Anything the evidence does not call for. [Established] (principle 5) In particular: course spaces, which VSUEE serves; ratings of teachers; payments; recommendation algorithms and hidden scores; public counts, levels, and rankings; artificial intelligence of any kind; analytics about individuals; real-time chat until a pilot calls for it; discovery of expertise across the whole university; and the alumni, applicant, and parent roles. [Proposed] (D-013, D-064, D-072, D-073, D-074)

## Open questions

- Real-time chat or tiered sync, and at what cost? (Q-04)
- Which identity approach would VSU accept? (Q-06)
- Which sections allow pseudonyms, and who holds the two keys? (Q-16)
- Should the pilot be composed from open-source parts or built from scratch? (Q-33)
- What does the law require of VSU as host, including on encrypting messages? (Q-36)
- How would incoming students take part before their VSU accounts are issued? (Q-38)
- Where would role details come from, and which would members choose to show? (Q-39)
- Could the network carry VSU's official feeds and WAIS advisories? (Q-40)
- Which languages should the interface support? (Q-41)
- How long should conversation, listings, and messages be kept? (Q-43)
- On what terms are members' guides and answers kept? (Q-44)
- How would graduates keep or regain membership as alumni? (Q-45)

[Unresolved]

## Sources

Checked on 8 and 9 October 2026. The source type follows each entry ([Chapter 8](08-governance.md)).

- Visayas State University. [All VSU students and staff to get Microsoft and Google licenses](https://www.vsu.edu.ph/articles/news/2394-all-vsu-students-and-staff-to-get-microsoft-google-licenses), 22 August 2023; [VSU rolls out 9,245 free Google Workspace accounts to students in Main Campus](https://www.vsu.edu.ph/articles/news/2255-vsu-rolls-out-9-245-free-google-workspace-accounts-to-all-students-in-main-campus), 4 October 2022; [VSU implements new vision, mission, organizational structures](https://www.vsu.edu.ph/articles/news/2666-vsu-implements-new-vision-mission-organizational-structures), 16 January 2025; [VSU UDRMO unveils WAIS](https://www.vsu.edu.ph/articles/news/3011-vsu-udrmo-unveils-wais-strengthens-climate-resilience-efforts), 9 July 2026; [Accredited Organizations](https://www.vsu.edu.ph/students/accredited-organizations), school year 2022–23; [Main Campus faculties](https://www.vsu.edu.ph/academe/main-campus); [Graduate faculty of the Department of Food Science and Technology](https://www.vsu.edu.ph/21-content-main/informational/1611-graduate-faculty-of-dept-of-food-science-and-technology), an example of VSU's graduate faculty pages; [Student Services](https://www.vsu.edu.ph/vsu/1156-student-services); [Frequently asked questions on sexual harassment](https://www.vsu.edu.ph/vsu/1356-anti-sexual-harassment); [News feed](https://www.vsu.edu.ph/articles/news?format=feed&type=rss) and [announcements feed](https://www.vsu.edu.ph/articles/bulletin?format=feed&type=rss); [University Policies](https://www.vsu.edu.ph/about/university-policies), including BOR Resolution No. 162, s. 2024, on suspending classes and work, and BOR Resolution No. 100, s. 2025, on raising and selling animals; [VSU commits to data privacy and protection](https://www.vsu.edu.ph/articles/news/1919-vsu-commits-to-data-privacy-and-protection), 24 February 2021. Official.
- [Republic Act No. 10173, Data Privacy Act of 2012](https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html), Sections 3(l), 11(e), 13, and 16(e); [Republic Act No. 11313, Safe Spaces Act](https://lawphil.net/statutes/repacts/ra2019/ra_11313_2019.html), Sections 12, 21, and 22; National Privacy Commission, [Circular No. 2022-04](https://privacy.gov.ph/wp-content/uploads/2023/05/Circular-2022-04.pdf), Section 5. Official.
- [Malabanan v. Ramento, G.R. No. L-62270](https://chanrobles.com/scdecisions/jurisprudence1984/may1984/gr_l62270_1984.php), 21 May 1984. Official, jurisprudence.
- [The Santa Clara Principles on Transparency and Accountability in Content Moderation](https://santaclaraprinciples.org/), version 2.0. External.
- Ostrom, E. (1990). *Governing the Commons*, Table 3.1. Cambridge University Press. [doi:10.1017/CBO9780511807763](https://doi.org/10.1017/CBO9780511807763). Scholarly.
- Resnick, P., Konstan, J., and Chen, Y. Starting new online communities. In R. E. Kraut and P. Resnick, *Building Successful Online Communities: Evidence-Based Social Design*, MIT Press, 2012; design claims summarized on the [HCL Connections wiki](https://ds-infolib.hcltechsw.com/ldd/lcwiki.nsf/dx/Starting_a_new_online_community). Scholarly.
- Ling, K., Beenen, G., Ludford, P., Wang, X., Chang, K., Cosley, D., Frankowski, D., Terveen, L., Rashid, A. M., Resnick, P., and Kraut, R. (2005). [Using social psychology to motivate contributions to online communities](https://presnick.people.si.umich.edu/papers/cscw04). *Journal of Computer-Mediated Communication*, 10(4). Scholarly.
- Anderson, A., Huttenlocher, D., Kleinberg, J., and Leskovec, J. (2013). [Steering user behavior with badges](https://archives.iw3c2.org/www2013/proceedings/p95.pdf). *WWW 2013*, 95–106. [doi:10.1145/2488388.2488398](https://doi.org/10.1145/2488388.2488398). Scholarly.
- Stack Overflow. [Handling duplicate questions](https://stackoverflow.blog/2009/04/29/handling-duplicate-questions/), 29 April 2009. External, vendor.
- [Poland-based social learning network rolls out PH site](https://newsbytes.ph/2014/04/21/poland-based-social-learning-network-rolls-out-ph-site/), NewsBytes.PH, 21 April 2014, on Brainly. External.
- Element. [ESS sizing](https://ems-docs.element.io/books/element-server-suite-documentation-lts-2310/page/ess-sizing/revisions/3404), Element Server Suite documentation, LTS 23.10. External, vendor.
- Discourse. [discourse-solved](https://github.com/discourse/discourse-solved), now bundled into Discourse core. External, vendor.
- [Mobile operating system market share in the Philippines](https://gs.statcounter.com/os-market-share/mobile/philippines), StatCounter, September 2026. External.
- WebKit. [Web Push for Web Apps on iOS and iPadOS](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/), 16 February 2023. External, vendor.
- [Beyond X: how universities in the Netherlands are building alternatives to big tech](https://www.blogs.unicamp.br/geict/?p=891), GEICT, Unicamp, 18 March 2026, an interview with SURF. External.
- Villagers Montessori College. [Memo No. 6, s. 2026, on official communication channels](https://vmc.edu.ph/wp-content/uploads/2026/07/VMC-Memo-6-s.-26-Official-Communication-channel.pdf), 15 June 2026. External, from another college.
- [Baybay language](https://en.wikipedia.org/wiki/Baybay_language), Wikipedia. External.
