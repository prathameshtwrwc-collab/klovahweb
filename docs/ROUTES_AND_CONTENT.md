# Routes & Content

Router: `HashRouter` in `src/App.tsx` (hash URLs like `/#/works` — required for the
single-file build). Shared chrome: `SiteHeader` (non-home routes), `PageShell`
(title/meta + `SiteFooter`). Homepage keeps its own hero header + Section 8 footer.

Redirects (in `App.tsx`): `/work` → `/works`, `/about-us` → `/about`,
`/services` → `/capabilities`.

## `/` — Homepage

- Purpose: campaign narrative, eight locked sections, convert to contact/works.
- H1: `IDEAS, MADE REAL.` (Anton + Bodoni Italic). Sections: hero → value
  statement (`WE TURN AMBITION INTO SOMETHING PEOPLE CAN USE.`) → selected work
  (`WORK THAT MOVES THE NUMBER.`) → intelligence (`LESS GUESSING. MORE KNOWING.`)
  → `EVERYTHING CONNECTS.` → collaboration (`CLOSE COLLABORATION. NO BLACK BOX.`)
  → social proof → final contact (`WHAT SHOULD WE MAKE NEXT?`).
- CTAs: `MAKE SOMETHING` → `#contact` (in-page), `VIEW WORK` → `#work`,
  `START A CONVERSATION ↗` → `mailto:hello@klovah.com`.
- Components: `src/components/home/*` (8 sections + 5 placeholders),
  `src/components/navigation/MainHeader.tsx`. Data: inline copy.
- Assets: CSS doorway/gallery/wheel/envelope sets (replaceable layers).
- Responsive: bespoke desktop/tablet/mobile per section. Status: locked/approved.

## `/works` — Visual work index

- Purpose: expressive filterable index of 6 projects.
- Hero: meta `SELECTED WORK / 01–06`; H1 `WORK THAT / MOVES / THE NUMBER.`
  (Anton + Bodoni Italic); support `Brand, software and data systems…`; glass
  filter rail `ALL / BRAND & WEB / COMMERCE / APPS / AI & DATA / GROWTH` (functional).
- Sections: asymmetric grid → marquee (`STRATEGY / DESIGN / …`) → CTA
  (`SEEN ENOUGH? LET'S MAKE YOURS.` → `/contact`).
- Cards: number, title, category, year, metric, `VIEW CASE ↗` → `/cases/:slug`.
- Data: `src/data/works.ts` (`WORKS`, `WORK_FILTERS`). Metrics are demo values.
- Assets: per-card accent panels → `/public/assets/works/*.webp` (intended).

## `/cases` — Case index

- Purpose: outcome proof, distinct from visual works index.
- Hero: meta `CASE STUDIES / PROOF IN PRACTICE`; H1 `PROOF,` (Anton) +
  `NOT PROMISES.` (Bodoni Regular); support on decisions/systems/outcomes.
- Rows (3): Commerce Growth `2.4× SALES`, Operations Intelligence `61% FASTER`,
  Launch System `LIVE IN 12 WEEKS` — each with number, tags, challenge, year,
  arrow → detail route. Metrics are demo values (comment in `src/data/cases.ts`).
- Data: `src/data/cases.ts` (`CASES`, `getCaseBySlug`, `getNextCase`).

## `/cases/:slug` — Case detail (3 routes)

- Slugs: `commerce-growth`, `operations-intelligence`, `launch-system`.
- Sections: accent hero (number/title/outcome/year) → overview → challenge →
  approach → metric rail → gallery placeholder → capabilities used →
  next-case split wipe → contact CTA. Unknown slug → `<Navigate to="/cases">`.
- Copy per brief (e.g. commerce: fragmented journey → single commercial system).
- Assets: hero art + gallery → `/public/assets/cases/<slug>.webp` (intended).

## `/capabilities` — Connected team

- Hero: yellow, meta `CAPABILITIES / ONE CONNECTED TEAM`; H1 `EVERYTHING CONNECTS.`
  (Anton); support on first-question-to-product.
- Groups (accordion, one open, `aria-expanded`):
  01 Strategy / 02 Brand & Experience / 03 Full-Stack Engineering /
  04 Data, AI & Automation / 05 Growth & Optimization (5 services each).
  Desktop click re-accents; mobile is a plain accordion.
- Tech rail: `NEXT.JS / REACT / TYPESCRIPT / … / AI INTEGRATIONS` (text only).
- Models: Project / Product Partnership / Specialist Sprint → CTA
  `BRING US THE HARD PART ↗` → `/contact`.
- Data: `src/data/capabilities.ts`. Assets: circular panel → intended file.

## `/process` — Collaboration

- Hero: blue, meta `PROCESS / COLLABORATION`; H1 `NO BLACK BOX. / NO BIG REVEAL.`;
  support `You see the work. You shape the work.`
- Stages: 01 ASK / 02 MAKE / 03 TEST / 04 GROW (one-line bodies per brief),
  vertical stack, no pinning (performance decision).
- Principles: Visible Progress / Smaller Decisions / Shared Ownership →
  `CLOSE COLLABORATION. BETTER WORK.` → `/contact`.

## `/about` — Team & craft

- Hero: vermilion, meta `ABOUT / KLOVAH`; H1 `YOUNG TEAM.` (Anton) +
  `SERIOUS CRAFT.` (Bodoni Regular); support paragraph (no invented year/offices).
- Who-we-are copy (single team, fewer handoffs) + role-only cards
  (Strategy/Design/Engineering/Data/Growth — no names/photos).
- Principles (4 editorial lines) → proof strip (`20+ LAUNCHES / MULTI-SECTOR /
  GLOBAL DELIVERY` — established only) → CSS map/marker → `GOOD PEOPLE MAKE
  BETTER WORK.` + `WORK WITH KLOVAH ↗` → `/contact`.

## `/contact` — Start something

- Hero: cream + envelope layer; meta `CONTACT / START SOMETHING`;
  H1 `WHAT SHOULD / WE MAKE NEXT?` (Bodoni + Inter ExtraBold).
- Glass form: NAME / WORK EMAIL / COMPANY OR BRAND / WHAT DO YOU NEED? (8 options)
  / PROJECT SUMMARY / BUDGET (6) / TIMELINE (5) → `SEND PROJECT BRIEF ↗`.
  Behavior: inline errors + `aria-describedby`, focus-first-invalid, values
  preserved; on valid submit opens `mailto:hello@klovah.com` with encoded brief
  and shows "Your email app should open…". No fake success. Endpoint TODO in code.
- Direct panel: `PREFER EMAIL? hello@klovah.com / BASED IN INDIA. WORKING WORLDWIDE.`

## `/privacy`, `/terms` — Legal placeholders

- Cream, shared chrome, narrow column, `Last updated: January 2025` from
  `src/data/site.ts`. **Require professional legal review.** No entity details.

## 404

- `404 / THIS IDEA WENT SOMEWHERE ELSE.` + `Let's get you back…` +
  `BACK HOME` (/) + `VIEW WORK` (/works); settling paper pieces; footer hidden.
