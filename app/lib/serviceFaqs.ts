import type { Faq } from "@/app/components/ServiceFaq";

// Questions buyers ask search engines and AI assistants, answered with facts already
// published on this site (services, fleet, offices, case studies). Keep answers short,
// specific and self-contained so they can be quoted on their own.

const OFFICES = "Mumbai (head office), Vapi, Hisar and Chennai";

export const serviceFaqs: Record<string, { name: string; serviceType: string; faqs: Faq[] }> = {
  "ocean-freight": {
    name: "Ocean Freight",
    serviceType: "Ocean freight forwarding: FCL, LCL, breakbulk and project cargo",
    faqs: [
      {
        q: "What ocean freight services does Mega Move India offer?",
        a: "Full container load (FCL), less than container load (LCL) consolidation, breakbulk shipping for heavy and non-containerised cargo, project cargo, import and export shipping, port handling and customs clearance.",
      },
      {
        q: "What is the difference between FCL, LCL and breakbulk?",
        a: "FCL means your cargo uses a whole container. LCL means your cargo shares a container with other shippers, which costs less for small shipments. Breakbulk is for cargo too large or heavy for a container, which is loaded directly onto the ship.",
      },
      {
        q: "Can you ship oversized or heavy cargo by sea?",
        a: "Yes. We ship heavy and out-of-gauge cargo as breakbulk or on flat racks. Examples include 3 chemical storage tanks from Mundra to Dar es Salaam, a 70 MT heat condenser from Chennai to Santos, Brazil, and a 35 metre EOT crane from Mumbai to Houston, USA.",
      },
      {
        q: "How do I get an ocean freight quote?",
        a: "Email oceanfreight@megamoveindia.com with the cargo description, dimensions, weight, port or address of origin and destination, Incoterm and your ready date.",
      },
    ],
  },
  "air-freight": {
    name: "Air Freight",
    serviceType: "International air freight forwarding and air charter",
    faqs: [
      {
        q: "What air freight services does Mega Move India offer?",
        a: "Import and export air freight, air charter for urgent or oversized cargo, project cargo airlift, door-to-door delivery and customs clearance.",
      },
      {
        q: "When should I choose air freight over ocean freight?",
        a: "Choose air freight when time matters more than cost, for example urgent spare parts, plant shutdown materials or high-value cargo. For heavy or large cargo without an urgent deadline, ocean freight usually costs much less.",
      },
      {
        q: "Can you charter an aircraft for oversized cargo?",
        a: "Yes. We arrange dedicated charter aircraft for urgent, oversized and critical cargo that does not fit scheduled services.",
      },
      {
        q: "How do I get an air freight quote?",
        a: "Email airfreight@megamoveindia.com with the number of pieces, dimensions and weight of each, the pickup and delivery locations, and the date the cargo is ready.",
      },
    ],
  },
  "project-forwarding": {
    name: "Project Forwarding",
    serviceType: "Project cargo forwarding: breakbulk, out-of-gauge and heavy lift logistics",
    faqs: [
      {
        q: "What is project forwarding?",
        a: "Project forwarding is planning and managing the complete movement of large, heavy or high-value cargo for an industrial or infrastructure project, from the factory to the site, across sea, air and road, including engineering, customs and delivery.",
      },
      {
        q: "What is out-of-gauge (OOG) cargo?",
        a: "Out-of-gauge cargo is cargo larger than the inside of a standard container. It moves on flat racks or open-top containers, or as breakbulk, and usually needs lashing and stowage planning.",
      },
      {
        q: "What project cargo has Mega Move India handled?",
        a: "Examples include two tunnel boring machines (400 MT) from Kandla Port to the Kanpur Metro site, six 42 MT X-ray systems from Germany to ONGC Barmer, eight 32 MT machinery packages from Hamburg to Bangalore for Tata Power, and 2 x 100 MT heat exchangers from Mumbai to IOCL Panipat.",
      },
      {
        q: "How do I start a project cargo enquiry?",
        a: "Email projects@megamoveindia.com with the packing list or cargo drawings, weights, origin and destination, Incoterm and project timeline.",
      },
    ],
  },
  transshipment: {
    name: "Transshipment",
    serviceType: "Transshipment, cargo routing and hub port coordination",
    faqs: [
      {
        q: "What is transshipment?",
        a: "Transshipment is moving cargo from one vessel or transport mode to another at an intermediate hub on the way to its final destination, used when there is no direct service or a different route is cheaper or faster.",
      },
      {
        q: "Do you handle breakbulk and project cargo transshipment?",
        a: "Yes. Along with container transshipment, we handle heavy lift and breakbulk cargo transfers between vessels and transport modes, and plan routing for oversized project cargo.",
      },
      {
        q: "How do I get a transshipment quote?",
        a: "Email transshipment@megamoveindia.com with the cargo details, origin, destination and preferred routing or transit time.",
      },
    ],
  },
  "logistics-supply-chain": {
    name: "Logistics & Supply Chain",
    serviceType: "Customs clearance, port handling, documentation and cargo supervision",
    faqs: [
      {
        q: "Does Mega Move India handle customs clearance in India?",
        a: "Yes. We handle import and export customs clearance with the documentation and compliance support it needs, and can combine it with port handling and inland delivery.",
      },
      {
        q: "What are dunnage and lashing?",
        a: "Dunnage is the timber or other material placed under and around cargo to support and protect it. Lashing is the chains, belts or wires that hold cargo in place during transport. Both are planned to suit the cargo's weight and shape.",
      },
      {
        q: "Will I get updates on my shipment?",
        a: "Yes. We share regular status updates and have people on the ground to supervise the cargo at ports and sites.",
      },
      {
        q: "How do I contact the logistics team?",
        a: "Email logistics@megamoveindia.com with your shipment details.",
      },
    ],
  },
  "factory-relocation": {
    name: "Factory Relocation",
    serviceType: "Factory and industrial plant relocation, machinery dismantling and shifting",
    faqs: [
      {
        q: "What does a factory relocation include?",
        a: "Site inspection and planning, dismantling of machinery and production lines, export packing and preservation, loading and container stuffing, transport by road and sea, unloading at the new site and installation support.",
      },
      {
        q: "Can you relocate a factory from abroad to India?",
        a: "Yes. We have relocated industrial machinery from Germany to Navi Mumbai, covering dismantling, packing, international transport and delivery.",
      },
      {
        q: "How do I plan a factory relocation with you?",
        a: "Email projects@megamoveindia.com with the machinery list, current and new site locations and your target dates. We start with a site inspection.",
      },
    ],
  },
  "transport-engineering": {
    name: "Transport Engineering",
    serviceType: "Route surveys, bridge analysis, cargo securing and heavy lift planning",
    faqs: [
      {
        q: "What is a route survey for heavy cargo?",
        a: "A route survey checks the full road route for anything that limits a heavy or oversized load, such as bridges, overhead wires, bends, gradients and road width, and plans how to clear each constraint before the move.",
      },
      {
        q: "Why is bridge analysis needed?",
        a: "A very heavy load can exceed what a bridge on the route is built to carry. Bridge analysis checks each bridge's capacity against the axle loads of the planned trailer, so the route and trailer setup can be changed if needed.",
      },
      {
        q: "What transport engineering services do you provide?",
        a: "Route surveys, bridge analysis, transport feasibility studies, cargo securing (lashing and dunnage) calculations, lifting plans and crane selection, and engineering support for complex project moves.",
      },
      {
        q: "How do I request a route survey?",
        a: "Email engineering@megamoveindia.com with the cargo dimensions and weight and the origin and destination.",
      },
    ],
  },
  "rentals-warehousing": {
    name: "Equipment Rentals & Warehousing",
    serviceType: "Truck mounted manlift and aerial lift rental, warehousing and cargo handling",
    faqs: [
      {
        q: "What equipment can I rent from Mega Move India?",
        a: "Truck mounted manlifts, aerial lifts (aerial work platforms) and material handling equipment with trained operators, for short-term or long-term projects.",
      },
      {
        q: "Do you offer warehousing for project cargo?",
        a: "Yes. We provide secure storage for project cargo, industrial equipment and commercial goods, with loading and unloading of heavy and oversized items.",
      },
      {
        q: "How do I book equipment or warehouse space?",
        a: `Email rentals@megamoveindia.com with the equipment or space you need, the location and the duration. We have offices in ${OFFICES}.`,
      },
    ],
  },
};
