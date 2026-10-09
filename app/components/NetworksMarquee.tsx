const networks = [
  { name: "AITWA", logo: "/images/Networks/icons/AITWA.webp" },
  { name: "FFFAI", logo: "/images/Networks/icons/FFFAI.webp" },
  { name: "FIATA", logo: "/images/Networks/icons/FIATA.webp" },
  { name: "HTOA – Hydraulic Trailer Owners Association", logo: "/images/Networks/icons/HTOA.webp" },
  { name: "JCtrans JC Elite", logo: "/images/Networks/icons/JCElite.webp" },
  { name: "JCtrans JC Projects", logo: "/images/Networks/icons/JCProjects.webp" },
  { name: "Mega Move Alliance", logo: "/images/Networks/icons/MMA.webp" },
];

// Logos scroll right to left in a seamless loop: the list is rendered four times and the
// track moves by exactly half (two copies, wider than any screen), see .networks-track in globals.css.
export default function NetworksMarquee() {
  return (
    <section aria-labelledby="networks-heading" className="bg-white py-14 text-center lg:py-20">
      <h2
        id="networks-heading"
        className="mb-10 text-[1.75rem] font-extrabold uppercase leading-[1.2] tracking-[0.02em] text-zinc-900 lg:mb-12 lg:text-[2.25rem]"
      >
        Our Networks
      </h2>
      <div className="networks-marquee overflow-hidden">
        <ul className="networks-track flex w-max items-center">
          {[0, 1, 2, 3].map((copy) =>
            networks.map((network) => (
              <li
                key={`${copy}-${network.name}`}
                aria-hidden={copy > 0 ? true : undefined}
                className="flex h-24 w-44 shrink-0 items-center justify-center px-6 lg:h-28 lg:w-60 lg:px-8"
              >
                <img
                  src={network.logo}
                  alt={copy === 0 ? network.name : ""}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </li>
            )),
          )}
        </ul>
      </div>
    </section>
  );
}
