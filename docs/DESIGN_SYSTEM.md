# Design System (extracted from code)

Source of truth: `src/index.css`, `src/data/site.ts` (`COLORS`), Tailwind `@theme`.

## Typography

| Role | Font | Weights loaded | Usage |
|---|---|---|---|
| Campaign display | Anton (`--font-anton`, fallback Impact) | 400 only | Condensed hero/section headings. Never 700/900 — already heavy. Tight leading `0.78–0.92`, tracking around `-0.025em` to `-0.055em`, uppercase. |
| Editorial display | Bodoni Moda (`--font-bodoni`, fallback Times New Roman) | 400–700, normal + italic | Regular for statements/testimonials; Italic only for intentional emphasis (e.g. hero `MADE REAL.`). |
| UI / body | Inter (`--font-inter`, fallback Arial) | 400–800 | Nav, labels, buttons, forms, metadata, statistics, body copy. Logo `800`, nav `500–600`. |

Loading: `@import url('https://fonts.googleapis.com/css2?family=Anton&family=Bodoni+Moda:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@400;500;600;700;800&display=swap')` at the top of `src/index.css`, plus `font-synthesis: none` on `body`.

Hierarchy: one `<h1>` per page → `<h2>` section statements → `<h3>` card/group titles → Inter body. Display type uses `clamp()` fluid sizes (e.g. hero `clamp(9rem,13vw,14rem)` desktop, stepped-down mobile stacks). Body minimum 14px on mobile, 16px in form fields (avoids iOS zoom). Keep display lines short (2–6 words); body lines ≤ ~65ch.

## Colors

| Token | Variable / source | Value | Usage | Contrast |
|---|---|---|---|---|
| Near-black / ink | `--color-near-black`, `COLORS.ink` | `#12100F` / `#0b0a09` | Primary text, rules, black CTA | Passes on cream/yellow/lavender |
| Warm cream / paper | `--color-warm-cream`, `COLORS.paper` | `#F3E6D3` / `#f7f0e5` / `#FFF9F0` | Page + card backgrounds | Base — dark text on it |
| Vermilion / campaign red | `--color-campaign-red`, `COLORS.vermilion` | `#EB351F` / `#f32616`, deep `#B92216` | Strongest accent: CTAs, doors, rails | White/cream text passes |
| Signal yellow | `--color-warm-yellow`, `COLORS.sun` | `#F4BE3B` / `#ffd447` | Capability wheel, stats strip, steps | Near-black text only |
| Lavender | `--color-soft-lavender`, `COLORS.lavender` | `#C3A5DC` / `#c9afe0` | Gallery room, segments, accents | Near-black text only |
| Sky blue | `--color-muted-blue`, `COLORS.blue` | `#5574C8` / `#159ce4` | Data paths, process section | White text on `#159ce4` checked per-use |
| Cobalt | `COLORS.cobalt` | `#315fd0` | Deep data/industrial accents | White text |
| Soft peach | `--color-soft-peach` | `#E7A47D` | Warm secondary shape fills | Decorative |
| Muted gray text | inline `rgba(11,10,9,…)` | `rgba(11,10,9,0.5–0.6)` | Meta, hints, secondary labels | Decorative/large only |
| Hairline border | `COLORS.mutedLine` + inline | `rgba(11,10,9,0.28)` (rules `0.15–0.75` by context) | 1px dividers, card borders, rails | Non-text |

Do not invent new brand colors. Tints of the above via opacity are allowed.

## Layout

- Max content width: fluid `vw`-based; cards cap at `max-width` (e.g. intelligence card 730px, contact content 760px, legal column 720px).
- Gutters: desktop `clamp(32px,3.4vw,58px)`; tablet same scale; mobile `20px` (16px only ≤340px in Section 5).
- Sections: full-viewport statements (`100svh`, `min-height` 700–780px) on homepage; internal heroes `min-height: 85svh`; generous `clamp()` vertical padding.
- Grids: asymmetric works grid (wide/tall/standard), 4-col process labels, 3-col stats/proof, auto-fit models/roles; single column on mobile.
- Dividers: 1px rules (`mutedLine` → `0.75` for emphasis); footer dividers inset to content edges.
- Cards: rectangular (`border-radius: 0–4px`; 8px only on contact panel); 1px borders; restrained shadows.
- Header: fixed, 70px → 62px glass when scrolled, 16px outer margin (full-bleed 58px bar on mobile). Footer: cream, oversized Anton `KLOVAH`, thin rules, 2-col desktop → stacked mobile.

## Visual language

Editorial asymmetry, flat color fields, paper/material placeholder sets, fine rules,
small red dots/markers, cropped circles, condensed-then-serif type collisions.
Glass (`blur(12px) saturate(115%)`, ≤16px) only on header, mobile menu, filter rail,
form panel — never full sections, never animated. No SaaS gradients, no glass
bubbles, no floating blobs, no neon, no glow.

## Component states

- Links/nav: underline draws left→right on hover/focus (`280ms`); active route gets vermilion underline; arrow nudges (`translate(3px,-3px)` / `+5px x`).
- Buttons: CTA inverts (black↔cream, vermilion hover on dark pages), lifts ≤2px, `300ms`; `:focus-visible` gets 2–3px solid outline + offset — never remove without replacement.
- Filters: active chip fills near-black; hover shows border.
- Accordion/menu: height+opacity (≤450ms), staggered link fade (60ms steps); Escape closes menu; body scroll restores.
- Inputs: border darkens on focus + subtle glass highlight; label shifts ≤4px; errors red + `aria-describedby`.
- Pressed: native active states only. Disabled: reduced opacity + `not-allowed` (no disabled CTAs ship today).
