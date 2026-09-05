import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "Dave Okpe, software developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          color: "#fafafa",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ color: "#999", display: "flex", fontSize: 28, letterSpacing: 4 }}>
          DAVE OKPE / SOFTWARE DEVELOPER
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -4 }}>NOT JUST</div>
          <div style={{ color: "#888", fontSize: 88, fontWeight: 700, letterSpacing: -4 }}>
            SIDE PROJECTS.
          </div>
          <div style={{ color: "#aaa", fontSize: 26 }}>{siteConfig.description}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}