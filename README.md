# Beauty Queen Oslo – Luxury Salon Website

A premium, award-winning salon website built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm run dev    # Start development server at http://localhost:3000
npm run build  # Build for production
npm start      # Start production server
```

## Image Management

All images are stored in `/public/` and referenced by simple file names. To swap images, just replace the file with the same name.

### Image Reference Map

| File Name | Where Used | Recommended Dimensions |
|-----------|-----------|----------------------|
| `/hero-1.jpg` | Hero slideshow (slide 1) | 1920×1080px |
| `/hero-2.jpg` | Hero slideshow (slide 2) | 1920×1080px |
| `/salon-1.jpg` | Hero slideshow, About section | 1920×1080px |
| `/nails-1.jpg` | Services card, Gallery | 800×1000px |
| `/nails-2.jpg` | Gallery | 800×1000px |
| `/brows-1.jpg` | Services card, About, Gallery | 800×1000px |
| `/lashes-1.jpg` | Services card, Gallery | 800×1000px |
| `/training-1.jpg` | Training section | 1200×800px |
| `/gallery-1.jpg` | Gallery grid | 800×800px |
| `/gallery-2.jpg` | Gallery grid | 800×800px |
| `/gallery-3.jpg` | Gallery grid | 800×800px |
| `/gallery-4.jpg` | Gallery grid | 800×800px |
| `/gallery-5.jpg` | Gallery grid | 800×800px |
| `/gallery-6.jpg` | Gallery grid, Instagram strip | 800×800px |

### Tips
- Use high-quality images (at least 72dpi, preferably 150dpi+)
- Portrait orientation works best for service and gallery cards
- Landscape works best for hero images
- PNG or JPG format both work

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and theme tokens
│   ├── layout.tsx           # Root layout with fonts and SEO
│   └── page.tsx             # Main page composition
├── components/
│   ├── booking/
│   │   └── BookingWizard.tsx    # 6-step booking wizard
│   ├── layout/
│   │   ├── Navbar.tsx           # Sticky navigation
│   │   └── Footer.tsx           # Footer with newsletter
│   ├── sections/
│   │   ├── HeroSection.tsx      # Full-screen hero with slideshow
│   │   ├── ServicesSection.tsx  # Service cards with expandable details
│   │   ├── GallerySection.tsx   # Masonry gallery with lightbox
│   │   ├── CredentialsSection.tsx  # Awards and achievements
│   │   ├── BookingSection.tsx   # Booking wizard container
│   │   ├── PricingSection.tsx   # Tabbed pricing
│   │   ├── AboutSection.tsx     # About with editorial layout
│   │   ├── TestimonialsSection.tsx  # Animated testimonials
│   │   ├── TrainingSection.tsx  # Course cards
│   │   ├── InstagramSection.tsx # Social proof strip
│   │   └── ContactSection.tsx   # Contact form and info
│   └── ui/
│       ├── Button.tsx           # Reusable button variants
│       ├── SectionLabel.tsx     # Section label with gold lines
│       └── Icons.tsx            # Custom SVG icons
└── lib/
    ├── utils.ts                 # Utility functions
    └── data/
        ├── services.ts          # Services and sub-services
        ├── gallery.ts           # Gallery image data
        ├── pricing.ts           # Pricing categories
        ├── testimonials.ts      # Client reviews
        └── booking.ts           # Booking mock data
```

## Connecting a Backend

The booking wizard is structured for easy backend integration:

### Supabase
Add these environment variables and connect in `/src/lib/data/booking.ts`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

### Email Notifications
Set up with Resend or SendGrid in a `/app/api/booking` route.

### Stripe Payments
Add Stripe to handle deposits and full payments via the booking wizard payment step.

## Customization

### Colors
Edit CSS variables in `src/app/globals.css` under `@theme`.

### Services / Pricing
Edit mock data files in `src/lib/data/`.

### Copy / Text
All Norwegian text is inline in each section component. Search for strings to update.

### SEO
Update metadata in `src/app/layout.tsx`.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **Framer Motion v12**
- **Lucide Icons**
- **React Day Picker** (calendar)
- **date-fns** (date utilities)
