import type { Metadata } from "next";
import Gallery from "./Gallery";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Heat Exchanger | Mega Move India",
  description:
    "Successful breakbulk export shipment involving transportation and ocean freight movement of a 70MT Heat Condenser from Chennai, India to Santos, Brazil.",
};

const otherProjects = [
  {
    title: "225MT Used Machinery Import",
    image: "/images/Casestudies/Project-2/Project2_Gallery1.webp",
    link: "/case-studies/Project-2",
  },

  {
    title: "Factory Relocation",
    image: "/images/Casestudies/Project-3/Project3_Gallery1.webp",
    link: "/case-studies/Project-3",
  },

  {
    title: "70MT Heat Condenser Export",
    image: "/images/Casestudies/Project-4/Project4_Gallery2.webp",
    link: "/case-studies/Project-4",
  },

  {
    title: "100MT Heat Exchanger",
    image: "/images/Casestudies/Project-5/Project5_Gallery2.webp",
    link: "/case-studies/Project-5",
  },
];

export default function HeatCondenserExportProject() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="relative h-[280px] lg:h-[500px]">
        <Image
          src="/images/Casestudies/Project-5/Project5_Heroimage.webp"
          alt="ODC In-Land Transportation Heat Exchanger & Accessories"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">

  <h1 className="text-white text-4xl lg:text-7xl font-light tracking-[2px] lg:tracking-[5px]">
  ODC IN-LAND TRANSPORTATION
</h1>

<div className="w-24 h-[1px] bg-white/70 mx-auto my-4"></div>

<p className="text-white text-base lg:text-2xl tracking-[4px] uppercase">
  Heat Exchanger & Accessories
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
        Mega Move India successfully transported 2 x 100 MT Heat Exchangers and accessories for Godrej from Mumbai to IOCL Panipat, delivering specialized heavy haulage, route engineering, permissions, escort arrangements, and safe project cargo execution.
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
                Heat Exchanger & Accessories
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Origin & Destination
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Ex-Mumbai → IOCL, Panipat
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Distance Covered
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                1,600 KM
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Project Scope
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Route Survey & Road Transportation
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Equipment Deployed
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                2 x Puller+8 Axle Line Hydraulic Trailer
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Transit Time
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                22 Days
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-[16px] lg:text-[22px] text-[#173f74] mb-3">
                Key Achievement
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">
                Successful Safe Delivery
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
            The project involved transporting 2 x 100 MT Heat Exchangers and accessories for Godrej from Mumbai to IOCL Panipat. Challenges included oversized dimensions, axle load distribution, route restrictions, permits, and safe delivery within project timelines. Through detailed route planning, engineering assessments, and specialized heavy-haul transportation, Mega Move India ensured seamless execution and secure delivery of the critical equipment.
          </p>

        </div>

      </section>

      {/* Results */}

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20">

        <h2 className="text-3xl lg:text-5xl font-light text-[#173f74] text-center mb-8 lg:mb-12">
          Project Outcome
        </h2>

        <p className="max-w-6xl mx-auto text-center text-base lg:text-lg text-gray-700 leading-8 lg:leading-10">
          Mega Move India successfully delivered 2 x 100 MT Heat Exchangers and accessories for Godrej from Mumbai to IOCL Panipat, ensuring safe transportation, regulatory compliance, timely execution, and damage-free delivery of critical project cargo.
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
