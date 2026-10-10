import { pageMetadata } from "@/app/lib/seo";
import Hero from './Hero';
import Gallery from './Gallery';
import OtherProjectsCarousel from '@/app/components/OtherProjectsCarousel';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = pageMetadata({
  path: "/case-studies/Project-9/",
  title: "Machinery Export on 8 x 20' Flat Racks, JNPT to Europe | Mega Move India",
  description: "Export of new industrial machinery on eight 20ft flat rack containers from JNPT to Europe: ex-works pickup, in-house transport, customs clearance, lashing and ocean freight by Mega Move India.",
  image: "/images/Casestudies/Project-9/Project9_HeroImage.webp",
});



export default function FlatRackMachineryExportProject() {
  return (
    <div className="relative w-full bg-transparent overflow-x-clip">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 w-full h-full z-[-10] pointer-events-none">
        <Image
          src="/images/Casestudies/Project-9/Project9_HeroImage.webp"
          alt="Crated machinery on a trailer at the port for flat rack export"
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
            Mega Move India handled the export of new industrial machinery from India to Europe for one of our most
            valued clients. The machines were crated, collected ex-works, moved to JNPT on our own specialised vehicles,
            cleared through export customs, lashed and chocked onto eight 20ft flat rack containers, and shipped by sea to
            Europe. One team managed the whole chain, from the factory gate to the vessel.
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
                Industry Sector
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Industrial Machinery Manufacturing
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Cargo Description
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                New Industrial Machinery (crated)
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
                Origin & Destination
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                JNPT, India → Europe
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Port of Loading
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                JNPT (Nhava Sheva)
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Project Scope
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Ex-Works Handling, Inland Transport, Customs Clearance, Lashing & Choking, Ocean Freight
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
              The crated machines were taller and wider than a standard container allows, so they could not travel in
              closed boxes. Flat racks solved that, but each crate had to be placed, lashed and chocked to hold firm through
              road transport, port handling and a long sea voyage to Europe. With eight units moving together, pickups,
              customs filing and port gate-in had to run to one schedule so the full set made the same vessel. We used our
              own vehicles for the road leg and handled clearance and lashing in-house, which kept every step under our
              direct control.
            </p>
          </section>

          {/* Project Outcome */}
          <section className="mb-10 lg:mb-12 border-t pt-10 lg:pt-12">
            <h2 className="text-3xl lg:text-5xl font-light text-zinc-900 text-center mb-6 lg:mb-8">
              Project Outcome
            </h2>
            <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
              All eight flat racks were loaded, secured and shipped from JNPT to Europe without damage or delay. The client
              had one point of contact from ex-works pickup to ocean freight, and the project shows how Mega Move India
              combines in-house transport with ODC, breakbulk and flat rack export logistics.
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
