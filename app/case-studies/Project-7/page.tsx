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
    title: "225MT Used Machinery Import",
    image: "/images/Casestudies/225MT/225MTHeroImage.jpg",
    link: "/case-studies/225mt-used-machinery-import",
  },

  {
    title: "Factory Relocation",
    image: "/images/Casestudies/FactoryRelocation/FactoryRelocationHeroImage.jpg",
    link: "/case-studies/factory-relocation-germany-to-india",
  },

  {
    title: "70MT Heat Condenser Export",
    image: "/images/Casestudies/HeatCondenser/HeatCondenserHeroImage.jpg",
    link: "/case-studies/70mt-heat-condenser-export",
  },

  {
    title: "100MT Heat Exchanger",
    image: "/images/Casestudies/HeatExchanger/HeatExchangerHeroImage.jpg",
    link: "/case-studies/100mt-heat-exchanger",
  },
];

export default function NationalDefenceProject() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="relative h-[280px] lg:h-[500px]">
        <Image
          src="/images/Casestudies/Project-7/Project7_Gallery2.webp"
          alt="National Defence Project"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl lg:text-6xl font-light tracking-[2px] lg:tracking-[6px] text-center px-4">
            NATIONAL DEFENCE PROJECT
          </h1>
        </div>
      </section>

      {/* Project Overview */}

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-8 lg:mb-12">
          Project Overview
        </h2>

        <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
          Mega Move India successfully executed a strategic National Defence logistics project involving the transportation of critical defence equipment from the manufacturing facility to Nyoma, Ladakh, near the India–China border. Selected from four approved vendors, Mega Move India was awarded the government contract based on its proven expertise in heavy-haul and over-dimensional cargo (ODC) transportation. The project required meticulous planning, route surveys, permit management, escort coordination, and specialized transportation solutions. Covering approximately 3,700 kilometers, the mission was completed within an exceptional timeline of 21 days, establishing a national benchmark for the fastest delivery of defence ODC cargo over such a distance.
        </p>
      </section>

      {/* Project Details */}

      <section className="bg-[#f7f7f7] py-12 lg:py-20">
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

      {/* Challenges */}

      <section className="bg-[#f7f7f7] py-12 lg:py-20">

        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-8 lg:mb-12">
            Challenges & Solutions
          </h2>

          <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
            The project presented extraordinary operational challenges, including the transportation of critical defence cargo through remote high-altitude terrain with limited road infrastructure en route to Nyoma, Ladakh. Amid heightened security sensitivities along strategic border regions, convoy safety remained paramount. Mega Move India's Managing Director personally accompanied the movement alongside Indian Army escort vehicles, ensuring continuous coordination and risk management. Despite harsh weather, low oxygen levels, difficult terrain, and complex convoy logistics involving multiple heavy-haul vehicles, the team successfully maintained operational integrity and achieved timely, safe delivery through meticulous planning, military coordination, and disciplined execution.
          </p>

        </div>

      </section>

      {/* Results */}

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20">

        <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-8 lg:mb-12">
          Project Outcome
        </h2>

        <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
          Despite the extreme operating conditions and logistical complexities, the project was completed successfully within the planned 21-day timeline. During transit, one of the heavy-haul vehicles experienced a mechanical breakdown in a remote high-altitude region. Through close coordination with the Indian Army, the BMP-II armoured vehicle was safely transferred to an Army transport platform and secured at a military facility in Kargil, ensuring zero risk to the equipment. Following repairs, Mega Move India reloaded the cargo and completed the final delivery to Nyoma, Ladakh, without incident, reinforcing its capability in executing mission-critical defence logistics under demanding conditions.
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
          href={project.link}
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
