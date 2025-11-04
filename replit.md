# Solo Stove E-Commerce Demo

## Overview

This is a static e-commerce demonstration site inspired by Solo Stove's outdoor lifestyle brand. The application showcases smokeless fire pits, pizza ovens, griddles, and outdoor gear with a focus on product-first visual hierarchy and conversion-oriented design patterns. Built as a modern React single-page application with Express backend, it demonstrates e-commerce UI/UX best practices without implementing actual transaction processing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- React 18 with TypeScript for type-safe component development
- Wouter for lightweight client-side routing (chosen over React Router for smaller bundle size)
- Vite as the build tool and development server (faster than webpack, optimized for modern browsers)

**UI Component System**
- Shadcn/ui component library with Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Component structure follows "new-york" style variant
- Design system based on Inter font family with defined typography hierarchy
- Custom color system using HSL values with CSS variable theming support

**State Management**
- TanStack Query (React Query) for server state management
- No global client state library (keeping complexity minimal for demo purposes)
- Query client configured with conservative refetch policies (staleTime: Infinity, no window focus refetch)

**Data Layer**
- Static product data defined in component files (no database queries for demo)
- Zod schemas for runtime type validation of product/category data
- Type-safe data models shared between client and server via `@shared` directory

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for API endpoints
- ESM module system (type: "module" in package.json)
- Custom Vite middleware integration for development hot-reload
- Production build bundles server code with esbuild

**Storage Strategy**
- In-memory storage implementation (MemStorage class)
- Interface-based storage abstraction (IStorage) for potential database migration
- Currently implements basic user CRUD operations as template
- No persistent database in current implementation (static demo data only)

**Development Infrastructure**
- Custom logging middleware for API request tracking
- Runtime error overlay in development (Replit-specific tooling)
- Separate client/server TypeScript compilation paths

### Design System

**Visual Hierarchy**
- Product-first layouts with hero imagery
- Warm outdoor lifestyle aesthetic inspired by Solo Stove brand
- Card-based patterns influenced by Airbnb and Shopify stores
- Responsive breakpoints: mobile-first approach with md/lg variants

**Typography Scale**
- Hero: 5xl → 7xl responsive
- Section titles: 3xl → 5xl responsive  
- Product names: 2xl → 3xl responsive
- Body text: base with lg variants
- Consistent font weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

**Spacing System**
- Tailwind utility classes: 2, 4, 6, 8, 12, 16, 20, 24, 32 units
- Section padding: py-12 → py-24 responsive
- Container max-widths: 4xl (narrow), 6xl (products), 7xl (general content)

**Interactive States**
- Custom hover/active elevation utilities (hover-elevate, active-elevate-2)
- CSS variable-based border colors for dynamic theming
- Shadow system: shadow-xs for subtle depth, shadow-sm for cards

### External Dependencies

**UI Component Libraries**
- @radix-ui/* family: Accessible component primitives (20+ packages for dialogs, dropdowns, navigation, etc.)
- embla-carousel-react: Touch-friendly carousel implementation
- cmdk: Command palette component
- lucide-react: Icon library

**Form & Validation**
- react-hook-form: Performant form state management
- @hookform/resolvers: Form validation integration
- zod: Schema validation (also via drizzle-zod)

**Database & ORM** (configured but not actively used)
- Drizzle ORM with PostgreSQL dialect
- @neondatabase/serverless: Neon database driver
- drizzle-kit: Schema migrations tool
- Note: Database schema exists but application currently uses in-memory storage

**Styling & Utilities**
- tailwindcss with autoprefixer
- class-variance-authority: Type-safe variant management
- clsx + tailwind-merge: Conditional className utilities
- date-fns: Date manipulation

**Development Tools**
- Vite plugins: @replit/vite-plugin-runtime-error-modal, cartographer, dev-banner
- TypeScript strict mode enabled
- Path aliases configured: @/ (client), @shared/ (shared), @assets/ (assets)

**Build & Runtime**
- tsx: TypeScript execution for development server
- esbuild: Production server bundling
- Platform: Node.js with ESM modules