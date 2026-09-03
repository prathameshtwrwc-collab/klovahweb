# Klovah — Ideas, Made Real.

Klovah is a young full-stack technology team building brand and website development,
full-stack software systems, ecommerce, mobile applications, data engineering, analytics,
AI and automation, SEO, social campaign systems, 3D web experiences, and product strategy.

This repository contains the Klovah marketing website: an 8-section homepage plus
internal routes for works, cases, capabilities, process, about, contact, privacy, terms,
and a branded 404 page.

> Stack note: the original brief asked for Next.js App Router. The actual implementation
> in this repository is **React + Vite + React Router (HashRouter)** emitting a single
> `dist/index.html` via `vite-plugin-singlefile`. All docs below describe the real code.

## Stack

| Layer | Implementation |
|---|---|
| Framework | React 19.2.6 + React DOM 19.2.6 |
| Build | Vite 7.3.2 + `@vitejs/plugin-react` 5.1.1 |
| Styling | Tailwind CSS 4.1.17 via `@tailwindcss/vite` 4.1.17 |
| Routing | `react-router-dom` 7.18.3 (`HashRouter`) |
| Motion | `framer-motion` 13.2.0 |
| Utils | `clsx` 2.1.1, `tailwind-merge` 3.4.0 |
| Language | TypeScript 5.9.3 (strict, `noUnusedLocals`, `noUnusedParameters`) |
| Fonts | Google Fonts `@import` in `src/index.css` (Anton, Bodoni Moda, Inter, `display=swap`) |
| Package manager | npm (see `package-lock.json`) |
| Import alias | `@/*` → `src/*` (see `tsconfig.json` + `vite.config.ts`) |

Node verified during handoff: **v20.20.2**, npm **10.8.2**.

## Quick start

```bash
# 1. Install
npm install

# 2. Develop (Vite dev server, default http://localhost:5173)
npm run dev

# 3. Production build (emits dist/index.html, single file)
npm run build

# 4. Preview the production build locally
npm run preview

# 5. Type-check (no dedicated script in package.json — run directly)
npx tsc --noEmit
```

There is **no lint script** in `package.json`. If ESLint is desired in VS Code,
add it as a new devDependency there; do not assume it exists here.

## Environment variables

No environment variables are required. The contact form uses a `mailto:` fallback
and there is no backend, CMS, analytics, or auth integration.

```bash
cp .env.example .env
# .env.example documents the optional placeholder keys only.
```

Never commit real secrets or any `.env` file.

## Routes

| Route | Page |
|---|---|
| `/` | Homepage (8 locked sections) |
| `/works` | Visual work index with filters |
| `/cases` | Outcome-driven case index |
| `/cases/commerce-growth` | Case detail |
| `/cases/operations-intelligence` | Case detail |
| `/cases/launch-system` | Case detail |
| `/capabilities` | Capability accordion + engagement models |
| `/process` | 4-stage process (Ask / Make / Test / Grow) |
| `/about` | Team, principles, proof strip |
| `/contact` | Glass form panel + direct contact |
| `/privacy` | Privacy policy (needs legal review) |
| `/terms` | Terms of service (needs legal review) |
| `/work` → `/works`, `/about-us` → `/about`, `/services` → `/capabilities` | Permanent in-app redirects |
| unknown path | Branded 404 (`BACK HOME`, `VIEW WORK`) |

Because the app uses `HashRouter`, URLs look like `/#/works`. This keeps every route
working from the single-file `dist/index.html` with no server rewrites.

## Assets

```
/public/assets/
  works/         # per-project artwork (intended, not yet present)
  cases/         # per-case artwork (intended, not yet present)
  capabilities/  # circular system artwork (intended)
  process/       # collaboration boards (intended)
  about/         # team / principles artwork (intended)
  contact/       # envelope frame (intended)
```

All current visuals are **CSS placeholders** inside replaceable background layers
(`aria-hidden="true"`). No local or remote image files are requested today, so the
console has no image 404s. See `docs/ASSET_MANIFEST.md` and `public/assets/README.md`.

## Documentation index

- `AGENTS.md` — non-negotiable rules for future contributors and AI assistants
- `docs/PROJECT_CONTEXT.md` — brand, goals, narrative, build stage
- `docs/DESIGN_SYSTEM.md` — real tokens extracted from code
- `docs/ROUTES_AND_CONTENT.md` — every route, headline, CTA, data source
- `docs/COMPONENT_ARCHITECTURE.md` — file-by-file architecture + dependency map
- `docs/ASSET_MANIFEST.md` — placeholder → final artwork replacement table
- `docs/ANIMATION_SYSTEM.md` — allowed motion, timings, performance rules
- `docs/RESPONSIVE_SYSTEM.md` — behavior at 320 / 360 / 390 / 768 / 1024 / 1280 / 1440+
- `docs/ACCESSIBILITY_AND_SEO.md` — verified checklist (Complete / Partial / Missing)
- `docs/IMPLEMENTATION_STATUS.md` — truthful status board + do-not-regress list
- `docs/QA_CHECKLIST.md` — final checkbox QA
- `docs/VSCODE_HANDOFF.md` — download → verify → assets → ship steps

## Current status

Homepage Sections 1–8 are approved and locked. Internal pages are implemented with
typed data files (`src/data/*`), shared header/footer/menu, and validated contact
form. Final photographic/illustrated artwork is **not yet present** — CSS placeholders
stand in. Legal copy needs professional review. Case/work metrics are demonstration
values and must be replaced with verified data before production (marked in code).

## Download-to-VS-Code workflow

1. Download / export the project and extract it locally.
2. Open the folder in VS Code.
3. Run `npm install`, then `npm run dev`.
4. Follow `docs/VSCODE_HANDOFF.md` for routes, assets, QA, and deployment.

## Deployment notes

- `npm run build` produces a single self-contained `dist/index.html`.
- Serve `dist/` as static files on any static host (no SSR, no server rewrites needed
  thanks to `HashRouter`).
- Preview locally first with `npm run preview`.
- Do not reference OG images or remote textures that do not exist.
