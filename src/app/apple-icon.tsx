import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function Icon() {
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
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 100 100"
        >
          {/* Outer hexagon (white) */}
          <path
            d="M50 0 L100 25 V75 L50 100 L0 75 V25 L50 0 Z"
            fill="#ffffff"
          />
          {/* Inner hexagon cutout (dark) */}
          <path
            d="M50 20 L80 35 V65 L50 80 L20 65 V35 L50 20 Z"
            fill="#0a0a0a"
          />
          {/* Central node (teal) */}
          <circle cx="50" cy="50" r="12" fill="#14b8a6" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
