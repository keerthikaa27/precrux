# 🚀 Web Rocket — Next.js 14 Website

A pixel-perfect replica of the Web Rocket design agency website built with **Next.js 14 (App Router)**, **TailwindCSS**, and **shadcn/ui**.

---

## 📁 Project Structure

```
webrocket/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer wrapping)
│   ├── globals.css             # Global styles, animations, utility classes
│   ├── page.tsx                # Home page
│   ├── about/
│   │   └── page.tsx            # About page (hero, story, team, awards)
│   ├── portfolio/
│   │   └── page.tsx            # Portfolio / case studies grid
│   ├── blog/
│   │   └── page.tsx            # Blog listing with category filter
│   ├── contact/
│   │   └── page.tsx            # Contact form + booking CTA
│   ├── careers/
│   │   └── page.tsx            # Careers page with job openings
│   ├── get-a-quote/
│   │   └── page.tsx            # Multi-step quote request form
│   └── services/
│       ├── ui-ux/page.tsx
│       ├── brand-design/page.tsx
│       ├── webflow/page.tsx
│       └── no-code/page.tsx
├── components/
│   ├── Navbar.tsx              # Fixed navbar with services dropdown
│   ├── Footer.tsx              # Footer with newsletter signup
│   ├── HeroSection.tsx         # Dark hero with fade-up animations
│   ├── LogoMarquee.tsx         # Scrolling client logo strip
│   ├── AboutPreview.tsx        # About snippet + stats (homepage)
│   ├── ServicesSection.tsx     # 4-service card grid
│   ├── PortfolioShowcase.tsx   # Selected work grid with hover overlays
│   ├── TestimonialsSection.tsx # Reviews with star ratings
│   ├── BlogPreview.tsx         # 3 latest blog post cards
│   └── CTASection.tsx          # "Book a Free Call" dark CTA section
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── next.config.js
```

---

## ⚡ Quick Start

### 1. Create the project & install dependencies

```bash
# Create a new Next.js 14 project
npx create-next-app@14 webrocket --typescript --tailwind --eslint --app --src-dir=no --import-alias="@/*"

cd webrocket
```

### 2. Install all required packages

```bash
npm install lucide-react clsx tailwind-merge class-variance-authority \
  @radix-ui/react-navigation-menu \
  @radix-ui/react-accordion \
  @radix-ui/react-dialog \
  @radix-ui/react-dropdown-menu \
  @radix-ui/react-slot
```

### 3. Install shadcn/ui (optional but recommended for future components)

```bash
npx shadcn-ui@latest init
```

When prompted:
- Style: **Default**
- Base color: **Slate**
- CSS variables: **Yes**

Then add components as needed:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add navigation-menu
npx shadcn-ui@latest add accordion
```

### 4. Copy all source files

Copy all files from this project into your `webrocket/` directory, replacing the auto-generated ones.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you should see the full website!

---

## 🎨 Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `brand-green` | `#C8F135` | Primary CTA buttons, accents |
| `brand-dark` | `#0f1117` | Hero backgrounds, dark sections |
| `brand-dark2` | `#1a1d24` | Navbar dropdown bg |
| `brand-gray` | `#f4f4f4` | Light section backgrounds |

### Typography
- **Font**: Geist (loaded via `next/font/google`) — modern, clean, matching the original
- **Headings**: `font-black` (900 weight), tight tracking
- **Body**: `font-normal` or `font-medium`, relaxed line-height

### Key CSS Utility Classes (in `globals.css`)
| Class | Description |
|-------|-------------|
| `.diagonal-bg` | Dark hero background with diagonal line pattern |
| `.btn-primary` | Lime-green pill button |
| `.btn-outline` | Dark-bordered pill button |
| `.btn-outline-white` | White-bordered pill button (for dark sections) |
| `.service-card` | Gray rounded card with hover lift |
| `.fade-up` | Scroll-triggered entrance animation |
| `.marquee-track` | Infinite horizontal scroll for logo strip |
| `.nav-link` | Underline-on-hover nav link |

---

## 📄 Pages Overview

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero → Logos → About → Services → Portfolio → Testimonials → Blog → CTA |
| `/about` | Full about page — Hero → Team images → How We Work → Story → Team grid → Awards |
| `/portfolio` | Case studies grid with tags and result metrics |
| `/blog` | Blog listing with category filter pills |
| `/contact` | Split-layout contact form + booking CTA card |
| `/careers` | Perks grid + open positions list |
| `/get-a-quote` | Interactive multi-select quote request form |
| `/services/ui-ux` | UI/UX Design service detail page |
| `/services/brand-design` | Brand Design service detail page |
| `/services/webflow` | Webflow Development service detail page |
| `/services/no-code` | No-Code Development service detail page |

---

## 🛠 Customization Guide

### Replacing placeholder images
All images use `images.unsplash.com` URLs. Replace with your actual assets in `/public/`:
```tsx
// Change this:
src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"

// To this:
src="/images/team-photo.jpg"
```

### Updating content
- **Homepage stats**: Edit `AboutPreview.tsx` → stats array
- **Services**: Edit `ServicesSection.tsx` → services array
- **Team members**: Edit `app/about/page.tsx` → team array
- **Awards**: Edit `app/about/page.tsx` → awards array
- **Blog posts**: Edit `BlogPreview.tsx` and `app/blog/page.tsx` → posts array

### Adding animations (optional enhancement)
Install Framer Motion for smoother animations:
```bash
npm install framer-motion
```

### Adding a real CMS (optional)
For dynamic blog posts and portfolio:
```bash
npm install contentlayer next-contentlayer  # For MDX-based blog
# OR
npm install @sanity/client                  # For Sanity CMS
```

---

## 🚀 Deployment

### Deploy to Vercel (recommended)
```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

### Build for production
```bash
npm run build
npm start
```

---

## ✅ Full Checklist Before Launch

- [ ] Replace all Unsplash images with real photos
- [ ] Update contact email (`chris@webrocket.studio`)
- [ ] Connect Calendly link in CTASection and Contact page
- [ ] Set up a real email handler (Resend, EmailJS, or Formspree)
- [ ] Add your real social media links in Footer
- [ ] Update copyright year and company name in Footer
- [ ] Add Google Analytics or Plausible
- [ ] Set up proper SEO metadata in `app/layout.tsx`
- [ ] Add `robots.txt` and `sitemap.xml`

---

## 📦 All Packages to Install (Complete List)

```bash
# Core (already in Next.js)
# next@14, react@18, typescript, tailwindcss

# UI & Icons
npm install lucide-react

# Utility
npm install clsx tailwind-merge class-variance-authority

# Radix UI primitives (used by shadcn)
npm install @radix-ui/react-navigation-menu @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-slot

# shadcn/ui (init then add components)
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card dialog navigation-menu accordion badge
```

That's everything you need! 🎉
