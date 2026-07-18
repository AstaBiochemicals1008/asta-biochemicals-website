import Image from "next/image";

type Value = {
  src: string;
  alt: string;
  title: string;
  body: string;
  variant: "asta-co-rv-left" | "asta-co-rv-right";
  delay: string;
  width: number;
  height: number;
};

const VALUES: Value[] = [
  {
    src: "/assets/company-val-1.png",
    alt: "Scientist pipetting into flasks",
    title: "Scientific Thinking",
    body: "Evidence-based decisions.",
    variant: "asta-co-rv-left",
    delay: "80",
    width: 380,
    height: 379,
  },
  {
    src: "/assets/company-val-2.png",
    alt: "Business handshake",
    title: "Integrity",
    body: "Transparent and responsible business.",
    variant: "asta-co-rv-right",
    delay: "160",
    width: 393,
    height: 379,
  },
  {
    src: "/assets/company-val-3.png",
    alt: "Production line vials",
    title: "Reliability",
    body: "Consistency customers can trust.",
    variant: "asta-co-rv-left",
    delay: "240",
    width: 394,
    height: 379,
  },
  {
    src: "/assets/company-val-4.png",
    alt: "Seedling in soil",
    title: "Continuous Improvement",
    body: "Always improving systems and processes.",
    variant: "asta-co-rv-right",
    delay: "320",
    width: 383,
    height: 379,
  },
];

type Sustain = {
  src: string;
  alt: string;
  title: string;
  body: string;
  delay: string;
  width: number;
  height: number;
};

const SUSTAIN: Sustain[] = [
  {
    src: "/assets/company-sus-1.png",
    alt: "Hand holding glass globe",
    title: "Responsible Manufacturing",
    body: "Efficient processes and responsible resource use.",
    delay: "80",
    width: 380,
    height: 380,
  },
  {
    src: "/assets/company-sus-2.png",
    alt: "Glass globe on moss",
    title: "Environmental Responsibility",
    body: "Committed to reducing impact and promoting a greener future.",
    delay: "160",
    width: 393,
    height: 380,
  },
  {
    src: "/assets/company-sus-3.png",
    alt: "Scientists on production line",
    title: "Safety Culture",
    body: "People safety is integral to everything we do.",
    delay: "240",
    width: 394,
    height: 380,
  },
  {
    src: "/assets/company-sus-4.png",
    alt: "Seedlings in flasks",
    title: "Continuous Improvement",
    body: "Driving sustainable growth through innovation and learning.",
    delay: "320",
    width: 383,
    height: 380,
  },
];

const HEAD_STYLE = {
  textAlign: "center" as const,
  marginBottom: "clamp(26px,3vw,40px)",
};

export default function ValuesSustainability() {
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
          maxWidth: 1360,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,48px)",
        }}
      >
        <div
          className="asta-reveal asta-co-rv-blur"
          data-reveal-delay="0"
          style={HEAD_STYLE}
        >
          <div className="asta-eyebrow" style={{ color: "var(--green-900)" }}>
            Our Values
          </div>
        </div>

        <div
          className="asta-co-vs-grid"
          style={{ gap: "clamp(16px,1.6vw,24px)" }}
        >
          {VALUES.map((item) => (
            <div
              key={item.title}
              className={`asta-reveal ${item.variant} asta-co-vcard`}
              data-reveal-delay={item.delay}
              style={{
                display: "grid",
                gridTemplateColumns: "0.9fr 1.1fr",
                background: "#fff",
                border: "1px solid var(--gray-200)",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 10px 28px rgba(17,48,43,0.05)",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 1080px) 22vw, 11vw"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  minHeight: 175,
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "clamp(12px,1.1vw,16px)" }}>
                {/* Inline clamp(12.5px,0.85vw,15px) is dead — the prototype's
                    own `.asta-val-cards .asta-vcard h3` pushed it back to
                    18px, which is the global h3 size. */}
                <h3 style={{ margin: 0 }}>{item.title}</h3>
                <span
                  className="asta-co-accent-bar"
                  style={{
                    display: "block",
                    width: 30,
                    height: 2,
                    background: "var(--lime-500)",
                    margin: "8px 0",
                  }}
                />
                <p style={{ margin: 0 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "clamp(44px,5vw,68px)" }}>
          <div
            className="asta-reveal asta-co-rv-blur"
            data-reveal-delay="0"
            style={HEAD_STYLE}
          >
            <div className="asta-eyebrow" style={{ color: "var(--green-900)" }}>
              Sustainability
            </div>
          </div>
        </div>

        <div
          className="asta-co-vs-grid"
          style={{ gap: "clamp(16px,1.6vw,24px)" }}
        >
          {SUSTAIN.map((item) => (
            <div
              key={item.title}
              className="asta-reveal asta-co-rv-zoom asta-co-scard"
              data-reveal-delay={item.delay}
              style={{
                background: "#fff",
                border: "1px solid var(--gray-200)",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 10px 28px rgba(17,48,43,0.05)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative" }}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 1080px) 50vw, 25vw"
                  style={{
                    display: "block",
                    width: "100%",
                    height: 170,
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  padding: "clamp(14px,1.2vw,18px) clamp(14px,1.3vw,20px)",
                  textAlign: "center",
                }}
              >
                <h3 style={{ margin: 0 }}>{item.title}</h3>
                <p style={{ margin: "8px 0 0" }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
