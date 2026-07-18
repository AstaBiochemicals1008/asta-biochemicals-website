import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="asta-hero-pan asta-home-hero"
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background:
          "linear-gradient(115deg,#ffffff 0%,var(--green-050) 55%,var(--green-100) 100%)",
      }}
    >
      {/* Fallback art — sits behind the video. */}
      <Image
        src="/assets/molecule-sphere.svg"
        alt=""
        aria-hidden="true"
        className="asta-hero-float"
        width={600}
        height={540}
        style={{
          position: "absolute",
          right: "3%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "min(46%,560px)",
          height: "auto",
          opacity: 0.92,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <video
        muted
        loop
        playsInline
        preload="auto"
        data-scroll-video
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "123%",
          height: "129%",
          objectFit: "cover",
          objectPosition: "left top",
          zIndex: 1,
        }}
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* White scrim keeps the left-hand copy crisp over the video. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          background:
            "linear-gradient(95deg,#ffffff 0%,#ffffff 29%,rgba(255,255,255,0.92) 42%,rgba(255,255,255,0.55) 58%,rgba(255,255,255,0.18) 75%,rgba(255,255,255,0) 92%)",
        }}
      />

      <div
        className="asta-hero-grid"
        style={{
          position: "relative",
          zIndex: 4,
          width: "100%",
          maxWidth: 1320,
          margin: "0 auto",
          padding:
            "clamp(36px,3.5vw,60px) clamp(20px,4vw,48px) clamp(36px,3.5vw,56px)",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        <div>
          <div
            className="asta-eyebrow asta-hero-rise asta-hero-rise-1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
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
            Scientifically driven. Commercially proven.
          </div>

          <div
            className="asta-hero-carousel"
            style={{ position: "relative", margin: "22px 0 0" }}
          >
            <div>
              <div className="asta-hero-slide asta-hero-slide--active">
                {/* Size/weight/colour come from the global h1 rule. The inner
                    span keeps its lime colour — the h1 !important doesn't
                    reach it. */}
                <h1
                  className="asta-hero-rise asta-hero-rise-2"
                  style={{ margin: 0 }}
                >
                  Advancing Biopharmaceuticals.
                  <br />
                  <span style={{ color: "var(--lime-700)" }}>
                    Accelerating Discovery Chemistry.
                  </span>
                </h1>
                {/* 18px/1.7 comes from `p.asta-hero-rise-3`; colour from the
                    global p rule. */}
                <p
                  className="asta-hero-rise asta-hero-rise-3"
                  style={{
                    borderLeft: "3px solid var(--lime-500)",
                    paddingLeft: 18,
                    maxWidth: "48ch",
                    margin: "24px 0 0",
                  }}
                >
                  ASTA combines scientific expertise, discovery chemistry,
                  process development and specialised manufacturing with a
                  trusted global network for biopharmaceutical products and
                  research solutions.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              margin: "32px 0 0",
            }}
          />
        </div>

        {/* Reserves the video area in the 2-col desktop layout. Hidden once the
            grid collapses to 1 col (≤900px) so it doesn't add dead height and
            push the hero past the viewport on mobile. */}
        <div
          aria-hidden="true"
          className="asta-hero-spacer"
          style={{ minHeight: "clamp(340px,34vw,440px)" }}
        />
      </div>
    </section>
  );
}
