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
- [ ] Build similar high-fidelity cinematic horizontal scroll galleries for other project case studies if requested.

---

## Latest Update

- **Date:** June 24, 2026
- **Files Modified:** [Gallery.tsx](file:///Users/hiteshkaswan/mega-move-india/app/case-studies/national-defence-project/Gallery.tsx)
- **Changes Made:**
  - Converted the National Defence Project horizontal gallery into a premium 3D Coverflow layout.
  - Implemented mathematical tracking of card centers relative to viewport width to dynamically calculate perspective rotation, scale, depth, translateX, and z-index offsets on every scroll update.
  - Removed all title headers, text descriptions, captions, slide counters, and bottom progress bar indicators for both desktop (GSAP pinning sequence) and mobile (overflow scroll listener swipe) formats.
  - Positioned and scaled the center image to be dominant and large, while adjacent left/right images scale down and angle inward into the background.
  - Integrated sharing of a single parent perspective context (`1200px` desktop / `800px` mobile) and `preserve-3d` transforms on layout tracks to ensure correct vanishing point rendering.
- **Known Issues:** None.
- **Next Actions:** Test user scroll feel and performance of the 3D coverflow transition in desktop and mobile viewport sizes.
