# Frontend Architecture Overview

## Layered Structure
- **Design Tokens & CSS (`src/app/globals.css`)** – Houses platform-wide variables and `wc-*` utility classes that define layout primitives, typography, cards, timelines, badges, etc. Every page consumes these classes via components to ensure consistency.
- **UI Components (`src/components/ui`)** – Reusable building blocks (Hero, Section, Card, StatGrid, Timeline, FinalCta, etc.) that wrap the CSS utilities with typed APIs. Components are data-agnostic and focus on layout/interaction.
- **Feature Components (`src/components/spotlight-card.tsx`, etc.)** – Combine UI primitives with domain-specific presentation such as wrestler spotlights.
- **Content Layer (`src/types/content.ts`, `src/data/*`, `src/lib/content.ts`)** – Strongly typed content models with mock data providers validated by Zod. Providers first attempt to load data from `CONTENT_API_BASE_URL` and fall back to the local mocks if the request fails.

## Rendering Flow
1. A page (e.g. `app/wrestlers/page.tsx`) calls `getWrestlerContent()` to retrieve typed data bundles.
2. Data is passed into UI components (Hero, Section, StatGrid, SpotlightCard, etc.) composed inside the page.
3. Components apply `wc-*` classes, ensuring consistent styling without Tailwind utility strings in JSX.

## Extensibility Points
- **Data Source Switch** – Replace `src/data/*` with API calls inside `getHomeContent()` / `getWrestlerContent()` once backend endpoints exist.
- **Component Library** – New patterns should live in `src/components/ui` to stay aligned with tokens.
- **Routing** – Additional sections (Promotions, Schools) can reuse the same primitives and provider pattern for parity.

## Next Steps
1. Replace the mock content providers with Supabase/Postgres (or another CMS) endpoints behind `CONTENT_API_BASE_URL`.
2. Add Storybook or Ladle to document the `wc-*` components and capture visual regressions.
3. Introduce TanStack Query for client-side data and caching once dynamic interactions ship.
