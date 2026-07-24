import type { Metadata } from "next";
import "@/styles/solutions.css";

import Hero from "@/components/solutions/Hero";
import SolutionCards from "@/components/solutions/SolutionCards";
import WhyChoose from "@/components/solutions/WhyChoose";
import Process from "@/components/solutions/Process";

export const metadata: Metadata = {
  alternates: { canonical: "/solutions" },
  title: "Solutions",
  description:
    "ASTA combines advanced chemistry, robust manufacturing and global supply expertise across biopharmaceutical products, fragrance and personal care ingredients, discovery chemistry, global supply and quality compliance.",
};

export default function SolutionsPage() {
  // asta-page-solutions restores this prototype's 54px/0.96 reveal distance.
  return (
    <div className="asta-page-solutions">
      <Hero />
      <SolutionCards />
      <WhyChoose />
      <Process />
    </div>
  );
}
