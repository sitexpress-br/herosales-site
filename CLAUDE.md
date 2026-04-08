# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Hero Sales** — Plataforma SaaS whitelabel (GoHighLevel) para clínicas, médicos e profissionais liberais. Oferece CRM, funis de vendas, agendamento, automação, IA, email/SMS marketing, website builder e gestão de reputação.

- **Domínio**: https://herosales.pro
- **App/Sistema**: https://app.herosales.pro/
- **Cor principal**: `#6e5bbb` (purple)
- **Logo**: URL externa hospedada no GHL storage

## Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Production build (TypeScript check + Vite build)
- `npm run test` — Run tests with Vitest
- `npm run test:watch` — Run tests in watch mode
- `npm run lint` — ESLint

## Tech Stack

- **React 18 + TypeScript** with Vite (SPA, not Next.js)
- **React Router v6** for client-side routing (defined in `src/App.tsx`)
- **Tailwind CSS 3** with custom brand colors (purple `#6e5bbb`, navy `#1a1535`, lavender `#e4e0f0`) — see `tailwind.config.ts`
- **shadcn-ui** (Radix UI primitives) in `src/components/ui/`
- **TanStack React Query** for server state/caching
- **React Hook Form + Zod** for form validation
- **Supabase** for database (leads table) and edge functions
- **WordPress REST API** (`cms.clinicaautoridade.com.br`) as content source for blog posts and projects (legacy CMS, may be migrated)

## Architecture

### Path Alias

`@/*` maps to `./src/*` (configured in `vite.config.ts` and `tsconfig.app.json`).

### Data Flow

WordPress API → `src/hooks/useWordPress.ts` (custom hooks) → React Query caching → components. Lead capture goes through Supabase Edge Function (`supabase/functions/send-lead-webhook/`) which saves to DB and forwards to Make.com webhook.

### Key Directories

- `src/pages/` — Route page components (Index, Blog, Projects, Services, Offers, legal pages)
- `src/components/sessoes/` — Page sections (Header, Hero, Footer, Blog sections, etc.)
- `src/components/ui/` — shadcn-ui primitives (do not edit manually; use shadcn CLI to add)
- `src/components/animations/` — Framer Motion, GSAP, Three.js animation components
- `src/hooks/` — Custom hooks: `useWordPress` (content fetching), `useScrollAnimation`, `useWhatsAppPopup`, `useMobile`
- `src/services/wordpress.ts` — WordPress REST API client
- `src/lib/seo-config.ts` — Centralized SEO metadata for all pages
- `src/lib/animations.ts` — Framer Motion animation variants
- `src/lib/wordpress-helpers.ts` — WordPress data transformations
- `src/integrations/supabase/` — Supabase client (`client.ts`) and auto-generated types (`types.ts`)
- `src/data/` — TypeScript interfaces for BlogPost and Project
- `supabase/functions/` — Edge functions (Deno runtime)
- `supabase/migrations/` — Database migrations

### Color System

CSS variables in `src/index.css` control the entire theme via HSL values. Brand colors:
- Primary (purple): HSL `252 41% 55%` / `#6e5bbb`
- Secondary (deep purple): HSL `252 43% 15%` / `#1a1535`
- Muted (lavender): HSL `252 30% 91%` / `#e4e0f0`

Tailwind extends these as `purple`, `navy`, and `lavender` color scales in `tailwind.config.ts`.

### SEO

`SEOHead` component provides per-page meta tags and JSON-LD schema markup. SEO config is centralized in `src/lib/seo-config.ts`. HTML content from WordPress is sanitized with DOMPurify.

### Animations

Three animation libraries coexist: Framer Motion (component transitions), GSAP (timeline animations), Three.js/React Three Fiber (3D effects). Reusable variants are in `src/lib/animations.ts`.

### No Authentication

This is a public marketing site — no user authentication. Supabase is used only for lead storage and edge functions.

### Logo

The logo is loaded from an external URL (GHL storage), not from local assets. See Header.tsx and Footer.tsx.
