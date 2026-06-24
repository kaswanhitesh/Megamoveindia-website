import Hero from './Hero';
import Gallery from './Gallery';
import OtherProjectsCarousel from '@/app/components/OtherProjectsCarousel';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'National Defence Project | Mega Move India',
  description:
    'Mega Move India\'s successful execution of a National Defence Project involving specialized transportation, heavy lift handling, route surveys and end-to-end project logistics.',
};

const PROJECT_DETAILS = [
  {
    title: 'Industry Sector',
    value: 'Defence Logistics & Military Transportation',
  },
  {
    title: 'Cargo Description',
    value: 'BMP-II Armoured Vehicles & Defence Equipment',
  },
  {
    title: 'Origin & Destination',
    value: 'Manufacturing Facility, India → Nyoma, Ladakh',
  },
  {
    title: 'Distance Covered',
    value: '3,700 KM',
  },
  {
    title: 'Project Scope',
    value: 'Project Logistics, ODC Transportation, Route Survey, Permits & Escorts',
  },
  {
    title: 'Equipment Deployed',
    value: 'Hydraulic Modular Trailers, Prime Movers & Escort Vehicles',
  },
  {
    title: 'Transit Time',
    value: '21 Days',
  },
  {
    title: 'Key Achievement',
    value: 'National Benchmark for Fastest Defence ODC Delivery',
  },
];



export default function NationalDefenceProject() {
  return (
    <div className="relative w-full bg-transparent overflow-x-clip">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 w-full h-full z-[-10] pointer-events-none">
        <Image
          src="/images/Casestudies/DefenceCargo/DefenceCargoHeroImage.webp"
          alt="National Defence Project Background"
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
            Mega Move India successfully executed a strategic National Defence logistics project involving the
            transportation of critical defence equipment from the manufacturing facility to Nyoma, Ladakh, near the
            India–China border. Selected from four approved vendors, Mega Move India was awarded the government contract
            based on its proven expertise in heavy-haul and ODC transportation. The project required meticulous planning,
            route surveys, permit management, escort coordination, and specialized transportation solutions. Covering
            approximately 3,700 kilometers, the mission was completed within an exceptional timeline of 21 days.
          </p>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="relative z-20 bg-[#f7f7f7] py-10 lg:py-14 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-light text-zinc-900 text-center mb-6 lg:mb-8">
            Project Details
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-12 gap-x-4 lg:gap-x-10">
            {PROJECT_DETAILS.map((item, idx) => (
              <div key={idx} className="text-center">
                <h3 className="font-bold text-[16px] lg:text-[22px] text-zinc-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Sticky horizontal scroll */}
      <Gallery />

      {/* Project Outcome */}
      <section className="relative z-20 bg-white py-10 lg:py-14 shadow-[0_-15px_40px_rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-light text-zinc-900 text-center mb-6 lg:mb-8">
            Project Outcome
          </h2>
          <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
            Mega Move India successfully delivered critical defence cargo to Nyoma, Ladakh, within the planned 21-day
            schedule despite challenging high-altitude terrain, harsh weather, limited infrastructure, and extreme
            geographical constraints. The project established a national benchmark as the fastest defence ODC delivery
            over such a distance, demonstrating our operational excellence, safety standards, and logistical expertise.
            This success solidified our position as a trusted partner for government defence logistics projects and
            showcased our capability to handle critical national infrastructure assignments.
          </p>

          {/* Other Projects Carousel */}
          <OtherProjectsCarousel excludeSlug="national-defence-project" />

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
      </section>
    </div>
  );
}
