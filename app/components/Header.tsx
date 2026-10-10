"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useHeaderFooter } from "./HeaderFooterContext";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { headerOpacity } = useHeaderFooter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuHovered, setMenuHovered] = useState(false);

  // Full-screen menu: lock page scroll while open, close on Escape
  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDrawerOpen(false);
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [drawerOpen]);

  const close = () => setDrawerOpen(false);

  return (
    <>
      {/* Mega Move India Website Header */}
      {isHome && (
        <header
          className="fixed top-0 left-0 w-full z-[100] h-[90px] border-b border-gray-300 flex items-center justify-between px-6 lg:px-16 bg-[#f7f7f7]"
          style={{
            opacity: headerOpacity,
            pointerEvents: headerOpacity > 0.05 ? "auto" : "none",
          }}
        >
          <div className="flex items-center gap-3 lg:gap-5">
            <Link href="/">
              <img
                alt="Mega Move India"
                width={90}
                height={45}
                className="cursor-pointer"
                src="/mega-move-logo.svg"
              />
            </Link>
            <div className="ml-1 lg:ml-2">
              <p className="text-[10px] md:text-xs lg:text-sm font-semibold tracking-wide text-gray-600">
                Moving The Immovable
              </p>
              <p className="text-[10px] md:text-xs lg:text-sm font-semibold tracking-wide text-gray-600">
                Delivering The Impossible
              </p>
            </div>
          </div>
        </header>
      )}

      {/* Fixed Hamburger Button (Independent of Header Opacity) */}
      <button
        onClick={() => setDrawerOpen(true)}
        aria-label="Open menu"
        onMouseEnter={() => setMenuHovered(true)}
        onMouseLeave={() => setMenuHovered(false)}
        className="fixed top-0 right-6 lg:right-16 z-[110] h-[90px] flex items-center justify-center cursor-pointer text-3xl pointer-events-auto"
        style={{
          color: menuHovered
            ? (headerOpacity > 0.5 ? "#000000" : "#ffffff")
            : (headerOpacity > 0.5 ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.7)"),
          transition: "color 0.3s ease-in-out",
        }}
      >
        ☰
      </button>

      {/* Full-screen menu */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!drawerOpen}
        className={`menu-overlay fixed inset-0 z-[300] overflow-y-auto bg-black text-white ${
          drawerOpen ? "menu-overlay-open visible" : "invisible"
        }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:56px_56px]"
        />

        <div className="relative mx-auto flex min-h-full max-w-7xl flex-col px-6 pb-12 pt-6 lg:px-16 lg:pt-10">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <Link href="/" prefetch={false} onClick={close} className="flex items-center gap-4" aria-label="Mega Move India home">
              <img src="/mega-move-logo.svg" alt="" width={90} height={45} className="brightness-0 invert" />
              <span className="hidden text-xs font-semibold uppercase leading-tight tracking-[0.2em] text-white/70 sm:block">
                Moving the Immovable
                <br />
                Delivering the Impossible
              </span>
            </Link>
            <button
              onClick={close}
              aria-label="Close menu"
              className="flex h-12 w-12 items-center justify-center text-4xl font-light leading-none hover:text-[#ff5a5a]"
            >
              ✕
            </button>
          </div>

          {/* Main block */}
          <div className="flex flex-1 flex-col justify-center gap-12 py-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="menu-stagger">
              <h2 className="text-[clamp(2.6rem,7vw,5.5rem)] font-black uppercase italic leading-[0.95] tracking-tight" data-no-reveal>
                Explore our
                <br />
                expertise
              </h2>
              <p className="mt-6 max-w-xl text-[clamp(1.2rem,2.6vw,2rem)] font-bold uppercase italic leading-[1.15] text-white/85">
                Moving the immovable for India&rsquo;s biggest projects.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/services/"
                  prefetch={false}
                  onClick={close}
                  className="border-2 border-white px-7 py-3 text-lg font-semibold hover:border-[#c41e1e] hover:bg-[#c41e1e]"
                >
                  Services
                </Link>
                <Link
                  href="/case-studies/"
                  prefetch={false}
                  onClick={close}
                  className="border-2 border-white px-7 py-3 text-lg font-semibold hover:border-[#c41e1e] hover:bg-[#c41e1e]"
                >
                  Case Studies
                </Link>
                <Link
                  href="/contact/"
                  prefetch={false}
                  onClick={close}
                  className="border-2 border-[#c41e1e] bg-[#c41e1e] px-7 py-3 text-lg font-semibold hover:bg-[#a51919]"
                >
                  Request a Quote
                </Link>
              </div>

              <nav aria-label="More pages" className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-lg text-white/85">
                {[
                  ["Home", "/"],
                  ["Company News", "/company-news/"],
                  ["Our History", "/history/"],
                  ["Careers", "/careers/"],
                  ["Contact", "/contact/"],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    prefetch={false}
                    onClick={close}
                    className={`border-b-2 pb-1 hover:border-[#c41e1e] hover:text-white ${
                      pathname === href || pathname + "/" === href ? "border-[#c41e1e] text-white" : "border-transparent"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Rotating badge */}
            <div className="hidden shrink-0 self-end md:block" aria-hidden="true">
              <div className="relative h-56 w-56 lg:h-64 lg:w-64">
                <svg viewBox="0 0 200 200" className="menu-badge-spin absolute inset-0 h-full w-full">
                  <defs>
                    <path id="menu-badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
                  </defs>
                  <text className="fill-white text-[13.5px] font-bold uppercase tracking-[0.32em]">
                    <textPath href="#menu-badge-circle">Mega Move India • Your cargo. Our commitment. •</textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[1.35rem] font-black uppercase italic leading-[1.05]">
                  <span>Project</span>
                  <span>Logistics</span>
                  <span className="text-[#ff5a5a]">ODC</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-white/15 pt-6 text-sm text-white/60">
            <a href="tel:+919321399970" className="hover:text-white">+91 93213 99970</a>
            <a href="mailto:info@megamoveindia.com" className="hover:text-white">info@megamoveindia.com</a>
            <span>Mumbai · Vapi · Hisar · Chennai</span>
          </div>
        </div>
      </div>
    </>
  );
}
