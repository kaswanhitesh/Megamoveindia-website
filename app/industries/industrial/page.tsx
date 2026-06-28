import type { Metadata } from "next";
import IndustryPlaceholder from "../IndustryPlaceholder";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Industrial Plants Logistics | Mega Move India",
  description: "Specialized factory relocations, heavy reactors lift, and critical assembly line haulage solutions by Mega Move India.",
};

export default function IndustrialPage() {
  return (
    <IndustryPlaceholder
      title="Industrial Plants"
      description="We specialize in end-to-end factory relocations, heavy haulage for massive industrial reactors, and precise installation services for critical manufacturing assembly lines."
    />
  );
}
