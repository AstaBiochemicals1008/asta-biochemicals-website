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

const SITE_URL = "https://www.astabiochemicals.com";
const SITE_NAME = "ASTA Biochemicals";
const SITE_DESCRIPTION =
  "ASTA combines scientific expertise, discovery chemistry, process development and specialised manufacturing with a trusted global network for biopharmaceutical products and research solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ASTA Biochemicals — Scientifically driven. Commercially proven.",
    template: "%s | ASTA Biochemicals",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "ASTA Biochemicals",
    "biopharmaceutical products",
    "discovery chemistry",
    "fragrance and personal care ingredients",
    "specialty chemicals",
    "process development",
    "contract manufacturing",
    "ISO certified chemical supplier",
    "Bengaluru chemicals",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "ASTA Biochemicals — Scientifically driven. Commercially proven.",
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ASTA Biochemicals — Scientifically driven. Commercially proven.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASTA Biochemicals — Scientifically driven. Commercially proven.",
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// Organization structured data (JSON-LD) — helps Google's Knowledge Graph.
const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ASTA Biochemicals Pvt. Ltd.",
  alternateName: "ASTA Biochemicals",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/asta-logo-full.png`,
  description: SITE_DESCRIPTION,
  slogan: "Scientifically driven. Commercially proven.",
  email: "connect@astabiochemicals.com",
  telephone: "+91-80-4165-1010",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "B-326/1, 3rd Main, 10th Cross, Near TVS Cross, 1st Stage, 1st Phase, Peenya Industrial Area",
    addressLocality: "Bengaluru",
    postalCode: "560058",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        <MotionRoot />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
