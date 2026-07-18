import Image from "next/image";

type Product = { title: string; desc: string; card: number };

/* `card` is the biopharma-cardN-bg.png index. The prototype derived it from the
   row position (i + 1) except for the last two rows, which carried an explicit
   override (12 and 11) — i.e. the final pair's art is swapped. */
const PRODUCTS: Product[] = [
  {
    title: "Biotherapeutics & Finished Biologics",
    desc: "Therapeutic proteins and biologics for research and pharmaceutical use.",
    card: 1,
  },
  {
    title: "Reference Standards & QC Materials",
    desc: "International standards, reference materials and compendial standards.",
    card: 2,
  },
  {
    title: "Recombinant Proteins & Antigens",
    desc: "High-quality recombinant proteins, viral antigens and related reagents.",
    card: 3,
  },
  {
    title: "Antibodies & Immunoreagents",
    desc: "Primary antibodies and immunoreagents for research and diagnostic applications.",
    card: 4,
  },
  {
    title: "Molecular Biology & mRNA Manufacturing Reagents",
    desc: "Enzymes and reagents for molecular biology and mRNA production workflows.",
    card: 5,
  },
  {
    title: "Cell Culture & Cell-Based Assays",
    desc: "Cell lines, culture reagents and cell-based assay products.",
    card: 6,
  },
  {
    title: "Peptide Synthesis Building Blocks",
    desc: "Amino acids, linkers and intermediates for peptide synthesis and conjugation.",
    card: 7,
  },
  {
    title: "Analytical & ELISA Kits",
    desc: "ELISA kits and analytical reagents for detection and quantification.",
    card: 8,
  },
  {
    title: "Protein Purification Products",
    desc: "Affinity and purification columns for protein and antibody purification.",
    card: 9,
  },
  {
    title: "Bioprocess & Single-Use Consumables",
    desc: "Single-use tubing, hoses and consumables for bioprocess fluid handling.",
    card: 10,
  },
  {
    title: "Process Chemicals",
    desc: "High-purity process chemicals and disinfectants.",
    card: 12,
  },
  {
    title: "Sterilisation & Process-Control Products",
    desc: "Biological indicators and sterilisation validation products.",
    card: 11,
  },
];

const CARD_MIN_HEIGHT = 190;

export default function Portfolio() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "clamp(20px,3vw,40px) 0 clamp(48px,5vw,80px)",
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
          style={{
            textAlign: "center",
            marginBottom: "clamp(36px,4vw,56px)",
          }}
        >
          {/* Prototype's inline 12px/700/0.2em is dead — the uppercase-eyebrow
              rule forces 13px/600/0.18em. Only the lime colour survives. */}
          <div
            className="asta-eyebrow"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              color: "var(--lime-700)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--lime-500)",
              }}
            />
            Our Product Portfolio
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--lime-500)",
              }}
            />
          </div>

          {/* Type comes from the global h2 rule. */}
          <h2 style={{ margin: "16px 0 0" }}>
            End-to-end solutions for every stage of biopharmaceutical
            innovation.
          </h2>

          <span
            style={{
              display: "block",
              width: 56,
              height: 3,
              background: "var(--lime-500)",
              borderRadius: 2,
              margin: "20px auto 0",
            }}
          />
        </div>

        <div className="asta-bp-pgrid" style={{ gap: 22 }}>
          {PRODUCTS.map((product, i) => (
            <div
              key={product.title}
              className="asta-reveal asta-bp-pcard"
              /* The prototype staggered by column, not by row. */
              data-reveal-delay={(i % 2) * 90}
              style={{
                position: "relative",
                background: "var(--gray-050)",
                border: "1px solid var(--gray-200)",
                borderRadius: 16,
                overflow: "hidden",
                minHeight: CARD_MIN_HEIGHT,
              }}
            >
              <div
                className="asta-bp-pcard-media"
                style={{ position: "absolute", inset: 0, height: "100%" }}
              >
                <Image
                  src={`/assets/biopharma-card${product.card}-bg.png`}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 980px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "right center" }}
                />
              </div>

              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg,rgba(247,248,242,0.98) 0%,rgba(247,248,242,0.95) 42%,rgba(247,248,242,0.5) 60%,rgba(247,248,242,0) 76%)",
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  maxWidth: "46%",
                  padding: "clamp(22px,2.2vw,30px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  minHeight: CARD_MIN_HEIGHT,
                }}
              >
                <h3 style={{ margin: 0 }}>{product.title}</h3>
                <span
                  style={{
                    display: "block",
                    width: 34,
                    height: 2,
                    background: "var(--lime-500)",
                    margin: "12px 0 13px",
                  }}
                />
                <p style={{ margin: 0 }}>{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
