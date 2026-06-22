import Hero from "./Hero";
import type { Metadata } from "next";
import Gallery from "./Gallery";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "National Defence Project | Mega Move India",
  description:
    "Mega Move India's successful execution of a National Defence Project involving specialized transportation, heavy lift handling, route surveys and end-to-end project logistics.",
};

const otherProjects = [
  {
  slug: "Project-2",
  category: "PROJECT CARGO IMPORT",
  title: "Industrial Machinery",
  image: "/images/225MTUsedMachineryImportCardImage.jpeg",
},

{
  slug: "Project-3",
  category: "FACTORY RELOCATION",
  title: "Manufacturing Plant Transfer",
  image: "/images/FactoryRelocationGermanyToIndiaCardImage.jpeg",
},

{
  slug: "Project-4",
  category: "BREAKBULK EXPORTS",
  title: "Heat Condenser Shipment",
  image: "/images/Casestudies/Project-4/Project4_HeroImage.webp",
},

{
  slug: "Project-5",
  category: "HEAVY HAUL TRANSPORTATION",
  title: "2x100MT Heat Exchanger",
  image: "/images/Casestudies/Project-5/Project5_Cardheroimage.webp",
},

{
  slug: "Project-6",
  category: "PROJECT CARGO EXPORT",
  title: "Chemical Storage Tanks",
  image: "/images/Casestudies/Project-6/Project6_Gallery10.webp",
},

{
  slug: "Project-7",
  category: "SPECIALIZED EQUIPMENT IMPORT",
  title: "X-Ray Systems",
  image: "/images/Casestudies/Project-7/Project7_Gallery3.webp",
},

{
  slug: "Project-8",
  category: "HEAVY LIFT EXPORTS",
  title: "EOT Crane Shipment",
  image: "/images/Casestudies/Project-8/Project8_Gallery1.webp",
},
];
export default function NationalDefenceProject() {
  return (
    <main>

      <Hero />

       <section
  className="
    relative
    z-10
    bg-white
    mt-[85vh]
    rounded-t-[50px]
    py-16 lg:py-24
  "
>

  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-8 lg:mb-12">
      Project Overview
    </h2>

    <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
      Mega Move India successfully executed a strategic National Defence logistics project involving the transportation of critical defence equipment from the manufacturing facility to Nyoma, Ladakh, near the India–China border. Selected from four approved vendors, Mega Move India was awarded the government contract based on its proven expertise in heavy-haul and over-dimensional cargo (ODC) transportation. The project required meticulous planning, route surveys, permit management, escort coordination, and specialized transportation solutions. Covering approximately 3,700 kilometers, the mission was completed within an exceptional timeline of 21 days.
    </p>

  </div>

</section>
      
      {/* Project Details */}

      <section className="relative z-10 bg-[#f7f7f7] py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-8 lg:mb-12">
            Project Details
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-12 gap-x-4 lg:gap-x-10 max-w-7xl mx-auto">

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Industry Sector
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Defence Logistics & Military Transportation
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Cargo Description
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                BMP-II Armoured Vehicles & Defence Equipment
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Origin & Destination
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Manufacturing Facility, India → Nyoma, Ladakh
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Distance Covered
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                3,700 KM
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Project Scope
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Project Logistics, ODC Transportation, Route Survey, Permits &
                Escorts
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Equipment Deployed
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Hydraulic Modular Trailers, Prime Movers & Escort Vehicles
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Transit Time
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                21 Days
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Key Achievement
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                National Benchmark for Fastest Defence ODC Delivery
              </p>
            </div>

          </div>
        </div>
      </section>

      <Gallery />

      {/* Results */}

      <section className="relative z-10 bg-white w-full py-12 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-8 lg:mb-12">
          Project Outcome
        </h2>

        <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
          Mega Move India successfully delivered critical defence cargo to Nyoma, Ladakh, within the planned 21-day schedule despite challenging high-altitude terrain, harsh weather, limited infrastructure, and stringent security requirements. During transit, a heavy-haul vehicle experienced a mechanical breakdown; however, through close coordination with the Indian Army, the BMP-II armoured vehicle was safely secured at a military facility in Kargil and reloaded after repairs. The project was completed without incident, demonstrating exceptional operational resilience and execution capability.
        </p>

        {/* OTHER PROJECTS */}

<section className="mt-20">

  <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-4">
    Our Other Projects
  </h2>

  <p className="text-center text-gray-600 mb-12">
    Explore more successful project logistics assignments executed by Mega Move India.
  </p>

  <div className="overflow-hidden">

    <div className="flex gap-8 animate-projects-slider w-max">

      {[...otherProjects, ...otherProjects].map((project, index) => (

        <Link
          key={index}
          href={`/case-studies/${project.slug}`}
          className="
            w-[320px]
            bg-white
            rounded-xl
            overflow-hidden
            shadow-md
            hover:shadow-xl
            transition-all
            duration-500
            shrink-0
          "
        >

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[220px] object-cover"
          />

          <div className="p-5">

            <h3 className="text-xl text-[#173f74]">
              {project.title}
            </h3>

          </div>

        </Link>

      ))}

    </div>

  </div>

</section>

        <div className="mt-12 border-t pt-8 text-center">

          <h3 className="text-xl lg:text-2xl font-semibold text-[#173f74] mb-3">
            Discuss Your Project Logistics Requirement
          </h3>

          <p className="text-gray-600 mb-4">
            For heavy lift transportation, project logistics, freight forwarding and ODC movements, contact our project team.
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
