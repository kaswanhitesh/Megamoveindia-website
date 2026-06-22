import type { Metadata } from "next";
import Gallery from "./Gallery";
import Image from "next/image";

export const metadata: Metadata = {
  title: "India International Cargo Show | Mega Move India",
  description:
    "Mega Move India will be participating in the India International Cargo Show (IICS) 2025, showcasing expertise in project cargo logistics, heavy lift transportation, breakbulk operations, freight forwarding, and engineered logistics solutions.",
};

export default function IICSPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="relative h-[280px] lg:h-[500px]">
        <Image
          src="/images/Companynews/IICS/IICS_GalleryHeroimage.png"
          alt="India International Cargo Show"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl lg:text-6xl font-light tracking-[2px] lg:tracking-[6px] text-center px-4">
            INDIA INTERNATIONAL CARGO SHOW
          </h1>
        </div>
      </section>

      {/* Event Overview */}

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-8 lg:mb-12">
          Event Announcement
        </h2>

        <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
          25-word summary:

Mega Move India will exhibit at IICS 2025, showcasing project logistics, heavy lift, breakbulk, freight forwarding, and engineered cargo solutions for complex transportation projects.
        </p>

      </section>

      {/* Event Details */}

      <section className="bg-[#f7f7f7] py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-8 lg:mb-12">
            Event Details
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-12 gap-x-4 lg:gap-x-10 max-w-7xl mx-auto">

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Exhibition
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                India International Cargo Show (IICS) 2025
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Industry Focus
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Logistics, Project Cargo, Breakbulk & Heavy Lift
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Dates
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                10–12 December 2025
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Stall Number
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                N-21
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Venue
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Jio World Convention Center
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Location
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Bandra Kurla Complex, Mumbai, India
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery */}

      <Gallery />

      {/* Closing Message */}

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20">

        <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-8 lg:mb-12">
          We Look Forward to Meeting You
        </h2>

        <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
          We look forward to connecting with industry leaders, partners,
          customers, and logistics professionals as we continue delivering
          precision, reliability, safety, and excellence in every shipment.
        </p>

        <div className="mt-12 text-center">
          <p className="text-2xl lg:text-4xl text-[#173f74] font-light italic">
            Moving the Immovable. Moving the Impossible.
          </p>
        </div>

        <div className="mt-12 border-t pt-8 text-center">

          <h3 className="text-xl lg:text-2xl font-semibold text-[#173f74] mb-3">
            Schedule a Meeting With Our Team
          </h3>

          <p className="text-gray-600 mb-4">
            Connect with Mega Move India during IICS 2025 to discuss your
            project logistics, breakbulk, heavy lift, freight forwarding and
            transportation requirements.
          </p>

          <a
            href="mailto:projects@megamoveindia.com"
            className="text-[#173f74] text-lg lg:text-2xl font-semibold hover:underline break-all"
          >
            projects@megamoveindia.com
          </a>

        </div>

      </section>

    </main>
  );
}