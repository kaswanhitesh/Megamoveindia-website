import Hero from './Hero';
import Gallery from './Gallery';
import OtherProjectsCarousel from '@/app/components/OtherProjectsCarousel';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "70MT Heat Condenser Export | Mega Move India",
  description:
    "Successful breakbulk export shipment involving transportation and ocean freight movement of a 70MT Heat Condenser from Chennai, India to Santos, Brazil.",
};



export default function HeatCondenserExportProject() {
  return (
    <div className="relative w-full bg-transparent overflow-x-clip">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 w-full h-full z-[-10] pointer-events-none">
        <Image
          src="/images/Casestudies/Project-4/Project4_HeroImage.webp"
          alt="BREAKBULK EXPORT Background"
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
            Mega Move India successfully executed the export of a Heat Condenser and associated accessories from Chennai, India, to Santos, Brazil, under Ex-Works (EXW) terms. The project involved specialized in-land transportation from the manufacturing facility to Chennai Port, export customs clearance, breakbulk cargo handling, and ocean freight coordination. Our team meticulously managed every stage of the logistics chain, ensuring secure transportation, regulatory compliance, and timely vessel loading, delivering a seamless end-to-end project cargo solution for the client.
          </p>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="relative z-20 bg-[#f7f7f7] py-10 lg:py-14 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-light text-zinc-900 text-center mb-6 lg:mb-8">
            Project Details
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-12 gap-x-4 lg:gap-x-10 max-w-7xl mx-auto">
            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Industry Sector
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Industrial Manufacturing
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Cargo Description
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Factory Machinery & Production Equipment
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Origin & Destination
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Ex-Germany → Navi Mumbai, India
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Distance Covered
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                7,000+ KM
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Project Scope
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Dismantling, Loading-Unloading, Tranportation, Packaging, Freight Forwarding & Delivery
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Equipment Deployed
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Forklifts, Cranes & Specialized Transport Equipment
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Transit Time
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                As Per Project Schedule
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">
                Key Achievement
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Successful International Factory Relocation
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
              The project involved the transportation of a Heat Condenser and associated accessories from the manufacturer’s facility in Bangalore to Santos, Brazil, via Chennai Port. Key challenges included the excessive cargo height, uneven weight distribution, and ensuring safe movement through multiple jurisdictions. Mega Move India conducted a thorough route survey to identify and mitigate transportation constraints, enabling smooth execution of the in-land haulage. Through meticulous planning, specialized handling, export customs clearance, breakbulk cargo coordination, and close stakeholder collaboration, the project was executed safely, efficiently, and within the planned schedule.
            </p>
          </section>

          {/* Project Outcome */}
          <section className="mb-10 lg:mb-12 border-t pt-10 lg:pt-12">
            <h2 className="text-3xl lg:text-5xl font-light text-zinc-900 text-center mb-6 lg:mb-8">
              Project Outcome
            </h2>
            <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
              Mega Move India successfully completed the factory relocation project from Germany to India, ensuring the safe transportation and delivery of all machinery and production equipment. Through coordinated logistics planning, export packing, international freight management and destination handling, the project was executed efficiently and without cargo damage. The successful completion of the relocation enabled the client to establish operations at the new facility while minimizing downtime and operational disruption.
            </p>
          </section>

          {/* Other Projects Carousel */}
          <OtherProjectsCarousel excludeSlug="Project-4" />

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
