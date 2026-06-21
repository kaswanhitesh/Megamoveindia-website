import type { Metadata } from "next";

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
        <img
          src="images/Casestudies/DefenceCargo/DefenceCargoHeroImage.JPG"
          alt="National Defence Project"
          className="w-full h-full object-cover"
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
        <h2 className="text-4xl text-[#173f74] mb-8">
          Project Overview
        </h2>

        <p className="text-lg text-gray-700 leading-9">
          Mega Move India successfully executed a strategic National Defence
          logistics project involving transportation of critical equipment
          from manufacturing facilities to designated defence locations
          across India. The project required specialized transportation,
          route surveys, permit management, escort arrangements and
          precise delivery scheduling.
        </p>
      </section>

      {/* Project Details */}

      <section className="bg-[#f7f7f7] py-20">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl text-[#173f74] mb-12">
            Project Details
          </h2>

          <div className="grid grid-cols-2 gap-10">

            <div>
              <h3 className="font-semibold text-xl mb-3">
                Cargo Description
              </h3>
              <p className="text-gray-700">
                Defence Equipment & Strategic Components
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-3">
                Mode of Transport
              </h3>
              <p className="text-gray-700">
                Multi-Axle Hydraulic Trailer Fleet
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-3">
                Scope
              </h3>
              <p className="text-gray-700">
                Route Survey, Permits, Transportation,
                Escort Services & Delivery
              </p>
            </div>

            <div>
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

      {/* Gallery */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl text-[#173f74] mb-12">
          Project Gallery
        </h2>

        <div className="grid grid-cols-3 gap-6">

          <img
            src="/images/projects/defence-1.jpg"
            alt=""
            className="w-full h-[280px] object-cover"
          />

          <img
            src="/images/projects/defence-2.jpg"
            alt=""
            className="w-full h-[280px] object-cover"
          />

          <img
            src="/images/projects/defence-3.jpg"
            alt=""
            className="w-full h-[280px] object-cover"
          />

        </div>

      </section>

      {/* Challenges */}

      <section className="bg-[#f7f7f7] py-20">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl text-[#173f74] mb-8">
            Challenges & Solutions
          </h2>

          <p className="text-lg text-gray-700 leading-9">
            The project involved movement through multiple states with
            strict timelines and security protocols. Mega Move India
            coordinated with relevant authorities, conducted route
            assessments, arranged escorts and ensured seamless execution
            without operational delays.
          </p>

        </div>

      </section>

      {/* Results */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl text-[#173f74] mb-8">
          Project Outcome
        </h2>

        <p className="text-lg text-gray-700 leading-9">
          The cargo was delivered safely and within the committed schedule.
          The successful execution reinforced Mega Move India's capability
          in handling mission-critical project logistics and specialized
          transportation assignments.
        </p>

      </section>

    </main>
  );
}
