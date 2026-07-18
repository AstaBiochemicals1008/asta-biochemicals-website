import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

/* Small shared pieces for the three "content row" sections. Sizes/colours
   here live on <span>/<div>, which the global type block does not touch. */

export const rowShell: React.CSSProperties = {
  display: "grid",
  gap: "clamp(28px,3.4vw,56px)",
  alignItems: "center",
  background: "var(--gray-050)",
  border: "1px solid var(--gray-100)",
  borderRadius: 20,
  padding: "clamp(20px,2.2vw,30px)",
  overflow: "hidden",
};

export const containerStyle: React.CSSProperties = {
  maxWidth: 1320,
  margin: "0 auto",
  padding: "0 clamp(20px,4vw,48px)",
};

/** The hairline rule that sits above each row heading. */
export function RowRule() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <span style={{ flex: 1, height: 1, background: "var(--gray-200)" }} />
    </div>
  );
}

export function RowMedia({
  src,
  alt,
  minHeight,
  order,
  sizes,
}: {
  src: string;
  alt: string;
  minHeight: number;
  order?: number;
  sizes: string;
}) {
  return (
    <div
      className="asta-cs-crow-media-wrap"
      style={{
        position: "relative",
        borderRadius: 14,
        overflow: "hidden",
        minHeight,
        alignSelf: "stretch",
        order,
      }}
    >
      <Image
        className="asta-cs-crow-media"
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export function CheckItem({
  children,
  size = 19,
  lineHeight = 1.45,
}: {
  children: React.ReactNode;
  size?: number;
  lineHeight?: number;
}) {
  return (
    <div
      className="asta-cs-li"
      style={{ display: "flex", gap: 11, alignItems: "flex-start" }}
    >
      <CheckCircle2
        style={{
          width: size,
          height: size,
          color: "var(--green-600)",
          flexShrink: 0,
          marginTop: 1,
        }}
      />
      <span
        style={{ fontSize: 13.5, lineHeight, color: "var(--gray-700)" }}
      >
        {children}
      </span>
    </div>
  );
}

export function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="asta-cs-li"
      style={{ display: "flex", gap: 8, alignItems: "flex-start" }}
    >
      <span
        className="asta-cs-dot"
        style={{
          width: 4,
          height: 4,
          borderRadius: "50%",
          background: "var(--lime-600)",
          flexShrink: 0,
          marginTop: 7,
        }}
      />
      <span
        style={{ fontSize: 12.5, lineHeight: 1.45, color: "var(--gray-600)" }}
      >
        {children}
      </span>
    </div>
  );
}
