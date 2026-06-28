"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useHeaderFooter } from "./HeaderFooterContext";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { headerOpacity } = useHeaderFooter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuHovered, setMenuHovered] = useState(false);

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

      {/* Sidebar Drawer */}
      {/* Backdrop */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={`fixed inset-0 bg-black/30 z-[200] transition-opacity duration-500 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-zinc-950/80 backdrop-blur-xl text-white z-[300] overflow-y-auto transition-transform duration-500 ease-out border-l border-white/10 shadow-2xl ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setDrawerOpen(false)}
          className="absolute top-8 right-8 text-3xl cursor-pointer hover:rotate-90 hover:opacity-70 transition-all duration-300"
        >
          ✕
        </button>
        <div className="text-lg text-gray-200 pt-20">
          <Link
            href="/"
            onClick={() => setDrawerOpen(false)}
            className="block py-5 px-6 lg:px-12 hover:bg-white hover:text-gray-700 transition-all duration-300 border-b border-white/5 font-sans"
          >
            Home
          </Link>
          
          <div className="border-b border-white/5">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between py-5 px-6 lg:px-12 hover:bg-white hover:text-gray-700 transition-all duration-300 font-sans"
            >
              <span>Services</span>
              <span className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}>▼</span>
            </button>
            
            {/* Services Sub-links */}
            <div
              className={`overflow-hidden transition-all duration-500 bg-gray-900/50 ${
                servicesOpen ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="py-2 text-[15px]">
                <Link
                  href="/services/air-freight"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-3 px-10 lg:px-16 hover:text-white text-gray-400 hover:bg-white/5 transition-colors"
                >
                  Air Freight
                </Link>
                <Link
                  href="/services/ocean-freight"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-3 px-10 lg:px-16 hover:text-white text-gray-400 hover:bg-white/5 transition-colors"
                >
                  Ocean Freight
                </Link>
                <Link
                  href="/services/land-transport"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-3 px-10 lg:px-16 hover:text-white text-gray-400 hover:bg-white/5 transition-colors"
                >
                  Land Transport
                </Link>
                <Link
                  href="/services/rentals-warehousing"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-3 px-10 lg:px-16 hover:text-white text-gray-400 hover:bg-white/5 transition-colors"
                >
                  Rentals &amp; Warehousing
                </Link>
                <Link
                  href="/services/factory-relocation"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-3 px-10 lg:px-16 hover:text-white text-gray-400 hover:bg-white/5 transition-colors"
                >
                  Factory Relocation
                </Link>
                <Link
                  href="/services/project-forwarding"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-3 px-10 lg:px-16 hover:text-white text-gray-400 hover:bg-white/5 transition-colors"
                >
                  Project Forwarding
                </Link>
                <Link
                  href="/services/transport-engineering"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-3 px-10 lg:px-16 hover:text-white text-gray-400 hover:bg-white/5 transition-colors"
                >
                  Transport Engineering
                </Link>
                <Link
                  href="/services/logistics-supply-chain"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-3 px-10 lg:px-16 hover:text-white text-gray-400 hover:bg-white/5 transition-colors"
                >
                  Logistics &amp; Supply Chain
                </Link>
                <Link
                  href="/services/transshipment"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-3 px-10 lg:px-16 hover:text-white text-gray-400 hover:bg-white/5 transition-colors"
                >
                  Transshipment
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/case-studies"
            onClick={() => setDrawerOpen(false)}
            className="block py-5 px-6 lg:px-12 hover:bg-white hover:text-gray-700 transition-all duration-300 border-b border-white/5 font-sans"
          >
            Case Studies
          </Link>
          <Link
            href="/equipment"
            onClick={() => setDrawerOpen(false)}
            className="block py-5 px-6 lg:px-12 hover:bg-white hover:text-gray-700 transition-all duration-300 border-b border-white/5 font-sans"
          >
            In-House Equipments
          </Link>
          <Link
            href="/company-news"
            onClick={() => setDrawerOpen(false)}
            className="block py-5 px-6 lg:px-12 hover:bg-white hover:text-gray-700 transition-all duration-300 border-b border-white/5 font-sans"
          >
            Company News
          </Link>
          <Link
            href="/history"
            onClick={() => setDrawerOpen(false)}
            className="block py-5 px-6 lg:px-12 hover:bg-white hover:text-gray-700 transition-all duration-300 border-b border-white/5 font-sans"
          >
            Our History
          </Link>
          <Link
            href="/careers"
            onClick={() => setDrawerOpen(false)}
            className="block py-5 px-6 lg:px-12 hover:bg-white hover:text-gray-700 transition-all duration-300 border-b border-white/5 font-sans"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            onClick={() => setDrawerOpen(false)}
            className="block py-5 px-6 lg:px-12 hover:bg-white hover:text-gray-700 transition-all duration-300 border-b border-white/5 font-sans"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
