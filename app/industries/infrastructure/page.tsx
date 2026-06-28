import type { Metadata } from "next";
import IndustryPlaceholder from "../IndustryPlaceholder";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Infrastructure Logistics | Mega Move India",
  description: "Specialized logistics and heavy transport solutions for major infrastructure and construction projects across India.",
};

export default function InfrastructurePage() {
  return (
    <IndustryPlaceholder
      title="Infrastructure"
      description="We provide comprehensive logistics and transport engineering solutions for major infrastructure projects, bridge constructions, highway developments, and pre-cast concrete transports."
    />
  );
}
