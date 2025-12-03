import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onset | Monthly Blood Testing From Home",
  description:
    "Track 17+ biomarkers monthly from home using needle-free Tasso technology. No lab visits unless something needs a closer look.",
  keywords: [
    "blood testing",
    "biomarkers",
    "health tracking",
    "Tasso",
    "at-home testing",
    "men's health",
  ],
  openGraph: {
    title: "Onset | Monthly Blood Testing From Home",
    description: "No needles. No lab visits. Ever.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
