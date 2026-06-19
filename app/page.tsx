const cards = [
  {
    title: "AIR",
    description:
      "Specialized air freight solutions for urgent, high-value and time-critical cargo movements. Through our global airline partnerships and logistics network, we provide reliable import, export, charter and door-to-door transportation services to major destinations worldwide.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
  },

  {
    title: "OCEAN",
    description:
      "Comprehensive ocean freight services covering FCL, LCL, breakbulk and project cargo shipments. Our experienced team manages international freight movements through strategic carrier partnerships, ensuring efficient, secure and cost-effective transportation across global trade routes.",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7",
  },

  {
    title: "LAND",
    description:
      "Heavy haulage, over-dimensional cargo transportation and project logistics supported by hydraulic axle trailers, lowbed trailers and specialized equipment. We execute complex cargo movements safely and efficiently across India for industrial, infrastructure and energy projects.",
    image:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a",
  },

  {
    title: "RENTALS",
    description:
      "Equipment rental and warehousing solutions designed to support project logistics and industrial operations. Our capabilities include manlifts, heavy-duty pullers, storage facilities, cargo handling support and customized solutions for temporary and long-term project requirements.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
  },
];

export default function Home() {
  return (
    <main className="bg-[#f7f7f7]">

      <section className="min-h-[calc(100vh-170px)] flex items-start px-16 pt-10 pb-10 gap-8">

        {/* Left Side */}

        <div className="w-[40%] flex flex-col justify-start pt-12">

          <h1 className="text-[52px] leading-[1.2] font-light tracking-wide">
            Welcome to
            <br />
            <span className="font-semibold">
              Mega Move India
            </span>
          </h1>

          <p className="mt-14 text-[15px] leading-[2.2] text-gray-700">
            With a legacy in heavy haulage and over-dimensional cargo
            transportation dating back to 2005, Mega Move India was
            incorporated in 2025 to expand its expertise into global
            project logistics, freight forwarding, heavy lift
            transportation and equipment rentals.
          </p>

          <p className="mt-14 text-[15px] leading-[2.2] text-gray-700">
            Driven by specialized equipment, experienced personnel and
            a commitment to operational excellence, we provide
            end-to-end logistics solutions for the world's most
            challenging cargo movements.
          </p>

        </div>

        {/* Right Side */}

        <div className="w-[60%] flex gap-[4px] h-[500px]">

          {cards.map((card) => (
            <a
              key={card.title}
              href="#"
              className="
                group
                relative
                flex-1
                overflow-hidden
                transition-all
                duration-700
                hover:flex-[2]
              "
            >
              <img
                src={card.image}
                alt={card.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  grayscale
                  group-hover:grayscale-0
                  transition-all
                  duration-700
                "
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-10 left-6 right-6 text-white">

  <h2 className="text-[22px] font-bold leading-tight">
    {card.title}
  </h2>

  <div
    className="
      max-h-0
      opacity-0
      overflow-hidden
      group-hover:max-h-[300px]
      group-hover:opacity-100
      transition-all
      duration-700
    "
  >

    <p className="mt-4 text-[13px] leading-6 text-gray-100">
      {card.description}
    </p>

    <div className="mt-4 text-sm font-medium">
      Explore Services →
    </div>

  </div>

</div>
             

            </a>
          ))}
        </div>

      </section>

    </main>
  );
}
