import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const runtime = "edge";

export const alt = "Onset - Monthly Blood Testing From Home";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Use production URL for fonts to avoid circular requests
const FONT_BASE_URL = "https://getonset.co";

export default async function Image() {
  // Fetch fonts from production URL
  const [monumentBold, monumentLight, neueMontrealMedium] = await Promise.all([
    fetch(`${FONT_BASE_URL}/fonts/monument/PPMonumentExtended-Bold.woff2`).then(
      (res) => res.arrayBuffer(),
    ),
    fetch(
      `${FONT_BASE_URL}/fonts/monument/PPMonumentExtended-Light.woff2`,
    ).then((res) => res.arrayBuffer()),
    fetch(
      `${FONT_BASE_URL}/fonts/neue-montreal/PPNeueMontreal-Medium.woff2`,
    ).then((res) => res.arrayBuffer()),
  ]);

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
          background: `linear-gradient(135deg, ${brand.colors.bgPrimary} 0%, ${brand.colors.bgSecondary} 50%, ${brand.colors.bgPrimary} 100%)`,
        }}
      >
        {/* Content */}
        <div
          style={{
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
            {/* Wordmark - Monument Extended Bold */}
            <span
              style={{
                fontSize: "48px",
                fontFamily: "Monument Extended",
                fontWeight: 700,
                color: brand.colors.textPrimary,
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
                fontFamily: "Monument Extended",
                fontWeight: 300,
                color: brand.colors.textSecondary,
                letterSpacing: "0.05em",
              }}
            >
              Monthly Blood Testing From Home
            </span>
            <span
              style={{
                fontSize: "22px",
                fontFamily: "Neue Montreal",
                fontWeight: 500,
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
              background: `${brand.colors.bgPrimary}cc`,
              borderRadius: "12px",
              border: `1px solid ${brand.colors.borderPrimary}`,
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
                  fontFamily: "Monument Extended",
                  fontWeight: 700,
                  color: brand.colors.textPrimary,
                }}
              >
                17+
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontFamily: "Neue Montreal",
                  fontWeight: 500,
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
                  fontFamily: "Monument Extended",
                  fontWeight: 700,
                  color: brand.colors.textPrimary,
                }}
              >
                5 min
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontFamily: "Neue Montreal",
                  fontWeight: 500,
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
                  fontFamily: "Monument Extended",
                  fontWeight: 700,
                  color: brand.colors.textPrimary,
                }}
              >
                3 days
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontFamily: "Neue Montreal",
                  fontWeight: 500,
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
      fonts: [
        {
          name: "Monument Extended",
          data: monumentBold,
          weight: 700,
          style: "normal",
        },
        {
          name: "Monument Extended",
          data: monumentLight,
          weight: 300,
          style: "normal",
        },
        {
          name: "Neue Montreal",
          data: neueMontrealMedium,
          weight: 500,
          style: "normal",
        },
      ],
    },
  );
}
