import { SITE_URL } from "@/app/lib/seo";

export type Faq = { q: string; a: string };

// FAQ block for a service page, plus the Service, FAQPage and BreadcrumbList structured
// data that search engines and AI answer engines read. Same look as the ODC Transport FAQs.
export default function ServiceFaq({
  name,
  path,
  serviceType,
  faqs,
}: {
  name: string;
  path: string;
  serviceType: string;
  faqs: Faq[];
}) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      serviceType,
      provider: { "@type": "Organization", name: "Mega Move India", url: SITE_URL },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Place", name: "Worldwide" },
      ],
      url: `${SITE_URL}${path}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
        { "@type": "ListItem", position: 3, name, item: `${SITE_URL}${path}` },
      ],
    },
  ];

  return (
    <section className="bg-white/60">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <h2 className="text-center text-2xl lg:text-[36px] font-light text-[#173f74] mb-8">{name} FAQs</h2>
        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base lg:text-lg text-[#173f74]">
                <h3>{f.q}</h3>
                <span className="ml-4 text-xl group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-sm lg:text-base text-gray-600 leading-7">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
