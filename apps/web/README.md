# HTX public website

Responsive pre-launch website for HTX Super League. The current release establishes the brand, explains the proposed competition, supports partner conversations, and validates captain/team demand without implying that registration, pricing, venue, or dates are confirmed.

## Run locally

From the repository root:

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run typecheck
npm run build
```

## Netlify deployment

The repository-root `netlify.toml` is the deployment source of truth:

- build from the repository root with `npm run build`;
- publish `apps/web/dist`;
- use Node.js 22;
- serve client-side routes through `index.html`;
- apply baseline security and immutable hashed-asset cache headers.

Leave the Netlify dashboard base directory empty so the repository-root configuration remains authoritative.

## Current scope

- responsive shared header, footer, status bar, metadata, and 404 state;
- complete Release A route set:
  - `/` — Home;
  - `/competition` — format, season structure, matchday standards, and FAQs;
  - `/teams` — captain journey, readiness guidance, and team-interest form;
  - `/partners` — partnership inventory, approved partner roster, and inquiry form;
  - `/updates` and `/updates/:slug` — editorial index and initial stories;
  - `/about` — purpose, operating values, and TRIMNDS relationship;
  - `/contact` — structured help routes and general inquiry form;
  - `/privacy`, `/terms`, and `/accessibility` — provisional policy templates;
- founding-season status and proposed competition baseline;
- accessible prototype forms with no external data transmission;
- temporary licensed stock photography with disclosure;
- shared tokens and primitives from `packages/design-system`.

## Not connected yet

- form backend or CRM;
- content management;
- analytics and consent platform;
- registration, authentication, payments, fixtures, standings, teams, or player data;
- confirmed production domain and canonical sitemap URLs.

Schedule, results, standings, team directories, roster views, and match pages remain intentionally unpublished until approved competition data exists.
