import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

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
                fill={brand.colors.accentPrimary}
              />
              <circle cx="50" cy="50" r="12" fill={brand.colors.bgPrimary} />
            </svg>
            <span
              style={{
                fontSize: "72px",
                fontWeight: 900,
                color: brand.colors.textPrimary,
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
                color: brand.colors.textSecondary,
                letterSpacing: "0.05em",
              }}
            >
              Monthly Blood Testing From Home
            </span>
            <span
              style={{
                fontSize: "24px",
                color: brand.colors.accentPrimary,
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
              background: `${brand.colors.bgPrimary}99`,
              borderRadius: "16px",
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
                  fontSize: "36px",
                  fontWeight: 900,
                  color: brand.colors.textPrimary,
                }}
              >
                17+
              </span>
              <span
                style={{
                  fontSize: "14px",
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
                  fontSize: "36px",
                  fontWeight: 900,
                  color: brand.colors.textPrimary,
                }}
              >
                5 min
              </span>
              <span
                style={{
                  fontSize: "14px",
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
                  fontSize: "36px",
                  fontWeight: 900,
                  color: brand.colors.textPrimary,
                }}
              >
                3 days
              </span>
              <span
                style={{
                  fontSize: "14px",
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
