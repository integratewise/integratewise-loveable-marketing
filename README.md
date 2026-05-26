# IntegrateWise Marketing Site

A Vite + React + TypeScript marketing website for IntegrateWise.

## Tech Stack

- **Build Tool:** Vite v7.2.4
- **Framework:** React 19 + TypeScript 5.9
- **Styling:** Tailwind CSS v3.4.19 + shadcn/ui theme
- **Animation:** GSAP (ScrollTrigger), Framer Motion, Lenis
- **Routing:** React Router (HashRouter)
- **Fonts:** Bebas Neue, DM Serif Display, IBM Plex Mono, Instrument Sans

## Project Structure

```
src/
  App.tsx              # Root router — HashRouter with all page routes
  main.tsx             # Entry point
  index.css            # Global styles, CSS variables, design tokens
  layouts/Layout.tsx   # Shared header + footer shell
  pages/               # Route-level pages (12 total)
  sections/            # Home-page sections (11 used, 9 orphaned)
  components/ui/       # shadcn/ui components (40+)
  components/workbench/# Workbench showcase components
  styles/              # Editorial + workbench CSS overrides
  hooks/               # use-mobile, scroll animations
  lib/utils.ts         # cn() helper
public/
  assets/              # Logo, icons
  images/              # Product screenshots, workbench images
  videos/              # Demo videos
```

## Pages

| Route | Page | Status |
|-------|------|--------|
| `/` | Home | ✅ Live |
| `/platform` | Platform | ✅ Live |
| `/how-it-works` | How It Works | ✅ Live |
| `/pricing` | Pricing | ✅ Live |
| `/templates` | Templates | ✅ Live |
| `/about` | About | ✅ Live |
| `/features` | Features | ✅ Live |
| `/contact` | Contact | ✅ Live |
| `/resources` | Resources | ✅ Live |
| `/business-intelligence` | Business Intelligence | ✅ Live |
| `/account-success` | Account Success | ✅ Live |
| `/careers` | Careers | ✅ Live |

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint
```

## Known Limitations

- Contact form captures input but does not submit to an API endpoint (client-side only).
- Early Access form posts to `api.integratewise.com/v1/demo-request` but silently swallows errors.
- Some section components exist but are not currently used on the Home page.

## Deployment

The `dist/` folder is the static build output. Deploy it to any static host (Cloudflare Pages, Vercel, Netlify, etc.).
