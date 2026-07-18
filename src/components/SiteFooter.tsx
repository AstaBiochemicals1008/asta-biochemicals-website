import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { LEGAL_LINKS, QUICK_LINKS } from "@/lib/nav";

const columnStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 16,
};

const headStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontWeight: 600,
  letterSpacing: "0.02em",
  color: "var(--green-900)",
};

const linkStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 9,
};

const chevronStyle: React.CSSProperties = {
  width: 14,
  height: 14,
  color: "var(--green-700)",
  flexShrink: 0,
};

export default function SiteFooter() {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(115deg,#ffffff 0%,#f6f8e8 42%,#e3edc6 72%,#cfe0a8 100%)",
      }}
    >
      <div
        className="asta-footer-grid"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1480,
          margin: "0 auto",
          padding:
            "clamp(40px,4vw,58px) clamp(22px,4vw,52px) clamp(20px,2.2vw,28px)",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1.2fr",
          gap: "clamp(28px,3.6vw,64px)",
        }}
      >
        <div className="asta-foot-brand" style={{ maxWidth: 320 }}>
          <Image
            src="/assets/asta-logo-footer.png"
            alt="ASTA — scientifically driven."
            width={222}
            height={82}
            style={{ height: 82, width: "auto", display: "block" }}
          />
          {/* Type comes from `.asta-foot-brand p` + the global p rule. */}
          <p style={{ margin: "22px 0 0" }}>
            Delivering sustainable chemical solutions through research-driven
            innovation, advanced manufacturing and global partnerships.
          </p>
        </div>

        <nav style={columnStyle}>
          <div className="asta-foot-head" style={headStyle}>
            QUICK LINKS
            <div
              style={{
                width: 32,
                height: 2,
                background: "var(--lime-500)",
                marginTop: 12,
              }}
            />
          </div>
          {QUICK_LINKS.map((item) => (
            <Link
              key={item.label}
              className="asta-nf-link"
              style={linkStyle}
              href={item.href}
            >
              <ChevronRight style={chevronStyle} />
              {item.label}
            </Link>
          ))}
        </nav>

        <nav style={columnStyle}>
          <div className="asta-foot-head" style={headStyle}>
            LEGAL
            <div
              style={{
                width: 32,
                height: 2,
                background: "var(--lime-500)",
                marginTop: 12,
              }}
            />
          </div>
          {LEGAL_LINKS.map((item) => (
            <Link
              key={item.label}
              className="asta-nf-link"
              style={linkStyle}
              href={item.href}
            >
              <ChevronRight style={chevronStyle} />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          borderTop: "1px solid rgba(23,63,44,0.18)",
        }}
      >
        <div
          style={{
            maxWidth: 1480,
            margin: "0 auto",
            padding: "18px clamp(22px,4vw,52px)",
            display: "flex",
            flexWrap: "wrap",
            gap: "12px 28px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 12.5, color: "var(--green-800)" }}>
            © 2026 ASTA Biochemicals Pvt. Ltd. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
