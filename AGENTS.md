# AGENTS.md — Rules for Future Contributors (Human & AI)

These rules are non-negotiable. The homepage (Sections 1–8) is approved and locked.

## 1. Preserve the Klovah design system

- Keep the editorial campaign language: paper-inspired compositions, strong flat
  color fields, controlled asymmetry, oversized type, deliberate negative space,
  tactile layering, fine 1px rules, small vermilion accents, cropped compositions.
- Never turn the interface into a generic SaaS website: no glowing AI brains, no
  neon blue-purple gradients, no floating dashboard mockups, no glassmorphism on
  everything, no oversized rounded cards, no meaningless futuristic grids, no fake
  awards / client logos / invented customer names, no "unlock your potential" copy.
- Preserve the Anton (condensed campaign) ↔ Bodoni Moda (editorial contrast) ↔
  Inter (UI/body) relationship. Anton `@400` only — it is already heavy. Bodoni
  Regular for statements, Italic only for intentional emphasis.
- Preserve the palette: warm cream `#f7f0e5`, near-black `#0b0a09`, vermilion
  `#f32616`, sun yellow `#ffd447`, lavender `#c9afe0`, sky blue `#159ce4`,
  cobalt `#315fd0`, muted line `rgba(11,10,9,0.28)`.

## 2. Live text, replaceable art

- All headings, nav, buttons, and body copy stay **live HTML**. Never bake page
  headings, navigation, buttons, or body copy into background images.
- Decorative visuals live only in replaceable background layers
  (`aria-hidden="true"`, `pointer-events: none`, `contain: paint`). Swapping art
  must never move live content. Keep text out of raster assets; respect safe zones.
- Do not redesign approved sections without explicit permission.

## 3. Reuse before duplicating

- Reuse `src/components/layout/*` (SiteHeader, SiteFooter, MobileMenu, PageShell),
  `src/components/motion/RevealText.tsx`, `src/utils/cn.ts`, and `src/data/*`
  before creating route-specific duplicates.
- Folder conventions: `src/pages/*Page.tsx`, `src/components/home/*`,
  `src/components/layout/*`, `src/components/motion/*`, `src/components/navigation/*`,
  `src/data/*.ts`, `src/utils/*.ts`. Import alias: `@/*` → `src/*`.

## 4. Semantic, accessible HTML

- One `<h1>` per page, logical heading order, landmark elements
  (`header`/`main`/`nav`/`footer`/`section` with labels where needed).
- Decorative art is `aria-hidden`. Accordions and menus use `aria-expanded`,
  Escape closes the mobile menu, focus is trapped/restored, focus-visible styles
  are never removed without a replacement. Form labels stay visible; errors use
  `aria-describedby` and focus the first invalid field.

## 5. Motion & scrolling performance

- Maintain **native browser scrolling**. Never add Lenis, locomotive-scroll,
  scroll-jacking, custom wheel/touch interception, RAF scroll interpolation, or
  nested page-level scroll containers. `scroll-behavior: auto` globally.
- Prefer `transform` + `opacity` only. One-time `whileInView` reveals
  (`once: true`, ≤24px, ≤650ms, stagger ≤70ms). No continuous loops unless
  essential (marquee pauses on hover/focus/hidden tab, disabled on mobile and
  under reduced motion).
- Respect `prefers-reduced-motion` in CSS and via `useReducedMotion()`.
- No `transition: all` — list explicit properties. Never animate `filter`,
  `backdrop-filter`, large blur, or large box-shadows. Glass blur ≤16px and only
  on small surfaces (header, menu panel, filter rail, form panel). Never animate it.
- `will-change` only during active animation. Clean up every listener/observer/
  timeout on unmount. Passive listeners for read-only scroll.

## 6. Responsive discipline

- Mobile layouts are deliberately recomposed, never scaled-down desktop canvases.
- ≥20px horizontal padding, ≥44px touch targets, body ≥14px on mobile
  (16px in form fields to avoid iOS zoom), no page-level horizontal overflow
  (`overflow-x: clip`), normal document flow where possible.

## 7. Verify and document

- After meaningful changes run `npx tsc --noEmit` and `npm run build`
  (there is no lint script in `package.json`).
- Update the relevant doc in `docs/` whenever architecture, routes, assets, or
  tokens change. Keep `docs/ASSET_MANIFEST.md` current as placeholders are replaced.
- Never expose secrets or commit `.env` files. `.env.example` holds placeholders only.
