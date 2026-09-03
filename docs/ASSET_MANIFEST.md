# Asset Manifest — Placeholder → Final Artwork

**Status today: no final images exist.** Every visual is a CSS placeholder inside a
replaceable layer (`aria-hidden="true"`, `pointer-events: none`, `contain: paint`).
No local image is requested, so there are zero image 404s. The table below is the
replacement plan — filenames are **intended**, not present.

Conventions: WebP preferred (AVIF optional; PNG for alpha; SVG for vectors);
heroes ≤2400px, cards ≤1400px, ≤250KB target; explicit dimensions/aspect-ratio;
`object-fit: cover` + intentional `object-position`; eager only above the fold,
lazy + `async` below; **never bake text/logos into rasters**; keep safe zones.

## Replacement table

| Asset ID | Route | Section / card | Current | Recommended filename | Ratio / treatment | Fit / position | Alt | Priority | Status |
|---|---|---|---|---|---|---|---|---|---|
| HOME-01 | `/` | Hero doorway set | CSS red doors + figure | — (keep CSS or art-direct later) | 16:9 cover | center | decorative (`aria-hidden`) | — | TEMP |
| HOME-03 | `/` | Gallery panels | CSS pink/blue/industrial collages | `/public/assets/home/gallery-panels.webp` | 3:4 portraits | center | decorative | lazy | NEEDS ASSETS |
| HOME-05 | `/` | Capability wheel | CSS ring + segments | `/public/assets/home/capability-wheel.webp` | 1:1 | center | decorative | lazy | NEEDS ASSETS |
| HOME-08 | `/` | Envelope scene | CSS envelope + samples | `/public/assets/home/envelope-scene.webp` | 16:10 cover | center | decorative | lazy | NEEDS ASSETS |
| WORK-01..06 | `/works` | 6 project cards | Accent panels | `/public/assets/works/{commerce-growth,operations-intelligence,launch-platform,brand-commerce,data-activation,growth-optimization}.webp` | 4:3 / 3:4 mixed | per-card | decorative or concise alt if informative | lazy | NEEDS ASSETS |
| CASE-01..03 | `/cases`, `/cases/*` | Rows + detail hero/gallery | Accent blocks | `/public/assets/cases/{commerce-growth,operations-intelligence,launch-system}.webp` | 16:9 hero, 4:3 gallery | center | decorative | hero eager on detail, rows lazy | NEEDS ASSETS |
| CAP-01 | `/capabilities` | Circular system panel | CSS circle | `/public/assets/capabilities/connected-system.webp` | 1:1 | center | decorative | lazy | NEEDS ASSETS |
| PROC-01 | `/process` | Step panels / boards | CSS cards | `/public/assets/process/collaboration-boards.webp` | 4:3 | center | decorative | lazy | NEEDS ASSETS |
| ABOUT-01/02 | `/about` | Team collage, principles | Role dots, CSS map | `/public/assets/about/{team-craft,principles-craft}.webp` | 4:3 / 16:9 | center | decorative | lazy | NEEDS ASSETS |
| CONTACT-01 | `/contact` | Envelope frame | CSS envelope | `/public/assets/contact/contact-frame.webp` | 16:9 | center | decorative | lazy | NEEDS ASSETS |

## How to replace a placeholder in VS Code (without moving layout)

1. Optimize the export (WebP, sized, compressed) and save it at the exact
   manifest path above.
2. Open the matching `*ArtworkPlaceholder.tsx` / background layer. Keep the
   wrapper's class name, `aria-hidden="true"`, `pointer-events: none`, and
   `contain: paint`.
3. Swap inner CSS shapes for:
   `<img src="/assets/....webp" alt="" width="…" height="…" loading="lazy" decoding="async" style={{objectFit:'cover',objectPosition:'center'}} />`
   (empty `alt` + `aria-hidden` parent for decorative art; meaningful alt only if
   the image conveys information).
4. Confirm desktop + 360px: no layout shift, no text covered, no overflow.
5. Flip the row above to `COMPLETE`, run `npx tsc --noEmit` + `npm run build`.
