# Project Context — Klovah

## Purpose

Klovah is a young full-stack technology team selling outcomes, not hours. The site
must convert ambitious businesses (startups, established companies, ecommerce,
healthcare, industrial, education, lifestyle) into project enquiries by proving
that strategy, design, technology, data, and growth work as one connected system.

## Brand personality

Confident, warm, editorial, human, playful-but-purposeful. Awwwards-level campaign
energy without futuristic-AI clichés: paper textures, flat primary color fields,
oversized typography, physical-set compositions (doorways, galleries, envelopes,
wheels, boards), and real business metrics.

## Audience

- Startup founders validating or launching products
- Established businesses modernising brand + systems
- Ecommerce operators needing measurable growth
- Healthcare / industrial teams needing useful data products
- Any professional buyer who fears the agency "black box"

## Primary website goals

1. Make "Ideas, Made Real." instantly legible on first paint.
2. Prove range: brand, web, software, ecommerce, apps, data, AI, SEO, social, 3D.
3. Prove outcomes: 2.4× sales, 61% faster, live in 12 weeks, 20+ launches.
4. Route visitors to `/works`, `/cases/*`, `/capabilities`, `/process`, `/contact`.
5. Capture briefs via the contact form (currently `mailto:` fallback).

## Visual direction

Editorial campaign system: Anton condensed display against Bodoni Moda serif
contrast, Inter for everything functional. Warm cream paper base, near-black ink,
vermilion red as the strongest accent, with sun yellow, lavender, sky blue, and
cobalt in supporting roles. Thin 1px rules, small red dots, cropped circles and
panels, restrained glass only on small surfaces.

## "Ideas, Made Real."

The central promise: Klovah turns ambitious business ideas into real, useful,
polished digital products. Homepage Section 1 renders it as `IDEAS,` (Anton) +
`MADE REAL.` (Bodoni Moda Italic) overlapping a red doorway set.

## Homepage narrative (locked Sections 1–8)

1. **Hero** — `IDEAS, MADE REAL.` over the red doorway; `MAKE SOMETHING` CTA.
2. **Value statement** — `WE TURN AMBITION INTO SOMETHING PEOPLE CAN USE.`
3. **Selected work** — lavender hanging gallery, `WORK THAT MOVES THE NUMBER.`
4. **Intelligence** — `LESS GUESSING. MORE KNOWING.` + process rail.
5. **Connected capabilities** — vertical `EVERYTHING CONNECTS.` + capability wheel.
6. **Collaboration** — `CLOSE COLLABORATION. NO BLACK BOX.` on campaign blue.
7. **Social proof** — Bodoni testimonial + yellow stats strip.
8. **Final contact** — `WHAT SHOULD WE MAKE NEXT?` + black CTA + footer.

## Internal-page purpose

- `/works`: visual index + working filters → case routes.
- `/cases` + `/cases/:slug`: outcome proof, challenge/approach, next-case loop.
- `/capabilities`: five-group accordion + tech rail + engagement models.
- `/process`: Ask/Make/Test/Grow + collaboration principles.
- `/about`: team roles (no invented names), principles, established proof only.
- `/contact`: validated brief form + direct email panel.
- `/privacy`, `/terms`: readable legal placeholders (need professional review).
- 404: playful recovery (`BACK HOME`, `VIEW WORK`).

## Current build stage

- App shell, routing (`HashRouter`), shared header/footer/menu, all 12 routes +
  3 redirects + 404: **implemented**.
- Typed data layer (`src/data/*`): **implemented**.
- Contact validation + `mailto:` fallback: **implemented**.
- Final artwork: **not started** — CSS placeholders stand in everywhere.
- Legal copy: **placeholder, needs review**. Metrics: **demonstration values**.

## Future asset-replacement stage

Final photography/illustration drops into `/public/assets/*` and replaces the
contents of placeholder layers only. Layout, typography, and interaction structure
must remain stable during replacement (see `ASSET_MANIFEST.md`).

## Constraints & decisions (locked)

- Single-file Vite build (`dist/index.html`); `HashRouter` so no server rewrites.
- Google Fonts via CSS `@import` with `display=swap`.
- **Native scrolling only** — no Lenis/smooth-scroll libs (none installed).
- Performance and immediate scroll response outrank excessive motion.
- Current placeholders may look simple; that is intentional and temporary.
