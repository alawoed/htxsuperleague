# HTX Super League Digital Design System

**Status:** Implemented foundation  
**Applies to:** Public website first; future administrative surfaces should consume the same semantic tokens  
**Source package:** `packages/design-system`

## Design premise

HTX should feel like an editorial competition brand with operational precision. The system combines bold compressed display type, direct interface copy, a disciplined Ink-and-Chalk base, image-led storytelling, and small moments of Volt energy.

The website takes structural inspiration from leading competition sites: clear competition navigation, current-status messaging, modular editorial cards, and strong separation between league content and corporate information. It does not copy another league's visual identity, components, or page layouts.

## Mark system

| Context | Mark | Approved treatment |
|---|---|---|
| Primary brand moment and site header | Stacked Slab | Small HTX above the full Super League name; Ink on Chalk/White, or Chalk/White on Ink |
| Footer and wide layouts | Split Bar | HTX beside the rule; Super League wraps immediately beside it in the lighter display weight |
| Favicon and tiny utility context | Standalone HTX | Chalk/White on Ink; Volt on Ink is optional only after final artwork approval |

Volt is not embedded in the primary mark. The prior Volt-eye direction is retired.

The public site header uses the founder-supplied Stacked Slab PNG exactly as provided, with CSS cropping only its surrounding Ink presentation canvas. Do not recreate the mark with live type. The footer Split Bar and standalone favicon remain code-native monochrome stand-ins until their approved source files are supplied; replace those component internals without changing the public interface.

## Core palette

| Token | Value | Role |
|---|---:|---|
| Ink | `#0B0F14` | Primary text, inverse surface, brand mark |
| Chalk | `#F4F1E8` | Default page surface, inverse text |
| White | `#FFFFFF` | Raised cards and limited high contrast |
| Volt | `#C8FF3D` | Accent on Ink; filled controls with Ink foreground |
| Steel | `#7C8793` | Large secondary display details only |
| Muted | `#626C76` | Accessible normal secondary text on Chalk |
| Signal | `#F04F3D` | Errors, warnings, and visible focus support |

## Contrast rules

| Combination | Approximate ratio | Rule |
|---|---:|---|
| Ink on Chalk | 17.02:1 | Approved |
| Ink on Volt | 16.32:1 | Approved for controls and labels |
| Chalk on Ink | 17.02:1 | Approved |
| Steel on Ink | 5.26:1 | Approved for normal text, but Chalk is preferred |
| Muted on Chalk | 4.74:1 | Approved for normal secondary text |
| Volt on White | 1.18:1 | Prohibited |
| Volt on Chalk | 1.04:1 | Prohibited |
| Steel on Chalk | 3.24:1 | Do not use for normal-size text |

## Typography

- **Barlow Condensed 600–800:** hero statements, page and section titles, competition data, scores.
- **Manrope 400–700:** navigation, body copy, labels, forms, tables, and operational information.
- Headlines use compact line-height and sentence case. Uppercase is reserved for the brand mark, short labels, statuses, and competition data.
- Avoid using compressed display type for paragraphs or form fields.

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
