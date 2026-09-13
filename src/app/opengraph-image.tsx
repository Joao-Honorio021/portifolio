import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0a0a0c",
        color: "#f6f6f7",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "70px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ color: "#00ffc2", fontSize: 22, display: "flex" }}>
        {profile.role.toUpperCase()}
      </div>
      <div
        style={{
          fontSize: 64,
          letterSpacing: "-2px",
          lineHeight: 1.08,
          display: "flex",
          marginTop: 36,
          maxWidth: 960,
        }}
      >
        {profile.headline}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 27,
          color: "#a1a1ad",
          marginTop: "auto",
          paddingTop: 26,
          borderTop: "1px solid #28282e",
        }}
      >
        {profile.name}
      </div>
    </div>,
    size,
  );
}
