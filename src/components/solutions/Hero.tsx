export default function Hero() {
  return (
    <section
      style={{ position: "relative", overflow: "hidden", background: "#ffffff" }}
    >
      {/* Ken-Burns background. Stays a CSS background (not next/image) because
          the prototype animates `background-size`. */}
      <div
        className="asta-sol-hero-bg"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/assets/solutions-hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="asta-sol-hero-bg-fade"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg,rgba(255,255,255,0.97) 0%,rgba(255,255,255,0.9) 32%,rgba(255,255,255,0.55) 50%,rgba(255,255,255,0) 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        className="asta-sol-hero-grid"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1320,
          margin: "0 auto",
          padding: "clamp(56px,6vw,100px) clamp(20px,4vw,48px)",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 40,
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
            End-to-end chemistry, engineered to perform.
          </div>

          {/* Size/weight/colour come from the global h1 rule — the prototype's
              inline clamp(2.4rem…3.7rem) and var(--green-900) are dead. The
              inner span keeps its lime colour; the h1 !important can't reach it. */}
          <h1
            className="asta-hero-rise asta-hero-rise-2"
            style={{ margin: "22px 0 0" }}
          >
            Scientific excellence.
            <br />
            <span style={{ color: "var(--lime-700)" }}>Practical impact.</span>
          </h1>

          {/* 18px/1.7 comes from the global `p.asta-hero-rise-3` rule; colour
              from the global p rule. Inline 16.5px/1.65/gray-600 is dead. */}
          <p
            className="asta-hero-rise asta-hero-rise-3"
            style={{ maxWidth: "46ch", margin: "24px 0 0" }}
          >
            We combine advanced chemistry, robust manufacturing and global supply
            expertise to solve complex challenges and deliver meaningful results.
          </p>
        </div>

        <div className="asta-sol-hero-art" aria-hidden="true" />
      </div>
    </section>
  );
}
