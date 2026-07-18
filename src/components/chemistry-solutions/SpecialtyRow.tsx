import { CheckItem, RowMedia, RowRule, containerStyle, rowShell } from "./RowBits";

const FOCUS = [
  "Pharmaceutical Building Blocks",
  "Cosmetic Ingredients",
  "Flavour & Fragrance Molecules",
  "Specialty Chemical Intermediates",
  "Sustainable Synthetic Molecules",
  "Custom Raw Materials",
];

const APPLICATIONS = [
  "Pharmaceuticals",
  "Personal Care",
  "Flavours",
  "Fragrances",
  "Specialty Chemicals",
];

const listStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

export default function SpecialtyRow() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "clamp(16px,2vw,28px) 0 clamp(28px,3.5vw,52px)",
      }}
    >
      <div style={containerStyle}>
        <div
          className="asta-reveal asta-cs-crow"
          data-reveal-delay="0"
          style={{ ...rowShell, gridTemplateColumns: "0.82fr 1.18fr" }}
        >
          <RowMedia
            src="/assets/chem-03.png"
            alt="Cosmetic serums + cream"
            minHeight={360}
            sizes="(max-width: 960px) 100vw, 40vw"
          />

          <div
            style={{
              padding:
                "clamp(6px,1vw,16px) clamp(6px,1vw,20px) clamp(6px,1vw,16px) 0",
            }}
          >
            <RowRule />
            <h2 style={{ margin: "18px 0 0" }}>Specialty Chemistry Solutions</h2>
            <p style={{ margin: "12px 0 0", maxWidth: "40ch" }}>
              Specialty ingredients and synthetic molecules designed for
              high-performance applications.
            </p>

            <div
              className="asta-cs-crow-cols"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                gap: 28,
                margin: "26px 0 0",
              }}
            >
              <div>
                <div
                  className="asta-eyebrow"
                  style={{ color: "var(--lime-700)", marginBottom: 16 }}
                >
                  Product Focus
                </div>
                <div style={listStyle}>
                  {FOCUS.map((item) => (
                    <CheckItem key={item} size={18} lineHeight={1.4}>
                      {item}
                    </CheckItem>
                  ))}
                </div>
              </div>
              <div>
                <div
                  className="asta-eyebrow"
                  style={{ color: "var(--lime-700)", marginBottom: 16 }}
                >
                  Applications
                </div>
                <div style={listStyle}>
                  {APPLICATIONS.map((item) => (
                    <CheckItem key={item} size={18} lineHeight={1.4}>
                      {item}
                    </CheckItem>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
