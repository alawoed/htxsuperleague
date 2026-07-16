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

- responsive homepage and navigation;
- founding-season status and proposed competition baseline;
- competition, matchday, captain, updates, partner, and interest sections;
- accessible prototype interest form with no external data transmission;
- temporary licensed stock photography with disclosure;
- shared tokens and primitives from `packages/design-system`.

## Not connected yet

- form backend or CRM;
- content management;
- analytics and consent platform;
- registration, authentication, payments, fixtures, standings, teams, or player data;
- final approved SVG brand assets.
