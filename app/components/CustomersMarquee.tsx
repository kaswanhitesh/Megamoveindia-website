import { customers, type Customer } from "@/app/lib/customers";

// Two rows of customer logos scrolling right to left, built like NetworksMarquee: each row is
// rendered four times and the track moves by exactly half (see .customers-track in globals.css).
const rows: Customer[][] = [
  customers.slice(0, Math.ceil(customers.length / 2)),
  customers.slice(Math.ceil(customers.length / 2)),
];

export default function CustomersMarquee() {
  return (
    <section aria-labelledby="customers-heading" className="relative bg-white py-14 text-center lg:py-20">
      <h2
        id="customers-heading"
        className="mb-10 text-[1.75rem] font-extrabold uppercase leading-[1.2] tracking-[0.02em] text-zinc-900 lg:mb-12 lg:text-[2.25rem]"
      >
        Our Customers
      </h2>
      <div className="customers-marquee space-y-8 overflow-hidden lg:space-y-10">
        {rows.map((row, r) => (
          <ul key={r} className={`customers-track flex w-max items-center ${r === 1 ? "customers-track-2" : ""}`}>
            {[0, 1, 2, 3].map((copy) =>
              row.map((customer) => (
                <li
                  key={`${copy}-${customer.logo}`}
                  aria-hidden={copy > 0 ? true : undefined}
                  className="flex h-16 w-40 shrink-0 items-center justify-center px-6 lg:h-20 lg:w-56 lg:px-8"
                >
                  <img
                    src={customer.logo}
                    alt={copy === 0 ? customer.name : ""}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </li>
              )),
            )}
          </ul>
        ))}
      </div>
    </section>
  );
}
