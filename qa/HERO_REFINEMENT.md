# Homepage hero refinement

- Kept Playfair Display/Inter and Noto Naskh Arabic/IBM Plex Sans Arabic.
- Balanced English headline lines, added fluid phone sizing, and increased supporting-copy size/contrast in both languages.
- Hero-only outlined champagne CTA: localized Explore Fragrances label, 50px height, transparent fill, thin northeast arrow (northwest in RTL), 2px corners, visible keyboard focus, touch feedback and restrained fine-pointer hover.
- Mobile campaign now follows the text’s natural height with a controlled overlap and soft top/bottom transitions. The complete portrait image is retained; no bottle stretching or image mirroring.
- Header wordmark explicitly has no shadow/filter. The locale switch uses a language icon, readable endonym and a 44px touch target.
- Architecture, content access, assets and animation libraries unchanged.

Verification: lint, strict TypeScript and production build pass. English and Arabic width checks at 320, 375, 390, 430, 768, 1024 and 1440px show no document overflow; outlined CTA height is 50px throughout. Native rendered screenshots inspected on 390px mobile and 1440px desktop in both languages. Both localized hero CTA destinations and language switching verified. Hover styles are scoped to fine pointers; reduced-motion overrides include RTL. OS-level reduced-motion switching was not performed.

Evidence: `hero-refined-en-mobile.jpg`, `hero-refined-ar-mobile.jpg`, `hero-refined-en-desktop.jpg` in this directory. Older Phase 2 captures record the previous design checkpoint.
