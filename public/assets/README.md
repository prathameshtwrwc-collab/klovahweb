# `/public/assets` — Final Artwork Drop Zone

No final artwork files are present yet. All current visuals are CSS placeholders
inside replaceable background layers. This folder is the only place final images go.

## Folder convention (route-based)

```text
public/assets/
  works/         # works index cards
  cases/         # case index rows + detail galleries
  capabilities/  # circular connected-system panel
  process/       # collaboration boards / step panels
  about/         # team collage, principles, map accents
  contact/       # envelope frame accents
  shared/        # grain/texture only if a raster is ever needed (CSS noise preferred)
```

## File naming

Lowercase, hyphenated, stable slugs, e.g.:

```text
public/assets/works/commerce-growth.webp
public/assets/works/operations-intelligence.webp
public/assets/works/launch-platform.webp
public/assets/works/brand-commerce.webp
public/assets/works/data-activation.webp
public/assets/works/growth-optimization.webp
public/assets/cases/commerce-growth.webp
public/assets/cases/operations-intelligence.webp
public/assets/cases/launch-system.webp
public/assets/capabilities/connected-system.webp
public/assets/process/collaboration-boards.webp
public/assets/about/team-craft.webp
public/assets/about/principles-craft.webp
public/assets/contact/contact-frame.webp
```

## Format & size guidance

- Prefer **WebP** (AVIF optional). PNG only when true alpha is required.
- SVG only for deterministic vector graphics (icons, dividers, arrows).
- Keep hero/banner images ≤ 2400px on the long edge; cards ≤ 1400px.
- Compress aggressively (target ≤ 250KB per image where possible).
- Desktop/mobile crops: prefer one master + CSS `object-fit: cover` with explicit
  `object-position` over duplicate files, unless the crop truly differs.

## Placement rules (prevent layout shift)

- Give every `<img>` explicit `width`/`height` or an aspect-ratio box.
- Use `object-fit: cover` + intentional `object-position`.
- `loading="eager"` + `fetchpriority="high"` only for true above-the-fold heroes.
- Everything below the fold: `loading="lazy"` + `decoding="async"`.
- Keep all headings/buttons/body copy as **live HTML** — never bake text, logos,
  or key copy into the raster. Preserve safe zones for desktop + mobile crops.
- Alt text: meaningful images get concise alt; decorative layers stay
  `aria-hidden="true"` with empty/missing alt.

## How to replace a placeholder in VS Code

1. Export/optimize the final image and drop it at its manifest path above.
2. Open the section's `*ArtworkPlaceholder.tsx` (or background layer) and swap the
   CSS shapes for an `<img>` (or `background-image`) pointing at `/assets/...`.
3. Keep the wrapper's class names, `aria-hidden`, `pointer-events: none`, and
   `contain: paint` intact so layout does not move.
4. Verify desktop + 360px widths, then update `docs/ASSET_MANIFEST.md` status.
5. Run `npx tsc --noEmit` and `npm run build`.
