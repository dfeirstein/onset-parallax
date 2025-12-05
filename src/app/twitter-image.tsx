import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Onset - Monthly Blood Testing From Home";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #111111 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

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
            background: "rgba(255,255,255,0.05)",
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
            <span style={{ fontSize: "36px", fontWeight: 700, color: "white" }}>
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
            <span style={{ fontSize: "36px", fontWeight: 700, color: "white" }}>
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
            <span style={{ fontSize: "36px", fontWeight: 700, color: "white" }}>
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
    ),
    {
      ...size,
    }
  );
}
