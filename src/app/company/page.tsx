import type { Metadata } from "next";

import Different from "@/components/company/Different";
import Hero from "@/components/company/Hero";
import Journey from "@/components/company/Journey";
import ValuesSustainability from "@/components/company/ValuesSustainability";
import VisionMission from "@/components/company/VisionMission";
import WhoWeAre from "@/components/company/WhoWeAre";

import "@/styles/company.css";

export const metadata: Metadata = {
  alternates: { canonical: "/company" },
  title: "Company",
  description:
    "ASTA Biochemicals is an ISO-certified Indian company serving international customers through specialty chemical manufacturing and biopharmaceutical supply — our vision, values, journey and commitment to sustainability.",
};

export default function CompanyPage() {
  return (
    // The wrapper is what lets company.css out-specify the shared .asta-reveal
    // rules in globals.css without editing them. It carries no styling of its own.
    <div className="asta-co-root">
      <Hero />
      <WhoWeAre />
      <VisionMission />
      <Journey />
      <Different />
      <ValuesSustainability />
    </div>
  );
}
