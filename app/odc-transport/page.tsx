import Link from "next/link";
import { pageMetadata, SITE_URL } from "@/app/lib/seo";

export const metadata = pageMetadata({
  path: "/odc-transport/",
  title: "ODC Transport Services in India | Over Dimensional Cargo | Mega Move India",
  description:
    "ODC transport across India with an in-house fleet of 40 hydraulic axle lines, lowbed trailers and pullers. Route surveys, permits, escorts and heavy haulage by Mega Move India.",
});

const fleet = [
  { value: "40", label: "Hydraulic axle lines" },
  { value: "18", label: "Lowbed trailers" },
  { value: "10", label: "Flatbed trailers" },
  { value: "4", label: "Heavy-duty pullers" },
  { value: "2", label: "HAV 15 m spacers" },
];

const steps = [
  {
    title: "Cargo details & enquiry",
    text: "Share the cargo dimensions, weight, centre of gravity if known, pickup and delivery points and your timeline. We confirm feasibility and the right trailer configuration.",
  },
  {
    title: "Route survey",
    text: "Our team surveys the route for bridges, culverts, overhead cables, turning radii, gradients and road conditions, and plans diversions where needed.",
  },
  {
    title: "Transport engineering",
    text: "We work out axle loads, trailer and puller combinations and lashing plans so the load stays within safe limits for the vehicle and the road.",
  },
  {
    title: "Permits & escorts",
    text: "We arrange the permissions required from road-owning authorities along the route and organise escort vehicles and police support where they are needed.",
  },
  {
    title: "Loading & securing",
    text: "Cargo is loaded and lashed with our in-house lashing equipment under supervision, with checks before the vehicle moves.",
  },
  {
    title: "Transit & delivery",
    text: "Our crew moves the consignment on the planned route and timings, keeps you updated, and completes delivery and unloading at site.",
  },
];

const cargo = [
  "Power transformers",
  "Heat exchangers & condensers",
  "Reactors & pressure vessels",
  "EOT cranes & structures",
  "Industrial machinery & production lines",
  "Wind turbine components",
  "Defence vehicles & equipment",
  "Storage tanks",
];

const projects = [
  {
    href: "/case-studies/national-defence-project/",
    title: "BMP-II Defence Vehicles to Nyoma, Ladakh",
    text: "Around 3,700 km of ODC transport to near the India–China border, completed in 21 days.",
  },
  {
    href: "/case-studies/Project-5/",
    title: "2 x 100 MT Heat Exchangers to IOCL Panipat",
    text: "Heavy haulage from Mumbai with route engineering, permissions and escorts.",
  },
  {
    href: "/case-studies/Project-2/",
    title: "225 MT Used Machinery, JNPT to Chakan",
    text: "Import clearance and inland ODC transport on hydraulic modular trailers.",
  },
  {
    href: "/case-studies/Project-4/",
    title: "70 MT Heat Condenser Export",
    text: "Inland transport to Chennai Port and breakbulk loading for Santos, Brazil.",
  },
];

const faqs = [
  {
    q: "What is ODC transport?",
    a: "ODC (over dimensional cargo) transport is the movement of loads that are larger or heavier than a standard truck can legally carry, such as transformers, heat exchangers, reactors and heavy machinery. It needs specialised trailers like hydraulic axle and lowbed trailers, route planning, permits and often escorts.",
  },
  {
    q: "What permits are required to move ODC cargo in India?",
    a: "ODC movements generally need permission from the authorities that own the roads on the route, and some moves also need traffic police or escort support. The exact requirements depend on the cargo size, weight and route. Mega Move India handles the permit applications and escort arrangements as part of the job.",
  },
  {
    q: "What trailers do you use for heavy and oversized cargo?",
    a: "We run an in-house fleet of 40 hydraulic axle lines, 18 lowbed trailers, 10 flatbed trailers, 4 heavy-duty pullers and 2 HAV 15 m spacers. The combination is chosen for each load based on its weight, dimensions and the route.",
  },
  {
    q: "How long does an ODC move take?",
    a: "It depends on the distance, route restrictions, permit timelines and the cargo itself. As an example, we completed a defence ODC move of about 3,700 km to Nyoma, Ladakh in 21 days. We give a planned timeline with every quotation.",
  },
  {
    q: "What information do you need for an ODC transport quote?",
    a: "Cargo dimensions (length, width, height), weight, pickup and delivery addresses, how the cargo will be loaded and unloaded, and your required dates. Drawings or photos of the cargo help us plan faster.",
  },
  {
    q: "Where do you provide ODC transport?",
    a: "Across India, including port-to-site moves for imports and site-to-port moves for exports. We have offices in Mumbai (Maharashtra), Vapi (Gujarat), Hisar (Haryana) and Chennai (Tamil Nadu).",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ODC Transport",
    serviceType: "Over dimensional cargo (ODC) transportation and heavy haulage",
    provider: { "@type": "Organization", name: "Mega Move India", url: SITE_URL },
    areaServed: { "@type": "Country", name: "India" },
    url: `${SITE_URL}/odc-transport/`,
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
      { "@type": "ListItem", position: 2, name: "ODC Transport", item: `${SITE_URL}/odc-transport/` },
    ],
  },
];

export default function OdcTransportPage() {
  return (
    <main className="bg-[#f7f7f7]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      {/* HERO */}
      <section className="relative h-[320px] lg:h-[500px] overflow-hidden">
        <img
          src="/images/LandTransportPageHeroImage.webp"
          alt="ODC transport on hydraulic axle trailers by Mega Move India"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl lg:text-6xl font-light mb-2 lg:mb-4">ODC Transport Services in India</h1>
            <p className="text-xs lg:text-lg tracking-[2px] lg:tracking-[3px] uppercase">
              Over Dimensional Cargo • Heavy Haulage • Hydraulic Axle Trailers
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-4 lg:px-8 py-12 lg:py-16 text-center">
        <h2 className="text-2xl lg:text-[42px] font-light text-[#173f74] mb-6">
          Over Dimensional Cargo Transport, Planned End to End
        </h2>
        <p className="text-sm lg:text-lg text-gray-600 leading-7 lg:leading-8 mb-4">
          Mega Move India is an ODC transport company handling over dimensional and over weight cargo across India.
          With roots in heavy haulage since 2005 and our own fleet of hydraulic axle trailers, lowbed trailers and
          heavy-duty pullers, we move transformers, heat exchangers, reactors, cranes, machinery and defence cargo
          from factory to site, port to site and site to port.
        </p>
        <p className="text-sm lg:text-lg text-gray-600 leading-7 lg:leading-8">
          Every ODC move is engineered before it starts: route survey, axle-load planning, permits, escorts and
          lashing are handled by one team, so you deal with a single point of contact from enquiry to delivery.
        </p>
      </section>

      {/* WHAT IS ODC */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <h2 className="text-center text-2xl lg:text-[36px] font-light text-[#173f74] mb-6">What Is ODC Cargo?</h2>
          <p className="text-sm lg:text-lg text-gray-600 leading-7 lg:leading-8 text-center">
            ODC, or over dimensional cargo, is any load whose length, width, height or weight goes beyond what a
            standard truck can legally carry on public roads. Moving it safely needs specialised trailers, a surveyed
            route, permission from road authorities and, often, escort vehicles. Getting any of these wrong causes
            delays at check posts, damaged infrastructure or damaged cargo, which is why ODC transport is a specialist
            job.
          </p>
        </div>
      </section>

      {/* FLEET */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <h2 className="text-center text-2xl lg:text-[36px] font-light text-[#173f74] mb-3">Our In-House ODC Fleet</h2>
        <p className="text-center text-gray-600 mb-8">
          Owned equipment means faster mobilisation and full control over every move.{" "}
          <Link href="/equipment/" className="text-[#173f74] underline">
            See the full equipment list
          </Link>
          .
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {fleet.map((item) => (
            <div key={item.label} className="bg-white border border-gray-200 p-5 text-center">
              <div className="text-3xl lg:text-4xl font-semibold text-[#173f74]">{item.value}</div>
              <div className="text-sm text-gray-600 mt-2">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <h2 className="text-center text-2xl lg:text-[36px] font-light text-[#173f74] mb-10">How We Move ODC Cargo</h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="border border-gray-200 p-6">
                <div className="text-sm font-semibold text-[#c41e1e] mb-2">STEP {i + 1}</div>
                <h3 className="text-lg lg:text-xl text-[#173f74] mb-2">{step.title}</h3>
                <p className="text-sm lg:text-base text-gray-600 leading-6 lg:leading-7">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CARGO */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 py-12 lg:py-16 text-center">
        <h2 className="text-2xl lg:text-[36px] font-light text-[#173f74] mb-8">ODC Cargo We Transport</h2>
        <ul className="flex flex-wrap justify-center gap-3">
          {cargo.map((c) => (
            <li key={c} className="bg-white border border-gray-200 px-5 py-3 text-gray-700">
              {c}
            </li>
          ))}
        </ul>
        <p className="text-gray-600 mt-8">
          Serving{" "}
          <Link href="/industries/power-energy/" className="text-[#173f74] underline">power & energy</Link>,{" "}
          <Link href="/industries/oil-gas/" className="text-[#173f74] underline">oil & gas</Link>,{" "}
          <Link href="/industries/infrastructure/" className="text-[#173f74] underline">infrastructure</Link>,{" "}
          <Link href="/industries/metal-mining/" className="text-[#173f74] underline">mining</Link> and{" "}
          <Link href="/industries/industrial-plants/" className="text-[#173f74] underline">industrial plants</Link>.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <h2 className="text-center text-2xl lg:text-[36px] font-light text-[#173f74] mb-8">Recent ODC Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((p) => (
              <Link key={p.href} href={p.href} className="border border-gray-200 p-6 hover:border-[#173f74]">
                <h3 className="text-lg text-[#173f74] mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="max-w-5xl mx-auto px-4 lg:px-8 py-12 lg:py-16 text-center">
        <h2 className="text-2xl lg:text-[36px] font-light text-[#173f74] mb-6">ODC Transport Across India</h2>
        <p className="text-sm lg:text-lg text-gray-600 leading-7 lg:leading-8">
          We run ODC moves nationwide, including port-to-site transport from JNPT, Chennai and other ports,
          from our offices in <strong>Mumbai</strong> (Sakinaka, Andheri East), <strong>Vapi, Gujarat</strong>,{" "}
          <strong>Hisar, Haryana</strong> and <strong>Chennai, Tamil Nadu</strong>. For heavy lift work beyond road transport, see our{" "}
          <Link href="/services/land-transport/" className="text-[#173f74] underline">land transport</Link>,{" "}
          <Link href="/services/transport-engineering/" className="text-[#173f74] underline">transport engineering</Link> and{" "}
          <Link href="/services/project-forwarding/" className="text-[#173f74] underline">project forwarding</Link> services.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <h2 className="text-center text-2xl lg:text-[36px] font-light text-[#173f74] mb-8">ODC Transport FAQs</h2>
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

      {/* CTA */}
      <section className="bg-[#173f74] text-white text-center px-4 py-12 lg:py-16">
        <h2 className="text-2xl lg:text-4xl font-light mb-4">Get an ODC Transport Quote</h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Send your cargo dimensions, weight and route. Our project team will reply with a transport plan and
          quotation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact/" className="inline-block bg-[#c41e1e] text-white px-10 py-4 text-lg font-semibold rounded">
            Request a Quote
          </Link>
          <a href="tel:+919321399970" className="text-lg text-white/90 hover:text-white">
            or call +91 93213 99970
          </a>
        </div>
      </section>
    </main>
  );
}
