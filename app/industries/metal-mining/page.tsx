import type { Metadata } from "next";
import IndustryPlaceholder from "../IndustryPlaceholder";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Metals & Mining Logistics | Mega Move India",
  description: "Specialized heavy transport and haulage solutions for mining machinery, dump trucks, and resource processing units.",
};

export default function MetalMiningPage() {
  return (
    <IndustryPlaceholder
      title="Metal & Mining"
      description="We provide extreme-weight haulage and specialized cargo logistics for mining dump trucks, large excavators, stacker-reclaimers, and ore processing plants."
    />
  );
}
