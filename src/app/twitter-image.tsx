import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";

export const alt = "Onset - Monthly Blood Testing From Home";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // Read the first frame as base64
  const framePath = join(
    process.cwd(),
    "public/sequences/frames/frame_0000.webp",
  );
  const frameBuffer = await readFile(framePath);
  const frameBase64 = `data:image/webp;base64,${frameBuffer.toString("base64")}`;

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
          position: "relative",
          background: "#0a0a0a",
        }}
      >
        {/* Background image */}
        <img
          src={frameBase64}
          alt=""
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.6,
          }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,0.8) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Hexagon logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "40px",
            }}
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              style={{ marginRight: "24px" }}
            >
              <path
                d="M50 5 L95 27.5 V72.5 L50 95 L5 72.5 V27.5 L50 5 Z"
                fill="#14b8a6"
              />
              <circle cx="50" cy="50" r="12" fill="#0a0a0a" />
            </svg>
            <span
              style={{
                fontSize: "72px",
                fontWeight: 900,
                color: "white",
                letterSpacing: "-0.02em",
              }}
            >
              ONSET
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontSize: "36px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "0.05em",
              }}
            >
              Monthly Blood Testing From Home
            </span>
            <span
              style={{
                fontSize: "24px",
                color: "#14b8a6",
                fontWeight: 500,
              }}
            >
              No needles. No lab visits. Ever.
            </span>
          </div>

          {/* Bottom stats */}
          <div
            style={{
              display: "flex",
              gap: "60px",
              marginTop: "60px",
              padding: "24px 48px",
              background: "rgba(0,0,0,0.6)",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{ fontSize: "36px", fontWeight: 700, color: "white" }}
              >
                17+
              </span>
              <span
                style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}
              >
                BIOMARKERS
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{ fontSize: "36px", fontWeight: 700, color: "white" }}
              >
                5 min
              </span>
              <span
                style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}
              >
                COLLECTION
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{ fontSize: "36px", fontWeight: 700, color: "white" }}
              >
                3 days
              </span>
              <span
                style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}
              >
                RESULTS
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
