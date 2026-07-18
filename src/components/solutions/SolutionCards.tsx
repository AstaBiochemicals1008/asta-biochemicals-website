import Image from "next/image";

type Card = {
  title: string;
  body: string;
  media: string;
  mediaAlt: string;
  /** z-1 scrim over the photo — differs per card in the prototype. */
  scrim: string;
  /** Card background behind the photo (only set on two cards). */
  background?: string;
  revealDelay: number;
};

const CARDS: Card[] = [
  {
    title: "Biopharmaceutical Products",
    body: "Supply specialised biopharma products from trusted global manufacturers with complete compliance support.",
    media: "/assets/card-biopharma-new.png",
    mediaAlt: "Green molecular render",
    scrim:
      "linear-gradient(180deg,rgba(8,40,40,0) 0%,rgba(8,40,40,0) 46%,rgba(8,40,40,0.42) 72%,rgba(6,34,34,0.9) 100%)",
    revealDelay: 0,
  },
  {
    title: "Fragrance & Personal Care Ingredients",
    body: "Nature-inspired and high-performance ingredients for fragrances, cosmetics and personal care applications.",
    media: "/assets/card-fragrance-new.png",
    mediaAlt: "Fragrance serum, cream and botanicals",
    scrim:
      "linear-gradient(180deg,rgba(17,48,43,0.12) 0%,rgba(17,48,43,0.5) 42%,rgba(17,48,43,0.93) 100%)",
    revealDelay: 90,
  },
  {
    title: "Discovery Chemistry",
    body: "Early-stage research chemistry and medicinal building blocks that accelerate discovery programmes.",
    media: "/assets/card-discovery.png",
    mediaAlt: "Discovery chemistry glassware",
    scrim:
      "linear-gradient(180deg,rgba(17,48,43,0) 0%,rgba(17,48,43,0) 46%,rgba(17,48,43,0.4) 72%,rgba(17,48,43,0.88) 100%)",
    revealDelay: 180,
  },
  {
    title: "Global Supply Expertise",
    body: "Reliable logistics and supply chain solutions ensuring on-time delivery across 50+ countries.",
    media: "/assets/card-supply.png",
    mediaAlt: "Container ship at port — global supply",
    scrim:
      "linear-gradient(180deg,rgba(17,48,43,0.12) 0%,rgba(17,48,43,0.5) 42%,rgba(17,48,43,0.93) 100%)",
    background: "linear-gradient(160deg,var(--green-700),var(--green-900))",
    revealDelay: 270,
  },
  {
    title: "Quality & Compliance",
    body: "Robust quality systems and regulatory compliance ensuring consistent product excellence.",
    media: "/assets/card-global.png",
    mediaAlt: "Quality checklist with gloved hand",
    scrim:
      "linear-gradient(180deg,rgba(17,48,43,0.12) 0%,rgba(17,48,43,0.5) 42%,rgba(17,48,43,0.93) 100%)",
    background: "linear-gradient(160deg,var(--gray-500),var(--green-900))",
    revealDelay: 360,
  },
];

export default function SolutionCards() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#fff",
        padding: "clamp(8px,1.5vw,16px) 0 clamp(48px,5vw,72px)",
      }}
    >
      <div
        className="asta-sol-cards"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,48px)",
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: 16,
        }}
      >
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="asta-reveal asta-sol-card"
            data-reveal-delay={card.revealDelay}
            style={{
              position: "relative",
              borderRadius: 14,
              overflow: "hidden",
              minHeight: 512,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              boxShadow: "0 16px 40px rgba(17,48,43,0.16)",
              ...(card.background ? { background: card.background } : null),
            }}
          >
            <Image
              className="asta-sol-media"
              src={card.media}
              alt={card.mediaAlt}
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 760px) 50vw, (max-width: 1080px) 33vw, 20vw"
              style={{ objectFit: "cover", zIndex: 0 }}
            />
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                background: card.scrim,
              }}
            />
            <span className="asta-sol-line" aria-hidden="true" />
            <div style={{ position: "relative", zIndex: 2, padding: "0 24px 30px" }}>
              {/* 18px/600/#fff, uppercase — size and weight from globals.css,
                  colour from `.asta-sol-card h3` in solutions.css. */}
              <h3
                style={{
                  letterSpacing: "0.01em",
                  margin: 0,
                  textTransform: "uppercase",
                }}
              >
                {card.title}
              </h3>
              <span
                style={{
                  display: "block",
                  width: 32,
                  height: 2,
                  background: "var(--lime-500)",
                  margin: "12px 0 14px",
                }}
              />
              <p style={{ margin: 0 }}>{card.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
