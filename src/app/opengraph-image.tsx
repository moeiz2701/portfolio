import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Abdul Moeiz — Full-Stack & AI Engineer";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#000000",
          color: "#c8c8c8",
          padding: "80px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "rgba(200,200,200,0.6)",
            display: "flex",
          }}
        >
          [00] / PORTFOLIO &apos;26
        </div>
        <div
          style={{
            fontSize: 150,
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: -4,
            marginTop: 24,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>ABDUL</span>
          <span>MOEIZ</span>
        </div>
        <div style={{ fontSize: 34, marginTop: 36, display: "flex", gap: 12 }}>
          <span>Full-Stack Developer</span>
          <span style={{ color: "rgba(200,200,200,0.4)" }}>·</span>
          <span style={{ color: "#16d982" }}>AI</span>
          <span>&amp; Automation Expert</span>
        </div>
      </div>
    ),
    size,
  );
}
