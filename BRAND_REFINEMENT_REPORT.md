# ORYNOVA brand-experience refinement

Completed the authorized homepage and collection refinement while preserving the existing App Router architecture, fonts, design tokens, content adapter and bilingual routes. No full product-detail routes or commerce integration were added.

## Experience
- Unified navigation-oriented actions through PremiumCta/EditorialLink: champagne typography, animated underline, fine directional arrow, 50px touch targets and visible keyboard focus. Future commerce actions retain a separate opt-in style.
- Cinematic collection browsing uses dynamic editorial entries with theme-specific atmosphere, 1.04 bottle scaling and 14px hover/focus lift. Keyboard focus takes precedence over a stationary pointer. No fragrance is highlighted permanently.
- More Than a Fragrance pairs NOX photography with LONG LASTING, PREMIUM QUALITY and CRAFTED FOR MEN; timer, diamond and suit/person icons appear with progressive reveals. Attributes and featured-product selection remain configurable.
- The Art of Fragrance offers a configurable initial fragrance, native accessible fragrance selector, top/heart/base tabs, two-note previews and a matching localized collection CTA. Full composition lists are retained in structured data rather than crowded into the homepage.
- Collection disclosures show campaign messaging and compact note previews, preparing shared components for later detailed product pages.

## Shared components and motion
PremiumCta, FadeReveal, HeroEntrance, ParallaxImage, CollectionEntry, FragranceAttributes, NotesExperience and the new FragrancePreview provide reusable presentation. Homepage BrandValues and FragranceNotes were refined. Motion uses opacity/transform entrances, staggered attributes, restrained scroll parallax, bottle hover/focus/tap feedback and note/image transitions. Existing reduced-motion support remains active; no extra animation framework, continuous floating or scroll locking was introduced.

## Verified brand content
NOX now contains the exact four top notes, two heart notes and nine base notes from the latest user reference, plus its campaign headline and supporting message. FUEGO contains all three supplied notes per category and Bold. Warm. Unforgettable. LAZO uses Unveil Your Mystic and The Essence of Exotic Charm; its three overlapping top-note entries remain verbatim. Only NOX carries the supplied gender-specific attribute. All notes and campaign fields have Arabic equivalents. Optional individual ingredient assets, category photography, gallery, descriptions, specifications and localized campaign fields are supported by the content model. Unprovided product descriptions/specifications remain absent.

## Assets
Seven new dark editorial ingredient composites were generated and inspected: corrected NOX heart, FUEGO top/heart/base and LAZO top/heart/base. Existing NOX top/base and all supplied bottle/campaign imagery were preserved. New WebP sources are 1536×1024, approximately 153–224 KiB each, delivered through responsive Next image sizing. Exact prompts and original generated-file paths are recorded in public/images/notes/GENERATION_PROMPTS.md. Musk/white amber visuals represent fragrance accords artistically. No unrelated stock or redesigned bottles were used. No required asset is missing. Independent transparent ingredient cutouts and expanded product galleries remain optional future assets.

## Verification
- Programmatic comparison of every English note list against the latest reference; Arabic values present; LAZO overlap retained; no gender attribute on FUEGO/LAZO; all nine mapped image sources exist.
- Browser inspection of English and Arabic homepage/collection, native select changes, click/tap disclosures, all nine category previews and matching CTA destinations.
- Keyboard tab selection with arrows/Home/End; RTL arrows reversed appropriately; tab/panel associations valid; no missing aria-labelledby targets in the final homepage.
- English/Arabic responsive checks at 375, 390, 430, 768, 1024 and 1440px: no horizontal document overflow. Desktop/mobile rendered screenshots inspected. Bottle hover/focus glow follows the active product; final keyboard check showed only LAZO active while focused.
- Exact original NOX labels verified in the collection; FUEGO/LAZO do not inherit CRAFTED FOR MEN. Product and logo imagery remain unmirrored.
- No broken loaded images or browser console errors observed. Fixed image dimensions/aspect ratios and reserved preview space reduce layout movement; no measured CLS claim is made.
- npm run lint, npm run typecheck, npm run test:motion and npm run build passed. Motion regression tests cover standard/reduced preferences and visible server-rendered content. OS-level reduced-motion visual emulation was unavailable.

## Performance and remaining scope
Pages are statically prerendered; below-the-fold imagery loads lazily, client interaction logic is limited to interactive sections and existing motion primitives, and animations favor transform/opacity. Lighthouse/mobile Core Web Vitals were not measured, so a 90+ score is not claimed. Full /en/fragrances/{slug} and Arabic detail pages, complete visible compositions, related products, galleries and inquiry/commerce remain Phase 4 work. Current exploration CTAs intentionally reach localized collection anchors.

Visual evidence: qa/refinement-preview-en-mobile.jpg, qa/refinement-preview-ar-mobile.jpg, qa/refinement-preview-en-desktop.jpg and qa/refinement-collection-en-desktop.jpg.
