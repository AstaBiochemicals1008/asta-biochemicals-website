import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Atom, Droplet, FlaskConical } from "lucide-react";

type Card = {
  title: string;
  body: string;
  cta: string;
  href: string;
  media: string;
  mediaAlt: string;
  icon: React.ReactNode;
  badgeBg: string;
  badgeShadow: string;
  revealDelay: number;
};

const CARDS: Card[] = [
  {
    title: "Biopharmaceutical",
    body: "Reliable supply of specialised biopharmaceutical products with complete compliance.",
    cta: "Explore Products",
    href: "/biopharmaceutical",
    media: "/assets/card-biopharma-home.png",
    mediaAlt: "Biopharma molecular render",
    icon: <FlaskConical style={{ width: 24, height: 24, color: "#fff" }} />,
    badgeBg: "var(--green-700)",
    badgeShadow: "0 6px 16px rgba(17,48,43,0.25)",
    revealDelay: 0,
  },
  {
    title: "Fragrance & Personal Care Ingredients",
    body: "Nature-inspired ingredients for fragrances, cosmetics and personal care.",
    cta: "Explore Ingredients",
    href: "/personal-care",
    media: "/assets/card-fragrance.webp",
    mediaAlt: "Fragrance / oil droplet",
    icon: (
      <Droplet style={{ width: 24, height: 24, color: "var(--green-900)" }} />
    ),
    badgeBg: "var(--lime-500)",
    badgeShadow: "0 6px 16px rgba(17,48,43,0.18)",
    revealDelay: 190,
  },
  {
    title: "Discovery Chemistry",
    body: "Research-driven synthesis and molecular discovery for novel and performance applications.",
    cta: "Explore Solutions",
    href: "/chemistry-solutions",
    media: "/assets/card-chem.webp",
    mediaAlt: "Discovery chemistry",
    icon: <Atom style={{ width: 24, height: 24, color: "#fff" }} />,
    badgeBg: "var(--green-700)",
    badgeShadow: "0 6px 16px rgba(17,48,43,0.25)",
    revealDelay: 380,
  },
];

export default function ProductCards() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 5,
        marginTop: "clamp(44px,5vw,76px)",
      }}
    >
      <div
        className="asta-cards"
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,48px)",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 26,
        }}
      >
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="asta-reveal"
            data-reveal-delay={card.revealDelay}
            style={{ display: "flex" }}
          >
            <article
              className="asta-card"
              style={{
                flex: 1,
                background: "#fff",
                border: "1px solid var(--gray-200)",
                borderRadius: 16,
                boxShadow:
                  "0 18px 48px rgba(17,48,43,0.10),0 4px 12px rgba(17,48,43,0.05)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span className="asta-card-accent" />
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 178,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    className="asta-card-media"
                    src={card.media}
                    alt={card.mediaAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <span
                  className="asta-card-badge"
                  style={{
                    position: "absolute",
                    left: 24,
                    bottom: -26,
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    background: card.badgeBg,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: card.badgeShadow,
                    zIndex: 4,
                  }}
                >
                  {card.icon}
                </span>
              </div>
              <div
                style={{
                  padding: "42px 26px 26px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <h3 style={{ margin: 0 }}>{card.title}</h3>
                <p style={{ margin: "12px 0 0" }}>{card.body}</p>
                <Link
                  href={card.href}
                  className="asta-arrow-link"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    marginTop: "auto",
                    paddingTop: 22,
                    color: "var(--green-700)",
                    fontWeight: 600,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  {card.cta}
                  <ArrowRight style={{ width: 16, height: 16 }} />
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
