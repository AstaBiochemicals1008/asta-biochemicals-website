export default function Hero() {
  return (
    <section
      className="asta-fit-hero"
      style={{ position: "relative", overflow: "hidden", background: "#fff" }}
    >
      <div
        className="asta-cs-chero-bg"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/assets/discovery-hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background:
            "linear-gradient(90deg,#ffffff 0%,rgba(255,255,255,0.92) 30%,rgba(255,255,255,0.55) 48%,rgba(255,255,255,0) 68%)",
        }}
      />

      <div
        className="asta-cs-chero-grid"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1320,
          margin: "0 auto",
          padding: "clamp(56px,6vw,100px) clamp(20px,4vw,48px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(32px,4vw,56px)",
          alignItems: "center",
          minHeight: "clamp(460px,46vw,600px)",
        }}
      >
        <div className="asta-reveal" data-reveal-delay="0">
          <div
            className="asta-eyebrow asta-hero-rise asta-hero-rise-1"
            style={{ display: "inline-flex", alignItems: "center", gap: 9 }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--lime-500)",
              }}
            />
            From discovery to scale-up, chemistry that delivers.
          </div>

          {/* Size/weight/colour come from the global h1 rule. The inner span
              keeps its lime colour — the h1 !important doesn't reach it. */}
          <h1
            className="asta-hero-rise asta-hero-rise-2"
            style={{ margin: "18px 0 0" }}
          >
            End-to-end solutions across the{" "}
            <span style={{ color: "var(--lime-700)" }}>chemical innovation</span>{" "}
            lifecycle.
          </h1>

          {/* 18px/1.7 comes from `p.asta-hero-rise-3`; colour from global p. */}
          <p
            className="asta-hero-rise asta-hero-rise-3"
            style={{ maxWidth: "48ch", margin: "22px 0 0" }}
          >
            From discovery through process development and scale-up, we partner
            with pharmaceutical, biotechnology, fragrance and specialty chemical
            industries to deliver excellence at every stage.
          </p>
        </div>
        <div />
      </div>
    </section>
  );
}
