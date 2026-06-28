import type { Metadata } from "next";
import IndustryPlaceholder from "../IndustryPlaceholder";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Power & Energy Logistics | Mega Move India",
  description: "Specialized logistics and haulage for wind turbine blades, high-voltage transformers, and generator stators.",
};

export default function PowerEnergyPage() {
  return (
    <IndustryPlaceholder
      title="Power & Energy"
      description="We engineer transport configurations for the power grid, including massive wind turbine blades, generator stators, heat exchangers, and heavy nuclear power components."
    />
  );
}
