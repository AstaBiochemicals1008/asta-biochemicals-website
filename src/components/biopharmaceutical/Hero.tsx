import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="asta-fit-hero"
      style={{ position: "relative", overflow: "hidden", background: "#fff" }}
    >
      <Image
        src="/assets/biopharma-hero-bg.png"
        alt=""
        aria-hidden="true"
        className="asta-bp-kenburns"
        fill
        preload
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center right", zIndex: 0 }}
      />

      {/* White scrim — keeps the left-hand copy legible over the art. */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background:
            "linear-gradient(90deg,rgba(255,255,255,0.96) 0%,rgba(255,255,255,0.88) 30%,rgba(255,255,255,0.5) 48%,rgba(255,255,255,0) 68%)",
        }}
      />

      <div
        className="asta-bp-hero-grid"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1320,
          margin: "0 auto",
          padding: "clamp(56px,6vw,100px) clamp(20px,4vw,48px)",
          gap: 40,
          alignItems: "center",
          minHeight: "clamp(460px,46vw,600px)",
        }}
      >
        <div className="asta-reveal" data-reveal-delay="0">
          {/* The prototype's inline 12px/500/0.16em is dead — its global
              uppercase-eyebrow rule forces 13px/600/0.18em, i.e. `.asta-eyebrow`. */}
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
            Biopharma-grade quality. Trusted worldwide.
          </div>

          {/* Size/weight/colour come from the global h1 rule; the inner span
              keeps its own lime colour. */}
          <h1
            className="asta-hero-rise asta-hero-rise-2"
            style={{ margin: "22px 0 0" }}
          >
            Biopharmaceutical
            <br />
            <span style={{ color: "var(--lime-700)" }}>
              Research, Manufacturing &amp; Quality-Control Products
            </span>
          </h1>

          {/* 18px/1.7 comes from `p.asta-hero-rise-3` in globals.css. */}
          <p
            className="asta-hero-rise asta-hero-rise-3"
            style={{ maxWidth: "46ch", margin: "22px 0 0" }}
          >
            A comprehensive portfolio of high-quality products supporting every
            stage of biopharmaceutical discovery, development, manufacturing and
            quality control.
          </p>
        </div>

        <div />
      </div>
    </section>
  );
}
