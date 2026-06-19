"use client";

import Image from "next/image";
import { useState } from "react";

const cards = [
  {
    title: "AIR",
    subtitle: "Global Air Cargo Solutions",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
  },
  {
    title: "OCEAN",
    subtitle: "FCL | LCL | Breakbulk",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7",
  },
  {
    title: "LAND",
    subtitle: "ODC | Heavy Lift | Trailers",
    image:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a",
  },
  {
    title: "RENTALS",
    subtitle: "Warehousing & Equipment",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="h-screen overflow-hidden bg-[#f7f7f7]">
      {/* Header */}
      <header className="h-[90px] border-b border-gray-300 flex items-center justify-between px-16">
        <div className="flex items-center gap-5">
  <Image
    src="/images/mega-move-logo.svg"
    alt="Mega Move India"
    width={90}
    height={45}
  />

  <div className="ml-2">
    <p className="text-sm font-medium tracking-wide text-gray-600">
      Moving The Immovable
    </p>
    <p className="text-lg font-semibold tracking-wide text-gray-800">
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

      {/* Content */}
      <section className="h-[calc(100vh-90px)] flex items-start px-16 pt-10 pb-10 gap-8">

        {/* Left Side */}
        <div className="w-[40%] flex flex-col justify-start pt-12">
          <h1 className="text-[52px] leading-[1.2] font-light tracking-wide">
            Welcome to
            <br />
            <span className="font-semibold">
              Mega Move India
            </span>
          </h1>

          <p className="mt-14 text-[15px] leading-2.2 text-gray-700">
          With a legacy in heavy haulage and over-dimensional cargo
          transportation dating back to 2005, Mega Move India was
          incorporated in 2025 to expand its expertise into global
          project logistics, freight forwarding, heavy lift
          transportation and equipment rentals.
          </p>

          <p className="mt-14 text-[15px] leading-2.2 text-gray-700">
          Driven by specialized equipment, experienced personnel and
          a commitment to operational excellence, we provide
          end-to-end logistics solutions for the world's most
          challenging cargo movements.
          </p>

        </div>

        {/* Right Side */}
        <div className="w-[60%] flex gap-[4px] h-[500px]">

          {cards.map((card) => (
            <a
              key={card.title}
              href="#"
              className="
                group
                relative
                flex-1
                overflow-hidden
                transition-all
                duration-700
                hover:flex-[2]
              "
            >
              <img
                src={card.image}
                alt={card.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  grayscale
                  group-hover:grayscale-0
                  transition-all
                  duration-700
                "
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-10 left-6 text-white">
                <h2 className="text-[22px] font-bold leading-tight">
                  {card.title}
                </h2>

                <p className="mt-3 text-sm tracking-wider">
                  {card.subtitle}
                </p>
              </div>
            </a>
          ))}

        </div>
      </section>
  <>
    <div
  className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-700 ${
    menuOpen
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none"
  }`}
  onClick={() => setMenuOpen(false)}
/>

    <div
  className={`fixed top-0 right-0 h-full w-[420px] bg-gray-700 text-white z-50 p-12 overflow-y-auto transition-transform duration-700 ease-out ${
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

      <h2 className="text-3xl font-semibold mb-10">
        SERVICES
      </h2>

      <div className="space-y-5 text-lg text-gray-200">
          <p className="cursor-pointer px-6 py-4 hover:bg-white hover:text-gray-700 transition-all duration-300">
          Air Freight
        </p>
          <p className="cursor-pointer px-6 py-4 hover:bg-white hover:text-gray-700 transition-all duration-300">
        Overland Transport
        </p>
          <p className="cursor-pointer px-6 py-4 hover:bg-white hover:text-gray-700 transition-all duration-300">
        Project Forwarding Services
        </p>
          <p className="cursor-pointer px-6 py-4 hover:bg-white hover:text-gray-700 transition-all duration-300">
        Logistics & Supply Chain Solutions
        </p>
          <p className="cursor-pointer px-6 py-4 hover:bg-white hover:text-gray-700 transition-all duration-300">
        Factory Relocation
        </p>
          <p className="cursor-pointer px-6 py-4 hover:bg-white hover:text-gray-700 transition-all duration-300">
        Transshipment
        </p>
          <p className="cursor-pointer px-6 py-4 hover:bg-white hover:text-gray-700 transition-all duration-300">
        Transport Engineering Capabilities
        </p>
          <p className="cursor-pointer px-6 py-4 hover:bg-white hover:text-gray-700 transition-all duration-300">
        Tailored Ocean Freight Solutions
        </p>

        <hr className="my-8 border-gray-500" />

        <p>Project Logistics</p>
        <p>Heavy Lift & ODC</p>
        <p>Rentals & Warehousing</p>
        <p>Fleet</p>
        <p>Case Studies</p>
        <p>Contact Us</p>
      </div>

    </div>
  </>
      <footer className="absolute bottom-0 left-0 right-0 border-t border-gray-300 bg-[#f7f7f7] px-16 py-2 text-sm text-gray-600 flex justify-between">
  <div>
    © Copyright 2026, Mega Move India Private Limited. All rights reserved.
  </div>

  <div className="space-x-4">
    <a href="#">Site Map</a>
    <span>|</span>
    <a href="#">Terms & Conditions</a>
    <span>|</span>
    <a href="#">Privacy Policy</a>
  </div>
</footer>
    </main>
  );
}
