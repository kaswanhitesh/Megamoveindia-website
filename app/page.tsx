import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <header className="flex items-center justify-between px-16 py-10 border-b border-gray-300">
        <Image
          src="/images/mega-move-logo.svg"
          alt="Mega Move India"
          width={180}
          height={90}
        />

        <button className="text-4xl text-gray-700">
          ☰
        </button>
      </header>

      {/* Main Section */}
      <section className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Content */}
          <div className="pt-6">
            <h1 className="text-6xl font-light mb-8">
              Welcome to
              <br />
              <span className="font-semibold">
                Mega Move India
              </span>
            </h1>

            <p className="text-xl text-gray-700 leading-10">
              Founded in 2025, Mega Move India Private Limited
              specializes in project logistics, heavy lift
              transportation, over-dimensional cargo movement,
              freight forwarding and equipment rentals.
            </p>

            <p className="mt-8 text-xl text-gray-700 leading-10">
              Backed by an in-house fleet of 18 lowbed trailers,
              40 lines of hydraulic axles, 2 manlifts and 4 pullers,
              we provide reliable logistics solutions across India
              and international markets.
            </p>

            <p className="mt-10 text-2xl font-semibold">
              Moving The Immovable.
              <br />
              Delivering The Impossible.
            </p>

            <div className="mt-12 space-y-3">
              <p><strong>Phone:</strong> +91 93214 99970</p>
              <p><strong>Email:</strong> info@megamoveindia.com</p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 gap-4">

            <a
              href="#"
              className="relative h-[520px] overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
                alt="Air Freight"
                className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-8 left-6 text-white">
                <h2 className="text-3xl font-bold">
                  AIR FREIGHT
                </h2>
                <p className="mt-3">
                  Global Air Cargo Solutions
                </p>
              </div>
            </a>

            <a
              href="#"
              className="relative h-[520px] overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1565891741441-64926e441838"
                alt="Ocean Freight"
                className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-8 left-6 text-white">
                <h2 className="text-3xl font-bold">
                  OCEAN FREIGHT
                </h2>
                <p className="mt-3">
                  FCL | LCL | Breakbulk
                </p>
              </div>
            </a>

            <a
              href="#"
              className="relative h-[520px] overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                alt="Land Transport"
                className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-8 left-6 text-white">
                <h2 className="text-3xl font-bold">
                  LAND
                </h2>
                <p className="mt-3">
                  ODC | Heavy Lift | Trailers
                </p>
              </div>
            </a>

            <a
              href="#"
              className="relative h-[520px] overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1586528116493-5e6e6a3d6e35"
                alt="Rentals"
                className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-8 left-6 text-white">
                <h2 className="text-3xl font-bold">
                  RENTALS &
                  WAREHOUSING
                </h2>
                <p className="mt-3">
                  Equipment & Storage Solutions
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>
    </main>
  );
}
