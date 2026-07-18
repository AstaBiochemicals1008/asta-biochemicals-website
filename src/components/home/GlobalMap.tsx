import Image from "next/image";

/**
 * Global-presence map. The artwork (global-map-v2.png) already has the heading,
 * trade-route arcs, country labels, node dots and India glow baked in, so this
 * only frames it with the scroll wipe-in, a subtle Ken Burns drift and a light
 * sweep — no CSS node/glow overlays (they would duplicate the baked ones).
 */
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
            width={1553}
            height={1013}
            sizes="(max-width: 1320px) 100vw, 1320px"
            style={{ display: "block", width: "100%", height: "auto" }}
          />
          <div aria-hidden="true" className="asta-map-sweep" />
        </div>
      </div>
    </section>
  );
}
