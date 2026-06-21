"use client";

export default function CaseStudies() {

  const projects = [
    {
      title: "National Defence Project",
      image: "images/NationalDefenceProjectCardImage.JPG",
    },
    {
      title: "225MT Used Machinery Import",
      image: "images/225MTUsedMachineryImportCardImage.jpeg",
    },
    {
      title: "Factory Relocation: Germany To India",
      image: "images/FactoryRelocationGermanyToIndiaCardImage.jpeg",
    },
    {
      title: "70MT Heat Condenser Export: Ex Kattupalli to Santos Brazil ",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
    },
    {
      title: "In-Land Transportation: 100MT Heat Exchanger",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
    },
    {
      title: "Chemical Storage Tanks: Ex-Mumbai To Italy",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    },

    {
      title: "8nos Used Oil X-Ray Machines Import: Ex-Hamburg to Mumbai Port ",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    },

    {
      title: "35M EOT Crane Export: Ex-NSA to Houston,USA",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    },

    {
      title: "Chemical Storage Tanks: Ex-Mumbai To Italy",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    },
  ];

  const networks = [
    "WCA",
    "GPLN",
    "PCN",
    "OOG",
    "XLP",
    "MTO",
    "SLA",
  ];

  const customers = [
    "ADANI",
    "TATA",
    "JSW",
    "ABB",
    "SIEMENS",
    "L&T",
    "RELIANCE",
  ];

  return (
    <main className="min-h-screen bg-[#f7f7f7] overflow-hidden">

      <div className="max-w-7xl mx-auto px-16 py-16">

        <h1 className="text-center text-[52px] font-light text-gray-900">
          Our Projects
        </h1>

        <p className="text-center text-xl text-gray-500 mt-4 mb-14">
          Showcasing Mega Move India's Expertise in Project Logistics,
          Heavy Lift Transportation and Freight Forwarding
        </p>

        {/* PROJECTS */}

        <div className="grid grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-lg
                overflow-hidden
                shadow-sm
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-[260px]
                  object-cover
                  grayscale
                  hover:grayscale-0
                  transition-all
                  duration-700
                "
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold">
                  {project.title}
                </h2>
              </div>
            </div>
          ))}

        </div>

        {/* NETWORKS */}

        <div className="mt-24">

          <h2 className="text-center text-[42px] font-light mb-10">
            Our Networks
          </h2>

          <div className="overflow-hidden">

            <div className="flex gap-6 animate-marquee w-max">

              {[...networks, ...networks].map((network, i) => (
                <div
                  key={i}
                  className="
                    w-[220px]
                    h-[120px]
                    bg-white
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    shadow-sm
                    text-3xl
                    font-bold
                    text-gray-600
                    grayscale
                    hover:grayscale-0
                    transition-all
                    duration-700
                  "
                >
                  {network}
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* CUSTOMERS */}

        <div className="mt-24 mb-24">

          <h2 className="text-center text-[42px] font-light mb-10">
            Our Customers
          </h2>

          <div className="overflow-hidden">

            <div className="flex gap-6 animate-marquee-reverse w-max">

              {[...customers, ...customers].map((customer, i) => (
                <div
                  key={i}
                  className="
                    w-[220px]
                    h-[120px]
                    bg-white
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    shadow-sm
                    text-3xl
                    font-bold
                    text-gray-600
                    grayscale
                    hover:grayscale-0
                    transition-all
                    duration-700
                  "
                >
                  {customer}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
