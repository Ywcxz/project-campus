# CAMPUS

*A digital layer over the physical university*

CAMPUS proposes a persistent digital layer over VSU that connects people, organizations, knowledge, places, services, and opportunities, and keeps the context of each connection: who said it, with what authority, and who may see it. [Proposed] Everything else in this document, from the social/academic network to Hop-It, sits under this umbrella.

## A layer, not a replacement

A university depends on systems that are authoritative for their own data: enrollment and student records, finance, human resources, learning, and the library, among others. CAMPUS does not replace them. Where VSU permits, it links to them, references them, or reads from them, and it never becomes a second system of record. [Established] How that would work technically cannot be assumed until VSU's systems, owners, and policies are understood. [Unresolved]

## Relationships first

The founding principle is to prioritize relationships and infrastructure over isolated features. [Established] A person connects to a program, courses, instructors, organizations, events, research, facilities, and opportunities. CAMPUS asks whether making those connections visible would make the university easier to navigate than it is when each lives in a separate office, website, or group chat. [Proposed]

| Domain | Examples |
| --- | --- |
| People | Students, faculty, staff, researchers, alumni |
| Organizations | Colleges, offices, research groups, student organizations |
| Learning | Programs, courses, curricula, learning resources |
| Knowledge | Documents, publications, official information, community knowledge, discussions |
| Places | Buildings, rooms, laboratories, dorms, the VSU market |
| Activities | Events, announcements, consultations |
| Opportunities | Scholarships, research openings, internships, competitions |
| Services | Offices and the services they provide |

These are concepts, not a database schema. The real model has to come from research and testing. [Proposed]

## Context travels with information

Connecting more information without its context also spreads mistakes faster. CAMPUS therefore labels information by type: official, community knowledge, opinion, unverified, scholarly, or external ([Chapter 8](08-governance.md)). [Established] A second rule follows from the first: connected does not mean public. The fact that two things are related does not make the relationship visible to everyone, and visibility is decided separately. [Established]

## Five design principles

These principles were set out in the July 2026 version of this document and dropped from v0.1. Version 0.2 restores them, with principle 3 reworded to fit the network's purpose. [Proposed] (D-033)

1. **Verification before scale.** Don't build for a problem until real evidence confirms it.
2. **Hyperlocal depth, not national breadth.** Useful and specific to VSU beats generic and scalable. The most persistent drift in this project has been the urge to generalize beyond one institution.
3. **Complement the administrative layer; compete only where the campus is poorly served.** Work alongside VSU's existing systems, never against them, and replace only what fails the university. That is the network's case against Facebook (D-035).
4. **Ship the useful thing before the impressive one.** Blockchain, AI, and similar technology wait until a named need calls for them.
5. **Technology serves a named problem.** No feature exists without a documented reason.

## What must stay true

Condensed from v0.1's architectural invariants (v0.1 §6.18):

- Relationships are central to the architecture.
- Existing systems keep their authority.
- Identity and permissions are foundations, not features.
- People can always tell what kind of information they are looking at.
- Physical places and digital information can connect.
- A broad architecture never justifies building every capability at once.
- Evidence can change any of this.

## Conceptual layers

```text
Experience        discussions · groups · chat · services · search · places
Relational layer  people, organizations, places, and knowledge, and the links
                  between them, with time, provenance, and permissions
Discovery         search, indexing, following relationships
Integration       VSU systems and outside services, through approved interfaces
Infrastructure    campus network and servers, cloud, devices, the physical campus
```

The products map onto these layers. The social/academic network is the first experience built on the relational layer, and the campus intranet would be the infrastructure underneath. Hop-It stays outside the stack for now: a separate product that tests delivery on its own. [Proposed]

## What CAMPUS is not

- A replacement for the ERP, the LMS, student records, HR or finance systems, or research repositories.
- Simply a social network, a website or portal, a directory, a campus map, or a digital twin. The network is the centerpiece, not the whole.
- An AI chatbot, a metaverse, or a virtual campus.
- An assumption that all university data should be centralized or public.
- A claim that VSU's systems are inadequate, made without investigating them first.
- A commercial product, or a reform plan for Philippine higher education.

[Established] (v0.1 §2.12; D-021)
