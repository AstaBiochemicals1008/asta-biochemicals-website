import Image from "next/image";
import {
  ArrowRight,
  Factory,
  MapPin,
  ShoppingBag,
  TrainFront,
} from "lucide-react";

const MAP_HREF = "https://maps.app.goo.gl/SHYPxJ91D5PBnYyLA?g_st=aw";

const LANDMARKS = [
  { icon: TrainFront, name: "Peenya Metro Station", dist: "1.2 km" },
  { icon: ShoppingBag, name: "IKEA Bengaluru", dist: "4.5 km" },
  { icon: TrainFront, name: "Yeshwanthpur Railway Station", dist: "5.8 km" },
  { icon: Factory, name: "Peenya Industrial Area", dist: "0.8 km" },
];

export default function FindUs() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "clamp(16px,2vw,32px) 0 clamp(32px,4vw,56px)",
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
          className="asta-reveal"
          data-reveal-delay="0"
          style={{ marginBottom: "clamp(24px,3vw,34px)" }}
        >
          {/* Type comes from the global h2 rule. */}
          <h2 style={{ margin: 0 }}>Find Us</h2>
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
        </div>

        {/* Left: cropped static map (links out to Google Maps — no embed).
            Right: the "Our Location" panel, rebuilt as live text so the
            address stays editable (it was previously baked into the PNG). */}
        <div
          className="asta-reveal asta-cn-map-card"
          data-reveal-delay="80"
        >
          <a
            href={MAP_HREF}
            target="_blank"
            rel="noopener"
            aria-label="Open ASTA Biochemicals location in Google Maps"
            className="asta-cn-map-media"
          >
            <Image
              src="/assets/connect-map.png"
              alt="Map to ASTA Biochemicals Pvt. Ltd., Peenya Industrial Area, Bengaluru — with nearby landmarks"
              fill
              sizes="(max-width: 860px) 100vw, 60vw"
              style={{ objectFit: "cover" }}
            />
          </a>

          <div className="asta-cn-loc-panel">
            <div
              style={{ display: "flex", alignItems: "center", gap: 16 }}
            >
              <span className="asta-cn-loc-pin" aria-hidden="true">
                <MapPin style={{ width: 24, height: 24, color: "#1d3d2a" }} />
              </span>
              <div>
                <h3 className="asta-cn-loc-title">Our Location</h3>
                <span className="asta-cn-loc-rule" />
              </div>
            </div>

            <address className="asta-cn-loc-addr">
              B-326/1, 3rd Main, 10th Cross,
              <br />
              Near TVS Cross, 1st Stage, 1st Phase,
              <br />
              Peenya Industrial Area,
              <br />
              Bengaluru &ndash; 560 058,
              <br />
              Karnataka, India
            </address>

            <a
              href={MAP_HREF}
              target="_blank"
              rel="noopener"
              className="asta-cn-loc-btn asta-btn-green"
            >
              Get Directions
              <ArrowRight style={{ width: 18, height: 18 }} />
            </a>

            <div className="asta-cn-loc-divider" />

            <h4 className="asta-cn-nearby-title">Nearby Landmarks</h4>
            <ul className="asta-cn-lm-list">
              {LANDMARKS.map((lm) => {
                const Icon = lm.icon;
                return (
                  <li key={lm.name} className="asta-cn-lm">
                    <span className="asta-cn-lm-ico" aria-hidden="true">
                      <Icon
                        style={{ width: 20, height: 20, color: "#3a5a24" }}
                      />
                    </span>
                    <div>
                      <div className="asta-cn-lm-name">{lm.name}</div>
                      <div className="asta-cn-lm-dist">{lm.dist}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
