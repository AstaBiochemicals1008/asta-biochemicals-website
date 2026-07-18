import type { Metadata } from "next";
import "@/styles/connect.css";
import ConnectHero from "@/components/connect/ConnectHero";
import GetInTouch from "@/components/connect/GetInTouch";
import FindUs from "@/components/connect/FindUs";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Reach out to ASTA Biochemicals for product inquiries, technical guidance or partnerships. Call +91 80 4165 1010, email sales@astabiochemicals.com, or visit us in Peenya Industrial Area, Bangalore.",
};

export default function ConnectPage() {
  return (
    <>
      <ConnectHero />
      <GetInTouch />
      <FindUs />
    </>
  );
}
