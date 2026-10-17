# ORYNOVA editorial and motion revamp

Completed 16 October 2026 in the working tree, based on commit `75361d9`.

## Result

- Native mobile collection rail with the next item visible, localized browsing controls, and a two/three-column desktop gallery. Desktop cards share aligned divider lines, names, taglines, and exploration links; the initial 24px alternating offset was removed after design review. Empty, single, and larger collections remain supported.
- A visible midnight-blue NOX halo. Its previous light source used the nearly black brand navy, so the existing activation was barely perceptible. A dedicated lighter navy bottle-light token fixes contrast without changing the global NOX theme. Amber and burgundy highlights retain their existing colors.
- Collection exploration links use thin gold horizontal arrows with a 3px directional hover movement (reversed for RTL, disabled for reduced motion). Other section CTAs retain their existing arrow style.
- Bottle lift/scale, underline, and CTA feedback respond faster. Focus takes precedence over a stationary pointer. Hover movement is restricted to fine pointers; keyboard feedback commits immediately.
- Story uses a framed image reveal and separate headline/copy timing. Craftsmanship keeps its image anchored with progressive attribute reveals. Closing and campaign sections have their own restrained treatments.
- Discovery changes bottle imagery, tagline, atmosphere, and note previews without queued exit/enter sequences. Text updates immediately; only imagery crossfades. Exiting images are hidden from assistive technology. The selected note category survives fragrance changes.
- Native mobile dialog stays open through its pointer-triggered exit. Escape, keyboard use, route changes, and reduced motion remain immediate; focus and body scrolling are restored.

## Components

Created `CollectionGallery`, `SelectionImage`, `SelectionReveal`, and shared `motionSpec` constants. Refined the featured collection, `FadeReveal`, story, values, discovery/closing sections, fragrance attributes, homepage selector, both note experiences, collection disclosure, header, and CTA styles. Server-rendered content and localized content access remain in place. No dependencies were added. `next.config.ts` now explicitly allows only the additional loopback development origin `127.0.0.1`; Next.js was blocking its HMR connection, which prevented the existing preview from becoming interactive. This does not broaden production access.

## Content and assets

Verified fragrance data was preserved without edits. LONG LASTING, PREMIUM QUALITY, and CRAFTED FOR MEN remain tied to configured product attributes; the gender-specific attribute remains associated with NOX. English/Arabic labels were added for gallery browsing and previous/next controls. Existing typography and locale routing remain intact; images are never mirrored.

Reused campaign imagery, product primary images, the existing NOX `isolated-v2.webp` cutout, and existing verified note imagery. The sharper cutout now appears in both the gallery and craftsmanship section. Responsive image sizes follow the new gallery widths. No images were generated and no replacement assets are required for this scope.

## Verification

Passed:

- `npm run lint`
- `npm run typecheck`
- `npm run test:motion`
- `node scripts/verify-discovery.mjs`
- `node scripts/verify-gallery.mjs`
- `npm run build` — all 11 static pages generated successfully. The build needed network access to fetch the project's existing Google Fonts.
- Production Chrome checks for English and Arabic at 375, 390, 430, 768, 1024, and 1440px. No horizontal document overflow; collection overflow stays inside its rail.
- Actual mouse hover for all three fragrance colors, then keyboard focus overriding a stationary pointer.
- Rapid fragrance switching, retained note category, note/category keyboard navigation, correct selected content, reduced-motion identity transforms, and accessible selected states.
- Native mobile menu pointer exit, Enter/Escape, focus/body-scroll restoration, and closing at the desktop breakpoint.
- The existing development preview on port 3000 was independently verified after the origin fix: gallery scrolling and mobile navigation respond, including in the in-app browser.
- Collection disclosure open/close; locale switching preserves the path, query string, and product anchor.
- Emulated touch swipe using browser touch input; first tap on a product navigates normally.
- JavaScript-disabled hero/collection visibility and product links. No broken loaded images or page runtime errors in the tested production flow.
- Gallery regression fixtures with 0, 1, 2, 4, and 7 products in English and Arabic, including long Arabic labels, keyboard scroll behavior, boundaries, and visible server output.
- Visual review of collection, story, craftsmanship, and fragrance discovery screenshots at 390px and 1440px in both languages.

Browser results: [qa/revamp/browser-results.json](qa/revamp/browser-results.json). Screenshot evidence: [qa/revamp](qa/revamp).

## Performance observations and limits

Interactions use transform and opacity for movement/crossfades, with 150–250ms UI timing and 600ms narrative entrances. No scroll hijacking, autoplay, new continuous effects, per-frame React state, or new animation framework was introduced. Existing hero choreography remains unchanged.

The sampled final production page load recorded CLS 0. A short headless desktop trace during repeated fragrance changes recorded a maximum thread task of 3.62ms, layout event of 0.30ms, paint event of 0.43ms, and animation-frame callback of 0.89ms. These are observations from one desktop sample, not device FPS or Core Web Vitals guarantees. Existing parallax layer hints were retained; this work does not claim a measured benefit from them.

Physical iOS/Android hardware and mobile Safari were not available for this run. Lighthouse was not run, so a mobile score of 90+ is not claimed. Those checks remain recommended before release. No unrelated product-detail, commerce, CMS, or later implementation phase was started. Changes have not been committed or pushed during this refinement.

Latest collection refinement: English/Arabic desktop divider, name, tagline, and CTA positions match across all three cards within 1px. Horizontal-arrow hover, reduced-motion behavior, mobile overflow, lint, and type checks passed. Product image size rules were unchanged. Screenshots: `qa/revamp/en-collection-aligned.png` and `qa/revamp/ar-collection-aligned.png`.
