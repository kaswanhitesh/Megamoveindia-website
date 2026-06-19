"use client";

export default function CaseStudies() {

  const projects = [
    {
      title: "250 MT Transformer Transportation",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    },
    {
      title: "Breakbulk Shipment – China to India",
      image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7",
    },
    {
      title: "Factory Relocation Project",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    },
    {
      title: "Heavy Lift Equipment Movement",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
    },
    {
      title: "Wind Energy Logistics",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
    },
    {
      title: "Warehouse & Equipment Rental Support",
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
