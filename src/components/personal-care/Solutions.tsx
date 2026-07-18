import Image from "next/image";

type Solution = {
  title: string;
  desc: string;
  use: string;
  media: string;
  revealDelay: number;
};

/* `delay` in the prototype is `(i % 2) * 90` — the two cards in each row
   stagger against each other. */
const SOLUTIONS: Solution[] = [
  {
    title: "Hair Care Solutions",
    desc: "Advanced ingredients that help promote healthy hair, support scalp care and improve overall hair appearance.",
    use: "Used in anti-hair fall, hair growth, conditioning and scalp care formulations.",
    media: "/assets/pc-sol-1.png",
    revealDelay: 0,
  },
  {
    title: "Skin Care & Hygiene Solutions",
    desc: "Effective ingredients that help cleanse, protect and care for the skin while ensuring product safety and stability.",
    use: "Ideal for skincare, topical antiseptic, cleansing and protective formulations.",
    media: "/assets/pc-sol-2.png",
    revealDelay: 90,
  },
  {
    title: "Functional Cosmetic Ingredients",
    desc: "Multi-functional ingredients that enhance product performance, improve texture and support formulation stability.",
    use: "Used as emollients, emulsifiers, humectants and stabilizing agents in cosmetic products.",
    media: "/assets/pc-sol-3.png",
    revealDelay: 0,
  },
  {
    title: "Specialty Formulation Ingredients",
    desc: "Specialty ingredients designed to support unique formulation needs and deliver differentiated product benefits.",
    use: "Used in advanced cosmetic formulations for performance and innovation.",
    media: "/assets/pc-sol-4.png",
    revealDelay: 90,
  },
];

export default function Solutions() {
  return (
    <section
      id="pc-solutions"
      style={{
        background: "#fff",
        padding: "clamp(24px,3vw,44px) 0 clamp(40px,5vw,72px)",
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
          style={{ textAlign: "center", marginBottom: "clamp(32px,4vw,52px)" }}
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
            <span className="asta-pc-dot" />
            Our Personal Care Solutions
            <span className="asta-pc-dot" />
          </div>
          {/* Type from the global h2 rule. */}
          <h2 style={{ margin: "16px 0 0" }}>
            Purposeful Ingredients. Beautiful Results.
          </h2>
          <span
            style={{
              display: "block",
              width: 56,
              height: 3,
              background: "var(--lime-500)",
              borderRadius: 2,
              margin: "18px auto 0",
            }}
          />
        </div>

        <div
          className="asta-pc-sol-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}
        >
          {SOLUTIONS.map((s) => (
            <div
              key={s.title}
              className="asta-reveal asta-pc-scard"
              data-reveal-delay={s.revealDelay}
              style={{
                position: "relative",
                alignItems: "stretch",
                border: "1px solid #efe9dc",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 12px 34px rgba(17,48,43,0.06)",
                background: "#f6f1e7",
                minHeight: 250,
              }}
            >
              <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                <Image
                  className="asta-pc-scard-media"
                  src={s.media}
                  alt={s.title}
                  fill
                  sizes="(max-width: 980px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "left bottom" }}
                />
                {/* Fades the art out under the copy panel. */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(90deg,rgba(246,241,231,0) 30%,rgba(246,241,231,0.82) 40%,rgba(246,241,231,0.98) 48%)",
                  }}
                />
              </div>

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  marginLeft: "auto",
                  width: "60%",
                  padding: "clamp(20px,2vw,30px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  minHeight: 196,
                }}
              >
                <h3 style={{ margin: 0 }}>{s.title}</h3>
                <p style={{ margin: "10px 0 0" }}>{s.desc}</p>
                <span
                  style={{
                    display: "block",
                    width: 26,
                    height: 2,
                    background: "var(--lime-500)",
                    margin: "12px 0 10px",
                  }}
                />
                {/* The prototype's inline 11px/--gray-500 is dead — the global
                    p rule renders this at 14px/#5c6964, same as the one above. */}
                <p style={{ margin: 0 }}>{s.use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
