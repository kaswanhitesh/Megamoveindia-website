import type { Metadata } from "next";
import IndustryPlaceholder from "../IndustryPlaceholder";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Rental & Warehousing | Mega Move India",
  description: "Specialized rental equipment and secure warehousing solutions for commercial and project logistics across India.",
};

export default function RentalWarehousingPage() {
  return (
    <IndustryPlaceholder
      title="Rental & Warehousing"
      description="We provide flexible commercial equipment rentals, truck mounted manlifts, aerial work platforms, secure warehousing services, and professional cargo loading/unloading support."
    />
  );
}
