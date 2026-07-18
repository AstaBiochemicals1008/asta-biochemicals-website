import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="asta-fit-hero"
      style={{ position: "relative", overflow: "hidden", background: "#fff" }}
    >
      <Image
        src="/assets/personalcare-hero-bg.png"
        alt=""
        aria-hidden="true"
        className="asta-pc-kenburns"
        fill
        preload
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center right", zIndex: 0 }}
      />

      {/* White scrim keeps the left-hand copy crisp over the art. */}
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
        className="asta-pc-hero-grid"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1320,
          margin: "0 auto",
          padding: "clamp(56px,6vw,100px) clamp(20px,4vw,48px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "center",
          minHeight: "clamp(460px,46vw,600px)",
        }}
      >
        <div className="asta-reveal" data-reveal-delay="0">
          {/* Size/weight/tracking come from `.asta-eyebrow`; the prototype's
              inline 12px/500/0.16em was overridden by its own global rule. */}
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
            Beautiful formulations, purer ingredients.
          </div>

          {/* Type comes from the global h1 rule. `white-space:nowrap` is
              layout, so it stays. */}
          <h1
            className="asta-hero-rise asta-hero-rise-2"
            style={{ margin: "18px 0 0", whiteSpace: "nowrap" }}
          >
            Personal Care Ingredients
          </h1>

          {/* 18px/1.7 comes from `p.asta-hero-rise-3`; colour from global p. */}
          <p
            className="asta-hero-rise asta-hero-rise-3"
            style={{ maxWidth: "40ch", margin: "20px 0 0" }}
          >
            Premium ingredients that empower innovation in hair care, skin care,
            personal hygiene and cosmetic formulations.
          </p>
        </div>
        <div />
      </div>
    </section>
  );
}
