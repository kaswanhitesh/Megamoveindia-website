import { pageMetadata } from "@/app/lib/seo";
import Link from "next/link";

import PageGlow from "@/app/components/PageGlow";
export const metadata = pageMetadata({
  path: "/case-studies/",
  title: "Case Studies | Project Cargo & Heavy Lift Projects | Mega Move India",
  description: "Project cargo, heavy lift and ODC case studies by Mega Move India: defence cargo, factory relocation, breakbulk exports, heat exchangers and EOT cranes.",
});


export default function CaseStudies() {
  const projects = [
  {
  slug: "national-defence-project",
  category: "DEFENCE CARGO PROJECT",
  title: "BMP-II Vehicle Transportation",
  image: "/images/NationalDefenceProjectCardImage.webp",
},

{
  slug: "Project-2",
  category: "PROJECT CARGO IMPORT",
  title: "Industrial Machinery",
  image: "/images/225MTUsedMachineryImportCardImage.webp",
},

{
  slug: "Project-3",
  category: "FACTORY RELOCATION",
  title: "Manufacturing Plant Transfer",
  image: "/images/FactoryRelocationGermanyToIndiaCardImage.webp",
},

{
  slug: "Project-4",
  category: "BREAKBULK EXPORTS",
  title: "Heat Condenser Shipment",
  image: "/images/Casestudies/Project-4/Project4_HeroImage.webp",
},

{
  slug: "Project-5",
  category: "HEAVY HAUL TRANSPORTATION",
  title: "2x100MT Heat Exchanger",
  image: "/images/Casestudies/Project-5/Project5_Cardheroimage.webp",
},

{
  slug: "Project-6",
  category: "PROJECT CARGO EXPORT",
  title: "Chemical Storage Tanks",
  image: "/images/Casestudies/Project-6/Project6_Gallery10.webp",
},

{
  slug: "Project-7",
  category: "SPECIALIZED EQUIPMENT IMPORT",
  title: "X-Ray Systems",
  image: "/images/Casestudies/Project-7/Project7_Gallery3.webp",
},

{
  slug: "Project-8",
  category: "HEAVY LIFT EXPORTS",
  title: "EOT Crane Shipment",
  image: "/images/Casestudies/Project-8/Project8_Gallery1.webp",
},

{
  slug: "Project-9",
  category: "POWER SECTOR IMPORTS",
  title: "8 x 32 MT Machinery Import",
  image: "/images/Casestudies/Project-9/Project9_Gallery2.webp",
},

{
  slug: "Project-10",
  category: "INFRASTRUCTURE / METRO",
  title: "Kanpur Metro TBM Transport",
  image: "/images/Casestudies/Project-10/Project10_Gallery3.webp",
},
];
  
  const networks = [
  {
    name: "AITWA",
    logo: "/images/Networks/icons/AITWA.webp",
  },
  {
    name: "MMA",
    logo: "/images/Networks/icons/MMA.webp",
  },
  {
    name: "HTOA",
    logo: "/images/Networks/icons/HTOA.webp",
  },
  {
    name: "JC Trans",
    logo: "/images/Networks/icons/JCElite.webp",
  },
  {
    name: "JC Projects",
    logo: "/images/Networks/icons/JCProjects.webp",
  },
  {
    name: "FFFAI",
    logo: "/images/Networks/icons/FFFAI.webp",
  },
  {
  name: "FIATA",
  logo: "/images/Networks/icons/FIATA.webp",
  size: "small",
},
];

  const customers = [
    { name: "Reliance Industries Limited", logo: "/images/Customers/reliance.webp" },
    { name: "Royal IHC", logo: "/images/Customers/royal-ihc.webp" },
    { name: "Zeeco", logo: "/images/Customers/zeeco.webp" },
    { name: "Transformers & Rectifiers (India) Ltd", logo: "/images/Customers/transformers-rectifiers.webp" },
    { name: "Jasmino", logo: "/images/Customers/jasmino.webp" },
  ];

  return (
    <main className="isolate relative min-h-screen bg-[#f7f7f7] overflow-hidden">
      <PageGlow />
      <div className="max-w-7xl mx-auto px-4 lg:px-16 py-10 lg:py-16">
        <h1 className="text-center text-[34px] lg:text-[52px] font-light text-gray-900">
          OUR SUCCESS STORIES
        </h1>

        <p className="text-center text-sm lg:text-xl text-gray-500 mt-4 mb-10 lg:mb-14">
          Showcasing Mega Move India&rsquo;s Expertise in Project Logistics,
          Heavy Lift Transportation and Freight Forwarding
        </p>

        {/* PROJECTS */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {projects.map((project, index) => (
  <Link
    key={index}
    href={`/case-studies/${project.slug}`}
    prefetch={false}
    className="
      group
      bg-white
      rounded-lg
      overflow-hidden
      shadow-sm
      hover:shadow-2xl
      transition-all
      duration-500
      block
    "
  >

    <img
      src={project.image}
      alt={project.title}
      className="
        w-full
        h-[140px]
        md:h-[220px]
        lg:h-[260px]
        object-cover
        grayscale
        hover:grayscale-0
        transition-all
        duration-700
      "
    />

    <div className="h-[110px] px-4 flex flex-col justify-center items-center text-center">

      <h2
        className="
          font-bold
          text-black
          text-[14px]
          lg:text-[18px]
          leading-6
          transition-colors
          duration-300
          group-hover:text-[#f4b400]
        "
      >
        {project.category}
      </h2>

      <p
        className="
          mt-2
          text-gray-600
          text-[13px]
          lg:text-[15px]
          leading-6
          transition-colors
          duration-300
          group-hover:text-[#f4b400]
        "
      >
        {project.title}
      </p>

    </div>

  </Link>
))}
        </div>

        {/* NETWORKS */}

        <div className="mt-16 lg:mt-24">

  <h2 className="text-center text-[30px] lg:text-[42px] font-light mb-8 lg:mb-10">
    OUR NETWORKS
  </h2>

  <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
    {networks.map((network, index) => (
      <div
        key={index}
        className="h-[120px] lg:h-[140px] w-[150px] lg:w-[220px] flex items-center justify-center"
      >
        <img
          src={network.logo}
          alt={network.name}
          className={`object-contain w-auto h-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.05)] ${
            network.size === "small" ? "max-w-[140px] max-h-[65px]" : "max-w-[180px] max-h-[80px]"
          }`}
        />
      </div>
    ))}
  </div>

</div>

        {/* CUSTOMERS */}

        <div className="mt-16 lg:mt-24 mb-16 lg:mb-24">
          <h2 className="text-center text-[30px] lg:text-[42px] font-light mb-8 lg:mb-10">
            OUR CUSTOMERS
          </h2>

          <div>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
              {customers.map((customer) => (
                <div
                  key={customer.name}
                  className="flex h-[90px] w-[150px] items-center justify-center rounded-xl bg-white p-4 shadow-sm lg:h-[120px] lg:w-[220px] lg:p-6"
                >
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    title={customer.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
