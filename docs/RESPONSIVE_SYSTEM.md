# Responsive System

35 `@media` blocks in `src/index.css`; fluid type via `clamp()` (263 uses).
`overflow-x: clip` on `html`/`body`; mobile layouts are recomposed, never scaled.

## Breakpoints (as coded)

| Width | Behavior |
|---|---|
| ≤340px | Tight fixes only (Section 5 margins/type, intelligence letter-spacing) |
| ≤767px | Full mobile recomposition (see below) |
| 768–1024px | Tablet grids collapse, type steps down |
| 768–1199px | Section 2/3/5 asymmetric-but-narrower variants |
| 1024–1279px | Works/case grids ease toward desktop |
| ≥1200px | Desktop statement/heading geometry |
| ≥1280px | Internal-page full layouts |
| 1440px+ / 1920×1080 | Max clamps engage; verified targets |

## Header & menu

- Desktop: fixed 70px bar (16px margins) → 62px glass panel past 24px scroll.
  Nav row + `START A PROJECT ↗`; active link vermilion underline.
- ≤767px: 58px full-bleed bar, KLOVAH left, two-line `MENU` right. Menu opens a
  full-viewport glass panel (`inset:0`, top z-index): staggered numbered links,
  email/social footer, Escape closes, body lock restores, focus moves to Close.
- Homepage keeps its own hero header + overlay menu (same contract).

## Typography scaling

Display sizes are `clamp()`-fluid per section (e.g. hero 9rem→13vw→14rem desktop;
controlled multi-line stacks on mobile). Body ≥14px mobile (16px inputs),
nav ≥12px, touch targets ≥44px. No breakpoint jumps — clamps interpolate.

## Grids & stacking

- Works: asymmetric 3-col → 1-col; tall/wide spans reset; one featured rail may
  swipe horizontally, everything else vertical.
- Cases: 4-col rows (art/num/info/metric) → stacked, art hidden, metric inline.
- Capabilities: accordion (one open) at all sizes; tech rail wraps; models
  auto-fit → 1-col.
- Process/about/proof/contact/legal: multi-column → single column; forms 2-col
  → 1-col; footer 2-col → stacked.
- Min 20px page gutters on mobile; `min-width:0` + `max-width:100%` guards.

## Images / placeholders

Placeholder layers are absolutely positioned inside `overflow:hidden` sections
with `contain:paint`; wheel intentionally crops via vw sizing without expanding
the document. Future `<img>` must carry dimensions/aspect-ratio + `cover`.

## Motion reduction on mobile

`panel-parallax` + `[data-parallax/tilt/magnetic]` forced to `transform:none`;
marquee animation off; menu/form glass becomes near-opaque; reveals shrink to
simple one-time fade/translate; no pinning, hijacking, cursors, or refraction.

## Routes needing attention

None structurally broken. Remaining polish (see `IMPLEMENTATION_STATUS.md`):
final artwork everywhere, legal review, verified metrics, OG/sitemap/robots.
