import Image from "next/image";

export default function ConnectHero() {
  return (
    <section
      className="asta-hero-pan"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(115deg,#ffffff 0%,#fbfdf3 55%,#f2f7e2 100%)",
        backgroundSize: "180% 180%",
      }}
    >
      <div className="asta-cn-hero-art" aria-hidden="true">
        <Image
          src="/assets/connect-hero.png"
          alt=""
          fill
          sizes="100vw"
          className="asta-cn-hero-float"
          style={{ objectFit: "cover", objectPosition: "center right" }}
        />
        {/* White scrim so the left-hand copy stays crisp over the art. */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg,#ffffff 0%,rgba(255,255,255,0.92) 34%,rgba(255,255,255,0.4) 55%,rgba(255,255,255,0) 78%)",
            pointerEvents: "none",
          }}
        />
      </div>

      <div
        className="asta-cn-hero-grid"
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
            className="asta-eyebrow asta-hero-rise asta-cn-rise-1"
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
            Let&rsquo;s start the conversation.
          </div>

          {/* Size/weight/colour come from the global h1 rule — the prototype's
              inline 800 / clamp(2.4rem…) / --green-900 never landed. */}
          <h1
            className="asta-hero-rise asta-cn-rise-2"
            style={{ margin: "16px 0 0" }}
          >
            Let&rsquo;s Connect
          </h1>

          {/* Renders at the global 14px/400/#5C6964 — this paragraph carries no
              opt-out in the prototype, so its inline 700 / clamp(1.2rem…) /
              --lime-700 is dead. */}
          <p className="asta-hero-rise asta-cn-rise-3" style={{ margin: "14px 0 0" }}>
            We&rsquo;re here to help.
          </p>

          {/* 18px/1.7 comes from `p.asta-cn-rise-4`; colour from the global p rule. */}
          <p
            className="asta-hero-rise asta-cn-rise-4"
            style={{ maxWidth: "42ch", margin: "18px 0 0" }}
          >
            Whether you have a question, need technical guidance, or want to
            explore a partnership, our team is ready to assist you.
          </p>
        </div>
        <div />
      </div>
    </section>
  );
}
