## WrestleConnect Web (Next.js + Tailwind)

This app is pre-wired with the WrestleConnect design system so you can move straight into feature development.

### Getting Started

Install dependencies (already completed when scaffolding, but repeat if needed):

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the brand-aligned landing page scaffold.

### Design Tokens Included

- Brand colors, spacing, radii, shadows, and transitions from `docs/design_tokens.md` are available through `wc-*` classes in `src/app/globals.css`.
- CSS variables live in `src/app/globals.css`, ensuring parity with the documentation and enabling usage outside component code.
- Font loading uses `next/font` to serve Manrope, Inter, and Space Grotesk with the expected CSS variables.

### UI Shell
- `SiteHeader` renders a sticky global navigation bar with brand logo and quick links (update `src/components/site-header.tsx` as new sections launch).
- Pages consume shared layout primitives (`Hero`, `Section`, `Card`, etc.) instead of inline utility classes; see `src/components/ui`.

### Content Layer
- Typed content models live in `src/types/content.ts` with mock data defined under `src/data/`.
- `getHomeContent()` / `getWrestlerContent()` etc. (in `src/lib/content.ts`) validate data with Zod and attempt to load `page_content.slug` rows from Supabase. If rows are missing or Supabase errors, they fall back to the local mocks.
- Copy `.env.example` to `.env.local` (or use the generated `.env.local`) and ensure the Supabase credentials are present.
- See `docs/supabase_setup.md` for SQL snippets to create the `page_content` table and seed JSON documents.

### Key Routes

- `/` – Platform overview with promotions-first messaging and CTAs.
- `/wrestlers` – Wrestler-focused landing page covering profiles, recommendations, and booking tools.

### Development Roadmap
- Add API integration for content providers, replacing the local mock data.
- Introduce Storybook/Ladle for component documentation and visual regression tests.
- Implement Supabase auth and profile management flows per the product spec.
