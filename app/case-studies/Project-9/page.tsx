import { pageMetadata } from "@/app/lib/seo";
import Hero from './Hero';
import Gallery from './Gallery';
import OtherProjectsCarousel from '@/app/components/OtherProjectsCarousel';
import Image from 'next/image';
import Link from 'next/link';

import PageGlow from "@/app/components/PageGlow";
export const metadata = pageMetadata({
  path: "/case-studies/Project-9/",
  title: "Tata Power Machinery Import: 8 x 32 MT Flat Racks, Hamburg to Bangalore | Mega Move India",
  description: "Eight 32 MT packages of new machinery for Tata Power, shipped on 20ft flat racks from Hamburg to JNPT, cleared and delivered to Bangalore on our own vehicles in 42 days.",
  image: "/images/Casestudies/Project-9/Project9_HeroImage.webp",
});



export default function FlatRackMachineryImportProject() {
  return (
    <div className="isolate relative w-full bg-transparent overflow-x-clip">
      <PageGlow />
      {/* Fixed Background Image */}
      <div className="fixed inset-0 w-full h-full z-[-10] pointer-events-none">
        <Image
          src="/images/Casestudies/Project-9/Project9_HeroImage.webp"
          alt="32 MT crated machinery for Tata Power loaded on a trailer at JNPT"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Hero - Full viewport with fixed background */}
      <Hero />

      {/* Project Overview - Seamless transition over hero */}
      <section className="relative z-20 bg-white rounded-t-[40px] py-12 lg:py-16 shadow-[0_-15px_40px_rgba(0,0,0,0.06)]" style={{ marginTop: '-40px' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-light text-zinc-900 text-center mb-6 lg:mb-8">
            Project Overview
          </h2>
          <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
            Mega Move India handled the import of new industrial machinery for <strong>Tata Power</strong>, from Hamburg,
            Germany to Bangalore, India. The consignment was eight crated packages of 32 tonnes each, 256 tonnes in all,
            shipped on eight 20ft flat rack containers. We took charge from ex-works handling and ocean freight out of
            Hamburg, through import customs clearance at JNPT, to lashing and chocking each crate onto our own specialised
            vehicles for the road move to Bangalore. The whole project was completed in 42 days, with one team managing
            every step from the supplier in Germany to the client&rsquo;s site.
          </p>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="relative z-20 bg-[#f7f7f7] py-10 lg:py-14 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-light text-zinc-900 text-center mb-6 lg:mb-8">
            Project Details
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-12 gap-x-4 lg:gap-x-10 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Client
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Tata Power
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Industry Sector
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Power & Energy
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Cargo Description
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                New Industrial Machinery (8 crated packages)
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Cargo Weight
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                32 MT per package (256 MT total)
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Route
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Hamburg → JNPT → Bangalore
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Equipment
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                8 x 20ft Flat Rack Containers
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Port of Discharge
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                JNPT (Nhava Sheva)
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Project Duration
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                42 Days
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Project Scope
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Ex-Works Handling, Ocean Freight, Import Customs Clearance, Lashing & Choking, Delivery on Own Vehicles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Sticky horizontal scroll */}
      <Gallery />

      {/* Project Outcome and Details Wrapper */}
      <div className="relative z-20 bg-white py-10 lg:py-14 shadow-[0_-15px_40px_rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Challenges & Solutions */}
          <section className="mb-10 lg:mb-12">
            <h2 className="text-3xl lg:text-5xl font-light text-zinc-900 text-center mb-6 lg:mb-8">
              Challenges & Solutions
            </h2>
            <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
              Each 32-tonne crate was taller and wider than a standard container allows, so the machines travelled on
              flat racks, exposed to weather and sea motion all the way from Hamburg. At JNPT all eight packages had to be
              cleared through import customs together and moved out of the port quickly to avoid storage charges. Each crate
              was then transferred from its flat rack to a trailer, lashed and chocked again, and driven around 1,000 km to
              Bangalore as an oversized load, with routes planned around bridges, ghats and city entry restrictions. Using
              our own vehicles and handling clearance and lashing in-house kept every step under our direct control.
            </p>
          </section>

          {/* Project Outcome */}
          <section className="mb-10 lg:mb-12 border-t pt-10 lg:pt-12">
            <h2 className="text-3xl lg:text-5xl font-light text-zinc-900 text-center mb-6 lg:mb-8">
              Project Outcome
            </h2>
            <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
              All eight packages, 256 tonnes in total, reached Tata Power&rsquo;s site in Bangalore without damage, and the
              full project from Hamburg to site was completed in 42 days. Tata Power had one point of contact throughout,
              and the project shows how Mega Move India combines ocean freight, customs clearance and in-house ODC transport
              for power-sector machinery imports.
            </p>
          </section>

          {/* Other Projects Carousel */}
          <OtherProjectsCarousel excludeSlug="Project-9" />

          {/* CTA */}
          <div className="mt-8 border-t pt-6 text-center">
            <h3 className="text-xl lg:text-2xl font-semibold text-zinc-900 mb-3">
              Discuss Your Project Logistics Requirement
            </h3>
            <p className="text-gray-600 mb-4">
              For heavy lift transportation, project logistics, freight forwarding and ODC movements, contact our project
              team.
            </p>
            <a
              href="mailto:projects@megamoveindia.com"
              className="text-zinc-900 text-lg lg:text-2xl font-semibold hover:underline break-all"
            >
              projects@megamoveindia.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
