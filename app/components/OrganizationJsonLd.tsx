import { SITE_NAME, SITE_URL } from "@/app/lib/seo";

// Business details for search engines (Google business panel, Maps, rich results).
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "Mega Move India Private Limited",
  url: SITE_URL,
  logo: `${SITE_URL}/mega-move-logo.svg`,
  image: `${SITE_URL}/og-image.jpg`,
  slogan: "Moving The Immovable. Delivering The Impossible.",
  description:
    "Project logistics, heavy haulage, ODC transportation, freight forwarding and equipment rentals across India and worldwide.",
  email: "info@megamoveindia.com",
  telephone: "+91-9321399970",
  address: {
    "@type": "PostalAddress",
    streetAddress: "A-wing, Office No 905, Pranik Chambers, Sakivihar Road, Sakinaka, Andheri East",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400072",
    addressCountry: "IN",
  },
  location: [
    {
      "@type": "Place",
      name: "Gujarat office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office No-304, Sainath Complex, Nr Suman Chambers, Salvav",
        addressLocality: "Vapi",
        addressRegion: "Gujarat",
        postalCode: "396191",
        addressCountry: "IN",
      },
    },
    {
      "@type": "Place",
      name: "Haryana office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "22/3, Tilak Bazar, Shastri Nagar",
        addressLocality: "Hisar",
        addressRegion: "Haryana",
        postalCode: "125001",
        addressCountry: "IN",
      },
    },
    {
      "@type": "Place",
      name: "Chennai office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 58/39, Wavoo Mansion, 5th Floor, Rajaji Salai",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600001",
        addressCountry: "IN",
      },
      telephone: "+91-9150088848",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+91-9321399970",
      email: "info@megamoveindia.com",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: ["https://www.instagram.com/megamoveindia/", "https://www.linkedin.com/company/megamoveindia"],
};

export default function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }}
    />
  );
}
