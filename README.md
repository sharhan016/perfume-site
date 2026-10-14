# ORYNOVA

Luxury bilingual fragrance website. Phase 1 foundation and Phase 2 homepage are implemented. Collection, detail and full brand-page development remain scheduled for later phases.

## Development and checks

- `npm install`
- `npm run dev` — open `/en` or `/ar`
- `npm run lint`
- `npm run typecheck`
- `npm run test:motion` — simulated DOM checks for standard/reduced motion and visible server content
- `npm run build` then `npm start` — production preview
- `npm run assets:optimize` — regenerate WebP assets from the supplied originals

Node >=20.9 is required. Webpack is selected because Turbopack internal port binding failed in this managed environment. Next/font downloads fonts at build time and self-hosts them in output, so the initial build needs Google Fonts access.

## Content architecture

Homepage editorial settings: `src/content/pages/home.ts`, accessed through `src/lib/content/home.ts`. Localized interface/marketing copy: `messages/en.json` and `messages/ar.json`. Product data: `src/content/fragrances.ts`, accessed through `src/lib/content/fragrances.ts`. Change published/featured flags and sort order without changing components; there is no fixed product count.

Assets: `src/content/assets.ts`. Missing assets use a branded placeholder. Source PNGs are preserved; displayed assets use optimized WebP files. No photographic mirroring or bottle redesign.

Business contacts: `src/lib/commerce/config.ts`. Notes, specifications, prices and contact details remain unverified and absent. No fake checkout, reviews, payment processing or performance claims. All Arabic marketing translations and English concept copy require client/editorial review; review labels are kept out of the visitor experience.

Product exploration currently links to matching entries on the foundation collection route. Full product details belong to Phase 4. Preview metadata remains noindex until production approval and a verified domain.

See `IMPLEMENTATION_PLAN.md`, `ASSET_REQUIREMENTS.md`, `PHASE_2_REPORT.md` and `qa/` for the phased scope, asset inventory and verification evidence.
