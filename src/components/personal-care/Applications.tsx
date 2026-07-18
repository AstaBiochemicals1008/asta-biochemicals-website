import Image from "next/image";

const APPLICATIONS = [
  {
    title: "Hair Care",
    desc: "Formulated for shampoos, serums, conditioners and treatments to support strong, healthy and beautiful hair.",
    media: "/assets/pc-app-1.png",
    revealDelay: 0,
  },
  {
    title: "Skin Care",
    desc: "Ideal for creams, lotions, serums and face care products to nourish, protect and enhance skin health.",
    media: "/assets/pc-app-2.png",
    revealDelay: 70,
  },
  {
    title: "Personal Hygiene",
    desc: "Used in soaps, body washes, hand sanitizers and hygiene products to ensure safety, cleanliness and freshness.",
    media: "/assets/pc-app-3.png",
    revealDelay: 140,
  },
  {
    title: "Cosmetic Manufacturing",
    desc: "Trusted by cosmetic manufacturers for innovative formulations with consistent quality and reliable performance.",
    media: "/assets/pc-app-4.png",
    revealDelay: 210,
  },
];

export default function Applications() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "clamp(12px,2vw,24px) 0 clamp(40px,5vw,68px)",
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
          style={{ textAlign: "center", marginBottom: "clamp(28px,3vw,44px)" }}
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
            Applications
            <span className="asta-pc-dot" />
          </div>
          <h2 style={{ margin: "14px 0 0" }}>
            Supporting Every Personal Care Need
          </h2>
        </div>

        <div
          className="asta-pc-app-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 20,
          }}
        >
          {APPLICATIONS.map((a) => (
            <div
              key={a.title}
              className="asta-reveal asta-pc-appcard"
              data-reveal-delay={a.revealDelay}
              style={{
                background: "#fff",
                border: "1px solid var(--gray-200)",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 10px 28px rgba(17,48,43,0.05)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: 150,
                  overflow: "hidden",
                  background: "var(--gray-050)",
                }}
              >
                <Image
                  className="asta-pc-appcard-media"
                  src={a.media}
                  alt={a.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: 20 }}>
                <h3 style={{ margin: 0 }}>{a.title}</h3>
                <p style={{ margin: "9px 0 0" }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
