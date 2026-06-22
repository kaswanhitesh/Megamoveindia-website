"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const cards = [
  {
    title: "AIR",
    link: "/services/air-freight",
    description:
      "Specialized air freight solutions for urgent, high-value and time-critical cargo movements. Through our global airline partnerships and logistics network, we provide reliable import, export, charter and door-to-door transportation services to major destinations worldwide.",
    image: "images/AirFreightHeroImage.jwebp",
  },
  {
    title: "OCEAN",
    link: "/services/ocean-freight",
    description:
      "Comprehensive ocean freight services covering FCL, LCL, breakbulk and project cargo shipments. Our experienced team manages international freight movements through strategic carrier partnerships, ensuring efficient, secure and cost-effective transportation across global trade routes.",
    image: "images/OceanfreightHeroCardImage.webp",
  },
  {
    title: "LAND",
    link: "/services/land-transport",
    description:
      "Heavy haulage, over-dimensional cargo transportation and project logistics supported by hydraulic axle trailers, lowbed trailers and specialized equipment. We execute complex cargo movements safely and efficiently across India for industrial, infrastructure and energy projects.",
    image: "images/LandTransportCardHeroImage.webp",
  },
  {
    title: "RENTALS",
    link: "/services/rentals-warehousing",
    description:
      "Comprehensive equipment rental, warehousing and cargo handling solutions including truck mounted manlifts, aerial work platforms, storage facilities, loading and unloading services, project logistics support and specialized equipment for industrial and infrastructure projects.",
    image: "images/RentalsCardHeroImage.webp",
  },
];

export default function Home() {
  return (
    <main className="bg-[#f7f7f7]">

      {/* HERO + SERVICES SECTION */}
      <section
        className="
          flex flex-col lg:flex-row
          items-start
          px-4 lg:px-16
          pt-4 lg:pt-2
          gap-6 lg:gap-8
        "
      >
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[38%] flex flex-col justify-start pt-2 lg:pt-6">

          <h1 className="text-[26px] md:text-[38px] lg:text-[42px] leading-tight font-light tracking-wide">
            Welcome to
            <br />
            <span className="font-semibold">MEGA MOVE INDIA</span>
          </h1>

          <p className="mt-6 lg:mt-8 text-[15px] leading-[1.9] text-gray-700">
            With a legacy in heavy haulage and over-dimensional cargo
            transportation dating back to 2005, Mega Move India was
            incorporated in 2025 to expand its expertise into global
            project logistics, freight forwarding, heavy lift transportation
            and equipment rentals.
          </p>

          <p className="mt-3 text-[15px] leading-[1.9] text-gray-700">
            Driven by specialized equipment, experienced personnel and a
            commitment to operational excellence, we provide end-to-end
            logistics solutions for the world's most challenging cargo movements.
          </p>
        </div>

        {/* RIGHT SIDE - RESPONSIVE FIX */}
        <div
          className="
            w-full lg:w-[60%]

            /* MOBILE: 2x2 GRID (NEW FIX) */
            grid grid-cols-2 gap-[6px]
            h-[320px]

            /* DESKTOP: original horizontal layout preserved */
            lg:flex lg:gap-[4px] lg:h-[450px]
          "
        >
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.link}
              className="
                group relative overflow-hidden
                rounded-md

                /* MOBILE: fixed equal cards */
                h-[160px]

                /* DESKTOP: flex expanding cards */
                lg:flex-1 lg:h-auto lg:rounded-none lg:transition-all lg:duration-700 lg:hover:flex-[2]
              "
            >
              <img
                src={card.image}
                alt={card.title}
                className="
                  absolute inset-0 w-full h-full object-cover
                  grayscale lg:grayscale
                  lg:group-hover:grayscale-0
                  transition-all duration-700
                "
              />

              <div className="absolute inset-0 bg-black/45" />

              {/* TEXT */}
              <div className="absolute inset-0 flex flex-col justify-end p-3 lg:p-6 text-white">

                <h2 className="text-[14px] lg:text-[22px] font-bold text-center lg:text-left">
                  {card.title}
                </h2>

                {/* Desktop hover description only */}
                <div className="hidden lg:block max-h-0 opacity-0 overflow-hidden group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-700">
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

      {/* INDUSTRIES SECTION */}

<section className="pt-4 pb-8 bg-[#f7f7f7] border-t border-gray-200">

  <div className="text-center mt-6 mb-8">
    <h2 className="text-[22px] lg:text-[26px] font-bold text-black">
      Industries We Serve
    </h2>
  </div>

  <div className="max-w-7xl mx-auto px-4">

    <Swiper
      modules={[Autoplay]}
      slidesPerView={5}
      spaceBetween={20}
      loop={true}
      grabCursor={true}
      allowTouchMove={true}
      speed={4000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
    >

      {[
        {
          icon: "/images/icons/icon_industrialplants.jpeg",
          title: "Industrial Plants and Projects",
        },
        {
          icon: "/images/icons/icon_infrastructure.jpeg",
          title: "Infrastructure",
        },
        {
          icon: "/images/icons/icon_metalandmining.jpeg",
          title: "Metal & Mining",
        },
        {
          icon: "/images/icons/icon_oilandgas.png",
          title: "Oil and Gas",
        },
        {
          icon: "/images/icons/icon_power and energy.jpeg",
          title: "Power and Energy",
        },
      ].map((item, index) => (

        <SwiperSlide key={index}>

          <div className="industry-card">

            <img
              src={item.icon}
              alt={item.title}
              className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 object-contain"
            />

            <h3 className="text-sm lg:text-lg font-medium text-center px-2">
              {item.title}
            </h3>

          </div>

        </SwiperSlide>

      ))}

    </Swiper>

  </div>

</section>

    </main>
  );
}
