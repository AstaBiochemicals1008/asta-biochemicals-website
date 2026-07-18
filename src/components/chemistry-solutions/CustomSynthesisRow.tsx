import { BulletItem, RowMedia, RowRule, containerStyle, rowShell } from "./RowBits";

const COLUMNS = [
  {
    head: "Process Research & Development",
    items: [
      "Route Scouting",
      "Route Ideation",
      "Process Development",
      "DoE-based Optimization",
      "Yield Improvement",
    ],
  },
  {
    head: "Kilo Lab & Pilot Plant",
    items: [
      "Laboratory Scale-up",
      "Pilot Manufacturing",
      "Process Optimization",
      "Technology Transfer",
      "Commercial Readiness",
    ],
  },
  {
    head: "Non-GMP Production",
    items: [
      "Reactor Capacity 20 L – 5000 L",
      "Glass-lined Reactors",
      "Stainless Steel Reactors",
      "Hastelloy Reactors",
      "Temperature: -15°C to +250°C",
    ],
  },
];

export default function CustomSynthesisRow() {
  return (
    <section
      style={{ background: "#fff", padding: "clamp(16px,2vw,28px) 0" }}
    >
      <div style={containerStyle}>
        <div
          className="asta-reveal asta-cs-crow"
          data-reveal-delay="0"
          style={{ ...rowShell, gridTemplateColumns: "1.18fr 0.82fr" }}
        >
          <div
            style={{
              padding:
                "clamp(6px,1vw,16px) 0 clamp(6px,1vw,16px) clamp(6px,1vw,20px)",
              order: 1,
            }}
          >
            <RowRule />
            <h2 style={{ margin: "18px 0 0" }}>
              Custom Synthesis, Process Development &amp; Scale-up
            </h2>
            <p style={{ margin: "12px 0 0", maxWidth: "44ch" }}>
              From laboratory development to pilot-scale production with reliable
              process excellence.
            </p>

            <div
              className="asta-cs-crow-cols"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 24,
                margin: "26px 0 0",
              }}
            >
              {COLUMNS.map((col) => (
                <div key={col.head}>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "var(--green-900)",
                      lineHeight: 1.3,
                      minHeight: 36,
                    }}
                  >
                    {col.head}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 9,
                      margin: "12px 0 0",
                      paddingTop: 12,
                      borderTop: "1px solid var(--gray-200)",
                    }}
                  >
                    {col.items.map((item) => (
                      <BulletItem key={item}>{item}</BulletItem>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <RowMedia
            src="/assets/chem-02.png"
            alt="Reactor hall / manufacturing"
            minHeight={420}
            order={2}
            sizes="(max-width: 960px) 100vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}
