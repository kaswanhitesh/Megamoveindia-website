"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer
      style={{
        position: isHome ? "absolute" : "relative",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: isHome ? 150 : 10,
        borderTop: "1px solid rgba(209, 213, 219, 1)",
        backgroundColor: "#f7f7f7",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        fontSize: "0.875rem",
        color: "#4b5563",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0.75rem",
      }}
      className="lg:flex-row lg:px-16"
    >
      <div className="text-center lg:text-left">
        © Copyright 2026, Mega Move India Private Limited. All rights reserved.
      </div>
      <div className="flex flex-wrap justify-center lg:justify-end items-center gap-2 lg:gap-4 text-center">
        <Link href="/sitemap" prefetch={false} className="hover:text-black transition-colors">
          Site Map
        </Link>
        <span className="hidden lg:inline">|</span>
        <a
          href="/documents/MegaMoveIndia%20Terms%20and%20Conditions.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors"
        >
          Terms &amp; Conditions
        </a>
        <span className="hidden lg:inline">|</span>
        <Link href="/privacy-policy" prefetch={false} className="hover:text-black transition-colors">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}