# Alliance Sourcing BD - Home Page Structure

## Complete Home Page Sections

The home page (`app/page.tsx`) now includes all essential sections for a professional garment sourcing website:

### 1. **Banner Carousel** (Hero Section)
- **Component**: `BannerCarousel`
- **Features**: 
  - Automatic sliding banner rotation
  - Manual navigation controls (previous/next buttons)
  - Indicators for multiple slides
  - Responsive design with overlay text
  - Smooth fade transitions

### 2. **What Sets Us Apart** (Features Grid)
- **Component**: `FeaturesGrid`
- **Data Source**: `VALUES` constant
- **Features Displayed**:
  - Quality Assurance
  - Ethical Sourcing
  - On-time Delivery
  - Global Network
- **Styling**: 4-column grid with hover effects, cyan accents

### 3. **Professional Buying House Services** (Image + Text)
- **Component**: `ImageTextSection`
- **Layout**: Image on left, text on right
- **Content**: Company story with key value propositions
- **Features**: Expert evaluation, Quality compliance, Cost optimization
- **Background**: Gradient blue-white background

### 4. **Buying House Services** (Service Cards Grid)
- **Component**: `ServicesGrid`
- **Data Source**: `SERVICES` constant
- **Cards Displayed**:
  - Product Development & Sampling
  - Supplier Selection & Evaluation
  - Price Negotiation & Order Placement
  - Production Follow-up & Quality Inspection
- **Styling**: 2-column grid with icon badges, hover underline animations

### 5. **Product Expertise & Showcase** ⭐ (NEW)
- **Component**: `ProductShowcase`
- **Data Source**: `PRODUCT_CATEGORIES` constant
- **Categories**:
  - **Knitwear** (4 products): Premium Cotton Tee, Classic Pullover Hoodie, Pique Polo Shirt, Jersey Henley
  - **Woven** (4 products): Oxford Button-Down, Slim Fit Chinos, Summer Linen Shirt, Unstructured Blazer
  - **Denim** (4 products): Raw Indigo Denim, Trucker Jacket, Casual Denim Shorts, Slaty-Black Denim
- **Layout**: Category heading + description, then 4-column product grid
- **Styling**: Professional product cards with image zoom on hover

### 6. **How We Work** (Process Flow)
- **Component**: `ProcessFlow`
- **Data Source**: `HOW_WE_WORK` constant
- **Steps** (4-step process):
  1. Consultation - Listen to needs
  2. Supplier Match - Find manufacturers
  3. Order Management - Negotiate and oversee
  4. Quality Check - Test against specifications
- **Styling**: Connected flow layout with icon badges and descriptions

### 7. **Call-to-Action** (CTA Section)
- **Component**: `CTASection`
- **Content**: "Ready to start sourcing?" with background image
- **Buttons**: 
  - Primary: Contact Us (mailto link)
  - Secondary: Optional secondary action
- **Styling**: Large bold headlines with gradient background overlay

---

## Design & Typography

### Fonts
- **Headings**: Google Syne (400, 500, 600, 700 weights)
- **Body Text**: Google Inter (400, 500, 600, 700 weights)

### Color Scheme
- **Primary**: Cyan (#0891b2)
- **Secondary**: Navy (#1e293b)
- **Neutrals**: White, grays, off-whites, black variants

### Layout
- Mobile-first responsive design
- Flexbox-based for most layouts
- Grid for product showcases
- Smooth scroll behavior
- Custom animations and transitions

---

## File Structure

```
app/
├── page.tsx                          # Home page (main entry point)
└── (pages)/
    ├── about/
    ├── buying-house/
    ├── factory-machinery/
    └── contact/

components/
├── sections/
│   ├── banner-carousel.tsx          # Hero carousel
│   ├── features-grid.tsx            # What sets us apart
│   ├── services-grid.tsx            # Buying house services
│   ├── image-text-section.tsx       # Professional buying services
│   ├── product-showcase.tsx         # Product expertise (NEW)
│   ├── process-flow.tsx             # How we work
│   └── cta-section.tsx              # Call to action
├── cards/
│   ├── feature-card.tsx
│   ├── service-card.tsx
│   └── product-card.tsx             # Enhanced for showcase
├── layout/
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── breadcrumb.tsx
│   └── page-header.tsx
└── common/
    ├── logo.tsx
    ├── section-wrapper.tsx
    └── badge.tsx

lib/
├── constants.ts                     # All data (including PRODUCT_CATEGORIES)
├── types.ts
└── utils.ts
```

---

## Key Features Implemented

✅ **Responsive Design**: Mobile, tablet, and desktop optimized
✅ **Professional Typography**: Syne + Inter fonts throughout
✅ **Interactive Carousel**: Auto-play banner with controls
✅ **Product Showcase**: Full product category display
✅ **Hover Effects**: Cards, buttons, and images with smooth transitions
✅ **SEO Optimized**: Metadata, semantic HTML, proper heading hierarchy
✅ **Accessibility**: ARIA roles, alt text, semantic structure
✅ **Performance**: Image optimization, lazy loading ready
✅ **Brand Consistency**: Unified color scheme and spacing

---

## Future Enhancements

- [ ] Add testimonials section
- [ ] Implement blog/news section
- [ ] Add video introduction
- [ ] Social proof/client logos
- [ ] Advanced contact form with validation
- [ ] Product filtering/search on showcase
- [ ] Multi-language support (i18n)
- [ ] Dark mode implementation
- [ ] Analytics integration

---

## Data Management

All content is centralized in `lib/constants.ts` for easy updates:
- Site metadata (name, description, contact info)
- Navigation structure
- Services list
- Company values
- Process steps
- Machinery inventory
- **Product categories** ⭐ NEW
- Team members

To update home page content, edit the corresponding constant in `lib/constants.ts`.
