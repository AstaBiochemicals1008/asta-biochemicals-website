import type { Metadata } from "next";

import Hero from "@/components/personal-care/Hero";
import Solutions from "@/components/personal-care/Solutions";
import Applications from "@/components/personal-care/Applications";

import "@/styles/personal-care.css";

export const metadata: Metadata = {
  // The root layout applies a `%s | ASTA Biochemicals` template.
  alternates: { canonical: "/personal-care" },
  title: "Personal Care Ingredients",
  description:
    "Premium ingredients that empower innovation in hair care, skin care, personal hygiene and cosmetic formulations.",
};

export default function PersonalCarePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <Applications />
    </>
  );
}
