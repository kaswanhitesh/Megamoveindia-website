import type { Metadata } from "next";
import Gallery from "./Gallery";
import Image from "next/image";

export const metadata: Metadata = {
  title: "National Defence Project | Mega Move India",
  description:
    "Mega Move India's successful execution of a National Defence Project involving specialized transportation, heavy lift handling, route surveys and end-to-end project logistics.",
};

export default function NationalDefenceProject() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="relative h-[500px]">
        <Image
          src="/images/Casestudies/DefenceCargo/DefenceCargoHeroImage.webp"
          alt="National Defence Project"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-6xl font-light tracking-[6px] text-center">
            NATIONAL DEFENCE PROJECT
          </h1>
        </div>
      </section>

      {/* Project Overview */}

      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-5xl font-light text-[#173f74] text-center mb-12">
          Project Overview
        </h2>

        <p className="max-w-6xl mx-auto text-center text-lg text-gray-700 leading-10">
          Mega Move India successfully executed a strategic National Defence logistics project involving the transportation of critical defence equipment from the manufacturing facility to Nyoma, Ladakh, near the India–China border. Selected from four approved vendors, Mega Move India was awarded the government contract based on its proven expertise in heavy-haul and over-dimensional cargo (ODC) transportation. The project required meticulous planning, route surveys, permit management, escort coordination, and specialized transportation solutions. Covering approximately 3,700 kilometers, the mission was completed within an exceptional timeline of 21 days, establishing a national benchmark for the fastest delivery of defence ODC cargo over such a distance..
        </p>
      </section>

      {/* Project Details */}

      <section className="bg-[#f7f7f7] py-20">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-light text-[#173f74] text-center mb-12">
            Project Details
          </h2>

          <div className="grid grid-cols-2 gap-16 max-w-5xl mx-auto">

            <div className="text-center">
             <h3 className="font-semibold text-xl mb-3">
                Cargo Description
              </h3>
              <p className="text-gray-700">
                Defence Equipment & Strategic Components
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-xl mb-3">
                Mode of Transport
              </h3>
              <p className="text-gray-700">
                Multi-Axle Hydraulic Trailer Fleet
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-xl mb-3">
                Scope
              </h3>
              <p className="text-gray-700">
                Route Survey, Permits, Transportation,
                Escort Services & Delivery
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-xl mb-3">
                Service Type
              </h3>
              <p className="text-gray-700">
                End-to-End Project Logistics
              </p>
            </div>

          </div>
        </div>
      </section>
     
      <Gallery />
      
      {/* Challenges */}

      <section className="bg-[#f7f7f7] py-20">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-light text-[#173f74] text-center mb-12">
            Challenges & Solutions
          </h2>

          <p className="max-w-6xl mx-auto text-center text-lg text-gray-700 leading-10">
            The project presented extraordinary operational challenges, including the transportation of critical defence cargo through remote high-altitude terrain with limited road infrastructure en route to Nyoma, Ladakh. Amid heightened security sensitivities along strategic border regions, convoy safety remained paramount. Mega Move India's Managing Director personally accompanied the movement alongside Indian Army escort vehicles, ensuring continuous coordination and risk management. Despite harsh weather, low oxygen levels, difficult terrain, and complex convoy logistics involving multiple heavy-haul vehicles, the team successfully maintained operational integrity and achieved timely, safe delivery through meticulous planning, military coordination, and disciplined execution.
          </p>

        </div>

      </section>

      {/* Results */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-5xl font-light text-[#173f74] text-center mb-12">
          Project Outcome
        </h2>

        <p className="max-w-6xl mx-auto text-center text-lg text-gray-700 leading-10">
          Despite the extreme operating conditions and logistical complexities, the project was completed successfully within the planned 21-day timeline. During transit, one of the heavy-haul vehicles experienced a mechanical breakdown in a remote high-altitude region. Through close coordination with the Indian Army, the BMP-II armoured vehicle was safely transferred to an Army transport platform and secured at a military facility in Kargil, ensuring zero risk to the equipment. Following repairs, Mega Move India reloaded the cargo and completed the final delivery to Nyoma, Ladakh, without incident, reinforcing its capability in executing mission-critical defence logistics under demanding conditions.
        </p>

        <div className="mt-12 border-t pt-8 text-center">
  <h3 className="text-2xl font-semibold text-[#173f74] mb-3">
    Discuss Your Project Logistics Requirement
  </h3>

  <p className="text-gray-600 mb-4">
    For heavy lift transportation, project logistics, freight forwarding and ODC movements, contact our project team.
  </p>

  <a
    href="mailto:projects@megamoveindia.com"
    className="text-[#173f74] text-2xl font-semibold hover:underline"
  >
    projects@megamoveindia.com
  </a>
</div>

      </section>

    </main>
  );
}
