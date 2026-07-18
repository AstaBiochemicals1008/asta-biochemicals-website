import Image from "next/image";

type Card = {
  src: string;
  alt: string;
  title: string;
  body: string;
  variant: "asta-co-rv-flip" | "asta-co-rv-flip-r";
  delay: string;
};

const CARDS: Card[] = [
  {
    src: "/assets/company-mission.png",
    alt: "Mountain peak at sunrise",
    title: "Our Mission",
    body: "“Aiming for continual improvement in every aspect of our Business. Be it our Customers’ Satisfaction, our Employees’ Happiness or our Stakeholders’ Expectation.”",
    variant: "asta-co-rv-flip",
    delay: "80",
  },
  {
    src: "/assets/company-vision.png",
    alt: "Hand holding glass globe with seedling",
    title: "Our Vision",
    body: "“To strive and create a world with better products that are of highest quality, eco-friendly and economical by working closely with nature that ultimately leads to a better health and well-being of mankind.”",
    variant: "asta-co-rv-flip-r",
    delay: "160",
  },
];

export default function VisionMission() {
  return (
    <section
      style={{
        background: "#fff",
        borderTop: "1px solid var(--gray-200)",
        padding: "clamp(28px,3.2vw,48px) 0",
      }}
    >
      <div
        style={{
          maxWidth: 1340,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,48px)",
        }}
      >
        <div
          className="asta-reveal asta-co-rv-blur"
          data-reveal-delay="0"
          style={{
            textAlign: "center",
            marginBottom: "clamp(28px,3vw,44px)",
          }}
        >
          {/* Renders 13px/600/0.18em via the eyebrow rule; only the colour
              survives from the prototype's inline style. */}
          <div className="asta-eyebrow" style={{ color: "var(--green-900)" }}>
            Our Vision &amp; Mission
          </div>
        </div>

        <div className="asta-co-vm-grid">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`asta-reveal ${card.variant} asta-co-diff-card asta-co-vm-card`}
              data-reveal-delay={card.delay}
              style={{
                display: "grid",
                gridTemplateColumns: "0.85fr 1.15fr",
                gap: "clamp(16px,1.8vw,26px)",
                alignItems: "stretch",
                background: "#fff",
                border: "1px solid var(--gray-200)",
                borderRadius: 16,
                padding: "clamp(16px,1.6vw,22px)",
                boxShadow: "0 10px 30px rgba(17,48,43,0.05)",
              }}
            >
              <Image
                className="asta-co-kenburns"
                src={card.src}
                alt={card.alt}
                width={1536}
                height={1024}
                sizes="(max-width: 1080px) 40vw, 22vw"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  minHeight: 280,
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "6px 6px 6px 0",
                }}
              >
                {/* Inline clamp(21px,1.9vw,26px) was overridden to 18px by the
                    prototype's own `.asta-vm-card h3` rule — which is the
                    global h3 size anyway. Let globals own it. */}
                <h3 style={{ margin: 0 }}>{card.title}</h3>
                <span
                  className="asta-co-vm-under"
                  style={{
                    display: "block",
                    width: 46,
                    height: 2,
                    background: "var(--lime-500)",
                    margin: "12px 0 18px",
                  }}
                />
                {/* 17px/1.7 comes from `.asta-co-vm-card p` in company.css. */}
                <p style={{ margin: 0 }}>{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
