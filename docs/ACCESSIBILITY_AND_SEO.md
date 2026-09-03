# Accessibility & SEO — Verified Checklist

Checked against `src/pages/*`, `src/components/*`, `src/index.css`, `index.html`.

## Accessibility

| Item | Status | Evidence |
|---|---|---|
| Semantic heading hierarchy (one H1/page) | Complete | Every page renders one `<h1>`; sections use `<h2>`/`<h3>` in order |
| Landmarks (`header/main/nav/footer/section`) | Complete | `SiteHeader`, `main` per page, labelled `nav`s, `SiteFooter`, labelled sections |
| Nav labels | Complete | `aria-label` on main/mobile/footer navs |
| Keyboard operability | Complete | Real links/buttons; accordion + menu are `<button>`s; cards link to cases |
| Visible focus | Complete | `:focus-visible` outlines on links/buttons/inputs/menu/CTA (never removed bare) |
| Accordion ARIA | Complete | `aria-expanded` on capability + mobile controls |
| Menu focus + Escape | Complete | Focus moves to Close, Escape closes, body lock restores, focus returns |
| Form labels/validation | Complete | Visible `<label>`s, `aria-describedby` errors, first-invalid focus, values kept, proper `autocomplete`, no keystroke validation |
| Color contrast | Partial | Near-black on cream/yellow/lavender verified; sky-blue/overlay small text must be re-checked per final asset |
| Reduced motion | Complete | `useReducedMotion` + `@media (prefers-reduced-motion)` guards on reveals/menus/marquee/parallax |
| Image alt / decorative handling | Complete | All placeholders `aria-hidden`; no `<img>` ships yet — meaningful future images need concise alt |
| Touch targets / overflow | Complete | ≥44px targets, 20px gutters, `overflow-x: clip`, no page-level horizontal scroll |

## SEO / metadata

| Item | Status | Evidence |
|---|---|---|
| Page titles | Complete | `PageShell` sets `Title \| Klovah`; home `Klovah — Ideas, Made Real.` |
| Meta descriptions | Complete | Per-route descriptions via `PageShell`; base tag in `index.html` |
| Open Graph / Twitter cards | Missing | No OG/Twitter tags or images — add with final artwork |
| Canonical URLs | Missing | No canonical tags (SPA + hash URLs) — add on deploy |
| Sitemap | Missing | No `sitemap.xml` — generate after domain is fixed |
| Robots | Missing | No `robots.txt` — add with sitemap reference |
| 404 behavior | Complete | Branded 404 with `BACK HOME` + `VIEW WORK`, footer hidden |
| Semantic URLs | Partial | Clean paths, but `HashRouter` yields `/#/works` (required by single-file build) |
