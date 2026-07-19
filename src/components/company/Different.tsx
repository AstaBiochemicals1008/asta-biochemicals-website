import Image from "next/image";

type Item = {
  src: string;
  alt: string;
  title: string;
  body: string;
  delay: string;
};

const ITEMS: Item[] = [
  {
    src: "/assets/company-diff-1.png",
    alt: "Manufacturing tanks",
    title: "Manufacturing Focus",
    body: "Built on deep manufacturing expertise.",
    delay: "80",
  },
  {
    src: "/assets/company-diff-2.png",
    alt: "Microscope work",
    title: "Quality Systems",
    body: "ISO-certified operations with documented quality practices.",
    delay: "160",
  },
  {
    src: "/assets/regulatory-pic.png",
    alt: "Scientist pipetting samples in a laboratory",
    title: "Regulatory Mindset",
    body: "Supporting customer compliance and documentation requirements.",
    delay: "240",
  },
  {
    src: "/assets/company-diff-4.png",
    alt: "Global network",
    title: "Global Supply Experience",
    body: "Serving customers across multiple international markets.",
    delay: "320",
  },
];

export default function Different() {
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
          style={{ textAlign: "center", marginBottom: "clamp(30px,3.4vw,48px)" }}
        >
          <div className="asta-eyebrow" style={{ color: "var(--green-900)" }}>
            What Makes ASTA Different
          </div>
        </div>

        <div
          className="asta-co-vs-grid"
          style={{ gap: "clamp(16px,1.8vw,26px)" }}
        >
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="asta-reveal asta-co-rv-rise asta-co-scard"
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
                  width={457}
                  height={803}
                  sizes="(max-width: 1080px) 50vw, 25vw"
                  style={{
                    display: "block",
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  padding:
                    "clamp(14px,1.3vw,18px) clamp(14px,1.3vw,20px)",
                  textAlign: "center",
                }}
              >
                {/* The prototype's inline clamp and its own `.asta-diff-cards
                    .asta-scard h3` override both resolved to the global h3
                    (18px/600/1.3/#15352F). Nothing to re-declare. */}
                <h3 style={{ margin: 0 }}>{item.title}</h3>
                <span
                  className="asta-co-accent-bar"
                  style={{
                    display: "block",
                    width: 32,
                    height: 2,
                    background: "var(--lime-500)",
                    margin: "10px auto",
                  }}
                />
                <p style={{ margin: 0 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
