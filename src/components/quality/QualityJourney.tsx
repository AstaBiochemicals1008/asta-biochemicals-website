import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";

/**
 * "Our Quality Journey" — seven circular photo steps joined by dashed
 * connectors.
 *
 * The connectors must stay real siblings of the steps: the CSS stagger keys
 * off `:nth-child()` within the row (steps land on odd positions, connectors
 * on even ones), so the flat sibling order below is load-bearing.
 */
const STEPS = [
  { src: "/assets/q-journey-1.png", label: ["Raw Material", "Supply"] },
  { src: "/assets/q-journey-2.png", label: ["Approved", "Supplier"] },
  { src: "/assets/q-journey-3.png", label: ["Manufacturing", "Control"] },
  { src: "/assets/q-journey-4.png", label: ["QC Review", "& Testing"] },
  { src: "/assets/q-journey-5.png", label: ["Documentation", "& Traceability"] },
  { src: "/assets/q-journey-6.png", label: ["Dispatch"] },
  { src: "/assets/q-journey-7.png", label: ["Customer", "Delivery"] },
];

export default function QualityJourney() {
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
          className="asta-reveal"
          data-reveal-delay="0"
          style={{
            background: "#fff",
            border: "1px solid var(--gray-200)",
            borderRadius: 16,
            padding: "clamp(28px,3vw,42px) clamp(20px,3vw,40px)",
            boxShadow: "0 12px 36px rgba(17,48,43,0.06)",
          }}
        >
          <div
            className="asta-eyebrow"
            style={{
              color: "var(--green-900)",
              marginBottom: "clamp(20px,2.4vw,32px)",
            }}
          >
            Our Quality Journey
          </div>

          <div className="asta-q-journey-row">
            {STEPS.map((step, i) => (
              <Fragment key={step.src}>
                {i > 0 && (
                  <div className="asta-q-journey-conn">
                    <ChevronRight width={15} height={15} />
                  </div>
                )}
                <div className="asta-q-journey-step">
                  <span className="asta-q-journey-ring">
                    <Image
                      src={step.src}
                      alt=""
                      fill
                      sizes="74px"
                      style={{ objectFit: "cover" }}
                    />
                  </span>
                  <div className="asta-q-journey-label">
                    {step.label.map((line, n) => (
                      <Fragment key={line}>
                        {n > 0 && <br />}
                        {line}
                      </Fragment>
                    ))}
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
