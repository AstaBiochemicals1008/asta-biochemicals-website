import type { Metadata } from "next";
import "@/styles/quality.css";
import Hero from "@/components/quality/Hero";
import ComplianceDashboard from "@/components/quality/ComplianceDashboard";
import QualityJourney from "@/components/quality/QualityJourney";
import RiskManagement from "@/components/quality/RiskManagement";

export const metadata: Metadata = {
  title: "Quality & Compliance",
  description:
    "Integrated quality management, global compliance and end-to-end traceability to deliver consistent value to our partners worldwide.",
};

export default function QualityPage() {
  return (
    <>
      <Hero />
      <ComplianceDashboard />
      <QualityJourney />
      <RiskManagement />
    </>
  );
}
