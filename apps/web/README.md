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
npm run test:a11y
npm run test:performance
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
- complete captain qualification, partner inquiry, contact, and newsletter prototype states with explicit no-transmission language;
- temporary licensed stock photography with disclosure;
- responsive WebP imagery with JPEG fallback and intrinsic dimensions;
- route metadata, social metadata, structured data, generated sitemap/robots, and a true Netlify 404 fallback;
- automated accessibility smoke tests and bundle/image performance budgets;
- shared tokens and primitives from `packages/design-system`.

## Not connected yet

- form backend or CRM;
- content management;
- analytics and consent platform;
- registration, authentication, payments, fixtures, standings, teams, or player data;
- confirmed production domain and canonical sitemap URLs.

## Build environment

The SEO generator uses Netlify's `URL` environment variable in production. For a non-Netlify production build, set `SITE_URL` to the canonical origin before running `npm run build`.

The default local build writes `http://localhost:4173` into its local-only sitemap. Never publish that local artifact.

## Acceptance and integrations

See the [website acceptance audit](../../docs/06-brand-experience/website-acceptance-audit.md) for the current criterion-by-criterion status and recommendations for Netlify Forms, Sanity, Plausible, Sentry, legal approval, and manual validation.

Schedule, results, standings, team directories, roster views, and match pages remain intentionally unpublished until approved competition data exists.
