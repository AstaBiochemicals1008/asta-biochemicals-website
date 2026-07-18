import CertMarquee from "@/components/CertMarquee";

export default function QualityBand() {
  return (
    <section
      id="quality"
      style={{
        position: "relative",
        background: "#fff",
        overflow: "hidden",
        padding: "clamp(56px,6vw,84px) 0",
      }}
    >
      <div
        style={{
          position: "relative",
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,48px)",
        }}
      >
        <div className="asta-rv" style={{ textAlign: "center" }}>
          <div className="asta-eyebrow">Quality &amp; Compliance</div>
          <h2 style={{ margin: "14px 0 0" }}>
            Built for qualification. Trusted for supply.
          </h2>
        </div>
        <CertMarquee />
      </div>
    </section>
  );
}
