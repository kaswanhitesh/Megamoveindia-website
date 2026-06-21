"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <header className="h-[90px] border-b border-gray-300 flex items-center justify-between px-6 lg:px-16 bg-[#f7f7f7]">
        <div className="flex items-center gap-3 lg:gap-5">
          <Link href="/">
            <Image
              src="/images/mega-move-logo.svg"
              alt="Mega Move India"
              width={90}
              height={45}
              className="cursor-pointer"
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

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer text-3xl text-gray-500 hover:text-black transition-all duration-300"
        >
          ☰
        </button>
      </header>

      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-700 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-gray-700 text-white z-50 overflow-y-auto transition-transform duration-700 ease-out ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-8 text-3xl cursor-pointer hover:rotate-90 hover:opacity-70 transition-all duration-300"
        >
          ✕
        </button>

        <div className="text-lg text-gray-200 pt-10">
          <a
            href="/"
            className="block py-5 px-6 lg:px-12 hover:bg-white hover:text-gray-700 transition-all duration-300"
          >
            Home
          </a>

          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between py-5 px-6 lg:px-12 hover:bg-white hover:text-gray-700 transition-all duration-300"
            >
              <span>Services</span>

              <span
                className={`transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {servicesOpen && (
              <div className="bg-gray-800 text-base">
                <a
                  href="/services/air-freight"
                  className="block py-3 px-8 lg:px-16 hover:bg-white hover:text-gray-700 transition-all duration-300"
                >
                  Air Freight
                </a>

                <a
                  href="/services/ocean-freight"
                  className="block py-3 px-8 lg:px-16 hover:bg-white hover:text-gray-700 transition-all duration-300"
                >
                  Ocean Freight
                </a>

                <a
                  href="/services/land-transport"
                  className="block py-3 px-8 lg:px-16 hover:bg-white hover:text-gray-700 transition-all duration-300"
                >
                  Overland Transport
                </a>

                <a
                  href="/services/project-forwarding"
                  className="block py-3 px-8 lg:px-16 hover:bg-white hover:text-gray-700 transition-all duration-300"
                >
                  Project Forwarding Services
                </a>

                <a
                  href="/services/logistics-supply-chain"
                  className="block py-3 px-8 lg:px-16 hover:bg-white hover:text-gray-700 transition-all duration-300"
                >
                  Logistics & Supply Chain Solutions
                </a>

                <a
                  href="/services/factory-relocation"
                  className="block py-3 px-8 lg:px-16 hover:bg-white hover:text-gray-700 transition-all duration-300"
                >
                  Factory Relocation
                </a>

                <a
                  href="/services/transshipment"
                  className="block py-3 px-8 lg:px-16 hover:bg-white hover:text-gray-700 transition-all duration-300"
                >
                  Transshipment
                </a>

                <a
                  href="/services/transport-engineering"
                  className="block py-3 px-8 lg:px-16 hover:bg-white hover:text-gray-700 transition-all duration-300"
                >
                  Transport Engineering Capabilities
                </a>
              </div>
            )}
          </div>

          <a
            href="/case-studies"
            className="block py-5 px-6 lg:px-12 hover:bg-white hover:text-gray-700 transition-all duration-300"
          >
            Case Studies
          </a>

          <a
            href="/equipment"
            className="block py-5 px-6 lg:px-12 hover:bg-white hover:text-gray-700 transition-all duration-300"
          >
            In-House Equipments
          </a>

          <a
            href="/company-news"
            className="block py-5 px-6 lg:px-12 hover:bg-white hover:text-gray-700 transition-all duration-300"
          >
            Company News
          </a>

          <a
            href="/history"
            className="block py-5 px-6 lg:px-12 hover:bg-white hover:text-gray-700 transition-all duration-300"
          >
            Our History
          </a>

          <a
            href="/careers"
            className="block py-5 px-6 lg:px-12 hover:bg-white hover:text-gray-700 transition-all duration-300"
          >
            Careers
          </a>

          <a
            href="/contact-us"
            className="block py-5 px-6 lg:px-12 hover:bg-white hover:text-gray-700 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}