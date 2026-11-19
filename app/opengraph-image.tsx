import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt = "Studio Mizani — Digital Design & Tech Studio Nairobi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const outfitBold = readFileSync(
  join(process.cwd(), "app/fonts/Outfit_Complete/Fonts/OTF/Outfit-Bold.otf")
);
const outfitRegular = readFileSync(
  join(process.cwd(), "app/fonts/Outfit_Complete/Fonts/OTF/Outfit-Regular.otf")
);

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1c1c1c 100%)",
          fontFamily: "Outfit",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 108,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -2,
          }}
        >
          <span style={{ color: "#facc15" }}>Studio</span>
          <span style={{ marginLeft: 20 }}>Mizani</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            color: "#a3a3a3",
          }}
        >
          Digital Design &amp; Tech Studio — Nairobi
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Outfit", data: outfitRegular, style: "normal", weight: 400 },
        { name: "Outfit", data: outfitBold, style: "normal", weight: 700 },
      ],
    },
  );
}
