import type { Metadata } from "next";
import IndustryPlaceholder from "../IndustryPlaceholder";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Oil & Gas Logistics | Mega Move India",
  description: "Specialized transport and movement for long-span pipelines, drilling rigs, and massive refinery vessels by Mega Move India.",
};

export default function OilGasPage() {
  return (
    <IndustryPlaceholder
      title="Oil & Gas"
      description="We deliver precise logistics for the energy sector, including offshore drilling rigs, refinery reactors, heat exchangers, and heavy pipelines."
    />
  );
}
