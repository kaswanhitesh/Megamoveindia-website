// Dot map of India with our office locations. The dots are a static SVG
// (public/images/india-dot-map.svg, generated from OpenStreetMap boundaries in
// the Government of India depiction); markers share its 566 x 630 coordinate space.
const VIEW_W = 566;
const VIEW_H = 630;

const offices = [
  { city: "Mumbai", region: "Maharashtra", note: "Head Office", x: 99.9, y: 367.9, labelSide: "left" },
  { city: "Vapi", region: "Gujarat", note: "Branch Office", x: 100.2, y: 342.6, labelSide: "left" },
  { city: "Hisar", region: "Haryana", note: "Branch Office", x: 152.5, y: 167.0, labelSide: "right" },
  { city: "Chennai", region: "Tamil Nadu", note: "Branch Office", x: 237.1, y: 488.2, labelSide: "right" },
] as const;

export default function OfficeMap() {
  return (
    <section aria-labelledby="offices-heading" className="bg-white pb-16 pt-4 text-center lg:pb-24">
      <h2
        id="offices-heading"
        className="mb-4 text-[1.75rem] font-extrabold uppercase leading-[1.2] tracking-[0.02em] text-zinc-900 lg:text-[2.25rem]"
      >
        Our Offices
      </h2>
      <p className="mx-auto mb-10 max-w-2xl px-6 text-[1.05rem] font-light leading-[1.7] text-zinc-600">
        Four offices across India, close to the country&rsquo;s main ports and industrial corridors.
      </p>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
        <div className="relative w-full max-w-[520px]">
          <img src="/images/india-dot-map.svg" alt="" aria-hidden="true" className="block h-auto w-full" />
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="absolute inset-0 h-full w-full overflow-visible"
            role="img"
            aria-label="Map of India showing Mega Move India offices in Mumbai, Vapi, Hisar and Chennai"
          >
            {offices.map((o) => (
              <g key={o.city}>
                <circle cx={o.x} cy={o.y} r="9" className="office-pulse" fill="#c41e1e" />
                <circle cx={o.x} cy={o.y} r="6.5" fill="#c41e1e" stroke="#fff" strokeWidth="2" />
                <text
                  x={o.labelSide === "left" ? o.x - 14 : o.x + 14}
                  y={o.y + 6}
                  textAnchor={o.labelSide === "left" ? "end" : "start"}
                  className="fill-zinc-900 text-[19px] font-bold"
                  paintOrder="stroke"
                  stroke="#fff"
                  strokeWidth="5"
                >
                  {o.city}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <ul className="grid w-full max-w-md grid-cols-2 gap-4 text-left lg:grid-cols-1">
          {offices.map((o) => (
            <li key={o.city} className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c41e1e]" aria-hidden="true" />
              <span>
                <span className="block font-semibold text-zinc-900">{o.city}</span>
                <span className="block text-sm text-zinc-600">
                  {o.region} · {o.note}
                </span>
              </span>
            </li>
          ))}
          <li className="col-span-2 lg:col-span-1">
            <a href="/contact/" className="text-sm font-semibold text-[#173f74] underline underline-offset-4">
              Office addresses &amp; contacts →
            </a>
          </li>
        </ul>
      </div>

      <p className="mt-8 px-6 text-[11px] text-zinc-400">
        Map data ©{" "}
        <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="underline">
          OpenStreetMap contributors
        </a>
        . Not to scale.
      </p>
    </section>
  );
}
