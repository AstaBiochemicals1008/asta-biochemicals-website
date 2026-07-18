import Image from "next/image";

/** Trade-route nodes, positioned as percentages over the map artwork. */
const NODES = [
  { left: "17%", top: "50%", delay: "0.2s" },
  { left: "42.5%", top: "27%", delay: "0.6s" },
  { left: "52.5%", top: "32%", delay: "1s" },
  { left: "56%", top: "37.5%", delay: "1.4s" },
  { left: "60%", top: "44%", delay: "1.8s" },
  { left: "60%", top: "56%", delay: "2.2s" },
  { left: "49%", top: "74%", delay: "2.6s" },
  { left: "85%", top: "46%", delay: "3s" },
];

const pingStyle: React.CSSProperties = {
  position: "absolute",
  left: "69%",
  top: "55%",
  width: "34%",
  height: "48%",
  borderRadius: "50%",
  border: "2px solid rgba(163,230,53,0.55)",
  mixBlendMode: "screen",
  pointerEvents: "none",
};

export default function GlobalMap() {
  return (
    <section
      id="global-map"
      style={{
        background: "#fff",
        padding: "clamp(32px,4vw,56px) 0 clamp(8px,1.5vw,20px)",
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
          className="asta-rv asta-map-reveal"
          style={{ position: "relative", borderRadius: 18, overflow: "hidden" }}
        >
          <Image
            className="asta-map-img"
            src="/assets/global-map-v2.png"
            alt="ASTA global presence — connecting science from India to markets worldwide"
            width={1536}
            height={1024}
            sizes="(max-width: 1320px) 100vw, 1320px"
            style={{ display: "block", width: "100%", height: "auto" }}
          />

          <div aria-hidden="true" className="asta-map-sweep" />

          {NODES.map((node) => (
            <span
              key={`${node.left}-${node.top}`}
              aria-hidden="true"
              className="asta-map-node"
              style={{
                left: node.left,
                top: node.top,
                animationDelay: node.delay,
              }}
            />
          ))}

          {/* Origin glow over India. */}
          <div
            aria-hidden="true"
            className="asta-map-glow"
            style={{
              position: "absolute",
              left: "69%",
              top: "55%",
              width: "26%",
              height: "38%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(190,242,100,0.85) 0%,rgba(163,230,53,0.35) 40%,rgba(163,230,53,0) 70%)",
              mixBlendMode: "screen",
              pointerEvents: "none",
              filter: "blur(6px)",
            }}
          />
          <span aria-hidden="true" className="asta-map-ping" style={pingStyle} />
          <span
            aria-hidden="true"
            className="asta-map-ping p2"
            style={pingStyle}
          />
          <span
            aria-hidden="true"
            className="asta-map-ping p3"
            style={pingStyle}
          />
        </div>
      </div>
    </section>
  );
}
