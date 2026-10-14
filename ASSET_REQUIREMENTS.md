# ORYNOVA asset requirements — current inventory

All supplied source images are preserved unchanged. Display assets have been converted to WebP without changing bottle designs or proportions. Packaging and product data shown in artwork are not treated as verified specifications.

## Available and used in Phase 2

- **Desktop hero / NOX primary** — `NOX Noir Glass Perfume Bottle.png` → `public/images/products/nox/primary.webp`; 1536×1024 (3:2), opaque. Desktop hero and NOX showcase use a centered crop retaining the whole bottle. Arabic composition repositions the image without mirroring it.
- **Mobile/tablet hero** — `Orynova Arabian Nights Perfume Collection.png` → `public/images/hero/campaign-mobile.webp`; 941×1672 (approximately 9:16), opaque. Portrait composition for phones; image beside the text on tablets. No desktop image is downloaded as a hidden mobile priority image.
- **FUEGO primary** — `ORYNOVA Fuego Amber PerfumeBottle.png` → `public/images/products/fuego/primary.webp`; 1024×1536 (2:3), opaque. Contained in a shared responsive showcase frame.
- **LAZO primary** — `Luxurious Lazo Burgundy Perfume Bottle.png` → `public/images/products/lazo/primary.webp`; 1024×1536 (2:3), opaque. Contained in a shared responsive showcase frame.
- **Storytelling campaign** — `Orynova Luxury Perfume Collection.png` → `public/images/storytelling/collection-packaging.webp`; 1672×941 (approximately 16:9), opaque. Whole composition, without product cropping, on both device classes.
- **Discovery campaign** — `ORYNOVA Perfume Collection in Golden Twilight.png` → `public/images/hero/campaign-desktop.webp`; 1536×1024 (3:2), opaque. Complete composition above mobile copy and beside desktop copy.
- **Visual design reference** — `Orynova_ Cinematic Luxury Fragrance UI Board.png`; design direction only. UI text, prices, ratings and notes embedded in the board are not reused as factual content.

## Available alternatives

- LAZO burgundy-atmosphere variant: `public/images/products/lazo/reference-alternative.png`; 1024×1536, opaque; registered but not used on the homepage.
- Older NOX gold-cap/horizontal-branding variant: `public/images/products/nox/reference-alternative.png`; 1024×1536; retained as an alternate, not the active product image.
- Duplicate NOX source `NOX Noir Glass PerfumeBottle.png`; existing active source retained to avoid duplicate display assets.

## Missing or recommended replacements

- **Official wordmark** — header/footer; wide SVG with monochrome variants; shared desktop/mobile; transparency required; missing; `public/images/brand/orynova-wordmark.svg`. Current editable text wordmark is a typographic fallback.
- **Authoritative packaging-consistent desktop campaign** — hero/discovery; 16:10 or 3:2, preferably at least 2400px wide; mobile companion 9:16 or 4:5; transparency not required; missing. Current group landscape campaigns have horizontal branding while individual/portrait imagery has vertical branding. Suggested `public/images/hero/campaign-approved-{desktop,mobile}.webp`.
- **Heritage-only editorial** — home/story; desktop 3:2, mobile 4:5, approved usage rights; no transparency; missing; `public/images/storytelling/heritage-{desktop,mobile}.webp`. The current story uses supplied packaging campaign artwork.
- **Authentic craftsmanship editorial** — story/values; desktop 3:2, mobile 4:5; no transparency; missing; `public/images/storytelling/craftsmanship.webp`. Values currently use icons and philosophy copy without sourcing or performance claims.
- **Additional product gallery angles** — product detail; 4:5 or 1:1; shared devices; transparency optional; missing; `public/images/products/{slug}/detail-{name}.webp`. Alternate generated renderings are not automatically treated as verified angles.
- **Verified note imagery** — detail notes, after approved note lists; 1:1; shared devices; transparency optional; missing; `public/images/notes/{note}.webp`.
- **Final OG artwork** — sharing metadata; 1200×630; shared locales unless localized artwork supplied; no transparency; missing; `public/images/brand/social-cover.webp`.
- **Official favicon/app icon** — SVG and 512×512 PNG; shared devices; transparency optional; missing; `public/images/brand/icon.svg`.

Marketing headings, translations and buttons remain HTML. Product photographs and brand marks are never mirrored. The registry is `src/content/assets.ts`; the optimization command is `npm run assets:optimize`. Client-approved contact details, company history, specifications, notes, prices, domain and Arabic editorial review are still content dependencies. No image asset is used to infer those facts.

## Interactive refinement update
NOX top/heart/base ingredient photography is now available in `public/images/notes/nox-{top,heart,base}.webp`. Each is 1536×1024, opaque 3:2, generated with the built-in imagegen tool and visually inspected. Exact prompts and visual-metaphor constraints are in `public/images/notes/GENERATION_PROMPTS.md`. Notes are supported by the supplied NOX reference board, as authorized in the current request. Product attributes LONG LASTING, PREMIUM QUALITY and CRAFTED FOR MEN are configured for NOX only. FUEGO and LAZO ingredient/attribute data remains unprovided; no extrapolation is made. Existing bottle photographs are reused unchanged. Iconography uses the established Lucide gold line system: Timer, Gem and UserRound.
