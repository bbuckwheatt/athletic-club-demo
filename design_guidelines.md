# Solo Stove Static E-Commerce Demo - Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based (E-commerce Leaders)

Drawing inspiration from:
- **Solo Stove** (authentic brand patterns, outdoor lifestyle aesthetic)
- **Shopify stores** (product presentation, grid systems)
- **Airbnb** (card-based layouts, generous imagery)

**Core Principles:**
- Product-first visual hierarchy with hero imagery
- Warm, inviting outdoor lifestyle aesthetic
- Trust-building through professional polish
- Conversion-focused layout patterns

---

## Typography System

**Font Stack:**
- Primary: 'Inter' (Google Fonts) - clean, modern sans-serif
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

**Hierarchy:**
- Hero Headlines: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Titles: text-3xl md:text-4xl lg:text-5xl, font-bold
- Product Names: text-2xl md:text-3xl, font-semibold
- Subsections: text-xl md:text-2xl, font-semibold
- Body Large: text-lg, font-medium
- Body Regular: text-base, font-normal
- Captions/Labels: text-sm, font-medium
- Price Display: text-2xl md:text-3xl, font-bold
- Strikethrough Price: text-lg md:text-xl, line-through

---

## Layout & Spacing System

**Container Strategy:**
- Full-width sections: w-full
- Content containers: max-w-7xl mx-auto px-4 md:px-6 lg:px-8
- Narrow content: max-w-4xl mx-auto
- Product grids: max-w-6xl mx-auto

**Spacing Primitives:** Use Tailwind units: 2, 4, 6, 8, 12, 16, 20, 24, 32

**Vertical Rhythm:**
- Section padding: py-12 md:py-16 lg:py-24
- Component spacing: space-y-8 md:space-y-12
- Tight groupings: space-y-4
- Element margins: mb-4, mb-6, mb-8, mb-12

**Grid Systems:**
- Product grids: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8
- Featured products: grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12
- Category cards: grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4

---

## Component Library

### Navigation
- Sticky header with promotional banner above
- Logo left-aligned, nav items center, utility items (cart, account) right
- Mega-menu dropdowns for categories
- Mobile: hamburger menu with slide-out drawer
- Promotional banner: py-2, dismissible, rotating offers

### Hero Section
- Full-width hero: min-h-[600px] md:min-h-[700px] lg:min-h-[80vh]
- Large product imagery with lifestyle context
- Overlay content: centered or left-aligned
- CTA buttons with blur backdrop (backdrop-blur-md bg-white/90)
- Secondary CTA as outlined button

### Product Cards
- Card structure: rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition
- Image aspect ratio: aspect-square
- Badge overlays: "New", "Gift Included", price saves (absolute top-2 left-2)
- Product info: p-4 md:p-6
- "Add to Cart" button: full-width, rounded-lg, py-3
- Hover state: subtle lift with shadow enhancement

### Category Navigation
- Grid of category cards with icons/images
- 2 columns mobile, 4 desktop, 6 for extensive catalogs
- Each card: image background with text overlay, rounded-xl, min-h-[200px]

### Product Detail Pages
**Layout:**
- Two-column split: 60% images, 40% product info (lg:grid-cols-5, image span-3, info span-2)
- Image gallery with thumbnails
- Sticky product info section during scroll
- Product title, price, description, specifications, add to cart form
- Trust indicators: warranty badge, free shipping, returns policy
- Related products carousel at bottom

**Product Info Stack:**
1. Breadcrumb navigation (mb-4)
2. Badge (New/Bestseller) if applicable
3. Product name (mb-2)
4. Price with strikethrough if on sale (mb-4)
5. Short description (mb-6)
6. Variant selector (size/color) if applicable (mb-6)
7. Add to Cart button + quantity selector
8. Trust badges row (mb-8)
9. Collapsible details accordion (Features, Specs, Warranty)

### Promotional Sections
- Alternating image-text layouts (60/40 split)
- Full-bleed background images with content overlay
- Call-out boxes: rounded-2xl, p-8 md:p-12, shadow-xl
- Stats/features grid: 3-4 columns, icon + number + label

### Footer
**Three-column layout (stacks on mobile):**
1. Company info + social links
2. Quick navigation (Products, Support, Company)
3. Newsletter signup form

**Bottom bar:** Legal links, copyright, phone number
**Padding:** pt-16 pb-8, border-t

### Forms & Inputs
- Input fields: rounded-lg, py-3 px-4, border-2, focus ring
- Labels: text-sm font-medium mb-2
- Newsletter: inline form (flex layout, input flex-grow)
- Button inside input: rounded-r-lg variant

### Badges & Labels
- Pill-shaped: rounded-full px-3 py-1 text-xs font-semibold
- Position: absolute top-4 left-4 on cards
- Discount badges: Show percentage/dollar save amount

### Icons
**Library:** Heroicons (CDN)
**Usage:**
- Shopping cart, user account, menu, search in header
- Chevrons for dropdowns and carousels
- Check marks for features/trust indicators
- Fire, truck (shipping), shield (warranty), return arrow icons
- Size: w-5 h-5 for inline, w-6 h-6 for standalone, w-8 h-8 for feature icons

---

## Images

### Hero Section
**Primary hero image:** Large lifestyle shot showing fire pit in use (backyard gathering, people around fire, warm evening ambiance)
- Placement: Full-width background, min-height 80vh
- Overlay: Dark gradient overlay (bg-gradient-to-r from-black/60 to-black/30)

### Product Showcase
**Featured products grid:** Each product card includes:
- Clean product shot on white/neutral background
- Aspect ratio: 1:1 (square)
- Show product from slight angle to add dimension

### Category Sections
- Fire Pits: Close-up of flames
- Pizza Ovens: Pizza being prepared
- Griddles: Food sizzling on griddle
- Coolers: Outdoor setting with drinks

### Product Detail Pages
**Gallery (5-8 images per product):**
1. Hero product shot (front-facing)
2. 360-degree angles
3. Detail shots (materials, features)
4. Lifestyle/in-use contexts
5. Scale reference (person using product)

### Content Sections
- Innovation section: Diagram/illustration showing airflow technology
- Gift guide: Curated lifestyle shots of products in use
- Trust building: Real customer photos, testimonials with faces

**Image Treatment:** All images should feel warm, inviting, natural lighting, outdoor/lifestyle contexts where applicable. Product shots should be high-quality, professional studio shots with consistent lighting.

---

## Page-Specific Guidelines

### Homepage
1. Promotional banner (dismissible)
2. Hero with main holiday offer
3. Featured products grid (4 products)
4. Category navigation cards
5. Gift guide callout
6. New product spotlight (Infinity Flame)
7. Technology/innovation section
8. Newsletter signup
9. Footer

### Product Pages (4-6 pages)
Create individual pages for:
- Summit 24" Fire Pit
- Bonfire 19.5" Fire Pit
- Infinity Flame Propane Fire Pit
- Steelfire Griddle

Each follows product detail structure with unique imagery and specifications.