# 001 — Refine the editorial experience and motion system

- **Status**: DONE — implemented and verified in desktop Chrome and emulated mobile Chrome; physical-device and Lighthouse checks remain explicitly unverified.
- **Commit**: `75361d9`
- **Severity**: MEDIUM
- **Category**: Cohesion, interaction timing, and purposeful motion
- **Estimated scope**: Approximately 10–14 existing component/style files, one small shared motion configuration, and focused regression checks; execute in reviewable passes.

Implementation results: [REVAMP_REPORT.md](../REVAMP_REPORT.md).

## Problem

ORYNOVA already has considerable animation. The proposed revamp should make the collection more editorial, vary the narrative rhythm, and coordinate frequently used controls. It must preserve the recently redesigned discovery experience rather than rebuild it.

Current evidence:

- `src/components/home/featured-fragrances.tsx:9` renders a dynamic `.fragrance-grid` with each product wrapped in `FadeReveal`. Product names, taglines, assets, links, and themes already come from data.
- `src/components/animations/fade-reveal.tsx:20` uses the following general-purpose entrance across several narrative sections:

```tsx
reduced ? {opacity: 1, y: 0} : {opacity: [0.15, 1], y: [32, 0]},
{duration: reduced ? 0 : 0.85, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1]},
```

- `src/styles/globals.css:1263` currently gives the product image a deliberately slow transition:

```css
.bottle-stage img{position:relative;mix-blend-mode:lighten;transition:transform .65s cubic-bezier(.22,1,.36,1)}
```

  Recheck spacing/line references against the file before editing. The intended observation is the `.65s` duration; this is not evidence of dropped frames.
- `src/components/fragrance/discovery-notes.tsx:20` uses `<AnimatePresence mode="wait" initial={false}>` with `.16` second exits and entrances. Keyboard category changes use the same transition as pointer input. `fragrance-preview.tsx:22` also sequences tagline changes with `mode="wait"`.
- `src/components/layout/header.tsx:23` manages a native dialog lifecycle; `:49` animates its panel. Verify whether closing the dialog interrupts the visual exit before changing lifecycle behavior.

## Target

Create a campaign-like journey with one signature moment per chapter. Preserve established typography, content access, logos, bottle geometry, bilingual routes, and Server Components wherever possible.

### Shared interaction specification

- Keep the existing hero's editorial ease `[0.22, 1, 0.36, 1]` and deliberate entrance choreography unless rendered review identifies a specific issue.
- UI entrance/exit ease: `cubic-bezier(0.23, 1, 0.32, 1)`.
- Moving active indicators: `cubic-bezier(0.77, 0, 0.175, 1)` over 200ms.
- Press feedback: scale `0.97`, 160ms; apply to a visual inner element where needed so the touch target remains stable.
- Hover bottle lift: `translateY(-14px) scale(1.04)` over 250ms. Atmosphere opacity transitions over 200ms; use `ease` for hover opacity/color.
- Pointer-triggered content: 250ms entrance, 150ms exit, latest selection wins. Do not queue previous selections. Keyboard-triggered changes are immediate, including indicators and content.
- Narrative entrances: maximum 16px translation, 600ms duration with the existing editorial curve; 60ms stagger within a small meaningful group. Do not stagger whole long product lists into a slow sequence.
- Reduced motion: no parallax, positional transitions, scale, or stagger. Preserve current immediate-feedback policy; optional opacity feedback must stay at or below 150ms and must never delay content or focus.
- All hover movement is gated with `(hover: hover) and (pointer: fine)`. Minimum interactive height 44px; use 48–52px for selector controls.

These are proposed values to validate during implementation, not performance measurements.

## Repo conventions to follow

- `src/components/home/featured-fragrances.tsx:7` is an async Server Component using localized content and mapped data. Keep its content/data preparation on the server; isolate only stateful visuals in client components.
- `src/components/animations/fade-reveal.tsx:12` uses Motion's `useReducedMotion` and visible server-rendered content. Preserve progressive enhancement.
- `src/components/fragrance/discovery-notes.tsx:13` already supports RTL arrow navigation, Home/End, roving tab focus, and localized labels. Retain these behaviors.
- Extend `src/styles/globals.css` for CSS motion tokens and established classes. Use a small shared TypeScript configuration under `src/components/animations/` for Motion values; do not create a parallel design system.
- Before writing application code, read the relevant installed Next.js guides under `node_modules/next/dist/docs/`, including client-boundary and image guidance.

## Steps

### Pass 1 — Establish shared interaction rules

1. Inventory the components above against this commit and inspect `src/components/ui/editorial-link.tsx`, `src/components/animations/cinematic-hero.tsx`, and existing motion verification scripts.
2. Add shared curve/duration constants and matching CSS tokens. Restrict replacement to components touched by this plan. Preserve the hero's existing curve and timing as a distinct marketing treatment.
3. Refine `EditorialLink` feedback: retain champagne text, thin underline, and northeast arrow; 200ms arrow/underline response and 160ms press feedback. Mirror directional arrow movement for RTL, never product images. Keep focus indication visible independently of hover.
4. Track the interaction origin explicitly in discovery controls so arrow/Home/End selection commits immediately. Native keyboard activation must also select without decorative delay. Do not globally disable useful pointer feedback following a keyboard event.

### Pass 2 — Make the collection the main visual transformation

5. Refine `featured-fragrances.tsx` and scoped CSS into an editorial gallery. At widths below 768px, use native horizontal overflow with `scroll-snap-type: inline proximity`, approximately 84% viewport item width, 20px gap, and a visible next-item peek. No autoplay, numbered pagination, custom drag engine, or scroll hijacking. Provide localized guidance and accessible previous/next controls only if testing shows the rail is not discoverable; use the existing localization files.
6. At 768px and above, keep dynamic rendering with a repeating editorial grid: two columns at 768–1023px, three at 1024px+, each item independently composed. Keep desktop media frames and captions vertically aligned; the later design review explicitly removed the original proposed 24px alternating offset. Support one, two, four, and many fragrances without empty decorative slots. Verify this proposed geometry visually before proceeding.
7. Preserve existing links to the collection anchors. Keep bottles contained without cropping caps or branding. Update responsive image `sizes` to match the new widths.
8. Apply 250ms lift/scale and 200ms atmosphere feedback. Keep existing active-product arbitration: a focused product overrides a stationary pointer, and inactive products must not retain an amber glow. Native touch scrolling must not activate navigation accidentally. The first tap follows the normal product link; no two-tap hover trap.
9. Preserve hero layers and all bottle visibility. Review the handoff from hero to gallery at 390px and 1440px; adjust scoped section spacing and background continuity only where needed. Do not add scroll pinning or an extra hero replay.

### Pass 3 — Give storytelling and craftsmanship distinct rhythms

10. Refine `src/components/home/brand-story.tsx`, `brand-values.tsx`, and `discovery.tsx` without rewriting their content. Story: framed image entrance using opacity and scale `1.025 → 1` over 600ms, followed by a short heading reveal. Craft: keep the large cinematic image anchored while the configured attributes enter at 60ms intervals. Closing: one restrained heading/CTA entrance. Avoid assigning the same full-block translate to all three.
11. Use line/group wrappers with appropriate Arabic shaping; do not split Arabic into individual animated letters. All content must remain visible and readable without JavaScript. Keep nearby CTA targets stationary while imagery moves.
12. Preserve exact English attribute labels and localized Arabic equivalents. Keep “CRAFTED FOR MEN” attached only to the configured fragrance that supports it. No new claims, ingredients, product specifications, or generated copy.

### Pass 4 — Coordinate fragrance discovery transitions

13. Update `fragrance-preview.tsx` and `discovery-notes.tsx` in place. Preserve the custom scalable fragrance selector, note categories, ingredient assets, compact preview limits, and data-driven product CTA.
14. Coordinate bottle, tagline, and atmosphere changes as a single selection transaction. Use 250ms entering opacity/transform and 150ms exiting opacity; no sequential wait that queues obsolete states. Keep a stable panel shell so changes do not collapse its geometry. Prevent duplicate readable or screen-reader content during overlap, for example by marking exiting content inert and hidden from assistive technology. Focus remains on the selected control.
15. For note selection, update selected semantics and indicator immediately. Crossfade the image in 200ms and reveal ingredient names with a 60ms stagger for pointer input only. Keep the current note category when changing fragrance where supported. Never display every ingredient from every fragrance together.
16. Review `notes-experience.tsx` and `collection-entry.tsx` for the same interaction contract. Scope changes to shared behavior and an interruptible disclosure; do not create deferred product detail routes. If disclosure geometry jumps in rendered testing, use a measured wrapper and transform-based position treatment rather than continuous height animation. If no jump is observed, retain existing layout behavior.

### Pass 5 — Finish navigation and verify

17. Verify native-dialog close behavior in `header.tsx`. If the dialog closes before the Motion exit can render, keep it open through the 150ms exit, then close and restore focus exactly once. Use a 250ms entrance with `cubic-bezier(0.32, 0.72, 0, 1)` and a maximum 50ms link stagger. Keyboard opening/closing is immediate. Preserve Escape, focus containment, body-scroll restoration, and responsive breakpoint cleanup.
18. Profile the implementation before optimizing. Investigate permanent `will-change` on `.parallax-frame > div`; retain it only with evidence of benefit. Do not label Motion shorthand transforms a defect without profiling. Avoid per-frame React state, animated inherited variables, large animated blur, and new continuously running effects.
19. Complete the verification below, fix failures, and record actual results with screenshots. Report measured Lighthouse/CLS observations separately from design goals.

## Boundaries

- Do not modify verified fragrance content, brand typography, bottle branding, locale routing, or unrelated implementation phases.
- No new animation libraries, CMS/database, checkout, full product pages, custom cursor, particle field, autoplay, or scroll locking.
- Use existing assets first. If a composition needs unavailable imagery, document exact asset needs before generating; do not invent ingredients or substitute stock imagery.
- Keep this plan's proposed visual geometry subject to actual desktop/mobile review; do not treat unmeasured performance assumptions as defects.
- Re-read cited source if the commit has changed. If behavior or architecture materially differs, stop the affected pass and report the mismatch rather than applying stale instructions.

## Verification

**Mechanical, after implementation:** `npm run lint`, `npm run typecheck`, `npm run test:motion`, `node scripts/verify-discovery.mjs`, and `npm run build` must pass. Check package scripts for drift before running. No application build was run for this planning deliverable.

**Rendered checks:**

- English and Arabic at 375, 390, 430, 768, 1024, and 1440px. No horizontal page overflow; deliberate collection scrolling remains inside its own rail.
- Desktop hover then keyboard focus on a different product: one correct theme atmosphere, no permanent FUEGO highlight. Clear touch press feedback and normal first-tap navigation.
- Fragrance and note tabs: arrows, Home/End, Enter/Space, rapid pointer switching, RTL direction, focus stability, correct imagery/names, immediate keyboard updates, and no stale queued state.
- Test empty, one, two, four, and many fragrances with a temporary fixture without changing production content. Long Arabic labels must remain usable.
- Inspect at 10% animation playback for discontinuities, duplicate text, clipped cap/branding, accidental image mirroring, and moving touch targets. Return to normal speed to judge pacing.
- Reduced-motion emulation: no movement or parallax; feedback and navigation remain clear. Test with JavaScript disabled for visible content and working links.
- Mobile menu: Escape, focus restoration, quick reopen during exit, route selection, locale switching with path/query/hash retained, and closing at desktop breakpoint.
- Record real mobile Safari/Chrome checks when hardware is available. Viewport emulation alone does not verify native touch feel or mid-range device performance.
- Check image loading, reserved geometry, layout shifts, browser performance traces, and Lighthouse mobile. A 90+ performance score is a target, not a promise.

**Done when:** the gallery provides the principal new visual moment; story, craft, and discovery have distinct but coherent motion; all controls remain responsive during interruption; bilingual and accessibility checks pass; and actual verification results are documented without extending scope.
