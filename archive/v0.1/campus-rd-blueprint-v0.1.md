# CAMPUS R&D Blueprint v0.1

## 1. Document Purpose & Status

### 1.1 Purpose

The **CAMPUS R&D Blueprint v0.1** is the authoritative working document for the research, design, prototyping, validation, and institutional investigation of **CAMPUS — an experimental digital-campus architecture for universities**.

The blueprint consolidates the current CAMPUS project definition, conceptual foundations, architectural model, proposed MVP, technical directions, institutional context, research methodology, development requirements, governance considerations, risks, and unresolved questions into a single reference document.

Its primary purpose is to prevent the CAMPUS concept from developing as disconnected presentations, diagrams, technical experiments, and proposals. Future technical specifications, prototypes, research proposals, presentations, institutional discussions, funding materials, and the CAMPUS living website should be derived from this blueprint or explicitly identify where they depart from it.

### 1.2 Status

**Version:** 0.1
**Status:** Research and development blueprint / working master document
**Project phase:** Conceptual consolidation → bounded R&D and prototyping
**Institutional status:** Independently initiated concept; institutional relationships, permissions, participation, and adoption remain subject to validation and formal discussion.

Version 0.1 represents the current state of the CAMPUS R&D concept. It is not a final product specification, institutional mandate, or commitment by Visayas State University (VSU), the Department of Science and Technology (DOST), or any other institution.

The blueprint is expected to evolve as research, technical experimentation, stakeholder discussions, institutional discovery, and prototype validation produce new evidence.

### 1.3 Role of the Blueprint

The blueprint serves four related purposes:

1. **Research reference** — defining the questions, assumptions, hypotheses, and evidence that guide CAMPUS development.
2. **Architecture reference** — establishing the current conceptual and technical model from which prototypes and specifications are derived.
3. **Project management reference** — defining the bounded MVP, development sequence, resource requirements, risks, and decision points.
4. **Institutional communication reference** — providing a coherent and evidence-disciplined explanation of CAMPUS for discussions with university officials, technical personnel, researchers, potential partners, and other stakeholders.

### 1.4 Evidence Discipline

All significant statements and design decisions in the blueprint should be classified according to their current evidentiary status:

**Established** — supported by authoritative sources, documented evidence, research findings, completed technical work, testing, or an explicit project decision.

**Proposed** — a CAMPUS design hypothesis, architectural direction, implementation proposal, or research proposition that has not yet been sufficiently validated.

**Unresolved** — a question or assumption for which the required institutional, technical, user, legal, governance, or empirical evidence has not yet been obtained.

The blueprint must not silently convert proposed concepts or assumptions into established facts.

Where appropriate, claims should identify their basis, such as institutional documentation, published research, technical testing, stakeholder discussion, prototype results, or project decision.

### 1.5 Relationship to VSU and Other Institutions

CAMPUS is currently treated as an independently initiated R&D concept that may be investigated in relation to the needs, systems, strategic directions, and digital transformation activities of universities, particularly VSU.

References to VSU's strategic priorities, digital initiatives, systems, personnel, infrastructure, policies, or organizational arrangements do not by themselves establish institutional participation, endorsement, ownership, integration, or adoption.

Similarly, stakeholder discussions are treated as **research and discovery inputs** unless a formal institutional commitment or other appropriate evidence establishes a different status.

Potential relationships—including research collaboration, technical experimentation, pilot deployment, integration with existing systems, institutional adoption, or other arrangements—remain matters for institutional discussion and validation.

### 1.6 Relationship to the VSU Strategic Plan and DIGITS

The VSU Strategic Plan 2017–2027 is used as a **strategic context and alignment framework**, not as a rigid specification for CAMPUS.

CAMPUS does not claim that the Strategic Plan mandates its development. Rather, the project investigates whether aspects of its proposed architecture could contribute to existing university directions concerning education, science and technology, communities, resource generation, governance, innovation spaces, and alumni engagement.

VSU DIGITS and related initiatives are likewise treated as important institutional context. Publicly described initiatives and objectives may inform CAMPUS research, but their internal architecture, implementation status, ownership, scope, technical interfaces, and institutional relationship to CAMPUS must not be assumed without appropriate evidence.

CAMPUS may ultimately prove complementary to existing university systems and initiatives, overlap with some existing capabilities, require integration with them, or be unsuitable for some intended purposes. These possibilities are part of the R&D investigation.

### 1.7 Versioning Principle

CAMPUS development should proceed through explicit versions rather than allowing the conceptual scope to expand implicitly.

Changes to the blueprint should distinguish among:

* newly established evidence;
* revised or rejected assumptions;
* new architectural proposals;
* changes to MVP boundaries;
* institutional discoveries;
* technical decisions;
* validation results; and
* unresolved questions requiring further investigation.

This allows the evolution of CAMPUS to remain traceable and prevents later materials from obscuring why particular decisions were made.

### 1.8 Intended Outcome of Version 0.1

The immediate objective of v0.1 is **not to define the complete future CAMPUS ecosystem**.

Its objective is to establish a sufficiently coherent and evidence-disciplined foundation from which a bounded functional prototype, technical experiments, stakeholder research, and institutional validation can proceed.

The central development question is therefore not simply:

> *What features could CAMPUS eventually contain?*

but:

> **Can a persistent, relationship-oriented digital layer over the university improve the discovery, connection, interaction, and continuity of people, knowledge, services, opportunities, places, and institutional resources—and can this hypothesis be demonstrated through a feasible, testable prototype?**


# 2. Project Definition

## 2.1 Project Identity

**CAMPUS** is an independently initiated research and development concept for an **experimental digital-campus architecture for universities**.

CAMPUS investigates whether a persistent, relationship-oriented digital layer can improve how people discover, connect, interact with, and maintain continuity across the university's people, organizations, educational activities, knowledge, research, services, places, facilities, opportunities, communities, and institutional resources.

CAMPUS is therefore defined primarily as an **architectural and relational model**, rather than as a collection of independent software features.

Its immediate objective is to investigate and demonstrate this model through a bounded functional prototype and supporting research, rather than to build a complete digital replacement for the university.

**Status: Established project definition.**

---

## 2.2 Central Hypothesis

The central CAMPUS hypothesis is:

> **University information, people, services, knowledge, opportunities, and resources may already exist across different institutional and community contexts, but the relationships among them are often difficult to discover, navigate, maintain, and use. A persistent relationship-oriented digital layer may improve discovery, interaction, continuity, and connection across these existing resources.**

This is a **research hypothesis**, not an established finding.

The R&D program must therefore be capable of producing evidence that:

* supports the hypothesis;
* modifies it;
* narrows its applicability; or
* demonstrates that particular aspects of the hypothesis do not hold.

CAMPUS development should not assume that the hypothesis is correct simply because the proposed architecture is technically feasible.

**Status: Proposed / research hypothesis.**

---

## 2.3 What "Digital Campus" Means in CAMPUS

Within this project, a digital campus is not understood simply as a collection of online services or a university website.

CAMPUS explores a digital representation of the **relationships that make the university function as a connected environment**.

The physical university contains relationships among:

* people;
* academic programs and courses;
* organizations and communities;
* buildings and facilities;
* research activities;
* knowledge and publications;
* events and activities;
* services;
* opportunities;
* institutional resources; and
* external communities and partners.

CAMPUS investigates whether these relationships can be represented and made discoverable through a persistent digital layer while preserving appropriate distinctions concerning authority, provenance, permissions, privacy, and context.

The digital campus is therefore understood as an **interaction and relationship layer over the university**, rather than a virtual replica intended to replace physical campus life or existing institutional systems.

**Status: Proposed conceptual definition.**

---

## 2.4 The Relational Principle

The fundamental architectural principle of CAMPUS is:

> **Prioritize relationships and infrastructure over isolated features.**

Instead of treating university information as disconnected pages, records, applications, or directories, CAMPUS proposes representing relevant entities and the relationships among them.

For example, a student may be related to:

**Person → Program → Course → Instructor → Organization → Event → Research Project → Publication → Facility → Opportunity → Community**

The significance of these relationships is not merely navigational. They may provide context for discovery and enable new forms of interaction and continuity.

A course may connect to its instructors, learning resources, research activities, facilities, student communities, related opportunities, and subsequent educational pathways.

A researcher may connect to publications, projects, collaborators, laboratories, facilities, students, communities, and opportunities.

A physical facility may connect to its location, responsible organization, available services, equipment, events, research activities, and authorized users.

The exact relationship model remains subject to technical research and validation.

**Status: Proposed architectural principle.**

---

## 2.5 CAMPUS as a Layer, Not a Replacement

CAMPUS is not intended to replace specialized university information systems.

Existing systems may remain authoritative for functions such as:

* enrollment and student records;
* finance;
* human resources;
* learning management;
* research repositories;
* library services;
* identity management;
* institutional reporting; and
* other specialized administrative or operational functions.

CAMPUS instead investigates how a relational layer could **connect discovery and interaction across these systems and resources**, subject to available interfaces, institutional permissions, data governance, security requirements, and technical feasibility.

Where appropriate, CAMPUS may link to, synchronize with, query, index, or otherwise interact with existing systems.

The precise integration mechanisms cannot be assumed until the relevant VSU systems, ownership structures, interfaces, data policies, and technical constraints have been investigated.

**Status: Established architectural direction; implementation mechanisms unresolved.**

---

## 2.6 CAMPUS as an Infrastructure for Relationships

The project does not define CAMPUS primarily by a fixed list of applications.

Instead, it investigates an extensible foundation upon which different university capabilities can be connected.

The conceptual relationship model may include entities such as:

### People

Students, faculty, staff, researchers, alumni, administrators, partners, community members, and other authorized participants.

### Organizations

Academic units, administrative offices, research groups, student organizations, communities, external organizations, and other institutional or community entities.

### Educational Objects

Programs, courses, curricula, learning activities, competencies, educational resources, and related records.

### Knowledge

Documents, publications, datasets, institutional information, community knowledge, discussions, and other knowledge resources.

### Research

Projects, researchers, research groups, laboratories, publications, datasets, collaborations, facilities, and research opportunities.

### Places and Facilities

Buildings, rooms, laboratories, equipment, outdoor spaces, services, and other physical or spatial resources.

### Activities

Events, discussions, projects, activities, announcements, consultations, and other time-dependent interactions.

### Opportunities

Scholarships, research opportunities, internships, employment pathways, competitions, projects, training, and other opportunities.

### Services and Resources

Institutional services, digital services, facilities, support resources, and other university capabilities.

These categories are **conceptual entities**, not a finalized database schema.

The final data model must emerge from research, use cases, institutional requirements, privacy constraints, interoperability requirements, and prototype testing.

**Status: Proposed conceptual model.**

---

## 2.7 Information Provenance and Context

CAMPUS must distinguish among different kinds of information rather than treating all content as equally authoritative.

At minimum, the architecture should distinguish:

1. **Official institutional information**
   Information published or authorized by the appropriate university authority.

2. **Community-generated knowledge**
   Information created or contributed by members of the university community.

3. **Personal opinions and perspectives**
   Individual views that should not be represented as institutional positions.

4. **Unverified information**
   Information for which sufficient verification or authoritative provenance has not been established.

5. **Research and scholarly knowledge**
   Academic or scientific material whose provenance, authorship, publication status, and evidentiary context should be preserved.

The precise provenance, verification, moderation, labeling, and permission mechanisms remain subjects for architectural and governance research.

This distinction is fundamental to CAMPUS because increased connectivity without appropriate context could also increase the spread of incorrect, misleading, outdated, or improperly attributed information.

**Status: Established architectural requirement; detailed mechanisms proposed/unresolved.**

---

## 2.8 Identity and Relationships

A relational campus requires some mechanism for identifying entities and maintaining relationships over time.

CAMPUS therefore treats identity, authorization, permissions, and relationship continuity as foundational architectural concerns rather than secondary features.

However, CAMPUS does not currently assume that it should create an entirely independent institutional identity system.

Where institutional identity infrastructure already exists, integration may be preferable to duplication, subject to technical and institutional constraints.

Questions concerning identity providers, authentication methods, account lifecycle, role management, permissions, guest access, privacy, and federation remain unresolved until existing university infrastructure is investigated.

**Status: Established requirement; implementation unresolved.**

---

## 2.9 Local-First and Hybrid Operation

CAMPUS has explored a **local-first digital campus architecture** in which essential campus functions can operate within a university-controlled network or local infrastructure without requiring continuous dependence on the global Internet.

The motivation includes potential resilience, continuity of campus operations, reduced dependence on external connectivity, and the ability to support environments with variable or constrained Internet access.

A hybrid architecture may allow local campus services to operate independently while synchronizing appropriate information with external systems or services when connectivity is available.

This is currently an **architectural research direction**, not an established requirement that every CAMPUS deployment must implement.

The technical feasibility, synchronization model, conflict resolution, security architecture, infrastructure requirements, and appropriate scope of local operation require further investigation.

**Status: Proposed research/architectural direction.**

---

## 2.10 Relationship to Physical Campus

CAMPUS is intended to complement rather than replace the physical university.

Physical spaces remain important components of the conceptual model because many university relationships are spatial:

* people use facilities;
* courses occur in rooms and laboratories;
* research depends on physical infrastructure;
* events occupy places;
* services operate from offices;
* communities form around shared spaces.

CAMPUS may therefore represent spatial relationships and, in later phases, investigate digital-twin or spatial interfaces.

However, a complete digital twin of the university is **not part of the initial CAMPUS MVP**.

Spatial and digital-twin capabilities should be developed only where they provide a demonstrable research or user benefit.

**Status: Physical-spatial relationship is established as a conceptual concern; full digital-twin capability is a proposed later-phase direction.**

---

## 2.11 CAMPUS and Its Major Dimensions

CAMPUS should not be understood as a single application with every possible capability activated simultaneously.

The broader architecture contains several potential dimensions that can be developed progressively.

These include, among others:

* **Digital Space / Community & Knowledge Layer**
* **Curriculum Continuity and Learning Records (CCLR)**
* **Pathways / Education-to-Career Continuity**
* **Research Discovery and Collaboration**
* **Spatial Campus / Digital Twin**
* **Local-First Digital Campus Infrastructure**
* **GIS, analytics, and future AI capabilities**

These dimensions represent architectural directions and potential research domains.

They do not automatically constitute MVP requirements.

The initial R&D effort should establish the foundational relational, identity, knowledge, community, place, search, and interaction infrastructure from which selected dimensions can subsequently be investigated.

**Status: Proposed architectural organization; scope and sequencing addressed in later sections.**

---

## 2.12 What CAMPUS Is Not

For purposes of project discipline, CAMPUS is not currently defined as:

* a replacement for the university ERP;
* a replacement for an LMS;
* a replacement for student information systems;
* a replacement for HR or finance systems;
* a replacement for research repositories;
* simply a university social-media platform;
* simply a university website or portal;
* simply a digital directory;
* simply a GIS or campus map;
* simply a digital twin;
* an AI chatbot for the university;
* a complete metaverse or virtual-campus environment;
* an assumption that all university data should be centralized;
* an assumption that all university information should be publicly accessible; or
* a claim that the university's existing systems are inadequate without first investigating them.

Some of these capabilities may interact with CAMPUS in the future. None defines the project by itself.

**Status: Established project boundaries.**

---

## 2.13 Definition of the R&D Object

The primary object of the current R&D effort is therefore not a finished software product.

It is the investigation of a proposition:

> **Can a university benefit from a persistent, permission-aware, provenance-aware, relationship-oriented digital layer that connects people, organizations, knowledge, education, research, places, services, opportunities, and institutional resources while interoperating with existing specialized systems?**

The prototype exists to make this proposition testable.

The research program exists to determine whether the proposition is useful, technically feasible, institutionally appropriate, governable, secure, and sufficiently valuable to justify further development.

**Status: Proposed R&D framing.**


# 3. Executive Summary

## 3.1 Overview

**CAMPUS** is an independently initiated research and development concept for an **experimental digital-campus architecture for universities**.

The project starts from a simple observation and research hypothesis: universities already contain extensive information, people, knowledge, services, facilities, opportunities, and institutional resources, but these resources are often organized across different systems, offices, communities, physical locations, and information environments. The existence of these resources does not necessarily make their relationships easy to discover or use.

CAMPUS investigates whether a persistent, relationship-oriented digital layer can improve this situation.

Rather than attempting to replace existing university systems, CAMPUS proposes an architectural layer that can connect people, organizations, educational activities, knowledge, research, places, facilities, services, opportunities, and institutional resources while preserving appropriate distinctions concerning authority, provenance, identity, permissions, privacy, and security.

The project is therefore concerned less with creating another collection of isolated applications and more with establishing an **infrastructure for relationships** across the university.

---

## 3.2 The Core Problem

Modern universities operate through many interconnected relationships.

A student is not simply a record in a student information system. The student may be connected to a program, courses, instructors, classmates, organizations, facilities, research opportunities, events, services, alumni, internships, and eventual career pathways.

Similarly, a faculty member may connect teaching, research, publications, students, laboratories, facilities, organizations, communities, and external collaborators.

A university facility may connect a physical location to equipment, responsible units, research activities, courses, events, services, and authorized users.

These relationships frequently cross organizational and technological boundaries.

Existing specialized systems may perform their individual functions effectively while still leaving the broader relationships difficult to discover.

CAMPUS therefore investigates whether the missing capability is not necessarily another standalone system, but a **persistent layer capable of representing, discovering, and navigating relationships across the university environment**.

This remains a research hypothesis. The project does not assume that existing VSU systems or processes are deficient, nor that a relational layer will necessarily produce the desired outcomes. These assumptions must be investigated through institutional discovery, user research, technical experimentation, and prototype validation.

---

## 3.3 The CAMPUS Approach

The proposed CAMPUS architecture is based on several principles.

### Relationship-oriented

The fundamental unit of the architecture is not only the individual record or feature, but the relationship between entities.

### Extensible

The architecture should support additional capabilities without requiring the entire university environment to be redesigned around one application.

### Interoperable

CAMPUS should work alongside specialized institutional systems rather than assuming that it must replace them.

### Provenance-aware

The system should distinguish official institutional information, community-generated knowledge, personal perspectives, unverified information, and research or scholarly knowledge.

### Permission-aware

Relationships and information should be exposed according to identity, authorization, privacy, institutional policy, and context.

### Human-centered

The architecture should address actual problems experienced by students, faculty, staff, researchers, administrators, alumni, communities, and other stakeholders rather than maximizing the number of technical features.

### Research-driven

Major assumptions should be tested through evidence, prototypes, experiments, stakeholder research, and documented validation.

---

## 3.4 Conceptual Architecture

At its foundation, CAMPUS proposes a relational model connecting entities such as:

**People ↔ Organizations ↔ Education ↔ Knowledge ↔ Research ↔ Places ↔ Activities ↔ Services ↔ Opportunities ↔ Communities**

These relationships can then support higher-level capabilities.

Potential dimensions include:

* **Digital Space / Community and Knowledge Layer**
* **Curriculum Continuity and Learning Records (CCLR)**
* **Pathways / Education-to-Career Continuity**
* **Research Discovery and Collaboration**
* **Spatial Campus / Digital Twin**
* **Local-First Digital Campus Infrastructure**
* **GIS, analytics, and future AI capabilities**

These dimensions represent possible areas of development rather than a commitment to implement all of them.

The common foundation is more important than any individual dimension: **identity, relationships, knowledge, discovery, place, search, interaction, provenance, permissions, and interoperability**.

---

## 3.5 Bounded R&D and MVP

The current phase of CAMPUS is moving from conceptual exploration toward **structured R&D and prototyping**.

The immediate objective is not to build a complete digital university.

Instead, the project will develop a small functional vertical slice capable of testing the core hypothesis.

The MVP is expected to focus on foundational capabilities involving:

* identity and basic roles;
* people and organizations;
* knowledge and institutional/community information;
* places and campus resources;
* relationships among entities;
* search and discovery;
* basic community interaction;
* provenance and information context;
* permissions and access boundaries; and
* a limited mechanism for interaction with or reference to external institutional systems.

The precise MVP specification will be established in the subsequent sections of this blueprint.

Capabilities such as a complete digital twin, comprehensive learning records, full education-to-career pathways, advanced research collaboration, large-scale GIS analytics, and sophisticated AI are not assumed to be MVP requirements.

They may be investigated as later-phase extensions or research experiments where justified by evidence.

---

## 3.6 Relationship to Existing University Systems

CAMPUS does not assume that universities should replace their existing specialized systems.

Enrollment, finance, human resources, learning management, research repositories, library services, identity infrastructure, and other institutional systems may continue to serve as authoritative systems for their respective domains.

CAMPUS instead investigates whether a separate relational layer can improve discovery and interaction across these systems and the physical and social university environment.

The actual relationship between CAMPUS and existing VSU systems remains unresolved until institutional discovery establishes:

* what systems currently exist;
* their ownership and responsibilities;
* authoritative data sources;
* available interfaces;
* identity infrastructure;
* data governance requirements;
* security constraints;
* interoperability capabilities;
* planned digital transformation initiatives; and
* institutional priorities.

This investigation is an important part of the R&D program.

---

## 3.7 VSU Strategic Context

CAMPUS is being developed with reference to the **Visayas State University Strategic Plan 2017–2027** as a strategic context and alignment framework.

The Strategic Plan identifies directions including:

* World-Class Education;
* Globally Competitive Science and Technology;
* Empowered Communities;
* Sustainable Resource Generation;
* Client-Centered Governance;
* Versatile Spaces for Innovation; and
* Strong Alumni Engagement.

CAMPUS does not claim that the Strategic Plan requires or mandates its development.

Instead, the R&D investigates whether a relational digital-campus architecture could operationally support selected existing university directions by improving connections among educational resources, research, communities, services, innovation spaces, institutional resources, and alumni or external relationships.

VSU's **DIGITS** initiative is also treated as relevant institutional context. Publicly described directions concerning digital governance, learning, research and innovation, stakeholder experience, smart and green campus development, infrastructure, cybersecurity, digital culture, sustainability, analytics, automation, and future AI capabilities may overlap with areas investigated by CAMPUS.

However, the internal architecture, implementation status, ownership, technical interfaces, and institutional relationship between DIGITS and CAMPUS must not be assumed without further evidence.

Possible relationships—including complementary experimentation, integration, incorporation into a broader ecosystem, independent development, or other institutional arrangements—remain open for investigation.

---

## 3.8 Local-First and Hybrid Architecture

One architectural direction being investigated by CAMPUS is a **local-first or hybrid digital-campus model**.

Under this approach, selected campus capabilities could operate within university-controlled infrastructure or local networks while synchronizing appropriate information with external systems and services when connectivity is available.

This direction is motivated by questions concerning resilience, continuity, connectivity constraints, infrastructure control, and institutional data stewardship.

It is not currently assumed that every CAMPUS capability must operate locally or that a local-first architecture is necessarily the final deployment model.

The R&D effort must determine where local operation provides meaningful benefits and what technical, security, synchronization, infrastructure, and governance requirements it introduces.

---

## 3.9 Research Program

CAMPUS is fundamentally an R&D project rather than a predetermined software-development exercise.

Its research program must investigate questions including:

* whether the identified relational problem exists in meaningful form;
* which university relationships are most valuable to users;
* whether users can discover information and opportunities more effectively through relational navigation;
* what information should be connected and what should remain separated;
* how existing institutional systems can participate without losing their authority;
* what technical architecture can support the model;
* whether local-first or hybrid operation is practical;
* what privacy, security, provenance, and governance mechanisms are required;
* which capabilities belong in an MVP;
* what measurable outcomes can demonstrate value; and
* whether the resulting architecture is sufficiently useful and feasible to justify further development.

The project should remain capable of narrowing, modifying, or disproving its assumptions.

---

## 3.10 Prototype as Research Instrument

The CAMPUS prototype has two simultaneous roles.

First, it is a **software artifact** demonstrating that the proposed architecture can be implemented.

Second, it is a **research instrument** through which assumptions can be tested.

The prototype should therefore prioritize a small number of coherent relationships and user journeys rather than attempting to demonstrate the entire CAMPUS vision.

Evidence generated through the prototype may include:

* architectural feasibility;
* technical performance;
* interoperability experiments;
* usability observations;
* user feedback;
* information-discovery behavior;
* relationship-navigation patterns;
* governance and permission issues;
* implementation effort;
* infrastructure requirements; and
* documented design decisions.

The prototype must not be used to imply institutional adoption, operational deployment, or validated impact unless those outcomes have actually been demonstrated.

---

## 3.11 Expected R&D Contribution

The immediate expected contribution of CAMPUS is not simply a new university application.

The project seeks to produce:

1. a coherent digital-campus architecture;
2. a validated or revised relational model;
3. a bounded functional prototype;
4. technical specifications and implementation evidence;
5. research findings concerning university information and relationship discovery;
6. evidence concerning integration with existing institutional systems;
7. a documented governance, privacy, security, and provenance model;
8. an evidence-based assessment of local-first and hybrid architectures;
9. a development roadmap informed by validation; and
10. a foundation for determining whether and how CAMPUS should progress beyond the experimental stage.

---

## 3.12 Current R&D Position

CAMPUS should currently be understood as:

> **A proposed research and development architecture for a relationship-oriented digital layer over the university, being investigated through a bounded prototype and institutional/technical validation.**

It should not yet be represented as:

* an officially adopted VSU platform;
* an approved university system;
* an established institutional architecture;
* a replacement for existing university systems;
* a validated solution to all university information and coordination problems; or
* a complete product ready for institution-wide deployment.

The immediate objective is to move from **conceptual coherence to evidence**.

That means establishing what the architecture can actually do, what users need, what existing systems already provide, what integration is possible, what institutional constraints apply, and whether the central relational hypothesis merits continued development.

---

## 3.13 Executive Summary in One Sentence

**CAMPUS investigates whether a persistent, permission-aware and provenance-aware relational digital layer can connect the university's people, knowledge, education, research, places, services, opportunities and resources in ways that improve discovery, interaction and continuity, while interoperating with—not replacing—existing institutional systems.**


# 4. Problem Statement

## 4.1 Problem Context

A university is not a single information environment.

It is a network of people, academic programs, courses, research activities, organizations, facilities, services, communities, institutional processes, physical spaces, external partners, and accumulated knowledge.

These entities are connected through numerous relationships.

A student may simultaneously belong to an academic program, enroll in courses, interact with instructors and classmates, participate in organizations, use facilities, attend events, access institutional services, encounter research opportunities, and eventually transition into employment, further education, or community engagement.

A faculty member may teach courses, supervise students, conduct research, publish work, participate in organizations, use facilities, collaborate with external partners, and contribute to institutional activities.

An administrator may need to understand relationships among people, services, offices, facilities, policies, activities, and institutional resources.

These relationships form an important part of how the university operates.

However, information about these entities and relationships may exist across different systems, offices, documents, websites, databases, physical locations, communities, and informal channels.

The central problem investigated by CAMPUS is whether this fragmentation makes important relationships unnecessarily difficult to **discover, understand, navigate, maintain, or act upon**.

**Status: Proposed research problem; requires empirical validation.**

---

## 4.2 The Information Fragmentation Problem

University information can be distributed across systems that are designed around particular institutional functions.

For example, one system may primarily represent student records, another learning activities, another research outputs, another administrative information, and another physical facilities.

This functional specialization is not inherently a problem.

Specialized systems can provide important advantages in authority, security, performance, governance, and operational focus.

The research problem arises when users need to understand relationships that cross those boundaries.

A user may need to answer questions such as:

* Who teaches this course and what other activities are they involved in?
* What research opportunities are related to my program?
* Which people or organizations are working on this topic?
* What facilities are available for this activity?
* Where is the relevant service or resource located?
* What opportunities connect this educational experience to a future pathway?
* Which university resources are related to this project?
* Who should I contact about a particular activity or facility?
* What other information, people, or opportunities are connected to something I have already discovered?

These questions are relational rather than purely transactional.

CAMPUS investigates whether existing information environments adequately support such discovery.

**Status: Proposed problem formulation.**

---

## 4.3 The Relationship Discovery Problem

Traditional information systems frequently organize information according to institutional functions, organizational boundaries, or individual records.

This can make information available without necessarily making its broader relationships visible.

For example:

> A course record may tell a student when and where a course occurs.

But the broader relationship graph might include:

> **Course → Program → Instructor → Research → Laboratory → Student Organization → Event → Opportunity**

The additional relationships may be valuable even though they do not belong to the course record itself.

CAMPUS therefore investigates whether university users need a persistent mechanism for moving from one relevant entity to related entities without repeatedly starting a new search across disconnected information environments.

The proposed problem is not that existing systems cannot store relationships.

Rather, the question is whether **relationships that already exist across the university are sufficiently discoverable and usable from the user's perspective**.

**Status: Proposed research problem.**

---

## 4.4 The Continuity Problem

University relationships change over time.

Students progress through programs.

Courses change.

Faculty move between roles.

Research projects begin and end.

Organizations change membership.

Events occur and disappear from active information environments.

Facilities change availability.

Students graduate and become alumni.

Research outputs remain relevant after their original project ends.

Institutional knowledge may therefore lose practical continuity when it is tied too strongly to individual transactions, systems, organizational units, or temporary activities.

CAMPUS investigates whether a persistent relational model could preserve useful continuity across these changes.

This includes potential continuity across:

* educational experiences;
* people and communities;
* curriculum and learning activities;
* research;
* institutional knowledge;
* physical spaces;
* opportunities;
* university services; and
* education-to-career transitions.

The project does not assume that persistence is always desirable. Information may have retention, privacy, security, legal, or governance constraints.

The research question is therefore not simply how to preserve more information, but:

> **What relationships should persist, for how long, for whom, under what authority, and with what controls?**

**Status: Proposed research problem.**

---

## 4.5 The Discovery-to-Action Problem

Finding information is not necessarily equivalent to being able to act on it.

A university user may discover a course, research project, facility, organization, service, event, or opportunity but still need to determine:

* whether it is relevant;
* who is responsible;
* whether access is permitted;
* what prerequisites exist;
* how to participate;
* what related resources exist; and
* what action should happen next.

CAMPUS therefore investigates a broader progression:

**Discovery → Context → Relationship → Decision → Interaction**

The project does not claim that a digital relational layer will automatically solve this progression.

Instead, the prototype should investigate whether presenting relationships and contextual information can reduce friction between discovering something and understanding what can be done with it.

**Status: Proposed research problem.**

---

## 4.6 The Institutional Knowledge Problem

Universities possess knowledge that is not always contained within formal databases.

Relevant knowledge may exist in:

* institutional documents;
* research publications;
* project records;
* organizational pages;
* community discussions;
* faculty and staff expertise;
* student experiences;
* alumni networks;
* physical locations;
* informal institutional knowledge; and
* external partnerships.

These sources have different levels of authority, reliability, permanence, and sensitivity.

A system that simply aggregates them without distinguishing their provenance could create new problems rather than solve existing ones.

CAMPUS therefore treats **knowledge provenance and context** as part of the problem.

The research must investigate how a digital-campus architecture can improve discovery while maintaining meaningful distinctions between official information, community contributions, personal opinions, unverified information, and scholarly knowledge.

**Status: Established architectural concern; specific problem magnitude and implementation remain unresolved.**

---

## 4.7 The Physical-Digital Disconnect

University activities are simultaneously digital and physical.

Students attend physical classes while using digital learning resources.

Researchers use physical laboratories while collaborating through digital systems.

Services operate from offices and facilities that users need to locate.

Events occur in physical spaces but are discovered digitally.

Equipment, rooms, laboratories, and other resources have spatial relationships that may be important to their use.

This creates a potential gap between information about the university and the physical environment in which university activities occur.

CAMPUS therefore investigates whether representing meaningful relationships between **digital entities and physical places** can improve discovery and interaction.

This provides a potential foundation for later spatial and digital-twin capabilities, but does not establish that a full digital twin is necessary.

**Status: Proposed research direction arising from the broader problem.**

---

## 4.8 The System Boundary Problem

The existence of multiple specialized university systems creates an architectural question.

A relational digital-campus layer could potentially duplicate information that already exists elsewhere.

If it becomes another independent source of truth, it may increase:

* data duplication;
* synchronization complexity;
* maintenance requirements;
* security exposure;
* governance burden;
* conflicting information; and
* institutional cost.

CAMPUS therefore faces a fundamental systems-design problem:

> **How can a relational discovery layer provide meaningful cross-system relationships without unnecessarily duplicating or replacing authoritative institutional systems?**

This question is central to the technical and institutional R&D program.

Possible approaches may include APIs, federation, indexing, metadata references, controlled synchronization, event-driven integration, local replicas, or other mechanisms.

No particular integration mechanism is established at this stage.

**Status: Established design challenge; implementation unresolved.**

---

## 4.9 The Institutional Context Problem

Before CAMPUS can be meaningfully evaluated as a university architecture, the existing institutional environment must be understood.

This includes determining:

* what digital systems currently exist;
* which systems are authoritative for particular information;
* who owns and operates them;
* how identities are managed;
* what interfaces are available;
* what data may be exchanged;
* what privacy and security requirements apply;
* what institutional policies govern information;
* what digital transformation initiatives are already planned;
* what infrastructure exists;
* what technical constraints exist; and
* what users currently do when existing systems do not meet their needs.

Without this investigation, it would be premature to claim that CAMPUS addresses a specific VSU systems deficiency.

The R&D program must therefore include **institutional discovery before substantial assumptions about integration or deployment are made**.

**Status: Established R&D requirement.**

---

# 4.10 Who Experiences the Potential Problem?

The problem may manifest differently for different stakeholders.

### Students

Potential challenges include discovering relevant people, opportunities, services, organizations, research activities, facilities, and pathways across organizational or system boundaries.

### Faculty and Researchers

Potential challenges include discovering collaborators, expertise, students, facilities, research activities, opportunities, institutional resources, and relevant knowledge.

### Staff and Administrators

Potential challenges may include navigating relationships among services, offices, resources, facilities, people, activities, and institutional information.

### University Leadership

Potential challenges may include understanding relationships among institutional resources, activities, communities, initiatives, and strategic priorities without creating unnecessary duplication of operational systems.

### Alumni

Potential challenges may include maintaining meaningful relationships with university communities, expertise, opportunities, research, and institutional activities after graduation.

### External Communities and Partners

Where appropriately authorized, external stakeholders may need to discover relevant university expertise, research, services, facilities, programs, or partnership opportunities.

These are **potential user needs**, not established findings about VSU users.

They must be validated through stakeholder research.

---

# 4.11 What CAMPUS Does Not Claim

To maintain research discipline, CAMPUS does not currently claim that:

* VSU lacks digital systems;
* existing VSU systems are ineffective;
* university information is universally fragmented;
* users currently experience all of the problems described above;
* users want a new digital-campus platform;
* centralizing information is inherently beneficial;
* connecting more information will necessarily improve outcomes;
* a graph or relational architecture is necessarily superior to existing approaches;
* local-first infrastructure is necessarily appropriate for VSU;
* artificial intelligence is required to solve the problem;
* a digital twin is required to solve the problem; or
* CAMPUS is necessarily the appropriate institutional solution.

These are questions that the R&D program must investigate rather than assumptions that the project should encode as conclusions.

---

# 4.12 Preliminary Problem Formulation

Based on the current conceptual work, the problem can be provisionally formulated as follows:

> **University information and resources are organized across multiple people, organizations, systems, physical spaces, activities, and knowledge environments. While this specialization may be necessary for institutional operations, it may make cross-cutting relationships difficult for users to discover, understand, navigate, and maintain over time. CAMPUS investigates whether a persistent, permission-aware and provenance-aware relational layer can improve these forms of discovery and continuity without unnecessarily replacing or duplicating authoritative institutional systems.**

**Status: Proposed research formulation.**

---

# 4.13 Evidence Required

The problem statement should not be considered fully validated until the project gathers evidence from several sources.

### Institutional evidence

Investigation of existing university systems, policies, processes, data ownership, infrastructure, and planned initiatives.

### User evidence

Interviews, observation, surveys, usability studies, journey mapping, and other appropriate methods involving representative stakeholder groups.

### Technical evidence

Experiments demonstrating the feasibility and limitations of representing, querying, integrating, synchronizing, and securing relationships across relevant information sources.

### Comparative and scholarly evidence

Relevant research concerning information architecture, knowledge graphs, interoperability, digital campuses, learning records, information discovery, local-first systems, digital twins, human-computer interaction, and related fields.

### Prototype evidence

Observed behavior and feedback from users interacting with a bounded CAMPUS prototype.

The purpose of these evidence streams is not merely to confirm CAMPUS.

They should be capable of identifying cases where the architecture provides little value, introduces unacceptable complexity, duplicates existing capabilities, or requires substantial modification.

---

# 4.14 Problem Statement Summary

The CAMPUS R&D problem can therefore be summarized as five connected questions:

1. **Discovery**
   Can users more easily discover relevant people, knowledge, resources, places, services, and opportunities when their relationships are explicitly represented?

2. **Context**
   Does relational context help users understand what they discover and determine its relevance?

3. **Continuity**
   Can useful relationships persist across changes in courses, projects, people, organizations, activities, and educational stages without violating appropriate retention and privacy requirements?

4. **Interoperability**
   Can this relational layer work alongside authoritative institutional systems without becoming another unnecessary system of record?

5. **Value**
   Does the resulting experience produce measurable improvements sufficient to justify the technical, institutional, governance, and resource costs involved?

These questions establish the basis for the research questions in the next section.


# 5. Research Questions

## 5.1 Purpose of the Research Questions

The research questions define what the CAMPUS R&D program is attempting to learn.

They are not product requirements and should not be interpreted as evidence that the proposed CAMPUS architecture is already validated.

The questions are intended to guide:

* institutional discovery;
* user research;
* architectural design;
* technical experiments;
* prototype development;
* usability evaluation;
* governance analysis;
* integration investigation; and
* decisions concerning whether and how CAMPUS should proceed beyond the experimental stage.

The research program should remain capable of producing findings that narrow, modify, or reject aspects of the current CAMPUS concept.

---

# 5.2 Primary Research Question

> **Can a persistent, permission-aware and provenance-aware relational digital layer improve the discovery, understanding, interaction, and continuity of relationships among people, knowledge, education, research, places, services, opportunities, and communities within a university, while interoperating appropriately with existing institutional systems?**

This question contains five dimensions:

1. **Can it be useful?**
2. **Can it improve discovery and interaction?**
3. **Can relationships remain meaningful over time?**
4. **Can the architecture coexist with existing systems?**
5. **Can the resulting value justify its technical and institutional complexity?**

**Status: Proposed primary research question.**

---

# 5.3 Research Question Group A — Problem and User Need

### RQ-A1

**What information, relationships, and university resources do students, faculty, staff, researchers, administrators, alumni, and other relevant stakeholders currently have difficulty discovering or navigating?**

This establishes whether the hypothesized problem actually occurs and for whom.

### RQ-A2

**How do users currently discover people, knowledge, services, opportunities, facilities, organizations, research activities, and other university resources?**

The purpose is to identify existing workflows rather than assuming that current discovery is inadequate.

### RQ-A3

**Where do users encounter friction when information or relationships cross organizational, technological, or physical boundaries?**

### RQ-A4

**Which relationships do users actually consider useful when navigating the university?**

This question is particularly important because a technically complete relationship graph could still be practically useless if the relationships represented are not meaningful to users.

### RQ-A5

**Which user groups experience the strongest need for cross-system or cross-context discovery, and under what circumstances?**

**Status: Proposed research questions.**

---

# 5.4 Research Question Group B — Relational Model

### RQ-B1

**What entities and relationships are necessary to represent the most valuable forms of university discovery and interaction?**

### RQ-B2

**Which relationships should be persistent, and which should remain temporary or contextual?**

For example, the relationship between a person and a course may be meaningful during a particular academic period, while a research publication may remain associated with a researcher for much longer.

### RQ-B3

**What kinds of relationships are most useful for navigation and discovery?**

Possible categories include:

* membership;
* authorship;
* teaching;
* enrollment;
* collaboration;
* participation;
* location;
* ownership;
* responsibility;
* prerequisite;
* association;
* recommendation;
* availability;
* temporal relationship; and
* institutional authority.

These are examples for investigation, not a finalized relationship vocabulary.

### RQ-B4

**How should temporal changes in relationships be represented without destroying useful historical context or creating unnecessary data retention?**

### RQ-B5

**Can a common relational model support multiple CAMPUS dimensions without becoming unnecessarily complex?**

This question is particularly relevant to the relationship among the foundational CAMPUS layer and future dimensions such as CCLR, Pathways, Research, and Spatial/Digital Twin capabilities.

**Status: Proposed research questions.**

---

# 5.5 Research Question Group C — Discovery and User Experience

### RQ-C1

**Does relationship-oriented navigation enable users to discover relevant information, people, resources, or opportunities that they would not otherwise discover easily?**

### RQ-C2

**Does providing relational context improve a user's understanding of discovered information?**

### RQ-C3

**Does relational navigation reduce the effort required to move from an initial discovery to a useful action?**

### RQ-C4

**Which interaction patterns are most effective for relationship discovery?**

Possible approaches include:

* search;
* linked entity navigation;
* contextual recommendations;
* maps;
* timelines;
* relationship graphs;
* organizational views;
* profiles;
* activity feeds; and
* structured pathways.

The R&D process should determine which patterns actually provide value rather than assuming that graph visualization, for example, is inherently useful.

### RQ-C5

**When does exposing more relationships improve discovery, and when does it create information overload?**

This question is important because the central CAMPUS proposition could fail if increasing connectivity simply makes the information environment more complicated.

**Status: Proposed research questions.**

---

# 5.6 Research Question Group D — Continuity

### RQ-D1

**Can a relational architecture preserve useful continuity across changes in people, courses, programs, projects, organizations, facilities, and activities?**

### RQ-D2

**Which relationships remain valuable after an immediate activity or institutional transaction has ended?**

### RQ-D3

**Can educational, research, organizational, and community relationships be represented across time without compromising privacy or institutional requirements?**

### RQ-D4

**What forms of continuity are most valuable to users?**

Potential areas include:

* curriculum continuity;
* learning history;
* research participation;
* organizational participation;
* mentorship;
* alumni relationships;
* education-to-career pathways;
* institutional knowledge; and
* community relationships.

### RQ-D5

**What information should expire, become inaccessible, or lose visibility as relationships change?**

**Status: Proposed research questions.**

---

# 5.7 Research Question Group E — Knowledge and Provenance

### RQ-E1

**How should CAMPUS distinguish official institutional information from community-generated knowledge, personal opinions, unverified information, and scholarly knowledge?**

### RQ-E2

**What provenance information is necessary for users to judge the authority, context, and reliability of information?**

### RQ-E3

**Who should be authorized to create, modify, verify, endorse, or retire different categories of information?**

### RQ-E4

**How should conflicting or outdated information be represented and resolved?**

### RQ-E5

**Can a more connected information environment improve discovery without increasing the risk of misinformation, misattribution, or unauthorized disclosure?**

**Status: Proposed research questions; governance mechanisms require further investigation.**

---

# 5.8 Research Question Group F — Institutional Systems and Interoperability

### RQ-F1

**What existing university systems should CAMPUS connect to, reference, index, synchronize with, or remain independent from?**

This cannot be answered conceptually alone. It requires institutional discovery.

### RQ-F2

**Which systems should remain authoritative sources for particular categories of information?**

### RQ-F3

**What integration mechanisms are technically and institutionally feasible?**

Potential approaches include:

* APIs;
* federated identity;
* metadata exchange;
* event-based synchronization;
* controlled replication;
* indexing;
* links to authoritative systems; and
* other interoperability mechanisms.

These are candidate approaches rather than predetermined requirements.

### RQ-F4

**How can CAMPUS avoid becoming an unnecessary duplicate system of record?**

### RQ-F5

**What data governance, ownership, security, and institutional policy constraints affect cross-system relationships?**

### RQ-F6

**How might CAMPUS coexist with existing and planned VSU digital transformation initiatives, including DIGITS, without assuming an institutional relationship that has not been established?**

**Status: Proposed research questions; dependent on institutional discovery.**

---

# 5.9 Research Question Group G — Local-First and Hybrid Architecture

### RQ-G1

**Which CAMPUS capabilities could meaningfully operate within university-controlled local infrastructure?**

### RQ-G2

**What benefits would local-first operation provide in terms of resilience, continuity, connectivity, data stewardship, and institutional control?**

### RQ-G3

**What technical costs would local-first operation introduce?**

Potential issues include:

* synchronization;
* conflict resolution;
* distributed identity;
* data consistency;
* deployment;
* maintenance;
* security;
* hardware requirements; and
* operational complexity.

### RQ-G4

**Which CAMPUS information should be available locally, remotely, or through a hybrid model?**

### RQ-G5

**Under what conditions would a local-first architecture provide sufficient value to justify its additional complexity?**

**Status: Proposed research questions.**

---

# 5.10 Research Question Group H — Security, Privacy, and Governance

### RQ-H1

**What information and relationships require different levels of visibility and access control?**

### RQ-H2

**How should identity, roles, permissions, consent, and institutional authority affect relationship visibility?**

### RQ-H3

**How can CAMPUS preserve useful relationships without exposing sensitive personal or institutional information?**

### RQ-H4

**What governance model is required for community-generated information?**

### RQ-H5

**How should information be corrected, disputed, moderated, archived, or removed?**

### RQ-H6

**What security architecture is appropriate for a system connecting multiple institutional and community contexts?**

### RQ-H7

**What legal, regulatory, institutional, and ethical requirements must shape the architecture?**

These questions must be investigated with appropriate institutional, legal, privacy, security, and technical expertise before operational deployment.

**Status: Proposed research questions.**

---

# 5.11 Research Question Group I — Technical Feasibility

### RQ-I1

**Can the proposed relational model be implemented efficiently enough for practical university use?**

### RQ-I2

**What data architecture best represents the relationships required by CAMPUS?**

Potential approaches may include relational databases, graph-oriented models, hybrid data models, search indexes, event stores, or combinations of these.

No particular database technology is established by the conceptual architecture.

### RQ-I3

**How should search, relationship traversal, indexing, and synchronization operate at university scale?**

### RQ-I4

**What architecture supports extensibility without introducing excessive complexity?**

### RQ-I5

**What infrastructure requirements would a CAMPUS deployment impose on a university?**

### RQ-I6

**Can a small vertical-slice prototype demonstrate the central relational hypothesis without requiring a complete institutional data environment?**

This question directly informs MVP design.

**Status: Proposed technical research questions.**

---

# 5.12 Research Question Group J — Value and Validation

### RQ-J1

**What measurable outcomes would demonstrate that CAMPUS provides meaningful value?**

Possible measures may include:

* discovery success;
* time to relevant information;
* number of useful relationships discovered;
* task completion;
* navigation effort;
* user comprehension;
* opportunity discovery;
* information accuracy;
* perceived usefulness;
* repeated use; and
* qualitative evidence of improved continuity.

The appropriate measures must be determined through the research design.

### RQ-J2

**How should CAMPUS be compared with existing discovery methods?**

A prototype should not simply be evaluated in isolation.

Where feasible, research should compare relevant user tasks against existing workflows or baseline interfaces.

### RQ-J3

**What kinds of evidence would justify expanding the MVP?**

### RQ-J4

**What findings would justify narrowing, redesigning, or discontinuing particular CAMPUS capabilities?**

### RQ-J5

**At what point would the evidence be sufficient to justify further institutional or technical investment?**

**Status: Proposed research questions.**

---

# 5.13 Research Question Group K — Major Dimensions

The broader CAMPUS dimensions generate additional research questions, but these should remain subordinate to the foundational architecture.

### CCLR — Curriculum Continuity and Learning Records

**RQ-K1:** Can a persistent relationship model improve continuity across curriculum, courses, learning experiences, and educational progression?

**RQ-K2:** What learning-related information can appropriately persist across educational stages?

**RQ-K3:** What existing learning and student systems would need to participate?

**Status: Proposed future research direction.**

### Pathways — Education-to-Career Continuity

**RQ-K4:** Can relationships among education, skills, activities, research, opportunities, alumni, and external organizations help users navigate education-to-career pathways?

**RQ-K5:** What institutional and privacy constraints apply to such relationships?

**Status: Proposed future research direction.**

### Research Discovery and Collaboration

**RQ-K6:** Can a relational model improve discovery of researchers, expertise, publications, projects, facilities, and collaboration opportunities?

**RQ-K7:** Which research relationships should be public, restricted, institutional, or private?

**Status: Proposed future research direction.**

### Spatial / Digital Twin

**RQ-K8:** Which spatial relationships provide meaningful value beyond conventional maps or directories?

**RQ-K9:** Under what circumstances does a digital-twin representation improve university discovery or management?

**Status: Proposed future research direction.**

These dimensions should not automatically enter the MVP merely because they generate interesting research questions.

---

# 5.14 Priority Research Questions for the Initial R&D Phase

The full research-question set is intentionally broad because CAMPUS is an architectural R&D program.

However, the initial prototype should concentrate on a smaller core.

The first phase should prioritize:

### Priority 1 — Does the problem exist?

> **RQ-P1:** Do university users experience meaningful difficulty discovering relationships among people, knowledge, resources, places, services, and opportunities across existing information environments?

### Priority 2 — Are relationships useful?

> **RQ-P2:** Which relationships provide meaningful value to users when navigating university information and resources?

### Priority 3 — Does the relational interface help?

> **RQ-P3:** Does representing and navigating these relationships improve discovery, understanding, or task completion compared with existing approaches?

### Priority 4 — Can it coexist with existing systems?

> **RQ-P4:** Can the relational layer be implemented without unnecessarily replacing or duplicating authoritative university systems?

### Priority 5 — Can it be implemented responsibly?

> **RQ-P5:** What identity, provenance, privacy, security, governance, and technical mechanisms are necessary for such a layer to operate responsibly?

### Priority 6 — Is it worth continuing?

> **RQ-P6:** Does evidence from users, technical experiments, and institutional discovery justify expanding CAMPUS beyond the initial prototype?

These six questions form the core research spine for the first R&D cycle.

---

# 5.15 Research Question → Evidence Mapping

The questions should ultimately connect directly to evidence.

| Research area               | Primary evidence                                                     |
| --------------------------- | -------------------------------------------------------------------- |
| User need                   | Interviews, observation, surveys, task analysis                      |
| Existing discovery behavior | Workflow studies, system/process mapping                             |
| Valuable relationships      | User research, prototype testing                                     |
| Relational UX               | Controlled or comparative usability studies                          |
| Continuity                  | Longitudinal/use-case analysis, stakeholder research                 |
| Provenance                  | Information-governance analysis, prototype testing                   |
| Interoperability            | System inventory, technical experiments, API/interface investigation |
| Local-first architecture    | Technical prototypes and performance experiments                     |
| Privacy/security            | Threat modeling, architecture review, institutional/legal analysis   |
| Technical feasibility       | Prototype implementation and benchmarking                            |
| Institutional fit           | Stakeholder consultation and systems discovery                       |
| MVP value                   | User testing against defined tasks/baselines                         |
| Future expansion            | Evidence synthesis and decision review                               |

This mapping prevents the project from answering architectural questions purely through technical enthusiasm.

---

# 5.16 Falsification and Disconfirmation

Because CAMPUS is an R&D project, the research program should explicitly identify findings that would challenge the current hypothesis.

Examples include:

* users rarely need cross-system relationship discovery;
* existing systems already provide equivalent capabilities;
* relational navigation produces little measurable benefit;
* users find relationship-rich interfaces confusing or burdensome;
* maintaining relationship data creates unacceptable governance costs;
* integration requirements make the architecture impractical;
* privacy or security requirements prevent meaningful implementation;
* local-first operation introduces complexity without sufficient benefit;
* the value of CAMPUS is concentrated in a much narrower use case than currently envisioned; or
* another architectural approach demonstrates greater suitability for the identified problem.

Such findings should not be treated as failures of the research process.

They are valid R&D outcomes that can narrow the scope or redirect the project.

**Status: Established R&D principle.**

---

# 5.17 Research Question Hierarchy

The overall R&D logic can be represented as:

```text
                    PRIMARY QUESTION
                          │
                          ▼
             Does a relational digital layer
             create meaningful university value?
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
     USER NEED        ARCHITECTURE       INSTITUTION
        │                 │                 │
        ▼                 ▼                 ▼
   What problem?     What relationships?  What systems?
   For whom?         How represented?     What constraints?
        │                 │                 │
        └─────────────────┼─────────────────┘
                          ▼
                     PROTOTYPE
                          │
             ┌────────────┼────────────┐
             ▼            ▼            ▼
          Usability   Technical     Governance
          evidence    evidence      evidence
             │            │            │
             └────────────┼────────────┘
                          ▼
                       DECISION
                          │
             ┌────────────┼────────────┐
             ▼            ▼            ▼
           Expand       Modify       Narrow/
                                     Stop
```

The resulting decision should be evidence-based rather than predetermined.

---

## 5.18 Research Questions and Project Scope

The existence of a research question does not imply that it belongs in the MVP.

The project should distinguish:

**Foundational questions**
Questions required to determine whether CAMPUS itself is viable.

**MVP questions**
Questions that can be investigated through the first functional vertical slice.

**Future-phase questions**
Questions concerning dimensions that may be developed after the foundation is validated.

**Research-only questions**
Interesting technical or conceptual questions that may be investigated without committing them to product development.

This distinction will be used in subsequent sections to prevent the research agenda from becoming a mechanism for uncontrolled feature expansion.

---

## 5.19 Research Objective for R&D Blueprint v0.1

The initial research objective can therefore be stated as:

> **To determine whether a relationship-oriented digital layer can provide measurable value in university information discovery and interaction, whether such a layer can be implemented responsibly alongside existing institutional systems, and what architectural, technical, governance, and institutional conditions would be required for further development.**

**Status: Proposed R&D objective.**


# 6. CAMPUS Conceptual Architecture

## 6.1 Architectural Purpose

The CAMPUS conceptual architecture defines the relationships among the principal entities, capabilities, boundaries, and future dimensions of the CAMPUS system.

It provides the conceptual foundation from which the MVP, technical architecture, prototype, research experiments, and future development can be derived.

The architecture is intentionally broader than the initial MVP.

It describes the **architectural space being investigated**, while subsequent sections determine which parts should actually be implemented.

**Status: Proposed architectural model.**

---

# 6.2 Core Architectural Principle

The foundational principle of CAMPUS is:

> **The university should be represented not only as a collection of information and services, but as a network of meaningful relationships among people, organizations, knowledge, education, research, places, activities, services, opportunities, and communities.**

CAMPUS therefore prioritizes:

**relationships over isolated features;**

**infrastructure over feature accumulation;**

**discovery over duplication;**

**context over raw aggregation;**

and

**interoperability over replacement.**

The architecture should make relationships useful without requiring every university function to be rebuilt inside CAMPUS.

---

# 6.3 Conceptual Architecture Overview

The CAMPUS architecture can be represented as five broad conceptual layers:

```text
┌───────────────────────────────────────────────────────────────────┐
│                        CAMPUS EXPERIENCE                          │
│                                                                   │
│  Search • Discovery • Profiles • Communities • Places •          │
│  Pathways • Activities • Knowledge • Opportunities • Services    │
└───────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────────┐
│                    RELATIONAL CAMPUS LAYER                        │
│                                                                   │
│  Entities • Relationships • Context • Time • Provenance          │
│  Identity • Permissions • Status • Visibility                    │
└───────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────────┐
│                    KNOWLEDGE & DISCOVERY LAYER                    │
│                                                                   │
│  Search • Indexing • Relationship Traversal • Metadata           │
│  Knowledge Organization • Contextual Discovery                   │
└───────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────────┐
│                   INTEGRATION & SYSTEM LAYER                      │
│                                                                   │
│  Institutional Systems • External Systems • APIs • Identity      │
│  Synchronization • References • Controlled Data Exchange         │
└───────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────────┐
│                  UNIVERSITY INFRASTRUCTURE                        │
│                                                                   │
│  Local Infrastructure • Networks • Cloud • Devices • Facilities  │
│  Physical Campus • Existing Institutional Technology             │
└───────────────────────────────────────────────────────────────────┘
```

These layers are conceptual rather than a finalized software architecture.

The central architectural object is the **Relational Campus Layer**.

---

# 6.4 The Relational Campus Layer

The Relational Campus Layer is the conceptual core of CAMPUS.

It represents entities and the relationships among them while preserving the context required to interpret those relationships.

For example:

```text
                ┌──────────────┐
                │    Person    │
                └──────┬───────┘
                       │
             member of │
                       ▼
                ┌──────────────┐
                │ Organization │
                └──────┬───────┘
                       │
                    hosts
                       ▼
                ┌──────────────┐
                │    Event     │
                └──────┬───────┘
                       │
                  located at
                       ▼
                ┌──────────────┐
                │    Place     │
                └──────┬───────┘
                       │
                  contains
                       ▼
                ┌──────────────┐
                │   Facility   │
                └──────────────┘
```

The important information is not only that these entities exist.

It is that the system can represent:

* **what** the entities are;
* **how** they are related;
* **who** established or maintains the relationship;
* **when** the relationship is valid;
* **whether** it is active;
* **who** can see it;
* **what authority** supports it; and
* **what other relationships** can be discovered from it.

This provides the foundation for relational navigation.

---

# 6.5 Core Entity Domains

The conceptual model currently identifies several broad entity domains.

These are not necessarily database tables or final object types.

## 6.5.1 People

Potential entities include:

* students;
* faculty;
* staff;
* researchers;
* administrators;
* alumni;
* authorized external partners;
* community participants; and
* other appropriate users.

People may have multiple simultaneous or historical relationships with the university.

For example:

```text
Person
 ├── Student
 ├── Researcher
 ├── Organization Member
 ├── Course Participant
 ├── Event Participant
 └── Alumni
```

Roles should not necessarily be treated as permanent attributes. They may change over time.

**Status: Proposed conceptual model.**

---

## 6.5.2 Organizations

Organizations may include:

* colleges;
* departments;
* institutes;
* offices;
* laboratories;
* research groups;
* student organizations;
* alumni organizations;
* university communities; and
* appropriately represented external organizations.

Organizations may contain, own, operate, host, sponsor, administer, or participate in other entities.

**Status: Proposed conceptual model.**

---

## 6.5.3 Education

Educational entities may include:

* programs;
* courses;
* curricula;
* learning activities;
* competencies;
* educational resources;
* instructors;
* cohorts; and
* learning-related relationships.

These entities provide the conceptual foundation for the later **Curriculum Continuity and Learning Records (CCLR)** dimension.

CCLR should therefore be treated as a potential extension of the relational architecture rather than as an independent system disconnected from it.

**Status: Proposed conceptual model.**

---

## 6.5.4 Knowledge

Knowledge entities may include:

* institutional information;
* documents;
* policies;
* publications;
* datasets;
* research outputs;
* community contributions;
* discussions;
* guides;
* resources; and
* other appropriately governed knowledge objects.

Knowledge objects should carry contextual information concerning provenance, authority, status, and visibility.

**Status: Proposed conceptual model.**

---

## 6.5.5 Research

Research entities may include:

* researchers;
* research projects;
* publications;
* research groups;
* laboratories;
* facilities;
* datasets;
* research outputs;
* collaborations;
* funding or opportunity records where appropriate; and
* research-related events.

These entities form the foundation for the potential **Research Discovery and Collaboration** dimension.

**Status: Proposed conceptual model.**

---

## 6.5.6 Places and Facilities

Spatial entities may include:

* campuses;
* buildings;
* rooms;
* laboratories;
* offices;
* outdoor spaces;
* facilities;
* equipment;
* services located in physical spaces; and
* other meaningful geographic entities.

The architecture should allow digital entities to have spatial relationships without requiring every entity to become part of a complete digital twin.

**Status: Proposed conceptual model.**

---

## 6.5.7 Activities

Activities may include:

* events;
* discussions;
* projects;
* meetings;
* classes;
* research activities;
* organizational activities;
* community activities; and
* other time-bound interactions.

Activities are inherently temporal and therefore provide an important test case for representing changing relationships.

**Status: Proposed conceptual model.**

---

## 6.5.8 Opportunities

Opportunities may include:

* scholarships;
* internships;
* research opportunities;
* training;
* competitions;
* employment;
* projects;
* mentorship;
* grants;
* community activities; and
* other appropriately represented opportunities.

The architecture should investigate whether relationships among people, education, skills, research, organizations, and opportunities can support future pathway capabilities.

**Status: Proposed conceptual model.**

---

## 6.5.9 Services and Resources

These may include:

* university services;
* support offices;
* facilities;
* equipment;
* digital resources;
* institutional programs;
* community resources; and
* other university capabilities.

The objective is not to duplicate every service inside CAMPUS, but to make relevant services more discoverable and contextually connected.

**Status: Proposed conceptual model.**

---

# 6.6 Relationships as First-Class Architectural Objects

A defining property of CAMPUS is that relationships should be treated as meaningful objects rather than incidental links.

A relationship may contain contextual properties such as:

```text
Relationship
 ├── source
 ├── target
 ├── type
 ├── status
 ├── start
 ├── end
 ├── authority
 ├── provenance
 ├── visibility
 ├── permissions
 └── context
```

For example:

```text
Person ──TEACHES──► Course

Relationship:
    status: active
    period: Academic Year / Term
    authority: appropriate academic source
    visibility: authorized users
```

Or:

```text
Researcher ──AUTHORED──► Publication

Relationship:
    authorship type: author
    publication date: ...
    source: publication metadata
    visibility: ...
```

Or:

```text
Facility ──LOCATED_IN──► Building
```

Relationships may therefore have their own provenance, temporal validity, permissions, and contextual meaning.

This is an important conceptual distinction from simply connecting pages with hyperlinks.

**Status: Proposed architectural principle.**

---

# 6.7 Temporal Relationships

University relationships change.

CAMPUS should therefore treat time as a potentially important property of relationships.

For example:

```text
Student ──ENROLLED_IN──► Course
             │
             ├── Start: Term 1
             └── End: Term 1

Faculty ──MEMBER_OF──► Department
             │
             ├── Start: 2024
             └── End: 2027
```

The architecture should support the distinction between:

* current relationships;
* historical relationships;
* planned relationships;
* temporary relationships;
* recurring relationships; and
* expired relationships.

This provides a conceptual foundation for continuity without requiring all historical information to remain publicly visible.

**Status: Proposed architectural capability.**

---

# 6.8 Identity Layer

A relational architecture requires reliable identification of entities.

The CAMPUS identity concept therefore includes:

* authentication;
* identity;
* roles;
* organizational affiliation;
* authorization;
* permissions;
* account lifecycle;
* relationship ownership;
* institutional authority; and
* potentially external or federated identities.

However, CAMPUS should not automatically create a second independent identity infrastructure if appropriate institutional identity services already exist.

The architecture should therefore support integration with authoritative identity infrastructure where feasible.

The exact identity architecture is unresolved.

**Status: Identity requirement established; implementation unresolved.**

---

# 6.9 Provenance and Authority Layer

Every meaningful relationship or knowledge object may need some indication of where it came from and what authority supports it.

Conceptually:

```text
                 INFORMATION
                      │
             ┌────────┴────────┐
             ▼                 ▼
         PROVENANCE          AUTHORITY
             │                 │
      Where did it       Who can establish,
        come from?       modify, or verify it?
```

This enables CAMPUS to distinguish, for example:

```text
Official institutional information
          ≠
Community contribution
          ≠
Personal opinion
          ≠
Unverified information
          ≠
Scholarly/research knowledge
```

The distinction should be visible where it affects interpretation.

Provenance should not be treated merely as a technical metadata field. It is part of the trust model of the system.

**Status: Established architectural requirement; detailed implementation unresolved.**

---

# 6.10 Permissions and Visibility

Not every relationship should be visible to every user.

Conceptually:

```text
ENTITY / RELATIONSHIP
        │
        ▼
   AUTHORIZATION
        │
 ┌──────┼──────┐
 ▼      ▼      ▼
Public  Role   Restricted
        based
```

Visibility may depend on:

* identity;
* role;
* institutional affiliation;
* relationship;
* consent;
* data sensitivity;
* organizational policy;
* legal requirements;
* security requirements; and
* context.

The architecture should therefore avoid assuming that a relational model means universal transparency.

In CAMPUS:

> **Connected does not mean public.**

**Status: Established architectural principle.**

---

# 6.11 Search and Discovery Layer

Search is a primary access mechanism to the relational model.

However, CAMPUS search should not be understood solely as keyword matching.

A conceptual discovery process is:

```text
QUERY
  │
  ▼
ENTITY
  │
  ▼
CONTEXT
  │
  ▼
RELATED ENTITIES
  │
  ▼
NEW DISCOVERY
  │
  ▼
ACTION / INTERACTION
```

A user may begin by searching for a person and then discover their research.

They may begin with a facility and discover its responsible organization.

They may begin with a course and discover related opportunities.

They may begin with a research topic and discover researchers, publications, laboratories, events, and potential collaborators.

This relationship traversal is one of the central behaviors that the MVP should test.

**Status: Proposed capability.**

---

# 6.12 Community and Knowledge Layer

CAMPUS may provide a community-facing environment in which appropriately authorized users can contribute knowledge, discussions, activities, recommendations, and contextual information.

However, community participation must coexist with institutional authority.

The architecture should therefore support distinctions between:

```text
Official
Community
Personal
Unverified
Scholarly
```

Potential mechanisms include:

* attribution;
* source information;
* timestamps;
* verification status;
* moderation;
* reporting;
* version history;
* role-based permissions; and
* institutional endorsement.

The precise governance model remains unresolved.

**Status: Proposed capability; governance unresolved.**

---

# 6.13 Place as an Architectural Dimension

Physical space is represented as part of the relational model rather than treated as an entirely separate subsystem.

For example:

```text
Person
   │
   └──uses──► Facility
                  │
                  └──located in──► Building
                                      │
                                      └──part of──► Campus
```

This allows spatial information to participate in ordinary discovery.

A map is therefore one possible interface to relationships rather than the definition of the spatial architecture itself.

This distinction leaves room for progressively more sophisticated spatial capabilities without requiring a full digital twin in the initial implementation.

**Status: Proposed architectural direction.**

---

# 6.14 Integration Boundary

CAMPUS exists alongside specialized institutional systems.

Conceptually:

```text
                  CAMPUS
                    │
         ┌──────────┼──────────┐
         │          │          │
         ▼          ▼          ▼
       ERP         LMS       Research
         │          │       Repository
         │          │          │
         └──────────┼──────────┘
                    │
              Other Systems
```

CAMPUS should not automatically become the authoritative source for information that belongs to another system.

Instead, the architecture may represent:

* references;
* metadata;
* relationship information;
* synchronized subsets;
* indexes;
* links;
* derived information; or
* other appropriately governed representations.

The exact approach depends on the nature of each system.

This creates an important architectural principle:

> **CAMPUS should know enough to connect the university without needing to own everything the university knows.**

**Status: Proposed architectural principle.**

---

# 6.15 Local-First / Hybrid Infrastructure

The conceptual architecture allows multiple deployment models.

### Model A — Centralized

```text
University Users
       │
       ▼
 CAMPUS Platform
       │
       ▼
Institutional Systems
```

### Model B — Local-First

```text
Campus Network
      │
      ▼
 Local CAMPUS Node
      │
 ┌────┼────┐
 ▼    ▼    ▼
Users Systems Data
```

### Model C — Hybrid

```text
                Global / External
                       │
                    Sync/API
                       │
                       ▼
Campus Network ──► Local CAMPUS
                       │
                 ┌─────┼─────┐
                 ▼     ▼     ▼
              Users Systems Facilities
```

The hybrid model is particularly relevant to the current CAMPUS research because it may allow local campus functionality while maintaining controlled connections to external services and institutional systems.

However, no deployment model is yet established.

**Status: Proposed architectural direction.**

---

# 6.16 CAMPUS Experience Layer

The user-facing experience should emerge from the relationships represented by the underlying architecture.

Potential experiences include:

### Search

Finding people, knowledge, places, services, organizations, opportunities, and activities.

### Profiles

Understanding a person, organization, facility, program, research project, or other entity in context.

### Relationship navigation

Moving from one entity to related entities.

### Community

Participating in discussions, organizations, activities, and knowledge exchange.

### Place

Discovering physical locations and resources.

### Pathways

Following relationships across education, research, opportunities, and careers.

### Knowledge discovery

Finding related institutional and scholarly information.

These are experience categories rather than commitments to implement every interface.

**Status: Proposed experience model.**

---

# 6.17 Major Architectural Dimensions

The foundational relational architecture supports potential future dimensions.

```text
                         CAMPUS
                           │
                    RELATIONAL CORE
                           │
       ┌───────────┬───────┼────────┬───────────┐
       │           │       │        │           │
       ▼           ▼       ▼        ▼           ▼
    Digital      CCLR   Pathways  Research   Spatial
     Space /                                / Digital
   Community                                  Twin
  & Knowledge
       │
       └──────────────┬────────────────────────┘
                      │
                 Future R&D
             GIS • Analytics • AI
```

These dimensions should be considered **extensions of the foundation**, not independent product silos.

Their implementation should depend on evidence and priority.

---

# 6.18 Architectural Invariants

Regardless of implementation details, the following principles should remain stable unless evidence demonstrates that they should change.

### Invariant 1 — Relationships are central

The architecture must make meaningful relationships representable and discoverable.

### Invariant 2 — Existing systems retain appropriate authority

CAMPUS should not unnecessarily duplicate or replace specialized systems.

### Invariant 3 — Identity and permissions are foundational

Information and relationships must be governed by appropriate access rules.

### Invariant 4 — Provenance matters

Users should be able to distinguish different information authorities and contexts.

### Invariant 5 — Physical and digital contexts can connect

Where useful, physical places and digital entities should participate in the same relational model.

### Invariant 6 — The architecture must remain extensible

Future dimensions should be able to build on the foundation without requiring fundamental architectural replacement.

### Invariant 7 — MVP scope remains bounded

The existence of a broad architecture does not justify implementing every potential capability.

### Invariant 8 — Evidence can change the architecture

The architecture is an R&D hypothesis and must remain open to modification based on technical, institutional, and user evidence.

**Status: Proposed architectural invariants.**

---

# 6.19 Conceptual Architecture Summary

The CAMPUS conceptual architecture can be summarized as:

```text
                    ┌─────────────────────┐
                    │      PEOPLE         │
                    └─────────┬───────────┘
                              │
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
  ORGANIZATIONS           KNOWLEDGE             PLACES
        │                     │                     │
        └──────────────┬──────┴──────┬──────────────┘
                       │             │
                       ▼             ▼
                   RELATIONSHIPS / CONTEXT
                       │
             ┌─────────┼─────────┐
             │         │         │
             ▼         ▼         ▼
         Education   Research  Activities
             │         │         │
             └─────────┼─────────┘
                       │
             ┌─────────┴──────────┐
             ▼                    ▼
        Opportunities          Services
             │                    │
             └─────────┬──────────┘
                       ▼
                 DISCOVERY LAYER
                       │
             ┌─────────┼─────────┐
             ▼         ▼         ▼
          Search    Profiles   Navigation
             │
             ▼
         USER ACTION
             │
             ▼
     EXISTING SYSTEMS /
     PHYSICAL UNIVERSITY
```

The essential architectural proposition is therefore:

> **CAMPUS does not attempt to digitize every university function. It attempts to make the relationships among university functions, people, knowledge, places, resources, and opportunities more persistent, discoverable, contextual, and actionable.**

---

# 6.20 Boundary Between Conceptual and Technical Architecture

This conceptual architecture does not yet establish:

* database technology;
* programming language;
* application framework;
* graph database versus relational database;
* API specifications;
* deployment infrastructure;
* cloud provider;
* local hardware;
* synchronization protocol;
* identity provider;
* search engine;
* GIS platform;
* AI model;
* specific frontend framework; or
* final production topology.

Those decisions belong in **Section 9 — Technical Architecture** and should be derived from the requirements and research findings established elsewhere in the blueprint.

The conceptual architecture therefore serves as the stable design hypothesis against which technical alternatives can be evaluated.

**Status: Established architectural boundary.**


# 7. Major Dimensions

## 7.1 Purpose

The CAMPUS architecture is intentionally extensible.

The relational core established in Section 6 can support multiple domains of university activity. These domains are referred to as **CAMPUS dimensions**.

A dimension represents a coherent area in which CAMPUS relationships may produce useful capabilities, research questions, or future applications.

The existence of a dimension does **not** constitute a commitment to implement it.

Each dimension must be evaluated according to:

* the problem it addresses;
* the users affected;
* evidence of need;
* its contribution to the relational model;
* relationship to existing systems;
* technical requirements;
* institutional and governance implications;
* privacy and security requirements;
* feasibility;
* MVP relevance; and
* evidence required before expansion.

The dimensions are therefore organized into three broad categories:

### Foundational

Capabilities necessary to establish and test the CAMPUS relational model.

### Developmental

Potential application domains that can build on the validated foundation.

### Exploratory

Longer-term or research-oriented directions whose value and feasibility require additional investigation.

---

# 7.2 Dimension 1 — Digital Space / Community & Knowledge Layer

### Purpose

The Digital Space is the most direct expression of the CAMPUS relational model.

It provides a digital environment where users can discover and interact with people, organizations, knowledge, activities, services, places, and opportunities.

It combines two related functions:

**Community** — people and organizations interacting within the university environment.

**Knowledge** — institutional, scholarly, and community-generated information connected to relevant entities and relationships.

### Problem addressed

University knowledge and community activity may exist across institutional websites, documents, social channels, organizations, offices, repositories, and informal communication.

The research question is whether a persistent relational environment can make relevant information and people easier to discover while preserving distinctions of authority and provenance.

### Relationship to the relational core

This dimension directly uses:

* People;
* Organizations;
* Knowledge;
* Activities;
* Places;
* Services;
* Opportunities;
* Relationships;
* Identity;
* Provenance; and
* Permissions.

It is therefore the most direct **MVP expression of the core architecture**.

### Potential users

* Students;
* Faculty;
* Staff;
* Researchers;
* Administrators;
* Organizations;
* Alumni;
* Authorized external communities.

### Candidate capabilities

Potential capabilities include:

* profiles;
* organization pages;
* institutional knowledge;
* community contributions;
* discussions;
* events;
* relationship navigation;
* contextual search;
* place discovery;
* opportunity discovery;
* service discovery; and
* activity feeds.

The MVP should implement only the smallest set necessary to test the relational hypothesis.

### Evidence required

* user discovery research;
* information architecture testing;
* usability studies;
* prototype experiments;
* provenance/governance research;
* institutional systems discovery.

### Scope status

**MVP / foundational.**

### Key unresolved questions

* What content should be official?
* What can users contribute?
* Who verifies information?
* What should be public?
* How should moderation work?
* What existing information sources can be connected?
* Does a persistent community layer actually improve university interaction?

---

# 7.3 Dimension 2 — Curriculum Continuity and Learning Records (CCLR)

### Purpose

**CCLR — Curriculum Continuity and Learning Records** explores how CAMPUS could represent educational relationships across time.

Rather than treating a student's educational experience as a series of isolated transactions, CCLR investigates whether relevant relationships among curriculum, courses, learning activities, competencies, projects, instructors, resources, and educational progression can provide meaningful continuity.

### Problem addressed

Educational information may be distributed across academic records, learning platforms, curricula, individual courses, faculty systems, documents, and student experiences.

This can make it difficult to understand the broader continuity of an educational journey.

### Conceptual model

```text id="q1r8kw"
Program
   │
   ▼
Curriculum
   │
   ├── Course ──► Instructor
   │
   ├── Course ──► Learning Activity
   │
   ├── Course ──► Resource
   │
   └── Course ──► Competency
                    │
                    ▼
                 Student
                    │
                    ▼
             Future Pathway
```

The architecture could potentially preserve relationships across academic periods rather than representing each course as an isolated experience.

### Potential users

* Students;
* Faculty;
* Academic advisers;
* Program administrators;
* Curriculum developers;
* Institutional researchers.

### Candidate capabilities

Possible future capabilities include:

* curriculum relationship maps;
* course relationships;
* prerequisite/context discovery;
* learning-history continuity;
* competency relationships;
* academic pathway visualization;
* links between learning experiences and opportunities.

### Relationship to existing systems

CCLR should not assume ownership of official academic records.

Student records, grades, enrollment information, and other authoritative data may remain within existing institutional systems.

CCLR would investigate how appropriate educational relationships can be represented while respecting those systems as sources of authority.

### Evidence required

* academic-process research;
* existing curriculum/system analysis;
* faculty and student research;
* privacy analysis;
* technical integration experiments.

### Scope status

**Later-phase / research direction.**

Selected educational relationships may inform the foundational MVP, but a complete learning-record system is explicitly outside the initial MVP.

### Key unresolved questions

* What educational information should persist?
* Which records are authoritative?
* How should historical educational relationships be represented?
* What privacy constraints apply?
* How would CCLR interact with LMS and student information systems?
* What value does relational continuity provide beyond existing academic systems?

---

# 7.4 Dimension 3 — Pathways / Education-to-Career Continuity

### Purpose

Pathways explores relationships connecting university education with future opportunities and transitions.

The underlying proposition is that education-to-career development may involve more than formal credentials.

Relevant relationships can include:

**courses → competencies → projects → research → organizations → internships → alumni → employers → careers**

### Problem addressed

Educational and career information can be distributed across academic programs, career services, student organizations, research groups, external opportunities, alumni networks, and employers.

The research question is whether connecting these relationships can provide meaningful continuity between university experiences and future pathways.

### Conceptual model

```text id="40x8sk"
Education
   │
   ├── Course
   ├── Project
   ├── Research
   ├── Organization
   └── Competency
          │
          ▼
     Opportunity
          │
     ┌────┼────┐
     ▼    ▼    ▼
 Internship Research Employment
     │    │    │
     └────┼────┘
          ▼
        Alumni
```

### Potential users

* Students;
* Graduates;
* Alumni;
* Career services;
* Faculty;
* Researchers;
* External organizations;
* Employers and partners.

### Candidate capabilities

Potential capabilities include:

* opportunity discovery;
* competency relationships;
* alumni connections;
* internship discovery;
* research-to-career pathways;
* project portfolios;
* education-to-opportunity navigation.

### Relationship to the relational core

Pathways relies heavily on persistent relationships and temporal continuity.

It therefore becomes significantly more valuable if the foundational CAMPUS layer can establish reliable relationships among people, education, activities, research, and opportunities.

### Evidence required

* student and alumni research;
* employer/partner research;
* career-services process mapping;
* privacy and consent analysis;
* opportunity data research.

### Scope status

**Later-phase.**

### Key unresolved questions

* Who maintains opportunity information?
* How are opportunities verified?
* How should competencies be represented?
* What information can be shared with external organizations?
* What role should alumni play?
* How much personalization is appropriate?

---

# 7.5 Dimension 4 — Research Discovery & Collaboration

### Purpose

This dimension explores CAMPUS as a relational discovery layer for university research.

It focuses on relationships among:

* researchers;
* expertise;
* projects;
* publications;
* laboratories;
* facilities;
* students;
* organizations;
* research outputs;
* datasets;
* communities; and
* collaboration opportunities.

### Problem addressed

Research information may be distributed across institutional repositories, personal profiles, department pages, publications, research offices, laboratories, and external scholarly systems.

A user may know a research topic but not know:

* who works on it;
* what related projects exist;
* which facilities are relevant;
* which publications exist;
* whether collaboration opportunities are available.

### Conceptual model

```text id="6cydam"
Research Topic
      │
      ├────────► Researcher
      │              │
      │              ├──► Publication
      │              ├──► Project
      │              └──► Expertise
      │
      ├────────► Laboratory
      │              │
      │              └──► Facility
      │
      └────────► Opportunity
                     │
                     ▼
                Collaboration
```

### Potential users

* Researchers;
* Faculty;
* Students;
* Research administrators;
* External collaborators;
* Industry/community partners.

### Candidate capabilities

Potential capabilities include:

* expertise discovery;
* researcher profiles;
* research-project discovery;
* publication relationships;
* laboratory/facility discovery;
* collaboration discovery;
* research opportunity discovery.

### Relationship to existing systems

Research repositories and research-management systems may remain authoritative for publications, project records, and other formal research information.

CAMPUS would investigate how to make relationships among those resources more discoverable.

### Evidence required

* research-system inventory;
* researcher interviews;
* publication metadata analysis;
* interoperability experiments;
* research-discovery usability testing.

### Scope status

**Later-phase / research direction.**

The MVP may use a very small research-related use case if necessary to test relational discovery, but a complete research collaboration environment is outside MVP scope.

### Key unresolved questions

* What research data can be integrated?
* Which sources are authoritative?
* How should expertise be represented?
* How should unpublished research be protected?
* What external scholarly systems should be considered?
* Does relational research discovery produce measurable value?

---

# 7.6 Dimension 5 — Spatial Campus / Digital Twin

### Purpose

This dimension explores the representation of the physical university as part of the CAMPUS relational environment.

The concept ranges from simple location-aware discovery to more sophisticated digital-twin representations.

These should not be treated as equivalent capabilities.

### Progressive model

```text id="j1j9ma"
LEVEL 1
Location
   │
   ▼
"Where is it?"

        ↓

LEVEL 2
Spatial Relationships
   │
   ▼
"What is near / inside / connected to it?"

        ↓

LEVEL 3
Interactive Campus Model
   │
   ▼
"What exists here and how is it related?"

        ↓

LEVEL 4
Digital Twin
   │
   ▼
"How does the physical campus behave or change?"
```

### Problem addressed

Users often need to understand relationships between digital information and physical spaces.

Examples include:

* locating services;
* finding facilities;
* discovering laboratories;
* identifying event locations;
* understanding campus resources.

### Potential users

* Students;
* Faculty;
* Staff;
* Visitors;
* Researchers;
* Facilities personnel;
* Administrators.

### Candidate capabilities

Potential capabilities include:

* campus map;
* facility discovery;
* room/service relationships;
* event location;
* resource location;
* spatial search;
* GIS;
* eventually, digital-twin representations.

### Relationship to the relational core

Places are already first-class conceptual entities within CAMPUS.

Spatial capabilities therefore extend the existing model rather than creating a disconnected mapping application.

### Evidence required

* campus spatial-data inventory;
* user research;
* GIS investigation;
* facilities-management research;
* infrastructure assessment.

### Scope status

**Basic place representation: foundational/MVP.**

**Advanced GIS: later-phase.**

**Full digital twin: exploratory/research-only until justified.**

### Key unresolved questions

* What spatial data already exists?
* Who owns and maintains it?
* What level of spatial precision is useful?
* What operational value would a digital twin provide?
* What infrastructure would it require?
* Would a sophisticated digital twin solve an actual user or institutional problem?

---

# 7.7 Dimension 6 — Local-First Digital Campus Infrastructure

### Purpose

Local-first is an architectural dimension rather than a user-facing product dimension.

It investigates whether selected CAMPUS capabilities can operate reliably within university-controlled infrastructure while maintaining appropriate synchronization with external systems.

### Problem addressed

Universities may operate in environments where Internet availability, external service dependence, infrastructure control, data stewardship, resilience, or operational continuity are important considerations.

### Conceptual model

```text id="4hnb1x"
                 EXTERNAL SERVICES
                        │
                     Sync/API
                        │
                        ▼
             ┌────────────────────┐
             │   CAMPUS LOCAL     │
             │      LAYER         │
             └─────────┬──────────┘
                       │
             ┌─────────┼─────────┐
             ▼         ▼         ▼
           Users     Services   Data
             │
             ▼
       Physical Campus
```

### Potential benefits to investigate

* resilience;
* continuity;
* local responsiveness;
* reduced dependence on continuous Internet connectivity;
* institutional control;
* controlled synchronization;
* potential data-sovereignty advantages.

### Potential costs to investigate

* infrastructure;
* maintenance;
* synchronization;
* conflict resolution;
* security;
* monitoring;
* redundancy;
* hardware;
* technical staffing.

### Scope status

**Architectural research direction.**

A small local-first experiment may be appropriate during technical prototyping, but a complete local-first deployment architecture is not an MVP commitment.

### Key unresolved questions

* Which functions genuinely benefit from local operation?
* What data needs synchronization?
* How are conflicts resolved?
* How does identity work offline?
* What infrastructure is realistic for VSU?
* Is the additional complexity justified?

---

# 7.8 Dimension 7 — GIS, Analytics, and Future AI

This dimension groups capabilities that may become valuable once the foundational relational model is sufficiently mature.

They should not be allowed to drive the architecture prematurely.

## GIS

GIS can extend the spatial model by enabling richer geographic analysis and visualization.

Potential applications include:

* spatial resource discovery;
* facilities analysis;
* environmental context;
* infrastructure planning;
* community relationships.

**Status: Later-phase / research direction.**

---

## Analytics

The relational model could eventually support institutional or operational analytics.

Potential applications include:

* relationship analysis;
* resource utilization;
* participation patterns;
* opportunity discovery;
* spatial analysis;
* network analysis.

However, analytics involving personal or sensitive data introduces significant governance requirements.

**Status: Later-phase / research direction.**

---

## AI

AI could potentially operate over the relational and knowledge layers to support:

* semantic search;
* question answering;
* knowledge discovery;
* recommendation;
* summarization;
* relationship exploration;
* research discovery.

AI is deliberately **not treated as the foundation of CAMPUS**.

The architecture should first establish reliable identity, provenance, relationships, permissions, and information governance.

AI can then become an optional capability operating on appropriately governed information.

**Status: Future research direction.**

---

# 7.9 Dimension Dependency Model

The dimensions are not independent.

A conceptual dependency structure is:

```text id="4q0l8r"
                  CAMPUS RELATIONAL CORE
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
          Identity      Knowledge     Places
              │            │            │
              └────────────┼────────────┘
                           │
                     Discovery Layer
                           │
        ┌──────────┬───────┼────────┬──────────┐
        ▼          ▼       ▼        ▼          ▼
      Digital     CCLR  Pathways Research   Spatial
       Space                                  Layer
        │          │       │        │          │
        └──────────┴───────┼────────┴──────────┘
                           ▼
                    Future Extensions
                     GIS / Analytics
                           │
                           ▼
                           AI
```

This dependency model reinforces an important development principle:

> **Later dimensions should consume and extend validated foundational capabilities rather than requiring independent parallel architectures.**

---

# 7.10 Dimension Classification

| Dimension                             | Current role                           | Initial status                |
| ------------------------------------- | -------------------------------------- | ----------------------------- |
| Digital Space / Community & Knowledge | Direct expression of CAMPUS            | **MVP / foundational**        |
| CCLR                                  | Educational continuity                 | **Later-phase**               |
| Pathways                              | Education-to-career continuity         | **Later-phase**               |
| Research Discovery                    | Research relationships                 | **Later-phase**               |
| Spatial Campus                        | Place-based discovery                  | **Basic MVP; advanced later** |
| Digital Twin                          | Advanced spatial representation        | **Exploratory**               |
| Local-First                           | Deployment architecture                | **Research direction**        |
| GIS                                   | Advanced spatial analysis              | **Later-phase**               |
| Analytics                             | Relationship/institutional analysis    | **Later-phase**               |
| AI                                    | Intelligence over governed information | **Future research**           |

This classification is provisional and should be revised as evidence emerges.

---

# 7.11 What Does Not Belong in the Dimensions

The dimensions should not become a mechanism for importing unrelated features into CAMPUS.

A proposed capability should be evaluated against the following questions:

1. What problem does it address?
2. Who needs it?
3. What evidence supports the need?
4. What CAMPUS relationship does it depend on?
5. Does it strengthen the relational architecture?
6. Does it require an existing system to be replaced?
7. What new privacy, security, governance, or infrastructure requirements does it create?
8. Can it be validated independently?
9. Does it belong in the MVP, a later phase, or research only?

If these questions cannot be answered, the capability should remain an open research idea rather than entering the committed development scope.

---

# 7.12 Dimension Development Principle

CAMPUS should evolve approximately according to:

```text id="s5y3xk"
FOUNDATION
   │
   ▼
Relational Core
   │
   ├── Identity
   ├── Knowledge
   ├── People
   ├── Organizations
   ├── Places
   └── Discovery
   │
   ▼
VALIDATION
   │
   ▼
SELECTED DIMENSIONS
   │
   ├── CCLR
   ├── Pathways
   ├── Research
   └── Spatial
   │
   ▼
ADVANCED RESEARCH
   │
   ├── Digital Twin
   ├── GIS
   ├── Analytics
   ├── Local-First expansion
   └── AI
```

This sequencing is not a commitment to implement every stage.

It represents a **risk-reduction strategy**: validate the smallest architectural foundation before investing in increasingly complex capabilities.

---

# 7.13 Major Dimensions Summary

The CAMPUS dimensions collectively describe how the relational architecture could eventually extend across the university.

The current conceptual hierarchy is:

> **CAMPUS Relational Core**
> → **Digital Space / Community & Knowledge**
> → **CCLR**
> → **Pathways**
> → **Research Discovery**
> → **Spatial Campus**
> → **Local-First Infrastructure**
> → **GIS / Analytics / AI and other future research**

The dimensions should remain subordinate to the central R&D hypothesis.

The purpose of developing them is not to demonstrate the maximum number of capabilities CAMPUS could contain.

The purpose is to determine **where a persistent relational layer creates meaningful, measurable, and governable value for a university**.


# 8. MVP Scope

## 8.1 Purpose

The CAMPUS MVP is a **bounded functional vertical slice** designed to test the project's central architectural hypothesis:

> **Can a relationship-oriented digital layer make relevant university people, knowledge, places, resources, services, and opportunities easier to discover, understand, and act upon than disconnected information environments alone?**

The MVP is therefore a **research instrument as well as a software prototype**.

It should demonstrate the smallest coherent implementation of the CAMPUS relational model while generating evidence about:

* user value;
* relationship discovery;
* information context;
* technical feasibility;
* interoperability;
* identity and permissions;
* provenance;
* institutional fit; and
* development effort.

The MVP is not intended to represent a complete CAMPUS deployment.

**Status: Established R&D direction.**

---

# 8.2 MVP Design Principle

The MVP should follow four principles:

### 1. Small enough to build

The first prototype should be implementable with limited manpower and infrastructure.

### 2. Large enough to demonstrate the architecture

It must contain enough entities and relationships for the relational hypothesis to become observable.

### 3. Focused enough to evaluate

The prototype should support concrete user tasks rather than simply presenting a visually impressive collection of features.

### 4. Extensible enough to learn from

The prototype architecture should allow later dimensions to build upon it without requiring fundamental redesign.

The MVP should therefore prioritize **depth of relationships over breadth of features**.

---

# 8.3 What the MVP Must Prove

The MVP does not need to prove that CAMPUS can digitize the university.

It needs to investigate whether five propositions are viable:

### Proposition 1 — Relationship representation

Relevant university entities and relationships can be represented in a coherent model.

### Proposition 2 — Relationship discovery

Users can discover useful information by navigating relationships rather than repeatedly performing isolated searches.

### Proposition 3 — Contextual understanding

Relationships, provenance, and context help users understand what they discover.

### Proposition 4 — Actionability

Discovery can lead naturally toward an appropriate next action, such as contacting a person, opening an authoritative resource, locating a place, joining an activity, or exploring an opportunity.

### Proposition 5 — Institutional coexistence

The relational layer can operate alongside existing systems without requiring CAMPUS to become the system of record for every domain.

These propositions define the MVP's research boundary.

---

# 8.4 Primary MVP Users

The MVP should initially prioritize three user perspectives.

## Student

The student is the primary discovery-oriented user.

Potential needs include:

* finding people;
* discovering organizations;
* understanding courses and programs;
* finding facilities and services;
* discovering activities and opportunities;
* navigating relationships among these entities.

## Faculty / Staff

Faculty and staff provide a second perspective involving:

* expertise;
* courses;
* organizations;
* facilities;
* services;
* activities;
* research;
* institutional information.

## University / Administrator

The institutional perspective tests:

* information authority;
* organizational relationships;
* service discovery;
* governance;
* permissions;
* system boundaries;
* institutional context.

Other groups—including researchers, alumni, external partners, and visitors—may participate in research or later prototype stages without becoming primary MVP personas.

**Status: Proposed MVP user scope.**

---

# 8.5 Core MVP User Scenarios

The MVP should be organized around a small number of concrete scenarios.

## Scenario A — Discover a Person Through a Relationship

A student searches for or encounters a person.

The system shows relevant contextual relationships such as:

```text id="p1f8v5"
Person
 ├── Role
 ├── Organization
 ├── Courses
 ├── Research
 ├── Activities
 ├── Publications
 └── Related Opportunities
```

The user can navigate to related entities.

### Research purpose

Tests whether contextual relationships provide more value than a simple directory profile.

---

## Scenario B — Discover a Resource Through a Need

A student searches for something they need—for example, a service, facility, organization, or resource.

The system provides:

```text id="z9l1jq"
Need
  │
  ▼
Resource
  │
  ├── Location
  ├── Responsible Unit
  ├── Related Services
  ├── Related People
  └── Related Activities
```

### Research purpose

Tests whether relationships help users move from finding a resource to understanding its context and availability.

---

## Scenario C — Explore an Entity

A user begins with an entity such as:

* course;
* organization;
* facility;
* research topic;
* event; or
* service.

The system provides relevant relationships.

For example:

```text id="f0jzv6"
Course
 │
 ├── Program
 ├── Instructor
 ├── Organization
 ├── Related Course
 ├── Resource
 ├── Place
 └── Opportunity
```

### Research purpose

Tests relationship-oriented exploration.

---

## Scenario D — Discover an Opportunity

A user discovers an opportunity through an existing relationship.

For example:

```text id="3m5r7t"
Student
   │
   ▼
Program
   │
   ▼
Research Area
   │
   ▼
Research Project
   │
   ▼
Opportunity
```

The opportunity does not need to be a sophisticated pathway system.

The MVP only needs to demonstrate that relationships can expose relevant opportunities.

### Research purpose

Tests whether the relational model creates discovery that would be difficult through isolated information pages.

---

## Scenario E — Navigate a Physical Resource

A user discovers a facility or service and needs to understand where it is.

```text id="8e6t3a"
Service
   │
   ├── Responsible Organization
   ├── Facility
   └── Location
```

The user can move from the digital entity to the physical place.

### Research purpose

Tests the relationship between digital information and the physical campus.

---

# 8.6 Canonical MVP Entities

The initial prototype should deliberately use a limited entity vocabulary.

A provisional MVP model is:

```text id="x6q4kr"
Person
Organization
Program
Course
Knowledge Resource
Research Project
Facility
Place
Event / Activity
Service
Opportunity
```

Not every prototype deployment needs all of these.

The minimum viable entity set should be determined by the selected user scenarios.

The key requirement is that the entities form meaningful relationships.

**Status: Proposed MVP model.**

---

# 8.7 Canonical MVP Relationships

The prototype should support a limited but expressive relationship vocabulary.

Examples include:

```text id="h6w4cs"
Person ──MEMBER_OF──► Organization

Person ──TEACHES──► Course

Person ──PARTICIPATES_IN──► Activity

Person ──AUTHORED──► Knowledge Resource

Person ──INVOLVED_IN──► Research Project

Course ──PART_OF──► Program

Course ──LOCATED_AT──► Place

Facility ──LOCATED_IN──► Place

Service ──PROVIDED_BY──► Organization

Event ──LOCATED_AT──► Place

Opportunity ──RELATED_TO──► Program

Research Project ──USES──► Facility

Knowledge Resource ──RELATED_TO──► Topic / Entity
```

The exact relationship vocabulary should remain small enough to understand and test.

The goal is not to build a universal ontology.

**Status: Proposed MVP relationship model.**

---

# 8.8 Relationship Context

Where practical, relationships in the MVP should demonstrate that a relationship is more than a hyperlink.

A relationship may include:

* relationship type;
* status;
* temporal validity;
* source;
* provenance;
* visibility;
* responsible authority; and
* contextual description.

For example:

```text id="j8m1yn"
Person
  │
  └──TEACHES──► Course

Status: Active
Term: [defined period]
Source: Authoritative institutional source
Visibility: Appropriate users
```

The prototype does not need to implement every governance property in production-grade form.

However, it should demonstrate the architectural possibility.

---

# 8.9 MVP Search and Discovery

Search should be one of the primary entry points.

A user should be able to search for relevant entities and then continue through their relationships.

The intended interaction pattern is:

```text id="l6x8qk"
Search
  │
  ▼
Entity
  │
  ▼
Context
  │
  ▼
Related Entity
  │
  ▼
New Context
  │
  ▼
Action
```

The MVP should therefore evaluate at least two discovery modes:

### Direct discovery

User searches for the thing they already know they need.

### Relational discovery

User discovers something useful through relationships from another entity.

The second mode is especially important because it tests the central CAMPUS hypothesis.

---

# 8.10 MVP Profiles

The MVP should provide contextual profiles for selected entities.

A profile should not simply be a static page.

It should function as a **relationship hub**.

For example:

```text id="4x8a1p"
┌──────────────────────────────────┐
│ PERSON                            │
│                                  │
│ Name / Role                      │
│ Organization                     │
│                                  │
│ Related                          │
│ ├── Courses                      │
│ ├── Research                     │
│ ├── Activities                   │
│ ├── Organizations                │
│ └── Opportunities                │
└──────────────────────────────────┘
```

The same conceptual structure can apply to:

* organizations;
* facilities;
* courses;
* programs;
* research projects;
* services;
* events; and
* opportunities.

---

# 8.11 MVP Knowledge and Provenance

The prototype should demonstrate at least basic distinctions between information sources.

A minimum conceptual model is:

```text id="j0y5wx"
Knowledge
   │
   ├── Official
   ├── Community
   ├── Personal
   ├── Unverified
   └── Scholarly
```

Where appropriate, the interface should indicate:

* source;
* author;
* date;
* verification status;
* responsible organization; or
* other relevant provenance.

The MVP should avoid presenting community-generated or experimental content as official institutional information.

**Status: Required architectural demonstration.**

---

# 8.12 MVP Identity and Permissions

The prototype should include basic identity and role concepts.

At minimum:

```text id="p4a9kd"
User
 │
 ├── Identity
 ├── Role
 ├── Organization
 └── Permissions
```

Possible MVP roles include:

* student;
* faculty/staff;
* administrator;
* community contributor.

The prototype does not need to reproduce a production university identity system.

It should demonstrate that:

* users have distinct identities;
* information can have different visibility;
* contribution authority can differ by role; and
* the system does not assume universal access.

**Status: Required architectural demonstration.**

---

# 8.13 MVP Physical / Spatial Component

The MVP should include a minimal spatial component.

This could be as simple as:

```text id="g6n4rb"
Facility
   │
   ▼
Building
   │
   ▼
Campus
```

and a map or location view where useful.

The objective is **not** to build a digital twin.

The objective is to demonstrate that a physical location can participate naturally in the relational model.

**Status: MVP, limited scope.**

---

# 8.14 MVP Integration Boundary

The prototype should demonstrate the concept of integration without requiring full institutional integration.

Possible approaches include:

* mock institutional data;
* controlled sample datasets;
* imported public data;
* references to external authoritative sources;
* a simulated API;
* one real integration where institutional authorization permits.

The prototype must clearly distinguish simulated integration from real institutional integration.

No claim of VSU system integration should be made unless it has actually occurred with appropriate authorization.

**Status: Established R&D constraint.**

---

# 8.15 MVP Data Strategy

The initial prototype should avoid requiring large amounts of sensitive institutional data.

A preferred progression is:

```text id="z4x8yw"
Synthetic / Sample Data
          │
          ▼
Public / Non-sensitive Data
          │
          ▼
Controlled Institutional Data
          │
          ▼
Authorized Pilot Data
```

The project should move to increasingly realistic data only when appropriate permissions, governance, and security controls exist.

This allows technical and UX research to proceed without prematurely creating institutional data risks.

**Status: Proposed development strategy.**

---

# 8.16 MVP Interface

The MVP interface should prioritize:

### Search

A central mechanism for discovering entities.

### Contextual profile

A page or view that shows the entity and relevant relationships.

### Relationship navigation

Clear ways to move between connected entities.

### Place

A lightweight spatial representation.

### Community / activity

A limited mechanism for interaction where needed to test the hypothesis.

### Provenance

Clear contextual indicators of information source and authority.

### Action

A clear path from discovery to the next appropriate interaction.

The interface should avoid attempting to replicate every university portal function.

---

# 8.17 MVP Architecture

The conceptual MVP architecture is:

```text id="4sqw6y"
                 ┌────────────────────┐
                 │    USER / CLIENT   │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │ SEARCH / DISCOVERY │
                 └─────────┬──────────┘
                           │
                           ▼
              ┌─────────────────────────┐
              │   RELATIONAL CAMPUS     │
              │          CORE           │
              │                         │
              │ Entities + Relationships│
              │ Identity + Provenance   │
              │ Permissions + Context   │
              └────────────┬────────────┘
                           │
                 ┌─────────┼─────────┐
                 ▼         ▼         ▼
              Knowledge  Places   Activities
                 │         │         │
                 └─────────┼─────────┘
                           ▼
                External / Existing Systems
                    (reference/integration)
```

The actual technical implementation belongs in Section 9.

---

# 8.18 Explicit MVP Exclusions

The following are **not required for the initial MVP**:

### Full CCLR

A complete learning-record or curriculum-continuity system is outside the initial MVP.

### Full Pathways

A complete education-to-career platform is outside the initial MVP.

### Full research collaboration platform

The MVP may demonstrate research relationships but should not attempt to build a complete research-management environment.

### Full digital twin

A sophisticated 3D or operational digital twin is outside the MVP.

### Advanced GIS

Basic location representation is sufficient for the initial prototype.

### Institutional analytics

Large-scale analytics are outside the MVP.

### Production AI

AI is not required to demonstrate the central hypothesis.

### Full offline/local-first deployment

A technical experiment may investigate local-first architecture, but production-grade offline operation is not an MVP requirement.

### Full institutional integration

The MVP should demonstrate integration principles without requiring access to every VSU system.

### Replacement of existing systems

Explicitly outside scope.

---

# 8.19 MVP Non-Goals

The MVP should not attempt to:

* become the university ERP;
* become the university LMS;
* become the official student information system;
* become a replacement research repository;
* centralize all university data;
* expose private institutional information;
* create an unrestricted university social network;
* implement every possible relationship;
* demonstrate every CAMPUS dimension;
* prove institution-wide impact;
* imply VSU adoption; or
* optimize for feature count.

The MVP succeeds by testing the architecture, not by looking like a finished enterprise platform.

---

# 8.20 MVP Validation Tasks

The prototype should support a small set of measurable tasks.

Examples:

### Task 1 — Find a person

> "Find a person associated with a particular course/organization/topic."

Measure:

* discovery success;
* time;
* number of navigation steps;
* confidence.

### Task 2 — Find a related resource

> "Starting from a course or organization, find a relevant facility/service/resource."

Measure:

* discovery success;
* relevance;
* navigation effort.

### Task 3 — Discover an unexpected relationship

> "Explore this entity and identify something useful you did not initially search for."

Measure:

* useful discovery;
* relevance;
* qualitative value.

This task is especially important because it directly tests the CAMPUS proposition.

### Task 4 — Understand information authority

> "Determine whether this information is official, community-generated, scholarly, or unverified."

Measure:

* interpretation accuracy;
* confidence;
* provenance comprehension.

### Task 5 — Move from discovery to action

> "Find the appropriate next step after discovering a resource/opportunity/service."

Measure:

* action completion;
* clarity;
* confidence.

---

# 8.21 MVP Validation Criteria

The MVP should be evaluated across four dimensions.

## User value

Does relationship-oriented discovery produce observable value?

## Technical feasibility

Can the model be implemented with reasonable complexity and performance?

## Institutional feasibility

Can the architecture coexist with existing systems and governance requirements?

## Responsible operation

Can identity, permissions, provenance, privacy, and security be represented appropriately?

The MVP should not be considered validated simply because users say they like the interface.

---

# 8.22 MVP Evidence Matrix

| Hypothesis                       | Prototype evidence                        | Validation method          |
| -------------------------------- | ----------------------------------------- | -------------------------- |
| Relationships can be represented | Working entity/relationship model         | Technical testing          |
| Relationships improve discovery  | Successful relational navigation          | User testing               |
| Context improves understanding   | Provenance/context interface              | Usability testing          |
| Discovery leads to action        | Action-oriented workflows                 | Task evaluation            |
| Physical context adds value      | Place/resource relationships              | User testing               |
| Permissions are feasible         | Role-based visibility                     | Technical/security testing |
| Provenance is understandable     | Source/context indicators                 | User testing               |
| Integration is possible          | Reference/API/sample integration          | Technical experiment       |
| Architecture is extensible       | Add new entity/dimension without redesign | Development experiment     |
| Complexity remains manageable    | Implementation effort/performance         | Technical assessment       |

---

# 8.23 MVP Success Conditions

The project should not define success as "all features work."

A successful MVP would produce credible evidence that:

1. the relational model can be implemented;
2. users can understand and navigate relationships;
3. at least some relationships provide meaningful discovery value;
4. contextual/provenance information can be presented appropriately;
5. basic identity and permissions can be represented;
6. physical and digital entities can coexist in the model;
7. the architecture can reference or interact with external systems without requiring wholesale replacement;
8. the technical complexity is manageable; and
9. there is sufficient evidence to justify a defined next R&D stage.

These are **provisional success conditions**, not predetermined outcomes.

---

# 8.24 MVP Failure / Revision Conditions

The MVP should trigger reconsideration if evidence shows that:

* relational navigation provides little additional value;
* users prefer existing discovery mechanisms;
* the relationship model is too difficult to understand;
* maintaining relationships is prohibitively complex;
* provenance and permissions cannot be handled adequately;
* integration creates excessive duplication;
* the technical architecture is disproportionately expensive;
* the identified problem is substantially narrower than expected; or
* another architectural approach better addresses the validated problem.

A negative or inconclusive result should lead to refinement rather than being hidden from the project's development record.

---

# 8.25 MVP Decision Gate

After prototype development and initial validation, the project should reach a formal decision point.

```text id="z6s5wy"
                 MVP
                  │
                  ▼
              VALIDATION
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
      Strong    Mixed      Weak
     Evidence  Evidence   Evidence
        │         │         │
        ▼         ▼         ▼
     Expand     Revise     Narrow /
                         Research / Stop
```

Possible outcomes include:

### Expand

Proceed to selected dimensions such as CCLR, Pathways, Research, or advanced spatial capabilities.

### Revise

Modify the relational model, UX, integration architecture, or governance model and conduct another experiment.

### Narrow

Focus CAMPUS on a smaller validated problem rather than the broader architecture.

### Research only

Retain particular architectural findings as research outputs without continuing product development.

### Stop

If evidence does not justify further development, the project should document the result and stop or substantially redirect the effort.

---

# 8.26 MVP Boundary Statement

The CAMPUS MVP can therefore be defined as:

> **A small functional digital-campus prototype that represents a limited set of people, organizations, knowledge, places, activities, services, opportunities, and related entities; allows users to search and navigate their relationships; provides basic identity, permissions, provenance, and contextual information; and demonstrates how the relational layer can coexist with external or institutional information sources.**

It does not attempt to implement the full CAMPUS vision.

---

# 8.27 MVP in One Diagram

```text id="7r4m8h"
                       CAMPUS MVP
                           │
                           ▼
                 ┌───────────────────┐
                 │      SEARCH       │
                 └─────────┬─────────┘
                           │
                           ▼
              ┌────────────────────────┐
              │       ENTITY           │
              │                        │
              │ Person / Organization  │
              │ Course / Program       │
              │ Place / Facility       │
              │ Knowledge / Research   │
              │ Activity / Service     │
              │ Opportunity            │
              └───────────┬────────────┘
                          │
                          ▼
              ┌────────────────────────┐
              │    RELATIONSHIPS       │
              │                        │
              │ Who? What? Where?      │
              │ Why connected?         │
              │ When? By whom?         │
              └───────────┬────────────┘
                          │
              ┌───────────┼───────────┐
              ▼           ▼           ▼
          PROVENANCE   PERMISSION   CONTEXT
              │           │           │
              └───────────┼───────────┘
                          ▼
                    DISCOVERY
                          │
                          ▼
                       ACTION
                          │
                          ▼
              EXISTING SYSTEM / PLACE
```

---

# 8.28 MVP Development Principle

The MVP should be judged by the quality of the **research signal** it produces, not by its feature count.

A smaller prototype that clearly demonstrates:

> **Entity → Relationship → Context → Discovery → Action**

is more valuable to the R&D program than a larger prototype containing disconnected implementations of CCLR, GIS, AI, social networking, digital twins, and other capabilities that cannot be evaluated coherently.

The immediate objective is therefore:

> **Build enough CAMPUS to learn whether CAMPUS itself is worth building further.**


# 9. Technical Architecture

## 9.1 Purpose

The technical architecture defines the technical structure required to prototype and eventually evaluate the CAMPUS relational model.

It translates the conceptual architecture into:

* software layers;
* data structures;
* interfaces;
* identity and authorization;
* search and discovery;
* provenance;
* integration;
* local-first operation;
* security;
* infrastructure; and
* operational requirements.

The architecture remains provisional during the R&D phase.

Technical decisions should be documented as experiments, decisions, or unresolved questions rather than treated as permanent commitments before validation.

**Status: Proposed technical architecture.**

---

# 9.2 Technical Architecture Principles

The technical architecture should follow the following principles.

### Principle 1 — Relationship-first

The data and application architecture must make relationships easy to represent, query, traverse, and maintain.

### Principle 2 — System coexistence

CAMPUS should integrate with specialized systems rather than unnecessarily replacing them.

### Principle 3 — Authority-aware

The architecture should distinguish authoritative institutional data from derived, community-generated, or experimental data.

### Principle 4 — Privacy by design

Identity, access control, data minimization, and information visibility should be architectural concerns from the beginning.

### Principle 5 — Provenance-aware

The source and context of important information should be representable and traceable.

### Principle 6 — Extensible

New entities, relationships, dimensions, and interfaces should be addable without fundamental architectural replacement.

### Principle 7 — Deployable at small scale

The prototype should be possible to operate with modest infrastructure.

### Principle 8 — Local-first capable

The architecture should not prevent future local-first or hybrid deployments.

### Principle 9 — Technology neutrality

Conceptual requirements should not be confused with specific technologies.

### Principle 10 — Evidence-driven evolution

Technical decisions should be revisited when experiments or institutional requirements contradict assumptions.

**Status: Proposed architectural principles.**

---

# 9.3 Logical Architecture

The proposed logical architecture consists of the following layers:

```text
┌─────────────────────────────────────────────────────────────┐
│                    EXPERIENCE LAYER                         │
│                                                             │
│ Web • Mobile • Spatial • Administrative • Community Views  │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                         │
│                                                             │
│ Discovery • Profiles • Relationships • Activities •         │
│ Knowledge • Places • Services • Opportunities                │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                  RELATIONAL DOMAIN LAYER                     │
│                                                             │
│ Entities • Relationships • Temporal State • Context         │
│ Identity References • Provenance • Visibility                │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                    DISCOVERY LAYER                           │
│                                                             │
│ Search • Indexing • Filtering • Traversal • Ranking         │
│ Semantic / contextual discovery where justified             │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                   INTEGRATION LAYER                          │
│                                                             │
│ APIs • Imports • Exports • Events • Synchronization         │
│ Identity Federation • External References                   │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                      DATA LAYER                              │
│                                                             │
│ Operational Data • Relationship Data • Metadata              │
│ Search Index • Audit Information • Configuration             │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                 INFRASTRUCTURE LAYER                         │
│                                                             │
│ Local Network • Servers • Cloud • Storage • Devices         │
│ Monitoring • Backups • Security Infrastructure               │
└─────────────────────────────────────────────────────────────┘
```

The exact physical deployment may differ.

---

# 9.4 Experience Layer

The experience layer provides interfaces through which users interact with CAMPUS.

The initial prototype should prioritize a responsive web interface because it provides a relatively low-friction way to test the relational model across devices.

Potential future interfaces include:

* web;
* mobile;
* kiosk;
* spatial/map interfaces;
* administrative interfaces;
* community interfaces; and
* specialized research or academic interfaces.

The architecture should avoid tying the relational model to a single interface.

**Status: Web-first prototype proposed; other interfaces later/unresolved.**

---

# 9.5 Application Layer

The application layer translates relational data into user-facing capabilities.

Initial application domains may include:

```text
Discovery
Profiles
Relationships
Knowledge
Places
Activities
Services
Opportunities
Organizations
```

These should be implemented as coherent capabilities rather than independent applications.

For example, a profile should be able to expose related research, organizations, activities, and places using the same underlying relationship model.

This reduces duplication and provides a consistent interaction model.

**Status: Proposed.**

---

# 9.6 Relational Domain Layer

The domain layer is the conceptual heart of the software architecture.

It should provide a consistent model for:

* entities;
* relationships;
* attributes;
* temporal state;
* provenance;
* authority;
* visibility;
* permissions;
* lifecycle;
* identifiers; and
* context.

Conceptually:

```text
Entity
 ├── identifier
 ├── type
 ├── attributes
 ├── status
 ├── provenance
 ├── authority
 ├── visibility
 └── relationships
       ├── type
       ├── target
       ├── temporal validity
       ├── provenance
       └── permissions
```

This domain layer should be insulated from presentation details.

---

# 9.7 Entity Model

A provisional entity structure is:

```text
Entity
 ├── ID
 ├── Type
 ├── Name / Label
 ├── Description
 ├── Status
 ├── Metadata
 ├── Provenance
 ├── Authority
 ├── Visibility
 ├── Created
 ├── Updated
 └── Relationships
```

Specialized entities can extend this structure.

For example:

```text
Person
Organization
Course
Program
Facility
Place
ResearchProject
KnowledgeResource
Activity
Service
Opportunity
```

This is a conceptual model rather than a finalized database schema.

---

# 9.8 Relationship Model

Relationships should be represented explicitly.

Conceptually:

```text
Relationship
 ├── ID
 ├── Source Entity
 ├── Relationship Type
 ├── Target Entity
 ├── Status
 ├── Valid From
 ├── Valid Until
 ├── Provenance
 ├── Authority
 ├── Visibility
 └── Metadata
```

This allows the system to distinguish:

```text
Person ──MEMBER_OF──► Organization

Person ──PREVIOUSLY_MEMBER_OF──► Organization

Person ──PLANNED_TO_JOIN──► Organization
```

rather than representing all three simply as a generic "member" link.

The relationship vocabulary should remain controlled and understandable.

---

# 9.9 Identifier Strategy

Entities should have stable identifiers that are independent of their presentation URL or interface.

This supports:

* persistent references;
* synchronization;
* integration;
* relationship continuity;
* historical records;
* data migration; and
* multiple interfaces.

Where appropriate, external institutional identifiers may be mapped to CAMPUS identifiers without making CAMPUS the authority over those identifiers.

The exact identifier scheme remains unresolved.

**Status: Required capability; implementation unresolved.**

---

# 9.10 Temporal Data

Because university relationships change over time, temporal state should be considered part of the domain model.

For example:

```text
Person ──MEMBER_OF──► Organization

valid_from: 2025
valid_until: 2028
status: active
```

This allows the architecture to distinguish:

* current;
* historical;
* future;
* temporary; and
* expired relationships.

The prototype may implement a simplified temporal model while preserving the architectural possibility of richer history.

**Status: Proposed.**

---

# 9.11 Search and Discovery Architecture

Search is one of the most important technical components because the CAMPUS hypothesis depends on discovery.

The system should support at least:

### Entity search

Finding known entities.

### Attribute filtering

Filtering by attributes such as organization, location, type, status, or role.

### Relationship traversal

Moving from one entity to related entities.

### Contextual discovery

Finding related entities based on the current entity.

### Potential semantic discovery

Future support for meaning-based or AI-assisted discovery, subject to validation.

Conceptually:

```text
                 QUERY
                   │
                   ▼
              SEARCH ENGINE
                   │
        ┌──────────┼──────────┐
        ▼          ▼          ▼
     Entities   Metadata   Relationships
        │          │          │
        └──────────┼──────────┘
                   ▼
                RANKING
                   │
                   ▼
              USER RESULTS
                   │
                   ▼
          RELATIONSHIP TRAVERSAL
```

Search technology should remain replaceable where practical.

---

# 9.12 Search Index versus Source Data

CAMPUS should distinguish between:

**Authoritative/domain data**

and

**search/index representations**.

A search index may contain denormalized or derived information to improve retrieval performance.

It should not automatically become the authoritative source.

Conceptually:

```text
Authoritative Data
       │
       ▼
   Indexing
       │
       ▼
 Search Index
       │
       ▼
 Discovery
```

Changes to authoritative information should therefore be capable of propagating to search representations.

---

# 9.13 Ranking and Discovery

Search ranking should be treated as a research concern.

Potential ranking signals include:

* textual relevance;
* relationship relevance;
* organizational context;
* spatial proximity;
* temporal relevance;
* authority;
* freshness;
* user permissions;
* explicit user context.

However, ranking should not become an opaque mechanism that silently determines what information users can discover.

The prototype should favor understandable and inspectable behavior.

**Status: Proposed; ranking methodology unresolved.**

---

# 9.14 Identity Architecture

CAMPUS requires identity but should avoid unnecessary duplication.

The architecture should conceptually separate:

```text
Authentication
      │
      ▼
Identity
      │
      ▼
Role / Affiliation
      │
      ▼
Authorization
      │
      ▼
Access to Entities / Relationships
```

Authentication may eventually be provided by an institutional identity provider.

CAMPUS may then maintain application-specific authorization and relationship context.

The prototype may use its own authentication mechanism for experimentation where institutional identity integration is unavailable.

Such prototype identity must not be represented as the university's production identity system.

---

# 9.15 Authorization

Authorization should operate at multiple levels where necessary.

Potential levels include:

* system;
* organization;
* entity;
* relationship;
* action;
* field or attribute.

For example:

```text
User
  │
  ├── Can view public profile
  ├── Can view restricted research
  ├── Can edit organization page
  └── Cannot modify authoritative enrollment
```

The architecture should support least-privilege access.

**Status: Required architectural capability.**

---

# 9.16 Provenance Architecture

Provenance should be represented as structured information rather than only displayed as a citation.

Potential provenance fields include:

```text
Source
Author
Publisher / Authority
Created
Updated
Verification Status
Import Method
External Identifier
Version
```

A CAMPUS object may therefore indicate:

```text
Source:
Institutional Office

Authority:
Authorized Publisher

Updated:
[date]

Status:
Official
```

while another may indicate:

```text
Source:
Community Contributor

Authority:
User Contribution

Status:
Unverified
```

The exact provenance model requires governance research.

---

# 9.17 Data Authority Model

A critical technical principle is distinguishing:

**Source of truth**

from

**CAMPUS representation**.

For example:

```text
Institutional System
      │
      │ authoritative
      ▼
CAMPUS Reference / Representation
      │
      ▼
Discovery Interface
```

CAMPUS may store enough information to support discovery without assuming ownership of the underlying authoritative record.

This principle is central to avoiding unnecessary duplication.

---

# 9.18 Integration Architecture

Integration should support several patterns rather than assuming one universal method.

### Pattern A — Reference

CAMPUS stores a reference to an external authoritative resource.

### Pattern B — Import

CAMPUS imports approved information.

### Pattern C — Synchronization

CAMPUS maintains a controlled synchronized representation.

### Pattern D — Query

CAMPUS retrieves information dynamically from another system where appropriate interfaces exist.

### Pattern E — Event

A source system sends changes that CAMPUS can process.

### Pattern F — Federation

CAMPUS uses identity or information services provided by another system.

These patterns may coexist.

```text
                   CAMPUS
                      │
       ┌──────────────┼──────────────┐
       ▼              ▼              ▼
   Reference       Import          Query
       │              │              │
       └──────────────┼──────────────┘
                      ▼
                 External Systems
```

The appropriate pattern should be determined per integration.

---

# 9.19 Integration Gateway

A dedicated integration boundary is preferable to allowing every CAMPUS component to communicate directly with every external system.

Conceptually:

```text
External Systems
       │
       ▼
┌─────────────────────┐
│ Integration Gateway │
│                     │
│ API adapters        │
│ Data mapping        │
│ Validation          │
│ Authentication      │
│ Synchronization     │
└──────────┬──────────┘
           │
           ▼
      CAMPUS Domain
```

This reduces coupling and creates a controlled location for integration policy.

---

# 9.20 Data Mapping

External systems rarely use exactly the same vocabulary as CAMPUS.

The integration layer may therefore require mappings such as:

```text
External Student Record
          │
          ▼
      CAMPUS Person

External Academic Unit
          │
          ▼
      Organization

External Course Record
          │
          ▼
         Course
```

Mappings must preserve the authority and semantics of the original source.

The project should not assume that similarly named fields have identical meanings.

**Status: Required integration concern.**

---

# 9.21 Event and Synchronization Architecture

A future CAMPUS deployment may need to react to changes in external systems.

Conceptually:

```text
Source System
     │
     │ Change
     ▼
 Event / Sync Layer
     │
     ▼
 Validation
     │
     ▼
 CAMPUS Update
     │
     ├── Domain Data
     └── Search Index
```

For local-first operation, synchronization becomes more complex because multiple nodes may independently change information.

This should be investigated through a dedicated technical experiment before being treated as production architecture.

---

# 9.22 Local-First / Hybrid Technical Architecture

A possible hybrid deployment is:

```text
                 EXTERNAL / CLOUD
                       │
                API / Synchronization
                       │
                       ▼
             ┌───────────────────┐
             │ Campus Gateway /  │
             │ Sync Service      │
             └─────────┬─────────┘
                       │
                       ▼
             ┌───────────────────┐
             │ Local CAMPUS Node │
             └─────────┬─────────┘
                       │
             ┌─────────┼─────────┐
             ▼         ▼         ▼
          Users     Local Data  Services
```

A local-first implementation would require decisions concerning:

* synchronization;
* conflict resolution;
* identity;
* offline authorization;
* data freshness;
* local storage;
* encryption;
* backup;
* node registration;
* recovery;
* monitoring.

These requirements make local-first an important research area rather than merely a deployment preference.

---

# 9.23 Data Storage Strategy

The conceptual architecture does not mandate a particular database technology.

Potential approaches include:

### Relational database

Strengths:

* mature transactions;
* structured data;
* strong integrity constraints;
* familiar tooling;
* broad operational support.

Potential limitation:

* complex relationship traversal may require additional modeling or query mechanisms.

### Graph database

Strengths:

* explicit relationship representation;
* graph traversal;
* potentially natural modeling of highly connected data.

Potential limitations:

* additional operational technology;
* ecosystem considerations;
* integration with conventional institutional data;
* suitability for mixed workloads.

### Hybrid architecture

A combination of relational storage, graph-oriented structures, search indexes, and other specialized stores may be appropriate.

### Document-oriented approaches

These may be useful for certain content types but should not replace the conceptual relationship model merely because content is document-like.

The final storage architecture should be determined through technical experiments based on:

* relationship-query patterns;
* transaction requirements;
* search requirements;
* integration;
* scale;
* local deployment;
* developer capability;
* operational burden.

**Status: Technology choice unresolved.**

---

# 9.24 Prototype Technology Selection

The prototype should favor technologies that are:

* mature;
* accessible to the development team;
* inexpensive to operate;
* well documented;
* portable;
* easy to test;
* suitable for local deployment; and
* replaceable where practical.

A prototype technology choice should be recorded as:

> **Prototype implementation decision**

rather than:

> **Permanent CAMPUS architecture decision**

unless sufficient evidence exists to justify the latter.

---

# 9.25 Security Architecture

Security should be treated as a cross-cutting architecture rather than a final deployment task.

Major areas include:

### Identity security

Authentication and account protection.

### Authorization

Role and permission enforcement.

### Data security

Encryption, access controls, secure storage, and transmission.

### Application security

Input validation, session security, API protection, dependency management, and secure coding.

### Infrastructure security

Network controls, system hardening, backups, monitoring, and patching.

### Integration security

Credential management, API authentication, authorization, validation, and rate controls.

### Auditability

Recording security-relevant events and important changes where appropriate.

---

# 9.26 Threat Modeling

Before any real institutional data is introduced, the architecture should undergo threat modeling.

Potential threat categories include:

* unauthorized access;
* account compromise;
* privilege escalation;
* information disclosure;
* malicious content;
* data manipulation;
* API abuse;
* synchronization attacks;
* compromised local nodes;
* insider misuse;
* service disruption.

The exact threat model should be developed against the actual deployment architecture.

**Status: Required before sensitive-data pilot.**

---

# 9.27 Privacy Architecture

Privacy should influence data modeling from the beginning.

The architecture should support:

* data minimization;
* purpose limitation;
* appropriate retention;
* access controls;
* consent where applicable;
* correction;
* auditability;
* appropriate deletion or de-identification;
* separation of public and restricted information.

A relationship should not be represented simply because it is technically possible to represent it.

The relevant question is:

> **Should this relationship exist in CAMPUS, for whom, for what purpose, for how long, and under whose authority?**

---

# 9.28 Audit and Change History

For authoritative or governance-sensitive information, CAMPUS may require records of:

* who changed information;
* what changed;
* when it changed;
* why it changed;
* source;
* verification;
* previous state.

The prototype may implement a simplified version.

Production requirements would depend on institutional policy and information sensitivity.

---

# 9.29 Infrastructure Architecture

The initial prototype should support a small deployment footprint.

A conceptual deployment may be:

```text
             Internet / Campus Network
                       │
                       ▼
                 Reverse Proxy
                       │
                       ▼
                Application Server
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Domain       Search       Integration
       Services      Index          Layer
          │            │            │
          └────────────┼────────────┘
                       ▼
                    Database
                       │
                       ▼
                    Storage
```

The architecture should be deployable on:

* developer infrastructure;
* a controlled server;
* university-local infrastructure; or
* suitable cloud infrastructure.

The exact environment depends on the prototype phase and institutional permissions.

---

# 9.30 Containerization and Portability

The prototype should ideally be packaged in a portable deployment format where practical.

Potential benefits include:

* reproducibility;
* local deployment;
* development consistency;
* easier migration;
* testing;
* institutional experimentation.

Containerization is a candidate implementation approach, not a mandatory architecture.

---

# 9.31 Observability

The system should eventually provide visibility into:

* availability;
* application errors;
* API failures;
* search performance;
* database performance;
* synchronization status;
* security events;
* resource utilization.

For the MVP, basic logging and error monitoring may be sufficient.

Production deployment would require stronger observability.

---

# 9.32 Backup and Recovery

The architecture must distinguish:

**backup**

from

**synchronization**

and

**replication**.

A local-first system, for example, may have multiple replicas without those replicas constituting a complete backup strategy.

The prototype should establish basic backup procedures.

Institutional deployment would require formal:

* backup frequency;
* retention;
* restoration testing;
* disaster recovery;
* business continuity.

---

# 9.33 Extensibility

The architecture should allow new dimensions to build on the same core.

For example:

```text
Existing:
Person
Course
Organization
Place

Later:
Competency
LearningRecord
Opportunity
ResearchProject
Publication
Equipment
```

The addition of these entities should not require replacing the foundational relationship model.

Likewise, new interfaces should consume the same domain APIs rather than create independent data silos.

---

# 9.34 API Architecture

The CAMPUS domain should expose controlled interfaces to its data and capabilities.

Potential API categories include:

```text
/entities
/relationships
/search
/profiles
/organizations
/places
/activities
/knowledge
/opportunities
```

The actual API style—REST, GraphQL, event interfaces, or another approach—remains a technical decision.

The API should enforce:

* authentication;
* authorization;
* validation;
* rate controls;
* provenance;
* consistent identifiers;
* appropriate data filtering.

---

# 9.35 AI Integration Boundary

AI should not directly bypass the CAMPUS permission and provenance architecture.

A future AI layer should conceptually operate as:

```text
User
 │
 ▼
AI Interface
 │
 ▼
CAMPUS Permission / Context Layer
 │
 ▼
Authorized Knowledge + Relationships
 │
 ▼
AI Processing
 │
 ▼
Response with appropriate provenance
```

The AI component should not become an independent source of truth.

This architecture also allows AI to be added later without making it foundational to CAMPUS.

**Status: Future architectural direction.**

---

# 9.36 Technical Evaluation Framework

Technical decisions should be evaluated against:

| Criterion               | Question                                                          |
| ----------------------- | ----------------------------------------------------------------- |
| Relationship capability | Can it efficiently represent and traverse required relationships? |
| Integrity               | Can important data remain consistent?                             |
| Search                  | Can required discovery tasks be supported?                        |
| Integration             | Can it interact with existing systems?                            |
| Security                | Can appropriate controls be implemented?                          |
| Privacy                 | Can visibility and data minimization be enforced?                 |
| Local-first             | Can it operate in constrained/local environments?                 |
| Extensibility           | Can future dimensions be added?                                   |
| Performance             | Can expected workloads be handled?                                |
| Maintainability         | Can the development team operate it?                              |
| Cost                    | Is infrastructure affordable?                                     |
| Portability             | Can the system move between environments?                         |
| Complexity              | Does the technology introduce unnecessary operational burden?     |

No technology should be selected merely because it is technically fashionable or well suited to one isolated feature.

---

# 9.37 Prototype Technical Stack Decision Process

The prototype stack should be selected through the following sequence:

```text
MVP Requirements
       │
       ▼
Technical Constraints
       │
       ▼
Candidate Architectures
       │
       ▼
Small Experiments
       │
       ▼
Evaluation
       │
       ▼
Prototype Stack
       │
       ▼
Documented Decision
```

This creates a traceable relationship between requirements and technology decisions.

---

# 9.38 Technical Experiments

The R&D program should conduct targeted experiments rather than trying to build the entire architecture immediately.

Potential experiments include:

### Experiment 1 — Relationship query

Can the proposed data model efficiently answer common CAMPUS discovery questions?

### Experiment 2 — Relationship traversal

Can a user navigate multiple relationship levels without unacceptable latency or complexity?

### Experiment 3 — Search + relationship discovery

Can keyword search and relational navigation work together effectively?

### Experiment 4 — Provenance

Can information authority and source context be represented without making the interface confusing?

### Experiment 5 — Authorization

Can different users see different relationships and information appropriately?

### Experiment 6 — Integration

Can an external source be represented without turning CAMPUS into an unauthorized duplicate system?

### Experiment 7 — Local-first

Can a small CAMPUS node operate locally and synchronize selected information reliably?

### Experiment 8 — Extensibility

Can a new entity or relationship type be added without substantial architectural restructuring?

These experiments should inform technical decisions before the architecture becomes difficult to change.

---

# 9.39 Technical Debt and Prototype Constraints

The MVP is an R&D prototype.

It may therefore contain deliberate simplifications.

Examples include:

* simplified authentication;
* limited scale;
* synthetic data;
* simplified moderation;
* simplified synchronization;
* limited monitoring;
* reduced redundancy.

These limitations must be documented rather than hidden.

Prototype code should not automatically be interpreted as production-ready institutional infrastructure.

---

# 9.40 Technical Architecture Decision Records

Major technical decisions should be documented using a lightweight decision record.

A decision record should contain:

```text
Decision
Context
Options considered
Evidence
Chosen approach
Reason
Trade-offs
Consequences
Status
Revisit condition
```

Example:

> **Decision:** Use a relational database for the initial prototype.
> **Reason:** The MVP requires structured entities, strong integrity, straightforward development, and limited scale.
> **Status:** Prototype decision.
> **Revisit condition:** Relationship traversal or local-first requirements demonstrate a material limitation.

This prevents prototype implementation choices from silently becoming permanent architectural assumptions.

---

# 9.41 Technical Architecture Status

The current technical architecture contains three categories.

### Established

* CAMPUS requires an entity/relationship model.
* Identity and authorization are foundational.
* Provenance is architecturally important.
* Existing systems should retain appropriate authority.
* Search/discovery is central to the MVP.
* Privacy and security must be considered from the beginning.
* The architecture must support future extensibility.

### Proposed

* Layered application architecture.
* Dedicated integration boundary.
* Search/index layer.
* Stable CAMPUS identifiers.
* Temporal relationships.
* Hybrid/local-first capability.
* API-based domain access.
* Portable prototype deployment.

### Unresolved

* Database technology.
* Search engine.
* API style.
* Identity provider.
* VSU integration mechanisms.
* Local-first synchronization protocol.
* Deployment environment.
* Production infrastructure.
* Exact data model.
* Scale requirements.
* Final security architecture.
* Institutional data governance implementation.

---

# 9.42 Technical Architecture Summary

The technical architecture can be summarized as:

```text
                         USERS
                           │
                           ▼
                    EXPERIENCE LAYER
                           │
                           ▼
                    APPLICATION API
                           │
                           ▼
                RELATIONAL DOMAIN CORE
                  │       │       │
                  │       │       │
              Identity Provenance Permissions
                  │       │       │
                  └───────┼───────┘
                          ▼
                  DISCOVERY / SEARCH
                          │
                          ▼
                  INTEGRATION GATEWAY
                    │           │
                    ▼           ▼
              External      Institutional
               Sources         Systems
                          │
                          ▼
                       DATA LAYER
                          │
                          ▼
                    INFRASTRUCTURE
```

The key technical proposition is:

> **CAMPUS should provide a stable relational domain and discovery layer whose implementation can connect multiple information sources without requiring those sources to surrender their appropriate authority.**

---

# 9.43 Technical Architecture Decision Principle

No technology choice should be justified solely by the statement:

> "CAMPUS needs relationships."

The relevant technical question is:

> **What combination of storage, indexing, application, integration, identity, and deployment technologies can represent and serve the required relationships with sufficient performance, security, maintainability, interoperability, and operational simplicity?**

This distinction prevents the conceptual model from prematurely dictating an implementation technology.

---

# 9.44 Technical Development Sequence

The proposed technical sequence is:

```text
1. Domain model
       ↓
2. Entity + relationship prototype
       ↓
3. Search / discovery
       ↓
4. Identity + permissions
       ↓
5. Provenance
       ↓
6. Spatial relationships
       ↓
7. Integration experiment
       ↓
8. Local-first experiment
       ↓
9. Validation
       ↓
10. Architecture revision
```

Not all steps need to be completed sequentially. Some should proceed in parallel where appropriate.

The important principle is that increasingly complex infrastructure should be introduced only when required by validated requirements or research questions.


# 10. VSU / DIGITS Institutional Alignment

## 10.1 Purpose

This section establishes how CAMPUS relates to the strategic and digital-transformation context of Visayas State University (VSU).

The purpose is **not** to claim that VSU has requested, endorsed, adopted, funded, or approved CAMPUS. Instead, it identifies areas where the CAMPUS research direction may be relevant to existing institutional priorities and defines the questions that must be investigated before any institutional relationship, integration, pilot, or adoption is proposed.

Institutional alignment is therefore treated as a **research and validation question**, not as evidence of institutional commitment.

---

## 10.2 Alignment Principle

CAMPUS should be developed with continuous reference to the VSU Strategic Plan 2017–2027 because the project is intended to investigate a digital architecture that could operate within a real university environment.

The Strategic Plan is treated as:

* a strategic context;
* a source of institutional priorities and directions;
* a framework for identifying potentially relevant problems and opportunities;
* a basis for evaluating whether CAMPUS addresses meaningful university needs.

It is **not** treated as:

* a specification for CAMPUS;
* evidence that VSU requires CAMPUS;
* evidence that any CAMPUS feature is institutionally approved;
* a mandate to implement CAMPUS;
* proof that existing VSU systems are inadequate;
* a commitment by VSU to adopt the proposed architecture.

CAMPUS must remain capable of being narrowed, redesigned, integrated differently, or discontinued if institutional discovery and research evidence do not support the current hypothesis.

---

# 10.3 VSU Strategic Context

The VSU Strategic Plan 2017–2027 provides a useful reference framework for assessing the relevance of CAMPUS.

The strategic directions considered particularly relevant to the current CAMPUS research program are:

1. **World-Class Education**
2. **Globally Competitive Science and Technology**
3. **Empowered Communities**
4. **Sustainable Resource Generation**
5. **Client-Centered Governance**
6. **Versatile Spaces for Innovation**
7. **Strong Alumni Engagement**

These goals should not be interpreted as evidence that CAMPUS is the intended mechanism for achieving them.

Instead, they provide reference points against which proposed CAMPUS capabilities can be examined.

---

# 10.4 Strategic Alignment Matrix

| VSU Strategic Goal                              | Potential CAMPUS Relevance                                                                                                                                                  | Current Status         |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| **World-Class Education**                       | Relationship-oriented discovery of programs, courses, people, learning resources, competencies, opportunities, and eventually curriculum continuity and learning records    | Proposed               |
| **Globally Competitive Science and Technology** | Researcher/expertise discovery, research collaboration, knowledge discovery, technical infrastructure experimentation, and future research networks                         | Proposed               |
| **Empowered Communities**                       | Community knowledge, relationships, organizations, services, opportunities, external stakeholders, and pathways connecting university activity to communities               | Proposed               |
| **Sustainable Resource Generation**             | Discovery and connection of facilities, expertise, services, opportunities, partnerships, alumni, and institutional resources that may support resource-generating activity | Proposed               |
| **Client-Centered Governance**                  | Improved discovery of services, responsible information access, contextual navigation, institutional knowledge, and potentially feedback or service-routing mechanisms      | Proposed               |
| **Versatile Spaces for Innovation**             | Digital representation of places, facilities, laboratories, research spaces, resources, and eventually spatial/digital-twin capabilities                                    | Proposed               |
| **Strong Alumni Engagement**                    | Persistent relationships among alumni, programs, people, opportunities, pathways, communities, and institutional activities                                                 | Proposed / Later Phase |

The table identifies **potential contribution**, not demonstrated strategic impact.

Actual alignment should be evaluated through institutional consultation and evidence from users, systems, and prototype testing.

---

# 10.5 Relationship Between Strategic Alignment and the CAMPUS Architecture

The relationship between CAMPUS and the Strategic Plan is strongest at the architectural level rather than at the level of individual features.

The seven strategic goals collectively describe a university that must coordinate:

* people;
* education;
* science and technology;
* communities;
* institutional resources;
* services;
* physical spaces;
* innovation;
* alumni;
* governance.

These are precisely the kinds of entities and relationships that the CAMPUS architecture is designed to investigate.

This creates a potentially important alignment:

**Strategic direction → institutional activities → people/resources/knowledge → relationships → discovery and interaction**

CAMPUS therefore does not need to create an independent digital system for every strategic goal.

Instead, its proposed relational foundation could provide a common layer through which different institutional activities and systems become easier to discover and connect.

This remains a hypothesis requiring validation.

---

# 10.6 Strategic Alignment by CAMPUS Dimension

## 10.6.1 Digital Space / Community & Knowledge

This is the most direct expression of the initial CAMPUS architecture.

Potential institutional relevance includes:

* discovering people and organizations;
* discovering institutional knowledge;
* connecting community-generated knowledge with appropriate provenance;
* discovering services and opportunities;
* connecting activities and events;
* navigating relationships across university entities.

**Status:** Foundational MVP direction.

---

## 10.6.2 CCLR — Curriculum Continuity and Learning Records

CCLR could potentially contribute to educational continuity by representing relationships among:

* students;
* programs;
* curricula;
* courses;
* learning activities;
* competencies;
* projects;
* research;
* achievements;
* future learning opportunities.

However, a complete learning-record architecture introduces substantial institutional, technical, privacy, and governance requirements.

Therefore:

**Status:** Later-phase research direction.

The MVP should not assume that CAMPUS becomes the university's authoritative academic-record system.

---

## 10.6.3 Pathways / Education-to-Career Continuity

The Pathways dimension potentially connects:

**education → competencies → projects → research → organizations → internships → alumni → employers → careers**

This could eventually support stronger continuity between university experiences and post-university opportunities.

However, claims regarding employment outcomes, career advancement, or institutional impact require empirical validation.

**Status:** Later-phase research direction.

---

## 10.6.4 Research Discovery & Collaboration

The research dimension potentially connects:

* researchers;
* expertise;
* students;
* research projects;
* publications;
* laboratories;
* facilities;
* organizations;
* research opportunities;
* external partners.

This is potentially relevant to VSU's science and technology objectives, but CAMPUS should not duplicate or replace authoritative research repositories or research-management systems.

**Status:** Later-phase research direction.

---

## 10.6.5 Spatial Campus / Digital Twin

VSU's physical campus provides an important context for relationships among:

* buildings;
* laboratories;
* classrooms;
* offices;
* facilities;
* services;
* events;
* people;
* resources.

The CAMPUS architecture therefore treats place as a first-class entity.

However, a full digital twin would involve substantially more data, spatial modeling, operational integration, and infrastructure than the MVP requires.

**Status:**

* Basic place representation — MVP;
* spatial relationship model — later;
* interactive spatial campus — later;
* full digital twin — exploratory/research direction.

---

## 10.6.6 Local-First Digital Campus

Local-first architecture may be relevant to institutional resilience, connectivity constraints, data stewardship, and campus-level operation.

However, the suitability of this architecture for VSU cannot be assumed without understanding:

* network infrastructure;
* existing institutional architecture;
* cybersecurity requirements;
* identity infrastructure;
* hosting arrangements;
* operational capabilities;
* data governance;
* availability requirements.

**Status:** Architectural research direction.

---

## 10.6.7 GIS, Analytics and AI

GIS, analytics, and AI may eventually operate over the relational foundation.

They should not become architectural goals in themselves.

The sequence should remain:

**governed data → meaningful relationships → validated use case → appropriate analytical/AI capability**

rather than:

**AI/GIS capability → search for a problem**

**Status:** Later/future research.

---

# 10.7 VSU Digital Transformation Context

VSU's broader digital-transformation direction is particularly important because CAMPUS should not be developed as though the university were starting from zero.

Publicly described institutional digital-transformation initiatives provide an important context for investigating:

* existing systems;
* planned systems;
* institutional priorities;
* data ownership;
* integration requirements;
* identity infrastructure;
* governance;
* cybersecurity;
* digital services;
* future architecture.

The existence of these initiatives strengthens the need for **institutional systems discovery before proposing CAMPUS as an implementation solution**.

---

# 10.8 DIGITS Context

VSU's proposed **DIGITS (Digital Innovation for Green, Intelligent and Transformative Systems)** roadmap is particularly relevant to this investigation.

Public descriptions identify a broad digital-transformation direction covering areas including:

* digital governance;
* learning;
* research and innovation;
* stakeholder experience;
* smart and green campus development;
* infrastructure and cybersecurity;
* digital culture;
* sustainability;
* analytics;
* automation;
* eventual AI capabilities.

Publicly described initiatives include:

* OneVSU Mobile;
* OneVSU Portal;
* OneVSU ERP;
* University Executive Dashboard;
* electronic attendance tracking;
* MATS.

These descriptions provide **institutional context**, but they do not by themselves establish the internal architecture, implementation status, ownership, data model, interfaces, deployment model, or governance arrangements of these initiatives.

Those details must be confirmed through institutional discovery.

---

# 10.9 CAMPUS and DIGITS: Relationship Must Be Investigated

CAMPUS should not begin with the assumption that it is:

* part of DIGITS;
* separate from DIGITS;
* superior to DIGITS;
* a replacement for DIGITS;
* already incorporated into DIGITS;
* technically compatible with DIGITS;
* institutionally authorized by DIGITS.

Instead, several possible relationships should remain open for investigation.

### Model A — Complementary R&D Layer

CAMPUS could investigate a relational discovery and interaction layer that complements broader institutional digital-transformation initiatives.

### Model B — Experimental/Test Environment

CAMPUS could serve as a bounded R&D environment for testing architectural ideas before institutional-scale deployment.

### Model C — Component of a Broader Ecosystem

Some CAMPUS architectural concepts could potentially become components of a broader university digital architecture if institutional stakeholders determine that they are useful and compatible.

### Model D — Independently Integrated System

CAMPUS could remain an independently developed system that integrates with selected institutional systems through approved interfaces.

### Model E — Alternative or Superseded Direction

Institutional discovery may demonstrate that certain CAMPUS capabilities already exist, are already planned, or should be implemented through another architecture.

### Model F — Research-Only Outcome

Research may determine that a particular CAMPUS concept is technically interesting but not institutionally appropriate for deployment.

All six possibilities remain open.

The project should not select among them before sufficient institutional evidence is available.

---

# 10.10 Existing-System Discovery Requirement

Before CAMPUS proposes institutional integration, the project should conduct an **institutional systems and architecture discovery process**.

At minimum, the investigation should seek to understand:

### Systems

* What major digital systems currently exist?
* What functions do they perform?
* Which systems are authoritative for specific data?
* Which systems are planned or under development?
* Which systems are scheduled for replacement or expansion?

### Ownership

* Who owns each system?
* Who operates it?
* Who governs its data?
* Who authorizes integration?
* Who is responsible for security and availability?

### Architecture

* What technologies and architectural patterns are currently used?
* Are APIs available?
* Are import/export mechanisms available?
* Are event or synchronization mechanisms available?
* How are systems connected?

### Identity

* What identity and authentication mechanisms exist?
* Is there a university-wide identity provider?
* How are affiliations and roles represented?
* How are permissions managed?

### Data

* What information is authoritative?
* What information can be replicated?
* What information can only be referenced?
* What information is restricted?
* What retention and correction requirements exist?

### Governance

* Who can approve access?
* What institutional policies govern data?
* What privacy and security requirements apply?
* What audit mechanisms exist?
* What institutional processes govern new digital systems?

### Infrastructure

* What hosting environments are available?
* What network constraints exist?
* What local infrastructure exists?
* What cybersecurity controls are required?
* What operational capacity is available?

### Roadmap

* Which systems are already being developed?
* Which systems are planned under broader digital-transformation programs?
* Where are architectural gaps, overlaps, or opportunities for experimentation?

The purpose is not to identify reasons to justify CAMPUS.

The purpose is to determine **where CAMPUS is actually useful, unnecessary, complementary, constrained, or inappropriate**.

---

# 10.11 Institutional Architecture Boundary

A critical architectural question is:

> **What should CAMPUS own, and what should CAMPUS only reference, discover, index, or connect to?**

This should be investigated separately for each data domain.

For example:

| Domain                  | Possible CAMPUS Role              | Authority Question                         |
| ----------------------- | --------------------------------- | ------------------------------------------ |
| Person identity         | Reference/integration             | Which identity system is authoritative?    |
| Enrollment              | Reference/discovery               | Which academic system is authoritative?    |
| Course information      | Reference/cache/discovery         | Which system owns current course data?     |
| Research publication    | Discovery/reference               | Which repository is authoritative?         |
| Facility information    | Representation/reference          | Which office/system maintains it?          |
| Facility availability   | Integration/reference             | Which operational system is authoritative? |
| Events                  | Representation/integration        | Where is the authoritative event record?   |
| Community discussion    | CAMPUS-native                     | What governance applies?                   |
| Institutional knowledge | CAMPUS or external source         | Who verifies and maintains it?             |
| Opportunities           | CAMPUS representation/integration | Who owns the opportunity?                  |

This prevents the relational layer from becoming an accidental second system of record.

---

# 10.12 Institutional Validation Maturity

CAMPUS should distinguish different levels of institutional engagement.

A conversation with a VSU stakeholder does not automatically represent institutional adoption.

The project therefore uses the following progression:

1. **Conceptual recognition**
   A stakeholder understands or recognizes the problem or concept.

2. **Technical interest**
   A stakeholder sees potential technical relevance.

3. **Institutional alignment**
   Relevant institutional stakeholders identify compatibility with an institutional need or direction.

4. **Permission to prototype**
   Appropriate authority permits a bounded experiment.

5. **Pilot participation**
   Users, offices, or units participate in structured testing.

6. **Formal collaboration**
   Responsibilities, scope, data access, governance, or other terms are formally established.

7. **Adoption**
   The institution formally decides to use or deploy the resulting system or capability.

8. **Commercialization / external deployment**
   A resulting architecture, product, or service is developed for broader institutional or external use.

These stages must not be conflated.

In particular:

**interest ≠ permission ≠ pilot ≠ adoption**

---

# 10.13 Institutional Stakeholder Discovery

Institutional discovery should involve different stakeholder perspectives because no single office is likely to represent the entire university digital environment.

Potential stakeholder groups include:

### University Leadership

Questions:

* What institutional problems are strategically important?
* Where is digital transformation expected to create value?
* What institutional outcomes matter?
* What constraints or priorities should shape experimentation?

### ICT / Technical Personnel

Questions:

* What systems currently exist?
* How are they architected?
* What integration mechanisms exist?
* What infrastructure and cybersecurity constraints apply?
* What would a technically responsible prototype require?

### Academic Units

Questions:

* How do students and faculty currently discover information and opportunities?
* Where does curricular or institutional knowledge become difficult to navigate?
* What relationships matter across academic activities?

### Research Units

Questions:

* How are researchers, expertise, projects, facilities, and publications currently discovered?
* What interoperability requirements exist?
* Which information is authoritative?

### Administrative / Service Units

Questions:

* How are services discovered?
* What information must remain authoritative?
* What workflows could benefit from improved routing or contextual discovery?

### Students

Questions:

* What do they need to discover?
* How do they currently discover it?
* Which relationships are difficult to see?
* Does relational navigation reduce effort or create additional complexity?

### Alumni / External Stakeholders

These become particularly relevant to later Pathways and alumni-related research.

---

# 10.14 Institutional Validation Sequence

The preferred sequence is:

**Strategic context → system discovery → stakeholder research → architecture mapping → bounded prototype → technical validation → user validation → institutional evaluation**

rather than:

**Concept → presentation → adoption proposal**

This sequence reduces the risk of designing around assumptions about VSU's existing environment.

---

# 10.15 Evidence Required for Institutional Alignment

Institutional alignment should progressively be supported by different evidence types.

| Question                                    | Evidence                                                           |
| ------------------------------------------- | ------------------------------------------------------------------ |
| Is the problem institutionally relevant?    | Stakeholder interviews, institutional documents, workflow evidence |
| Does an existing system already solve it?   | Systems inventory and technical discovery                          |
| Is there a meaningful architectural gap?    | Architecture mapping                                               |
| Would CAMPUS complement existing systems?   | Integration analysis                                               |
| Would users benefit?                        | User research and usability testing                                |
| Is the architecture technically feasible?   | Prototype experiments                                              |
| Can institutional data be used responsibly? | Governance/privacy/security review                                 |
| Is a pilot appropriate?                     | Institutional stakeholder decision                                 |
| Is integration justified?                   | Technical + institutional validation                               |
| Should the project expand?                  | Evidence synthesis and decision gate                               |

---

# 10.16 Strategic Alignment Must Not Become Confirmation Bias

A major research risk is using the Strategic Plan to justify CAMPUS after the fact.

For example:

> "VSU values innovation, therefore CAMPUS must be valuable."

This is not sufficient evidence.

The stronger research question is:

> "Given VSU's strategic priorities and actual institutional environment, does the CAMPUS hypothesis address a real and meaningful problem that existing systems and processes do not already address adequately?"

The answer may be:

* yes;
* partially;
* only for a specific use case;
* only as an experimental architecture;
* already addressed by existing systems;
* technically feasible but institutionally inappropriate;
* or no.

All outcomes are legitimate research findings.

---

# 10.17 Strategic Alignment and MVP Boundaries

Strategic alignment should not be used to expand the MVP indefinitely.

A strategic goal may justify **investigating** a capability without justifying its immediate implementation.

For example:

* World-Class Education → investigate CCLR, but do not build a complete learning-record system in MVP.
* Globally Competitive Science and Technology → investigate research discovery, but do not build a complete research-management platform.
* Empowered Communities → investigate community relationships, but do not build a universal social network.
* Sustainable Resource Generation → investigate resource/opportunity relationships, but do not assume CAMPUS itself generates revenue.
* Client-Centered Governance → improve discovery and routing, but do not replace administrative systems.
* Versatile Spaces for Innovation → represent places, but do not immediately construct a full digital twin.
* Strong Alumni Engagement → model alumni relationships as a later extension, rather than building an alumni platform immediately.

This maintains the distinction between:

**strategic relevance** and **MVP necessity**.

---

# 10.18 Potential Institutional Architecture

A future institutional architecture could potentially look conceptually like:

**University Users**

↓

**CAMPUS Experience / Discovery Layer**

↓

**CAMPUS Relational Layer**

↙ ↓ ↘

**University Systems** | **Knowledge Sources** | **Physical / Spatial Context**

↓

**Institutional Infrastructure**

This is only a conceptual relationship.

The actual architecture must be determined through institutional systems discovery.

CAMPUS should not assume that it becomes the top-level university portal, the university database, or the central authority for institutional information.

Its more bounded hypothesis is that a **relationship-oriented layer may improve discovery and connection across systems that otherwise remain specialized**.

---

# 10.19 Institutional Fit Criteria

Before any institutional pilot is proposed, CAMPUS should evaluate:

### Strategic Fit

Does the experiment address a meaningful institutional direction?

### User Need

Is there demonstrated user demand or workflow friction?

### Technical Fit

Can it coexist with the existing technical environment?

### Data Governance Fit

Can data be accessed and represented responsibly?

### Security Fit

Can the system meet institutional security requirements?

### Privacy Fit

Can personal and sensitive information be appropriately protected?

### Operational Fit

Can the institution realistically operate or maintain the capability?

### Governance Fit

Are ownership and accountability clear?

### Economic Fit

Are infrastructure, manpower, maintenance, and integration costs reasonable?

### Research Value

Will the experiment generate meaningful evidence regardless of whether CAMPUS is eventually adopted?

A prototype should not proceed to institutional deployment merely because it is technically possible.

---

# 10.20 Current Alignment Position

At the current R&D stage, the following positions are established or proposed:

### Established / Institutional Context

* VSU has an established Strategic Plan 2017–2027 that provides the relevant strategic context for this research.
* The plan identifies strategic directions relevant to education, science and technology, communities, resources, governance, innovation spaces, and alumni engagement.
* VSU has publicly described a broader digital-transformation direction under DIGITS.
* Existing and planned institutional systems must be understood before CAMPUS can responsibly claim a specific architectural role.

### Proposed

* CAMPUS may provide a relationship-oriented layer capable of connecting people, knowledge, education, research, places, services, opportunities, and institutional resources.
* Such a layer could potentially complement broader digital-transformation initiatives.
* CAMPUS may provide a useful R&D environment for testing relational discovery, interoperability, provenance, identity, and local-first architectures.
* Strategic alignment may justify investigation of specific CAMPUS dimensions.

### Unresolved

* The precise relationship between CAMPUS and DIGITS.
* Whether CAMPUS overlaps with existing or planned VSU systems.
* Which institutional systems could technically integrate with CAMPUS.
* Which systems are authoritative for specific data.
* Who owns and governs relevant data.
* What institutional architecture and infrastructure already exist.
* Whether VSU would permit a prototype or pilot.
* Which use cases provide sufficient institutional value.
* Whether CAMPUS should ultimately remain an independent R&D project, become a complementary layer, become a component of a broader institutional architecture, or lead to a different outcome.

---

# 10.21 Section Conclusion

The VSU Strategic Plan provides a strong **context for evaluating CAMPUS**, but it does not validate the CAMPUS hypothesis by itself.

The relevant institutional question is not:

> **"How can CAMPUS be made to fit VSU's strategy?"**

It is:

> **"Given VSU's strategic priorities, existing systems, institutional constraints, and actual user needs, where—if anywhere—could a relationship-oriented digital-campus architecture create meaningful and demonstrable value?"**

This distinction is central to the R&D character of CAMPUS.

The next stage should therefore move from **strategic alignment** to **institutional and systems discovery**, while keeping the CAMPUS architecture sufficiently flexible to incorporate evidence that may strengthen, narrow, modify, integrate, or disprove the current proposal.


# 11. Research & Validation Methodology

## 11.1 Purpose

This section defines how CAMPUS will be investigated, prototyped, tested, evaluated, revised, and potentially discontinued.

The methodology treats CAMPUS as an **R&D hypothesis**, not a predetermined product.

The objective is to determine:

1. whether the underlying problem exists in a meaningful form;
2. which relationships users actually need to discover;
3. whether a relational digital layer provides measurable value;
4. whether the proposed architecture is technically feasible;
5. whether it can coexist responsibly with existing university systems;
6. what governance, privacy, security, and institutional conditions are required;
7. whether the evidence justifies further development.

The methodology must therefore allow research findings to:

* strengthen the current architecture;
* narrow the scope;
* modify architectural assumptions;
* replace proposed mechanisms;
* postpone dimensions;
* identify existing solutions that make a CAMPUS capability unnecessary;
* or disprove portions of the hypothesis.

---

# 11.2 Research Philosophy

CAMPUS follows an **evidence-driven, iterative R&D approach**.

The project should avoid two opposite failure modes:

### Technology-first development

> "This architecture is technically interesting, therefore we should build it."

### Confirmation-driven research

> "CAMPUS is the intended solution, therefore research should demonstrate its value."

Instead:

> **Problem → Evidence → Hypothesis → Prototype → Test → Evidence → Revision → Decision**

The research process should continuously distinguish between what is known, what is proposed, and what remains uncertain.

---

# 11.3 Evidence Classification

All major findings should be assigned one of three primary statuses.

### Established

Supported by:

* authoritative institutional documents;
* verified technical documentation;
* direct observation;
* documented system behavior;
* research literature;
* completed experiments;
* user testing;
* formal institutional decisions;
* other sufficiently reliable evidence.

### Proposed

A current CAMPUS:

* hypothesis;
* architectural design;
* assumption;
* implementation proposal;
* research direction.

A proposed item should not be presented as an established fact.

### Unresolved

A question requiring:

* research;
* technical investigation;
* stakeholder input;
* institutional clarification;
* testing;
* additional evidence.

This classification should appear throughout the Blueprint and relevant project documentation.

---

# 11.4 Research Streams

CAMPUS research should be divided into interconnected streams.

## Stream A — Problem and User Research

Determines whether the underlying problem exists and how it affects different university stakeholders.

## Stream B — Relational Model Research

Determines which entities and relationships are meaningful enough to justify representation.

## Stream C — User Experience Research

Tests whether relationship-oriented discovery improves understanding, navigation, and action.

## Stream D — Institutional Systems Research

Maps existing systems, authorities, ownership, interfaces, constraints, and planned digital initiatives.

## Stream E — Technical Architecture Research

Tests storage, search, traversal, integration, identity, authorization, synchronization, deployment, and extensibility.

## Stream F — Governance, Privacy and Security Research

Determines what information and relationships may responsibly be represented and under what conditions.

## Stream G — Local-First / Hybrid Architecture Research

Determines whether local operation, synchronization, and hybrid deployment provide sufficient value relative to their complexity.

## Stream H — Future-Dimension Research

Investigates CCLR, Pathways, Research, Spatial/Digital Twin, GIS, analytics, and AI without allowing them to prematurely expand the MVP.

---

# 11.5 Research Phases

The R&D process is organized into progressive phases.

### Phase 1 — Discovery

Understand:

* users;
* problems;
* existing workflows;
* existing systems;
* institutional context;
* constraints;
* relevant research.

**Output:** evidence-backed problem and opportunity map.

---

### Phase 2 — Concept Validation

Test:

* relational concepts;
* entity types;
* relationship types;
* discovery patterns;
* information/provenance distinctions;
* potential user value.

**Output:** revised conceptual model and prioritized use cases.

---

### Phase 3 — Technical Feasibility

Test:

* relational data representation;
* search;
* relationship traversal;
* authorization;
* provenance;
* integration;
* deployment;
* local-first mechanisms.

**Output:** technical evidence and architecture decisions.

---

### Phase 4 — Functional Prototype

Build a small vertical slice demonstrating the core hypothesis.

**Output:** working prototype.

---

### Phase 5 — User Validation

Test representative tasks with relevant users.

**Output:** usability and value evidence.

---

### Phase 6 — Institutional Validation

Evaluate:

* system coexistence;
* governance;
* data access;
* security;
* operational requirements;
* institutional usefulness.

**Output:** institutional feasibility assessment.

---

### Phase 7 — Decision

Determine whether each major direction should:

* expand;
* continue experimentation;
* be revised;
* be narrowed;
* remain research-only;
* or stop.

---

# 11.6 Research Methodology Matrix

| Research Question                                  | Primary Method                               | Evidence                                   |
| -------------------------------------------------- | -------------------------------------------- | ------------------------------------------ |
| Does the underlying problem exist?                 | Interviews, observation, workflow research   | Documented user problems                   |
| Which relationships matter?                        | Interviews, task analysis, prototype testing | Relationship-value findings                |
| Does relational discovery improve discovery?       | Comparative usability testing                | Task performance and user feedback         |
| Does contextual information improve understanding? | Prototype experiments                        | Comprehension/navigation evidence          |
| Can relationships persist usefully over time?      | Longitudinal scenarios and modeling          | Temporal relationship findings             |
| Can CAMPUS coexist with existing systems?          | System mapping and integration experiments   | Architecture/integration evidence          |
| What data should CAMPUS own?                       | Authority mapping                            | Data ownership model                       |
| What permissions are necessary?                    | Threat modeling and access experiments       | Authorization model                        |
| Can provenance be understood by users?             | UX testing                                   | Provenance comprehension                   |
| Is local-first worthwhile?                         | Technical benchmark                          | Performance/resilience/complexity evidence |
| Which storage architecture is appropriate?         | Technical experiments                        | Benchmark results                          |
| Is the MVP valuable?                               | Task-based prototype testing                 | User-value evidence                        |
| Should future dimensions be developed?             | Evidence synthesis                           | Expansion decision                         |

---

# 11.7 User Research

User research should investigate actual behaviors rather than asking only whether people "like" CAMPUS.

The central question is:

> **What are users trying to accomplish today, and where do relationships among university entities become difficult to discover or use?**

Potential research participants include:

* students;
* faculty;
* researchers;
* administrative staff;
* technical personnel;
* university leadership;
* alumni;
* selected external stakeholders where relevant.

Participant selection should be driven by the research question rather than by an assumption that every stakeholder group requires equal representation in every study.

---

# 11.8 Interviews

Semi-structured interviews may investigate:

### Discovery

* How do you currently find people, services, facilities, opportunities, or information?
* What do you usually search for?
* What happens when you do not know the name of the office, person, or system involved?
* How do you discover related resources?

### Relationships

* Which people or resources are commonly connected?
* Which connections are useful but difficult to discover?
* What information do you normally need before acting?

### Continuity

* What information becomes useful later?
* Which relationships should remain discoverable after a course, project, employment period, or university activity?
* Which information should expire?

### Existing Systems

* Which systems do you currently use?
* Which system do you trust for particular information?
* Where do you switch between systems or offices?

### Friction

* Where do you lose time?
* What information do you repeatedly ask other people to find?
* What kinds of information are difficult to verify?

The goal is to document workflows and problems, not to lead participants toward CAMPUS.

---

# 11.9 Observation and Workflow Research

Where feasible, research should include observation of actual or simulated workflows.

Examples:

* finding a university service;
* locating a facility;
* finding a faculty member with particular expertise;
* discovering a research opportunity;
* locating a course-related resource;
* identifying an organization;
* finding an appropriate office for a problem;
* navigating from information to an actionable next step.

Workflow research can reveal problems that participants may not articulate during interviews.

---

# 11.10 User Research Artifacts

Each research activity should produce structured artifacts where appropriate:

* interview notes;
* anonymized observations;
* workflow maps;
* user journey maps;
* task definitions;
* problem statements;
* relationship maps;
* opportunity areas;
* evidence records;
* research decisions.

Personal information should be minimized and handled according to applicable privacy and research requirements.

---

# 11.11 Relational Model Validation

The relational model should be tested independently from the visual interface.

The research should ask:

> **Does representing a relationship explicitly provide information that would otherwise be difficult to discover?**

Potential experiments include:

### Direct Discovery

A user searches for a known entity.

### Relational Discovery

A user starts with one entity and discovers another through a relationship.

### Contextual Discovery

A user examines an entity and uses its surrounding relationships to understand it.

### Unexpected Discovery

A user discovers a relevant connection they did not know existed.

### Action Discovery

A user moves from an entity or relationship to an actionable resource, service, opportunity, or next step.

The purpose is to determine whether relationships are genuinely useful information structures rather than merely visually attractive connections.

---

# 11.12 Relationship Value Test

Each candidate relationship should be evaluated using questions such as:

1. Who benefits from knowing this relationship?
2. What decision or action does it support?
3. Is the relationship stable enough to represent?
4. Can its source be established?
5. Who is authorized to create or modify it?
6. How long should it remain valid?
7. What happens when it becomes outdated?
8. What privacy implications does it introduce?
9. Does representing it duplicate an authoritative system?
10. Would users actually use it?

A relationship should not be added merely because it is technically possible to represent.

---

# 11.13 Comparative UX Testing

One of the most important research questions is whether CAMPUS provides value beyond ordinary information retrieval.

Where practical, users should perform equivalent tasks using:

### Condition A — Existing / Conventional Workflow

The information sources or workflow currently available to the participant.

### Condition B — CAMPUS Prototype

The same task using the relational prototype.

Potential measures include:

* task completion;
* time to useful result;
* number of steps;
* navigation errors;
* information comprehension;
* confidence;
* ability to identify relevant relationships;
* ability to proceed to an action.

The objective is not to guarantee that CAMPUS wins the comparison.

A result showing no meaningful improvement is an important finding.

---

# 11.14 Prototype Testing

Prototype testing should examine the complete conceptual loop:

**Search → Entity → Relationship → Context → Discovery → Action**

For example:

> Search for a faculty member → view profile → see research/project relationships → discover related laboratory or opportunity → understand context → proceed to relevant resource.

The prototype should therefore be evaluated as a **relational interaction system**, rather than as a collection of screens.

---

# 11.15 Provenance and Trust Testing

Because CAMPUS may combine information from different sources, users should be able to distinguish information according to provenance and authority.

Testing should investigate whether users can correctly identify:

* official institutional information;
* community-generated information;
* personal contributions;
* unverified information;
* scholarly/research information;
* externally sourced information.

Potential questions:

* Can users tell where information came from?
* Can they identify whether it has been verified?
* Can they distinguish institutional authority from personal opinion?
* Can they understand when information may be outdated?
* Can they identify the responsible source?

The system should not create a false impression of certainty merely by presenting information in a unified interface.

---

# 11.16 Institutional Systems Research

Institutional systems research should create a structured map of the university's digital environment.

Potential inventory fields include:

| Field            | Description                          |
| ---------------- | ------------------------------------ |
| System           | Name or identifier                   |
| Function         | What the system does                 |
| Owner            | Responsible institutional unit       |
| Operator         | Technical/operational responsibility |
| Authority        | Data considered authoritative        |
| Users            | Primary user groups                  |
| Data             | Major information domains            |
| Interface        | API/import/export/manual             |
| Identity         | Authentication mechanism             |
| Integration      | Existing connections                 |
| Security         | Relevant controls                    |
| Privacy          | Relevant restrictions                |
| Lifecycle        | Existing/planned/replacement         |
| CAMPUS relevance | Potential interaction                |
| Evidence status  | Established / Proposed / Unresolved  |

This becomes a major institutional input to the technical architecture.

---

# 11.17 Technical Experiments

Technical development should be structured as experiments rather than immediately as production development.

Priority experiments include:

### Experiment 1 — Relationship Representation

Can the selected data architecture efficiently represent entities and relationships?

### Experiment 2 — Relationship Traversal

Can users and applications efficiently discover multi-step relationships?

### Experiment 3 — Search + Relationship Discovery

Can direct search and relational navigation work together?

### Experiment 4 — Provenance

Can source, authority, verification, and external identifiers be represented reliably?

### Experiment 5 — Authorization

Can visibility and access rules operate at appropriate levels?

### Experiment 6 — External Integration

Can external institutional information be referenced or synchronized without creating an unauthorized second source of truth?

### Experiment 7 — Temporal Relationships

Can relationships change over time without destroying historical context?

### Experiment 8 — Local-First Operation

Can useful functionality continue under constrained connectivity?

### Experiment 9 — Synchronization

Can distributed data converge safely under realistic conflict scenarios?

### Experiment 10 — Extensibility

Can new entity and relationship types be added without redesigning the entire system?

---

# 11.18 Local-First Validation

Local-first architecture should be evaluated empirically.

Experiments should consider:

* disconnected operation;
* delayed synchronization;
* conflict resolution;
* identity under connectivity loss;
* data freshness;
* local storage;
* recovery;
* encryption;
* node registration;
* backup;
* synchronization failure;
* administrative complexity.

Evaluation should compare:

**Value gained**

against

**Complexity introduced**

rather than treating local-first architecture as inherently superior.

---

# 11.19 Security Research

Security should be considered from the earliest prototype architecture.

A preliminary threat model should consider:

* unauthorized access;
* account compromise;
* privilege escalation;
* information leakage;
* malicious content;
* unauthorized relationship creation;
* data manipulation;
* compromised integrations;
* synchronization attacks;
* exposed local nodes;
* insecure APIs;
* administrative abuse.

The prototype should not use sensitive institutional data merely to make the demonstration appear realistic.

Synthetic, public, or appropriately authorized data should be preferred during early experimentation.

---

# 11.20 Privacy Research

The relational nature of CAMPUS creates privacy questions that ordinary document repositories may not encounter.

For example:

> If two pieces of information are individually public, does explicitly connecting them create a new privacy risk?

This should be treated as a core research question.

Privacy analysis should consider:

* data minimization;
* purpose limitation;
* visibility;
* consent where applicable;
* role-based access;
* relationship-level permissions;
* retention;
* correction;
* deletion or de-identification;
* auditability;
* sensitive relationship inference.

The principle is:

> **The ability to represent a relationship does not automatically justify representing it.**

---

# 11.21 Governance and Moderation Research

Community-generated information introduces governance requirements.

Research should investigate:

* who can create content;
* who can create relationships;
* who can verify information;
* how corrections are submitted;
* how disputes are handled;
* how outdated information is marked;
* how inappropriate content is removed;
* how institutional information is protected from unauthorized modification;
* how provenance is preserved.

The governance model should distinguish between:

**technical permission**

and

**institutional authority**.

A user may technically be able to perform an action without being institutionally authorized to do so.

---

# 11.22 Research on Temporal Continuity

CAMPUS assumes that relationships may persist across time.

This should be tested rather than assumed.

Examples include:

* student → course;
* student → project;
* researcher → research project;
* faculty member → organization;
* alumnus → university program;
* facility → organization;
* person → opportunity.

Research questions include:

* Which relationships remain historically useful?
* Which relationships should expire?
* Should users see historical relationships?
* Who determines validity?
* How should changing affiliations be represented?
* How can outdated information remain useful without being mistaken for current information?

---

# 11.23 Validation of Future Dimensions

Future dimensions should not be built simply because they are present in the architectural vision.

Each should pass a separate evidence threshold.

### CCLR

Evidence should demonstrate meaningful educational continuity problems that the relational architecture can address.

### Pathways

Evidence should demonstrate meaningful demand for connections among education, competencies, opportunities, alumni, and career pathways.

### Research

Evidence should demonstrate discovery/collaboration problems that existing research systems do not already address adequately.

### Spatial / Digital Twin

Evidence should demonstrate useful spatial interaction beyond a conventional map or directory.

### GIS

Evidence should identify spatial questions requiring GIS capabilities.

### Analytics

Evidence should establish a decision or operational problem requiring analytics.

### AI

Evidence should establish a validated use case where AI provides value over simpler mechanisms.

This prevents future dimensions from becoming automatic commitments.

---

# 11.24 Evidence Collection and Research Log

The project should maintain a structured research log.

Each significant finding should record:

* date;
* research activity;
* question;
* participants/source;
* observation;
* evidence;
* interpretation;
* confidence;
* affected assumption;
* resulting decision;
* follow-up action.

Where appropriate, findings should be linked to:

* research questions;
* architecture decisions;
* MVP decisions;
* technical decision records;
* stakeholder feedback;
* prototype versions.

This creates traceability from evidence to architecture.

---

# 11.25 Decision Records

Important decisions should be documented rather than existing only in conversation or memory.

A decision record should contain:

1. **Decision**
2. **Context**
3. **Problem**
4. **Options considered**
5. **Evidence**
6. **Chosen direction**
7. **Reason**
8. **Trade-offs**
9. **Consequences**
10. **Status**
11. **Revisit condition**

Examples:

* selecting a storage architecture;
* defining a relationship type;
* deciding that a system remains authoritative;
* choosing local-first or conventional deployment for an experiment;
* excluding a feature from MVP;
* changing the identity architecture;
* postponing a future dimension.

---

# 11.26 Research Quality Controls

To reduce confirmation bias and weak evidence, CAMPUS research should apply the following controls.

### Separate Observation from Interpretation

Example:

**Observation:** Participants required several separate sources to find information.

**Interpretation:** The current discovery workflow may contain fragmentation.

These should not be treated as the same statement.

### Record Negative Findings

Failed experiments and negative user feedback must be preserved.

### Avoid Leading Questions

Research should not ask:

> "Would CAMPUS make this easier?"

when the actual research question is:

> "How do you currently accomplish this task, and what difficulties do you encounter?"

### Compare Alternatives

Where feasible, compare CAMPUS against existing workflows or simpler solutions.

### Use Representative Tasks

Testing should focus on real tasks rather than demonstrations designed around CAMPUS capabilities.

### Avoid Manufactured Evidence

No claim of successful validation, institutional interest, technical performance, or user benefit should be made without corresponding evidence.

---

# 11.27 Research Ethics and Participant Protection

User research should apply appropriate ethical safeguards.

Depending on the activity, this may include:

* informed participation;
* voluntary participation;
* privacy protection;
* anonymization;
* secure research records;
* minimization of collected personal information;
* appropriate handling of sensitive information;
* clear distinction between research participation and institutional evaluation.

If formal academic research involving human participants is conducted, the project should determine whether institutional research ethics review or another formal process is required.

---

# 11.28 Research Outputs

The methodology should produce concrete outputs rather than only qualitative conclusions.

Expected outputs include:

### Discovery Outputs

* stakeholder map;
* problem map;
* workflow maps;
* system inventory;
* institutional architecture map.

### Conceptual Outputs

* validated/revised entity model;
* relationship taxonomy;
* provenance model;
* permissions model;
* temporal model.

### Technical Outputs

* architecture experiments;
* benchmarks;
* technical decision records;
* integration prototypes;
* local-first experiments;
* security/threat models.

### Product Outputs

* prototype versions;
* user flows;
* usability findings;
* interface iterations.

### Institutional Outputs

* alignment analysis;
* systems compatibility assessment;
* governance requirements;
* pilot requirements.

### Research Outputs

* findings;
* limitations;
* unresolved questions;
* expansion criteria;
* disconfirmation findings.

---

# 11.29 Validation Gates

CAMPUS should use explicit decision gates.

## Gate 1 — Problem Validation

**Question:**

Is there sufficient evidence that the underlying discovery/relationship problem is meaningful?

Possible outcomes:

* Proceed;
* Narrow problem;
* Redefine problem;
* Stop.

---

## Gate 2 — Relational Value

**Question:**

Do explicit relationships provide meaningful value beyond ordinary information retrieval?

Possible outcomes:

* Proceed;
* Refine relationship model;
* Narrow use case;
* Stop relational hypothesis.

---

## Gate 3 — Technical Feasibility

**Question:**

Can the architecture represent and query the required relationships within acceptable complexity and constraints?

Possible outcomes:

* Proceed;
* Change technical architecture;
* Narrow requirements;
* Stop a technical direction.

---

## Gate 4 — Institutional Compatibility

**Question:**

Can CAMPUS coexist responsibly with existing institutional systems and governance?

Possible outcomes:

* Continue prototype;
* Define integration boundary;
* Change architecture;
* Restrict to research environment;
* Stop institutional integration.

---

## Gate 5 — User Value

**Question:**

Does the prototype improve meaningful user tasks?

Possible outcomes:

* Expand;
* Iterate;
* Narrow;
* Stop the tested capability.

---

## Gate 6 — Expansion

**Question:**

Is there sufficient evidence to justify expanding beyond the foundational MVP?

Possible outcomes:

* Expand selected dimension;
* Continue research;
* Maintain MVP;
* Narrow project;
* Stop.

---

# 11.30 Decision Framework

At major gates, the project should classify directions using five outcomes:

### Expand

Evidence supports additional development.

### Revise

The underlying problem remains meaningful, but the current implementation or architecture needs modification.

### Narrow

The broader hypothesis is too large, but a specific use case demonstrates value.

### Research Only

The concept is technically or academically valuable but does not yet justify deployment.

### Stop

Evidence does not justify further investment.

This framework applies to individual capabilities as well as major CAMPUS dimensions.

---

# 11.31 Evidence Threshold for Institutional Pilot

An institutional pilot should require more than a functional prototype.

Before requesting a real-world pilot, CAMPUS should ideally demonstrate:

* a defined problem;
* identifiable users;
* a bounded use case;
* prototype evidence;
* meaningful user feedback;
* technical feasibility;
* clear system boundaries;
* data authority;
* privacy requirements;
* security requirements;
* governance responsibilities;
* institutional stakeholder support;
* defined success criteria;
* defined failure criteria;
* an agreed pilot scope.

The exact institutional approval requirements remain unresolved until the relevant VSU processes are understood.

---

# 11.32 Research-to-Architecture Feedback Loop

Research findings should feed directly into architecture.

The intended loop is:

**Research Question**

↓

**Evidence Collection**

↓

**Finding**

↓

**Architecture / UX / Governance Implication**

↓

**Prototype Change**

↓

**New Test**

↓

**Decision**

↓

**Blueprint Update**

This prevents the Blueprint from becoming a static document detached from actual research.

---

# 11.33 Blueprint Versioning

Because CAMPUS is an active R&D project, major research findings should trigger controlled Blueprint revisions.

For example:

**v0.1**
Conceptual consolidation and initial technical architecture.

**v0.2**
Post-discovery revision.

**v0.3**
Post-prototype technical/user validation.

**v0.4**
Post-institutional validation.

Future versions should not merely add features.

They should record changes to:

* assumptions;
* evidence;
* architecture;
* scope;
* technical decisions;
* institutional understanding;
* risks;
* unresolved questions.

---

# 11.34 Research Success

Research success is **not defined as proving that CAMPUS should be adopted**.

Research is successful if it produces sufficiently reliable evidence to answer important questions.

A successful research program could conclude:

* CAMPUS is valuable and technically feasible;
* only a narrower CAMPUS capability is valuable;
* the relational layer is useful but should integrate differently;
* a particular dimension is valuable while others are not;
* local-first architecture is inappropriate for the intended use case;
* existing systems already solve a proposed problem;
* the architecture requires major revision;
* or the original hypothesis is not sufficiently supported.

All of these outcomes improve the project's knowledge.

---

# 11.35 Methodological Principle

The central methodological principle is:

> **CAMPUS should be built to generate evidence, not evidence manufactured to justify CAMPUS.**

The prototype is therefore both:

1. a software artifact; and
2. a research instrument.

Its value lies not only in what it demonstrates, but also in what it allows the project to discover.

---

# 11.36 Current Methodology Status

### Established

* CAMPUS requires an evidence-driven R&D process.
* The project must distinguish established, proposed, and unresolved claims.
* The prototype is both a product artifact and research instrument.
* Existing systems must be investigated before institutional integration claims are made.
* Negative and disconfirming evidence must be retained.
* Technical, user, institutional, governance, privacy, and security dimensions all require validation.

### Proposed

* Progressive research phases from discovery through validation and decision.
* User interviews and workflow research.
* Comparative usability testing.
* Technical architecture experiments.
* Institutional system mapping.
* Local-first experiments.
* Explicit validation gates.
* Structured research and decision records.
* Blueprint versioning based on evidence.

### Unresolved

* Exact participant numbers and sampling strategy.
* Formal research ethics requirements.
* Exact VSU stakeholder/office participation.
* Access to institutional systems and documentation.
* Availability of technical interfaces.
* Appropriate pilot environment.
* Exact quantitative success thresholds.
* Exact benchmark targets.
* Formal institutional approval pathway.
* Whether future dimensions will survive validation.

---

# 11.37 Section Conclusion

CAMPUS should progress as an **evidence-generating R&D program**, not as a conventional software project whose primary objective is feature completion.

The immediate research sequence is therefore:

**Understand the problem**

→ **Map the institutional environment**

→ **Identify valuable relationships**

→ **Test the relational model**

→ **Build a small vertical slice**

→ **Test users and technical assumptions**

→ **Evaluate governance and institutional compatibility**

→ **Decide what deserves further investment**

This methodology provides the bridge between the conceptual and technical architecture defined in Sections 6–9 and the development roadmap, resources, budget, governance, and eventual institutional decisions that follow.


# 12. Development Roadmap

## 12.1 Purpose

This section defines the proposed development sequence for CAMPUS from its current conceptual R&D state toward a bounded functional prototype and, if supported by evidence, subsequent institutional experimentation.

The roadmap is intentionally **stage-gated**.

CAMPUS should not proceed directly from conceptual architecture to broad platform development. Each stage should produce evidence and decisions that determine whether the next stage is justified.

The roadmap therefore follows:

**Consolidate → Discover → Specify → Experiment → Prototype → Validate → Decide → Expand selectively**

The roadmap is a planning framework rather than a commitment to a fixed schedule.

Actual timing should depend on:

* research findings;
* technical feasibility;
* available manpower;
* institutional access;
* permissions;
* infrastructure;
* funding;
* stakeholder availability;
* prototype performance.

---

# 12.2 Current Development Position

CAMPUS is currently positioned between:

**Conceptual Exploration**

and

**Structured R&D / Prototyping**

The project has established a preliminary:

* project definition;
* problem hypothesis;
* research-question framework;
* conceptual architecture;
* major-dimension model;
* MVP boundary;
* technical architecture;
* institutional-alignment framework;
* research methodology.

The next priority is not broad feature development.

It is to convert these materials into a coherent research and engineering program capable of producing evidence.

---

# 12.3 Roadmap Principles

The development roadmap follows eight principles.

### 1. Consolidate Before Expanding

Existing concepts should be reconciled before new dimensions are added.

### 2. Evidence Before Scale

A larger prototype should follow evidence from a smaller prototype.

### 3. Architecture Before Feature Accumulation

Core identity, relationships, provenance, permissions, discovery, and integration boundaries should be established before specialized features.

### 4. Prototype the Hypothesis

The prototype should demonstrate the central relational hypothesis rather than attempt to represent the entire university.

### 5. Institutional Discovery Before Institutional Integration

Real institutional data and systems should not be incorporated merely because they are technically accessible.

### 6. Research and Development Run Together

Software development generates research evidence; research findings change software architecture.

### 7. Future Dimensions Remain Conditional

CCLR, Pathways, Research, Digital Twin, GIS, analytics, and AI should expand only when evidence justifies them.

### 8. Every Major Phase Has an Exit Decision

No phase should automatically lead to the next.

---

# 12.4 Roadmap Overview

The proposed roadmap consists of eight major stages.

| Stage | Name                                      | Primary Objective                                  |
| ----- | ----------------------------------------- | -------------------------------------------------- |
| 0     | Blueprint Consolidation                   | Establish authoritative R&D baseline               |
| 1     | Institutional & User Discovery            | Validate problem and understand environment        |
| 2     | Architecture & Technical Specification    | Convert concepts into implementable specifications |
| 3     | Technical Experiments                     | Test critical architectural assumptions            |
| 4     | MVP Prototype                             | Build functional vertical slice                    |
| 5     | User & Technical Validation               | Generate evidence of value and feasibility         |
| 6     | Institutional Validation / Pilot Decision | Determine institutional suitability                |
| 7     | Selective Expansion                       | Develop only validated dimensions                  |

These stages may overlap where appropriate, but their decision logic should remain distinct.

---

# 12.5 Stage 0 — Blueprint Consolidation

## Objective

Create a coherent and internally consistent **CAMPUS R&D Blueprint v0.1**.

## Activities

* consolidate previous project materials;
* reconcile terminology;
* identify contradictions;
* classify claims as Established / Proposed / Unresolved;
* define canonical terminology;
* establish MVP boundary;
* establish architecture;
* document assumptions;
* document unresolved questions;
* establish decision-register structure.

## Outputs

* R&D Blueprint v0.1;
* canonical project definition;
* conceptual architecture;
* MVP specification;
* initial technical architecture;
* research methodology;
* institutional-alignment framework;
* decision register.

## Exit Criterion

The project has a sufficiently coherent baseline from which research and prototype development can proceed.

---

# 12.6 Stage 1 — Institutional and User Discovery

## Objective

Determine whether the proposed problem exists meaningfully and understand the actual environment in which CAMPUS would operate.

## Workstreams

### User Discovery

* student interviews;
* faculty/staff interviews;
* selected researcher interviews;
* workflow observation;
* task analysis;
* discovery-friction mapping.

### Institutional Discovery

* existing-system inventory;
* system ownership;
* data authority;
* identity architecture;
* integration mechanisms;
* infrastructure;
* governance;
* privacy;
* cybersecurity;
* planned digital initiatives.

### Strategic Discovery

* review institutional priorities;
* identify potentially relevant use cases;
* identify existing initiatives addressing similar problems.

## Outputs

* problem validation report;
* user needs map;
* workflow maps;
* systems inventory;
* institutional architecture map;
* data-authority map;
* initial integration map;
* revised research priorities.

## Exit Decision

**Does sufficient evidence exist to justify building the relational prototype?**

Possible outcomes:

* Proceed;
* Narrow the problem;
* Revise the concept;
* Research existing solutions further;
* Stop.

---

# 12.7 Stage 2 — Architecture and Technical Specification

## Objective

Translate the validated problem and institutional findings into an implementable technical specification.

## Activities

### Data Architecture

Define:

* entity model;
* relationship model;
* identifiers;
* temporal representation;
* metadata;
* provenance;
* authority;
* visibility.

### Application Architecture

Define:

* discovery;
* profiles;
* relationship navigation;
* knowledge;
* places;
* activities;
* services;
* opportunities.

### Integration Architecture

Define:

* reference patterns;
* import;
* synchronization;
* API boundaries;
* external identifiers;
* authority boundaries.

### Identity Architecture

Define:

* authentication;
* identity;
* roles;
* affiliation;
* authorization.

### Security Architecture

Define:

* threat model;
* access control;
* audit requirements;
* data protection.

### Prototype Architecture

Select an initial technology stack based on evidence and constraints.

## Outputs

* technical specification;
* data model;
* API/domain specification;
* architecture diagrams;
* security baseline;
* prototype stack decision;
* technical decision records.

## Exit Criterion

The architecture is sufficiently specified to begin controlled implementation and critical assumptions have been identified for experimentation.

---

# 12.8 Stage 3 — Technical Experiments

## Objective

Resolve high-risk technical assumptions before committing significant development effort.

Priority experiments:

1. relational data representation;
2. relationship traversal;
3. search and contextual discovery;
4. provenance;
5. authorization;
6. temporal relationships;
7. external references;
8. integration;
9. synchronization;
10. local-first operation where justified;
11. extensibility.

## Experimental Principle

Experiments should answer specific questions.

For example:

> "Can technology X store this data?"

is less useful than:

> "Can the proposed architecture support multi-step relationship discovery, authorization, provenance, and acceptable query performance under the constraints of a small university deployment?"

## Outputs

* benchmark results;
* technical findings;
* architecture revisions;
* selected prototype technologies;
* rejected approaches;
* documented trade-offs.

## Exit Decision

**Are the core architectural assumptions technically viable?**

Possible outcomes:

* Proceed;
* Modify architecture;
* Replace technology;
* Narrow MVP;
* Stop specific technical direction.

---

# 12.9 Stage 4 — MVP Prototype

## Objective

Build the smallest functional system capable of testing the central CAMPUS hypothesis.

The prototype should implement a limited set of:

* people;
* organizations;
* programs/courses;
* knowledge resources;
* places/facilities;
* activities/events;
* services;
* opportunities;
* selected research/project objects where justified.

It should demonstrate:

### Identity

Basic prototype identity and roles.

### Relationships

Explicit relationships among entities.

### Search

Direct entity discovery.

### Relational Navigation

Navigation from one entity to related entities.

### Context

Information explaining why a relationship exists.

### Provenance

Information identifying source and authority.

### Permissions

Basic visibility and access controls.

### Place

Basic spatial context.

### Action

A path from discovery toward a useful next step.

---

# 12.10 Prototype Vertical Slice

The prototype should demonstrate a complete interaction rather than isolated components.

A canonical example:

**User searches for a person**

↓

**Person profile**

↓

**Related organization / course / project**

↓

**Related knowledge or facility**

↓

**Context and provenance**

↓

**Relevant opportunity/service**

↓

**Action**

This demonstrates the central CAMPUS loop:

> **Search → Entity → Relationship → Context → Discovery → Action**

---

# 12.11 Prototype Data Strategy

Data should be introduced progressively.

### Level 1 — Synthetic Data

Used for:

* architecture development;
* UI development;
* relationship testing;
* security testing.

### Level 2 — Public / Non-Sensitive Information

Used where appropriate to make the prototype more realistic.

### Level 3 — Controlled Institutional Information

Used only after appropriate institutional permission.

### Level 4 — Authorized Pilot Data

Used only under an approved pilot arrangement with defined governance.

This progression reduces institutional and privacy risk.

---

# 12.12 What the MVP Should Not Attempt

The MVP should not attempt to become:

* a university ERP;
* a student information system;
* an LMS;
* a complete learning-record platform;
* a research-management platform;
* a full alumni system;
* a complete GIS;
* a full digital twin;
* a production AI assistant;
* a universal social network;
* a replacement for institutional portals;
* a complete offline university;
* a complete integration of every university system.

The MVP exists to test the relational hypothesis.

---

# 12.13 Stage 5 — User and Technical Validation

## Objective

Determine whether the prototype provides meaningful value and whether the architecture works under realistic test conditions.

## User Testing

Test tasks such as:

1. Find a person.
2. Find a related resource.
3. Discover a relevant relationship.
4. Understand the context of a relationship.
5. Determine the authority of information.
6. Find a place or facility.
7. Move from discovery to action.

## Technical Testing

Measure where relevant:

* search performance;
* relationship-query performance;
* system responsiveness;
* data integrity;
* authorization correctness;
* synchronization behavior;
* failure recovery;
* resource consumption;
* maintainability;
* deployment complexity.

## Comparative Testing

Where feasible, compare equivalent tasks using:

**existing/conventional workflow**

versus

**CAMPUS prototype**

The objective is to determine whether the relational approach produces measurable benefit.

---

# 12.14 Stage 6 — Institutional Validation and Pilot Decision

## Objective

Determine whether CAMPUS is appropriate for controlled institutional experimentation.

This stage should occur only after sufficient technical and user evidence exists.

## Institutional Questions

* Does the use case address a real institutional need?
* Does an existing system already provide the capability?
* What system remains authoritative?
* Who owns the data?
* Who governs the system?
* What permissions are required?
* What privacy requirements apply?
* What cybersecurity requirements apply?
* What infrastructure is needed?
* Who operates the system?
* What would a pilot cost?
* What responsibilities would participating units assume?

## Possible Outcomes

### Pilot

A bounded institutional experiment is justified.

### Technical Collaboration

The project may collaborate with technical personnel without deployment.

### Research Collaboration

The project may continue as a research activity without production integration.

### Architectural Integration

Specific CAMPUS concepts may be incorporated into a broader institutional architecture if formally decided.

### No Institutional Deployment

Research may continue independently or conclude without institutional deployment.

---

# 12.15 Stage 7 — Selective Expansion

Only validated dimensions should proceed beyond the MVP.

Potential expansion sequence:

### Expansion A — Digital Space / Knowledge

Enhance:

* community knowledge;
* organizations;
* services;
* events;
* opportunities;
* relationship discovery.

### Expansion B — CCLR

Investigate:

* curriculum continuity;
* learning records;
* competencies;
* longitudinal educational relationships.

### Expansion C — Pathways

Investigate:

* internships;
* alumni;
* employers;
* career pathways;
* competency relationships.

### Expansion D — Research

Investigate:

* expertise;
* projects;
* publications;
* facilities;
* collaboration.

### Expansion E — Spatial

Investigate:

* richer spatial relationships;
* campus maps;
* facilities;
* interactive spatial interfaces.

### Expansion F — Local-First

Expand local/hybrid deployment if technical and institutional evidence supports it.

### Expansion G — GIS / Analytics / AI

Introduce only where validated use cases justify the additional complexity.

The ordering is not a fixed product roadmap. Evidence may change the sequence.

---

# 12.16 Development Dependency Model

The development dependencies should be treated approximately as:

**Problem validation**

↓

**Institutional/system understanding**

↓

**Relational model validation**

↓

**Identity + provenance + permissions**

↓

**Search + discovery**

↓

**MVP vertical slice**

↓

**User/technical validation**

↓

**Institutional pilot decision**

↓

**Selected dimension expansion**

Advanced capabilities such as:

* CCLR;
* Pathways;
* research collaboration;
* spatial/digital twin;
* analytics;
* AI;

should depend on the foundational architecture rather than developing as disconnected products.

---

# 12.17 Parallel Workstreams

Although the roadmap is sequential at the decision level, several activities can occur in parallel.

### Research

* interviews;
* literature review;
* comparative systems research;
* user research.

### Architecture

* data modeling;
* relationship taxonomy;
* technical experiments.

### Product Design

* interaction models;
* prototype UX;
* information architecture.

### Engineering

* prototype infrastructure;
* APIs;
* database;
* search;
* interface.

### Governance

* provenance;
* privacy;
* security;
* permissions;
* data authority.

### Institutional Engagement

* stakeholder discovery;
* systems mapping;
* technical discussions.

This allows the project to move efficiently without bypassing decision gates.

---

# 12.18 Indicative Timeline Structure

Because institutional access and manpower are currently unresolved, the roadmap should use **relative stages rather than fixed commitments**.

A possible planning structure is:

| Period  | Primary Focus            | Major Output                     |
| ------- | ------------------------ | -------------------------------- |
| Phase A | Blueprint consolidation  | R&D Blueprint v0.1               |
| Phase B | Discovery                | Problem + institutional evidence |
| Phase C | Specification            | Technical architecture           |
| Phase D | Experiments              | Technical evidence               |
| Phase E | Prototype                | Functional MVP                   |
| Phase F | Validation               | User + technical findings        |
| Phase G | Institutional evaluation | Pilot decision                   |
| Phase H | Selective expansion      | Validated next-stage capability  |

Exact duration should be determined after:

* manpower assessment;
* technical stack selection;
* stakeholder availability;
* institutional access;
* infrastructure assessment.

The project should avoid creating artificial deadlines that are not supported by actual resources.

---

# 12.19 Milestone Structure

Each major milestone should have:

1. Objective;
2. Inputs;
3. Activities;
4. Deliverables;
5. Evidence generated;
6. Risks;
7. Decision criteria;
8. Decision;
9. Next action.

This makes the roadmap auditable.

---

# 12.20 Development Artifacts

The roadmap should generate a controlled set of artifacts.

### Research

* research plan;
* interview protocols;
* research notes;
* findings;
* evidence matrix.

### Architecture

* conceptual architecture;
* technical architecture;
* data model;
* integration map;
* deployment model.

### Engineering

* source code;
* database schema;
* APIs;
* test suite;
* deployment configuration;
* technical benchmarks.

### Product

* wireframes;
* interface prototypes;
* user flows;
* usability findings.

### Governance

* data classification;
* provenance model;
* permission model;
* threat model;
* privacy analysis.

### Project Management

* decision register;
* risk register;
* roadmap;
* resource plan;
* budget;
* change history.

---

# 12.21 Development Environment Progression

The project should progressively move through environments rather than immediately targeting institutional production.

### Environment 1 — Local Development

For rapid experimentation.

### Environment 2 — Controlled Prototype

For integrated technical testing.

### Environment 3 — Demonstration Environment

For stakeholder demonstrations using appropriate data.

### Environment 4 — Research Test Environment

For structured user/technical evaluation.

### Environment 5 — Institutional Pilot

Only after formal authorization.

### Environment 6 — Production

Only if institutional adoption and operational requirements justify it.

This prevents a prototype from being mistaken for a production system.

---

# 12.22 Change Management

Because research may change the architecture, changes should be categorized.

### Minor Change

Does not affect core architecture or research hypothesis.

### Architectural Change

Changes a significant component or interaction.

### Scope Change

Adds/removes a major capability.

### Hypothesis Change

Changes the central research assumption.

### Institutional Change

Changes the proposed relationship to VSU systems or governance.

### Strategic Change

Changes the project's overall direction.

Major changes should be recorded in the decision register and reflected in the next Blueprint revision.

---

# 12.23 Risk-Based Development

Development priority should consider:

**Impact × Uncertainty × Dependency**

A capability with:

* high impact;
* high uncertainty;
* and many downstream dependencies

should generally be investigated early.

For example, identity, provenance, relationships, authority, and integration boundaries have high architectural dependency and should not be postponed until after feature development.

Conversely, advanced AI interfaces may have:

* high potential impact;
* high uncertainty;
* but relatively low dependency on the MVP;

and can therefore remain a later research direction.

---

# 12.24 Resource Gate

The roadmap should not assume that all proposed stages can be executed simultaneously.

Before each major stage, assess:

* available developers;
* research capacity;
* design capacity;
* institutional support;
* technical infrastructure;
* budget;
* data access;
* stakeholder availability.

If resources are insufficient, the correct response is to **reduce scope**, not automatically increase complexity or create unsupported commitments.

---

# 12.25 Stop / Pause Conditions

Development should pause or change direction if:

* the underlying problem cannot be validated;
* an existing system already adequately addresses the intended use case;
* the relational approach provides no measurable benefit;
* technical complexity becomes disproportionate;
* privacy/security risks cannot be responsibly addressed;
* institutional access cannot be obtained;
* operating requirements exceed available resources;
* governance responsibilities cannot be established;
* the prototype fails critical validation tasks;
* a better-supported architectural approach emerges.

A pause or stop is a legitimate R&D outcome.

---

# 12.26 Expansion Criteria

Expansion beyond the MVP should generally require evidence in four areas:

### User Evidence

Users demonstrate meaningful value.

### Technical Evidence

The architecture performs reliably enough for the next scope.

### Institutional Evidence

The intended environment can support the capability.

### Governance Evidence

The data, privacy, security, and ownership model is sufficiently defined.

If one of these is substantially missing, expansion should normally remain conditional.

---

# 12.27 Roadmap Decision Tree

The overall development logic can be summarized as:

**Is there a meaningful problem?**

→ No → **Stop / Research elsewhere**

→ Yes

**Does a relational approach appear useful?**

→ No → **Revise / Narrow**

→ Yes

**Can it be technically implemented?**

→ No → **Change architecture / Narrow**

→ Yes

**Can it coexist responsibly with existing systems?**

→ No → **Redesign boundary / Research only**

→ Yes

**Does the prototype demonstrate user value?**

→ No → **Revise / Narrow / Stop**

→ Yes

**Is institutional experimentation justified?**

→ No → **Continue research / Independent prototype**

→ Yes

**Pilot**

↓

**Evaluate**

↓

**Expand only validated dimensions**

---

# 12.28 Relationship to the Seven VSU Strategic Goals

The roadmap should maintain strategic relevance without allowing strategic alignment to determine development automatically.

The relationship is:

**Strategic context**

→ identifies potentially relevant institutional problems

→ research validates actual needs

→ architecture identifies possible mechanisms

→ prototype tests feasibility/value

→ institutional evaluation determines suitability

→ evidence determines expansion.

This prevents the Strategic Plan from becoming a feature-generation checklist.

---

# 12.29 Current Roadmap Status

### Established

* CAMPUS is moving from conceptual exploration toward structured R&D and prototyping.
* A bounded MVP has been defined conceptually.
* The prototype is intended as both research instrument and product artifact.
* Development should be evidence-driven and stage-gated.
* Existing institutional systems must be understood before responsible integration.

### Proposed

* Eight-stage development roadmap.
* Progressive movement from synthetic data to authorized institutional data.
* Technical experiments before significant architecture commitment.
* Comparative user validation.
* Institutional validation before pilot deployment.
* Selective expansion of future dimensions.
* Relative-stage planning rather than unsupported fixed deadlines.

### Unresolved

* Exact calendar schedule.
* Development team size.
* Available funding.
* Prototype infrastructure.
* Institutional access.
* Technical stack.
* Pilot environment.
* Formal institutional approval process.
* Quantitative milestone thresholds.
* Long-term operational ownership.

---

# 12.30 Section Conclusion

The CAMPUS development roadmap is intentionally structured as an **R&D funnel rather than a conventional feature roadmap**.

The project should move from:

**Concept**

→ **Evidence**

→ **Architecture**

→ **Experiment**

→ **Prototype**

→ **Validation**

→ **Institutional Decision**

→ **Selective Expansion**

The most important consequence is that the later stages are **earned by evidence**.

CAMPUS should not attempt to build the complete digital-campus vision immediately. The immediate objective is to produce a small, technically credible, researchable prototype capable of answering the project's central question:

> **Can a persistent, permission-aware and provenance-aware relational digital layer create measurable value by making university people, knowledge, places, services, opportunities, and other relationships easier to discover, understand, and act upon while appropriately coexisting with existing institutional systems?**

If the evidence supports the hypothesis, the roadmap provides a path toward expansion.

If the evidence narrows the hypothesis, the roadmap provides a path toward a more focused system.

If the evidence disproves the hypothesis, the roadmap provides a structured path to stop or redirect the project without treating that outcome as failure.


# 13. Manpower, Infrastructure & Resources

## 13.1 Purpose

This section defines the human, technical, infrastructure, organizational, and research resources potentially required to execute the CAMPUS R&D roadmap.

The resource model is deliberately staged.

CAMPUS does not require a full institutional software organization to investigate its central hypothesis. The immediate objective is a **small, capable R&D team** that can conduct research, build a functional prototype, and generate credible technical and user evidence.

Larger staffing, infrastructure, and operational requirements should only be introduced when justified by:

* prototype scope;
* validated user demand;
* institutional integration;
* security requirements;
* deployment scale;
* operational responsibility;
* funding.

---

# 13.2 Resource Planning Principle

The project should follow:

> **Minimum capability required to generate credible evidence.**

This means resource planning should not begin with:

> "What would a fully deployed university platform require?"

Instead:

> "What is the smallest credible team and infrastructure capable of answering the current research questions?"

The resource model therefore has three broad levels:

1. **R&D / Prototype**
2. **Institutional Pilot**
3. **Production / Scale**

Only the first level should be considered immediately necessary.

---

# 13.3 Core Capability Areas

CAMPUS requires capabilities across several domains.

### Research

* problem discovery;
* user research;
* institutional research;
* comparative research;
* validation.

### Product / Architecture

* problem definition;
* information architecture;
* relational modeling;
* product decisions;
* system architecture.

### Software Engineering

* frontend;
* backend;
* database;
* APIs;
* search;
* integration.

### Infrastructure

* deployment;
* networking;
* monitoring;
* backup;
* security.

### Design

* interaction design;
* information visualization;
* usability;
* accessibility.

### Governance

* privacy;
* permissions;
* provenance;
* data governance;
* security.

### Institutional Coordination

* stakeholder engagement;
* system discovery;
* permissions;
* pilot coordination.

Not all of these require separate full-time personnel during the MVP.

---

# 13.4 Minimum R&D Team

A credible early CAMPUS prototype can potentially be developed by a small multidisciplinary team.

A conceptual minimum team is:

| Role                              | Primary Responsibility                                                  | MVP Importance        |
| --------------------------------- | ----------------------------------------------------------------------- | --------------------- |
| R&D / Product Lead                | Problem definition, research direction, scope, stakeholder coordination | Essential             |
| Full-Stack Engineer               | Core application and backend implementation                             | Essential             |
| Systems / Architecture Engineer   | Data model, integration, infrastructure, technical decisions            | Essential / Shared    |
| UX / Product Designer             | User flows, interface, usability testing                                | Important             |
| Research / Validation Lead        | Interviews, testing, evidence synthesis                                 | Important / Shared    |
| Security / Governance Adviser     | Privacy, security, permissions, governance                              | Part-time / Advisory  |
| Institutional / Technical Liaison | VSU systems, ICT coordination, institutional discovery                  | Part-time / As needed |

In a very small team, several roles may be combined.

For example:

* R&D Lead + Product;
* Architecture + Backend;
* Research + UX;
* Infrastructure + Security.

This is appropriate during early experimentation but may become unsustainable as scope increases.

---

# 13.5 R&D Lead / Product Role

The R&D/Product Lead is responsible for maintaining the relationship between:

**problem → research → architecture → prototype → evidence → decision**

Responsibilities include:

* maintaining the R&D Blueprint;
* defining research questions;
* prioritizing experiments;
* maintaining MVP boundaries;
* coordinating stakeholders;
* evaluating evidence;
* managing architectural/product decisions;
* documenting assumptions;
* maintaining the decision register;
* preventing uncontrolled scope expansion.

This role is particularly important because CAMPUS is an R&D project rather than merely an implementation project.

---

# 13.6 Software Engineering

The initial engineering capability should cover:

### Frontend

* responsive interface;
* search;
* entity profiles;
* relationship navigation;
* contextual views;
* basic place representation.

### Backend

* entity management;
* relationship management;
* permissions;
* provenance;
* application services;
* APIs.

### Data

* data modeling;
* storage;
* indexing;
* migrations;
* integrity.

### Integration

* external references;
* imports;
* exports;
* prototype APIs;
* future synchronization.

A single strong full-stack engineer may cover much of this during the earliest prototype stage.

As complexity increases, dedicated backend, frontend, and integration responsibilities may become appropriate.

---

# 13.7 Architecture Capability

Architecture responsibility should cover:

* conceptual-to-technical translation;
* data architecture;
* relationship model;
* system boundaries;
* integration;
* identity;
* security;
* deployment;
* extensibility.

Architecture should remain an active responsibility throughout development rather than being completed once at project start.

Every significant research finding may change the architecture.

---

# 13.8 UX and Design Capability

Because the core CAMPUS hypothesis concerns discovery and relationships, UX is not merely visual design.

The UX role should investigate:

* information architecture;
* search behavior;
* relationship comprehension;
* contextual navigation;
* cognitive load;
* provenance comprehension;
* spatial interaction;
* actionability;
* accessibility.

A visually attractive graph that users cannot understand does not validate the relational model.

The design objective is therefore:

> **Make relationships useful and understandable, not merely visible.**

---

# 13.9 Research Capability

Research activities may include:

* literature review;
* interviews;
* observation;
* workflow analysis;
* usability studies;
* technical experiments;
* comparative testing;
* institutional research;
* evidence synthesis.

During the early stage, the R&D Lead may perform much of this work with support from a researcher or UX practitioner.

For formal academic research, additional methodological or ethics expertise may be required.

---

# 13.10 Institutional / Technical Liaison

Institutional coordination is distinct from software development.

A liaison or equivalent responsibility should help establish:

* appropriate institutional contacts;
* system owners;
* data authorities;
* ICT stakeholders;
* research offices;
* administrative stakeholders;
* approval pathways;
* pilot requirements.

The role should not assume authority on behalf of VSU.

Its function is to ensure that CAMPUS research proceeds through appropriate institutional channels.

---

# 13.11 Security, Privacy and Governance

Security and governance expertise may initially be advisory rather than full-time.

The capability should address:

* authentication;
* authorization;
* data classification;
* privacy;
* provenance;
* auditability;
* threat modeling;
* secure development;
* incident considerations;
* retention;
* correction/deletion;
* governance.

As soon as real institutional data are introduced, the required level of expertise should increase accordingly.

---

# 13.12 Specialized Future Capabilities

The following roles are not necessarily required for the MVP:

* GIS specialist;
* spatial computing specialist;
* data scientist;
* AI/ML engineer;
* cybersecurity engineer;
* distributed-systems specialist;
* DevOps/SRE specialist;
* learning-technology specialist;
* research-information specialist.

These should be introduced when a validated use case requires them.

This prevents speculative future capabilities from inflating the initial resource requirement.

---

# 13.13 AI as a Development Multiplier

AI and LLM tools may significantly reduce the amount of manual effort required for:

* coding assistance;
* documentation;
* architecture exploration;
* test generation;
* research synthesis;
* prototyping;
* data modeling;
* technical investigation;
* interface iteration;
* debugging;
* project documentation.

However, AI does not replace:

* problem definition;
* institutional access;
* stakeholder relationships;
* permission;
* accountability;
* validation;
* human research judgment;
* technical review;
* governance decisions.

The appropriate model is:

> **Human direction + AI-assisted execution + evidence-based review**

rather than autonomous system development.

---

# 13.14 Human Resource Scaling

A possible progression is:

### Level 1 — Core R&D

Approximately:

* 1 R&D/Product lead;
* 1–2 engineers;
* 1 UX/research contributor;
* part-time architecture/security/institutional support.

### Level 2 — Institutional Pilot

Potentially expands to:

* product/R&D;
* frontend engineering;
* backend/integration engineering;
* UX/research;
* infrastructure/DevOps;
* security/governance;
* institutional coordination;
* data/system specialists as required.

### Level 3 — Production

Would likely require substantially broader capabilities, potentially including:

* dedicated engineering teams;
* infrastructure operations;
* security operations;
* data governance;
* technical support;
* product management;
* UX research/design;
* institutional administrators;
* system integration;
* QA/testing;
* documentation/training;
* service management.

These are planning categories, not current staffing commitments.

---

# 13.15 Infrastructure Requirements — MVP

The MVP can be developed with relatively modest infrastructure.

Potential requirements include:

### Development

* developer workstations;
* source-control repository;
* issue/project tracking;
* development environments;
* test data.

### Application

* application server;
* database;
* search/indexing capability;
* object/file storage if required.

### Networking

* local network or internet connectivity;
* HTTPS;
* domain/subdomain where appropriate.

### Operations

* logs;
* monitoring;
* backup;
* deployment tooling.

### Security

* secrets management;
* access controls;
* encrypted connections;
* secure development practices.

The exact infrastructure should be selected after the technical experiments.

---

# 13.16 Local Development and Demonstration Environment

The initial system should be capable of running in a controlled local or development environment.

This supports:

* rapid experimentation;
* low-cost development;
* reproducibility;
* offline development;
* synthetic data;
* stakeholder demonstrations;
* architecture portability.

Containerized development may be useful to make the prototype easier to reproduce across machines and environments.

---

# 13.17 Prototype Hosting

Potential prototype environments include:

### Developer-hosted

Useful for early development and internal experimentation.

### Controlled cloud environment

Useful for:

* stakeholder demonstrations;
* remote testing;
* controlled usability studies.

### University-hosted environment

Potentially appropriate if VSU permits and provides infrastructure.

### Local-first test environment

Useful for evaluating:

* campus-local operation;
* connectivity disruption;
* synchronization;
* distributed deployment.

No hosting model should be treated as the permanent production architecture at this stage.

---

# 13.18 Data Resources

CAMPUS requires data, but early development should avoid unnecessary access to sensitive institutional information.

Potential data sources include:

### Synthetic

Created specifically for development.

### Public

Information legally available for appropriate use.

### Project-created

Data created specifically to test relationships and workflows.

### Authorized institutional

Information made available under appropriate permission.

The data strategy should follow:

**minimum necessary data → controlled access → clear authority → documented provenance**

---

# 13.19 Data Modeling Resources

The project will require structured datasets capable of representing:

* people;
* organizations;
* programs;
* courses;
* knowledge resources;
* research projects;
* facilities;
* places;
* activities;
* services;
* opportunities;
* relationships;
* provenance;
* permissions;
* temporal state.

The initial dataset should remain small enough to understand and inspect manually.

This is useful because the prototype is also a research instrument.

---

# 13.20 Testing Resources

Testing should cover multiple dimensions.

### Functional Testing

Does the software work as intended?

### Data Testing

Are entities and relationships represented correctly?

### Search Testing

Can users find relevant information?

### Authorization Testing

Can users access only what they should?

### Security Testing

Are common vulnerabilities addressed?

### UX Testing

Can users understand and navigate relationships?

### Integration Testing

Do external references/interfaces behave correctly?

### Resilience Testing

What happens when services or network connections fail?

### Performance Testing

Does the system remain responsive under expected prototype loads?

---

# 13.21 Infrastructure for Local-First Experiments

If local-first architecture is tested, additional infrastructure may include:

* local node/device;
* synchronization service;
* conflict-resolution mechanism;
* local storage;
* identity synchronization;
* encryption;
* recovery process;
* node registration;
* monitoring.

This should be introduced only when the local-first research question requires it.

---

# 13.22 Documentation Resources

Because CAMPUS is an R&D project, documentation is itself an important output.

The project should maintain:

* R&D Blueprint;
* architecture documentation;
* API documentation;
* data model;
* research log;
* decision register;
* risk register;
* test results;
* user research findings;
* deployment documentation;
* governance documentation;
* prototype changelog.

Documentation should be maintained alongside development rather than reconstructed afterward.

---

# 13.23 External Expertise

Certain questions may benefit from external expertise.

Potential advisers or collaborators include specialists in:

* university information systems;
* distributed systems;
* cybersecurity;
* privacy;
* GIS;
* learning technology;
* research information systems;
* human-computer interaction;
* digital governance;
* software architecture.

External expertise should be engaged based on actual project needs rather than prestige or organizational affiliation alone.

---

# 13.24 Institutional Resources

If CAMPUS proceeds toward institutional experimentation, institutional resources may become necessary.

Potential resources include:

* technical documentation;
* system architecture information;
* API access;
* test accounts;
* controlled datasets;
* sandbox environments;
* network access;
* infrastructure;
* ICT support;
* domain expertise;
* research participants;
* facilities for testing.

Access should be governed by appropriate institutional permissions.

---

# 13.25 Physical Resources

For a digital-campus architecture, physical campus context may eventually require:

* representative campus maps;
* facility information;
* building data;
* location identifiers;
* signage/context information;
* spatial datasets.

A full digital twin is not required for the MVP.

---

# 13.26 Software and Development Tooling

The project should prioritize tools that are:

* mature;
* well documented;
* accessible;
* low-cost or open-source where practical;
* portable;
* replaceable;
* suitable for local deployment;
* supported by a sufficiently broad developer ecosystem.

The prototype should avoid unnecessary dependence on proprietary infrastructure if that dependence could prevent later architectural experimentation.

This is a preference rather than an absolute requirement.

---

# 13.27 Resource Selection Criteria

Every major resource decision should consider:

1. Research value;
2. technical suitability;
3. cost;
4. maintainability;
5. portability;
6. security;
7. privacy;
8. institutional compatibility;
9. developer capability;
10. future replaceability.

The cheapest tool is not necessarily the lowest-cost architecture if it creates significant lock-in or operational complexity.

---

# 13.28 Resource Phasing

Resource requirements should grow with validated scope.

### Phase 1 — Concept / Discovery

Primary resources:

* researcher;
* product/R&D lead;
* stakeholder access;
* documentation tools.

### Phase 2 — Technical Experiments

Additional:

* engineering capacity;
* development infrastructure;
* test environments.

### Phase 3 — MVP

Additional:

* full-stack engineering;
* UX;
* testing;
* deployment infrastructure.

### Phase 4 — Institutional Validation

Additional:

* institutional liaison;
* security/governance;
* data/system expertise;
* controlled infrastructure.

### Phase 5 — Pilot

Potentially:

* dedicated operations;
* support;
* integration;
* security;
* training;
* monitoring.

### Phase 6 — Production

Substantially expanded operational and governance capacity.

---

# 13.29 Resource Allocation Principle

The project should allocate resources according to **uncertainty and dependency**, not simply visible features.

High-priority resources should support:

* problem validation;
* relational architecture;
* identity;
* provenance;
* permissions;
* discovery;
* integration boundaries;
* prototype validation.

Lower-priority resources should support:

* advanced visualization;
* speculative AI;
* full digital twin;
* broad analytics;
* large-scale automation.

This protects the project from spending substantial resources on capabilities that have not yet demonstrated value.

---

# 13.30 Minimum Viable R&D Organization

A practical early structure could be:

```text
                    R&D / Product Lead
                           │
          ┌────────────────┼────────────────┐
          │                │                │
       Research        Architecture      Engineering
          │                │                │
       UX / HCI       Data / Security    Full Stack
          │                │                │
          └────────────────┼────────────────┘
                           │
                  Institutional Liaison
                       / Advisory
```

This is a capability model rather than a required organizational hierarchy.

One person may initially occupy several roles.

---

# 13.31 Transition to Institutional Team

If CAMPUS reaches an institutional pilot, responsibilities should become more explicit.

A potential pilot organization could include:

* project/product lead;
* technical lead;
* software engineers;
* UX/research;
* institutional representative;
* ICT representative;
* data/governance representative;
* security/privacy adviser;
* participating academic/administrative units.

The exact structure should be determined jointly with the participating institution.

---

# 13.32 Infrastructure and Resource Constraints

Potential constraints include:

* limited development manpower;
* limited funding;
* limited institutional access;
* unavailable APIs;
* unavailable test environments;
* restricted data;
* network limitations;
* security requirements;
* maintenance capacity;
* stakeholder availability;
* lack of dedicated technical staff.

These constraints should influence scope.

The project should respond by:

**reducing scope before reducing research quality.**

---

# 13.33 Resource-Driven Scope Control

If resources are insufficient, the project should prioritize:

### Tier 1 — Must Have

* entity/relationship model;
* identity;
* permissions;
* provenance;
* search;
* relational navigation;
* basic place;
* prototype validation.

### Tier 2 — Useful

* richer community interaction;
* events;
* opportunities;
* service routing;
* richer spatial interface.

### Tier 3 — Later

* CCLR;
* Pathways;
* Research;
* local-first expansion;
* advanced GIS.

### Tier 4 — Future / Exploratory

* full digital twin;
* advanced analytics;
* AI;
* large-scale automation.

This provides a direct mechanism for keeping the project feasible.

---

# 13.34 Resource Readiness Assessment

Before entering the MVP stage, CAMPUS should assess:

| Resource                | Readiness                                |
| ----------------------- | ---------------------------------------- |
| R&D leadership          | To be established                        |
| Engineering capacity    | To be established                        |
| UX/research capacity    | To be established                        |
| Architecture capability | Partially represented / to be formalized |
| Security expertise      | To be established/advised                |
| Institutional liaison   | To be established                        |
| Development environment | Required                                 |
| Prototype hosting       | Required                                 |
| Test data               | Required                                 |
| Research participants   | To be recruited                          |
| Institutional access    | Unresolved                               |
| Funding                 | Unresolved                               |
| Pilot infrastructure    | Not yet required                         |

This table should be updated as the project progresses.

---

# 13.35 Manpower Status

### Established

* CAMPUS requires multidisciplinary capabilities.
* Early development can be conducted with a small team.
* The MVP does not require the staffing of a full production university platform.
* AI tools can accelerate development but do not replace human research, governance, institutional, or technical responsibility.

### Proposed

* Core R&D team centered on product/research, engineering, architecture, and UX.
* Part-time or advisory security/governance and institutional support during early phases.
* Progressive staffing as the project advances toward pilot and production.
* Specialist roles introduced only when validated dimensions require them.

### Unresolved

* Exact team composition.
* Exact number of developers.
* Compensation/funding model.
* Institutional personnel participation.
* Availability of technical advisers.
* Availability of research personnel.
* Long-term operations team.
* Ownership of production infrastructure if deployment occurs.

---

# 13.36 Section Conclusion

CAMPUS does not currently require a large organization.

The immediate requirement is a **small but multidisciplinary R&D capability** capable of:

1. investigating the problem;
2. understanding the institutional environment;
3. testing the relational architecture;
4. building a functional prototype;
5. validating it with users;
6. documenting evidence;
7. making informed decisions about continuation.

The resource strategy should therefore follow:

> **Start small → generate evidence → increase resources only when justified.**

This keeps the project consistent with its R&D character and prevents speculative future capabilities from consuming resources before the foundational hypothesis has been tested.

The next major resource question is financial: **what would this staged program actually cost?**

That question should be addressed through a **budget framework**, rather than a false-precision single project price. The budget should distinguish prototype development, research, infrastructure, institutional pilot requirements, recurring operating costs, and future expansion.


# 14. Budget Framework

## 14.1 Purpose

This section establishes the financial framework for CAMPUS development.

At the current R&D stage, the purpose is not to present a final project cost. The actual budget will depend on:

* validated scope;
* manpower;
* development duration;
* infrastructure;
* institutional requirements;
* data access;
* security requirements;
* pilot scale;
* funding arrangements.

The budget should therefore evolve alongside the evidence and development roadmap.

The framework distinguishes between:

1. **R&D and prototype costs**
2. **Institutional pilot costs**
3. **Production and operational costs**
4. **Future expansion costs**

---

# 14.2 Budgeting Principle

The central budgeting principle is:

> **Do not budget the complete vision before validating the foundational hypothesis.**

CAMPUS should first establish the cost of generating credible evidence.

This means the initial budget should prioritize:

* research;
* architecture;
* engineering;
* prototype infrastructure;
* UX;
* technical experiments;
* security/privacy foundations;
* validation.

It should not prematurely budget a complete:

* university-wide platform;
* digital twin;
* AI ecosystem;
* enterprise integration program;
* learning-record system;
* research-management platform.

---

# 14.3 Budget Structure

The overall cost model can be represented as:

**Personnel**

*

**Research & Validation**

*

**Software & Development Tools**

*

**Infrastructure**

*

**Security / Privacy / Governance**

*

**Institutional Integration**

*

**Training & Documentation**

*

**Operations & Maintenance**

*

**Contingency**

---

# 14.4 Cost Categories

## 14.4.1 Personnel

Personnel is expected to be the largest cost category during R&D.

Potential roles include:

* R&D/Product Lead;
* software engineer;
* systems/architecture engineer;
* UX/product designer;
* researcher;
* QA/testing;
* infrastructure/DevOps;
* security/privacy adviser;
* institutional/technical liaison;
* specialist consultants.

The actual staffing model may combine several responsibilities during the MVP stage.

### Cost variables

* number of personnel;
* full-time vs part-time;
* duration;
* compensation model;
* consultant rates;
* institutional personnel contributions;
* volunteer/research participation.

---

# 14.5 Research and Validation

Potential costs include:

* participant recruitment;
* transportation;
* communication;
* research materials;
* survey tools;
* interview resources;
* usability testing;
* workshops;
* documentation;
* data preparation;
* research assistance;
* research dissemination.

Where institutional facilities and personnel can be used without additional cost, those contributions should still be documented as **in-kind resources**.

---

# 14.6 Software and Development Tools

Potential costs include:

* source-control services;
* project management;
* design tools;
* development environments;
* testing tools;
* database services;
* search infrastructure;
* monitoring;
* security tooling;
* domain registration;
* certificates;
* AI/LLM development services;
* commercial APIs where necessary.

The project should prefer open-source or low-cost tools where they provide adequate capability, portability, security, and maintainability.

However, open-source should not be treated as automatically free.

Potential costs may include:

* hosting;
* maintenance;
* support;
* integration;
* security;
* developer time.

---

# 14.7 Infrastructure

Infrastructure costs may include:

### Computing

* development machines;
* servers;
* virtual machines;
* cloud computing;
* local nodes for local-first experiments.

### Storage

* database storage;
* object storage;
* backups;
* research data storage.

### Networking

* internet connectivity;
* network equipment;
* secure connections;
* local network infrastructure where required.

### Operations

* monitoring;
* logging;
* backup;
* recovery;
* deployment infrastructure.

The infrastructure requirement should scale with the environment.

A local prototype and a university-wide production system should not have the same infrastructure budget.

---

# 14.8 Security and Privacy

Security and privacy should have explicit budget categories rather than being treated as incidental engineering expenses.

Potential costs include:

* security assessment;
* penetration testing;
* vulnerability scanning;
* threat modeling;
* privacy review;
* security consulting;
* identity infrastructure;
* encryption;
* audit logging;
* secure hosting;
* compliance-related activities.

The required level of investment should increase substantially if sensitive institutional or personal information enters the system.

---

# 14.9 Institutional Integration

Integration can become one of the largest costs in an institutional deployment.

Potential costs include:

* system analysis;
* API development;
* data mapping;
* integration engineering;
* identity integration;
* synchronization;
* testing;
* migration;
* institutional coordination;
* security review;
* change management.

This category should remain limited during the independent prototype stage.

The project should not incur significant integration costs before confirming:

1. the use case;
2. the authoritative system;
3. the required data;
4. the institutional owner;
5. the technical interface;
6. the value of the integration.

---

# 14.10 Hardware

Hardware requirements depend strongly on deployment strategy.

Potential hardware for experiments could include:

* development workstations;
* local server;
* network-attached storage;
* local-first nodes;
* networking equipment;
* testing devices.

Hardware should not be purchased solely because it might be useful later.

The preferred sequence is:

**Requirement → experiment → infrastructure decision → procurement**

rather than:

**Procurement → search for use case**

---

# 14.11 Training and Documentation

Potential costs include:

* developer training;
* administrator training;
* user training;
* documentation;
* technical manuals;
* governance documentation;
* onboarding materials;
* workshops.

For an R&D prototype, documentation should focus on reproducibility and research evidence.

For a pilot, operational documentation becomes more important.

For production, formal training and support materials become essential.

---

# 14.12 Operations and Maintenance

Recurring costs should be separated from development costs.

Potential recurring expenses include:

* hosting;
* domain;
* storage;
* backups;
* monitoring;
* security services;
* software subscriptions;
* maintenance;
* technical support;
* system administration;
* updates;
* data stewardship.

A system that can be built cheaply but cannot be sustainably maintained should not be considered financially viable.

---

# 14.13 Contingency

A contingency allocation should account for uncertainty in:

* technical implementation;
* infrastructure;
* integration;
* security;
* staffing;
* institutional requirements;
* research scope.

The contingency percentage should be determined according to the maturity and uncertainty of the project.

Early R&D generally has greater uncertainty than a mature production deployment.

The final percentage should therefore be determined during detailed budgeting rather than fixed prematurely in the Blueprint.

---

# 14.14 Cost by Development Stage

The cost profile is expected to change over time.

| Stage                    | Main Cost Drivers                                            |
| ------------------------ | ------------------------------------------------------------ |
| Blueprint / Discovery    | Research, coordination, documentation                        |
| Technical Experiments    | Engineering, development infrastructure                      |
| MVP                      | Personnel, software, infrastructure, UX, testing             |
| User Validation          | Research, participant activities, testing                    |
| Institutional Validation | Integration analysis, security, governance, coordination     |
| Pilot                    | Integration, infrastructure, support, training               |
| Production               | Personnel, operations, security, maintenance, infrastructure |
| Expansion                | Specialized engineering and domain capabilities              |

---

# 14.15 Budget Scenario A — Lean Independent R&D

This scenario represents the smallest credible path toward a functional CAMPUS prototype.

Characteristics:

* small team;
* synthetic/public data;
* existing development hardware;
* low-cost or open-source tooling;
* modest hosting;
* limited external consulting;
* no production institutional integration.

Primary purpose:

> **Generate credible evidence about the core hypothesis.**

This should be the reference scenario for initial resource planning.

---

# 14.16 Budget Scenario B — Supported Prototype

This scenario assumes additional support from an institution, research organization, grant, or partner.

Potential additions:

* dedicated development personnel;
* research support;
* better infrastructure;
* UX research;
* security review;
* institutional datasets;
* technical advisers;
* controlled demonstration environment.

Primary purpose:

> **Produce a more representative prototype and stronger validation evidence.**

---

# 14.17 Budget Scenario C — Institutional Pilot

A pilot introduces significantly different cost requirements.

Potential costs include:

* institutional integration;
* identity integration;
* security assessment;
* infrastructure;
* data governance;
* user support;
* training;
* monitoring;
* system administration;
* change management;
* pilot evaluation.

Primary purpose:

> **Test CAMPUS under controlled real-world institutional conditions.**

The pilot budget should be developed only after a specific use case and participating institutional units are defined.

---

# 14.18 Budget Scenario D — Production Deployment

A production deployment would require a substantially different financial model.

Potential costs include:

* dedicated engineering;
* infrastructure operations;
* security operations;
* technical support;
* system administration;
* data governance;
* monitoring;
* disaster recovery;
* integration maintenance;
* user support;
* training;
* institutional change management;
* long-term development.

This scenario should not be treated as the current CAMPUS budget.

It is a future planning model only.

---

# 14.19 One-Time vs Recurring Costs

Every budget should distinguish:

### One-Time

* initial development;
* architecture;
* prototype design;
* initial infrastructure;
* initial integration;
* initial security assessment;
* initial research.

### Recurring

* hosting;
* maintenance;
* storage;
* monitoring;
* support;
* security;
* subscriptions;
* personnel;
* data stewardship.

This distinction is particularly important when presenting CAMPUS to funding or institutional stakeholders.

---

# 14.20 Capital vs Operating Costs

Where relevant, the project should distinguish:

### Capital / Equipment

* servers;
* networking equipment;
* development hardware;
* specialized infrastructure.

### Operating

* personnel;
* cloud services;
* hosting;
* software subscriptions;
* maintenance;
* research;
* support.

The accounting treatment may depend on the funding organization and institutional rules.

---

# 14.21 In-Kind Contributions

CAMPUS may receive significant value through non-cash contributions.

Examples:

* developer time;
* adviser time;
* university personnel;
* access to facilities;
* existing servers;
* existing software;
* research participants;
* institutional datasets;
* office/workspace;
* network infrastructure;
* technical documentation.

These should be documented separately from cash expenditure.

An in-kind contribution is still a project resource and should be included in the overall resource model.

---

# 14.22 Cost Estimation Method

Detailed costs should be estimated using:

**Quantity × Unit Cost × Duration**

Examples:

### Personnel

`FTE × monthly/annual cost × duration`

### Hosting

`resource consumption × unit price × duration`

### Hardware

`quantity × acquisition cost`

### Research

`participants × activity cost`

### Integration

`engineering effort × applicable rate`

This provides traceability and makes assumptions easier to revise.

---

# 14.23 Budget Confidence Levels

Each budget estimate should include a confidence level.

### Conceptual Estimate

Based primarily on assumptions.

Appropriate during early planning.

### Preliminary Estimate

Based on identified scope and resource requirements.

Appropriate after architecture and manpower are clearer.

### Detailed Estimate

Based on actual quotations, staffing arrangements, infrastructure requirements, and institutional requirements.

Appropriate before major funding or procurement decisions.

The current CAMPUS budget should remain at the **conceptual/preliminary** level until sufficient project information is available.

---

# 14.24 Budget Assumption Register

Every significant budget assumption should be documented.

Examples:

| Assumption                                           | Status     |
| ---------------------------------------------------- | ---------- |
| Small initial development team                       | Proposed   |
| Existing development hardware available              | Unresolved |
| Open-source tools sufficient for MVP                 | Proposed   |
| Synthetic/public data sufficient for early prototype | Proposed   |
| Institutional APIs available                         | Unresolved |
| University infrastructure available for pilot        | Unresolved |
| External security assessment required                | Unresolved |
| Cloud hosting required                               | Unresolved |
| Local-first hardware required                        | Unresolved |

This prevents assumptions from silently becoming budget facts.

---

# 14.25 Cost Drivers with Highest Uncertainty

At the current stage, the largest potential sources of cost uncertainty are:

1. personnel duration;
2. institutional integration;
3. security requirements;
4. infrastructure;
5. identity integration;
6. data preparation;
7. institutional support requirements;
8. pilot scale;
9. local-first deployment complexity;
10. long-term operations.

These should receive progressively more detailed estimates as the project advances.

---

# 14.26 Budget Gate by Development Stage

Budget decisions should follow the same evidence gates as development.

### Before MVP

Budget primarily for:

* research;
* architecture;
* engineering;
* UX;
* technical experiments;
* basic infrastructure.

### Before Institutional Pilot

Re-estimate:

* integration;
* infrastructure;
* security;
* governance;
* support;
* training.

### Before Production

Conduct a separate:

* total cost of ownership analysis;
* operating-cost analysis;
* staffing analysis;
* sustainability assessment.

A prototype budget should never automatically become a production budget.

---

# 14.27 Total Cost of Ownership

If CAMPUS progresses toward production, financial evaluation should consider total cost of ownership rather than development cost alone.

A conceptual model is:

**Initial Development**

*

**Infrastructure**

*

**Integration**

*

**Security**

*

**Operations**

*

**Maintenance**

*

**Support**

*

**Data Governance**

*

**Future Development**

over the relevant planning period.

The planning horizon should be defined when a real deployment proposal exists.

---

# 14.28 Budget and Sustainability

The project's financial sustainability should be considered alongside technical sustainability.

Questions include:

* Who pays for infrastructure?
* Who employs or supports developers?
* Who maintains integrations?
* Who manages data?
* Who handles support?
* Who funds security?
* Who owns the resulting software?
* What happens if project funding ends?
* Can the system be operated with available institutional resources?
* Are recurring costs proportionate to demonstrated value?

These questions become critical before institutional adoption.

---

# 14.29 Funding Sources

Potential funding categories may include:

* independent R&D funding;
* university research funding;
* government R&D programs;
* innovation grants;
* technology-development programs;
* institutional digital-transformation funding;
* research partnerships;
* external collaborators;
* future commercialization funding where appropriate.

The appropriate funding source should depend on the project's actual stage and purpose.

A research prototype should not be framed prematurely as a commercial product if the research hypothesis has not yet been validated.

---

# 14.30 Funding Proposal Readiness

Before submitting a formal funding proposal, CAMPUS should have:

* defined research problem;
* research questions;
* methodology;
* bounded scope;
* technical architecture;
* work plan;
* manpower requirements;
* measurable outputs;
* budget assumptions;
* risk analysis;
* governance framework;
* intellectual-property position;
* institutional relationship status.

The Blueprint is intended to become the source from which such a proposal can later be derived.

---

# 14.31 Budget Control

Budget changes should be tracked alongside scope changes.

A change should be documented when it materially affects:

* personnel;
* infrastructure;
* development duration;
* integration;
* security;
* scope;
* operations.

The project should avoid increasing budget simply to preserve features that evidence no longer supports.

---

# 14.32 Financial Decision Framework

For each major expenditure, ask:

1. What research or operational problem does this expense address?
2. Is it required for the current phase?
3. What evidence supports the expenditure?
4. Is there a lower-cost alternative?
5. Does the expense create lock-in?
6. Is it reusable in later phases?
7. What happens if the hypothesis is disproved?
8. Does it create recurring costs?
9. Who would maintain it?
10. Can the expense be postponed until a later decision gate?

This keeps financial discipline aligned with the R&D methodology.

---

# 14.33 Budget Status

### Established

* The current project does not yet have a sufficiently defined basis for a final production budget.
* Resource requirements should be staged according to the development roadmap.
* Personnel is likely to be a major R&D cost category.
* Institutional integration, security, infrastructure, and operations can materially change later-stage costs.
* One-time and recurring costs should be distinguished.

### Proposed

* Four budget scenarios: Lean R&D, Supported Prototype, Institutional Pilot, Production.
* Cost categories covering personnel, research, software, infrastructure, security/privacy, integration, documentation, operations, and contingency.
* Progressive budget refinement at development gates.
* Explicit assumption and confidence tracking.
* Total-cost-of-ownership analysis before production.

### Unresolved

* Actual personnel costs.
* Funding source.
* Team composition.
* Development duration.
* Hardware requirements.
* Hosting requirements.
* Institutional infrastructure contributions.
* Integration costs.
* Pilot size.
* Security assessment requirements.
* Long-term operating model.
* Ownership of recurring costs.

---

# 14.34 Section Conclusion

The CAMPUS budget should evolve with the evidence.

The immediate financial question is not:

> **"How much will it cost to build the CAMPUS vision?"**

It is:

> **"How much resource is required to credibly test the CAMPUS hypothesis, and what additional resources become justified if the evidence supports progression?"**

The resulting financial progression is:

**Lean R&D**

→ **Functional Prototype**

→ **Validated Prototype**

→ **Institutional Pilot**

→ **Production, if justified**

This approach protects the project from both underestimating institutional complexity and prematurely requesting resources for capabilities that have not yet demonstrated value.

The next section addresses an even more fundamental requirement for CAMPUS: **Governance, Privacy, Security & Intellectual Property**.

Because CAMPUS is explicitly relationship-oriented, this section will need to go beyond ordinary application security. It will address who can create, see, modify, verify, dispute, retain, or delete relationships—and how CAMPUS can distinguish institutional authority from community contribution without turning the platform into an uncontrolled second institutional record.

# 14A. MVP-to-Pilot Cost Boundary

## 14A.1 Purpose

The CAMPUS financial model must clearly distinguish the cost of **researching and demonstrating the architecture** from the cost of **operating it within an institutional environment**.

This distinction is necessary because the technical and governance requirements change substantially once CAMPUS begins interacting with real institutional systems, identities, data, users, and operational processes.

The MVP should therefore be treated as a **research environment**.

The institutional pilot should be treated as a **controlled operational environment**.

---

# 14A.2 MVP Cost Boundary

The MVP begins when the project commits resources to building the functional vertical slice and ends when sufficient evidence has been generated to decide whether institutional experimentation is justified.

The MVP may include:

* prototype software;
* synthetic/public/non-sensitive data;
* prototype authentication;
* prototype permissions;
* relational data model;
* search;
* relationship navigation;
* provenance;
* basic places;
* limited activities/services/opportunities;
* development infrastructure;
* controlled demonstration hosting;
* usability testing;
* technical experiments.

The MVP does **not** require:

* production university identity;
* unrestricted institutional data;
* production integrations;
* institution-wide deployment;
* guaranteed production availability;
* institutional support obligations;
* full enterprise security certification;
* complete disaster-recovery infrastructure;
* university-wide training;
* production service management.

---

# 14A.3 Pilot Boundary

The pilot begins when CAMPUS is authorized to operate with real institutional users, systems, data, infrastructure, or workflows under a defined institutional arrangement.

The pilot may require:

* approved institutional use case;
* participating institutional unit;
* defined data authority;
* authorized data access;
* institutional identity integration;
* controlled infrastructure;
* security review;
* privacy review;
* governance arrangements;
* operational support;
* monitoring;
* backup and recovery;
* user support;
* training;
* defined pilot duration;
* success and failure criteria.

The pilot ends when the institution evaluates the evidence and determines whether to:

* discontinue;
* continue research;
* revise;
* expand;
* integrate;
* or transition toward production.

---

# 14A.4 Boundary Test

The following practical test should be used:

> **If CAMPUS can be safely demonstrated using synthetic, public, or project-created data without relying on institutional production systems, it remains within the MVP/R&D boundary.**

If the project requires:

* real institutional identity;
* real institutional personal data;
* production-system integration;
* operational university infrastructure;
* institutional service obligations;
* or formal institutional user deployment,

the project has crossed into **pilot territory**.

This is a planning rule rather than a universal technical definition. Specific institutional requirements may impose a stricter boundary.

---

# 14A.5 Cost Boundary Matrix

| Cost Area      | MVP / R&D                          | Institutional Pilot                  | Production                         |
| -------------- | ---------------------------------- | ------------------------------------ | ---------------------------------- |
| Development    | Core prototype                     | Pilot hardening + integration        | Continuous engineering             |
| Data           | Synthetic/public/non-sensitive     | Authorized institutional data        | Operational institutional data     |
| Identity       | Prototype/local authentication     | Institutional identity integration   | Production identity infrastructure |
| Hosting        | Development/controlled environment | Controlled institutional environment | Production infrastructure          |
| Search         | Prototype scale                    | Pilot scale                          | Production scale                   |
| Security       | Baseline threat model/testing      | Formal review/testing as required    | Continuous security program        |
| Privacy        | Design review                      | Institutional/privacy review         | Ongoing governance                 |
| Integration    | Mock/reference/test interfaces     | Approved real integrations           | Maintained production integrations |
| Monitoring     | Basic logs/monitoring              | Operational monitoring               | Full observability                 |
| Backup         | Development backup                 | Defined pilot recovery               | Production backup/DR               |
| Support        | Project team                       | Defined pilot support                | Operational support organization   |
| Training       | Research orientation               | Pilot-user training                  | Institutional training             |
| Governance     | Prototype rules                    | Formal pilot governance              | Institutional governance           |
| Maintenance    | Minimal                            | Pilot maintenance                    | Long-term maintenance              |
| Infrastructure | Minimal                            | Dedicated/controlled resources       | Production infrastructure          |
| Documentation  | Research/technical                 | Operational + governance             | Full service documentation         |

---

# 14A.6 What Should Not Be Charged to the MVP

The following should normally remain outside the MVP budget unless a specific experiment requires them:

* university-wide identity integration;
* enterprise ERP integration;
* full LMS integration;
* production-grade institutional data migration;
* complete digital-twin infrastructure;
* campus-wide hardware deployment;
* institution-wide user training;
* 24/7 operational support;
* full production disaster recovery;
* extensive enterprise security certification;
* broad AI infrastructure;
* complete CCLR implementation;
* complete Pathways platform;
* complete research-management platform.

This protects the initial project from accidentally becoming an enterprise implementation program.

---

# 14A.7 Pilot Trigger Conditions

A pilot should be considered only when all of the following are sufficiently established:

### Research

* a meaningful problem has been demonstrated;
* a bounded use case has been identified;
* prototype testing provides evidence of potential value.

### Technical

* the architecture is sufficiently stable;
* core security controls are understood;
* integration requirements are known;
* infrastructure requirements are defined.

### Institutional

* an appropriate institutional owner or participating unit is identified;
* data authority is understood;
* permission pathways are understood;
* pilot responsibilities are defined.

### Governance

* privacy requirements are understood;
* access rules are defined;
* provenance requirements are established;
* correction/dispute processes are defined.

### Financial

* pilot costs can be estimated;
* recurring costs are understood;
* funding responsibility is identified.

A functioning prototype alone should not trigger a pilot.

---

# 14A.8 Pilot Cost Re-estimation Gate

Once the MVP reaches validation, the project should **discard or substantially revise the prototype budget** rather than simply adding pilot costs on top.

The pilot should receive its own budget estimate based on:

**Actual validated scope**

*

**Actual integration requirements**

*

**Actual security/privacy requirements**

*

**Actual infrastructure requirements**

*

**Actual staffing requirements**

*

**Pilot duration**

*

**Contingency**

This creates a cleaner financial decision.

---

# 14A.9 Compact Budget-Planning Template

The following template can be used for future estimates.

| Cost Category                     | MVP / R&D | Pilot | Production | Notes / Assumptions |
| --------------------------------- | --------: | ----: | ---------: | ------------------- |
| R&D / Product Lead                |         — |     — |          — |                     |
| Software Engineering              |         — |     — |          — |                     |
| UX / Research                     |         — |     — |          — |                     |
| Architecture / Technical Advisory |         — |     — |          — |                     |
| Security / Privacy                |         — |     — |          — |                     |
| Institutional Coordination        |         — |     — |          — |                     |
| Research & Validation             |         — |     — |          — |                     |
| Development Tools                 |         — |     — |          — |                     |
| Hosting / Compute                 |         — |     — |          — |                     |
| Storage / Backup                  |         — |     — |          — |                     |
| Networking                        |         — |     — |          — |                     |
| Search / Data Infrastructure      |         — |     — |          — |                     |
| Hardware                          |         — |     — |          — |                     |
| Integration                       |         — |     — |          — |                     |
| Identity Infrastructure           |         — |     — |          — |                     |
| Testing / QA                      |         — |     — |          — |                     |
| Training / Documentation          |         — |     — |          — |                     |
| Operations / Support              |         — |     — |          — |                     |
| Monitoring                        |         — |     — |          — |                     |
| Governance / Compliance           |         — |     — |          — |                     |
| Contingency                       |         — |     — |          — |                     |
| **Total**                         |     **—** | **—** |      **—** |                     |

The blank values are intentional.

They should be populated only after the relevant phase has sufficient information to produce a defensible estimate.

---

# 14A.10 Budget Assumption Fields

Every populated budget should also record:

* estimate date;
* currency;
* duration;
* staffing assumptions;
* personnel rates;
* infrastructure assumptions;
* data assumptions;
* institutional contribution;
* in-kind contribution;
* recurring vs one-time costs;
* contingency basis;
* quotation/source where applicable;
* confidence level.

---

# 14A.11 In-Kind Contribution Template

Where external or institutional support is provided without direct project expenditure, it should be recorded separately.

| Contribution          | Provider | Estimated Value | Duration | Status |
| --------------------- | -------- | --------------: | -------- | ------ |
| Developer time        |          |                 |          |        |
| Research personnel    |          |                 |          |        |
| ICT support           |          |                 |          |        |
| Server/infrastructure |          |                 |          |        |
| Workspace             |          |                 |          |        |
| Data access           |          |                 |          |        |
| Testing participants  |          |                 |          |        |
| Technical advisory    |          |                 |          |        |
| Software/services     |          |                 |          |        |

This allows future proposals to distinguish:

**cash requirement**

from

**total resource requirement**.

---

# 14A.12 Budget Decision Rule

The financial progression should remain:

**Prototype budget**

→ evidence

→ **pilot-specific budget**

→ pilot evidence

→ **production business/resource case**

There should be no assumption that approval of one budget automatically implies approval of the next stage.

---

# 14A.13 Updated Section 14 Position

The budget framework now establishes a clear boundary:

> **MVP = investment in generating evidence.**

> **Pilot = investment in testing the validated concept under controlled institutional conditions.**

> **Production = investment in sustained institutional operation.**

These are three different financial decisions.

The project should not use a production-scale cost estimate to justify an MVP, nor use a low-cost prototype budget to imply that institutional deployment will be inexpensive.


# 15. Governance, Privacy, Security & Intellectual Property

## 15.1 Purpose

This section establishes the governance, privacy, security, provenance, identity, authorization, and intellectual-property principles that should govern CAMPUS development and potential institutional deployment.

These concerns are foundational because CAMPUS does not merely store isolated information.

It proposes to represent **relationships among people, organizations, knowledge, education, research, places, services, opportunities, and institutional resources**.

Consequently, the system may create meaningful connections between pieces of information that were previously distributed across different systems or contexts.

This creates both value and risk.

The central governance principle is therefore:

> **The ability to represent a relationship does not automatically justify creating, exposing, retaining, or inferring that relationship.**

---

# 15.2 Governance Principles

CAMPUS governance should be guided by:

1. **Relevance**
2. **Integrity**
3. **Truth**
4. **Excellence**
5. **Privacy**
6. **Security**
7. **Accountability**
8. **Provenance**
9. **Proportionality**
10. **Human oversight**

These principles should influence:

* architecture;
* identity;
* permissions;
* data models;
* user interfaces;
* moderation;
* institutional integration;
* research;
* deployment;
* intellectual property.

---

# 15.3 Governance Is an Architectural Function

Governance should not be added after the technical system has been built.

For CAMPUS, governance affects:

* which entities may exist;
* which relationships may exist;
* who can create them;
* who can modify them;
* who can see them;
* how they are verified;
* how long they remain valid;
* how disputes are handled;
* how changes are recorded;
* how information is removed or corrected.

Therefore:

> **Governance rules should be represented in the architecture wherever necessary.**

---

# 15.4 Information Authority Model

CAMPUS should distinguish different categories of information.

At minimum:

### 1. Official Institutional Information

Information published or maintained by an authorized institutional source.

Examples may include:

* official organizational information;
* approved services;
* institutional announcements;
* authorized facility information.

### 2. Community-Generated Information

Information contributed by users or communities.

Examples:

* discussions;
* recommendations;
* community notes;
* user-created resources.

### 3. Personal Opinion

Statements representing an individual's perspective rather than institutional fact.

### 4. Unverified Information

Information for which authority or accuracy has not yet been established.

### 5. Research / Scholarly Information

Information derived from scholarly or research sources and appropriately represented as such.

### 6. External Information

Information originating outside the university environment.

These categories should be distinguishable in the data model and, where relevant, the user interface.

---

# 15.5 Provenance

Every important CAMPUS information object should have sufficient provenance to answer:

* Where did this information come from?
* Who created it?
* Who published or supplied it?
* When was it created?
* When was it last updated?
* Has it been verified?
* By whom?
* Is it imported from another system?
* What external identifier does it have?
* What authority does the source possess?

A conceptual provenance structure may include:

```text
Source
Author / Contributor
Authority
Creation Time
Modification Time
Verification Status
Verification Actor
External Identifier
Import Method
Version
```

Not every field is required for every object.

The exact provenance schema remains a technical design decision.

---

# 15.6 Source of Truth

CAMPUS should distinguish between:

### Source of Truth

The authoritative system or institutional source responsible for maintaining a particular information domain.

### CAMPUS Representation

A copy, reference, index, projection, or relationship representation used by CAMPUS.

For example:

> An academic system may remain authoritative for enrollment while CAMPUS provides contextual discovery around a student, course, organization, or opportunity.

This distinction is essential to avoid creating conflicting institutional records.

---

# 15.7 Relationship Authority

Relationships require authority just as information does.

For each important relationship, CAMPUS should potentially identify:

* who established it;
* what evidence supports it;
* who is authorized to assert it;
* whether it has been verified;
* when it is valid;
* when it expires;
* who can change it.

For example:

```text
Person A
    │
    └── MEMBER_OF ──→ Organization B
             │
          Source
          Authority
          Validity
          Visibility
```

The relationship itself therefore becomes a governed data object.

---

# 15.8 Relationship Lifecycle

A relationship may have a lifecycle:

**Proposed**

↓

**Created**

↓

**Verified**

↓

**Active**

↓

**Updated**

↓

**Expired / Superseded**

↓

**Archived / Removed**

Not every relationship requires every state.

The lifecycle should depend on the nature and risk of the relationship.

---

# 15.9 Identity

Identity is foundational to CAMPUS.

The system should distinguish:

* authentication;
* identity;
* affiliation;
* role;
* authorization.

A user being authenticated does not automatically determine what that user is permitted to do.

The architecture should therefore follow:

**Authentication**

→ **Identity**

→ **Affiliation / Role**

→ **Authorization**

→ **Action**

---

# 15.10 Institutional Identity Integration

Where CAMPUS is eventually integrated into a university environment, it should preferably integrate with an appropriate institutional identity provider rather than creating an unnecessary independent identity ecosystem.

However, the actual VSU identity architecture remains unresolved.

The prototype may therefore use a controlled local identity mechanism for development and research.

No prototype identity implementation should be represented as the university's production identity architecture unless formally authorized and implemented as such.

---

# 15.11 Roles

Potential CAMPUS roles may include:

* visitor;
* student;
* faculty;
* researcher;
* staff;
* administrator;
* content contributor;
* moderator;
* institutional verifier;
* system administrator.

These are conceptual roles.

Actual institutional roles and permission structures should be determined through institutional discovery.

---

# 15.12 Authorization

Authorization should occur at multiple levels where justified.

Potential levels include:

### System

Who can access the CAMPUS environment?

### Organization

Who can manage information associated with an organization?

### Entity

Who can view or modify a particular entity?

### Relationship

Who can create, modify, or view a relationship?

### Field

Who can see a particular attribute?

### Action

Who can perform an operation?

This does not mean every level must be implemented in the MVP.

The prototype should demonstrate the minimum permission model required to test the hypothesis safely.

---

# 15.13 Principle: Connected Does Not Mean Public

A central CAMPUS rule should be:

> **The existence of a relationship does not imply that the relationship should be publicly visible.**

For example, the system may technically know that two entities are related while:

* only authorized users can see the relationship;
* only certain attributes are visible;
* only aggregate information is shown;
* the relationship is not exposed at all.

Visibility must therefore be treated separately from existence.

---

# 15.14 Privacy by Design

Privacy should be considered throughout the architecture rather than addressed only at deployment.

Core principles include:

### Data Minimization

Collect and retain only what is necessary.

### Purpose Limitation

Use information for defined legitimate purposes.

### Access Limitation

Restrict information according to authorization.

### Retention Limitation

Do not retain information indefinitely without justification.

### Accuracy

Provide mechanisms for correction.

### Transparency

Make relevant provenance and usage understandable.

### Security

Protect information from unauthorized access or manipulation.

---

# 15.15 Relational Privacy

CAMPUS introduces a particular category of risk:

**relational privacy**.

Information that appears harmless individually may become sensitive when connected.

For example:

* person + organization;
* person + location;
* person + research project;
* person + event;
* person + community;
* person + opportunity.

The system should therefore evaluate not only:

> "Is this information public?"

but also:

> **"Does exposing this relationship create additional privacy risk?"**

---

# 15.16 Inference Risk

A relational system may allow users or algorithms to infer information that was never explicitly stated.

For example, multiple public relationships could potentially reveal:

* affiliation;
* activity;
* interests;
* location patterns;
* professional relationships;
* organizational involvement.

CAMPUS should therefore distinguish:

### Explicit Relationship

Directly asserted or sourced.

### Derived Relationship

Computed from other information.

### Inferred Relationship

Potentially inferred through analysis or AI.

Derived and inferred relationships require additional governance and should not automatically be presented as factual.

---

# 15.17 AI Governance

If AI capabilities are eventually introduced, the architecture should preserve the distinction between:

* source information;
* retrieved information;
* derived information;
* generated output.

A conceptual architecture is:

**User**

↓

**AI Interface**

↓

**CAMPUS Authorization**

↓

**Authorized Knowledge / Relationships**

↓

**AI Processing**

↓

**Response + Provenance**

AI should not bypass CAMPUS permissions.

A user should not gain access to restricted information merely by asking an AI interface to reveal it.

---

# 15.18 Community Governance

Community-generated information creates additional governance requirements.

The system may need mechanisms for:

* contribution;
* editing;
* reporting;
* moderation;
* verification;
* correction;
* dispute;
* appeal;
* archival;
* removal.

The exact moderation model depends on whether CAMPUS operates:

* as a research prototype;
* as a university service;
* as a community platform;
* as an institutional information layer.

These models should not be conflated.

---

# 15.19 Institutional Information Governance

Official institutional information should have stronger authority controls than ordinary community contributions.

Potential controls include:

* verified institutional accounts;
* designated information owners;
* controlled publishing;
* approval workflows;
* audit history;
* source attribution;
* expiration/review dates.

The purpose is not to prevent community participation.

It is to ensure that users can distinguish:

**institutional authority**

from

**community contribution**.

---

# 15.20 Correction and Dispute

CAMPUS should provide a mechanism for reporting information that is:

* incorrect;
* outdated;
* misleading;
* improperly attributed;
* unauthorized;
* privacy-sensitive.

Potential lifecycle:

**Report**

→ **Review**

→ **Verify**

→ **Correct / Retain / Restrict / Remove**

→ **Record decision**

For institutional information, correction authority should remain with the appropriate institutional source.

For community content, governance rules should determine who can resolve disputes.

---

# 15.21 Deletion and Retention

Deletion must be treated carefully because CAMPUS may represent historical relationships.

The system may need to distinguish:

* current information;
* historical information;
* archived information;
* deleted information;
* anonymized information.

The appropriate treatment depends on:

* legal requirements;
* institutional policy;
* research requirements;
* data authority;
* user rights;
* historical value.

Retention policies remain unresolved until the relevant institutional and legal requirements are established.

---

# 15.22 Auditability

Governance-sensitive actions should be auditable.

Potential audit events include:

* identity changes;
* permission changes;
* relationship creation;
* relationship modification;
* verification;
* administrative access;
* content removal;
* integration changes;
* synchronization events.

Audit records should themselves be appropriately protected.

---

# 15.23 Security Architecture

Security should operate across multiple layers.

### Identity Security

* authentication;
* credential protection;
* session security.

### Authorization Security

* least privilege;
* role-based or attribute-based controls;
* access enforcement.

### Application Security

* secure coding;
* input validation;
* API security;
* protection against common application vulnerabilities.

### Data Security

* encryption;
* access control;
* integrity protection;
* backup security.

### Infrastructure Security

* host security;
* network controls;
* patching;
* monitoring.

### Integration Security

* authenticated interfaces;
* authorization;
* secure data transfer;
* validation of external inputs.

### Operational Security

* logging;
* monitoring;
* incident response;
* recovery.

---

# 15.24 Threat Modeling

Before sensitive data are introduced, CAMPUS should conduct a threat-modeling exercise.

Potential threat categories include:

* unauthorized access;
* account compromise;
* privilege escalation;
* malicious content;
* relationship manipulation;
* data leakage;
* inference attacks;
* compromised integrations;
* synchronization attacks;
* insider misuse;
* infrastructure compromise;
* denial of service.

Threat modeling should be updated when architecture or deployment conditions change.

---

# 15.25 Security Testing

Testing may progress from:

### MVP

* secure configuration;
* basic authorization testing;
* dependency scanning;
* input validation;
* basic vulnerability assessment.

### Pilot

* more comprehensive security review;
* penetration testing where required;
* integration security testing;
* identity/security assessment.

### Production

* continuous vulnerability management;
* monitoring;
* incident response;
* security operations;
* periodic testing.

Exact requirements should be determined according to the environment and applicable institutional standards.

---

# 15.26 Local-First Security

Local-first architecture introduces additional security questions.

Each local node may require:

* authentication;
* encryption;
* secure storage;
* node registration;
* access controls;
* synchronization authentication;
* conflict handling;
* revocation;
* recovery;
* monitoring.

A local-first architecture should not be considered inherently more secure than centralized infrastructure.

Its security properties must be demonstrated.

---

# 15.27 Data Classification

Before institutional deployment, CAMPUS should support an appropriate data-classification framework.

A conceptual classification might include:

* public;
* internal;
* restricted;
* confidential;
* highly sensitive.

The exact classification terminology should follow applicable institutional requirements.

Classification should influence:

* storage;
* access;
* sharing;
* indexing;
* synchronization;
* retention;
* logging.

---

# 15.28 Intellectual Property Principles

CAMPUS involves multiple potential forms of intellectual property:

* software source code;
* architecture;
* documentation;
* interface designs;
* data models;
* research outputs;
* datasets;
* visual materials;
* algorithms;
* technical experiments;
* trademarks/project identity;
* future patents or other protectable inventions where applicable.

Ownership should not be assumed.

It depends on:

* who creates the work;
* employment or contractual relationships;
* funding terms;
* institutional policies;
* collaboration agreements;
* third-party components;
* licenses;
* research arrangements.

---

# 15.29 Independent Project vs Institutional Contribution

Because CAMPUS is currently an independently initiated R&D concept, the project should maintain clear records of:

* original work;
* dates of creation;
* contributors;
* source materials;
* third-party components;
* institutional contributions;
* collaborative modifications.

If institutional collaboration begins, the parties should establish appropriate agreements regarding:

* ownership;
* licensing;
* use rights;
* publication;
* confidentiality;
* data;
* derivative works;
* commercialization.

---

# 15.30 Open-Source Considerations

Open-source licensing may be appropriate for some or all CAMPUS software.

Potential benefits include:

* transparency;
* collaboration;
* reproducibility;
* community contribution;
* portability;
* reduced vendor lock-in.

Potential concerns include:

* institutional requirements;
* third-party dependencies;
* security;
* support;
* commercialization;
* license compatibility;
* proprietary integrations.

The final licensing strategy remains unresolved.

---

# 15.31 Third-Party Software and AI Tools

CAMPUS may use:

* open-source libraries;
* commercial software;
* cloud services;
* APIs;
* AI/LLM services.

Each dependency should be evaluated for:

* license;
* data usage;
* privacy;
* security;
* vendor dependency;
* exportability;
* cost;
* long-term availability.

Sensitive institutional information should not be sent to third-party services unless appropriate authorization and contractual/data-protection conditions exist.

---

# 15.32 Research Data Governance

Research data should be treated separately from production institutional data.

Research datasets may include:

* interview notes;
* usability results;
* prototype logs;
* synthetic data;
* anonymized data;
* experimental datasets.

Research data should have:

* defined purpose;
* access control;
* retention policy;
* appropriate anonymization;
* documentation;
* secure storage.

---

# 15.33 Governance Responsibility Model

Governance responsibilities should eventually be assigned among:

| Responsibility            | Potential Authority                         |
| ------------------------- | ------------------------------------------- |
| System operation          | Technical operator                          |
| Identity                  | Institutional identity authority            |
| Data ownership            | Relevant institutional unit                 |
| Relationship verification | Authorized information owner                |
| Community moderation      | Designated governance function              |
| Security                  | Technical/security authority                |
| Privacy                   | Appropriate institutional/privacy authority |
| Research data             | Research/project governance                 |
| IP                        | Rights holders / agreed governance          |
| Strategic direction       | Project/institutional decision authority    |

These are conceptual responsibilities, not assigned VSU roles.

---

# 15.34 Governance Separation of Concerns

CAMPUS should avoid placing all authority in a single administrative role.

For example:

**Technical administrator**

does not automatically become:

**institutional information authority**

and:

**content moderator**

does not automatically become:

**data owner**.

Separating technical, informational, institutional, and governance authority reduces concentration of control.

---

# 15.35 Institutional Pilot Governance

Before a pilot, an explicit governance arrangement should establish:

* participating units;
* system owner;
* technical operator;
* data owners;
* authorized data;
* user groups;
* security responsibilities;
* privacy responsibilities;
* incident process;
* correction process;
* termination conditions;
* pilot evaluation;
* data disposition after pilot.

This may take the form of an agreement, memorandum, project charter, or another institutionally appropriate instrument.

The exact form is unresolved.

---

# 15.36 Governance of External Participants

If alumni, community members, employers, researchers from other institutions, or other external participants are eventually included, additional questions arise regarding:

* identity;
* verification;
* affiliation;
* permissions;
* content authority;
* data ownership;
* privacy;
* moderation.

External participation should therefore be introduced deliberately rather than assumed as a default.

---

# 15.37 Principle of Least Authority

CAMPUS should follow:

> **Give each actor only the authority required to perform their legitimate function.**

This applies to:

* users;
* administrators;
* integrations;
* APIs;
* services;
* AI systems;
* local nodes.

The system should avoid broad permissions simply because they are technically convenient.

---

# 15.38 Principle of Reversibility

Where possible, governance-sensitive actions should be reversible or reviewable.

Examples:

* relationship edits;
* content changes;
* permissions;
* verification;
* synchronization;
* administrative actions.

Irreversible actions should require stronger authorization where appropriate.

---

# 15.39 Governance and the Relational Model

Governance should be represented alongside the relationship itself.

Conceptually:

```text
SOURCE ENTITY
     │
     │ Relationship
     ▼
TARGET ENTITY

Relationship Metadata:
- Type
- Status
- Validity
- Provenance
- Authority
- Visibility
- Permissions
- Created
- Updated
- Audit History
```

This is one of the defining architectural characteristics of CAMPUS.

The relationship is not merely a line between two objects.

It is a **governed information object**.

---

# 15.40 Governance and the MVP

The MVP should implement only the governance mechanisms necessary to safely test the relational hypothesis.

At minimum, the prototype should demonstrate:

* basic identity;
* role-based permissions;
* provenance;
* source/authority distinction;
* visibility;
* relationship ownership or creation authority;
* basic auditability;
* correction capability where appropriate.

The MVP does not need to implement the complete governance architecture required for university-wide production.

---

# 15.41 Governance and Future Dimensions

Governance complexity increases as CAMPUS expands.

### CCLR

Potentially sensitive educational records.

### Pathways

Potentially sensitive career and personal information.

### Research

Research confidentiality, intellectual property, unpublished work, and collaboration information.

### Spatial / Digital Twin

Potential security implications for physical facilities and infrastructure.

### Local-First

Distributed data stewardship and synchronization.

### Analytics

Potential aggregation and inference risks.

### AI

Potential disclosure, inference, hallucination, and access-control risks.

Therefore:

> **Every major CAMPUS dimension requires its own governance assessment before expansion.**

---

# 15.42 Governance Failure Conditions

CAMPUS should not proceed to a broader deployment if:

* data authority is unclear;
* permissions cannot be enforced reliably;
* sensitive relationships are exposed improperly;
* provenance cannot be established where required;
* institutional information cannot be distinguished from community content;
* security risks cannot be reasonably controlled;
* governance responsibilities are undefined;
* privacy risks are disproportionate to the expected benefit.

A governance failure is a valid reason to narrow or stop a capability.

---

# 15.43 Governance Decision Framework

For each information or relationship type, ask:

1. What is it?
2. Why is it represented?
3. Who owns it?
4. Who may create it?
5. Who may verify it?
6. Who may modify it?
7. Who may see it?
8. How is provenance established?
9. How long is it valid?
10. How is it corrected?
11. How is it removed?
12. What happens if it is disputed?
13. What privacy risk does the relationship create?
14. What security risk does it create?
15. Which system remains authoritative?

---

# 15.44 Governance Status

### Established

* Identity, authorization, provenance, privacy, and security are foundational CAMPUS concerns.
* Existing authoritative systems should retain authority where appropriate.
* Information and relationships require appropriate provenance.
* Connected information is not automatically public.
* The prototype should not use sensitive institutional data without appropriate authorization.
* Institutional governance must be understood before institutional deployment.

### Proposed

* Governed relationship objects.
* Relationship lifecycle.
* Multi-level authorization.
* Information authority categories.
* Relational privacy assessment.
* Explicit correction/dispute mechanisms.
* Progressive security requirements.
* Formal pilot governance arrangement.
* Structured IP and licensing documentation.

### Unresolved

* Exact VSU privacy policies applicable to CAMPUS.
* Exact institutional data-classification framework.
* Identity provider and authentication architecture.
* Institutional governance authority.
* Formal approval pathway.
* IP ownership in a future institutional collaboration.
* Open-source vs proprietary licensing.
* Data-retention requirements.
* AI data-governance requirements.
* Local-first governance model.
* Formal security standards and assessment requirements.

---

# 15.45 Section Conclusion

Governance, privacy, security, and intellectual property are not secondary considerations for CAMPUS.

They are part of the architecture.

The defining principle is:

> **CAMPUS should make relationships discoverable without making them indiscriminately visible, authoritative without pretending all information is authoritative, persistent without making all information permanent, and connected without removing the boundaries that protect people and institutions.**

The system should therefore preserve four distinctions:

**Identity ≠ Authority**

**Connection ≠ Public Visibility**

**Information ≠ Verified Truth**

**Technical Capability ≠ Institutional Permission**

These distinctions should remain intact from the prototype through any eventual institutional deployment.

At the current stage, the project should implement only the minimum governance architecture required for safe experimentation while documenting the substantially greater requirements that would accompany institutional deployment.


# 16. Risks and Limitations

## 16.1 Purpose

This section identifies the principal risks, limitations, uncertainties, and failure modes associated with CAMPUS.

The purpose is not to create a generic project risk register.

It is to identify risks that could materially affect:

* the validity of the research hypothesis;
* the technical architecture;
* user value;
* institutional suitability;
* privacy and security;
* project feasibility;
* resource requirements;
* long-term sustainability.

CAMPUS should treat these risks as part of the research itself.

A risk that invalidates a core assumption is not merely a project-management problem. It may require changing the architecture or stopping a development direction.

---

# 16.2 Risk Philosophy

CAMPUS follows three principles.

### 1. Risks Should Be Tested

Where possible, assumptions should become experiments.

### 2. Risks Should Be Visible

Important uncertainties should be documented rather than hidden to make the project appear more mature.

### 3. Failure Should Be Actionable

Each major risk should have a response:

* mitigate;
* test;
* narrow;
* postpone;
* redesign;
* stop.

---

# 16.3 Risk Categories

CAMPUS risks are grouped into:

1. Research risks
2. User and UX risks
3. Architectural risks
4. Technical risks
5. Integration risks
6. Institutional risks
7. Governance risks
8. Privacy risks
9. Security risks
10. Data risks
11. Resource risks
12. Financial risks
13. Operational risks
14. Strategic risks
15. Scope risks
16. Sustainability risks

---

# 16.4 Core Research Risk — The Problem May Be Overstated

The central hypothesis assumes that important university relationships may be difficult to discover and use because information is distributed across systems, offices, communities, and physical contexts.

This may be true.

However, the magnitude of the problem is not yet established.

Users may already have effective workflows.

Existing systems may already solve important discovery problems.

The perceived fragmentation may also result from ordinary organizational complexity rather than a missing digital layer.

### Mitigation

Conduct:

* interviews;
* workflow research;
* system mapping;
* task analysis;
* comparative testing.

### Failure Response

If the problem is weak or already adequately solved, narrow or stop the relevant CAMPUS capability.

---

# 16.5 Core Research Risk — The Relational Model May Not Add Enough Value

The existence of relationships does not prove that users need an explicit relationship-oriented interface.

Users may prefer:

* ordinary search;
* directories;
* lists;
* filters;
* existing portals;
* conventional navigation.

A graph-like representation may be technically elegant but practically unnecessary.

### Mitigation

Compare relational navigation against conventional workflows.

### Failure Response

Simplify the interface or narrow the relational model.

---

# 16.6 Core Research Risk — Discovery Does Not Translate Into Action

CAMPUS may improve discovery without improving actual outcomes.

Users might discover more information but still struggle to:

* make decisions;
* contact the right person;
* access a service;
* complete a task;
* obtain permission;
* take the next step.

### Mitigation

Measure the complete:

**Discovery → Context → Relationship → Action**

sequence.

### Failure Response

Prioritize actionable workflows rather than information visualization.

---

# 16.7 Core Research Risk — Relationship Overload

If everything becomes connected, nothing may remain useful.

Too many relationships can produce:

* visual clutter;
* cognitive overload;
* irrelevant discovery;
* navigation complexity;
* reduced trust.

### Mitigation

Research:

* relationship prioritization;
* relevance;
* filtering;
* contextual presentation;
* progressive disclosure.

### Failure Response

Reduce visible relationships and introduce stricter relationship selection.

---

# 16.8 Confirmation Bias

Because CAMPUS is independently conceived, there is a risk that research becomes an effort to validate an idea rather than investigate it.

Potential symptoms include:

* leading interview questions;
* selective evidence;
* ignoring negative findings;
* interpreting technical feasibility as user value;
* presenting stakeholder curiosity as institutional support.

### Mitigation

* neutral research questions;
* explicit disconfirmation criteria;
* comparison with alternatives;
* documented negative findings;
* evidence classification;
* decision gates.

### Failure Response

Revise the hypothesis or research methodology.

---

# 16.9 Institutional Misalignment

CAMPUS may be technically valuable but poorly aligned with:

* institutional priorities;
* existing systems;
* governance;
* operational capacity;
* planned digital transformation.

### Mitigation

Conduct institutional systems discovery before proposing integration.

### Failure Response

Narrow CAMPUS to an independent research environment or identify a more appropriate architectural role.

---

# 16.10 Duplication of Existing Systems

A major risk is that CAMPUS recreates capabilities already provided by:

* ERP;
* LMS;
* student information systems;
* HR systems;
* research systems;
* portals;
* directories;
* library systems;
* GIS platforms;
* other institutional initiatives.

### Mitigation

Map:

* system ownership;
* authority;
* capabilities;
* interfaces;
* planned developments.

### Failure Response

Use CAMPUS as a discovery/integration layer rather than duplicating the underlying system.

If no meaningful complementary value exists, do not build the capability.

---

# 16.11 Becoming a Second System of Record

If CAMPUS copies too much institutional information, it may become an unofficial competing database.

This creates:

* synchronization problems;
* conflicting records;
* maintenance costs;
* unclear authority;
* stale information.

### Mitigation

Maintain explicit source-of-truth boundaries.

### Failure Response

Replace duplication with:

* references;
* indexes;
* controlled projections;
* authorized synchronization.

---

# 16.12 Integration Complexity

Institutional systems may have:

* incompatible architectures;
* limited APIs;
* legacy systems;
* inconsistent identifiers;
* different data models;
* different ownership;
* different update schedules.

Integration may therefore cost substantially more than expected.

### Mitigation

Test integration early using representative but controlled interfaces.

### Failure Response

Reduce integration scope and maintain CAMPUS as a bounded relational layer.

---

# 16.13 Identity Complexity

University identity can involve:

* students;
* faculty;
* staff;
* researchers;
* alumni;
* visitors;
* contractors;
* external collaborators.

Affiliations can change over time.

### Mitigation

Treat identity, affiliation, role, and authorization as separate concepts.

### Failure Response

Limit prototype identity to a controlled environment until institutional identity architecture is understood.

---

# 16.14 Provenance Complexity

The more sources CAMPUS connects, the more difficult it becomes to explain:

* where information came from;
* which source is authoritative;
* when it was last verified;
* whether two sources disagree.

### Mitigation

Make provenance a first-class architectural concern.

### Failure Response

Reduce the number of information sources or restrict certain content types.

---

# 16.15 Data Quality Risk

Poor-quality data can undermine the entire relational model.

Problems include:

* duplicate entities;
* incorrect affiliations;
* outdated information;
* missing relationships;
* inconsistent identifiers;
* incomplete metadata.

A relational system may make bad relationships appear more authoritative because they are presented systematically.

### Mitigation

* data validation;
* provenance;
* source authority;
* correction mechanisms;
* review processes.

### Failure Response

Restrict relationship creation or reduce data scope.

---

# 16.16 Temporal Data Risk

University relationships change frequently.

Examples:

* student enrollment;
* faculty assignments;
* organizational membership;
* projects;
* facility availability.

A relationship that was correct yesterday may be incorrect today.

### Mitigation

Support:

* validity periods;
* status;
* update timestamps;
* source information.

### Failure Response

Avoid presenting historical relationships as current.

---

# 16.17 Privacy Risk — Relationship Inference

CAMPUS may expose relationships that users did not previously see together.

This can create privacy risks even when the underlying data are individually accessible.

### Mitigation

* visibility controls;
* data minimization;
* relationship-level permissions;
* inference analysis.

### Failure Response

Do not expose the relationship.

---

# 16.18 Privacy Risk — Over-Collection

Because CAMPUS is designed to connect many domains, there is a natural temptation to collect everything.

### Mitigation

Apply:

> **Collect only what is necessary for a validated use case.**

### Failure Response

Remove unnecessary data fields and relationships.

---

# 16.19 Security Risk — Expanded Attack Surface

Connecting multiple systems can increase the attack surface.

Potential vulnerabilities include:

* APIs;
* integrations;
* synchronization;
* identity;
* local nodes;
* external services.

### Mitigation

* threat modeling;
* least privilege;
* secure APIs;
* encryption;
* monitoring;
* security testing.

### Failure Response

Remove or isolate high-risk integrations.

---

# 16.20 Security Risk — Local-First Distribution

Local-first architecture may increase the number of locations where data exists.

Potential consequences:

* more endpoints;
* synchronization complexity;
* node compromise;
* inconsistent security configurations.

### Mitigation

Conduct a specific local-first security assessment.

### Failure Response

Use centralized or hybrid architecture where appropriate.

---

# 16.21 AI Risk

Future AI capabilities may introduce:

* hallucination;
* incorrect relationship interpretation;
* privacy leakage;
* unauthorized retrieval;
* overconfidence;
* opaque reasoning;
* generated misinformation.

### Mitigation

AI should operate over authorized, provenance-aware information and provide appropriate source context.

### Failure Response

Restrict AI functionality or remove it from the relevant workflow.

AI is not required for the core CAMPUS hypothesis.

---

# 16.22 Spatial / Digital Twin Risk

A digital twin may introduce:

* substantial data requirements;
* spatial complexity;
* maintenance costs;
* infrastructure dependencies;
* security concerns.

### Mitigation

Develop spatial capabilities incrementally.

### Failure Response

Retain simple place representation rather than pursuing a full digital twin.

---

# 16.23 Scope Explosion

The broad CAMPUS vision naturally creates opportunities to add:

* education;
* research;
* careers;
* alumni;
* GIS;
* digital twin;
* analytics;
* AI;
* social/community capabilities.

The project could become too broad to validate properly.

### Mitigation

Maintain a strict MVP boundary and evidence gates.

### Failure Response

Return to the foundational relational hypothesis.

---

# 16.24 Feature Accumulation Risk

A prototype can become a collection of impressive features without testing the core hypothesis.

### Mitigation

Every feature must answer:

* What problem?
* Who needs it?
* What evidence?
* Why CAMPUS?
* Why now?
* What relationship does it represent?
* What validation will it enable?

### Failure Response

Remove features that do not contribute to research objectives.

---

# 16.25 Technical Overengineering

The architecture may become unnecessarily complex because of ambitious future requirements.

Examples:

* premature distributed architecture;
* unnecessary graph infrastructure;
* premature AI infrastructure;
* excessive microservices;
* full offline synchronization before a validated need.

### Mitigation

Use the simplest architecture capable of testing the current hypothesis.

### Failure Response

Simplify.

---

# 16.26 Technology Lock-In

Dependence on a specific:

* database;
* cloud provider;
* AI provider;
* identity provider;
* proprietary API

could restrict future architecture decisions.

### Mitigation

Prioritize:

* standards;
* portable data;
* clear interfaces;
* replaceable components.

### Failure Response

Refactor or replace the dependency before institutional scaling.

---

# 16.27 Prototype-to-Production Gap

A prototype may work successfully while lacking:

* reliability;
* security;
* monitoring;
* support;
* scalability;
* governance.

### Mitigation

Treat prototype and production as separate engineering stages.

### Failure Response

Do not present prototype success as production readiness.

---

# 16.28 Institutional Access Risk

CAMPUS may require information or system access that cannot be obtained.

### Mitigation

Design the MVP to function with:

* synthetic data;
* public data;
* controlled datasets;
* mock integrations.

### Failure Response

Continue research independently without claiming institutional integration.

---

# 16.29 Institutional Timing Risk

Institutional digital initiatives may change while CAMPUS is being developed.

For example:

* existing projects may expand;
* systems may be replaced;
* priorities may change;
* architecture may be revised.

### Mitigation

Treat institutional architecture as an evolving context.

### Failure Response

Update the CAMPUS architecture and integration assumptions.

---

# 16.30 Institutional Ownership Risk

Even if CAMPUS proves valuable, it may be unclear:

* who owns it;
* who operates it;
* who funds it;
* who governs it;
* who supports it.

### Mitigation

Resolve ownership and operating responsibilities before pilot or adoption.

### Failure Response

Keep the project within research scope until responsibility is clear.

---

# 16.31 Governance Risk

Ambiguous authority may result in:

* conflicting information;
* unauthorized edits;
* unclear moderation;
* privacy violations;
* institutional disputes.

### Mitigation

Establish explicit authority and provenance models.

### Failure Response

Restrict functionality until governance is defined.

---

# 16.32 Intellectual Property Risk

Collaboration may create ambiguity over:

* source code;
* architecture;
* research results;
* datasets;
* derivative work;
* commercialization rights.

### Mitigation

Document ownership and contribution from the beginning.

### Failure Response

Resolve rights through formal agreements before collaborative deployment.

---

# 16.33 Resource Risk

The project may lack:

* developers;
* researchers;
* infrastructure;
* funding;
* institutional support.

### Mitigation

Reduce scope and prioritize the foundational MVP.

### Failure Response

Delay advanced dimensions rather than lowering evidence quality.

---

# 16.34 Financial Risk

Institutional integration and operations may cost substantially more than prototype development.

### Mitigation

Separate:

* MVP;
* pilot;
* production budgets.

### Failure Response

Do not commit to institutional scale without a separate financial assessment.

---

# 16.35 Sustainability Risk

A system may be technically successful but financially or organizationally unsustainable.

Questions include:

* Who maintains it?
* Who funds it?
* Who manages infrastructure?
* Who handles support?
* Who maintains integrations?
* Who governs data?

### Mitigation

Conduct total-cost-of-ownership analysis before production.

### Failure Response

Restrict the project to research or a smaller sustainable scope.

---

# 16.36 User Adoption Risk

Users may not adopt a system even if it is technically useful.

Potential causes include:

* additional effort;
* poor UX;
* lack of trust;
* unclear value;
* duplication;
* insufficient institutional integration.

### Mitigation

Design around actual workflows and validate with users.

### Failure Response

Simplify the experience or discontinue the capability.

---

# 16.37 Trust Risk

A unified interface may cause users to assume that all information has equal authority.

This is especially dangerous when:

* community content;
* personal opinions;
* external sources;
* unverified information

appear alongside official information.

### Mitigation

Make provenance and authority understandable.

### Failure Response

Restrict or redesign mixed-source presentation.

---

# 16.38 Relationship Accuracy Risk

A visually compelling relationship may appear authoritative even if it is incorrect.

### Mitigation

Provide:

* provenance;
* source;
* verification;
* timestamps;
* relationship status.

### Failure Response

Remove or restrict unverified relationships.

---

# 16.39 Search and Ranking Risk

Search systems may prioritize:

* popular information;
* recent information;
* highly connected entities;

rather than genuinely relevant information.

### Mitigation

Treat ranking as a research problem.

Test:

* relevance;
* context;
* authority;
* freshness;
* user intent.

### Failure Response

Use simpler deterministic discovery mechanisms until ranking quality is established.

---

# 16.40 Complexity Risk

A relational architecture can become difficult to understand for:

* developers;
* administrators;
* users;
* institutional stakeholders.

### Mitigation

Maintain:

* clear domain concepts;
* controlled relationship vocabulary;
* documentation;
* simple interfaces.

### Failure Response

Simplify the conceptual and technical model.

---

# 16.41 Measurement Risk

It may be difficult to define whether CAMPUS actually creates value.

### Mitigation

Establish measurable tasks and baselines before testing.

Potential measures include:

* task completion;
* time;
* number of steps;
* discovery quality;
* comprehension;
* actionability;
* user confidence.

### Failure Response

Narrow the hypothesis to measurable outcomes.

---

# 16.42 Research Sample Limitations

Early user studies may involve relatively small or non-representative groups.

Results should therefore not be presented as representing the entire university population.

### Mitigation

Clearly state:

* sample;
* context;
* limitations;
* uncertainty.

Use later studies to test broader applicability.

---

# 16.43 Generalizability Risk

Evidence from one university may not automatically generalize to:

* other universities;
* other countries;
* different infrastructure environments;
* different governance structures.

### Mitigation

Separate:

**VSU-specific findings**

from

**general architectural findings**.

---

# 16.44 Dependence on Institutional Context

CAMPUS may work well in one institutional environment but poorly in another because of:

* architecture;
* culture;
* governance;
* connectivity;
* data maturity;
* organizational structure.

### Mitigation

Treat CAMPUS as an extensible architecture rather than assuming universal applicability.

---

# 16.45 Commercialization Risk

Premature commercialization may distort the research process.

Potential consequences include:

* feature pressure;
* exaggerated claims;
* proprietary lock-in;
* reduced willingness to document failure.

### Mitigation

Prioritize research validation before commercialization.

Commercialization should follow evidence rather than precede it.

---

# 16.46 Strategic Risk

CAMPUS could become so broad that its identity becomes unclear.

Potential descriptions may accumulate around:

* digital campus;
* social platform;
* knowledge graph;
* ERP layer;
* digital twin;
* AI platform;
* research platform;
* learning platform.

### Mitigation

Maintain the canonical definition:

> **CAMPUS investigates a persistent, permission-aware and provenance-aware relational digital layer for university discovery, interaction, continuity, and connection.**

Other capabilities remain dimensions or extensions.

---

# 16.47 Risk Register

The project should maintain a living risk register.

| Risk                             | Likelihood | Impact | Evidence Status    | Mitigation            | Trigger                         |
| -------------------------------- | ---------- | ------ | ------------------ | --------------------- | ------------------------------- |
| Problem overstated               | Unknown    | High   | Unresolved         | User research         | Weak evidence                   |
| Relational value insufficient    | Unknown    | High   | Unresolved         | Comparative testing   | No measurable benefit           |
| Existing system duplication      | Medium     | High   | Unresolved         | System mapping        | Overlap discovered              |
| Integration complexity           | High       | High   | Unresolved         | Early experiments     | Excessive effort                |
| Privacy risk                     | Medium     | High   | Unresolved         | Privacy review        | Sensitive relationship exposure |
| Security risk                    | Medium     | High   | Unresolved         | Threat modeling       | Critical vulnerability          |
| Scope explosion                  | High       | High   | Known project risk | MVP boundary          | Rapid feature growth            |
| Resource shortage                | Medium     | High   | Unresolved         | Stage gating          | Insufficient manpower           |
| Institutional access unavailable | Medium     | High   | Unresolved         | Synthetic/public data | No authorization                |
| Sustainability unclear           | High       | High   | Unresolved         | TCO analysis          | No operating model              |

The values should be revised as evidence becomes available.

---

# 16.48 Risk Prioritization

Risk priority should consider:

**Impact × Uncertainty × Dependency**

A risk that can invalidate the entire project should be investigated earlier than a risk affecting only a future feature.

High-priority risks therefore include:

* whether the problem exists;
* whether relational representation adds value;
* whether existing systems already solve the problem;
* whether institutional integration is feasible;
* whether privacy/security requirements can be satisfied.

---

# 16.49 Risk-to-Experiment Mapping

Where possible, each major risk should correspond to an experiment.

| Risk                   | Experiment                           |
| ---------------------- | ------------------------------------ |
| Problem overstated     | User interviews/workflow observation |
| Relational value weak  | Comparative usability test           |
| Relationship overload  | Navigation experiment                |
| Existing duplication   | System inventory                     |
| Integration complexity | Prototype integration                |
| Data quality           | Controlled data test                 |
| Privacy risk           | Relational privacy assessment        |
| Security risk          | Threat model/security test           |
| Local-first complexity | Offline/synchronization experiment   |
| User adoption          | Task-based usability testing         |
| Cost uncertainty       | Prototype resource measurement       |

This turns risk management into active research.

---

# 16.50 Limitations of the Current Blueprint

The Blueprint itself has limitations.

At the current stage:

* institutional architecture is incompletely known;
* actual VSU system details remain to be confirmed;
* user evidence is incomplete;
* technical benchmarks have not yet been completed;
* actual infrastructure requirements are not fully known;
* budget figures are not yet established;
* institutional governance requirements remain unresolved;
* prototype performance has not yet been demonstrated;
* future dimensions remain hypotheses.

These limitations should be explicitly preserved.

---

# 16.51 Limitations of the Prototype

The eventual MVP will likely have:

* limited data;
* limited users;
* limited relationships;
* limited integrations;
* limited performance testing;
* prototype-level security;
* simplified governance;
* incomplete spatial representation.

Prototype findings must therefore not be presented as evidence of university-wide production readiness.

---

# 16.52 Limitation: Small-Scale Evidence

A successful prototype may demonstrate:

> **technical and conceptual feasibility under tested conditions**

without demonstrating:

> **institution-wide effectiveness at scale**.

These are different claims.

---

# 16.53 Limitation: Institutional Specificity

Initial validation in the VSU environment would provide valuable evidence for CAMPUS in that context.

It would not automatically establish that:

* all universities have the same problem;
* the same architecture is optimal everywhere;
* the same governance model applies universally.

Generalization should require additional evidence.

---

# 16.54 Limitation: Architecture May Change

The current architecture is a research hypothesis.

Future evidence may indicate:

* a different database;
* a different integration model;
* a simpler relational structure;
* less local-first functionality;
* a different identity architecture;
* reduced scope;
* a different relationship model.

Such changes should be treated as normal R&D evolution.

---

# 16.55 Stop Conditions

CAMPUS should consider stopping or fundamentally redefining the project if:

1. the underlying problem cannot be demonstrated;
2. relational representation provides no meaningful benefit;
3. existing systems already adequately solve the target problem;
4. governance requirements cannot be responsibly satisfied;
5. security/privacy risks are disproportionate;
6. technical complexity becomes unjustifiable;
7. institutional relevance cannot be established;
8. resources required exceed reasonable value;
9. a better-supported alternative architecture emerges.

Stopping a development direction is a valid research outcome.

---

# 16.56 Risk Acceptance

Not every risk can or should be eliminated.

Some risks may be:

* understood;
* bounded;
* monitored;
* acceptable within a controlled research environment.

Risk acceptance should therefore be explicit rather than accidental.

For each accepted risk, document:

* nature of risk;
* rationale;
* scope;
* safeguards;
* responsible party;
* review condition.

---

# 16.57 Section Conclusion

CAMPUS carries substantial uncertainty because it is intentionally exploring a broad architectural hypothesis.

The project should not hide that uncertainty.

Its principal risks are not simply technical.

They include the possibility that:

* the underlying problem is smaller than expected;
* existing systems already solve important parts of it;
* relationships do not create enough user value;
* relational complexity overwhelms usability;
* integration is too expensive;
* privacy risks emerge from connecting information;
* governance becomes too complex;
* institutional conditions are unsuitable;
* or the project simply requires more resources than the demonstrated value justifies.

The appropriate response is not to eliminate uncertainty through assumptions.

It is to **turn uncertainty into research questions and experiments**.

The governing principle is:

> **If a risk can invalidate the CAMPUS hypothesis, investigate it early. If a capability cannot survive evidence-based validation, narrow or remove it.**

This keeps CAMPUS aligned with its intended character as a disciplined R&D program rather than a predetermined product rollout.


# 17. Expected Outputs & Outcomes

## 17.1 Purpose

This section defines the tangible outputs CAMPUS is expected to produce through its R&D program and the potential outcomes those outputs may enable if subsequent validation supports further development.

The distinction between **outputs** and **outcomes** is intentional:

* **Outputs** are artifacts, evidence, systems, specifications, findings, and documented decisions that the project can directly produce.
* **Outcomes** are changes or benefits that may result from those outputs if the underlying hypotheses are validated and the project proceeds to later stages.
* An expected outcome is **not evidence that the outcome has already occurred**.
* Institutional adoption, operational deployment, user impact, or commercialization must not be represented as outcomes of the current R&D phase unless independently demonstrated.

CAMPUS should therefore be evaluated first by the quality of its research and technical outputs, and only subsequently by evidence that those outputs produce meaningful outcomes.

---

## 17.2 Output Categories

CAMPUS is expected to produce outputs across eight related categories:

1. Research and evidence
2. Conceptual and architectural models
3. Technical specifications
4. Functional prototype
5. User experience and validation artifacts
6. Governance, privacy, security, and provenance models
7. Institutional and integration knowledge
8. Development and decision documentation

These outputs should progressively mature as the project moves from conceptual R&D toward technical and institutional validation.

---

## 17.3 Research Outputs

### 17.3.1 Problem and User Research

Expected outputs include:

* documented problem hypotheses;
* stakeholder and user maps;
* interview and observation findings;
* workflow maps;
* identified discovery and continuity problems;
* validated, weakened, revised, or rejected assumptions;
* user scenarios and task definitions;
* comparative findings against existing ways of discovering information or relationships.

The purpose is not to demonstrate that CAMPUS is needed in advance, but to establish whether the underlying problem is sufficiently real and consequential to justify further development.

### 17.3.2 Relationship-Value Evidence

A central research output should be evidence concerning whether relationships themselves provide useful information beyond isolated records.

This may include findings from tasks such as:

* discovering a person through an organization or course;
* discovering a resource through another resource;
* finding an opportunity through a relevant person or organization;
* understanding an entity through its relationships;
* moving from discovery to an actionable next step;
* identifying relationships that users did not know existed.

The result may support, modify, or weaken the central relational hypothesis.

### 17.3.3 Research Findings

The project should produce documented findings concerning:

* user needs;
* information discovery;
* relationship representation;
* provenance and trust;
* continuity over time;
* interoperability;
* privacy and security;
* local-first feasibility;
* institutional constraints;
* prototype usability;
* technical feasibility.

Negative findings and failed experiments are legitimate research outputs and should be preserved rather than excluded.

---

## 17.4 Conceptual and Architectural Outputs

The principal architectural output is the evolving **CAMPUS R&D Blueprint**.

Supporting outputs should include:

### Conceptual model

A documented model of:

* People;
* Organizations;
* Education;
* Knowledge;
* Research;
* Places and Facilities;
* Activities;
* Opportunities;
* Services and Resources;
* relationships among these entities.

### Relationship model

A formalized representation of relationships including, where applicable:

* relationship type;
* source and target;
* status;
* temporal validity;
* provenance;
* authority;
* visibility;
* permissions;
* contextual metadata.

### Architectural model

Documented architecture showing:

* experience layer;
* application layer;
* relational domain;
* discovery/search;
* integration boundary;
* data layer;
* infrastructure.

### System-boundary model

A clear distinction between:

* information CAMPUS owns;
* information CAMPUS represents;
* information CAMPUS references;
* information CAMPUS imports;
* information CAMPUS synchronizes;
* information that remains authoritative in external institutional systems.

This distinction is particularly important to prevent CAMPUS from unintentionally becoming a duplicate system of record.

---

## 17.5 Technical Outputs

Expected technical outputs include:

* technical requirements;
* logical data model;
* relationship schema;
* API/interface specifications where appropriate;
* identity and authorization model;
* provenance model;
* search/discovery architecture;
* integration patterns;
* deployment architecture;
* security requirements;
* privacy requirements;
* auditability requirements;
* backup and recovery approach;
* local-first/hybrid architecture findings;
* technology evaluation results;
* technical decision records.

Technology choices should be documented together with the requirements and evidence that motivated them.

A selected technology stack should therefore be treated as a **development decision**, not as a permanent definition of CAMPUS architecture.

---

## 17.6 Functional Prototype

A major expected output is a small functional CAMPUS prototype.

The prototype should demonstrate the central architectural hypothesis through a bounded vertical slice rather than attempting to implement the entire vision.

At minimum, the prototype should be capable of demonstrating some combination of:

* identity and basic roles;
* people and organizations;
* selected academic or knowledge entities;
* places and resources;
* relationships;
* search;
* relationship navigation;
* contextual profiles;
* provenance;
* basic permissions and visibility;
* limited activities/opportunities;
* physical-place representation;
* movement from discovery toward an actionable destination.

The prototype should make the following interaction loop demonstrable:

**Search → Entity → Relationship → Context → Discovery → Action**

The prototype itself is both:

1. a software artifact; and
2. a research instrument.

Its purpose is therefore not simply to demonstrate that CAMPUS can be built, but to generate evidence about whether it should be built further and in what form.

---

## 17.7 User Experience and Validation Outputs

Expected outputs include:

* information architecture;
* interaction models;
* relationship-navigation patterns;
* contextual profile designs;
* search/discovery flows;
* provenance and authority indicators;
* permission/visibility patterns;
* accessibility considerations;
* usability-test protocols;
* task-based evaluation results;
* identified usability problems;
* design iterations.

Where possible, the project should preserve evidence of design evolution.

This may include:

**Concept → Prototype → User Test → Finding → Revision → Retest**

This provides a traceable connection between user evidence and design decisions.

---

## 17.8 Governance, Privacy, Security and Provenance Outputs

CAMPUS should produce governance artifacts alongside software rather than treating governance as a later administrative exercise.

Expected outputs include:

### Identity and authorization model

Defining distinctions among:

* authentication;
* identity;
* affiliation;
* role;
* authorization;
* permissions.

### Provenance model

Defining how CAMPUS records:

* source;
* creator;
* authority;
* creation and modification;
* verification;
* external identifiers;
* import mechanisms;
* version/history.

### Information authority model

A documented distinction between:

* official institutional information;
* community-generated information;
* personal opinion;
* unverified information;
* scholarly/research information;
* external information.

### Relationship governance model

A model for determining:

* who may create relationships;
* who may modify them;
* who may verify them;
* who may see them;
* how long they remain valid;
* how disputed relationships are handled;
* how relationships are corrected, superseded, archived, or removed.

### Security outputs

Expected outputs include:

* threat model;
* security requirements;
* access-control model;
* security test findings;
* auditability requirements;
* security-related technical decisions.

### Privacy outputs

Expected outputs include:

* data-minimization requirements;
* data classification assumptions;
* access requirements;
* retention considerations;
* privacy risks;
* relational-privacy analysis;
* treatment of derived or inferred relationships.

---

## 17.9 Institutional and Integration Outputs

A significant R&D output should be a better understanding of the institutional environment in which CAMPUS could potentially operate.

This may include:

* institutional system inventory;
* system ownership map;
* data-authority map;
* identity-provider map;
* integration/interface map;
* information-flow map;
* governance map;
* relevant institutional policies;
* existing and planned digital initiatives;
* potential overlap with existing systems;
* potential integration points;
* identified institutional constraints.

This output is particularly important in the VSU context.

The purpose is not to establish that CAMPUS should replace or compete with existing university systems. Instead, the research should clarify where a relational layer could potentially complement, connect to, reference, or remain separate from existing systems.

The relationship between CAMPUS and VSU digital initiatives, including DIGITS and its associated initiatives, remains subject to institutional discovery and validation.

---

## 17.10 Local-First and Hybrid Architecture Outputs

If the local-first direction proceeds to experimentation, expected outputs may include:

* local-node architecture;
* synchronization model;
* conflict-resolution findings;
* offline-operation findings;
* identity/authentication findings;
* local data-security requirements;
* node registration and recovery model;
* deployment requirements;
* bandwidth and connectivity observations;
* comparison of centralized, local-first, and hybrid approaches.

The output should be an evidence-based architectural assessment rather than an assumption that local-first is inherently preferable.

---

## 17.11 Documentation and Knowledge Outputs

CAMPUS should produce a durable body of technical and research documentation.

Potential outputs include:

* R&D Blueprint versions;
* architecture diagrams;
* data models;
* technical specifications;
* research protocols;
* interview instruments;
* usability-test protocols;
* experiment reports;
* benchmark results;
* threat models;
* governance models;
* decision records;
* assumption registers;
* risk registers;
* prototype documentation;
* deployment documentation;
* validation reports;
* institutional discovery reports.

This documentation is important because the project's intellectual value should not depend solely on the software prototype.

---

# 17.12 Expected Outcomes

The following are **potential outcomes**, not established results.

They should only be treated as supported outcomes if subsequent research produces sufficient evidence.

## Near-Term R&D Outcomes

Potential near-term outcomes include:

* clearer definition of the actual university discovery problem;
* validated or revised CAMPUS hypotheses;
* clearer understanding of valuable university relationships;
* a technically coherent relational architecture;
* identification of architectural boundaries;
* evidence regarding prototype feasibility;
* identification of critical governance and privacy requirements;
* improved understanding of institutional integration constraints.

These outcomes are primarily about **reducing uncertainty**.

---

## Medium-Term Outcomes

If the MVP demonstrates sufficient value and feasibility, potential medium-term outcomes include:

* improved discovery of relevant university information and relationships within a tested context;
* more contextual navigation between people, knowledge, places, resources, and opportunities;
* improved continuity across selected university interactions;
* reusable integration patterns for institutional systems;
* validated approaches to provenance and relationship governance;
* evidence supporting or rejecting selected CAMPUS dimensions.

These outcomes should not be assumed to occur merely because the prototype exists.

---

## Longer-Term Outcomes

If subsequent research, institutional validation, and implementation support them, possible longer-term outcomes could include:

* a reusable digital-campus architecture;
* integration across selected institutional information environments;
* improved continuity across academic, organizational, research, spatial, and community contexts;
* new forms of university-community interaction;
* improved discovery of research, educational, service, or partnership opportunities;
* reusable infrastructure for future university digital transformation initiatives;
* a transferable architecture that could be evaluated in other university environments.

These are strategic possibilities rather than commitments.

---

# 17.13 Potential Strategic Relevance

CAMPUS may eventually contribute to several areas represented in the VSU Strategic Plan 2017–2027.

However, strategic relevance should be treated as **potential contribution**, not proof of impact.

Examples include:

| Strategic area                              | Potential CAMPUS contribution                                                 | Evidence required                      |
| ------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------- |
| World-Class Education                       | Better discovery and continuity across academic relationships                 | User and educational workflow evidence |
| Globally Competitive Science and Technology | Research discovery and technical experimentation                              | Research/user/system evidence          |
| Empowered Communities                       | Community knowledge, organizations, services, and opportunities               | Stakeholder validation                 |
| Sustainable Resource Generation             | Discovery of resources, partnerships, opportunities, and alumni relationships | Institutional and economic evidence    |
| Client-Centered Governance                  | Better navigation of services and institutional information                   | Service workflow testing               |
| Versatile Spaces for Innovation             | Place-aware digital relationships and spatial interfaces                      | Spatial/user research                  |
| Strong Alumni Engagement                    | Persistent alumni, program, organization, and opportunity relationships       | Alumni and institutional validation    |

The existence of a conceptual alignment should not be interpreted as evidence that CAMPUS has already produced these effects.

---

# 17.14 Output-to-Outcome Evidence Chain

The project should maintain an explicit chain between what it produces and what it claims.

**Research**

Problem evidence
↓
Hypothesis
↓
Prototype
↓
Experiment / User Test
↓
Finding
↓
Architectural or Product Decision
↓
Validated Capability
↓
Potential Outcome

For example:

**Relationship model**
→ prototype relationship navigation
→ user task testing
→ measured discovery behavior
→ evidence regarding relational value
→ architecture revised or retained.

Similarly:

**Integration architecture**
→ controlled integration experiment
→ technical/system-owner evaluation
→ interoperability finding
→ integration pattern retained, revised, or rejected.

This prevents the project from treating the existence of an artifact as proof of its effectiveness.

---

# 17.15 Expected Deliverables by Development Stage

| Stage                    | Primary expected outputs                                              |
| ------------------------ | --------------------------------------------------------------------- |
| Blueprint Consolidation  | CAMPUS R&D Blueprint, definitions, architecture, MVP boundary         |
| Discovery                | User research, workflow maps, system inventory, institutional context |
| Specification            | Technical specifications, data model, governance requirements         |
| Technical Experiments    | Benchmarks, feasibility findings, architecture decisions              |
| MVP Prototype            | Functional relational digital-campus prototype                        |
| Validation               | User-test results, technical findings, security/privacy findings      |
| Institutional Validation | Integration assessment, governance assessment, pilot decision         |
| Selective Expansion      | Validated additional dimensions and corresponding specifications      |

This staged model prevents the project from producing a large quantity of software before the underlying assumptions have been tested.

---

# 17.16 Success Evidence

For the current R&D phase, success should be defined primarily through evidence rather than adoption.

Relevant indicators include:

### Research

* important assumptions tested;
* meaningful positive or negative findings obtained;
* research questions answered or narrowed;
* competing explanations considered.

### Architecture

* relational model is coherent;
* system boundaries are explicit;
* identity, provenance, privacy, and authorization are represented;
* architecture can evolve without uncontrolled duplication.

### Technical

* core relationships can be represented and queried;
* discovery flows function;
* permissions operate as intended;
* provenance can be maintained;
* selected integrations are technically feasible;
* deployment requirements are understood.

### User

* users can understand relationship-oriented navigation;
* tested tasks can be completed;
* relational context provides demonstrable value in selected tasks;
* usability problems are identified and addressed through iteration.

### Institutional

* relevant systems and authorities are better understood;
* potential integration boundaries are documented;
* institutional constraints are identified;
* deployment requirements are explicit.

### Governance

* relationship creation and visibility can be controlled;
* authoritative and non-authoritative information can be distinguished;
* privacy and security risks are documented;
* correction and dispute mechanisms are considered.

---

# 17.17 What These Outputs Do Not Establish

Producing the outputs described in this section does **not** by itself establish that:

* CAMPUS should be deployed institution-wide;
* CAMPUS should replace an existing VSU system;
* CAMPUS should become part of DIGITS;
* VSU has adopted CAMPUS;
* users will adopt CAMPUS;
* CAMPUS improves university outcomes at institutional scale;
* the relational model is universally superior;
* local-first architecture is appropriate for every university;
* a particular technology stack is suitable for production;
* the full CAMPUS vision should be implemented;
* CAMPUS is commercially viable.

Those claims require additional evidence and, where relevant, institutional decisions.

---

# 17.18 Expected Outcomes by Maturity Level

The project should distinguish maturity explicitly:

### R&D

**Primary question:**
Can the problem, architecture, and core hypothesis be demonstrated and tested?

### Prototype

**Primary question:**
Does a bounded implementation produce useful evidence?

### Pilot

**Primary question:**
Does the validated capability work within an authorized real institutional context?

### Production

**Primary question:**
Can the capability be operated sustainably, securely, governably, and at the required scale?

### Institutional adoption

**Primary question:**
Has the institution independently decided to adopt, operate, fund, or integrate the capability?

Each level requires different evidence.

Progressing from one level to another should therefore be treated as a **decision**, not as an automatic consequence of successful development.

---

# 17.19 Current Status

### Established

* The project can directly produce research, architectural, technical, prototype, governance, and documentation outputs.
* Outputs should be distinguished from outcomes.
* Prototype development is intended to generate evidence, not establish adoption.
* Strategic relevance is different from demonstrated strategic impact.
* Institutional deployment requires additional validation and authorization.

### Proposed

* The output categories and staged deliverables described in this section.
* The output-to-outcome evidence chain.
* The maturity-level distinction between R&D, prototype, pilot, production, and adoption.
* The proposed success-evidence framework.

### Unresolved

* Which outcomes will ultimately be demonstrated.
* Whether the relational model produces measurable improvement over existing approaches.
* Whether CAMPUS will progress beyond MVP.
* Which institutional systems could eventually be integrated.
* Whether VSU or another institution would participate in a pilot.
* Whether the project would become an institutional platform, research architecture, component, independent product, or another form.
* Whether commercialization is appropriate or viable.
* Which long-term CAMPUS dimensions will survive validation.

---

## 17.20 Section Conclusion

The immediate objective of CAMPUS is not to claim that a new digital-campus platform will transform the university.

The immediate objective is to produce enough **research evidence, architectural clarity, technical capability, and institutional understanding** to determine whether such a platform is justified, what form it should take, and where its boundaries should be drawn.

Accordingly, the most important output of the current phase is not merely software.

It is a defensible body of evidence from which subsequent technical, institutional, research, funding, and development decisions can be made.

The project should be considered successful at this stage if it can **reduce uncertainty, demonstrate or disprove important hypotheses, and produce a credible basis for the next decision**.


# 18. Open Questions & Decision Register

## 18.1 Purpose

This section serves as the control layer for the CAMPUS R&D Blueprint.

The preceding sections establish the current conceptual, architectural, technical, institutional, research, governance, resource, risk, and output foundations of CAMPUS. However, important questions remain unresolved.

Those questions should not be hidden or prematurely resolved.

The purpose of this section is to:

* preserve important uncertainty;
* distinguish questions from decisions and assumptions;
* identify evidence gaps;
* prioritize unresolved questions according to their dependency and urgency;
* assign provisional ownership to research and decision work;
* identify which questions must be resolved before particular development stages;
* establish conditions under which decisions should be revisited;
* maintain traceability between evidence, decisions, and implementation;
* prevent outdated assumptions from silently becoming project requirements.

The registers in this section should be maintained as living project artifacts.

---

# 18.2 Status Vocabulary

The following status vocabulary should be used consistently.

### Established

Supported by authoritative information, documented evidence, research, testing, or an explicit CAMPUS project decision.

### Proposed

A current CAMPUS design hypothesis, architectural direction, research method, or development proposal that remains subject to validation.

### Unresolved

A question for which sufficient evidence or authority does not yet exist.

### Investigating

The question is actively being researched or tested, but no decision has yet been reached.

### Deferred

The question is intentionally postponed because it is not required for the current development stage.

### Rejected

A previously considered approach that has been intentionally excluded based on evidence, scope, feasibility, governance, or strategic reasoning.

These categories should not be conflated.

In particular:

**Proposed ≠ Established**

and

**Deferred ≠ Rejected.**

---

# 18.3 Priority Model

Open questions should be prioritized according to their effect on the project rather than simply their conceptual importance.

### P0 — Blocking / Immediate

Questions that must be answered sufficiently to define a credible MVP research experiment.

### P1 — High

Questions that may materially affect the architecture, system boundary, institutional compatibility, or MVP design and should be investigated early.

### P2 — Important / Parallel

Questions that should be investigated during MVP development and validation but should not block the initial bounded experiment.

### P3 — Pilot / Later Stage

Questions that become important if the project progresses toward institutional pilot or production.

### P4 — Strategic / Conditional

Questions that should remain open until evidence justifies addressing them.

Priority does not mean that a question will necessarily be answered permanently. It indicates when the project needs enough evidence to make a responsible decision.

---

# 18.4 Prioritized Open Questions Register

The following is the primary working register for unresolved CAMPUS questions.

| ID     | Priority | Question                                                                                  | Status     | Provisional Owner                           | Evidence / Method                                             | Decision Stage                 | Dependency                         |
| ------ | -------- | ----------------------------------------------------------------------------------------- | ---------- | ------------------------------------------- | ------------------------------------------------------------- | ------------------------------ | ---------------------------------- |
| RQ-01  | P0       | Is the underlying problem sufficiently real and meaningful?                               | Unresolved | R&D/Product Lead + Research                 | Interviews, observation, workflow analysis, comparative tasks | Before MVP commitment          | None                               |
| RQ-02  | P0       | Who are the primary users for the first experiment?                                       | Unresolved | R&D/Product Lead + UX/Research              | Stakeholder/user research                                     | MVP definition                 | RQ-01                              |
| RQ-03  | P0       | Which tasks should the MVP actually test?                                                 | Unresolved | R&D/Product Lead + Research/UX              | Task analysis and user research                               | MVP definition                 | RQ-01, RQ-02                       |
| RQ-04  | P0       | Does relationship-oriented discovery provide meaningful value?                            | Unresolved | Research + Product                          | Comparative task testing                                      | MVP validation                 | RQ-03                              |
| RQ-05  | P0       | Which relationships create that value?                                                    | Unresolved | Product + Architecture/Research             | Relationship mapping and prototype testing                    | MVP specification              | RQ-03, RQ-04                       |
| RQ-06  | P0       | What is the smallest entity/relationship model capable of testing the hypothesis?         | Unresolved | Architecture + Product                      | Data modeling and prototype experiment                        | MVP specification              | RQ-05                              |
| RQ-07  | P0       | What data can safely populate the MVP?                                                    | Unresolved | Product + Governance                        | Data/source inventory                                         | Before implementation          | RQ-03                              |
| RQ-08  | P0       | What evidence will count as success, failure, or revision?                                | Unresolved | Research + Product                          | Validation design                                             | Before testing                 | RQ-04                              |
| RQ-09  | P0       | What conditions would cause the MVP to be narrowed, revised, or stopped?                  | Proposed   | Product + Research                          | Decision-gate design                                          | Before validation              | RQ-08                              |
| AQ-01  | P1       | Which relationships require first-class metadata?                                         | Unresolved | Architecture + Governance                   | Use cases and data-model experiments                          | MVP architecture               | RQ-05                              |
| AQ-02  | P1       | How should temporal relationships be represented?                                         | Unresolved | Architecture + Research                     | Temporal use cases                                            | MVP architecture               | RQ-05                              |
| AQ-03  | P1       | How should explicit, derived, and inferred relationships differ?                          | Unresolved | Architecture + Governance                   | Data/provenance research                                      | MVP architecture               | AQ-01                              |
| IQ-01  | P1       | What identity mechanism is sufficient for the prototype?                                  | Unresolved | Architecture + Security                     | Prototype authentication experiment                           | MVP architecture               | RQ-07                              |
| IQ-02  | P1       | What permissions and visibility controls are required?                                    | Unresolved | Security/Governance + Architecture          | Authorization model and threat analysis                       | MVP architecture               | IQ-01                              |
| KQ-01  | P1       | What constitutes authoritative information?                                               | Unresolved | Governance + Institutional Liaison          | Source/authority research                                     | MVP data model                 | RQ-07                              |
| KQ-02  | P1       | How should provenance be represented and displayed?                                       | Unresolved | Architecture + UX/Governance                | Provenance experiment and usability testing                   | MVP architecture               | KQ-01                              |
| KQ-03  | P1       | How should conflicting information be represented?                                        | Unresolved | Governance + Product                        | Source/authority research                                     | MVP governance                 | KQ-01                              |
| SQ-01  | P1       | What relevant institutional systems already exist?                                        | Unresolved | Institutional Liaison + Architecture        | System inventory                                              | Early R&D                      | None                               |
| SQ-02  | P1       | Who owns or governs relevant systems and data?                                            | Unresolved | Institutional Liaison                       | Institutional discovery                                       | Early R&D                      | SQ-01                              |
| SQ-03  | P1       | What is authoritative for each relevant data category?                                    | Unresolved | Institutional Liaison + Architecture        | Data-authority mapping                                        | Integration planning           | SQ-01, SQ-02                       |
| SQ-04  | P1       | What interfaces or integration mechanisms are available?                                  | Unresolved | Architecture + Institutional Liaison        | API/export/interface investigation                            | Technical planning             | SQ-01                              |
| SQ-05  | P1       | What policies govern relevant institutional data?                                         | Unresolved | Governance/Security + Institutional Liaison | Policy and privacy review                                     | Before real institutional data | SQ-01                              |
| SQ-06  | P1       | What current or planned initiatives overlap with CAMPUS?                                  | Unresolved | Institutional Liaison + Product             | Institutional roadmap discovery                               | Institutional positioning      | SQ-01                              |
| SQ-07  | P1       | What is the actual institutional relationship between CAMPUS and DIGITS?                  | Unresolved | Institutional Liaison + Product             | Institutional discussion and evidence                         | Institutional validation       | SQ-06                              |
| TQ-01  | P1       | Can the relational model support the required discovery tasks with acceptable complexity? | Unresolved | Architecture + Engineering                  | Technical prototype                                           | MVP architecture               | RQ-06                              |
| TQ-02  | P1       | What storage architecture is appropriate?                                                 | Unresolved | Architecture + Engineering                  | Relational/graph/hybrid experiment                            | MVP architecture               | TQ-01                              |
| TQ-03  | P1       | What search architecture is sufficient?                                                   | Unresolved | Engineering + Product                       | Search/traversal experiments                                  | MVP architecture               | RQ-04                              |
| TQ-04  | P1       | Can provenance and authorization be implemented without disproportionate complexity?      | Unresolved | Engineering + Security                      | Technical experiments                                         | MVP architecture               | IQ-02, KQ-02                       |
| TQ-05  | P1       | What deployment model is sufficient for the MVP?                                          | Unresolved | Architecture/Infrastructure                 | Local/controlled-hosting comparison                           | MVP implementation             | TQ-01                              |
| MQ-01  | P1       | Is the MVP still sufficiently small to function as a research instrument?                 | Proposed   | Product + R&D Lead                          | Scope review                                                  | Throughout MVP                 | RQ-03                              |
| MQ-02  | P1       | Which conceptual entities are actually necessary?                                         | Unresolved | Product + Architecture                      | Use-case decomposition                                        | MVP specification              | RQ-03                              |
| MQ-03  | P1       | What is the minimum viable relationship vocabulary?                                       | Unresolved | Product + Architecture                      | Relationship/use-case mapping                                 | MVP specification              | RQ-05                              |
| UX-01  | P2       | Can users understand relationship-oriented navigation without excessive explanation?      | Unresolved | UX + Research                               | Usability testing                                             | MVP validation                 | RQ-04                              |
| UX-02  | P2       | Does contextual relationship information reduce or increase cognitive load?               | Unresolved | UX + Research                               | Comparative usability testing                                 | MVP validation                 | UX-01                              |
| UX-03  | P2       | How much relationship information is useful before overload occurs?                       | Unresolved | UX + Research                               | Prototype testing                                             | MVP validation                 | UX-01                              |
| UX-04  | P2       | Can users distinguish authoritative from community-generated information?                 | Unresolved | UX + Governance                             | Usability testing                                             | MVP validation                 | KQ-02                              |
| GOV-01 | P2       | Who may create different relationship types?                                              | Unresolved | Governance + Product                        | Governance research                                           | MVP governance                 | AQ-01                              |
| GOV-02 | P2       | Who may verify relationships?                                                             | Unresolved | Governance + Institutional Liaison          | Governance research                                           | MVP governance                 | KQ-01                              |
| GOV-03 | P2       | How should disputed relationships be handled?                                             | Unresolved | Governance                                  | Governance design                                             | MVP/pilot                      | GOV-01                             |
| GOV-04 | P2       | What relationship history should remain visible?                                          | Unresolved | Governance + Privacy                        | Temporal/privacy research                                     | MVP/pilot                      | AQ-02                              |
| SEC-01 | P2       | What is the minimum credible threat model for the MVP?                                    | Unresolved | Security + Architecture                     | Threat modeling                                               | Before sensitive data          | IQ-02                              |
| SEC-02 | P2       | Which relationships become sensitive when combined?                                       | Unresolved | Security/Privacy + Research                 | Relational privacy analysis                                   | MVP/pilot                      | KQ-01                              |
| SEC-03 | P2       | What information should not be inferred automatically?                                    | Unresolved | Governance + Security                       | Privacy/inference analysis                                    | MVP/future AI                  | AQ-03                              |
| LFQ-01 | P2       | Does local-first solve a demonstrated problem in the target context?                      | Unresolved | Architecture + Research                     | Connectivity/workflow experiments                             | Architecture research          | RQ-01                              |
| LFQ-02 | P2       | Which data actually needs local availability?                                             | Unresolved | Architecture + Governance                   | Data/use-case analysis                                        | Local-first experiment         | LFQ-01                             |
| LFQ-03 | P2       | How should synchronization and conflict resolution work?                                  | Deferred   | Architecture/Engineering                    | Distributed-systems experiment                                | Later R&D                      | LFQ-01                             |
| BQ-01  | P2       | What resources are actually available for the MVP?                                        | Unresolved | R&D/Product Lead                            | Team/resource assessment                                      | MVP planning                   | MVP scope                          |
| BQ-02  | P2       | What is the defensible MVP budget?                                                        | Unresolved | Product + Finance/Planning                  | Scope/resource estimation                                     | Before funded implementation   | BQ-01                              |
| PQ-01  | P3       | What institutional data can be used in a pilot?                                           | Unresolved | Institutional Liaison + Governance          | Data-authority/policy review                                  | Pilot                          | SQ-03, SQ-05                       |
| PQ-02  | P3       | Who would own or sponsor a pilot?                                                         | Unresolved | Institutional Liaison                       | Institutional consultation                                    | Pilot                          | SQ-07                              |
| PQ-03  | P3       | What production identity infrastructure should be used?                                   | Deferred   | Architecture + ICT Liaison                  | System discovery                                              | Pilot                          | IQ-01                              |
| PQ-04  | P3       | What production integration interfaces are available?                                     | Deferred   | Architecture + ICT Liaison                  | Technical discovery                                           | Pilot                          | SQ-04                              |
| PQ-05  | P3       | What security/privacy approvals are required for pilot operation?                         | Deferred   | Governance/Security                         | Institutional review                                          | Pilot                          | SQ-05                              |
| PQ-06  | P3       | What infrastructure, support, monitoring, and maintenance model is required?              | Deferred   | Infrastructure + Institutional Liaison      | Pilot planning                                                | Pilot                          | PQ-01, PQ-02                       |
| PQ-07  | P3       | What is the pilot-specific budget?                                                        | Deferred   | Product + Finance/Planning                  | Pilot re-estimation                                           | Pilot                          | PQ-01–PQ-06                        |
| FQ-01  | P4       | What evidence would justify CCLR expansion?                                               | Deferred   | Product + Education/Research                | Future research                                               | Post-MVP                       | MVP evidence                       |
| FQ-02  | P4       | What evidence would justify Pathways expansion?                                           | Deferred   | Product + Research                          | Future research                                               | Post-MVP                       | MVP evidence                       |
| FQ-03  | P4       | What evidence would justify Research expansion?                                           | Deferred   | Product + Research                          | Research-system/user study                                    | Post-MVP                       | MVP evidence                       |
| FQ-04  | P4       | What evidence would justify advanced Spatial/Digital Twin capabilities?                   | Deferred   | Product + Spatial/Technical                 | Spatial use-case research                                     | Post-MVP                       | Place evidence                     |
| FQ-05  | P4       | What evidence would justify GIS/analytics capabilities?                                   | Deferred   | Product + Research                          | Decision-use-case research                                    | Post-MVP                       | Validated use case                 |
| FQ-06  | P4       | What specific problem would justify AI capabilities?                                      | Deferred   | Product + Research/Architecture             | AI-vs-non-AI experiment                                       | Post-MVP                       | Validated use case                 |
| IPQ-01 | P4       | What institutional or independent IP model is appropriate?                                | Unresolved | R&D Lead + Institutional/Legal Adviser      | Policy/contracts/funding review                               | Partnership/commercialization  | Institutional relationship         |
| IPQ-02 | P4       | What is the eventual institutional status of CAMPUS?                                      | Unresolved | R&D Lead + Institutional Liaison            | Institutional discussion                                      | Later-stage                    | Validation outcomes                |
| CQ-01  | P4       | Is CAMPUS commercially viable or should it remain primarily an R&D architecture?          | Unresolved | R&D/Product Lead                            | Market/strategy research                                      | Post-validation                | MVP/pilot evidence                 |
| CQ-02  | P4       | Is the architecture transferable beyond the original institutional context?               | Unresolved | R&D/Research                                | Comparative research                                          | Later-stage                    | Technical + institutional evidence |

### Register notes

1. **Owner is provisional.** It identifies the role that should coordinate the question, not necessarily the individual who will ultimately perform the work.
2. **Status should change as evidence accumulates.**
3. **Priority should be revisited when dependencies change.**
4. A question may be investigated without requiring a final answer.
5. A deferred question should not be interpreted as unimportant; it is intentionally outside the current decision boundary.

---

# 18.5 MVP Blocking Set

Although the full register is extensive, only a small subset should initially control MVP readiness.

The current MVP blocking set is:

### Problem

* RQ-01 — Is the problem real and meaningful?
* RQ-02 — Who are the primary users?
* RQ-03 — Which tasks should be tested?

### Relational hypothesis

* RQ-04 — Does relationship-oriented discovery provide meaningful value?
* RQ-05 — Which relationships create that value?

### Scope

* RQ-06 — What is the minimum entity/relationship model?
* MQ-01 — Is the MVP sufficiently small?
* MQ-02 — Which entities are actually necessary?
* MQ-03 — What is the minimum relationship vocabulary?

### Data and trust

* RQ-07 — What data can safely be used?
* KQ-01 — What constitutes authoritative information?
* KQ-02 — How should provenance work?

### Identity and security

* IQ-01 — What identity mechanism is sufficient?
* IQ-02 — What permissions are required?
* SEC-01 — What is the minimum threat model?

### Validation

* RQ-08 — What constitutes success/failure?
* RQ-09 — What causes revision, narrowing, or stopping?

These questions define the **minimum decision boundary for a credible MVP**.

They do not require that every production-level question be solved.

---

# 18.6 Questions That May Remain Open During MVP

The following can remain unresolved while the bounded prototype proceeds, provided the prototype can safely operate without them:

* production identity integration;
* university-wide data integration;
* final enterprise database choice;
* final API architecture;
* production hosting;
* institution-wide governance;
* full local-first architecture;
* complete synchronization architecture;
* CCLR;
* Pathways;
* full research collaboration;
* advanced GIS;
* digital twin;
* analytics;
* AI;
* commercialization model;
* final institutional ownership.

The prototype should instead use:

* synthetic data;
* public information;
* project-created data;
* controlled test accounts;
* mock integrations;
* simulated institutional systems.

This allows technical and user hypotheses to be tested without prematurely requiring institutional production access.

---

# 18.7 Questions That Become Active Only at Pilot

A question should move from **Deferred** to **Investigating** when the project reaches the relevant decision gate.

For a potential institutional pilot, the active question set becomes:

1. What institutional data may be used?
2. Who owns that data?
3. Who owns/sponsors the pilot?
4. What identity system is authorized?
5. What integrations are permitted?
6. What privacy/security review is required?
7. What infrastructure will operate the system?
8. Who supports it?
9. What governance applies?
10. What is the pilot-specific budget?
11. What evidence will determine continuation or termination?

The project should not engineer these requirements in full before there is a legitimate pilot pathway.

---

# 18.8 Decision Register

The Decision Register records what the project has currently decided, independently of unresolved questions.

| ID    | Decision                                                                                               | Status      | Evidence / Rationale                        | Revisit Trigger                                      |
| ----- | ------------------------------------------------------------------------------------------------------ | ----------- | ------------------------------------------- | ---------------------------------------------------- |
| D-001 | CAMPUS is an independently initiated R&D concept, not an adopted institutional system.                 | Established | Current project status                      | Formal institutional action                          |
| D-002 | CAMPUS is a digital-campus architecture rather than a collection of isolated features.                 | Established | Core project definition                     | Evidence invalidates architectural model             |
| D-003 | Relationships are first-class architectural elements.                                                  | Established | Central research hypothesis                 | Testing shows insufficient relational value          |
| D-004 | Existing specialized systems should retain authority where appropriate.                                | Established | Prevents unnecessary duplication            | System discovery identifies justified exception      |
| D-005 | Identity, authorization, provenance, privacy, and security are foundational concerns.                  | Established | Architecture/governance requirements        | Evidence supports alternative safe model             |
| D-006 | Search/discovery is a core MVP capability.                                                             | Established | Central hypothesis                          | User research identifies different primary mechanism |
| D-007 | Basic place representation is within the current MVP direction.                                        | Proposed    | Physical/digital relationship               | MVP evidence shows insufficient value                |
| D-008 | Full digital twin is outside the MVP.                                                                  | Established | Scope discipline                            | Separate validated use case                          |
| D-009 | CCLR is a later dimension.                                                                             | Deferred    | Dependency and scope                        | Evidence identifies justified bounded experiment     |
| D-010 | Pathways is a later dimension.                                                                         | Deferred    | Requires broader continuity evidence        | Validated use case                                   |
| D-011 | Research collaboration is a later dimension.                                                           | Deferred    | Requires deeper research-system integration | Validated bounded use case                           |
| D-012 | Local-first is a research direction, not a fixed requirement.                                          | Established | Requires contextual evidence                | Experiment establishes necessity                     |
| D-013 | AI is not foundational to the MVP.                                                                     | Established | Core hypothesis does not require AI         | Evidence establishes necessary AI use case           |
| D-014 | Prototype data should initially be synthetic, public, project-created, or otherwise safely authorized. | Established | Privacy/integration risk control            | Authorized institutional data becomes appropriate    |
| D-015 | The prototype is both software artifact and research instrument.                                       | Established | R&D methodology                             | Transition to operational stage                      |
| D-016 | Strategic alignment does not constitute institutional endorsement.                                     | Established | Evidence discipline                         | Formal institutional action                          |
| D-017 | The CAMPUS/DIGITS relationship remains unresolved.                                                     | Established | Institutional architecture not yet verified | Institutional/system discovery                       |
| D-018 | Production architecture should not be fixed during conceptual R&D.                                     | Established | Requirements/evidence incomplete            | Pilot requirements mature                            |
| D-019 | MVP scope should remain bounded around relational discovery.                                           | Proposed    | Prevents feature accumulation               | Validation identifies necessary expansion            |
| D-020 | Future dimensions require evidence before expansion.                                                   | Established | Stage-gated R&D                             | Evidence threshold reached                           |

---

# 18.9 Assumption Register

The Assumption Register records working propositions that influence development but have not yet been established.

| ID    | Assumption                                                                                                       | Status     | Validation Method                        | Owner                              |
| ----- | ---------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------- | ---------------------------------- |
| A-001 | University information and resources can be meaningfully represented as relationships.                           | Unresolved | Data modeling + user research            | Architecture/Research              |
| A-002 | Users benefit from relationship-oriented discovery.                                                              | Unresolved | Comparative task testing                 | Research/UX                        |
| A-003 | Contextual relationships can reduce discovery effort.                                                            | Unresolved | Usability experiment                     | Research/UX                        |
| A-004 | Relationships can coexist with conventional institutional records without creating a competing system of record. | Proposed   | Integration experiment                   | Architecture                       |
| A-005 | Provenance can be made understandable to users.                                                                  | Unresolved | UX testing                               | UX/Governance                      |
| A-006 | Relationship permissions can be implemented without disproportionate complexity.                                 | Unresolved | Technical/security experiment            | Architecture/Security              |
| A-007 | Temporal relationships are necessary for meaningful continuity.                                                  | Unresolved | Use-case research                        | Research/Architecture              |
| A-008 | A bounded relational model can support useful prototype scenarios.                                               | Unresolved | MVP implementation                       | Product/Architecture               |
| A-009 | Local-first architecture may provide meaningful value in some university contexts.                               | Unresolved | Connectivity/deployment experiments      | Architecture/Research              |
| A-010 | CAMPUS can remain a layer rather than becoming a competing system of record.                                     | Proposed   | System-boundary and integration research | Architecture/Institutional Liaison |

Assumptions should be validated, revised, retired, rejected, or promoted to established decisions only when appropriate evidence exists.

---

# 18.10 Evidence Register

The Evidence Register connects important project claims and decisions to their supporting basis.

For each significant claim or decision, record:

* claim or finding;
* evidence type;
* source;
* date;
* confidence;
* interpretation;
* affected decision;
* contradictory evidence, if any;
* current/relevance status;
* responsible researcher.

Relevant evidence classes include:

* institutional documents;
* user interviews;
* observations;
* surveys;
* technical experiments;
* usability tests;
* architecture benchmarks;
* security/privacy analysis;
* scholarly literature;
* system documentation;
* stakeholder consultation;
* prototype evidence.

The register should distinguish **observation** from **interpretation**.

Evidence should be capable of changing a decision rather than functioning only as justification for an existing preference.

---

# 18.11 Decision-Making Rules

Future CAMPUS decisions should follow these rules.

### Rule 1 — Evidence before expansion

A technically interesting capability should not enter the roadmap merely because it can be built.

### Rule 2 — Problem before feature

Every major capability should have a documented problem and user need.

### Rule 3 — Relationship before accumulation

New capabilities should strengthen the relational model or generate evidence needed to evaluate it.

### Rule 4 — Integration before duplication

Before creating a new institutional data function, determine whether an existing authoritative system already performs it.

### Rule 5 — Permission before institutional data

Real institutional data should not enter the prototype simply because it is technically accessible.

### Rule 6 — Provenance before trust claims

Information should not be presented as authoritative without an appropriate basis for authority.

### Rule 7 — Prototype before production commitment

Production requirements should emerge from validated use cases rather than assumptions made during conceptual design.

### Rule 8 — Reversibility where possible

Early architectural and technical decisions should remain replaceable until sufficient evidence justifies commitment.

### Rule 9 — Negative evidence is valid evidence

If an experiment demonstrates that a feature, architecture, or hypothesis does not provide sufficient value, the project should be willing to narrow or remove it.

### Rule 10 — Institutional decisions remain institutional

CAMPUS research can identify options and evidence, but institutional ownership, adoption, integration, deployment, funding, and policy decisions must be made through appropriate institutional processes.

---

# 18.12 Decision Gates

The Blueprint establishes six major decision gates.

## Gate 1 — Problem

**Question:**
Is there sufficient evidence that the problem is meaningful?

**Possible outcomes:**

* proceed;
* revise problem definition;
* narrow use case;
* stop.

---

## Gate 2 — Relational Value

**Question:**
Do relationships provide measurable or observable value beyond appropriate existing discovery methods?

**Possible outcomes:**

* proceed;
* revise relational model;
* narrow relationship scope;
* research only;
* stop.

---

## Gate 3 — Technical Feasibility

**Question:**
Can the core relational architecture be implemented with acceptable complexity?

**Possible outcomes:**

* proceed;
* change architecture;
* reduce scope;
* research alternative;
* stop.

---

## Gate 4 — Institutional Compatibility

**Question:**
Can CAMPUS coexist with relevant institutional systems, governance, identity, and data authorities?

**Possible outcomes:**

* proceed toward controlled pilot;
* revise boundaries;
* pursue research collaboration only;
* remain independent;
* stop.

---

## Gate 5 — User Value

**Question:**
Does the tested capability provide sufficient value to justify continued development?

**Possible outcomes:**

* expand selectively;
* revise;
* narrow;
* research only;
* stop.

---

## Gate 6 — Expansion

**Question:**
Is there sufficient evidence to justify adding another CAMPUS dimension?

**Possible outcomes:**

* add selected dimension;
* conduct additional research;
* defer;
* reject.

---

# 18.13 Immediate Next Actions

Following completion of Blueprint v0.1, the project should prioritize the following sequence.

### 1. Freeze the conceptual baseline

Treat the Blueprint as the current conceptual baseline.

New ideas should be recorded as proposed changes rather than silently inserted into the architecture.

### 2. Resolve the P0 question set

Prioritize:

* problem;
* users;
* tasks;
* relational value;
* minimum model;
* safe data;
* validation criteria;
* stop/revise conditions.

### 3. Conduct institutional discovery in parallel

Investigate:

* relevant systems;
* ownership;
* data authority;
* identity;
* interfaces;
* policies;
* current/planned initiatives;
* the unresolved CAMPUS/DIGITS relationship.

This should inform the prototype without making institutional integration a prerequisite for safe early experimentation.

### 4. Specify technical experiments

Prioritize the highest-risk assumptions:

* relationship representation;
* traversal;
* search;
* provenance;
* authorization;
* temporal relationships;
* external references;
* local-first feasibility where justified.

### 5. Build the smallest functional vertical slice

Implement enough to test:

**Search → Entity → Relationship → Context → Discovery → Action**

### 6. Record evidence continuously

Update the Evidence, Assumption, and Decision Registers as findings emerge.

### 7. Conduct the first validation gate

Do not expand the prototype until evidence supports doing so.

---

# 18.14 Blueprint Change Control

The CAMPUS R&D Blueprint should be treated as a living research document.

Each meaningful revision should record:

* version;
* date;
* change;
* reason;
* evidence;
* affected sections;
* decision;
* unresolved consequences;
* owner.

### Change categories

**Clarification**
Improves wording without materially changing the architecture.

**Evidence Update**
Adds or changes factual support.

**Architectural Change**
Changes the proposed system model.

**Scope Change**
Adds, removes, or changes capabilities.

**Research Finding**
Changes a hypothesis or interpretation.

**Institutional Discovery**
Changes understanding of existing systems or constraints.

**Decision Reversal**
Reverses a previous decision based on new evidence.

The change history should preserve previous decisions rather than silently overwriting them.

---

# 18.15 Blueprint Version 0.1 Baseline

At the completion of this section, **CAMPUS R&D Blueprint v0.1** establishes the following baseline.

### Project identity

CAMPUS is an independently initiated R&D concept for an experimental digital-campus architecture.

### Central hypothesis

A persistent, permission-aware, provenance-aware relational layer may improve discovery, understanding, interaction, and continuity among university people, knowledge, education, research, places, services, opportunities, communities, and resources.

### Architectural principle

Relationships are treated as first-class elements rather than merely incidental links between independent records.

### System boundary

CAMPUS is intended to operate as a layer alongside existing specialized systems rather than automatically replacing them.

### MVP

The MVP focuses on:

* identity;
* people;
* organizations;
* selected knowledge/education entities;
* places;
* relationships;
* search/discovery;
* contextual navigation;
* provenance;
* basic permissions;
* limited action-oriented interaction.

### Research method

The project follows:

**Problem → Evidence → Hypothesis → Prototype → Test → Evidence → Revision → Decision**

### Expansion principle

CCLR, Pathways, Research, Spatial/Digital Twin, Local-First, GIS, Analytics, and AI remain conditional dimensions rather than automatic commitments.

### Institutional relationship

The relationship between CAMPUS and VSU, its existing systems, and initiatives such as DIGITS remains subject to institutional discovery and validation.

### Evidence discipline

Established facts, proposed architecture, and unresolved questions must remain explicitly distinguished.

### Development philosophy

The project prioritizes:

**Infrastructure + Relationships + Evidence**

over:

**Feature Count + Premature Scale + Unvalidated Complexity**

---

# 18.16 Blueprint Maturity Statement

CAMPUS R&D Blueprint v0.1 should be understood as a **consolidated research and architectural baseline**, not a finished product specification.

It is sufficiently mature to support:

* structured technical experiments;
* bounded prototype development;
* user research;
* institutional discovery;
* architectural evaluation;
* research proposals;
* early technical discussions;
* controlled stakeholder presentations.

It is not yet sufficient to justify:

* institution-wide deployment;
* production integration;
* unrestricted institutional data access;
* final technology selection;
* full-scale implementation;
* adoption claims;
* commercialization claims.

The next stage therefore moves from **conceptual consolidation** toward **evidence generation**.

---

# 18.17 Final Project Decision Principle

The most important decision principle for CAMPUS is:

> **The project should be allowed to become smaller, different, or even unnecessary if the evidence indicates that this is the correct conclusion.**

This is essential to maintaining CAMPUS as an R&D project rather than turning the Blueprint into a justification document for a predetermined product.

The purpose of the Blueprint is therefore not to prove that the entire CAMPUS vision should exist.

Its purpose is to create a disciplined framework through which the project can discover:

* what should exist;
* what should not exist;
* what should be integrated;
* what should remain separate;
* what should be tested;
* and what evidence is required before each decision is made.

---

# 18.18 Section Conclusion

With this refinement, Section 18 provides a complete control structure for CAMPUS:

**Open Questions → Priorities → Owners → Evidence → Assumptions → Decisions → Gates → Actions → Change Control**

The full Blueprint now provides a coherent progression:

**Definition → Problem → Research Questions → Architecture → Dimensions → MVP → Technical Architecture → Institutional Alignment → Methodology → Roadmap → Resources → Budget → Governance → Risks → Outputs/Outcomes → Open Questions & Decisions**

The Blueprint should now be considered **structurally complete at v0.1**.

The project should not respond to this completeness by adding more conceptual dimensions.

The next phase is evidence generation:

**Problem → Evidence → Prototype → Test → Decision**

The central question is no longer:

> **“What could CAMPUS become?”**

It is:

> **“What can CAMPUS demonstrate, what can the evidence disprove, and what should we do next as a result?”**

That transition marks the shift from conceptual consolidation into structured CAMPUS R&D.
