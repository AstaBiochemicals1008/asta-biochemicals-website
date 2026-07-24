import type { Metadata } from "next";
import "@/styles/chemistry-solutions.css";

import Hero from "@/components/chemistry-solutions/Hero";
import DiscoveryRow from "@/components/chemistry-solutions/DiscoveryRow";
import CustomSynthesisRow from "@/components/chemistry-solutions/CustomSynthesisRow";
import SpecialtyRow from "@/components/chemistry-solutions/SpecialtyRow";
import Industries from "@/components/chemistry-solutions/Industries";

export const metadata: Metadata = {
  alternates: { canonical: "/chemistry-solutions" },
  title: "Discovery Chemistry",
  description:
    "From discovery through process development and scale-up, ASTA partners with pharmaceutical, biotechnology, fragrance and specialty chemical industries to deliver excellence at every stage.",
};

export default function ChemistrySolutionsPage() {
  // asta-page-chemistry restores this prototype's 48px / no-scale reveal.
  return (
    <div className="asta-page-chemistry">
      <Hero />
      <DiscoveryRow />
      <CustomSynthesisRow />
      <SpecialtyRow />
      <Industries />
    </div>
  );
}
