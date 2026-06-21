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

<section className="relative h-[500px]">

  <img
    src="images/ContactUsHeroImage.png"
    alt="Contact Us"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/35" />

  <div className="absolute inset-0 flex items-center justify-center">

    <h1 className="text-white text-[70px] tracking-[12px] font-light">
      CONTACT US
    </h1>

  </div>

</section>
        
      {/* KEY OFFICES */}
      <section className="pt-16 pb-6">
        <h2 className="text-center text-[36px] text-[#173f74] font-xl Bold mb-10">
         KEY OFFICES
         </h2>
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-3 gap-16 text-center">
            {offices.map((office, index) => (
              <div
                key={index}
                className="flex flex-col h-full"
              >
                <h3 className="text-[34px] font-bold text-black mb-8">
                  {office.city}
                </h3>
                <p className="text-gray-700 leading-8 text-center min-h-[140px]">
                   {office.address}
                </p>
                <div className="mt-auto">

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
      <section className="max-w-7xl mx-auto px-12 py-16">
        <div className="flex gap-8 items-stretch">
          {/* MAP */}
          <div className="w-[45%] flex flex-col">
            <iframe
                src="https://www.google.com/maps?q=Andheri%20East%20Mumbai&output=embed"
                loading="lazy"
                className="border-0 w-full h-full"
            />
          </div>
          {/* ENQUIRY FORM */}
          <div className="w-[45%]">
            <h2 className="text-center text-[20px] font-medium text-[#173f74] mb-8">
              Send Us An Enquiry
            </h2>
            <form className="space-y-6 max-w-[520px] mx-auto">
              <div className="grid grid-cols-2 gap-4">
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
                  className="border border-gray-300 p-3.5 text-base bg-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  required
                  type="email"
                  placeholder="Email Address *"
                  className="border border-gray-300 p-3.5 text-base bg-white"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="border border-gray-300 p-3.5 text-base bg-white"
                />
              </div>
              <textarea
                required
                rows={5}
                placeholder="Remarks *"
                className="border border-gray-300 p-3.5 text-base bg-white w-full"
              />
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="bg-[#c41e1e] text-white px-14 py-4 text-xl font-semibold rounded"
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

  <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">

    {/* Company Information */}

    <div className="text-white text-sm leading-7">

      <p>
        <strong>Mega Move India Private Limited</strong>
      </p>

      <p>
        CIN: U52219MH2025PTC447919
      </p>

      <p>
        GSTIN: 27AATCM3537A1ZF
      </p>

    </div>

    {/* Social Media */}

    <div className="flex gap-4">

      <a
        href="https://www.instagram.com/megamoveindia/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white text-2xl"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.linkedin.com/company/megamoveindia"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white text-2xl"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://wa.me/919321499970"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white text-2xl"
      >
        <FaWhatsapp />
      </a>

      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white text-2xl"
      >
        <FaXTwitter />
      </a>

      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white text-2xl"
      >
        <FaFacebookF />
      </a>

    </div>

  </div>

</section>
    </main>
  );
}
