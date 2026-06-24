# Mega Move India Customization Rules

These guidelines are tailored to the Mega Move India Next.js codebase.

## Codebase Summary & Context
*   **Framework**: Next.js v16 (App Router) + React 19 + TypeScript + Tailwind CSS v4.
*   **Image Assets**: A major bottleneck. High-resolution PNGs (1.5MB - 2.1MB) are used in dynamic sections (e.g. `/company-news/IICS` gallery, national defence project card images).
*   **Unused Dependencies**: `three`, `gsap`, `lenis`, and `motion` are in `package.json` but NOT used.
*   **Whole-Page Client Components**: Homepage (`app/page.tsx`) and Case Studies Hub (`app/case-studies/page.tsx`) use `"use client"` globally, which hurts page load indexing and local metadata injection.

## Critical Issues to Keep in Mind
1.  **Broken Navigation & Route Targets**:
    *   `/careers`, `/history` (linked in `Header.tsx`) do NOT exist in the app.
    *   `/company-news/breakbulk-Dubai` and `/company-news/fleet-expansion` (linked in news card list) do NOT exist.
    *   PDF download link in `app/terms-and-conditions/page.tsx` is `/documents/MegaMoveIndia-Terms-and-Conditions.pdf` but should be `/documents/MegaMoveIndia%20Terms%20and%20Conditions.pdf` to match the actual file name.
2.  **Lint Warning (no-img-element)**: Standard `<img>` tag is used across pages, causing 41 warnings.
3.  **Template Copy-Paste Duplications**: Component function exports for `Project-2`, `Project-5`, and `Project-7` contain copy-pasted names (`NationalDefenceProject` / `HeatCondenserExportProject`).
4.  **No HTML `<a>` Navigation**: Mobiles drawer menu links in [Header.tsx](file:///Users/hiteshkaswan/mega-move-india/app/components/Header.tsx) use raw HTML `<a>` tags instead of Next.js `<Link>`, triggering slow, full-page refreshes.
