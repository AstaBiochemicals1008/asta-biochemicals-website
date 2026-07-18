import Image from "next/image";

/**
 * "Compliance Dashboard" panel — a static 4-up grid of certification cards.
 *
 * Deliberately NOT the shared `CertMarquee`: that component scrolls the
 * `cert-badge3-*` badges, whereas this page shows a fixed grid of
 * `certsq-*` photo cards with a title/subtitle. The prototype's class names
 * (`.asta-cert-*`) collide with the marquee's, hence `.asta-q-cert-*`.
 *
 * The prototype also carried an `.asta-dash-grid` block below this one, but
 * it was `display:none` and empty, so it is omitted.
 */
const CERTS = [
  { src: "/assets/certsq-1.png", title: "ISO 9001:2015", sub: "Quality Management System" },
  { src: "/assets/certsq-2.png", title: "REACH", sub: "Regulatory Compliance Support" },
  { src: "/assets/certsq-3.png", title: "Intertek", sub: "Independent Quality Verification" },
  { src: "/assets/certsq-4.png", title: "ISO 14001", sub: "Environmental Management System" },
  { src: "/assets/certsq-5.png", title: "Kosher", sub: "Certified" },
  { src: "/assets/certsq-6.png", title: "EcoVadis", sub: "Bronze Sustainability Rating" },
  { src: "/assets/certsq-7.png", title: "ISO 45001", sub: "Occupational Health & Safety" },
  { src: "/assets/certsq-8.png", title: "WHO-GMP License", sub: "Authorized Pharmaceutical Supply" },
];

export default function ComplianceDashboard() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "clamp(8px,1.5vw,20px) 0 clamp(28px,3vw,40px)",
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
          data-reveal-delay="0"
          style={{
            background: "#fff",
            border: "1px solid var(--gray-200)",
            borderRadius: 16,
            padding: "clamp(26px,3vw,38px)",
            boxShadow: "0 12px 36px rgba(17,48,43,0.06)",
          }}
        >
          <div
            className="asta-eyebrow"
            style={{
              color: "var(--green-900)",
              paddingBottom: 18,
              borderBottom: "1px solid var(--gray-200)",
            }}
          >
            Compliance Dashboard
          </div>

          <div className="asta-q-cert-grid">
            {CERTS.map((cert) => (
              <div className="asta-q-cert-card" key={cert.title}>
                <div className="asta-q-cert-img">
                  <Image
                    src={cert.src}
                    alt=""
                    fill
                    sizes="(max-width: 560px) 45vw, (max-width: 920px) 22vw, 15vw"
                  />
                </div>
                <div className="asta-q-cert-txt">
                  <div className="asta-q-cert-title">{cert.title}</div>
                  <div className="asta-q-cert-sub">{cert.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
