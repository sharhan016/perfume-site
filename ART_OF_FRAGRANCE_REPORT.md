# The Art of Fragrance redesign

Redesigned only the homepage discovery section. Existing fragrance compositions, product messaging, content access layer, shared collection-page notes experience, hero and unrelated sections remain unchanged.

## Experience
- Replaced the native dropdown with dynamically rendered fragrance tabs and a champagne active indicator. Horizontal overflow remains inside the selector for larger collections; keyboard focus scrolls the selected tab into view. There is no fixed product-count assumption.
- Added an integrated editorial scene with prominent bottle photography, fragrance name/tagline, dark stone scenery, feathered theme atmosphere, compact ingredient compositions and the existing localized exploration CTA.
- Desktop uses a balanced bottle/composition layout; mobile pairs bottle and fragrance typography before the touch-friendly notes controls. Tightened spacing after visual review, reducing the mobile section from roughly 1094px to roughly 885px in the reviewed layout.
- TOP NOTES / HEART NOTES / BASE NOTES retain their exact English labels. Selected-category captions are The First Impression / The Soul / The Lasting Impression, with Arabic equivalents.
- Preserved the configurable two-ingredient preview and existing complete structured compositions. No unsupported ingredient was added or existing fragrance information changed.

## Components and motion
FragrancePreview now handles fragrance selection and themed scene transitions. New DiscoveryNotes provides the homepage-only note category experience, leaving the existing shared NotesExperience used on collection pages intact. FragranceNotes remains a Server Component for content/localization; the existing home notes configuration now also references the shared environmental image.

Bottle transitions use brief opacity, scale and direction-aware movement. Taglines crossfade with slight movement. Theme atmosphere crossfades through separate opacity layers; active indicators move between controls. Ingredient art crossfades and ingredient names stagger. Reduced motion removes transforms and animation delays. No continuous animation, animated blur, scroll locking or additional dependency was introduced. Interactive controls stay stationary during section entrance; only the heading retains its existing scroll reveal.

## Assets
Reviewed all nine mapped ingredient images and the existing product assets. Reused the supplied bottle imagery, existing NOX isolated derivative, generated category compositions and existing dark-stone environment. Ingredient art now appears as smaller feathered compositions rather than dominant rectangular photographs. The previously corrected NOX heart image contains coffee and geranium. Broad LAZO fruit references remain intact. Musk/white amber imagery continues to represent fragrance accords artistically, without adding a botanical/material sourcing claim. No new asset generation or replacement was needed. Images load lazily with intrinsic dimensions and responsive sizes; product images remain unmirrored.

## Verification
- Browser visual inspection: English and Arabic on desktop and mobile, with screenshots saved under qa/art-of-fragrance-{en,ar}-{desktop,mobile}.jpg.
- Both locales checked at 320, 375, 390, 430, 768, 1024, 1440 and 1920px: no horizontal document overflow. Fragrance and note controls exceed 44px in height; no native dropdown remains.
- All nine fragrance/category combinations checked for correct concise English ingredients and descriptive captions. All mapped ingredient images loaded when scrolled into view; no broken images were observed. Arabic rendered content, captions and representative category transitions verified against the existing translations.
- Keyboard controls: fragrance and note arrows, Home/End and roving focus. RTL ArrowRight moves in the correct visual direction. Accessible tab/panel labels resolve to existing IDs. Arabic product/logo photography stays unmirrored.
- Exploration CTA clicks reached /en/fragrances#fuego and /ar/fragrances#lazo through the existing bilingual navigation.
- scripts/verify-discovery.mjs passes with a seven-product fixture in standard and reduced-motion modes: dynamic rendering, wraparound selection, focus/scroll behavior, RTL, note navigation, accessible labels and visible server content. Only the framework navigation boundary is mocked; selector and Motion logic are real.
- npm run lint, npm run typecheck, node scripts/verify-discovery.mjs and npm run build passed. No browser console errors were observed.

## Limits
Responsive browser emulation and simulated-DOM reduced-motion testing were used. Physical-device profiling, OS-level reduced-motion visual emulation and Lighthouse/Core Web Vitals measurements were not performed. No new product routes or unrelated phase work was introduced.
