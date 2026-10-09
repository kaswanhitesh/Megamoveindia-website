import { pageMetadata } from "@/app/lib/seo";
import Hero from './Hero';
import Gallery from './Gallery';
import OtherProjectsCarousel from '@/app/components/OtherProjectsCarousel';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = pageMetadata({
  path: "/case-studies/Project-7/",
  title: "6 x 42 MT X-Ray Systems from Germany to ONGC Barmer | Mega Move India",
  description: "DAP import of six used 42 MT X-ray systems from Germany via Mumbai Port, with customs clearance and heavy-haul delivery to ONGC Barmer in 49 days.",
});



export default function XRaySystemsImportProject() {
  return (
    <div className="relative w-full bg-transparent overflow-x-clip">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 w-full h-full z-[-10] pointer-events-none">
        <Image
          src="/images/Casestudies/Project-7/Project7_Gallery2.webp"
          alt="Used X-ray systems on trailers for ONGC Barmer"
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
            Mega Move India handled the import of six used X-ray systems from Germany for ONGC at Barmer, Rajasthan. Each
            machine weighed 42 tonnes, making 252 tonnes in all. The shipment moved on DAP (Delivered at Place) terms
            through Mumbai Port, so Mega Move India was responsible for the cargo from Germany all the way to the named
            delivery point in Barmer: ocean freight, import customs clearance at Mumbai, the heavy inland move and final
            delivery to ONGC. The project was completed door to door in 49 days.
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
                ONGC (Oil and Natural Gas Corporation)
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Industry Sector
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Oil & Gas
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Cargo Description
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                6 Used X-Ray Systems
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Cargo Weight
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                42 MT per machine (252 MT total)
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Origin & Destination
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Germany → ONGC, Barmer, Rajasthan
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Port of Entry
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Mumbai Port
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Incoterm
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                DAP (Delivered at Place), Barmer
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Transit Time
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                49 Days
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Project Scope
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Ocean Freight, Customs Clearance, Inland Heavy Transport & Delivery
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
              Under DAP terms the responsibility for the cargo stays with the shipper until it reaches the named place, so
              any delay or damage on the way to Barmer was ours to prevent. Six 42-tonne machines needed heavy-duty trailers
              and careful lashing. As used equipment they came without original factory packing, so each unit had to be
              secured for sea and road transit as it was. After clearing import customs at Mumbai Port, the convoy had a long
              inland haul to Barmer in the desert of western Rajasthan. Our team planned every handover, from Germany to
              Mumbai and onward to site, so the machines never sat waiting between legs.
            </p>
          </section>

          {/* Project Outcome */}
          <section className="mb-10 lg:mb-12 border-t pt-10 lg:pt-12">
            <h2 className="text-3xl lg:text-5xl font-light text-zinc-900 text-center mb-6 lg:mb-8">
              Project Outcome
            </h2>
            <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
              All six X-ray systems, 252 tonnes in total, were delivered safely to ONGC in Barmer within 49 days under the
              agreed DAP terms. ONGC dealt with a single point of contact for the whole move: pickup in Germany, ocean
              freight, customs clearance at Mumbai Port and heavy-haul delivery to site in Rajasthan.
            </p>
          </section>

          {/* Other Projects Carousel */}
          <OtherProjectsCarousel excludeSlug="Project-7" />

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
