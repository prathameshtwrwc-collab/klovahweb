# QA Checklist — Final Pass

Check every box before calling the project production-ready.

## Functional

- [ ] Every header nav link opens its route (`/works /cases /capabilities /process /about`, CTA → `/contact`)
- [ ] Every footer link works (nav + Instagram/LinkedIn/Email + Privacy/Terms)
- [ ] Homepage CTAs work (`MAKE SOMETHING`, `VIEW WORK`, `START A CONVERSATION ↗`)
- [ ] Works filters update the grid (`All` + 5 categories)
- [ ] `VIEW CASE` links open the correct `/cases/:slug`
- [ ] All three case routes render; unknown slug redirects to `/cases`
- [ ] Next-case loop cycles through all three cases
- [ ] Capability accordion opens one group, animates, `aria-expanded` correct
- [ ] Mobile menu opens/closes, Escape works, scroll restores, focus returns
- [ ] Contact form: empty submit shows inline errors + focuses first invalid field
- [ ] Contact form: bad email rejected; valid submit opens `mailto:` + shows fallback note
- [ ] Redirects work: `/work` → `/works`, `/about-us` → `/about`, `/services` → `/capabilities`
- [ ] 404 shows for unknown paths with working `BACK HOME` + `VIEW WORK`

## Visual

- [ ] No missing assets / broken-image icons (console has zero image 404s)
- [ ] No clipped text (periods on `MADE REAL.`, `THE NUMBER.`, `CONNECTS.`, `NEXT?` visible)
- [ ] No overlapping sections at any width
- [ ] Word spacing correct (`BUILT WITH PEOPLE, FOR PEOPLE.`, `THE BRIEF.`, CTA label+arrow grouped)
- [ ] Footer rules visible and correctly inset on every page + footer
- [ ] No horizontal overflow at 320 / 360 / 390 / 768 / 1024 / 1280 / 1440 / 1920
- [ ] Only intended CSS placeholders remain (no accidental empty boxes)
- [ ] Fonts render as Anton / Bodoni / Inter (no fallback stack visible)
- [ ] Active nav state underlines the current route (internal pages)

## Responsive (test each)

- [ ] 320×700 · 360×740 · 390×844 · 768×1024 · 1024×768 · 1280×800 · 1440×900 · 1920×1080
- [ ] Mobile: recomposed layouts (not scaled canvases), 20px gutters, ≥44px targets
- [ ] Mobile menu, accordion, forms, footer all usable one-handed

## Performance

- [ ] Wheel/trackpad/touch scroll responds immediately (no float, inertia, or catch-up)
- [ ] No scroll-jacking, nested scroll areas, or persistent body lock
- [ ] No duplicate scroll listeners; single header threshold listener only
- [ ] No RAF scroll loops; pointer parallax element-scoped + reset on leave
- [ ] No layout shift on load (fluid type, reserved art boxes)
- [ ] Below-fold imagery (when added) lazy-loads with dimensions
- [ ] Bundle has no smooth-scroll library (`lenis`, `locomotive`, `gsap/ScrollSmoother` absent)
- [ ] Marquee pauses off-screen/hidden-tab and is off on mobile + reduced motion

## Accessibility

- [ ] Full keyboard pass: Tab order sane, all controls reachable, focus always visible
- [ ] Screen-reader pass: landmarks, one H1/page, decorative art hidden, form errors announced
- [ ] `prefers-reduced-motion`: reveals/menu/marquee collapse to fades, no parallax
- [ ] Contrast spot-check on every color pairing, including final imagery

## Build

- [ ] `npx tsc --noEmit` passes with zero errors
- [ ] `npm run build` passes and emits `dist/index.html`
- [ ] No console errors or asset 404s from project code in production preview
