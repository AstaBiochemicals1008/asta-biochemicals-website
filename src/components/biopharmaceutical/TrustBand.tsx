import { Fragment } from "react";
import { Atom, BadgeCheck, ShieldCheck } from "lucide-react";

type Item = {
  icon: React.ReactNode;
  title: React.ReactNode;
  sub: string;
  flex: number;
  minWidth: number;
};

const ITEMS: Item[] = [
  {
    icon: (
      <ShieldCheck
        style={{ width: 26, height: 26, color: "var(--green-700)" }}
      />
    ),
    title: (
      <>
        Trusted products.
        <br />
        Reliable supply.
      </>
    ),
    sub: "Consistent quality you can depend on.",
    flex: 1,
    minWidth: 220,
  },
  {
    icon: (
      <BadgeCheck style={{ width: 26, height: 26, color: "var(--green-700)" }} />
    ),
    title: "Regulatory confidence.",
    sub: "Supporting compliance and global standards.",
    flex: 1,
    minWidth: 220,
  },
  {
    icon: <Atom style={{ width: 26, height: 26, color: "var(--green-700)" }} />,
    title: "Partner with ASTA for quality solutions",
    sub: "that accelerate biopharmaceutical innovation.",
    flex: 1.1,
    minWidth: 240,
  },
];

function Divider() {
  return (
    <span
      aria-hidden="true"
      style={{ width: 1, alignSelf: "stretch", background: "var(--gray-200)" }}
    />
  );
}

export default function TrustBand() {
  return (
    <section style={{ background: "#fff", padding: "0 0 clamp(48px,6vw,84px)" }}>
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,48px)",
        }}
      >
        <div
          className="asta-reveal asta-bp-trust"
          data-reveal-delay="0"
          style={{
            background: "var(--gray-050)",
            border: "1px solid var(--gray-200)",
            borderRadius: 18,
            padding: "clamp(28px,3vw,42px) clamp(26px,3vw,48px)",
            display: "flex",
            alignItems: "center",
            gap: "clamp(22px,3vw,44px)",
            flexWrap: "wrap",
          }}
        >
          {ITEMS.map((item, i) => (
            /* The dividers are siblings, so the trust items land on
               nth-child 1 / 3 / 5 — which the bob delays in the page CSS
               depend on. Keep the interleaving. */
            <Fragment key={i}>
              {i > 0 && <Divider />}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 15,
                  flex: item.flex,
                  minWidth: item.minWidth,
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "var(--green-050)",
                  }}
                >
                  {item.icon}
                </span>
                <div>
                  {/* Plain divs, not headings — the inline type here is live. */}
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 700,
                      fontSize: 15.5,
                      color: "var(--green-900)",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      lineHeight: 1.5,
                      color: "var(--gray-500)",
                      marginTop: 7,
                    }}
                  >
                    {item.sub}
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
