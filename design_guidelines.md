# Needham Athletic Club - Design Guidelines

## Design Approach

**Selected Approach:** Professional Athletic Club Informational Site

Drawing inspiration from:
- **Premium fitness clubs** (professional aesthetic, member-focused design)
- **Luxury athletic facilities** (clean layouts, aspirational imagery)
- **Airbnb** (card-based layouts, generous imagery)

**Core Principles:**
- Feature-first visual hierarchy with hero imagery
- Professional, energetic athletic club aesthetic
- Trust-building through quality presentation
- Information-focused layout patterns showcasing amenities

---

## Typography System

**Font Stack:**
- Primary: 'Inter' (Google Fonts) - clean, modern sans-serif
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

**Hierarchy:**
- Hero Headlines: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Titles: text-3xl md:text-4xl lg:text-5xl, font-bold
- Feature Names: text-2xl md:text-3xl, font-semibold
- Subsections: text-xl md:text-2xl, font-semibold
- Body Large: text-lg, font-medium
- Body Regular: text-base, font-normal
- Captions/Labels: text-sm, font-medium
- Capacity Display: text-xl md:text-2xl, font-semibold

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
- Feature grids: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8
- Featured amenities: grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12
- Category cards: grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4

---

## Component Library

### Navigation
- Sticky header with club branding
- Logo left-aligned, nav items center, utility items (membership, contact) right
- Dropdown menus for amenity categories
- Mobile: hamburger menu with slide-out drawer
- Promotional banner: py-2, dismissible, club announcements

### Hero Section
- Full-width hero: min-h-[600px] md:min-h-[700px] lg:min-h-[80vh]
- Large facility imagery with athletic context
- Overlay content: centered or left-aligned
- CTA buttons with blur backdrop (backdrop-blur-md bg-white/90)
- Secondary CTA as outlined button

### Feature Cards
- Card structure: rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition
- Image aspect ratio: aspect-square or aspect-video
- Badge overlays: "Popular", "New", "New Hours" (absolute top-2 left-2)
- Feature info: p-4 md:p-6
- "Learn More" button: full-width, rounded-lg, py-3
- Hover state: subtle lift with shadow enhancement

### Category Navigation
- Grid of category cards with icons/images
- 2 columns mobile, 4 desktop, 6 for extensive catalogs
- Each card: image background with text overlay, rounded-xl, min-h-[200px]

### Feature Detail Pages
**Layout:**
- Two-column split: 60% images, 40% feature info (lg:grid-cols-5, image span-3, info span-2)
- Image gallery showing facility from different angles
- Sticky feature info section during scroll
- Feature title, capacity, description, specifications, contact form
- Trust indicators: certified staff, hours, availability
- Related amenities carousel at bottom

**Feature Info Stack:**
1. Breadcrumb navigation (mb-4)
2. Badge (Popular/New/New Hours) if applicable
3. Feature name (mb-2)
4. Capacity information (mb-4)
5. Short description (mb-6)
6. Hours and availability (mb-6)
7. Contact or Reserve button
8. Trust badges row (mb-8)
9. Collapsible details accordion (Features, Specs, Schedule)

### Promotional Sections
- Alternating image-text layouts (60/40 split)
- Full-bleed background images with content overlay
- Call-out boxes: rounded-2xl, p-8 md:p-12, shadow-xl
- Stats/amenities grid: 3-4 columns, icon + number + label

### Footer
**Three-column layout (stacks on mobile):**
1. Club info + social links
2. Quick navigation (Amenities, Membership, Contact)
3. Contact form or hours information

**Bottom bar:** Legal links, copyright, phone number, address
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
**Library:** Lucide React
**Usage:**
- Activity, user account, menu, search in header
- Chevrons for dropdowns and carousels
- Check marks for features/amenities
- Dumbbell, waves, heart, users icons for categories
- Size: w-5 h-5 for inline, w-6 h-6 for standalone, w-8 h-8 for feature icons

---

## Images

### Hero Section
**Primary hero image:** Large facility shot showing athletic club in use (members exercising, professional trainers, energetic atmosphere)
- Placement: Full-width background, min-height 80vh
- Overlay: Dark gradient overlay (bg-gradient-to-r from-black/60 to-black/30)

### Feature Showcase
**Featured amenities grid:** Each feature card includes:
- Clean facility shot showing the amenity in use
- Aspect ratio: 1:1 (square) or 16:9 (video)
- Show facility from flattering angle highlighting quality

### Category Sections
- Tennis: Tennis courts with players
- Pool: Swimming pool with lanes
- Fitness: Training equipment and trainers
- Pickleball: Pickleball courts in action

### Feature Detail Pages
**Gallery (5-8 images per feature):**
1. Hero facility shot (wide angle)
2. Different angles and perspectives
3. Detail shots (equipment, amenities)
4. In-use contexts with members
5. Scale reference (members using facility)

### Content Sections
- Amenities section: Grid showing different facilities
- Membership guide: Benefits and features overview
- Trust building: Member testimonials, staff photos

**Image Treatment:** All images should feel professional, energetic, well-lit, showing athletic/wellness contexts. Facility shots should be high-quality with consistent lighting and professional composition.

---

## Page-Specific Guidelines

### Homepage
1. Promotional banner (dismissible, club announcements)
2. Hero with main membership message
3. Featured amenities grid (4-6 features)
4. Category navigation cards (Tennis, Pool, Fitness, etc.)
5. Membership benefits callout
6. New amenity spotlight
7. Club values/quality section
8. Contact information
9. Footer

### Feature Pages (4-6 pages)
Individual pages for:
- Tennis Courts
- Swimming Pool
- Personal Training
- Pickleball Courts
- Wellness Programs
- Social Events

Each follows feature detail structure with unique imagery and specifications.