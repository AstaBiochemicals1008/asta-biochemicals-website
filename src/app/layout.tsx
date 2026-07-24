import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import MotionRoot from "@/components/MotionRoot";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ASTA Biochemicals — Scientifically driven. Commercially proven.",
    template: "%s | ASTA Biochemicals",
  },
  description:
    "ASTA combines scientific expertise, discovery chemistry, process development and specialised manufacturing with a trusted global network for biopharmaceutical products and research solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body
        style={{
          fontFamily: "var(--font-sans)",
          color: "var(--fg-body)",
          background: "#fff",
          overflowX: "clip",
        }}
      >
        <MotionRoot />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
