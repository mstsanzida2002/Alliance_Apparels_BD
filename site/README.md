# Alliance Sourcing BD - Professional Garment Sourcing Website

A modern, responsive Next.js website for Alliance Sourcing BD - a leading professional buying and sourcing service for apparel, knitwear, woven, and denim products.

## Features

- **5 Main Pages**: Home, About, Buying House Services, Factory & Machinery, Contact
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Components**: Reusable, modular React components
- **SEO Optimized**: Metadata, sitemap, robots.txt, structured data
- **Brand Colors**: Teal (#0891b2) and Navy (#1e293b)
- **Professional UI**: Hero sections, service cards, product showcases, process flows, CTAs
- **Contact Integration**: Email links and embedded map

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Language**: TypeScript
- **Hosting**: Optimized for Vercel

## Project Structure

```
app/
├── layout.tsx                 # Root layout with Navbar & Footer
├── globals.css               # Design tokens & global styles
├── page.tsx                  # Home page
├── sitemap.ts               # SEO sitemap
└── (pages)/                 # Route group for main pages
    ├── about/
    │   └── page.tsx
    ├── buying-house/
    │   └── page.tsx
    ├── factory-machinery/
    │   └── page.tsx
    └── contact/
        └── page.tsx

components/
├── layout/
│   ├── navbar.tsx           # Navigation bar
│   ├── footer.tsx           # Footer
│   ├── breadcrumb.tsx       # Breadcrumb navigation
│   └── page-header.tsx      # Page header component
├── sections/
│   ├── hero.tsx             # Hero banner
│   ├── services-grid.tsx    # Services grid
│   ├── features-grid.tsx    # Features grid
│   ├── process-flow.tsx     # Process step visualization
│   └── cta-section.tsx      # Call-to-action sections
├── cards/
│   ├── service-card.tsx     # Service cards
│   ├── feature-card.tsx     # Feature cards
│   ├── product-card.tsx     # Product showcase cards
│   └── machinery-card.tsx   # Machinery list cards
└── common/
    ├── logo.tsx             # Logo component
    ├── section-wrapper.tsx  # Max-width wrapper
    └── ui/                  # Shadcn/UI components

lib/
├── constants.ts             # Site data, navigation, content
├── types.ts                 # TypeScript interfaces
└── utils.ts                 # Utility functions (from shadcn)

public/
├── logo.jpg                 # Company logo
├── garment-rack.jpg         # Hero image
├── factory-interior.jpg     # Factory image
└── robots.txt              # SEO robots file
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm/pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd alliance-sourcing-bd
```

2. Install dependencies
```bash
pnpm install
```

3. Create environment file
```bash
cp .env.example .env.local
```

4. Run development server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## Pages Overview

### Home (`/`)
- Hero banner with CTA
- "What sets us apart" features
- Buying house services
- How we work process
- Call-to-action section

### About (`/about`)
- Company story and mission
- Core values
- Process overview
- Contact CTA

### Buying House Services (`/buying-house`)
- Service offerings (sampling, supplier selection, negotiation, quality)
- Product expertise by category (Knitwear, Woven, Denim)
- Work process
- Contact CTA

### Factory & Machinery (`/factory-machinery`)
- Factory overview
- Advanced machinery inventory
- Production systems
- Contact CTA

### Contact (`/contact`)
- Contact information (email, phone, address)
- Contact form CTA
- Embedded map
- Contact CTA

## Design System

### Colors
- **Primary**: Cyan (#0891b2)
- **Secondary**: Navy (#1e293b)
- **Background**: White (#ffffff)
- **Muted**: Slate-100 (#f1f5f9)
- **Text**: Slate-900 (#1e293b)

### Typography
- **Font Family**: Geist (sans-serif)
- **Font Sizes**: Responsive (sm to 5xl)
- **Weight**: Regular (400), Semibold (600), Bold (700)

### Spacing & Radius
- Uses Tailwind's default spacing scale
- Border radius: 0.5rem (default), customizable per component

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px (md)
- **Desktop**: 1024px+ (lg)

## SEO Features

- Metadata on every page with title, description, OpenGraph tags
- Sitemap.xml for search engine crawling
- Robots.txt file
- Semantic HTML structure
- Image alt text
- Mobile-responsive design
- Fast load times with Next.js optimization

## Customization

### Update Content
Edit `/lib/constants.ts` to update:
- Site name and contact info
- Navigation links
- Services and expertise
- Team members
- Machinery list
- Values and process steps

### Update Colors
Edit `app/globals.css` to update design tokens:
```css
:root {
  --primary: 6 182 212;  /* Cyan */
  --secondary: 30 41 59; /* Navy */
  /* ... */
}
```

### Add New Pages
1. Create new folder in `app/(pages)/`
2. Create `page.tsx` with metadata
3. Import components from sections, cards, or layout
4. Add navigation link in `lib/constants.ts`

## Performance Optimization

- Image optimization with Next.js Image component
- Static generation (SSG) for all pages
- Tailwind CSS tree-shaking for minimal CSS
- Optimized fonts loading
- Minified production builds

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Next.js and deploys
4. Environment variables are automatically managed

```bash
vercel
```

### Deploy to Other Platforms

Works with any Node.js hosting:
- Next.js Static Export (if needed)
- Docker support
- Traditional Node.js servers

## Future Enhancements

- Blog section with dynamic posts
- Contact form backend integration
- Multi-language support (i18n)
- Dark mode theme
- Product testimonials section
- Team member profiles with images
- News/press releases
- Video content integration
- Newsletter signup
- Analytics integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

All rights reserved. Alliance Sourcing BD © 2024

## Support

For support, contact: info@alliancesourcingbd.com

---

Built with Next.js and Tailwind CSS. Optimized for performance and SEO.
# Alliance-Sourcing-BD
# Alliance-Sourcing-BD
