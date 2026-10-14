# ORYNOVA implementation plan

## Inspection and scope
The repository is empty. At initial inspection no assets were present. Three PNG references were subsequently supplied: a UI concept board and two NOX bottle variants. No standalone official logo, FUEGO/LAZO photos, verified contacts, prices, notes or specifications are available. The supplied text brief is the only available source. Phase 1 was completed and verified first. Phase 2 was then explicitly authorized and is now complete; Phases 3–6 remain behind separate review gates. This project remains a local, Vercel-compatible implementation without publication.

## Architecture
Next.js App Router, strict TypeScript, Tailwind CSS, next-intl, Motion for React, and Lucide. Use stable npm releases resolved into a lockfile; validate compatibility with a production build. Server Components are the default; only navigation and motion primitives require client JavaScript. Vercel-compatible Node runtime; no database or commerce vendor commitment.

```
src/
  app/[locale]/          # localized layout and foundation routes
  components/layout/    # shared header, footer, accessible mobile dialog
  components/ui/        # intentional image placeholder
  components/animations/# reduced-motion-aware reveal primitive
  content/              # typed fragrance seed data and asset registry
  i18n/                 # routing, navigation, server request config
  lib/content/          # replaceable content access boundary
  lib/commerce/         # verified business contact configuration
  types/                # locale and fragrance contracts
  styles/               # design tokens, typography, responsive foundations
messages/{en,ar}.json
public/images/{brand,hero,products,storytelling,notes,textures}/
```

## Design tokens and typography
CSS variables centralize obsidian #08090B, charcoal #111315, champagne #D8B477, ivory #F5EBDD, muted #A6A19A, borders, and fragrance atmosphere colors. Fluid editorial type and spacing, logical layout properties, visible focus rings, 44px control targets. Next/font configures Playfair Display, Inter, Noto Naskh Arabic and IBM Plex Sans Arabic. Arabic uses natural tracking and increased line height. The phase-one landing is an intentional typographic foundation preview, not the final campaign hero.

## Content and localization
Locale-prefixed URLs with English as initial default and Arabic RTL. All interface and metadata copy lives in JSON message catalogs. Localized product fields live in typed structured content. Published and featured flags and sort order determine collections through getFragrances(), getFeaturedFragrances() and getFragranceBySlug(). Unknown notes/specifications remain absent. All Arabic marketing copy and English concept copy require client/editorial review. Assets use a single registry; missing photography uses a dimension-preserving branded placeholder, never an invented bottle.

## Reusable components
Shared site header/footer, locale switch preserving pathname/query, native-dialog mobile navigation with focus trap/restoration and Escape, placeholder image, and restrained FadeReveal. Later add shared product showcase, gallery, notes, editorial image/text and discovery sections when those phases begin.

## Animation strategy
CSS interaction transitions and Motion entrance/exit on navigation. MotionConfig respects user reduced-motion preference. Content renders visibly without animation or JavaScript; no scroll hijacking or constant floating. Later hero reveals use brief opacity/transform sequences. Directional arrows adapt to RTL while logos and photos remain unchanged.

## CMS and commerce boundaries
Replace the local content adapter with Sanity/Payload fetching without changing component-facing contracts. Centralized asset metadata supports remote CMS images and responsive crops. Commerce stays separate: no cart, prices, checkout or purchase confirmation in this pass. An approved WhatsApp number may later enable a real inquiry URL. No business contacts are currently configured.

## Phases and review gates
1. Foundation (completed): initialize, tokens/fonts, bilingual navigation, typed content, accessible responsive shell, temporary localized destination pages. Verify production build, TypeScript, locale paths, RTL, keyboard menu behavior and narrow widths. Stop for review.
2. Homepage (completed): approved campaign assets, asymmetric hero, collection preview, heritage story, positioning, discovery and restrained motion. Verify both languages.
3. Collection: data-driven responsive cards and empty state; no meaningless filters.
4. Details: dynamic slugs, gallery, verified notes/specifications, related fragrances, honest inquiry action.
5. Brand pages: reviewed story copy, verified contact data and imagery.
6. Polish: localized canonical/hreflang/OG, sitemap/robots with verified domain; mobile 320/375/390/430/768/1024/1440/1920, reduced motion, keyboard, accessibility, production build and measured performance. Performance targets are goals, not claims.

## Phase-one acceptance
Both locales render with correct lang/dir. Links remain inside locale; switching keeps destination. Menu supports keyboard, focus containment, Escape, dismissal and focus restoration. Pages contain honest foundation copy and no fabricated imagery or business claims. Content access works for arbitrary product counts. Build and typecheck pass. Production SEO and imagery are deferred to their assigned phases; preview routes are noindex until approved.

## Reference asset update
The black-cap, vertical-branding NOX reference follows the written packaging direction and is mapped into the foundation preview unchanged. The other NOX variant has a gold cap and horizontal branding; preserve it as an alternate reference until the client resolves packaging authority. The UI board provides visual direction only: its prices, ratings, notes and performance claims are not verified content. No image generation or bottle redesign was performed.

## Campaign intake after Phase 1
Two supplied collection campaigns and a standalone FUEGO reference are now centralized in the asset registry. Phase 2 can use the complete group compositions in editorial/discovery layouts. A mobile-specific campaign and standalone LAZO reference remain missing. Group and individual bottle branding differ and require an eventual authoritative packaging decision. Asset intake does not advance the implementation beyond the Phase 1 review gate.

## Latest asset intake
Portrait campaign and primary/alternate LAZO references are registered. All current fragrance primary images and both desktop/mobile campaign mappings are now populated. Phase 1 remains the completed review checkpoint; Phase 2 implementation has not begun.

## Phase 2 completion
The homepage now includes premium navigation, an art-directed hero, dynamic featured fragrances, brand storytelling, philosophy/values, discovery, closing CTA and footer. Mobile, tablet and desktop compositions are distinct. Customer-facing review/provenance labels have been removed; editorial review notes remain in documentation. See `PHASE_2_REPORT.md` for components, assets, checks and limitations. Phase 3 has not begun.

## Authorized brand-experience refinement — October 2026
The subsequent user brief explicitly authorizes refining the existing collection browsing experience alongside the homepage, shared CTAs, interactions and verified fragrance content. This supersedes earlier statements that collection refinement had not begun. Phase 4 full detail routes, commerce and unrelated phases remain deferred. The latest brand-supplied NOX/FUEGO/LAZO compositions supersede the older UI-board ingredient interpretation. Structured content now includes campaign messaging, per-product attributes, complete bilingual notes, category photography and optional individual note images. The homepage shows a configurable two-note preview rather than complete ingredient lists. Existing collection disclosures remain previews; no full product routes have been introduced.
