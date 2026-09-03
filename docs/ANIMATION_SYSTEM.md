# Animation System (actual implementation)

Library: `framer-motion` 13.2.0. No GSAP, no Lenis, no scroll-jacking.
Global rule: **native scrolling only**; motion is one-shot and transform-based.

## Allowed motion (what ships today)

- Header entrance (opacity/y, 450ms) + menu slide (`y -100%→0`, 400ms).
- One-time viewport reveals: `whileInView` / `useInView({once:true})`, opacity + y
  (≤24px), staggered ≤60–70ms — homepage sections, works/cases/process/about rows.
- Masked line reveals (`RevealText`, quote masks): `y 100%→0` in overflow wrapper.
- Hover micro-interactions: underline draw, arrow nudge (`translate(3px,-3px)` /
  `+5px x`), CTA invert, card art shift 2–3%.
- Accordion/menu height+opacity (≤450ms); marquee (30s linear, pauses on
  hover/focus/hidden tab, off on mobile + reduced motion).
- Form focus highlight + label shift ≤4px. 404 paper pieces are static.
- Route changes: instant (no wipe/timer); `PageShell` scrolls to top.

## Timing (real values in code)

| Use | Duration | Ease / delay |
|---|---|---|
| Micro-interaction (hover, focus, underline, arrow) | 120–280ms | `[0.22,1,0.36,1]` |
| Component transition (accordion, menu, filter) | 220–450ms | same ease; link stagger 60ms; `RevealText` delay capped 70ms |
| Section reveal | 550ms (pages) / 780–1100ms (homepage statements) | same ease; homepage stagger 90–150ms |
| Marquee | 30s linear infinite | paused off-viewport/hidden/mobile/RM |

No route transition animation ships (instant swap). No number-count, tilt,
magnetic, curtain, progress-bar, or refraction components exist — do not add them
without a performance case.

## Performance requirements (enforced)

- Transform + opacity only. Never width/height/top/left/padding/margin, blur,
  shadows, or `transition: all` (use explicit property lists).
- One shared scroll listener (header threshold boolean, passive, cleaned).
  Pointer parallax is element-scoped `onPointerMove/Leave`, fine-pointer only,
  reset on leave; mobile forces `transform: none !important`.
- Works grid uses **one** `useInView` for the group, not per card.
- Glass: `blur(12px) saturate(115%)` max, small surfaces only (header, menu,
  filter rail, form panel); mobile menu/form fall back to near-opaque fills;
  never animated. Artwork layers get `contain: paint`.
- `will-change` only during active animation; all listeners/observers/timeouts
  cleaned on unmount; passive read-only scroll.

## Files

`components/motion/RevealText.tsx`; menu motion in `layout/MobileMenu.tsx` +
`navigation/MainHeader.tsx`; section reveals inline in `home/*` + `pages/*`;
marquee keyframes + RM guards in `src/index.css`.

## Technical debt

- Homepage statement reveals (up to ~1.1s) exceed the 650ms page guideline —
  accepted as approved campaign choreography; do not extend further.
- `SiteHeader` computes an `isDark` hook that currently only toggles a class —
  harmless; wire or remove if restyled.
- No focus-trap cycle in `MobileMenu` (short menu; Escape + initial focus exist).
