import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const runtime = "edge";

export const alt = "Onset - Monthly Blood Testing From Home";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Compressed background image as base64 data URL (from hero frame)
const bgImage =
  "data:image/jpeg;base64,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";

export default async function Image() {
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
          background: brand.colors.bgPrimary,
        }}
      >
        {/* Background image */}
        <img
          src={bgImage}
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
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${brand.colors.bgPrimary}cc 0%, ${brand.colors.bgPrimary}66 50%, ${brand.colors.bgPrimary}cc 100%)`,
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
          {/* Hexagon logo + wordmark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "40px",
            }}
          >
            {/* Hexagon with teal background and black dot */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 100 100"
              style={{ marginRight: "16px" }}
            >
              <path
                d="M50 5 L95 27.5 V72.5 L50 95 L5 72.5 V27.5 L50 5 Z"
                fill={brand.colors.accentPrimary}
              />
              <circle cx="50" cy="50" r="12" fill={brand.colors.bgPrimary} />
            </svg>
            {/* Wordmark - text-display-sm styling */}
            <span
              style={{
                fontSize: "48px",
                fontFamily: brand.typography.displaySm.fontFamily,
                fontWeight: brand.typography.displaySm.fontWeight,
                color: brand.colors.textPrimary,
                letterSpacing: brand.typography.displaySm.letterSpacing,
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
                fontSize: "32px",
                fontFamily: brand.typography.subtitle.fontFamily,
                fontWeight: brand.typography.subtitle.fontWeight,
                color: brand.colors.textSecondary,
                letterSpacing: brand.typography.subtitle.letterSpacing,
              }}
            >
              Monthly Blood Testing From Home
            </span>
            <span
              style={{
                fontSize: "22px",
                fontFamily: brand.typography.body.fontFamily,
                fontWeight: brand.typography.body.fontWeight,
                color: brand.colors.accentPrimary,
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
              marginTop: "50px",
              padding: "20px 40px",
              background: `${brand.colors.bgPrimary}bb`,
              borderRadius: "12px",
              border: `1px solid ${brand.colors.borderSecondary}`,
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
                style={{
                  fontSize: "32px",
                  fontFamily: brand.typography.displaySm.fontFamily,
                  fontWeight: brand.typography.displaySm.fontWeight,
                  color: brand.colors.textPrimary,
                }}
              >
                17+
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontFamily: brand.typography.body.fontFamily,
                  color: brand.colors.textDim,
                  letterSpacing: "0.1em",
                }}
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
                style={{
                  fontSize: "32px",
                  fontFamily: brand.typography.displaySm.fontFamily,
                  fontWeight: brand.typography.displaySm.fontWeight,
                  color: brand.colors.textPrimary,
                }}
              >
                5 min
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontFamily: brand.typography.body.fontFamily,
                  color: brand.colors.textDim,
                  letterSpacing: "0.1em",
                }}
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
                style={{
                  fontSize: "32px",
                  fontFamily: brand.typography.displaySm.fontFamily,
                  fontWeight: brand.typography.displaySm.fontWeight,
                  color: brand.colors.textPrimary,
                }}
              >
                3 days
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontFamily: brand.typography.body.fontFamily,
                  color: brand.colors.textDim,
                  letterSpacing: "0.1em",
                }}
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
