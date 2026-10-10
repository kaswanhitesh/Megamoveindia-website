import Link from "next/link";
import type { Industry } from "./data";

import PageGlow from "@/app/components/PageGlow";
export default function IndustryPage({ industry }: { industry: Industry }) {
  return (
    <main className="isolate relative bg-[#f7f7f7]">
      <PageGlow />
      <section className="relative h-[280px] lg:h-[500px]">
        <img src={industry.image} alt={`${industry.name} logistics`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-white text-3xl lg:text-[64px] tracking-[3px] lg:tracking-[8px] font-light text-center uppercase">
            {industry.name}
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 lg:px-8 py-12 lg:py-16 text-center">
        <p className="text-base lg:text-xl text-gray-700 leading-8 lg:leading-10">{industry.intro}</p>
      </section>

      <section className="max-w-6xl mx-auto px-4 lg:px-8 pb-12 lg:pb-16">
        <h2 className="text-center text-2xl lg:text-4xl font-light text-[#173f74] mb-8">How We Support {industry.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {industry.services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="flex items-center justify-between bg-white border border-gray-200 px-6 py-5 text-[#173f74] hover:border-[#173f74]"
            >
              <span className="text-base lg:text-lg">{service.label}</span>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      {industry.caseStudies.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 lg:px-8 pb-12 lg:pb-16">
          <h2 className="text-center text-2xl lg:text-4xl font-light text-[#173f74] mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {industry.caseStudies.map((cs) => (
              <Link
                key={cs.href}
                href={cs.href}
                className="bg-white border border-gray-200 px-6 py-5 text-center text-gray-800 hover:border-[#173f74]"
              >
                {cs.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="bg-[#173f74] text-white text-center px-4 py-12 lg:py-16">
        <h2 className="text-2xl lg:text-4xl font-light mb-4">Discuss Your {industry.name} Project</h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Share your cargo details and our project team will come back with a transport plan and quotation.
        </p>
        <Link href="/contact/" className="inline-block bg-[#c41e1e] text-white px-10 py-4 text-lg font-semibold rounded">
          Request a Quote
        </Link>
      </section>
    </main>
  );
}
