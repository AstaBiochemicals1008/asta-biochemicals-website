import type { Metadata } from "next";
import "@/styles/biopharmaceutical.css";
import Hero from "@/components/biopharmaceutical/Hero";
import Portfolio from "@/components/biopharmaceutical/Portfolio";
import TrustBand from "@/components/biopharmaceutical/TrustBand";

export const metadata: Metadata = {
  alternates: { canonical: "/biopharmaceutical" },
  title: "Biopharmaceutical",
  description:
    "A comprehensive portfolio of high-quality products supporting every stage of biopharmaceutical discovery, development, manufacturing and quality control.",
};

export default function BiopharmaceuticalPage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <TrustBand />
    </>
  );
}
