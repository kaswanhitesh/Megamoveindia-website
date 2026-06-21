import type { Metadata } from "next";
import Gallery from "./Gallery";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Factory Relocation Germany to India | Mega Move India",
description:
  "Successful factory relocation project involving dismantling, packing, international transportation and delivery of industrial machinery from Germany to Navi Mumbai, India.",
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

export default function FactoryRelocationProject() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="relative h-[280px] lg:h-[500px]">
        <Image
          src="/images/Casestudies/Project-3/Project3_HeroImage.webp"
          alt="Factory Relocation Germany to India"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">

  <h1 className="text-white text-4xl lg:text-7xl font-light tracking-[2px] lg:tracking-[5px]">
    FACTORY RELOCATION
  </h1>

  <div className="w-24 h-[1px] bg-white/70 mx-auto my-4"></div>

  <p className="text-white text-base lg:text-2xl tracking-[4px] uppercase">
    Ex-Germany to India
  </p>

</div>
        </div>
      </section>

      {/* Project Overview */}

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20">
      <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-8 lg:mb-12">
         Project Overview
      </h2>

      <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
        Mega Move India successfully executed a complex factory relocation project involving the dismantling, packing, international transportation and delivery of industrial machinery from Germany to Navi Mumbai, India. The project required detailed planning, export packing, multimodal transportation, customs clearance and coordinated delivery to the client's new facility. Our project team managed every stage of the relocation process, ensuring safe handling of sensitive equipment and timely execution while minimizing disruption to the client's operations.
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
                Industrial Manufacturing
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Cargo Description
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Factory Machinery & Production Equipment
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Origin & Destination
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Ex-Germany → Navi Mumbai, India
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Distance Covered
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                7,000+ KM
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Project Scope
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Dismantling, Loading-Unloading, Tranportation, Packaging, Freight Forwarding & Delivery
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Equipment Deployed
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Forklifts, Cranes & Specialized Transport Equipment
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Transit Time
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                As Per Project Schedule
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Key Achievement
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Successful International Factory Relocation
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
            The project involved coordinating the relocation of multiple industrial machines from an operational facility in Germany to a new manufacturing site in India. Challenges included export packing, handling oversized machinery, international shipping schedules, customs compliance and final positioning at the destination facility. Through detailed planning, close coordination with overseas partners and experienced project management, Mega Move India ensured the safe and efficient relocation of all equipment.
          </p>

        </div>

      </section>

      {/* Results */}

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20">

        <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-8 lg:mb-12">
          Project Outcome
        </h2>

        <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
          Mega Move India successfully completed the factory relocation project from Germany to India, ensuring the safe transportation and delivery of all machinery and production equipment. Through coordinated logistics planning, export packing, international freight management and destination handling, the project was executed efficiently and without cargo damage. The successful completion of the relocation enabled the client to establish operations at the new facility while minimizing downtime and operational disruption.
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
