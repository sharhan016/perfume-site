# ORYNOVA asset requirements

Three references were subsequently supplied: `NOX Noir Glass Perfume Bottle.png` (1536×1024), `ORYNOVA NOX Luxury Perfume Bottle.png` (1024×1536), and `Orynova_ Cinematic Luxury Fragrance UI Board.png` (1024×1536). Official packaging authority remains unconfirmed; availability updates are recorded below. Phase 1 uses HTML/CSS branded placeholders with preserved dimensions. Do not generate a bottle without an authoritative reference. Generated future campaign photography must be identified as a presentation mockup and approved before use.

- **Brand wordmark** — header/footer; wide vector SVG plus monochrome variations; shared desktop/mobile; transparent; missing; `public/images/brand/orynova-wordmark.svg`. Current fallback is editable ORYNOVA text, not an official logo.
- **Desktop campaign** — homepage hero; 16:10 or 3:2, minimum 2400px wide; negative space for HTML headline; no transparency; a supplied 1536×1024 campaign is available as `public/images/hero/collection-twilight.png`; a larger approved source remains recommended.
- **Mobile campaign** — homepage hero; 4:5 or 3:4, minimum 1200px wide; dedicated crop preserving bottle visibility; no transparency; portrait campaign now available as `public/images/hero/collection-mobile.png` (941×1672); display the complete composition.
- **NOX/FUEGO/LAZO bottle references** — authoritative packaging reference; front, side, cap and branding closeups; high resolution, shared devices; transparent optional; NOX, FUEGO and LAZO front references available; additional angles missing; `public/images/products/{slug}/reference-front.png`. Glossy black cylindrical cap, consistent geometry, vertical branding; final client packaging is authoritative.
- **Product primary photographs** — collection and detail; 4:5, minimum 1600×2000; mobile/desktop sizes derived from source; no transparency required; missing; `public/images/products/{slug}/primary.webp`.
- **Product gallery photographs** — detail; consistent 4:5 and optional 1:1 detail crops; shared devices; no transparency; missing; `public/images/products/{slug}/detail-{name}.webp`.
- **Fragrance editorial campaigns** — detail/discovery; desktop 3:2, mobile 4:5; dedicated responsive crops; no transparency; missing; `public/images/products/{slug}/editorial-{desktop,mobile}.webp`.
- **Heritage editorial** — home/story; architecture or desert, 4:5 and desktop 3:2; approved usage rights and factual context; no transparency; missing; `public/images/storytelling/heritage-{desktop,mobile}.webp`.
- **Craftsmanship editorial** — story/values; 3:2 and mobile 4:5; only authentic approved materials/process depictions; no transparency; missing; `public/images/storytelling/craftsmanship.webp`.
- **Note photography** — product notes, after verified note lists; 1:1, shared devices; transparency optional; missing; `public/images/notes/{note}.webp`.
- **Atmosphere textures** — optional background decoration; 1:1 tile or 16:9; shared devices; no transparency; missing; `public/images/textures/{name}.webp`.
- **Social sharing artwork** — OG metadata in final polish; 1200×630; shared locales unless localized artwork supplied; no transparency; missing; `public/images/brand/social-cover.webp`.
- **Favicon/app icon** — browser/install metadata; SVG and 512×512 PNG; transparent optional; missing; `public/images/brand/icon.svg`.

All meaningful headings/buttons stay in HTML. Asset paths are centralized in `src/content/assets.ts`. Next/image will serve approved raster assets with width/height, accurate sizes, hero priority only, and lazy loading below the fold. Client approval is also needed for notes, concentration, sizes, prices, brand history, contact details, domain and translations; these are content dependencies, not image assets.

## Available reference mapping
- NOX primary reference: `public/images/products/nox/reference-front.png`; landscape 3:2, opaque; shared desktop/mobile, displayed uncropped through next/image. Black cap and vertical branding match the brief.
- Alternate NOX: `public/images/products/nox/reference-alternative.png`; portrait 2:3, opaque; archived as supplied; gold cap/horizontal branding conflict with the written direction.
- Design board: `public/images/brand/design-reference-board.png`; portrait 2:3, opaque; design reference only, not page imagery. Embedded text and commerce claims must not be reused as verified content.

## Campaign asset update
- **Twilight collection campaign** — candidate desktop hero or discovery artwork; 1536×1024 (3:2); opaque; `public/images/hero/collection-twilight.png`; available and registered as `assets.hero.desktop`. No dedicated mobile counterpart supplied; avoid cropping away products. Embedded wordmark is decorative brand artwork, not a replacement for HTML headings.
- **Packaging collection campaign** — candidate editorial/discovery artwork; 1672×941 (approximately 16:9); opaque; `public/images/hero/collection-packaging.png`; available and registered as `assets.campaigns.packaging`. Mobile should display the complete composition unless a dedicated crop is approved.
- **FUEGO front reference** — collection/detail product source; 1024×1536 (2:3); opaque; `public/images/products/fuego/reference-front.png`; available and registered in product content. Glossy black cap and vertical branding match the written direction.
- **Additional NOX file** — `NOX Noir Glass PerfumeBottle.png`; visually the same reference direction as the existing spaced filename; existing mapping retained to avoid redundant public assets.

The group campaigns use horizontal branding and different bottle styling from the vertical-branding individual references. Preserve supplied artwork unchanged; resolve packaging consistency before the presentation is finalized. Imagery of ingredients is artistic direction, not verified fragrance-note data. No specifications or claims are inferred from image labels. Mobile campaign, standalone LAZO, official logo and authentic heritage/editorial assets remain outstanding. These files are prepared for Phase 2; the Phase 1 page remains unchanged.

## Latest availability — mobile campaign and LAZO
- **Portrait collection campaign** — mobile hero/discovery; 941×1672 (approximately 9:16); opaque; `public/images/hero/collection-mobile.png`; available as `assets.hero.mobile`. Black cylindrical caps and vertical branding align with the individual references. Keep all bottles visible; no replacement artwork was generated.
- **LAZO primary** — product collection/detail; 1024×1536 (2:3); opaque; `public/images/products/lazo/reference-front.png`; available as `assets.products.lazo`.
- **LAZO alternate** — alternate product artwork; 1024×1536 (2:3); opaque; `public/images/products/lazo/reference-alternative.png`; available as `assets.productAlternates.lazo`. Treat as an alternate presentation rendering rather than a distinct verified product angle.

The prior mobile-campaign and standalone-LAZO gaps are now resolved. Remaining assets: official standalone wordmark/favicon, heritage and craftsmanship editorial images, verified note imagery, additional authentic gallery angles, and final social artwork. Older availability notes above describe earlier intake checkpoints; this section is the current status. Desktop group campaigns still differ in branding from the portrait campaign and standalone bottles.
