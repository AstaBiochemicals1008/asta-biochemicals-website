import Image from "next/image";

const MAP_HREF = "https://maps.app.goo.gl/SHYPxJ91D5PBnYyLA?g_st=aw";

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

        {/* The prototype frames a static map export that links out to Google
            Maps — there is no embedded iframe, so nothing third-party loads. */}
        <a
          className="asta-reveal asta-cn-map-card"
          data-reveal-delay="80"
          href={MAP_HREF}
          target="_blank"
          rel="noopener"
          style={{
            display: "block",
            maxWidth: 920,
            margin: "0 auto",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 14px 40px rgba(17,48,43,0.08)",
            border: "1px solid var(--gray-200)",
          }}
        >
          <Image
            src="/assets/connect-location.png"
            alt="Map to ASTA Biochemicals Pvt. Ltd., Peenya Industrial Area, Bangalore — with address and nearby landmarks"
            width={1536}
            height={1024}
            sizes="(max-width: 920px) 100vw, 920px"
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        </a>
      </div>
    </section>
  );
}
