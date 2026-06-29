import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Site Map | Mega Move India",
  description: "Explore the complete directory of services, industries, success stories, and legal pages on the Mega Move India website.",
};

export const dynamic = "force-static";

export default function Sitemap() {
  const sections = [
    {
      title: "Core Pages",
      links: [
        { label: "Home", href: "/" },
        { label: "Our History / Legacy & Mission", href: "/history" },
        { label: "In-House Equipments", href: "/equipment" },
        { label: "Careers", href: "/careers" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { label: "Air Freight", href: "/services/air-freight" },
        { label: "Ocean Freight", href: "/services/ocean-freight" },
        { label: "Land Transport", href: "/services/land-transport" },
        { label: "Rentals & Warehousing", href: "/services/rentals-warehousing" },
        { label: "Factory Relocation", href: "/services/factory-relocation" },
        { label: "Project Forwarding", href: "/services/project-forwarding" },
        { label: "Transport Engineering", href: "/services/transport-engineering" },
        { label: "Logistics & Supply Chain", href: "/services/logistics-supply-chain" },
        { label: "Transshipment", href: "/services/transshipment" },
      ],
    },
    {
      title: "Industries We Serve",
      links: [
        { label: "Infrastructure", href: "/industries/infrastructure" },
        { label: "Rental & Warehousing", href: "/industries/rental-warehousing" },
        { label: "Industrial Plants", href: "/industries/industrial" },
        { label: "Metals & Mining", href: "/industries/metals-mining" },
        { label: "Oil & Gas", href: "/industries/oil-gas" },
        { label: "Power & Energy", href: "/industries/power-energy" },
      ],
    },
    {
      title: "Case Studies / Portfolios",
      links: [
        { label: "Success Stories Directory", href: "/case-studies" },
        { label: "BMP-II Vehicle Transportation", href: "/case-studies/national-defence-project" },
        { label: "Industrial Machinery Import", href: "/case-studies/Project-2" },
        { label: "Manufacturing Plant Transfer", href: "/case-studies/Project-3" },
        { label: "Heat Condenser Shipment", href: "/case-studies/Project-4" },
        { label: "2x100MT Heat Exchanger", href: "/case-studies/Project-5" },
        { label: "Chemical Storage Tanks", href: "/case-studies/Project-6" },
        { label: "X-Ray Systems", href: "/case-studies/Project-7" },
        { label: "EOT Crane Shipment", href: "/case-studies/Project-8" },
      ],
    },
    {
      title: "Company News",
      links: [
        { label: "News Feed", href: "/company-news" },
        { label: "Fleet Expansion Announcements", href: "/company-news/fleet-expansion" },
        { label: "IICS Exhibition", href: "/company-news/IICS" },
        { label: "Breakbulk Dubai Participation", href: "/company-news/breakbulk-Dubai" },
      ],
    },
    {
      title: "Legal Pages",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-and-conditions" },
        { label: "Terms & Conditions (PDF Document)", href: "/documents/MegaMoveIndia%20Terms%20and%20Conditions.pdf" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#1f2937]">
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-28">
        <div className="border-b border-gray-300 pb-8 mb-12">
          <h1 className="text-[34px] lg:text-[52px] font-light text-gray-900 tracking-wide">
            SITE MAP
          </h1>
          <p className="text-gray-500 mt-2 text-sm lg:text-base">
            Comprehensive directory of all page routes and resources on Mega Move India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <h2 className="text-xl font-semibold text-[#173f74] border-b border-[#173f74]/15 pb-3 mb-6">
                {section.title}
              </h2>
              <ul className="space-y-3.5">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      prefetch={false}
                      className="text-gray-600 hover:text-black hover:underline text-[15px] leading-relaxed transition-colors duration-200 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
