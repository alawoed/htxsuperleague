# Website and Software Product Requirements

**Status:** Draft PRD  
**Product owner:** To be assigned  
**Build gate:** Founder approval after business, competition, finance, and risk decisions

## Product vision

Create one mobile-first system that makes HTX Super League easy to discover, join, operate, and follow. It should reduce administrative errors and captain workload while making official competition information transparent.

## Product principles

- Operations define the product; software implements approved workflows.
- The public website and authenticated platform share one source of truth.
- Every critical status should answer: what is true, what is missing, who owns it, and when it is due?
- Payment, identity, messaging, and storage use qualified managed providers.
- Manual overrides are permitted only to authorized roles and must be audited.
- Native mobile applications are deferred until web usage proves a need that responsive web cannot meet.

## Pilot goals

- Convert qualified team interest into paid, accepted teams.
- Register and verify every player before participation.
- Give captains a complete team-readiness view.
- Publish accurate fixtures, results, standings, rules, and venue information.
- Support the end-to-end match reporting and discipline workflow.
- Give administrators clear control over teams, rosters, schedules, payments, communications, and audit history.
- Capture the metrics needed to evaluate the pilot.

## Non-goals for the pilot

- native iOS or Android apps;
- public chat or social network;
- live player tracking or wearable integrations;
- automated video analysis or streaming every match;
- public player transfer market;
- complex fantasy, prediction, or betting features;
- multi-city marketplace;
- youth guardian and safeguarding workflows;
- microservices or real-time infrastructure without a validated need.

## Users and roles

| Role | Primary capabilities |
|---|---|
| Visitor / spectator | Browse competition, teams, schedule, results, standings, stories, venue, sponsors |
| Prospective captain | Submit interest/application, review terms, reserve team |
| Team manager / captain | Manage team, invite roster, view readiness/payments, submit match queries, receive notices |
| Player | Join team, register, accept policies, pay if applicable, manage profile/preferences, view schedule/stats |
| Referee | View assignments and rules, confirm availability, submit match report and incidents |
| Referee assignor | Manage official pool, assignments, confirmations, replacements, and payment approval data |
| Matchday operator | Check in teams/officials, view eligibility, record operating checks, escalate incidents |
| Competition administrator | Configure season, approve teams/players, manage fixtures/results/standings/discipline |
| Finance administrator | View charges and status, issue policy-authorized refunds, reconcile exports, restrict sensitive access |
| Content editor | Publish approved pages, stories, sponsors, media, and corrections |
| System administrator | Manage access, configuration, integration health, audit, and incident actions |

Use least privilege. No role should receive finance, identity, discipline, or emergency-contact access merely because it can edit website content.

## Experience surfaces

### Public website: pilot release

- Home: clear proposition, current competition, captain call to action, trust/safety summary.
- Competition: format, level, inclusions, dates, pricing, eligibility, registration status.
- Schedule and results: filterable by date and team, with status and venue.
- Standings: rules-linked table with played, wins, draws, losses, goals, difference, points, and qualification state.
- Teams: approved team identity, roster visibility policy, fixtures, results, and verified stats.
- Players: only approved public data and media preference; no unnecessary identity or contact data.
- Rules and policies: versioned current documents and effective dates.
- Venue: map, parking, entry, surface/footwear, accessibility, weather and emergency contact information.
- News/media: approved stories, photos, highlights, and corrections.
- Sponsors/partners: contracted placements and links.
- About: HTX mission, leadership/governance, and “A TRIMNDS Venture” relationship.
- Contact/help: structured issue types, response expectations, urgent safety direction.

### Team and player onboarding: pilot release

- Captain interest/application form.
- Team acceptance and reservation payment.
- Team profile and logo submission with approval state.
- Email-based roster invitation and secure join flow.
- Duplicate-account and existing-player handling.
- Player eligibility fields and identity-verification status.
- Versioned acceptance of waiver, code, privacy notice, media release/preference, and other required policies.
- Individual fee or team-covered payment state.
- Captain readiness checklist showing invited, registered, eligible, paid, and incomplete players.
- Roster lock and exception workflow.

### Competition operations: pilot release

- Competition, season, division, stage, round, and fixture configuration.
- Venue, field, time-slot, blackout, and rain-date management.
- Schedule draft, validation, publication, versioning, and notifications.
- Team check-in and matchday eligibility view.
- Referee assignment, confirmation, replacement, and match-report workflow.
- Result entry, dual confirmation or review, finalization, and correction audit.
- Standings calculation using approved and tested rules.
- Goal/card/event entry only to the level that can be captured consistently.
- Forfeit, postponed, abandoned, cancelled, and replay states.
- Discipline case, interim suspension, evidence reference, decision, appeal, and eligibility effect.
- Matchday and safety checklist records.

### Payments: pilot release

- Hosted checkout; no card storage by HTX.
- Team and/or player charges, due dates, installment state, discounts, tax/fees, receipts.
- Refund/credit workflow constrained by role and published policy.
- Processor webhook handling with replay/idempotency protection.
- Reconciliation export and mismatch queue.
- Clear separation of paid, pending, failed, refunded, disputed, waived, and externally settled states.

### Communications: pilot release

- Transactional email for invitations, receipts, deadlines, schedule changes, discipline notices, and account security.
- In-app notification center if justified by build capacity.
- Recipient targeting by competition, team, role, fixture, and operational need.
- Template version and send history.
- Delivery/failure status where provided.
- Emergency communication fallback and contact export limited to authorized users.

SMS and push notifications are post-pilot unless evidence shows email cannot meet time-sensitive operations.

### Media and sponsors: pilot release

- Media asset records with match/team/player links, creator rights, consent status, alt text, publication state, and takedown workflow.
- Sponsor records, placement inventory, campaign dates, approved assets/URLs, and fulfillment proof.
- Separation between editorial statistics and sponsored presentation.

## Prioritization

| Priority | Definition | Examples |
|---|---|---|
| P0 | Required to accept payment or safely and accurately run the pilot | Identity, registration, waivers, eligibility, schedule, match reports, results, standings, discipline, admin roles, audit |
| P1 | Materially improves pilot acquisition or experience; can use a controlled manual process if late | Rich team pages, basic player stats, photo galleries, sponsor reporting, notification center |
| P2 | Post-pilot optimization | Free-agent matching, advanced stats, automated highlight workflows, mobile apps, multi-competition self-service |

## Key functional acceptance criteria

### Registration readiness

- A player cannot appear as eligible until every currently required policy version is accepted and required payment/approval state is satisfied.
- Captains can see incomplete status but not private legal or payment details beyond what is necessary.
- Administrators can explain every eligibility decision from system records.

### Schedule integrity

- A published fixture has a version, venue/field, kickoff time and timezone, teams, status, and notification history.
- Conflicting field slots cannot be published.
- A material change requires an authorized user, reason, new version, and affected-party notification.

### Standings integrity

- Only finalized competition matches affect standings.
- Forfeit and abandoned-match outcomes follow configurable approved rules.
- Automated tests cover two-team ties, multi-team ties, deductions, corrections, and playoff qualification.
- An administrator can reproduce why a team occupies its position.

### Discipline integrity

- A red card or approved sanction can immediately affect match eligibility.
- Only authorized roles see restricted evidence.
- Decision and appeal actions are time-stamped and attributable.
- Public output exposes only the approved level of information.

### Financial integrity

- Processor events can be received more than once without duplicate charges or state changes.
- Refunds require policy reason and authorized actor.
- Reconciliation identifies platform/processor discrepancies.

## Non-functional requirements

| Area | Pilot requirement |
|---|---|
| Accessibility | Target WCAG 2.2 AA; keyboard, focus, contrast, form errors, captions/alt text |
| Mobile | Complete captain/player critical paths on common mobile widths |
| Performance | Public core pages target good Core Web Vitals; avoid heavy unoptimized media |
| Availability | Target 99.5% during the pilot; published contingency for matchday outage |
| Security | MFA for privileged users, least privilege, secure sessions, rate limiting, input validation, managed secrets, audit |
| Privacy | Data minimization, purpose limitation, consent/version records, retention/deletion, restricted exports |
| Reliability | Idempotent payment/message processing, database constraints, retries with dead-letter visibility |
| Observability | Error, performance, integration, audit, and critical workflow monitoring |
| Recovery | Managed backups and tested restore before registration; documented recovery owner |
| Internationalization | Architecture supports English/Spanish; binding translations professionally reviewed |
| Time | Store instants consistently; display America/Chicago and explicit timezone in critical communications |

## Analytics plan

Track product events only when they support a defined decision. Initial funnel events:

- captain interest submitted;
- team application started/submitted/accepted;
- deposit checkout started/succeeded/failed;
- roster invitation sent/opened/accepted;
- player registration started/completed;
- waiver/policy accepted by version;
- roster reached launch-ready status;
- fixture viewed and schedule change acknowledged;
- result published/corrected;
- support request opened/resolved;
- team renewal intent and renewal completed.

Do not put sensitive health, discipline evidence, waiver text, identity documents, or payment details in general analytics tools.

## Build-versus-buy recommendation

Build the brand experience, competition model, roster readiness, standings, discipline integration, and league-specific administration. Buy managed identity, payments, transactional email, object storage, observability, and commodity content capabilities where practical.

For the first validation landing page and deposits, a controlled third-party form/checkout can precede the custom platform if it satisfies privacy, refund, reconciliation, and customer-experience requirements.

## Product release gates

| Gate | Evidence |
|---|---|
| Requirements approved | Founder decisions, rules baseline, operating workflows, policy inventory, budget |
| Design approved | Mobile flows, accessibility review, role/privacy review, operational walkthrough |
| Build complete | P0 acceptance criteria and migration/configuration complete |
| Staging approved | End-to-end team, player, referee, admin, payment, weather, discipline, and outage scenarios |
| Production ready | Security review, backups/restore, monitoring, support ownership, legal content, launch data |
| Pilot close | Usage, incidents, support, conversion, satisfaction, and cost report |

