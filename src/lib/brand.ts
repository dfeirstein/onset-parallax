// Brand tokens for use in server-side rendering (OG images, etc.)
// These should match the CSS custom properties in globals.css

export const brand = {
  // Colors
  colors: {
    bgPrimary: "#0a0a0a",
    bgSecondary: "#0f0f11",
    bgTertiary: "#111111",
    accentPrimary: "#14b8a6",
    accentSecondary: "#f59e0b",
    accentTertiary: "#8b5cf6",
    textPrimary: "#ffffff",
    textSecondary: "rgba(255, 255, 255, 0.9)",
    textMuted: "rgba(255, 255, 255, 0.7)",
    textSubtle: "rgba(255, 255, 255, 0.6)",
    textDim: "rgba(255, 255, 255, 0.4)",
    borderPrimary: "#27272a",
    borderSecondary: "rgba(255, 255, 255, 0.1)",
  },

  // Typography
  fonts: {
    display: "Monument Extended",
    body: "Neue Montreal",
  },

  // Typography styles (matching CSS classes)
  typography: {
    // text-display-sm - used for wordmark/logo
    displaySm: {
      fontFamily: "Monument Extended",
      fontWeight: 700,
      letterSpacing: "0em",
    },
    // text-subtitle - Monument Extended Light
    subtitle: {
      fontFamily: "Monument Extended",
      fontWeight: 300,
      letterSpacing: "0.05em",
    },
    // text-body - Neue Montreal
    body: {
      fontFamily: "Neue Montreal",
      fontWeight: 500,
      letterSpacing: "0em",
    },
  },

  // Font URLs (for OG image generation)
  fontUrls: {
    monumentBlack: "/fonts/monument/PPMonumentExtended-Black.woff2",
    monumentBold: "/fonts/monument/PPMonumentExtended-Bold.woff2",
    monumentRegular: "/fonts/monument/PPMonumentExtended-Regular.woff2",
    monumentLight: "/fonts/monument/PPMonumentExtended-Light.woff2",
    neueMontrealBold: "/fonts/neue-montreal/PPNeueMontreal-Bold.woff2",
    neueMontrealMedium: "/fonts/neue-montreal/PPNeueMontreal-Medium.woff2",
    neueMontrealBook: "/fonts/neue-montreal/PPNeueMontreal-Book.woff2",
    neueMontrealLight: "/fonts/neue-montreal/PPNeueMontreal-Light.woff2",
  },

  // Site
  siteUrl: "https://getonset.co",
} as const;
