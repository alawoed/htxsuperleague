# Partner brand assets

Local, approved artwork for official TRIMNDS portfolio companies and HTX Super League launch partners. Website components must use the `/partners/...` paths below; do not hotlink the partner websites.

| Partner | Local path | Approved source | Treatment |
|---|---|---|---|
| TRIMNDS | `/partners/trimnds-logo.svg` | `alawoed/trimnds` — `website/src/components/BrandLockup.astro` | Standalone component lockup exported to path-based SVG using its Gloock typography and approved Ink/Clay colors. |
| GRIPHCON | `/partners/griphcon-logo.png` | `alawoed/griphcon` — `public/assets/images/griphcon-logo.png` | Exact source PNG; transparent canvas retained. |
| HAP HEIGHT | `/partners/hap-height-logo.svg` | `alawoed/hapheight` — `brand/logo-wordmark.svg` | Exact path-based source SVG. |
| SOLIELI | `/partners/solieli-logo.svg` | `alawoed/solieli` — `apps/web/src/components/brand/solieli-lockup.tsx` and `moment-mark.tsx` | Code-native lockup exported to path-based SVG using its Figtree typography and moment mark. |
| WELLTRACE | `/partners/welltrace-logo.svg` | `alawoed/welltrace` — `WellTrace/Assets.xcassets/SplashWordmark.imageset/SplashWordmark.png` | Exact approved raster wordmark embedded in a self-contained SVG container. Production domain remains pending. |

## Usage rules

- Preserve the supplied artwork, color, proportions, and internal spacing.
- Do not recolor, crop, redraw, add effects, or place type inside the logo files.
- Size logos by optical weight rather than forcing a shared width.
- Give every mark clear space of at least the height of its smallest prominent letterform.
- Use descriptive alt text when the logo conveys partner identity. Use empty alt text only when the same partner name is adjacent and visible.
- Reconfirm the WELLTRACE production URL before making its logo card a link.

