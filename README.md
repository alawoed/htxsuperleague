# HTX Super League

HTX Super League is a Houston-based soccer league and tournament platform centered initially on professionally organized 9v9 competition.

The brand is customer-facing and operationally independent. It is owned and governed through **TRIMNDS**, the venture-building company founded by Marcus, Nesta, and David.

## Current status

**Stage:** Foundation and concept validation  
**Code status:** Public pre-launch website foundation implemented; authenticated platform not started  
**Planning baseline:** One adult 18+ 9v9 pilot division, eight teams, subject to founder approval  
**Recommended pilot window:** Spring 2027, subject to venue, insurance, sanctioning, and demand gates

This repository began documentation-first. The public demand-validation website can now develop in parallel with founder decisions because it does not accept payment, imply registration approval, or depend on unresolved competition operations. The authenticated participant and administrative platform remains behind the original build gates.

## Website development

The repository is an npm workspace:

- `apps/web` — responsive public pre-launch website;
- `packages/design-system` — shared digital tokens and React primitives;
- `docs/06-brand-experience` — website, design-system, and image guidance.

Run the website from the repository root:

```bash
npm install
npm run dev
```

Validate a production build with `npm run typecheck` and `npm run build`.

## Venture thesis

Houston has a large, diverse, active soccer community and an established market for small-sided adult leagues. The opportunity is not merely to offer matches. It is to deliver a more dependable and engaging competition product:

- reliable schedules and communication;
- good fields and qualified officials;
- transparent rules, pricing, discipline, and appeals;
- accurate results, standings, rosters, and statistics;
- professional matchday presentation and media;
- useful digital tools for captains, players, referees, and administrators;
- credible sponsor and venue experiences.

The first season is a validation pilot, not a scaled launch. Its purpose is to prove that HTX Super League can recruit teams, deliver every match safely and consistently, retain participants, and operate within an approved loss or break-even envelope.

## Documentation

Start with the [documentation index](docs/README.md). The recommended reading order is:

1. [Venture charter](docs/00-governance/venture-charter.md)
2. [Founder decision register](docs/00-governance/founder-decisions.md)
3. [Documentation and repository roadmap](docs/00-governance/documentation-roadmap.md)
4. [Concept and market strategy](docs/01-strategy/concept-and-market-strategy.md)
5. [Competition framework](docs/02-competition/competition-framework.md)
6. [Revenue model](docs/03-finance/revenue-model.md)
7. [Operating model](docs/04-operations/operating-model.md)
8. [Policy and risk framework](docs/05-legal-risk/policy-and-risk-framework.md)
9. [Brand and customer experience](docs/06-brand-experience/brand-and-customer-experience.md)
10. [Public website design document](docs/06-brand-experience/website-design-document.md)
11. [Digital design system](docs/06-brand-experience/digital-design-system.md)
12. [Website image inventory](docs/06-brand-experience/image-inventory.md)
13. [Product requirements](docs/07-product/product-requirements.md)
14. [Data and technical architecture](docs/08-technology/data-and-architecture.md)
15. [Pilot season roadmap](docs/09-launch/pilot-season-roadmap.md)
16. [Sponsorship and partnership strategy](docs/10-partnerships/sponsorship-and-partnerships.md)
17. [Growth plan](docs/11-growth/growth-plan.md)

## Repository principles

- Business and operating decisions precede application code.
- Safety, legal review, insurance, venue readiness, and financial viability are release gates.
- The first product should be a modular monolith, not a microservice estate.
- Third-party services should handle regulated or specialized functions such as payments and identity.
- Every material decision should be recorded with an owner, date, rationale, and review trigger.
- Personal data should be minimized, access-controlled, auditable, and retained only as long as necessary.
- Public claims must be accurate. Do not call HTX Super League Houston's “first,” “largest,” or “best” without support.

## Ownership and use

All brand, business, product, competition, and software assets in this repository are intended for HTX Super League and TRIMNDS. No open-source license has been granted at this stage.
