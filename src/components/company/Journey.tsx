import Image from "next/image";
import { BarChart3, Globe, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Phase = {
  icon: LucideIcon;
  label: string;
  years: string;
  ink: string;
  dot: string;
  chevron: string;
  gradient: string;
  delay: string;
};

const PHASES: Phase[] = [
  {
    icon: Lightbulb,
    label: "INNOVATION",
    years: "(2015-2017)",
    ink: "#4a7c1e",
    dot: "#4a7c1e",
    chevron: "#8bbf4d",
    gradient: "linear-gradient(90deg,#eef4e0,#f7faef)",
    delay: "0",
  },
  {
    icon: Globe,
    label: "GLOBAL EXPANSION",
    years: "(2019-2021)",
    ink: "#11302b",
    dot: "#11302b",
    chevron: "#3f766a",
    gradient: "linear-gradient(90deg,#e6f0ec,#f2f8f4)",
    delay: "140",
  },
  {
    icon: BarChart3,
    label: "SCALE-UP",
    years: "(2023-2026)",
    ink: "#6b8f2a",
    dot: "#6b8f2a",
    chevron: "#a8cf5e",
    gradient: "linear-gradient(90deg,#f4f8e6,#fbfdf3)",
    delay: "280",
  },
];

type Node = { year: string; label: string; ink: string; size: number };

const NODES: Node[] = [
  { year: "2015", label: "Bangalore R&D Centre", ink: "#6b8f2a", size: 210 },
  { year: "2016", label: "Molecule Development", ink: "#6b8f2a", size: 210 },
  {
    year: "2017",
    // Non-breaking space keeps "(Small Scale)" together on one line.
    label: "Manufacturing Started (Small Scale)",
    ink: "#6b8f2a",
    size: 208,
  },
  { year: "2019", label: "EU Office & Warehouse", ink: "#11302b", size: 203 },
  {
    year: "2021",
    label: "ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 Certification",
    ink: "#11302b",
    size: 202,
  },
  {
    year: "2023",
    label: "Own Manufacturing (Commercial)",
    ink: "#11302b",
    size: 207,
  },
  {
    year: "2024",
    label:
      "Warehouse Expansion in WESTERN India on Mumbai-Pune economic growth corridor",
    ink: "#6b8f2a",
    size: 204,
  },
  { year: "2025", label: "R&D Expansion in Bangalore", ink: "#6b8f2a", size: 203 },
  {
    year: "2026",
    label: "Exclusive Global Distribution Partnerships",
    ink: "#6b8f2a",
    size: 202,
  },
];

export default function Journey() {
  return (
    <section
      style={{
        background: "#fff",
        borderTop: "1px solid var(--gray-200)",
        padding: "clamp(44px,5vw,76px) 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,48px)",
        }}
      >
        <div
          className="asta-reveal asta-co-rv-blur"
          data-reveal-delay="0"
          style={{ textAlign: "center" }}
        >
          <div className="asta-eyebrow" style={{ color: "var(--lime-600)" }}>
            Our Journey
          </div>
          {/* 24px/1.2 from `.asta-co-jtitle`; weight/colour/tracking from the
              global h2 rule (the inline 800 / -0.02em never rendered). */}
          <h2 className="asta-co-jtitle" style={{ margin: "14px 0 0" }}>
            From Innovation to Global Impact
          </h2>
          <span
            aria-hidden="true"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 16,
            }}
          >
            <span
              style={{ width: 60, height: 2, background: "var(--lime-500)" }}
            />
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "var(--lime-500)",
              }}
            />
            <span
              style={{ width: 60, height: 2, background: "var(--lime-500)" }}
            />
          </span>
        </div>

        <div className="asta-co-jphases">
          {PHASES.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.label}
                className="asta-reveal asta-co-rv-zoom asta-co-jphase"
                data-reveal-delay={phase.delay}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: phase.gradient,
                  borderRadius: 14,
                  padding: "14px 40px 14px 16px",
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <span
                  className="asta-co-jphase-ico"
                  style={{
                    flexShrink: 0,
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    background: phase.dot,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon style={{ width: 22, height: 22, color: "#fff" }} />
                </span>
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 800,
                      fontSize: "clamp(14px,1vw,17px)",
                      letterSpacing: "0.04em",
                      color: phase.ink,
                    }}
                  >
                    {phase.label}
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      fontWeight: 600,
                      color: phase.ink,
                      opacity: 0.72,
                    }}
                  >
                    {phase.years}
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    right: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: phase.chevron,
                    fontWeight: 700,
                    fontSize: 19,
                  }}
                >
                  ›
                </span>
              </div>
            );
          })}
        </div>

        <div className="asta-co-jtimeline">
          <div
            aria-hidden="true"
            className="asta-reveal asta-co-jline"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 103,
              height: 2,
              background:
                "linear-gradient(90deg,#6b8f2a 0%,#6b8f2a 33%,#11302b 40%,#11302b 60%,#6b8f2a 67%,#6b8f2a 100%)",
            }}
          />
          <div
            className="asta-reveal asta-co-jgrid"
            data-reveal-delay="80"
            style={{ position: "relative" }}
          >
            {NODES.map((node) => (
              <div
                key={node.year}
                className="asta-co-jnode"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Image
                  src={`/assets/journey-${node.year}.png`}
                  alt={`${node.year} milestone`}
                  width={node.size}
                  height={node.size}
                  sizes="84px"
                  style={{
                    width: 84,
                    height: 84,
                    borderRadius: "50%",
                    objectFit: "cover",
                    boxShadow: "0 6px 16px rgba(17,48,43,0.12)",
                    border: "3px solid #fff",
                  }}
                />
                <span
                  style={{ width: 2, height: 20, background: "var(--gray-300)" }}
                />
                <span
                  className="asta-co-jdot"
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: "50%",
                    background: node.ink,
                    border: "3px solid #fff",
                    boxShadow: `0 0 0 2px ${node.ink}`,
                  }}
                />
                <div
                  className="asta-co-jyear"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: 16,
                    color: node.ink,
                    marginTop: 14,
                  }}
                >
                  {node.year}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    lineHeight: 1.45,
                    color: "var(--gray-600)",
                    marginTop: 6,
                    maxWidth: 150,
                  }}
                >
                  {node.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
