export interface PanelVariant {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  accentColor: string;
  sequencePath: string;
  frameCount: number;
}

export const panelVariants: PanelVariant[] = [
  {
    id: "skip-lab",
    name: "SKIP THE LAB",
    subtitle: "Skip the Needle.",
    description:
      "Monthly bloodwork that comes to you. 17 biomarkers. 5 minutes. No excuses left.",
    accentColor: "#14B8A6",
    sequencePath: "/sequences/hero.webp",
    frameCount: 1,
  },
  {
    id: "know-numbers",
    name: "KNOW YOUR",
    subtitle: "Numbers.",
    description:
      "Track testosterone, metabolic health, inflammation, and more. See what's actually happening inside.",
    accentColor: "#F59E0B",
    sequencePath: "/sequences/hero.webp",
    frameCount: 1,
  },
  {
    id: "take-action",
    name: "TAKE ACTION",
    subtitle: "Not Guesses.",
    description:
      "Every result comes with what to do next. Trends, insights, and protocols that actually move the needle.",
    accentColor: "#8B5CF6",
    sequencePath: "/sequences/hero.webp",
    frameCount: 1,
  },
];

export const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#panels", label: "Panels" },
  { href: "#science", label: "Science" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const biomarkers = {
  monthly: {
    lipids: ["LDL-C", "HDL-C", "Triglycerides", "Non-HDL-C"],
    metabolic: ["Fasting Glucose", "HbA1c"],
    inflammation: ["hs-CRP"],
    liver: ["ALT", "AST", "GGT", "Albumin", "Total Protein"],
    kidney: ["Creatinine", "eGFR"],
    thyroid: ["TSH", "Free T4"],
    hormones: ["Total T", "Free T", "SHBG"],
  },
  quarterly: {
    vitamins: ["Vitamin D", "B12", "Folate"],
    minerals: ["Ferritin", "Magnesium", "Calcium"],
    growth: ["IGF-1"],
  },
};

export const howItWorksSteps = [
  {
    number: "01",
    title: "Order Your Kit",
    description: "Your Tasso kit arrives monthly. No appointments needed.",
    icon: "box",
  },
  {
    number: "02",
    title: "Collect at Home",
    description: "5 minutes. No needles. Just place on your arm and relax.",
    icon: "device",
  },
  {
    number: "03",
    title: "Get Insights",
    description: "Results in 3 days. Trends, actions, and your monthly win.",
    icon: "chart",
  },
];

export const faqItems = [
  {
    question: "How does the Tasso device work?",
    answer:
      "The Tasso+ uses gentle vacuum technology to draw a small blood sample from your upper arm. It's FDA-cleared, painless, and takes about 5 minutes. No needles, no finger pricks.",
  },
  {
    question: "Does it hurt?",
    answer:
      "Most users report feeling only a slight sensation, far less than a traditional blood draw or even a finger prick. The device uses micro-channels smaller than a mosquito bite.",
  },
  {
    question: "How accurate are the results compared to a lab draw?",
    answer:
      "Tasso+ samples have been clinically validated against venous blood draws. Our partner labs (including ARUP Laboratories) use the same equipment and standards as traditional lab testing.",
  },
  {
    question: "What if my results show something concerning?",
    answer:
      "If any biomarker crosses a threshold or shows a concerning trend, we'll clearly flag it and recommend a confirmatory venous draw. We'll help you book it—but we never force it.",
  },
  {
    question: "Can I use this if I'm on TRT?",
    answer:
      "Absolutely. In fact, monthly monitoring is ideal for TRT patients. Track your testosterone, estradiol proxy markers, and liver function to optimize your protocol safely.",
  },
  {
    question: "How long until I get my results?",
    answer:
      "Typically 2-3 business days from when our lab receives your sample. You'll get a notification the moment your results are ready.",
  },
  {
    question: "What's included in each panel?",
    answer:
      "The Monthly Core Panel includes 17 biomarkers across lipids, glucose, inflammation, liver, kidney, thyroid, and hormones. Quarterly adds vitamins, minerals, and growth markers.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No contracts, no commitments. Cancel or pause your subscription anytime from your dashboard.",
  },
];

export const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/onsethealth", icon: "twitter" },
  {
    name: "Instagram",
    href: "https://instagram.com/onsethealth",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/onsethealth",
    icon: "linkedin",
  },
];
