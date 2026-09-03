# Implementation Status (truthful, route by route)

Statuses: `COMPLETE` · `NEEDS ASSETS` · `NEEDS QA` · `NEEDS CONTENT` · `BLOCKED`

## Board

| Route | Desktop | Tablet | Mobile | Nav/Footer | Interactions | Motion | A11y | SEO | Imagery | Defects |
|---|---|---|---|---|---|---|---|---|---|---|
| `/` (8 sections) | COMPLETE (locked) | COMPLETE | COMPLETE | COMPLETE | COMPLETE | COMPLETE | COMPLETE | Partial (no OG/sitemap) | NEEDS ASSETS (CSS placeholders) | none open |
| `/works` | COMPLETE | COMPLETE | COMPLETE | COMPLETE | COMPLETE (filters verified) | COMPLETE | COMPLETE | Partial | NEEDS ASSETS + NEEDS CONTENT (demo metrics) | — |
| `/cases` | COMPLETE | COMPLETE | COMPLETE | COMPLETE | COMPLETE | COMPLETE | COMPLETE | Partial | NEEDS ASSETS + NEEDS CONTENT (demo metrics) | — |
| `/cases/:slug` ×3 | COMPLETE | COMPLETE | COMPLETE | COMPLETE | COMPLETE (next-case loop) | COMPLETE | COMPLETE | Partial | NEEDS ASSETS | unknown slug redirects to `/cases` by design |
| `/capabilities` | COMPLETE | COMPLETE | COMPLETE | COMPLETE | COMPLETE (accordion) | COMPLETE | COMPLETE | Partial | NEEDS ASSETS | — |
| `/process` | COMPLETE | COMPLETE | COMPLETE | COMPLETE | COMPLETE (stacked, no pinning) | COMPLETE | COMPLETE | Partial | NEEDS ASSETS | — |
| `/about` | COMPLETE | COMPLETE | COMPLETE | COMPLETE | COMPLETE | COMPLETE | COMPLETE | Partial | NEEDS ASSETS | — |
| `/contact` | COMPLETE | COMPLETE | COMPLETE | COMPLETE | NEEDS QA (mailto fallback untested per-device) | COMPLETE | COMPLETE | Partial | NEEDS ASSETS | production endpoint TODO open |
| `/privacy`, `/terms` | COMPLETE | COMPLETE | COMPLETE | COMPLETE | — | — | COMPLETE | Partial | — | NEEDS CONTENT (legal review required) |
| 404 | COMPLETE | COMPLETE | COMPLETE | COMPLETE (footer hidden by design) | COMPLETE | COMPLETE | COMPLETE | N/A | — | — |
| Redirects | COMPLETE | — | — | — | COMPLETE | — | — | — | — | — |

Overall: structure, responsive, motion, and a11y are done; remaining work is
**final artwork, verified metrics/content, legal review, and SEO files**
(OG tags, canonicals, sitemap, robots).

## Do not regress

- Homepage composition is locked unless explicitly reopened.
- Internal routes keep the same Klovah design system (no SaaS drift).
- Native scrolling stays immediate — no smooth-scroll libs, hijacking, or nesting.
- Footer dividers stay visible and correctly inset.
- Mobile text spacing stays correct (verified `BUILT WITH PEOPLE…`, `THE BRIEF.`).
- CTA text keeps proper word spacing (flex `column-gap`, never edge-pinned arrows).
- No missing-image icons or asset 404s (zero active image requests today).
- No horizontal overflow at 320/360/390/768/1024/desktop.
- No Arena debug artifacts in downloaded production code.
