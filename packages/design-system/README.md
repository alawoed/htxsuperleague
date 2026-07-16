# HTX digital design system

This package contains the web tokens and first reusable React primitives for HTX Super League.

## Included objects

- semantic color, typography, spacing, radius, shadow, container, and motion tokens;
- monochrome temporary `BrandMark` with wide and stacked layouts;
- `Button` variants for light and dark surfaces;
- responsive `Container`;
- editorial `SectionHeader`.

## Non-negotiable color rule

Volt is an accent, not a text color for light surfaces.

- Never place Volt text, icons, rules, or the mark on White or Chalk.
- Use Ink-filled controls on light surfaces and Chalk-filled controls on Ink surfaces.
- Never use Volt as the fill for a button, status label, or announcement bar.
- Use Volt on Ink only for short accent labels, focus-adjacent decoration, or non-body display moments.
- Use Chalk or White for text on Ink.
- Use `--htx-color-muted` (`#626C76`) rather than Steel for normal text on Chalk.

The primary and secondary marks are monochrome. Do not add a Volt eye or another Volt detail inside the mark.
