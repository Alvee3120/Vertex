import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #031f52 0%, #023880 60%, #020814 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#e40a2d",
          }}
        >
          Vertex Security Solutions
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 60,
            fontWeight: 800,
            lineHeight: 1.15,
            maxWidth: 980,
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          We Don&apos;t Provide Security Only. We Enhance Protection Capability.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 28,
            color: "#c9d6ea",
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
