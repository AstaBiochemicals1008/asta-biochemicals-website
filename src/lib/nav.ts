/** Maps the prototype's `*.dc.html` files onto real routes. */

export type NavItem = { label: string; href: string };

export const MAIN_NAV: NavItem[] = [
  { label: "Biopharmaceutical", href: "/biopharmaceutical" },
  { label: "Personal Care", href: "/personal-care" },
  // Prototype file is "Chemistry Solutions.dc.html" but the nav label reads "Discovery Chemistry".
  { label: "Discovery Chemistry", href: "/chemistry-solutions" },
  { label: "Solutions", href: "/solutions" },
  { label: "Quality & Compliance", href: "/quality" },
  { label: "Company", href: "/company" },
];

export const QUICK_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Quality & Compliance", href: "/quality" },
  { label: "Company", href: "/company" },
];

/** Placeholder targets in the prototype (all `href="#"`). */
export const LEGAL_LINKS: NavItem[] = [
  { label: "Anti-Bribery Anti-Corruption Statement", href: "#" },
  { label: "Disclaimer", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export const CONNECT_HREF = "/connect";
