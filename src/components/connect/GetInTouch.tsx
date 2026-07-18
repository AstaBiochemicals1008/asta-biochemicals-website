import { Mail, MapPin, PhoneCall } from "lucide-react";

const cardStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid var(--gray-200)",
  borderRadius: 16,
  padding: 20,
  boxShadow: "0 14px 34px rgba(17,48,43,0.07)",
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const iconStyle: React.CSSProperties = {
  width: 19,
  height: 19,
  color: "var(--green-700)",
};

const bodyStyle: React.CSSProperties = {
  fontSize: 13,
  lineHeight: 1.55,
  color: "var(--gray-600)",
};

const linkStyle: React.CSSProperties = {
  color: "var(--green-700)",
  fontWeight: 600,
};

/** Card header. NOTE: the title is a <div>, not an <h3> — deliberately. The
 *  global `h3 { color: #15352f !important }` would repaint it away from the
 *  prototype's --green-900, so the rendered design depends on it not being a
 *  heading. */
function CardHead({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span
        className="asta-cn-cc-ico"
        style={{
          flexShrink: 0,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "var(--green-050)",
        }}
      >
        {icon}
      </span>
      <div
        className="asta-cn-cc-title"
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          color: "var(--green-900)",
        }}
      >
        {title}
      </div>
    </div>
  );
}

export default function GetInTouch() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "clamp(20px,3vw,44px) 0 clamp(32px,4vw,56px)",
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,48px)",
        }}
      >
        <div className="asta-reveal" data-reveal-delay="0">
          {/* Type comes from the global h2 rule. */}
          <h2 style={{ margin: 0 }}>Get in Touch</h2>
          <span
            style={{
              display: "block",
              width: 48,
              height: 3,
              background: "var(--lime-500)",
              borderRadius: 2,
              margin: "14px 0 0",
            }}
          />
          {/* Prototype holds this on one row (nowrap) on wide screens; it must
              wrap on mobile or it overflows the viewport (see .asta-cn-intro). */}
          <p className="asta-cn-intro" style={{ maxWidth: "none", margin: "20px 0 0" }}>
            Reach out to us for product inquiries, technical guidance,
            partnerships or any other information.
          </p>
        </div>

        <div
          className="asta-cn-contact-grid"
          style={{
            gap: "clamp(16px,1.6vw,20px)",
            margin: "clamp(28px,3.4vw,40px) 0 0",
            alignItems: "stretch",
          }}
        >
          <div
            className="asta-reveal asta-cn-cc"
            data-reveal-delay="0"
            style={cardStyle}
          >
            <CardHead icon={<MapPin style={iconStyle} />} title="Address" />
            <div style={bodyStyle}>
              <strong
                style={{
                  display: "block",
                  fontSize: 13,
                  color: "var(--green-900)",
                  fontWeight: 700,
                  marginBottom: 5,
                }}
              >
                ASTA BIOCHEMICALS PVT. LTD.
              </strong>
              B-326/1, 3rd Main, 10th Cross,
              <br />
              Near TVS Cross, 1st Stage, 1st Phase,
              <br />
              Peenya Industrial Area,
              <br />
              Bangalore &ndash; 560 058, INDIA
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(16px,1.6vw,20px)",
            }}
          >
            <div
              className="asta-reveal asta-cn-cc"
              data-reveal-delay="90"
              style={{ ...cardStyle, flex: 1 }}
            >
              <CardHead icon={<Mail style={iconStyle} />} title="Email" />
              <div style={{ ...bodyStyle, display: "flex", flexDirection: "column", gap: 4 }}>
                <a
                  className="asta-nf-link"
                  href="mailto:sales@astabiochemicals.com"
                  style={{ ...linkStyle, display: "block" }}
                >
                  sales@astabiochemicals.com
                </a>
                <a
                  className="asta-nf-link"
                  href="mailto:enquiries@astabiochemicals.com"
                  style={{ ...linkStyle, display: "block" }}
                >
                  enquiries@astabiochemicals.com
                </a>
              </div>
            </div>

            <div
              className="asta-reveal asta-cn-cc"
              data-reveal-delay="180"
              style={{ ...cardStyle, flex: 1 }}
            >
              <CardHead icon={<PhoneCall style={iconStyle} />} title="Phone" />
              <div style={bodyStyle}>
                <a
                  className="asta-nf-link"
                  href="tel:+918041651010"
                  style={linkStyle}
                >
                  +91 80 4165 1010
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
