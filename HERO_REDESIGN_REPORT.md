# Cinematic ORYNOVA hero

Replaced the previous isolated split presentation with a full-width photographic stone environment, layered navy atmosphere, champagne lighting, a prominent bottle and editorial typography. Mobile/tablet use a dedicated centered portrait arrangement; desktop uses an asymmetric composition. Existing header, fonts, localized messaging, editorial CTA and all unrelated sections remain intact.

## Components and content
- Hero remains a Server Component responsible for localized content and fragrance lookup.
- CinematicHero is a focused client component for scene, product and typography scroll layers.
- CinematicEntrance choreographs the environment, product, masked headline lines and supporting content. Server content remains visible without JavaScript.
- Home hero configuration selects the featured fragrance and background through structured content. An optional isolated image lives on each product; original opaque product photography remains an explicitly blended fallback, never assumed transparent.
- English and Arabic keep their existing marketing copy. Directional layout/CTA behavior adapts to RTL, while all bottle and background imagery stays unmirrored.

## Motion
The environment settles over 1.3 seconds. The bottle enters with 24px lift and a restrained .965-to-1 scale. Three headline lines stagger by 100ms; support/CTA begin at 550ms. There is no blocking loader. Separate parent layers respond to native scroll: background moves up to 75px, bottle rises up to 55px with a maximum 1.045 scale, and headline gently recedes. A static light overlay changes opacity with scroll. No pinning, scroll hijacking, continuous animation, animated blur, GSAP or new dependencies were introduced. Reduced motion fixes the scroll layers and removes entrance motion.

## Assets
Generated using the built-in image_gen tool, then optimized to responsive WebP delivery:
- public/images/hero/environment-v2.webp — 1672×941, about 177 KiB, opaque environmental backdrop.
- public/images/products/nox/isolated-v2.webp — 549×1072, about 89 KiB, verified alpha-transparent derivative of the supplied NOX image. Black cap, vertical gold branding, navy glass and bottle proportions were inspected against the reference. Only unused transparent canvas was trimmed for delivery, with clear padding retained.
Original supplied images remain unchanged. No headline/CTA is baked into imagery. Both hero layers load eagerly with responsive sizes and reserved layout. Exact prompts and generated originals are recorded in public/images/hero/GENERATION_PROMPTS.md. No required hero asset is missing.

## Verification
- Rendered screenshots reviewed on mobile and desktop in English and Arabic. Fixed the mobile caption overlap discovered during review and refined tablet/wide-desktop typography.
- Both locales checked at 320, 375, 390, 430, 768, 1024, 1440 and 1920px: no horizontal document overflow; hero images loaded; CTA remains 50px high.
- Bottle cap, base and branding visible in the reviewed compositions; opacity/transform animation does not affect layout geometry. Image dimensions and stable section sizing reserve space; measured CLS is not claimed.
- Live browser entrance motion sampled on mobile and desktop: intermediate bottle scale/lift, headline translation and background scale observed.
- Native scroll cue tested into the existing collection. Browser inspection confirmed product/background transforms and text opacity respond to progress without pinning or scroll lag being introduced by a spring.
- Mobile viewport CTA clicks and keyboard activation navigate to /en/fragrances. Language switching works through the existing localized control; Arabic direction and unmirrored product presentation verified.
- Standard/reduced-motion simulated-DOM regression tests now cover the new cinematic entrance and visible server output. Real OS-level reduced-motion emulation and physical mid-range-device profiling were unavailable.
- Lint, TypeScript, motion regression tests and production build passed. No browser console errors observed during verification.

## Limits
No Lighthouse/Core Web Vitals score was measured. Browser QA used responsive viewport emulation, not physical devices. No unrelated pages, commerce or later implementation phases were changed.

Visual evidence: qa/cinematic-hero-en-mobile.jpg, qa/cinematic-hero-en-desktop.jpg, qa/cinematic-hero-ar-mobile.jpg and qa/cinematic-hero-ar-desktop.jpg.

## Inspiration reviewed
[React Bits](https://reactbits.dev/), [Aceternity UI](https://ui.aceternity.com/), [Motion](https://motion.dev/), [GSAP](https://gsap.com/) and [Codrops](https://tympanus.net/codrops/) informed restrained layering/reveal patterns. Implementation uses the existing Motion dependency, following [useScroll](https://motion.dev/docs/react-use-scroll) and [accessibility guidance](https://motion.dev/docs/react-accessibility).
