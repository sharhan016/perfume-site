# ORYNOVA — Phase 1

Bilingual Next.js foundation. This is a review checkpoint, not the completed luxury website.

## Run
`npm install` then `npm run dev`. Open `/en` or `/ar`.

`npm run typecheck` checks TypeScript; `npm run build` builds for production; `npm start` serves that build. Node >=20.9 is required.

## Content
Interface copy: `messages/en.json` and `messages/ar.json`. Product seeds: `src/content/fragrances.ts`. Access functions: `src/lib/content/fragrances.ts`. Asset paths: `src/content/assets.ts`; null means an intentional branded placeholder. Approved business contacts: `src/lib/commerce/config.ts`.

All Arabic marketing translations and English marketing concepts require professional/client review. Product notes/specifications, photos, contact information, prices and history are unverified and intentionally absent. Current collection destination only previews content seeds; final cards and product detail pages belong to later phases.

Locale routing always uses a prefix and defaults to English; the language switch keeps the page, query and hash. Preview metadata is noindex. Verified-domain canonical, hreflang, OG artwork and sitemap are scheduled for final polish.

See IMPLEMENTATION_PLAN.md, ASSET_REQUIREMENTS.md and VERIFICATION.md for scope, missing inputs and actual checks. No commerce, CMS, database or deployment is configured.

Webpack is selected for dev/build because Turbopack process port binding fails in this managed environment. Both are supported Next.js compilers. Next/font downloads fonts at build time and self-hosts them in the output; the initial build needs Google Fonts network access.
