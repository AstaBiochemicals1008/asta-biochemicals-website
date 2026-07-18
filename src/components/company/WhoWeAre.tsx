import Image from "next/image";
import { Check, Globe } from "lucide-react";

const FOCUS = [
  "Scientific excellence.",
  "Reliable execution.",
  "Long-term trust.",
];

export default function WhoWeAre() {
  return (
    <section
      style={{
        position: "relative",
        borderTop: "1px solid var(--gray-200)",
        overflow: "hidden",
      }}
    >
      <Image
        src="/assets/company-whoweare-globe.png"
        alt="Glass globe on moss in sunlight"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", zIndex: 0 }}
      />
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(270deg,#ffffff 0%,rgba(255,255,255,0.94) 40%,rgba(255,255,255,0.72) 58%,rgba(255,255,255,0) 78%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(28px,3.2vw,48px) clamp(20px,4vw,48px)",
        }}
      >
        <div className="asta-co-who-grid">
          <div
            className="asta-reveal asta-co-rv-left"
            data-reveal-delay="0"
            style={{
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(3px)",
              border: "1px solid rgba(255,255,255,0.8)",
              borderRadius: 16,
              padding: "clamp(20px,2vw,30px)",
              textAlign: "center",
              boxShadow: "0 12px 34px rgba(17,48,43,0.08)",
            }}
          >
            <span
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                border: "1.5px solid var(--lime-500)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Globe
                style={{ width: 24, height: 24, color: "var(--green-700)" }}
              />
            </span>
            <span
              style={{
                display: "block",
                width: 36,
                height: 2,
                background: "var(--lime-500)",
                margin: "16px auto",
              }}
            />
            {/* Plain divs — no global type rule reaches these, so the
                prototype's inline sizes are the rendered sizes. */}
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: 40,
                lineHeight: 0.95,
                color: "var(--green-900)",
              }}
            >
              100+
            </div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: 28,
                color: "var(--lime-600)",
                marginTop: 4,
              }}
            >
              years of
            </div>
            <div
              style={{
                fontSize: 16,
                lineHeight: 1.5,
                color: "var(--gray-600)",
                marginTop: 10,
              }}
            >
              Cumulative Global Experience
            </div>
          </div>

          <div className="asta-reveal asta-co-rv-right" data-reveal-delay="120">
            <p style={{ margin: 0 }}>
              ASTA BIOCHEMICALS is an ISO-certified Indian company serving
              international customers through specialty chemical manufacturing
              and biopharmaceutical supply solutions.
            </p>
            {/* Inline 17px/700/green-900 here is dead — the global p rule wins,
                so this renders as body copy with a lime underline. Only the
                box properties survive. */}
            <p
              style={{
                display: "inline-block",
                margin: "22px 0 16px",
                paddingBottom: 8,
                borderBottom: "2px solid var(--lime-500)",
              }}
            >
              Our focus is simple:
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
            >
              {FOCUS.map((label) => (
                <div
                  key={label}
                  className="asta-co-focus-item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    background: "rgba(255,255,255,0.72)",
                    border: "1px solid var(--gray-200)",
                    borderRadius: 12,
                    padding: "14px 18px",
                    boxShadow: "0 6px 18px rgba(17,48,43,0.05)",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      border: "1.5px solid var(--lime-500)",
                      background: "#fff",
                    }}
                  >
                    <Check
                      style={{
                        width: 18,
                        height: 18,
                        color: "var(--green-700)",
                      }}
                    />
                  </span>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "var(--green-900)",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
