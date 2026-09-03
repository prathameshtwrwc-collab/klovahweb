# Component Architecture (actual source)

> SPA note: despite brief references to "App Router", this repo is a Vite SPA.
> Routing is `HashRouter` in `src/App.tsx`. There are no server components —
> everything is client-side React.

## Dependency flow

```text
src/main.tsx (StrictMode → App)
└── src/App.tsx (HashRouter → AppRoutes → Routes)
    ├── src/pages/HomePage.tsx
    │   └── src/components/home/* (8 locked sections)
    │       └── src/components/navigation/MainHeader.tsx (homepage header+menu)
    ├── src/pages/*.tsx (Works, Cases, CaseDetail, Capabilities, Process,
    │                     About, Contact, Privacy, Terms, NotFound)
    │   └── src/components/layout/PageShell.tsx
    │       ├── useLocation → scrollTo(0,0) + document.title/meta
    │       └── src/components/layout/SiteFooter.tsx
    ├── src/components/layout/SiteHeader.tsx (non-home chrome)
    │   └── src/components/layout/MobileMenu.tsx
    ├── src/components/motion/RevealText.tsx (shared reveal primitive)
    ├── src/data/*.ts (site, navigation, works, cases, capabilities)
    └── src/utils/cn.ts (clsx + tailwind-merge)
```

Import alias `@/*` → `src/*` (tsconfig paths + vite resolve.alias).

## Shared layout

| Component | Responsibility | Props | Used by | A11y / motion / debt |
|---|---|---|---|---|
| `layout/SiteHeader.tsx` | Fixed global header (non-home): logo, 5 nav links, `START A PROJECT ↗`, mobile trigger; glass-on-scroll | none (reads `useLocation`) | all non-home pages | Active route underline; threshold-boolean scroll listener (passive, cleaned); 450ms entrance; debt: `isDark` var is computed but only toggles a class hook |
| `layout/MobileMenu.tsx` | Full-screen menu: numbered links, email/social, Escape, focus close btn, body-lock w/ restore | `onClose: () => void` | SiteHeader | `role=dialog aria-modal`; stagger 60ms; debt: no focus trap cycle (acceptable: short menu) |
| `layout/SiteFooter.tsx` | Cream editorial footer: Anton KLOVAH, tagline, nav, CTA, location/social, legal | none | `PageShell` pages | Real links only; hover underlines |
| `layout/PageShell.tsx` | Scroll-to-top, title/meta sync, footer injection | `children, noFooter?, title?, description?` | all pages except homepage | Title format `Page \| Klovah`; 404 uses `noFooter` |
| `navigation/MainHeader.tsx` | Homepage hero header + full overlay menu | none | `HeroSection` only | `aria-expanded/controls`, focus trap, reduced-motion aware |

## Motion / primitives

| Component | Responsibility | Notes |
|---|---|---|
| `motion/RevealText.tsx` | Overflow-mask line reveal (`y 100%→0`, 550ms, delay capped 70ms) | `as` prop (`span/div/p`); `once:true`; reduced-motion → fade |
| `utils/cn.ts` | `cn(...)` class merging | Used by headers/menus/cards |

## Page components (`src/pages/*`)

Each page owns its hero + sections + page CSS (all in `src/index.css`, no CSS
modules). All use `PageShell` for title/meta/footer. Works filters (`useState`),
capability accordion (`openIdx`, `aria-expanded`, height/opacity animation),
contact form (controlled state, inline errors, mailto fallback) are local state —
no global store. Case detail reads `:slug` via `useParams`, redirects unknown
slugs to `/cases`, and computes next case via `getNextCase`.

## Homepage (`src/components/home/*`)

Eight locked sections, each `position:relative; overflow:hidden` with an isolated
`aria-hidden` placeholder layer (`pointer-events:none`, `contain:paint`) behind
live text. Entrance motion uses per-section `useInView({once:true})` + reduced
motion. Pointer parallax is element-scoped (`onPointerMove/Leave`, fine-pointer
only, mobile forced to `transform:none`).

## Data / config

`data/site.ts` (brand, email, socials, `COLORS`, `ROUTE_COLORS`), `data/navigation.ts`
(`MAIN_NAV`, `MOBILE_NAV`, `FOOTER_NAV`, `REDIRECTS`), `data/works.ts` (6 `WorkProject`,
demo metrics flagged), `data/cases.ts` (`CaseStudy` + `getCaseBySlug/getNextCase`,
demo metrics flagged), `data/capabilities.ts` (5 groups, tech stack, models).
Keep content in data files — never duplicate copy across pages.
