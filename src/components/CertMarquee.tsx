import Image from "next/image";

export const CERTS = [
  { src: "/assets/cert-badge3-iso9001.png", alt: "ISO 9001" },
  { src: "/assets/cert-badge3-iso14001.png", alt: "ISO 14001" },
  { src: "/assets/cert-badge3-iso45001.png", alt: "ISO 45001" },
  { src: "/assets/cert-badge3-ecovadis.png", alt: "EcoVadis Bronze" },
  { src: "/assets/cert-badge3-halal.png", alt: "Halal certified" },
  { src: "/assets/cert-badge3-klbd.png", alt: "K-LBD" },
];

/**
 * Infinite certification marquee.
 *
 * The track holds the badge list twice; the CSS animation translates it -50%,
 * so the duplicate set scrolls in seamlessly. The second copy is aria-hidden.
 */
export default function CertMarquee() {
  return (
    <div
      className="asta-cert-marquee"
      style={{
        margin: "clamp(40px,4.5vw,60px) 0 0",
        overflow: "visible",
        WebkitMask:
          "linear-gradient(90deg,transparent 0,#000 7%,#000 93%,transparent 100%)",
        mask: "linear-gradient(90deg,transparent 0,#000 7%,#000 93%,transparent 100%)",
      }}
    >
      <div
        className="asta-cert-track"
        style={{
          display: "flex",
          gap: 32,
          width: "max-content",
          padding: "14px 0",
        }}
      >
        {[0, 1].map((copy) =>
          CERTS.map((cert) => (
            <div
              key={`${copy}-${cert.alt}`}
              className="asta-cert-card"
              aria-hidden={copy === 1 ? true : undefined}
              style={{
                flex: "0 0 auto",
                width: 134,
                height: 134,
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 8px 22px rgba(0,0,0,0.16)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
              }}
            >
              <Image
                src={cert.src}
                alt={copy === 1 ? "" : cert.alt}
                width={94}
                height={94}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          )),
        )}
      </div>
    </div>
  );
}
