# ORYNOVA design and motion revamp

Approach prepared on 16 October 2026 against commit `75361d9`. Implemented in the working tree. See [verification and completion report](../REVAMP_REPORT.md).

## Creative direction

**An unfolding Arabian fragrance campaign.** Keep the black and champagne-gold identity, existing English/Arabic typography, recognizable bottles, and restrained regional character. Give each chapter its own visual rhythm: opening campaign, collection gallery, craftsmanship story, composition discovery, closing invitation.

The site already has hero choreography, parallax, hover atmospheres, and custom fragrance/note selectors. The opportunity is stronger composition and more deliberate interaction timing. Adding the same fade to more elements would have limited impact.

## Execution plan

| Plan | Title | Priority | Status |
| --- | --- | --- | --- |
| 001 | Refine the editorial experience and motion system | High visual impact | DONE |

See [the implementation specification](001-editorial-motion-revamp.md). Execute its passes in order: shared interaction rules → collection gallery → narrative sections → discovery transitions → navigation and verification. Review the collection composition on mobile and desktop before propagating the treatment.

## Installed skills to use

- `emil-design-eng`: visual hierarchy, interaction feedback, and polish without changing ORYNOVA into a software dashboard.
- `improve-animations`: this implementation specification; no application source changes during planning.
- `find-animation-opportunities`: select a few purposeful moments rather than animate every element.
- `animate`: implement each approved motion with an explicit purpose, duration, easing, and interruption behavior.
- `animation-performance`: profile expensive work before choosing optimizations; favor transforms and opacity.
- `mobile-native`: touch feedback, native horizontal scrolling, viewport sizing, and physical-device checks.
- `review-animations`: final implementation review against the same motion principles.

These installed skills cover the work. No additional animation library or skill installation is required.

## Optional skills found

Discovery checked the skills.sh leaderboard and official repositories. These are optional additions, not dependencies; nothing was installed.

- [Anthropic frontend-design](https://skills.sh/anthropics/skills/frontend-design): useful for stronger editorial art direction. The directory showed approximately 994K installs, and the official repository approximately 181K stars when checked. Install explicitly with `npx skills add anthropics/skills --skill frontend-design`.
- [Vercel web-design-guidelines](https://skills.sh/vercel-labs/agent-skills/web-design-guidelines): a useful independent accessibility and interface review. Approximately 744K installs; official repository approximately 32.5K stars when checked. Install explicitly with `npx skills add vercel-labs/agent-skills --skill web-design-guidelines`.
- [Vercel React best practices](https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices): optional React/Next.js runtime review. Approximately 808K installs; shares the official Vercel repository. Install explicitly with `npx skills add vercel-labs/agent-skills --skill vercel-react-best-practices`.

Official sources: [Anthropic skills](https://github.com/anthropics/skills), [Vercel agent skills](https://github.com/vercel-labs/agent-skills). Counts are discovery snapshots, not quality guarantees.

## Evidence and limits

Planning began with source review and English hero inspection. Implementation verification subsequently covered English and Arabic at six widths, actual hover, keyboard, emulated touch, reduced motion, and desktop/mobile screenshot review. See the completion report for measured results and remaining hardware/performance limitations. Existing imagery was sufficient; no assets were generated.

Preserve verified fragrance content and existing architecture. No product-detail, commerce, CMS, or unrelated implementation phase is included.
