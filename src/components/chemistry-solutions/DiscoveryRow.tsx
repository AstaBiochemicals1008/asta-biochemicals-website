import { CheckItem, RowMedia, RowRule, containerStyle, rowShell } from "./RowBits";

const ITEMS = [
  "Advanced Core Synthesis",
  "High-Throughput Library Synthesis",
  "Asymmetric & Chiral Synthesis",
  "Focused Library Design & Synthesis",
  "Complex Multi-step Synthesis",
  "Novel Molecular Modalities",
  "Reference Compounds & Impurities",
  "Peptides & Peptidomimetics",
];

export default function DiscoveryRow() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "clamp(20px,3vw,40px) 0 clamp(16px,2vw,28px)",
      }}
    >
      <div style={containerStyle}>
        <div
          className="asta-reveal asta-cs-crow"
          data-reveal-delay="0"
          style={{ ...rowShell, gridTemplateColumns: "0.82fr 1.18fr" }}
        >
          <RowMedia
            src="/assets/chem-01.png"
            alt="Pipette + test tubes"
            minHeight={340}
            sizes="(max-width: 960px) 100vw, 40vw"
          />

          <div
            style={{
              padding:
                "clamp(6px,1vw,16px) clamp(6px,1vw,20px) clamp(6px,1vw,16px) 0",
            }}
          >
            <RowRule />
            {/* Type comes from the global h2 rule — inline size/weight/colour
                in the prototype is dead. */}
            <h2 style={{ margin: "18px 0 0" }}>
              Discovery &amp; Medicinal Chemistry
            </h2>
            <p style={{ margin: "12px 0 0", maxWidth: "38ch" }}>
              Accelerating innovation from early discovery to lead optimization.
            </p>

            <div
              className="asta-cs-crow-lists"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px 28px",
                margin: "26px 0 0",
              }}
            >
              {ITEMS.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
