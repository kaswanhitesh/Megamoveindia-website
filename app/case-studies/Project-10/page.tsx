import { pageMetadata } from "@/app/lib/seo";
import Hero from './Hero';
import Gallery from './Gallery';
import OtherProjectsCarousel from '@/app/components/OtherProjectsCarousel';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = pageMetadata({
  path: "/case-studies/Project-10/",
  title: "Tunnel Boring Machine Transport for Kanpur Metro: Kandla to Kanpur | Mega Move India",
  description: "Two tunnel boring machines for UPMRC's Kanpur Metro, moved from Kandla Port to the Rawatpur site in Kanpur on 13 Super ODC vehicles: 400 MT, underhook loading.",
  image: "/images/Casestudies/Project-10/Project10_HeroImage.webp",
});



export default function KanpurMetroTbmProject() {
  return (
    <div className="relative w-full bg-transparent overflow-x-clip">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 w-full h-full z-[-10] pointer-events-none">
        <Image
          src="/images/Casestudies/Project-10/Project10_HeroImage.webp"
          alt="Tunnel boring machine section lifted from the vessel at Kandla Port at night"
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
            In August 2024 our team moved two Tunnel Boring Machines (TBMs) for <strong>Uttar Pradesh Metro Rail Corporation
            (UPMRC)</strong>, from Kandla Port in Gujarat to the Rawatpur project site of the Kanpur Metro. The TBM sections
            and back-up equipment, about 400 tonnes in all, were discharged from the vessel by underhook and loaded directly
            onto a fleet of 13 Super ODC vehicles: 40ft low-bed and semi-low-bed trailers and 40ft and 50ft hydraulic beam
            trailers. The project was executed by Priya Roadlines, the transport company that has since become Mega Move
            India Private Limited.
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
                Uttar Pradesh Metro Rail Corporation (UPMRC)
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Industry Sector
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Infrastructure, Metro Rail
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Cargo Description
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                2 Tunnel Boring Machines and Components
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Total Weight
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                400 MT
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Route
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Kandla Port, Gujarat → Rawatpur Site, Kanpur
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Fleet Deployed
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                13 Super ODC Vehicles
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Vehicle Types
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                40ft LBT, 40ft SLBT, 40ft HBT & 50ft HBT
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Loading Method
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Underhook, ship to trailer
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Completed
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                August 2024
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
              A tunnel boring machine travels as a set of oversized parts: the cutter head, shield sections, drive units and
              a long chain of back-up gantries. Each part has its own dimensions and weight, so every piece was matched to the
              right trailer: low beds for the tallest shield sections, hydraulic beam trailers for the heaviest items. Loading
              by underhook straight from the ship&rsquo;s gear avoided double handling at the port, but it meant every trailer
              had to be in position at the right moment, often through the night. On the road, the 13-vehicle convoy crossed
              several states, so route surveys, state ODC permits and escort planning had to line up before the first truck
              left Kandla.
            </p>
          </section>

          {/* Project Outcome */}
          <section className="mb-10 lg:mb-12 border-t pt-10 lg:pt-12">
            <h2 className="text-3xl lg:text-5xl font-light text-zinc-900 text-center mb-6 lg:mb-8">
              Project Outcome
            </h2>
            <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
              Both TBMs reached the Rawatpur project site safely, ready for assembly and tunnelling on the Kanpur Metro
              underground section. UPMRC issued a letter on 30 August 2024 confirming the movement of the two machines from
              Kandla Port to Rawatpur. The project shows our ability to run a large multi-vehicle Super ODC convoy for a
              government metro rail client.
            </p>
          </section>

          {/* Other Projects Carousel */}
          <OtherProjectsCarousel excludeSlug="Project-10" />

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
