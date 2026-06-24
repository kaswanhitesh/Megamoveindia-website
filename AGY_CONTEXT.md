# Mega Move India — Project Memory Context (AGY_CONTEXT)

This file tracks the current project status, architecture, page list, dependencies, completed work, pending tasks, design decisions, known bugs, and next actions. **Always read this file first before analyzing the codebase and update it after every major change.**

---

## 1. Project Status & Details
- **Project Name:** Mega Move India (Project Logistics & Freight Forwarding portal)
- **Current State:** Production-build ready (Build verified and compiles successfully).
- **Primary Framework:** Next.js 16.2.9 (App Router)
- **Styling Solution:** Tailwind CSS v4 (configured via `@tailwindcss/postcss`)
- **Animations Framework:** GSAP (v3.15.0) + ScrollTrigger, Swiper (v12.2.0), Motion (v12.40.0), Three.js for 3D elements

---

## 2. Architecture & Layout
- **Root Layout (`app/layout.tsx`):**
  - Standard HTML5 semantic structure.
  - Global Header (`app/components/Header.tsx`) and Global Footer (`app/components/Footer.tsx`) wrappers.
  - Body is a flex container (`flex flex-col min-h-screen`) containing a flex-expanding `<main className="flex-1 w-full overflow-x-hidden">` wrapper that yields to `children` pages.
- **Styling Pipeline:** 
  - Standard CSS custom properties defined in `app/globals.css` with `@import "tailwindcss"` (Tailwind v4 integration).

---

## 3. Installed Dependencies
### Dependencies:
- `next`: `16.2.9`
- `react`: `19.2.4`
- `react-dom`: `19.2.4`
- `gsap`: `^3.15.0`
- `lenis`: `^1.3.23`
- `motion`: `^12.40.0`
- `swiper`: `^12.2.0`
- `three`: `^0.184.0`
- `@react-three/fiber`: `^9.6.1`
- `@react-three/drei`: `^10.7.7`
- `react-countup`: `^6.5.3`
- `react-icons`: `^5.6.0`

### DevDependencies:
- `typescript`: `^5`
- `eslint`: `^9`
- `eslint-config-next`: `16.2.9`
- `tailwindcss`: `^4`
- `@tailwindcss/postcss`: `^4`
- `@types/node`: `^20`
- `@types/react`: `^19`
- `@types/react-dom`: `^19`

---

## 4. Active Routes (Pages)
- `/` — Homepage (Services accordion, industries slider, news marquee)
- `/careers` — Careers details and openings
- `/contact-us` — Business contact and email channels
- `/equipment` — Fleet and rental assets inventory
- `/history` — Company legacy and timeline
- `/privacy-policy` — Documented privacy terms
- `/terms-and-conditions` — Corporate terms of service
- `/company-news` — News catalog
  - `/company-news/breakbulk-Dubai` — Dubai event highlight
  - `/company-news/fleet-expansion` — Heavy haul fleet details
  - `/company-news/IICS` — Exhibition coverage
- `/services` — Services root
  - `/services/air-freight` — Airborne logistics
  - `/services/ocean-freight` — Seaborne transportation
  - `/services/land-transport` — Heavy-haul modular trailers
  - `/services/rentals-warehousing` — Equipment rentals & storage
  - `/services/factory-relocation` — Complete plant transfers
  - `/services/project-forwarding` — Dynamic forwarding logistics
  - `/services/transport-engineering` — Feasibility & route surveys
  - `/services/transshipment` — Multi-modal transshipment
  - `/services/logistics-supply-chain` — Integrated supply chain
- `/case-studies` — Case studies index
  - `/case-studies/national-defence-project` — BMP-II vehicle transport to Ladakh
  - `/case-studies/Project-2` — 225MT Used Machinery Import
  - `/case-studies/Project-3` — Manufacturing Plant Transfer
  - `/case-studies/Project-4` — Heat Condenser Shipment
  - `/case-studies/Project-5` — 2x100MT Heat Exchanger
  - `/case-studies/Project-6` — Chemical Storage Tanks
  - `/case-studies/Project-7` — X-Ray Systems
  - `/case-studies/Project-8` — EOT Crane Shipment

---

## 5. Recent Completed Work (National Defence Project page)
1. **Footer Restoration & Stacking Context Fix:**
   - Modified `page.tsx` to replace nested `<main>` with a semantic `<div>` tag.
   - Pushed fixed background container in `page.tsx` to `z-[-10]` to avoid covering viewport elements.
   - Configured `useEffect` hook in `Hero.tsx` (client component) to set `document.body.style.backgroundColor = 'transparent'` on mount and restore it on unmount, allowing the fixed background to show through cleanly while rendering the global site footer on top.
2. **Gallery Overlay & Blur Adjustments:**
   - Reduced overlay opacity of mobile and desktop galleries to **25%** (`bg-white/25`) in `Gallery.tsx`.
   - Increased backdrop blur to `backdrop-blur-2xl` in `Gallery.tsx` for a subtle, high-quality frosted-glass look.
3. **Card Cleanups:**
   - Removed instructions text `Scroll down to move through the transport sequence` from desktop gallery header.
   - Removed white image footers (`MISSION FRAME` / slide numbers) from desktop and mobile card articles to display the gallery images edge-to-edge with clean rounded corners.
4. **Scroll Behavior Integrity:**
   - Retained desktop horizontal GSAP pinning scroll offsets and mobile touch swiping configurations without alterations.
5. **Build Optimization:**
   - Checked and compiled successfully using `npm run build`.

---

## 6. Design Decisions
- **Fixed Backgrounds stacking:** Setting body background to `transparent` on mount (reverting on cleanup) in dynamic pages with fixed viewport background images is preferred to ensure viewport fixed layers do not overlap global footer and headers due to browser compositing bugs.
- **SEO/Metadata Exports:** Kept page entries (like `page.tsx`) as server components by writing client hooks and lifecycle states in leaf client components (like `Hero.tsx` or `Gallery.tsx`), allowing standard `export const metadata: Metadata` configurations.

---

## 7. Known Bugs
- *None currently logged.*

---

## 8. Next Actions & Pending Tasks
- [ ] Monitor site feedback on desktop/mobile scroll interactions.
- [ ] Review performance metrics for dynamic image loads in the horizontal gallery.

---

## Latest Update

- **Date:** June 24, 2026
- **Files Modified:**
  - `app/components/OtherProjectsCarousel.tsx` (New component)
  - `app/case-studies/national-defence-project/page.tsx`
  - `app/case-studies/Project-2/page.tsx` through `Project-8/page.tsx`
  - `AGY_CONTEXT.md`
- **Changes Made:**
  - Designed and created the premium responsive `OtherProjectsCarousel.tsx` component to replace the static carousels across all Case Study pages.
  - Recreated and refined the "Our Other Projects" visual treatment from the reference image:
    - Custom uppercase badges (e.g. `DEFENCE`, `IMPORT`, `PLANT TRANSFER`, `ODC`, `EXPORT`, `HEAVY LIFT`) absolute-positioned on card images.
    - Title hierarchy, metadata layout, and typography proportions matching the reference design.
    - Standardized card text layout by wrapping project titles inside a fixed-height block (`h-[52px]`/`lg:h-[56px]`), vertically centering the text (`flex items-center`), and setting a consistent 2-line clamp (`line-clamp-2` and `leading-snug`). This keeps all cards uniform in height regardless of title length.
    - Integrated bottom metadata row using high-fidelity inline SVGs for Weight (anvil scale), Location (map pin), and Duration (calendar) metrics, perfectly aligned on a single baseline across all cards.
    - Enabled intelligent route/location truncation (`truncate` with a maximum width boundary of `max-w-[42%]`) to prevent layout shifts or item overlap, while providing native hover tooltips (`title={project.location}`) for full path accessibility.
    - Circle navigation arrows (`<` and `>`) overlaying the container edges with soft shadows.
    - Responsive layout displaying 3 wider cards on desktop (`lg`/`xl`), 2 on tablet (`md`), and 1 on mobile screens for enhanced layout presence.
    - Pagination dots centered at the bottom, dynamically updating and cycling matching the active index.
    - Spring-like Apple Cards hover lift/shadow scaling interactions (`hover:scale-[1.05] hover:-translate-y-2.5 hover:shadow-[0_30px_60px_rgba(23,63,116,0.16)]`) with inner image scale zoom transitions (`group-hover:scale-105`).
    - Integrated continuous infinite auto-slide marquee functionality (running via a smooth `requestAnimationFrame` loop using a duplicated card set). Speed increased by 15% to 40.25 pixels per second for faster, highly responsive transitions.
    - Solved timing regressions where autoplay failed to initialize consistently on page loads: introduced a React `mounted` state dependency inside the scroll loop animation effect to guarantee initialization ONLY after the container ref has successfully bound to the client DOM.
  - Implemented a clean monochrome typography system across all Case Study templates, Gallery files, and the dynamic carousel:
    - Removed all blue typography (replacing `#173f74` colors with high-contrast `zinc-900`/`zinc-950` monochrome scales for titles, headings, values, controls, and active states).
    - Converted category badges, pagination elements, and SVG vector borders to neutral monochrome colors (`bg-zinc-950` / `border-zinc-100`).
    - Synced navigation controls in the Gallery slider and lightbox overlays to match the monochrome scheme.
  - Standardized and tightened the vertical rhythm and layout spacing across all Case Study pages to build a dense, intentional, high-end enterprise aesthetic:
    - Reduced Hero overlapping offset to `-40px` and rounded-top corner container sizes to `rounded-t-[40px]`.
    - Tightened section paddings (`py-16 lg:py-24` became `py-12 lg:py-16` on Overview; `py-12 lg:py-20` became `py-10 lg:py-14` on Details, Outcomes, and post-gallery segments).
    - Reduced margin gaps below section headings (`mb-8 lg:mb-12` became `mb-6 lg:mb-8`).
    - Decreased spaces between post-gallery text sections (`mb-20` became `mb-10 lg:mb-12` on Challenges and Outcomes; `mt-24` became `mt-14 lg:mt-16` on the Other Projects section).
  - Integrated the component inside all 8 Case Study templates (`national-defence-project` and `Project-2` to `Project-8`), filtering out the active project from each page's carousel to present the other 7 projects.
  - Successfully verified Next.js production build runs and compiles with zero compilation or TypeScript errors.
- **Known Issues:** None.
- **Next Actions:** Monitor the scroll-driven interactions in desktop/mobile web views.
