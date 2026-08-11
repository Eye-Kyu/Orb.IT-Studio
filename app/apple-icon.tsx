import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const outfitBold = readFileSync(
  join(process.cwd(), "app/fonts/Outfit_Complete/Fonts/OTF/Outfit-Bold.otf")
);

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#facc15",
          fontSize: 108,
          fontWeight: 700,
          fontFamily: "Outfit",
        }}
      >
        M
      </div>
    ),
    { ...size, fonts: [{ name: "Outfit", data: outfitBold, style: "normal", weight: 700 }] },
  );
}
