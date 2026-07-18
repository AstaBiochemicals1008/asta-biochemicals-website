import { Fragment } from "react";
import Image from "next/image";

const STEPS = [
  {
    num: "01",
    label: "REQUIREMENT REVIEW",
    body: "Understanding your needs in detail",
    media: "/assets/proc-1.png",
  },
  {
    num: "02",
    label: "TECHNICAL EVALUATION",
    body: "Feasibility and solution mapping",
    media: "/assets/proc-2.png",
  },
  {
    num: "03",
    label: "DEVELOPMENT / SUPPLY",
    body: "Custom development or supplier selection",
    media: "/assets/proc-3.png",
  },
  {
    num: "04",
    label: "QUALIFICATION SUPPORT",
    body: "Documentation and regulatory support",
    media: "/assets/proc-4.png",
  },
  {
    num: "05",
    label: "COMMERCIAL SUPPLY",
    body: "Reliable delivery and ongoing support",
    media: "/assets/proc-5.png",
  },
];

export default function Process() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "clamp(8px,1.5vw,16px) 0 clamp(56px,6vw,88px)",
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
          className="asta-reveal"
          data-reveal-delay="0"
          style={{
            background: "#fff",
            border: "1px solid var(--gray-100)",
            borderRadius: 20,
            padding: "clamp(34px,4vw,52px) clamp(24px,3vw,48px)",
            boxShadow: "0 14px 40px rgba(17,48,43,0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: "clamp(34px,4vw,48px)",
            }}
          >
            {/* .asta-eyebrow supplies 13px/600/0.18em; the inline colour
                overrides the class's var(--brand), as in the prototype. */}
            <span className="asta-eyebrow" style={{ color: "var(--green-900)" }}>
              From Inquiry to Delivery
            </span>
            <span
              style={{ flex: "0 0 44px", height: 2, background: "var(--lime-500)" }}
            />
          </div>

          {/* Steps and connectors are siblings — the nth-child stagger in
              solutions.css counts them together (steps 1,3,5,7,9). */}
          <div
            className="asta-sol-proc-row"
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 8,
            }}
          >
            {STEPS.map((step, i) => (
              <Fragment key={step.num}>
                {i > 0 && (
                  <div
                    className="asta-sol-proc-conn"
                    aria-hidden="true"
                    style={{
                      flex: "1 1 auto",
                      minWidth: 18,
                      height: 2,
                      marginTop: 76,
                      position: "relative",
                      background: "var(--gray-200)",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%,-50%)",
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        background: "var(--lime-500)",
                      }}
                    />
                  </div>
                )}
                <div
                  className="asta-sol-proc-step"
                  style={{
                    flex: "0 0 auto",
                    width: 166,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: 26,
                      color: "var(--lime-600)",
                      lineHeight: 1,
                      marginBottom: 14,
                    }}
                  >
                    {step.num}
                  </div>
                  <span
                    style={{
                      width: 96,
                      height: 96,
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "1.5px solid var(--lime-500)",
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    <Image
                      src={step.media}
                      alt=""
                      fill
                      sizes="96px"
                      style={{ objectFit: "cover" }}
                    />
                  </span>
                  {/* Uppercase here is literal text, not `text-transform`, so
                      the eyebrow rule never applied — inline type is live. */}
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 13,
                      letterSpacing: "0.03em",
                      color: "var(--green-900)",
                      marginTop: 18,
                      lineHeight: 1.32,
                    }}
                  >
                    {step.label}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      lineHeight: 1.45,
                      color: "var(--gray-500)",
                      marginTop: 9,
                    }}
                  >
                    {step.body}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
