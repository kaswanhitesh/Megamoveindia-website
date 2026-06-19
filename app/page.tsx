const cards = [
  {
    title: "AIR",
    subtitle: "Global Air Cargo Solutions",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
  },
  {
    title: "OCEAN",
    subtitle: "FCL | LCL | Breakbulk",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7",
  },
  {
    title: "LAND",
    subtitle: "ODC | Heavy Lift | Trailers",
    image:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a",
  },
  {
    title: "RENTALS",
    subtitle: "Warehousing & Equipment",
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

              <div className="absolute bottom-10 left-6 text-white">

                <h2 className="text-[22px] font-bold leading-tight">
                  {card.title}
                </h2>

                <p className="mt-3 text-sm tracking-wider">
                  {card.subtitle}
                </p>

              </div>

            </a>
          ))}
        </div>

      </section>

    </main>
  );
}
