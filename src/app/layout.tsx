import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://onsethealth.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    "health optimization",
    "preventive healthcare",
    "testosterone monitoring",
    "metabolic health",
  ],
  authors: [{ name: "Onset Health" }],
  creator: "Onset Health",
  publisher: "Onset Health",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Onset | Monthly Blood Testing From Home",
    description:
      "Track 17+ biomarkers monthly from home—no needles, no lab visits. Get health insights & trends in 3 days.",
    type: "website",
    url: siteUrl,
    siteName: "Onset Health",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Onset - Monthly blood testing from home with needle-free Tasso technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onset | Monthly Blood Testing From Home",
    description:
      "Track 17+ biomarkers monthly—no needles, no lab visits. Results in 3 days.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@onsethealth",
    site: "@onsethealth",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-icon",
  },
  verification: {
    // Add these when you have the verification codes
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Onset Health",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Monthly blood testing from home using needle-free Tasso technology. Track 17+ biomarkers without lab visits.",
  foundingDate: "2024",
  sameAs: [
    "https://twitter.com/onsethealth",
    "https://instagram.com/onsethealth",
    "https://linkedin.com/company/onsethealth",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "hello@onsethealth.com",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Onset Monthly Blood Testing Kit",
  description:
    "Monthly at-home blood testing kit using needle-free Tasso technology. Track 17+ biomarkers including testosterone, metabolic health, inflammation, and more.",
  brand: {
    "@type": "Brand",
    name: "Onset Health",
  },
  offers: {
    "@type": "Offer",
    price: "149",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2025-12-31",
    url: `${siteUrl}#pricing`,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the Tasso device work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Tasso+ uses gentle vacuum technology to draw a small blood sample from your upper arm. It's FDA-cleared, painless, and takes about 5 minutes. No needles, no finger pricks.",
      },
    },
    {
      "@type": "Question",
      name: "Does it hurt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most users report feeling only a slight sensation, far less than a traditional blood draw or even a finger prick. The device uses micro-channels smaller than a mosquito bite.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate are the results compared to a lab draw?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tasso+ samples have been clinically validated against venous blood draws. Our partner labs (including ARUP Laboratories) use the same equipment and standards as traditional lab testing.",
      },
    },
    {
      "@type": "Question",
      name: "What if my results show something concerning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If any biomarker crosses a threshold or shows a concerning trend, we'll clearly flag it and recommend a confirmatory venous draw. We'll help you book it—but we never force it.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use this if I'm on TRT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. In fact, monthly monitoring is ideal for TRT patients. Track your testosterone, estradiol proxy markers, and liver function to optimize your protocol safely.",
      },
    },
    {
      "@type": "Question",
      name: "How long until I get my results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically 2-3 business days from when our lab receives your sample. You'll get a notification the moment your results are ready.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in each panel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Monthly Core Panel includes 17 biomarkers across lipids, glucose, inflammation, liver, kidney, thyroid, and hormones. Quarterly adds vitamins, minerals, and growth markers.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. No contracts, no commitments. Cancel or pause your subscription anytime from your dashboard.",
      },
    },
  ],
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Onset Health",
  description:
    "At-home blood testing service using FDA-cleared needle-free technology",
  url: siteUrl,
  medicalSpecialty: "Preventive Medicine",
  availableService: {
    "@type": "MedicalTest",
    name: "Monthly Biomarker Panel",
    description:
      "Comprehensive blood panel testing 17+ biomarkers including hormones, metabolic markers, and inflammation indicators",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalBusinessSchema),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
