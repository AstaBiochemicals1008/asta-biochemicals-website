import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="asta-hero-pan"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(120deg,#ffffff 0%,#f4f8ee 55%,#eef4e2 100%)",
      }}
    >
      <Image
        src="/assets/company-hero-molecule.png"
        alt="Green molecular render on a leaf"
        className="asta-co-hero-float"
        width={1717}
        height={916}
        sizes="56vw"
        preload
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "56%",
          height: "100%",
          objectFit: "cover",
          WebkitMaskImage: "linear-gradient(90deg,transparent 0,#000 22%)",
          maskImage: "linear-gradient(90deg,transparent 0,#000 22%)",
          zIndex: 0,
        }}
      />

      <div
        className="asta-co-chero-grid"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1320,
          margin: "0 auto",
          padding: "clamp(56px,6vw,100px) clamp(20px,4vw,48px)",
        }}
      >
        <div className="asta-reveal" data-reveal-delay="0">
          {/* The prototype's inline 12px/500/0.16em was overridden by its
              uppercase-eyebrow rule to 13px/600/0.18em — i.e. `.asta-eyebrow`. */}
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
            Rooted in science. Driven by purpose.
          </div>

          {/* Size/weight/colour come from the global h1 rule. The inner span
              keeps its lime colour — the h1 !important doesn't reach it. */}
          <h1
            className="asta-hero-rise asta-hero-rise-2"
            style={{ margin: "26px 0 0" }}
          >
            Advancing Life Science.
            <br />
            <span style={{ color: "var(--lime-600)" }}>Enriching Lives.</span>
          </h1>

          {/* 18px/1.7 from `p.asta-hero-rise-3`; colour from the global p rule. */}
          <p
            className="asta-hero-rise asta-hero-rise-3"
            style={{ maxWidth: "42ch", margin: "22px 0 0" }}
          >
            Asta is a trusted partner in specialty chemical manufacturing and
            biopharmaceutical supply, driven by science, integrity and a
            commitment to global health.
          </p>
        </div>

        <div className="asta-co-chero-art" aria-hidden="true" />
      </div>
    </section>
  );
}
