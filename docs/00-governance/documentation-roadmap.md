# Documentation and Repository Roadmap

**Status:** Draft  
**Owner:** Venture lead and product owner

## Recommended repository structure

```text
htxsuperleague/
├── README.md
├── CONTRIBUTING.md
├── SECURITY.md
├── docs/
│   ├── README.md
│   ├── 00-governance/
│   ├── 01-strategy/
│   ├── 02-competition/
│   ├── 03-finance/
│   ├── 04-operations/
│   ├── 05-legal-risk/
│   ├── 06-brand-experience/
│   ├── 07-product/
│   ├── 08-technology/
│   ├── 09-launch/
│   ├── 10-partnerships/
│   ├── 11-growth/
│   ├── research/
│   └── templates/
├── apps/                 # Future: deployable applications
│   ├── web/              # Public site and authenticated web app
│   └── worker/           # Future only if background processing warrants it
├── packages/             # Future: shared domain, UI, data, and configuration packages
├── infrastructure/       # Future: deployment and environment configuration
├── tests/                # Future: cross-application and acceptance tests
└── .github/              # Pull request, issue, ownership, and CI configuration
```

Do not create empty application directories merely to imply progress. Add them only when the build gate is approved and the first implementation commit needs them.

## Documentation sequence

### Foundation: create before external commitments

- venture charter;
- founder decision register;
- assumption and risk register;
- concept and market strategy;
- competition framework;
- preliminary financial model;
- venue evaluation scorecard;
- sanctioning and insurance options memo.

### Commercial and operating design: create before selling

- approved offer, eligibility, pricing, and payment schedule;
- season rules and competition regulations;
- code of conduct and referee-protection policy;
- waiver, release, medical authorization where applicable, media release, and privacy disclosures;
- refund, cancellation, weather, rescheduling, and force-majeure policies;
- discipline, protest, suspension, and appeal procedures;
- emergency action and incident response plans;
- venue, referee, contractor, sponsor, and media agreements;
- matchday operating manual;
- sponsor inventory and fulfillment tracker;
- brand strategy and messaging guide.

Legal documents in this list require qualified Texas counsel and insurer/sanctioning review. Repository drafts are operating inputs, not legal approval.

### Product definition: create before application work

- product requirements document;
- role and permission matrix;
- service blueprint and user journeys;
- data classification and retention schedule;
- domain model and system context;
- architecture decisions;
- analytics event plan;
- accessibility and security acceptance criteria;
- release plan and test strategy.

### Launch operations: create before registration opens

- pilot master schedule;
- captain onboarding guide;
- referee and match-operator guide;
- field inspection checklist;
- roster and waiver audit checklist;
- communications calendar and templates;
- match report and incident forms;
- financial controls and reconciliation checklist;
- launch readiness review;
- pilot scorecard dashboard definition.

### Post-pilot: create before expansion

- season retrospective;
- customer research findings;
- financial close and unit-economics review;
- incident and claims review;
- sponsor and venue partner reports;
- product performance report;
- repeat, change, expand, or stop recommendation.

## Repository governance

- Use Markdown for versioned strategy and specifications.
- Store signed contracts, participant records, tax data, identity documents, medical details, payment exports, and executed waivers in approved secure business systems, not GitHub.
- Link to a secure record by non-sensitive identifier when traceability is needed.
- Use decision records for material and hard-to-reverse choices.
- Use issues for bounded work, not as the system of record for confidential incidents.
- Protect the default branch and require review once more than one contributor is active.
- Add automated Markdown link and formatting checks before application CI exists.

## Initial issue backlog

1. Assign founder accountabilities and approval thresholds.
2. Conduct 25 captain interviews and record structured findings.
3. Request written quotes from at least five venues.
4. Compare TSSAS/USASA affiliation with independent insurance.
5. Obtain referee-assignor availability and fee ranges.
6. Build the pilot cash-flow model from quotes.
7. Approve the pilot customer segment and competition promise.
8. Conduct brand, domain, social, and trademark clearance.
9. Draft the rules outline for counsel, officials, and venue review.
10. Define the MVP acceptance criteria and build budget.

