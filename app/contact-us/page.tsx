import type { Metadata } from "next";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const metadata: Metadata = {
  title:
    "Contact Mega Move India | Project Logistics & Freight Forwarding",
  description:
    "Contact Mega Move India for project logistics, freight forwarding, heavy lift transportation, ODC cargo movement, equipment rentals and supply chain solutions.",
};

export default function ContactUs() {
  const offices = [
    {
      city: "Mumbai",
      address:
        "A-wing, Office No 905, Pranik Chambers, Sakivihar Road, Sakinaka, Andheri East, Mumbai, MH-400072, India.",
      email: "info@megamoveindia.com",
      phone: "+91 9321499970",
    },
    {
      city: "Gujarat",
      address:
        "Office No-304, Sainath Complex, Nr Suman Chambers, Salvav, Vapi, GJ-396191, India.",
      email: "gj@megamoveindia.com",
      phone: "+91 9574899970",
    },
    {
      city: "Haryana",
      address:
        "22/3, Tilak Bazar, Shastri Nagar, Hisar, HR-125001, India.",
      email: "hsr@megamoveindia.com",
      phone: "+91 9867099970",
    },
  ];

  return (
    <main className="bg-[#f7f7f7]">
      {/* HERO IMAGE */}

      <section className="relative h-[280px] lg:h-[500px]">
        <img
          src="images/ContactUsHeroImage.png"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl lg:text-[70px] tracking-[4px] lg:tracking-[12px] font-light text-center px-4">
            CONTACT US
          </h1>
        </div>
      </section>

      {/* KEY OFFICES */}

      <section className="pt-10 lg:pt-16 pb-6">
        <h2 className="text-center text-[28px] lg:text-[36px] text-[#173f74] font-xl mb-10">
          KEY OFFICES
        </h2>

        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 text-center">
            {offices.map((office, index) => (
              <div key={index} className="flex flex-col h-full">
                <h3 className="text-[28px] lg:text-[34px] font-bold text-black mb-6 lg:mb-8">
                  {office.city}
                </h3>

                <p className="text-gray-700 leading-7 lg:leading-8 text-center">
                  {office.address}
                </p>

                <div className="mt-4 lg:mt-auto">
                  <p className="mt-4 text-center">
                    <strong>Email:</strong> {office.email}
                  </p>

                  <p className="text-center">
                    <strong>Mobile:</strong> {office.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP + ENQUIRY */}

      <section className="max-w-7xl mx-auto px-4 lg:px-12 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
          {/* MAP */}

          <div className="w-full lg:w-[45%] h-[300px] lg:h-auto flex flex-col">
            <iframe
              src="https://www.google.com/maps?q=Andheri%20East%20Mumbai&output=embed"
              loading="lazy"
              className="border-0 w-full h-full"
            />
          </div>

          {/* ENQUIRY FORM */}

          <div className="w-full lg:w-[45%]">
            <h2 className="text-center text-[18px] lg:text-[20px] font-medium text-[#173f74] mb-8">
              Send Us An Enquiry
            </h2>

            <form className="space-y-6 max-w-[520px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="Name *"
                  className="border border-gray-300 p-3 text-base bg-white"
                />

                <input
                  required
                  type="text"
                  placeholder="Phone Number *"
                  className="border border-gray-300 p-3 text-base bg-white"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <input
                  required
                  type="email"
                  placeholder="Email Address *"
                  className="border border-gray-300 p-3 text-base bg-white"
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="border border-gray-300 p-3 text-base bg-white"
                />
              </div>

              <textarea
                required
                rows={5}
                placeholder="Remarks *"
                className="border border-gray-300 p-3 text-base bg-white w-full"
              />

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="bg-[#c41e1e] text-white px-10 lg:px-14 py-3 lg:py-4 text-lg lg:text-xl font-semibold rounded"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}

      <section className="bg-[#2f3d57] py-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-white text-sm leading-7 text-center lg:text-left">
            <p>
              <strong>Mega Move India Private Limited</strong>
            </p>

            <p>CIN: U52219MH2025PTC447919</p>

            <p>GSTIN: 27AATCM3537A1ZF</p>
          </div>

          <div className="flex gap-3 lg:gap-4 flex-wrap justify-center">
            <a
              href="https://www.instagram.com/megamoveindia/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white text-xl lg:text-2xl"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/megamoveindia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white text-xl lg:text-2xl"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/919321499970"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white text-xl lg:text-2xl"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white text-xl lg:text-2xl"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white text-xl lg:text-2xl"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}