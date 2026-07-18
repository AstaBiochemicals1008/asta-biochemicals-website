import Image from "next/image";
import { containerStyle } from "./RowBits";

const INDUSTRIES = [
  "Pharmaceutical",
  "Biotechnology",
  "CRO / CDMO",
  "Flavour & Fragrance",
  "Personal Care",
  "Specialty Chemicals",
].map((title, i) => ({
  title,
  src: `/assets/chem-ind-${i + 1}.png`,
  delay: i * 60,
}));

export default function Industries() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "clamp(16px,2vw,28px) 0 clamp(24px,3vw,44px)",
      }}
    >
      <div style={containerStyle}>
        <div
          className="asta-reveal"
          data-reveal-delay="0"
          style={{ textAlign: "center", marginBottom: "clamp(20px,2.4vw,34px)" }}
        >
          <div className="asta-eyebrow" style={{ color: "var(--lime-700)" }}>
            &middot; Industries We Serve &middot;
          </div>
        </div>

        <div
          className="asta-cs-ind-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 16,
          }}
        >
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.title}
              className="asta-reveal asta-cs-ind-card"
              data-reveal-delay={ind.delay}
              style={{
                position: "relative",
                borderRadius: 14,
                overflow: "hidden",
                minHeight: 150,
                display: "flex",
                alignItems: "flex-end",
                boxShadow: "0 12px 30px rgba(17,48,43,0.14)",
              }}
            >
              <Image
                className="asta-cs-ind-media"
                src={ind.src}
                alt=""
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 960px) 50vw, 33vw"
                style={{ objectFit: "cover", zIndex: 0 }}
              />
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 1,
                  background:
                    "linear-gradient(180deg,rgba(17,48,43,0) 30%,rgba(17,48,43,0.85) 100%)",
                }}
              />
              <div
                className="asta-cs-ind-title"
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "14px 16px",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: 13.5,
                  color: "#fff",
                  lineHeight: 1.2,
                }}
              >
                {ind.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
