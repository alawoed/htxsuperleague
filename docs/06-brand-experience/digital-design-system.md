# HTX Super League Digital Design System

**Status:** Implemented foundation  
**Applies to:** Public website first; future administrative surfaces should consume the same semantic tokens  
**Source package:** `packages/design-system`

## Design premise

HTX should feel like an editorial competition brand with operational precision. The system combines bold compressed display type, direct interface copy, a disciplined Primary Navy-and-Chalk base, image-led storytelling, and small moments of Volt energy.

The website takes structural inspiration from leading competition sites: clear competition navigation, current-status messaging, modular editorial cards, and strong separation between league content and corporate information. It does not copy another league's visual identity, components, or page layouts.

## Mark system

| Context | Mark | Approved treatment |
|---|---|---|
| Primary brand moment and site header | Stacked Slab | Small HTX above the full Super League name; Primary Navy on Chalk/White, or Chalk/White on Primary Navy |
| Footer and wide layouts | Split Bar | HTX beside the rule; Super League wraps immediately beside it in the lighter display weight |
| Favicon and tiny utility context | Standalone HTX | Chalk/White on Primary Navy; Volt on Primary Navy is optional only after final artwork approval |

Volt is not embedded in the primary mark. The prior Volt-eye direction is retired.

The public site header uses the founder-supplied Stacked Slab PNG exactly as provided, with CSS cropping and blend treatment so its original presentation canvas resolves against Primary Navy. Do not recreate the mark with live type. The footer Split Bar and standalone favicon remain code-native monochrome stand-ins until their approved source files are supplied; replace those component internals without changing the public interface.

## Core palette

| Token | Value | Role |
|---|---:|---|
| Primary Navy | `#0E2433` | Primary text, inverse surface, brand mark; implemented as `--htx-color-primary` with `--htx-color-ink` retained as a compatibility alias |
| Chalk | `#F4F1E8` | Default page surface, inverse text |
| White | `#FFFFFF` | Raised cards and limited high contrast |
| Volt | `#C8FF3D` | Small accents on Primary Navy and approved standalone micro marks; never a control fill |
| Steel | `#7C8793` | Large secondary display details only |
| Muted | `#626C76` | Accessible normal secondary text on Chalk |
| Signal | `#F04F3D` | Errors, warnings, and visible focus support |

## Contrast rules

| Combination | Approximate ratio | Rule |
|---|---:|---|
| Primary Navy on Chalk | 14.10:1 | Approved |
| Primary Navy on Volt | 13.52:1 | Contrast passes, but the treatment is not approved for controls or labels |
| Chalk on Primary Navy | 14.10:1 | Approved |
| Steel on Primary Navy | 4.36:1 | Large display details only; fails the 4.5:1 normal-text target |
| Muted on Chalk | 4.74:1 | Approved for normal secondary text |
| Volt on White | 1.18:1 | Prohibited |
| Volt on Chalk | 1.04:1 | Prohibited |
| Steel on Chalk | 3.24:1 | Do not use for normal-size text |

## Typography

- **Barlow Condensed 600–800:** hero statements, page and section titles, competition data, scores.
- **Manrope 400–700:** navigation, body copy, labels, forms, tables, and operational information.
- Headlines use compact line-height and sentence case. Uppercase is reserved for the brand mark, short labels, statuses, and competition data.
- Display line-height stays between `0.91` and `1.05`; body copy stays between `1.55` and `1.65` with a readable maximum measure.
- Avoid using compressed display type for paragraphs or form fields.

Primary controls use Primary Navy on light surfaces and Chalk on Primary Navy surfaces. Volt is reserved for small accents, rules, and approved micro-mark contexts; never use it as a button, badge, or announcement-bar fill.

## Layout

- Maximum content width: 88rem.
- Fluid outer gutter: 1rem to 3.5rem.
- Sections use clear changes in surface or spacing, not decorative section numbers.
- Editorial grids may be asymmetric when imagery supports it; data grids remain consistent and scannable.
- Mobile layouts collapse to one column without changing information priority.

## Components and states

The initial component set contains BrandMark, Button, Container, and SectionHeader. The next components should be added only when a real page needs them:

- status banner;
- navigation and mobile drawer;
- competition fact;
- story card;
- match card;
- table and standings row;
- tabs and filters;
- form fields and validation messages;
- sponsor lockup group;
- alert, empty, loading, and error states.

Every interactive state must include keyboard focus, hover where relevant, disabled behavior, and a non-color signal for errors.

## Photography

- Prioritize real adult local competition, not professional-stadium spectacle.
- Show play, preparation, officials, captains, community, and physical details.
- Avoid imagery that falsely implies an HTX event already occurred.
- Temporary stock photography carries a visible disclosure on image-led launch pages.
- Replace third-party brand-heavy equipment shots first.

## Accessibility and motion

- Target WCAG 2.2 AA.
- Provide a skip link, semantic headings, visible focus, labelled fields, and meaningful alt text.
- Do not place essential text inside photography.
- Respect `prefers-reduced-motion`; movement should clarify state, not decorate the page.
- Minimum interactive target is 44 by 44 CSS pixels where layout permits.
