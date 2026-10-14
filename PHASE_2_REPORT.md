# ORYNOVA — Phase 2 completion report

Phase 2 implements the homepage. Phase 3 has not begun. The local production preview is available at `http://127.0.0.1:3000/en` and `/ar` while the retained server runs.

## Completed experience

Premium responsive navigation; a cinematic hero with separate phone, tablet and desktop compositions; dynamic featured fragrances; an editorial brand story; philosophy/values with restrained iconography; fragrance discovery; a closing collection CTA; and a premium footer. English and Arabic share the same content architecture with locale-specific typography and RTL compositions. No customer-facing review, provenance, packaging-approval or implementation-phase labels appear.

The supplied UI board grounds the black-and-gold direction, editorial typography, large product presence and low-decoration layouts. Existing photographs are preserved; no bottle redesign, unrelated stock imagery, fake prices, reviews or commerce flows were introduced.

## Components and content

Created `Hero`, `FeaturedFragrances`, `BrandStory`, `BrandValues`, `Discovery`, `Closing`, `EditorialImage`, `CampaignImage`, and `EditorialLink`. Refined shared `Header`, `Footer`, `FadeReveal` and `HeroEntrance`.

Homepage settings live in `src/content/pages/home.ts` behind `getHomePageContent()`. Marketing copy lives in the locale JSON catalogs. Featured products are fetched through `getFeaturedFragrances()` and mapped into a responsive auto-fit grid; no fixed product count, fixed indicators or separately hardcoded product components. The collection boundary and message catalogs can later be backed by CMS adapters.

Only navigation translations are passed into the browser provider. Content sections remain Server Components; animation wrappers and navigation are the interactive boundaries.

## Motion

- Short staggered hero headline entrances, followed by copy and CTA.
- Subtle campaign image entrance.
- Once-only intersection-triggered opacity/vertical reveals for collection items and editorial sections.
- Controlled mobile-navigation entrance/dismissal.
- Refined gold-button/link interactions and small image hover movement.
- Reduced-motion preferences disable reveal movement and decorative hover movement; content is visible in server HTML before JavaScript runs.

No parallax, continuous floating, scroll hijacking, GSAP or Three.js. Tests caught the initial-animation suppression issue and verified the corrected imperative Motion entrances.

## Assets

Used NOX, FUEGO and LAZO primary bottle images, the portrait Arabian Nights campaign, packaging collection campaign and Golden Twilight collection campaign. All paths are centralized. Six source PNGs totaling 11,925,299 bytes became 1,704,276 bytes of WebP: an 85.7% reduction. Next/image responsive sizes further select appropriate image widths at runtime.

The hero picture element selects one art direction, loads eagerly and has high fetch priority. Other imagery is lazy-loaded. Dimensions/aspect ratios reserve layout space. Photography is never mirrored; Arabic layouts reposition it. Missing asset fields retain the branded placeholder component.

Remaining asset needs and packaging differences are documented in `ASSET_REQUIREMENTS.md`: official wordmark/favicon, authoritative packaging-consistent landscape campaign, heritage/craftsmanship editorial photography, additional product angles, verified note imagery and final social artwork. Current supplied campaigns serve the homepage without broken-image placeholders.

## Checks and actual verification

- `npm run lint` — passed with no warnings/errors.
- `npm run typecheck` — passed.
- `npm run test:motion` — standard hero/scroll animation and reduced-motion branches passed in a simulated DOM; server content remains visible.
- `npm run build` — passed; both locales statically generated.
- Actual in-app browser screenshots reviewed in English/Arabic on mobile and desktop, plus tablet review. The tablet CTA/bottle overlap and desktop RTL image placement were corrected.
- 375, 390, 430, 768, 1024 and 1440px checked in both locales; document scroll width equals viewport width.
- All eight homepage navigation CTAs clicked in each locale and their destinations verified; product CTAs use existing collection anchors. Hero scroll CTA reaches the featured section. Desktop header and footer navigation routes were clicked in both languages. Locale switching preserves the path, query and section hash.
- Mobile menu opens, contains keyboard focus, closes on Escape, restores focus and navigates to the localized story route. Both language directions tested.
- All six homepage images loaded with nonempty localized alt text. Fonts report loaded. No production browser console errors observed.
- Loaded Arabic mobile section bounds remain unchanged across subsequent captures. This is a settled-layout check, not a measured CLS score.
- Production dependency audit reports zero vulnerabilities.

Screenshots in `qa/`: English/Arabic mobile and desktop captures. English full-page captures preserve the complete review evidence; native viewport captures document the English and Arabic hero compositions. The browser’s RTL full-page export showed capture-only clipping, so those exports were replaced with native screenshots after confirming the rendered bounds and native view.

## Performance observations and limits

Images are much smaller, hero art direction avoids hidden duplicate priority downloads, static rendering limits hydration, and unused Arabic heading fonts are not preloaded on English pages. Fonts are served locally from the Next/font build output with swap behavior. Animations use transform/opacity and stop after their initial reveal.

Lighthouse and Core Web Vitals telemetry are not exposed by this in-app browser. No 90+ Lighthouse score, LCP, INP or CLS claim is made. Production mobile Lighthouse and real-device/network profiling remain recommended checks before launch. OS-level reduced-motion preference switching was not performed; reduced-motion behavior was tested in a simulated DOM, alongside source review of navigation/CSS handling.

The development-only Next.js lint dependency chain currently has five audit entries arising from an upstream braces stack-exhaustion advisory; no compatible patched braces release was available at inspection. Production dependencies are unaffected. This is documented for tooling maintenance rather than applying npm's suggested unrelated major downgrade.

Arabic marketing text still requires professional review. Group landscape campaign branding differs from vertical-branding bottle/portrait assets. Collection, product-detail and full brand-page experiences remain in their later phases; the existing destination routes are functional foundation pages. No approved contact channel is configured, so the closing CTA honestly continues fragrance exploration. Production-domain SEO remains deferred and preview metadata remains noindex.
