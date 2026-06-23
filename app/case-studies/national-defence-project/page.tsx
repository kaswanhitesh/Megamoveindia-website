import Hero from './Hero';
import Gallery from './Gallery';
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

const OTHER_PROJECTS = [
  {
    slug: 'Project-2',
    title: 'Industrial Machinery',
    image: '/images/225MTUsedMachineryImportCardImage.jpeg',
  },
  {
    slug: 'Project-3',
    title: 'Manufacturing Plant Transfer',
    image: '/images/FactoryRelocationGermanyToIndiaCardImage.jpeg',
  },
  {
    slug: 'Project-4',
    title: 'Heat Condenser Shipment',
    image: '/images/Casestudies/Project-4/Project4_HeroImage.webp',
  },
  {
    slug: 'Project-5',
    title: '2x100MT Heat Exchanger',
    image: '/images/Casestudies/Project-5/Project5_Cardheroimage.webp',
  },
  {
    slug: 'Project-6',
    title: 'Chemical Storage Tanks',
    image: '/images/Casestudies/Project-6/Project6_Gallery10.webp',
  },
  {
    slug: 'Project-7',
    title: 'X-Ray Systems',
    image: '/images/Casestudies/Project-7/Project7_Gallery3.webp',
  },
  {
    slug: 'Project-8',
    title: 'EOT Crane Shipment',
    image: '/images/Casestudies/Project-8/Project8_Gallery1.webp',
  },
];

export default function NationalDefenceProject() {
  return (
    <main className="relative w-full bg-white overflow-x-hidden">
      {/* Hero - Full viewport with fixed background */}
      <Hero />

      {/* Project Overview - Seamless transition over hero */}
      <section className="relative z-30 bg-white rounded-t-[50px] py-16 lg:py-24" style={{ marginTop: '-50px' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-8 lg:mb-12">
            Project Overview
          </h2>
          <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
            Mega Move India successfully executed a strategic National Defence logistics project involving the
            transportation of critical defence equipment from the manufacturing facility to Nyoma, Ladakh, near the
            India–China border. Selected from four approved vendors, Mega Move India was awarded the government contract
            based on its proven expertise in heavy-haul and over-dimensional cargo (ODC) transportation. The project
            required meticulous planning, route surveys, permit management, escort coordination, and specialized
            transportation solutions. Covering approximately 3,700 kilometers, the mission was completed within an
            exceptional timeline of 21 days.
          </p>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="relative z-30 bg-[#f7f7f7] py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-8 lg:mb-12">
            Project Details
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-12 gap-x-4 lg:gap-x-10">
            {PROJECT_DETAILS.map((item, idx) => (
              <div key={idx} className="text-center">
                <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Sticky horizontal scroll */}
      <Gallery />

      {/* Project Outcome */}
      <section className="relative z-30 bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-8 lg:mb-12">
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
          <section className="mt-20">
            <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-4">Our Other Projects</h2>
            <p className="text-center text-gray-600 mb-12">
              Explore more successful project logistics assignments executed by Mega Move India.
            </p>
            <div className="overflow-hidden">
              <div className="flex gap-8 animate-projects-slider w-max">
                {[...OTHER_PROJECTS, ...OTHER_PROJECTS].map((project, idx) => (
                  <Link
                    key={idx}
                    href={`/case-studies/${project.slug}`}
                    className="w-[320px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 shrink-0"
                  >
                    <div className="relative h-[220px] w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="320px"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl text-[#173f74]">{project.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-12 border-t pt-8 text-center">
            <h3 className="text-xl lg:text-2xl font-semibold text-[#173f74] mb-3">
              Discuss Your Project Logistics Requirement
            </h3>
            <p className="text-gray-600 mb-4">
              For heavy lift transportation, project logistics, freight forwarding and ODC movements, contact our project
              team.
            </p>
            <a
              href="mailto:projects@megamoveindia.com"
              className="text-[#173f74] text-lg lg:text-2xl font-semibold hover:underline break-all"
            >
              projects@megamoveindia.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
