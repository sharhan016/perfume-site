# Phase 1 verification

## Passed
- `npm run build`: production build with Next.js 16.4.0 using its supported Webpack compiler. Both locale homepages and collection/story/contact foundation destinations statically generated.
- `npm run typecheck`: strict TypeScript passed; final production build also completed its TypeScript check after the keyboard fix.
- HTTP: `/` resolves to `/en`; all eight localized foundation routes return 200; an unknown route returns 404.
- Browser: English document is `lang=en, dir=ltr`; Arabic is `lang=ar, dir=rtl`.
- Language switch keeps `/fragrances`, query `?source=preview`, and hash `#main`.
- English and Arabic homepage DOM width checks at 320, 375, 390, 430, 768, 1024, 1440 and 1920px: document scroll width equals viewport width.
- NOX reference image loads successfully with descriptive translated alt text.
- Arabic mobile menu: initial focus on close control; Shift+Tab loops to language link; Tab loops back; Escape dismisses dialog and restores trigger focus. English menu opening, Escape dismissal and trigger restoration also verified.
- Keyboard focus gap discovered in native dialog behavior was corrected with an explicit first/last control loop.
- Reference images preserved unchanged. Pricing, ratings, notes and claims in the reference board are not used as verified content.
- npm install reported zero vulnerabilities at installation.

## Verification limits
- Responsive width checks establish absence of document overflow; they are not a complete device/browser matrix or final visual audit.
- Reduced-motion support is implemented via MotionConfig and CSS media query; OS-level reduced-motion behavior was not exercised.
- No Lighthouse score or Core Web Vitals measurement is claimed. Those belong to the final image-complete experience.
- Arabic copy is draft and requires professional review.
- The default Turbopack compiler failed on restricted internal port binding. Webpack dev/build scripts are used; production build passed.
- Next/font requires Google Fonts access during the first build, then serves downloaded fonts locally in the build output.
- Phase 2 homepage, final collection UI, dynamic product-detail routes, full brand pages, and final production SEO remain intentionally deferred.

## Review artifact
`phase-1-preview.jpg` captures the foundation preview. Run `npm run dev` and open `/en` or `/ar` for interactive review. The temporary QA server was stopped after verification.
