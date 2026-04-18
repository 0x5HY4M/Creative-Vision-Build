# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Financial Bridge Page (`/`)
- **Type**: React + Vite (no backend)
- **Path**: `artifacts/financial-bridge/`
- **Stack**: React, Tailwind CSS, GSAP + ScrollTrigger, shadcn/ui
- **Design**: Neo-brutalism — Deep Midnight Navy (#0A0F1E), Cyber Lime (#C8F135) accents, white/gold text
- **Features**:
  - Single scroll container with `#smooth-wrapper` (body overflow hidden)
  - Hero with GSAP fade-in animation + SVG geometric background
  - Trust stats bar with animated counters
  - Sticky card stack scrollytelling (Bidwells-style, 3 cards with 3D rotation)
  - How It Works section with staggered scroll reveals
  - Conversational multi-step lead capture form (Duolingo-style)
    - Conditional logic: Solar vs Finance/Grants paths
    - Real-time email + UK postcode validation
    - Cyber Lime progress bar with ping animation
  - 3 resource article cards (neo-brutalist hover)
  - Footer with Transparency Disclosure, contact: ayan@gmail.com

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
