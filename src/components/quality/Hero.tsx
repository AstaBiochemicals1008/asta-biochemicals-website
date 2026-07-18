import Image from "next/image";

/**
 * Quality & Compliance hero.
 *
 * Ken-Burns background photo behind a left-to-right white scrim, with the
 * copy column rising in on a five-step delay ramp (`asta-q-rise-*`).
 *
 * Type note: the mockup's inline font-size/colour on the h1 and both
 * paragraphs is dead — the global !important block owns it. Only
 * `p.asta-q-rise-4` legitimately opts out (18px/1.7), exactly as the
 * prototype declares. The <span> inside the h1 does keep its inline colour.
 */
export default function Hero() {
  return (
    <section
      className="asta-fit-hero"
      style={{ position: "relative", overflow: "hidden", background: "#fff" }}
    >
      <Image
        src="/assets/quality-hero-bg.png"
        alt=""
        aria-hidden="true"
        fill
        preload
        sizes="100vw"
        className="asta-q-kenburns"
        style={{ objectFit: "cover", objectPosition: "center right", zIndex: 0 }}
      />
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background:
            "linear-gradient(90deg,rgba(255,255,255,0.92) 0%,rgba(255,255,255,0.8) 30%,rgba(255,255,255,0.35) 50%,rgba(255,255,255,0) 68%)",
        }}
      />

      <div
        className="asta-q-hero-grid"
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
          <div
            className="asta-eyebrow asta-hero-rise asta-q-rise-1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--lime-500)",
              }}
            />
            Certified quality. Every batch, every time.
          </div>

          <h1 className="asta-hero-rise asta-q-rise-2" style={{ margin: 0 }}>
            Quality.
            <br />
            Compliance.
            <br />
            <span style={{ color: "var(--lime-600)" }}>Confidence.</span>
          </h1>

          {/* Renders 14px / #5C6964 / weight 400 — the mockup's inline
              lime-700 bold clamp is fully overridden by the global `p` rule.
              Reproduced as rendered, not as authored. */}
          <p className="asta-hero-rise asta-q-rise-3" style={{ margin: "24px 0 0" }}>
            Built on Science. Proven by Systems.
          </p>

          <p
            className="asta-hero-rise asta-q-rise-4"
            style={{ maxWidth: "44ch", margin: "18px 0 0" }}
          >
            Integrated quality management, global compliance and end-to-end
            traceability to deliver consistent value to our partners worldwide.
          </p>

          <span
            className="asta-hero-rise asta-q-rise-5"
            style={{
              display: "block",
              width: 84,
              height: 3,
              background: "var(--green-600)",
              margin: "34px 0 0",
            }}
          />
        </div>
        <div />
      </div>
    </section>
  );
}
