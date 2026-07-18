import Image from "next/image";

type Card = {
  title: string;
  body: string;
  media: string;
  mediaAlt: string;
  /** Scrim gradient over the photo. */
  scrim: string;
  /** Copy sits right on cards 1 & 3, left on cards 2 & 4. */
  copyRight: boolean;
};

const CARDS: Card[] = [
  {
    title: "Scientifically Driven",
    body: "Deep chemistry and technical expertise powering innovative and reliable solutions.",
    media: "/assets/why-1.png",
    mediaAlt: "Laboratory glassware and molecular model",
    scrim:
      "linear-gradient(90deg,rgba(255,255,255,0) 40%,rgba(255,255,255,0.85) 62%,#ffffff 100%)",
    copyRight: true,
  },
  {
    title: "Quality Assured",
    body: "Robust systems, stringent quality standards and regulatory compliance you can trust.",
    media: "/assets/why-2.png",
    mediaAlt: "Glass shield with check mark",
    scrim:
      "linear-gradient(90deg,#f4f7ec 0%,rgba(244,247,236,0.85) 38%,rgba(244,247,236,0) 60%)",
    copyRight: false,
  },
  {
    title: "Global Network",
    body: "Trusted partners and strong capabilities across the world, delivering consistent value globally.",
    media: "/assets/why-3.png",
    mediaAlt: "Illuminated global network globe",
    scrim:
      "linear-gradient(90deg,rgba(244,247,236,0) 40%,rgba(244,247,236,0.85) 62%,#f4f7ec 100%)",
    copyRight: true,
  },
  {
    title: "Customer Focused",
    body: "We listen, understand and co-create solutions that drive your success and long-term growth.",
    media: "/assets/why-4.png",
    mediaAlt: "Fresh green leaves in sunlight",
    scrim:
      "linear-gradient(90deg,#f4f7ec 0%,rgba(244,247,236,0.85) 38%,rgba(244,247,236,0) 60%)",
    copyRight: false,
  },
];

export default function WhyChoose() {
  return (
    <section style={{ background: "#fff", padding: "0 0 clamp(28px,3vw,40px)" }}>
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,48px)",
        }}
      >
        {/* .asta-reveal fades the grid in; `.is-in` then drives the per-card
            keyframe stagger declared in solutions.css. */}
        <div
          className="asta-reveal asta-sol-why-grid"
          data-reveal-delay="0"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
        >
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="asta-sol-why-card"
              style={{
                position: "relative",
                border: "1px solid var(--gray-200)",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 12px 34px rgba(17,48,43,0.06)",
                minHeight: 210,
                background: "#fff",
              }}
            >
              <Image
                src={card.media}
                alt={card.mediaAlt}
                fill
                sizes="(max-width: 480px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", inset: 0, background: card.scrim }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  textAlign: "left",
                  padding: "clamp(22px,2.4vw,34px)",
                  width: "52%",
                  ...(card.copyRight ? { marginLeft: "auto" } : null),
                }}
              >
                {/* 18px from the global h3 rule — the prototype's inline
                    clamp(1.3rem…1.7rem)/700/var(--green-900) is dead. */}
                <h3 style={{ margin: 0 }}>{card.title}</h3>
                <span
                  className="asta-sol-why-line"
                  style={{
                    display: "block",
                    width: 34,
                    height: 2,
                    background: "var(--lime-500)",
                    margin: "14px 0 16px",
                  }}
                />
                <p style={{ margin: 0 }}>{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
