import Image from "next/image";

/**
 * "Risk Management Approach" — five photo cards that wipe in left-to-right.
 *
 * Each card carries `asta-reveal` so MotionRoot drives its `is-in` class and
 * honours `data-reveal-delay` for the stagger (the prototype's separate
 * reveal driver did the same thing via an inline transition-delay).
 * The last card is the highlighted one.
 */
const RISKS = [
  { src: "/assets/q-risk-1.png", label: "Supplier Risk", delay: 0 },
  { src: "/assets/q-risk-2.png", label: "Manufacturing Risk", delay: 90 },
  { src: "/assets/q-risk-3.png", label: "Documentation Risk", delay: 180 },
  { src: "/assets/q-risk-4.png", label: "Compliance Risk", delay: 270 },
  { src: "/assets/q-risk-5.png", label: "Customer Assurance", delay: 360, hi: true },
];

export default function RiskManagement() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "clamp(12px,2vw,24px) 0 clamp(24px,3vw,40px)",
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,48px)",
        }}
      >
        <div
          className="asta-reveal asta-q-panel"
          data-reveal-delay="120"
          style={{
            background: "#fff",
            border: "1px solid var(--gray-200)",
            borderRadius: 16,
            padding: "clamp(24px,2.5vw,34px)",
            boxShadow: "0 12px 36px rgba(17,48,43,0.06)",
          }}
        >
          <div
            className="asta-eyebrow"
            style={{ color: "var(--green-900)", marginBottom: 26 }}
          >
            Risk Management Approach
          </div>

          <div className="asta-q-risk-grid">
            {RISKS.map((risk) => (
              <div
                key={risk.label}
                className={`asta-reveal asta-q-risk-card${risk.hi ? " is-hi" : ""}`}
                data-reveal-delay={risk.delay}
              >
                <div
                  style={{
                    position: "relative",
                    height: 118,
                    overflow: "hidden",
                    background: "var(--gray-050)",
                  }}
                >
                  <Image
                    src={risk.src}
                    alt=""
                    fill
                    sizes="(max-width: 560px) 90vw, (max-width: 920px) 45vw, 18vw"
                    className="asta-q-risk-media"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  className={`asta-q-risk-label${risk.hi ? " is-hi" : ""}`}
                >
                  {risk.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
