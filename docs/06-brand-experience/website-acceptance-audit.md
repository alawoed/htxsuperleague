# Website Acceptance Audit and Integration Recommendations

**Status:** Implementation complete; external launch controls pending  
**Owner:** Founders and website product owner  
**Last updated:** 2026-07-16

This audit applies the Release A acceptance criteria in the [Website Design Document](website-design-document.md) to the current public-site implementation.

## Current acceptance status

| Acceptance criterion | Status | Evidence or remaining gate |
|---|---|---|
| Visitors understand the offer from the hero and first supporting section | Needs validation | The content hierarchy is implemented. Founder review and five-person mobile comprehension testing remain required. |
| Proposed information is distinguished from confirmed commitments | Met | Planning baselines, provisional labels, and approval caveats are visible throughout. |
| A qualified captain can submit interest on mobile without an account | External gate | The complete qualification field set and responsive form UI are implemented. Secure transmission, storage, notification, and ownership are not connected. |
| A prospective partner can understand the opportunity and submit an inquiry | External gate | The commercial narrative and inquiry UI are implemented. Secure form handling is not connected. |
| HTX leads while the TRIMNDS relationship remains clear | Met | HTX is the primary identity; TRIMNDS appears as owner/governor and secondary endorsement. |
| Navigation, forms, and meaningful content support keyboard and screen-reader patterns | Partially met | Automated axe smoke tests pass on 12 public routes. Manual keyboard, VoiceOver, NVDA, zoom/reflow, and error-flow testing remain required. |
| Core pages meet responsive and performance targets | Partially met | Responsive layouts, WebP `srcset` delivery, reserved image dimensions, lazy loading, and bundle budgets are implemented. Real-device LCP/CLS/INP testing remains required. |
| No empty pages, unsupported claims, unapproved marks, or misleading imagery are published | Met | Live-competition pages remain gated, approved partner marks are local, and every stock image context now carries a disclosure. |
| Form data has an owner, destination, retention rule, and response process | External gate | Founder governance and form-provider configuration are required before data collection can be enabled. |
| Privacy, accessibility, and contact information are available | Met | All routes exist. Privacy and terms remain provisional pending legal and operating-entity approval. |
| Editors can update season status and CTAs without a code deployment | External gate | Site settings are centralized in code. A CMS account, schema, roles, and publishing workflow remain required. |

## Completed in the repository

- Promoted Primary Navy `#0E2433` to the primary design token; retained `--htx-color-ink` as a compatibility alias.
- Recalculated and documented contrast guidance.
- Expanded the captain form with mobile, participant group, playing level, roster size, preferred nights, Houston area, and league history.
- Reworded all prototype confirmation states so they do not imply transmission or storage.
- Added consistent stock-image disclosure to secondary heroes, article listings, and article pages.
- Added responsive WebP image variants, `srcset`, `sizes`, intrinsic dimensions, and below-the-fold lazy loading.
- Added Open Graph, Twitter card, route-specific titles/descriptions, canonical URLs, organization/article structured data, and a social sharing image.
- Added build-generated `sitemap.xml`, `robots.txt`, and `404.html`. Netlify route rules now preserve valid client routes and return a 404 for unknown paths.
- Added automated axe smoke tests across Release A routes and bundle/image performance budgets.

## Recommended external integrations

### Forms and submission operations — Netlify Forms

**Recommendation:** Use Netlify Forms for the validation release because the site already deploys on Netlify and the platform can detect submissions, retain them in its form dashboard, and send email or HTTP POST notifications. [Netlify Forms setup](https://docs.netlify.com/manage/forms/setup/)

Required founder decisions before connection:

- assign a data owner and backup owner;
- select team-interest, partnership, general-inquiry, and newsletter destinations;
- set response targets by inquiry type;
- approve retention and deletion periods;
- approve spam protection and incident escalation;
- decide whether qualified team leads also enter a CRM.

Recommended flow: Netlify Forms → owner email notification → authenticated webhook to the selected CRM or email platform. Never send identity documents, waivers, emergency details, payment data, or discipline evidence through these forms.

### Content management — Sanity

**Recommendation:** Use Sanity for site settings, pages, competition facts, FAQs, stories, partners, venues, and policy links. Its structured content, drafts, scheduled Content Releases, and webhooks align with the documented approval states and allow content updates to trigger a Netlify build without editing application code. [Sanity Content Releases](https://www.sanity.io/docs/studio/content-releases-configuration), [Sanity webhooks](https://www.sanity.io/docs/content-lake/webhooks)

Required setup:

- founder/editor/publisher roles;
- Draft, Proposed, Approved, Superseded, and Archived states;
- preview environment and approval workflow;
- webhook to Netlify production builds only after approval;
- asset rights and alt-text fields;
- audit responsibility for dates, prices, venues, and competition claims.

### Analytics — Plausible

**Recommendation:** Use Plausible for aggregate traffic and the pre-launch events in the measurement plan. Plausible states that it operates without cookies or persistent identifiers and is designed to avoid individual tracking; legal counsel should still confirm the final disclosure for HTX's audience and vendors. [Plausible data policy](https://plausible.io/data-policy)

Initial events: primary CTA, competition view, FAQ engagement, partner outbound click, form start, successful server-confirmed submission, and subscription confirmation. Do not fire a completion event from the current prototype-only states.

### Error monitoring — Sentry

**Recommendation:** Enable Sentry error monitoring only after production credentials and a privacy configuration are approved. Start without Session Replay, disable unnecessary console breadcrumbs, avoid request bodies, and scrub URLs or fields that may contain personal information. Sentry documents the device/runtime and breadcrumb data its React SDK can collect. [Sentry React data collection](https://docs.sentry.io/platforms/javascript/guides/react/data-management/data-collected/)

### Deployment environments

Keep `main` as production and use pull-request Deploy Previews for founder, content, responsive, and accessibility review. Netlify supports Deploy Previews for pull and merge requests. [Netlify Deploy Previews](https://docs.netlify.com/deploy/deploy-types/deploy-previews/)

## Non-vendor launch approvals

- Confirm the production domain and set it as the Netlify primary domain so canonical and sitemap URLs resolve correctly.
- Establish the legal operating entity and have counsel approve privacy, terms, consent language, and retention.
- Complete manual WCAG 2.2 AA testing with keyboard, VoiceOver, NVDA, 200–400% zoom, and mobile form errors.
- Run Lighthouse or WebPageTest on mid-range mobile profiles and capture production Core Web Vitals after launch.
- Validate stock-photo licenses and replace prototype imagery with original HTX photography as soon as events exist.

