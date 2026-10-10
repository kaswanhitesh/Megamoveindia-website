"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Site-wide motion for section headings: every <h2> below the fold fades and
// rises into place the first time it scrolls into view. Page titles (<h1>)
// animate on load with pure CSS (see "Heading motion" in globals.css), so they
// never flash. Opt out with data-no-reveal on any ancestor.
export default function HeadingReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const headings = Array.from(document.querySelectorAll<HTMLElement>("h2")).filter(
      (el) =>
        !el.closest("[data-no-reveal], footer, header, [role='dialog']") &&
        !el.classList.contains("reveal-in") &&
        // Already on screen at load: leave it visible rather than hide-then-show
        el.getBoundingClientRect().top > window.innerHeight,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.remove("reveal");
          entry.target.classList.add("reveal-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    for (const el of headings) {
      el.classList.add("reveal");
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
      // Never leave a heading hidden if the page changes mid-animation
      for (const el of headings) el.classList.remove("reveal");
    };
  }, [pathname]);

  return null;
}
