"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";
import { CONNECT_HREF, MAIN_NAV } from "@/lib/nav";

// NOTE: no fontWeight here — `.asta-navlink` forces 500, which overrode the
// prototype's inline 600.
const navLinkStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 5,
  textDecoration: "none",
  fontSize: 15,
  whiteSpace: "nowrap",
  padding: "4px 0",
  borderBottom: "2px solid transparent",
};

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  // All nav targets are top-level routes, so an exact match is the active page.
  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 60,
          height: 88,
          overflow: "visible",
          background:
            "linear-gradient(115deg,#ffffff 0%,#f6f8e8 42%,#e3edc6 72%,#cfe0a8 100%)",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            maxWidth: 1480,
            margin: "0 auto",
            padding: "0 clamp(20px,3vw,48px)",
            display: "flex",
            alignItems: "center",
            gap: "clamp(14px,1.6vw,26px)",
          }}
        >
          <Link
            href="/"
            aria-label="ASTA Biochemicals home"
            className="asta-logo"
            style={{ flexShrink: 0, display: "flex", alignItems: "center" }}
          >
            <Image
              src="/assets/asta-logo.png"
              alt="ASTA — scientifically driven."
              width={198}
              height={54}
              preload
              style={{ height: 54, width: "auto", display: "block" }}
            />
          </Link>

          <nav
            className="asta-nav"
            style={{
              marginLeft: "auto",
              marginTop: 24,
              display: "flex",
              alignItems: "center",
              gap: "clamp(20px,2vw,36px)",
            }}
          >
            {MAIN_NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`asta-navlink${active ? " asta-navlink-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                  style={navLinkStyle}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div
            className="asta-search"
            style={{
              marginLeft: "auto",
              marginTop: 24,
              display: "flex",
              alignItems: "center",
              gap: "clamp(12px,1.4vw,20px)",
            }}
          >
            <Link
              href={CONNECT_HREF}
              className="asta-btn-green"
              style={{
                flexShrink: 0,
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "var(--green-600)",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 15,
                padding: "11px 22px",
                borderRadius: 999,
                textDecoration: "none",
                whiteSpace: "nowrap",
                boxShadow: "0 3px 12px rgba(120,140,30,0.28)",
              }}
            >
              Connect <ArrowRight style={{ width: 17, height: 17 }} />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            aria-controls="asta-mobile-nav"
            className="asta-burger"
            onClick={() => setMobileOpen((open) => !open)}
            style={{
              marginLeft: "auto",
              flexShrink: 0,
              alignItems: "center",
              justifyContent: "center",
              width: 42,
              height: 42,
              borderRadius: 10,
              background: "rgba(255,255,255,0.55)",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Menu style={{ width: 22, height: 22, color: "var(--green-900)" }} />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div
          id="asta-mobile-nav"
          style={{
            position: "static",
            zIndex: 55,
            background: "var(--green-900)",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            flexDirection: "column",
            padding: "8px clamp(18px,3vw,40px) 18px",
          }}
        >
          {MAIN_NAV.map((item, i) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                aria-current={active ? "page" : undefined}
                style={{
                  // Active row: lime accent + a lime left bar; otherwise the
                  // prototype's scheme (only the last item pure white).
                  color: active
                    ? "var(--lime-400)"
                    : i === MAIN_NAV.length - 1
                      ? "#fff"
                      : "#eaf3f0",
                  fontWeight: active ? 700 : 500,
                  borderLeft: active
                    ? "3px solid var(--lime-500)"
                    : "3px solid transparent",
                  textDecoration: "none",
                  fontSize: 15,
                  padding: "13px 0 13px 12px",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
