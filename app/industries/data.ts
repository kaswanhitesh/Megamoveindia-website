export interface Industry {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  image: string;
  services: { label: string; href: string }[];
  caseStudies: { label: string; href: string }[];
}

const SERVICE = {
  landTransport: { label: "ODC & Heavy Lift Transportation", href: "/services/land-transport/" },
  transportEngineering: { label: "Transport Engineering & Route Surveys", href: "/services/transport-engineering/" },
  projectForwarding: { label: "Project Forwarding & Breakbulk", href: "/services/project-forwarding/" },
  oceanFreight: { label: "Ocean Freight", href: "/services/ocean-freight/" },
  factoryRelocation: { label: "Factory Relocation", href: "/services/factory-relocation/" },
  rentals: { label: "Equipment Rentals & Warehousing", href: "/services/rentals-warehousing/" },
  supplyChain: { label: "Logistics & Supply Chain Solutions", href: "/services/logistics-supply-chain/" },
};

const CASE = {
  machineryImport: { label: "225MT Used Machinery Import", href: "/case-studies/Project-2/" },
  factoryRelocation: { label: "Factory Relocation, Germany to India", href: "/case-studies/Project-3/" },
  heatCondenser: { label: "70MT Heat Condenser Export to Brazil", href: "/case-studies/Project-4/" },
  heatExchangers: { label: "2 x 100MT Heat Exchangers to IOCL Panipat", href: "/case-studies/Project-5/" },
  chemicalTanks: { label: "Chemical Storage Tanks Export", href: "/case-studies/Project-6/" },
  eotCrane: { label: "35M EOT Crane Export", href: "/case-studies/Project-8/" },
  flatRackImport: { label: "8 x 32 MT Machinery Import for Tata Power", href: "/case-studies/Project-9/" },
  xraySystems: { label: "Used X-Ray Systems for ONGC Barmer", href: "/case-studies/Project-7/" },
};

export const INDUSTRIES: Record<string, Industry> = {
  "industrial-plants": {
    slug: "industrial-plants",
    name: "Industrial Plants",
    metaTitle: "Industrial Plant Logistics & Factory Relocation | Mega Move India",
    metaDescription:
      "End-to-end factory relocations, heavy haulage for industrial reactors and assembly-line machinery, with route engineering and installation support across India.",
    intro:
      "We specialize in end-to-end factory relocations, heavy haulage for massive industrial reactors, and precise installation services for critical manufacturing assembly lines.",
    image: "/images/industries/industry_industrial_plants.webp",
    services: [SERVICE.factoryRelocation, SERVICE.landTransport, SERVICE.transportEngineering, SERVICE.projectForwarding],
    caseStudies: [CASE.flatRackImport, CASE.factoryRelocation, CASE.eotCrane],
  },
  infrastructure: {
    slug: "infrastructure",
    name: "Infrastructure",
    metaTitle: "Infrastructure Project Logistics | Bridge Girders & Pre-cast | Mega Move India",
    metaDescription:
      "Heavy transport and transport engineering for infrastructure projects: bridge girders, highway works, TBMs and pre-cast concrete structures across India.",
    intro:
      "We provide comprehensive logistics and transport engineering solutions for major infrastructure projects, bridge constructions, highway developments, and pre-cast concrete transports.",
    image: "/images/industries/industry_infrastructure.webp",
    services: [SERVICE.landTransport, SERVICE.transportEngineering, SERVICE.projectForwarding, SERVICE.rentals],
    caseStudies: [],
  },
  "metal-mining": {
    slug: "metal-mining",
    name: "Metal & Mining",
    metaTitle: "Mining Equipment Transport & Heavy Haulage | Mega Move India",
    metaDescription:
      "Extreme-weight haulage for the mining sector: dump trucks, large excavators, stacker-reclaimers and ore processing plants, moved with engineered transport plans.",
    intro:
      "We provide extreme-weight haulage and specialized cargo logistics for mining dump trucks, large excavators, stacker-reclaimers, and ore processing plants.",
    image: "/images/industries/industry_metal_mining.webp",
    services: [SERVICE.landTransport, SERVICE.transportEngineering, SERVICE.projectForwarding, SERVICE.oceanFreight],
    caseStudies: [],
  },
  "oil-gas": {
    slug: "oil-gas",
    name: "Oil & Gas",
    metaTitle: "Oil & Gas Project Logistics | Refinery & Pipeline Cargo | Mega Move India",
    metaDescription:
      "Project logistics for the oil and gas sector: refinery reactors, heat exchangers, drilling rigs and heavy pipelines, from route survey to site delivery.",
    intro:
      "We deliver precise logistics for the energy sector, including offshore drilling rigs, refinery reactors, heat exchangers, and heavy pipelines.",
    image: "/images/industries/industry_oil_gas.webp",
    services: [SERVICE.landTransport, SERVICE.projectForwarding, SERVICE.oceanFreight, SERVICE.transportEngineering],
    caseStudies: [CASE.heatExchangers, CASE.xraySystems, CASE.chemicalTanks],
  },
  "power-energy": {
    slug: "power-energy",
    name: "Power & Energy",
    metaTitle: "Power & Energy Logistics | Transformers & Wind Blades | Mega Move India",
    metaDescription:
      "Engineered transport for the power sector: wind turbine blades, high-voltage transformers, generator stators and heat exchangers, by road and sea.",
    intro:
      "We engineer transport configurations for the power grid, including massive wind turbine blades, generator stators, heat exchangers, and heavy nuclear power components.",
    image: "/images/industries/industry_power_energy.webp",
    services: [SERVICE.landTransport, SERVICE.transportEngineering, SERVICE.projectForwarding, SERVICE.oceanFreight],
    caseStudies: [CASE.flatRackImport, CASE.heatCondenser],
  },
  "rental-warehousing": {
    slug: "rental-warehousing",
    name: "Rental & Warehousing",
    metaTitle: "Equipment Rental & Warehousing for Projects | Mega Move India",
    metaDescription:
      "Commercial equipment rentals, truck-mounted manlifts, aerial work platforms, secure warehousing and cargo loading/unloading support for project logistics.",
    intro:
      "We provide flexible commercial equipment rentals, truck mounted manlifts, aerial work platforms, secure warehousing services, and professional cargo loading/unloading support.",
    image: "/images/RentalsCardHeroImage.webp",
    services: [SERVICE.rentals, SERVICE.supplyChain],
    caseStudies: [],
  },
};
