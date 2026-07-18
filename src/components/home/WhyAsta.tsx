import Image from "next/image";

const CARDS = [
  {
    title: "High Purity Ingredients",
    body: "Carefully sourced and tested ingredients with high purity and compliance.",
    media: "/assets/pc-why-1.png",
    revealDelay: 0,
  },
  {
    title: "Consistent Quality",
    body: "Rigorous quality systems ensure batch-to-batch consistency and reliable performance.",
    media: "/assets/pc-why-2.png",
    revealDelay: 70,
  },
  {
    title: "Global Supply",
    body: "Strong supply network ensuring timely delivery and uninterrupted availability worldwide.",
    media: "/assets/pc-why-3.png",
    revealDelay: 140,
  },
  {
    title: "Technical Support",
    body: "Expert technical team to support your formulation, development and regulatory needs.",
    media: "/assets/pc-why-4.png",
    revealDelay: 210,
  },
];

const dotStyle: React.CSSProperties = {
  width: 6,
  height: 6,
  borderRadius: "50%",
  background: "var(--lime-500)",
};

export default function WhyAsta() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "clamp(28px,4vw,52px) 0 clamp(40px,5vw,68px)",
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,48px)",
        }}
      >
        <div
          className="asta-reveal"
          data-reveal-delay="0"
          style={{
            textAlign: "center",
            marginBottom: "clamp(28px,3vw,44px)",
          }}
        >
          <div
            className="asta-eyebrow"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              color: "var(--lime-700)",
            }}
          >
            <span style={dotStyle} />
            ASTA. With a Difference.
            <span style={dotStyle} />
          </div>
          <h2 style={{ margin: "14px 0 0" }}>
            Quality You Can Trust. Partnership You Can Rely On.
          </h2>
        </div>

        <div
          className="asta-why-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 20,
          }}
        >
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="asta-reveal asta-why-card"
              data-reveal-delay={card.revealDelay}
              style={{
                position: "relative",
                border: "1px solid var(--gray-100)",
                borderRadius: 16,
                overflow: "hidden",
                background: "var(--gray-050)",
              }}
            >
              <div
                style={{ position: "relative", height: 150, overflow: "hidden" }}
              >
                <Image
                  className="asta-why-media"
                  src={card.media}
                  alt={card.title}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "clamp(18px,1.8vw,26px)" }}>
                <h3 style={{ margin: "16px 0 0" }}>{card.title}</h3>
                <p style={{ margin: "9px 0 0" }}>{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
