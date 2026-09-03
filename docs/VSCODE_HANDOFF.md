# VS Code Handoff — Download → Verify → Assets → Ship

## 0. What you are downloading

A Vite + React + React Router SPA that builds to a single `dist/index.html`.
Homepage Sections 1–8 are locked; internal routes, data layer, and docs are in
place; final artwork is intentionally CSS placeholders.

## 1. Download & extract

1. Export/download the project ZIP from Arena.
2. Extract into a clean folder, e.g. `~/projects/klovah/`.
3. Open that folder in VS Code (`File → Open Folder…`).

## 2. Verify toolchain

Requires Node 20+ and npm 10+ (handoff verified on Node v20.20.2 / npm 10.8.2).

```bash
node -v   # want v20+
npm -v    # want v10+
```

macOS/Linux and Windows PowerShell commands below are identical unless noted.

## 3. Install & configure

```bash
npm install
cp .env.example .env        # macOS / Linux / Git Bash
# Copy-Item .env.example .env   # Windows PowerShell alternative
```

`.env` is git-ignored and currently optional (no backend). Keep it anyway so
future keys have a home. Never commit secrets.

## 4. Run locally

```bash
npm run dev        # develop — default http://localhost:5173
```

Verify every route (note the `#` — `HashRouter`):

```text
/#/  /#/works  /#/cases  /#/cases/commerce-growth
/#/cases/operations-intelligence  /#/cases/launch-system
/#/capabilities  /#/process  /#/about  /#/contact
/#/privacy  /#/terms  /#/work  /#/about-us  /#/services  /#/does-not-exist
```

## 5. Add final assets

1. Follow `public/assets/README.md` + `docs/ASSET_MANIFEST.md`.
2. Drop optimized WebP files under `/public/assets/<route>/…`.
3. Swap each placeholder layer's inner shapes for an `<img>` (keep wrapper
   classes, `aria-hidden`, `pointer-events:none`, `contain:paint`).
4. Check desktop + 360px for cropping, safe zones, and contrast.
5. Mark rows COMPLETE in the manifest as you go.

## 6. Content & legal

- Replace demo metrics in `src/data/works.ts` + `src/data/cases.ts` with verified
  data (remove the in-code TODO comments once done).
- Get `privacy`/`terms` copy professionally reviewed.
- Add OG/Twitter tags, canonicals, `sitemap.xml`, `robots.txt` once the domain
  is fixed (currently Missing — see `ACCESSIBILITY_AND_SEO.md`).

## 7. QA, then build

Work through `docs/QA_CHECKLIST.md` (functional → visual → responsive →
performance → a11y), then:

```bash
npx tsc --noEmit   # type-check (no npm script — run directly)
npm run build      # production build → dist/index.html
npm run preview    # serve the build locally and re-check console + routes
```

There is no lint script — add ESLint in VS Code if you want it.

## 8. Checkpoint & deploy

```bash
git init            # only if not a repo yet
git add -A
git commit -m "Klovah handoff: docs, assets plan, verified build"
```

Deploy `dist/` as static files to any static host (no SSR or rewrites needed).
Re-verify the preview URL on mobile + desktop before announcing.
