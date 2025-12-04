"use client";

import { useState } from "react";
import { Activity, Zap, Settings, ChevronRight, BarChart3 } from "lucide-react";

// ----------------------------------------------------------------------------------
// DATA MOCKS
// ----------------------------------------------------------------------------------
const BIOMARKERS = [
  {
    name: "Total Testosterone",
    value: "845",
    unit: "ng/dL",
    status: "optimal",
    change: "+12%",
    trend: [40, 55, 45, 60, 75, 85, 94],
  },
  {
    name: "hs-CRP",
    value: "0.4",
    unit: "mg/L",
    status: "optimal",
    change: "-5%",
    trend: [80, 70, 60, 50, 40, 30, 20],
  },
  {
    name: "Vitamin D",
    value: "42",
    unit: "ng/mL",
    status: "warning",
    change: "0%",
    trend: [42, 41, 43, 42, 42, 41, 42],
  },
  {
    name: "Cortisol",
    value: "14.2",
    unit: "ug/dL",
    status: "optimal",
    change: "-2%",
    trend: [60, 55, 50, 48, 45, 40, 38],
  },
];

// ----------------------------------------------------------------------------------
// DESIGN TOKENS FOR DISPLAY
// ----------------------------------------------------------------------------------
const COLOR_TOKENS = [
  {
    name: "Background Primary",
    var: "--color-bg-primary",
    hex: "#0A0A0A",
    usage: "Page backgrounds",
  },
  {
    name: "Background Secondary",
    var: "--color-bg-secondary",
    hex: "#0f0f11",
    usage: "Cards, surfaces",
  },
  {
    name: "Background Elevated",
    var: "--color-bg-elevated",
    hex: "#1a1a1d",
    usage: "Elevated elements",
  },
  {
    name: "Border Primary",
    var: "--color-border-primary",
    hex: "#27272a",
    usage: "Primary borders",
  },
  {
    name: "Accent Primary",
    var: "--color-accent-primary",
    hex: "#14b8a6",
    usage: "CTAs, highlights",
  },
  {
    name: "Accent Secondary",
    var: "--color-accent-secondary",
    hex: "#F59E0B",
    usage: "Warnings, alerts",
  },
  {
    name: "Accent Tertiary",
    var: "--color-accent-tertiary",
    hex: "#8B5CF6",
    usage: "Special accents",
  },
  {
    name: "Text Muted",
    var: "--color-text-muted",
    hex: "rgba(255,255,255,0.7)",
    usage: "Secondary text",
  },
];

const SPACING_TOKENS = [
  { name: "space-1", value: "0.25rem", px: "4px" },
  { name: "space-2", value: "0.5rem", px: "8px" },
  { name: "space-4", value: "1rem", px: "16px" },
  { name: "space-6", value: "1.5rem", px: "24px" },
  { name: "space-8", value: "2rem", px: "32px" },
  { name: "space-12", value: "3rem", px: "48px" },
  { name: "space-16", value: "4rem", px: "64px" },
  { name: "space-24", value: "6rem", px: "96px" },
];

const TYPOGRAPHY_TOKENS = [
  {
    name: "Display Hero",
    class: "text-display-hero",
    preview: "ONSET",
    description: "Hero headlines, tracking-tight",
  },
  {
    name: "Display XL",
    class: "text-display-xl",
    preview: "Skip The Lab",
    description: "Section headlines",
  },
  {
    name: "Display LG",
    class: "text-display-lg",
    preview: "How It Works",
    description: "Page titles",
  },
  {
    name: "Subtitle",
    class: "text-subtitle",
    preview: "Skip the Needle.",
    description: "Subheadlines, light weight",
  },
  {
    name: "Body LG",
    class: "text-body-lg text-muted",
    preview: "Monthly bloodwork that comes to you.",
    description: "Lead paragraphs",
  },
  {
    name: "Body MD",
    class: "text-body-md text-subtle",
    preview: "Track testosterone, metabolic health, inflammation, and more.",
    description: "Body copy",
  },
  {
    name: "Label",
    class: "text-label text-dim",
    preview: "SYSTEM OPTIMIZED",
    description: "UI labels, uppercase",
  },
  {
    name: "Mono",
    class: "text-mono text-accent",
    preview: "ID: 849-221-AX",
    description: "Data, codes",
  },
];

// ----------------------------------------------------------------------------------
// BRAND BIBLE COMPONENTS
// ----------------------------------------------------------------------------------

const GridLines = () => (
  <div className="absolute inset-0 pointer-events-none z-0 flex justify-between px-6 opacity-[0.03]">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} className="w-px h-full bg-white"></div>
    ))}
  </div>
);

const SectionHeader = ({
  number,
  title,
}: {
  number: string;
  title: string;
}) => (
  <div className="flex items-baseline gap-4 mb-12 border-b border-primary pb-6">
    <span className="text-mono text-accent">{number}</span>
    <h2 className="text-display-lg text-primary">{title}</h2>
  </div>
);

const Swatch = ({
  name,
  hex,
  usage,
  varName,
}: {
  name: string;
  hex: string;
  usage: string;
  varName?: string;
}) => (
  <div className="group">
    <div className="h-24 w-full rounded-lg mb-4 border border-primary relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: hex }}></div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 flex items-center justify-center">
        <span className="text-mono bg-black text-primary px-2 py-1 rounded">
          {hex}
        </span>
      </div>
    </div>
    <h4 className="font-body font-bold text-sm text-primary">{name}</h4>
    {varName && <p className="text-mono text-accent mt-1">{varName}</p>}
    <p className="text-body-sm text-dim mt-1">{usage}</p>
  </div>
);

// ----------------------------------------------------------------------------------
// SECTION 1: STRATEGY
// ----------------------------------------------------------------------------------
const StrategySection = () => (
  <div className="min-h-screen relative section-padding flex flex-col justify-center">
    <GridLines />
    <div className="relative z-10 container-default max-w-4xl">
      <div className="inline-block px-3 py-1 border border-[--color-accent-primary] text-accent text-label mb-8">
        Mission Statement
      </div>
      <h1 className="text-display-hero text-primary mb-12">
        We do not <br />
        <span className="text-accent">fix</span> health. <br />
        We{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[--color-text-dim]">
          engineer
        </span>{" "}
        it.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <p className="text-body-lg text-muted">
          Onset is not a healthcare company. It is a performance architecture
          firm for the human body. Our identity must reflect precision, stealth,
          and elite capability.
        </p>
        <p className="text-body-lg text-muted">
          We reject the soft, comforting aesthetics of traditional medicine
          (pastel blues, soft rounds). We embrace the aesthetics of
          high-performance machinery (carbon fiber, HUDs, raw data).
        </p>
      </div>
    </div>
  </div>
);

// ----------------------------------------------------------------------------------
// SECTION 2: LOGO & CONSTRUCTION
// ----------------------------------------------------------------------------------
const LogoSection = () => (
  <div className="min-h-screen bg-primary section-padding border-t border-primary">
    <div className="container-default">
      <SectionHeader number="01.0" title="Identity Construction" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Logo Build */}
        <div className="aspect-square bg-secondary border border-primary rounded-xl relative flex items-center justify-center p-24">
          <div className="grid-overlay absolute inset-0 rounded-xl"></div>

          {/* The Mark */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-primary fill-current drop-shadow-[0_0_30px_rgba(20,184,166,0.2)]"
          >
            <path d="M50 0 L100 25 V75 L50 100 L0 75 V25 L50 0 Z M50 20 L80 35 V65 L50 80 L20 65 V35 L50 20 Z" />
            <circle cx="50" cy="50" r="12" fill="#14b8a6" />
          </svg>

          <div className="absolute top-8 left-8 text-mono text-accent">x</div>
          <div className="absolute bottom-8 right-8 text-mono text-accent">
            x
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-12">
          <div>
            <h3 className="text-display-sm text-primary mb-4">
              The Core Hexagon
            </h3>
            <p className="text-body-md text-muted max-w-md">
              The hexagon represents the chemical structure of organic
              compounds. The central point represents the singularity of the
              self. It is stable, efficient, and infinitely stackable.
            </p>
          </div>
          <div>
            <h3 className="text-display-sm text-primary mb-4">Clear Space</h3>
            <p className="text-body-md text-muted max-w-md">
              The mark must always be surrounded by &apos;x&apos; height of
              clear space, where &apos;x&apos; is equal to the width of the
              central node.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ----------------------------------------------------------------------------------
// SECTION 3: TYPOGRAPHY
// ----------------------------------------------------------------------------------
const TypeSection = () => (
  <div className="min-h-screen bg-primary section-padding border-t border-primary">
    <div className="container-default">
      <SectionHeader number="02.0" title="Typographic System" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        {/* Primary Font */}
        <div>
          <div className="mb-8 pb-4 border-b border-primary flex justify-between items-end">
            <span className="text-label text-dim">Display</span>
            <span className="text-mono text-primary">Monument Extended</span>
          </div>
          <div className="space-y-0">
            <div className="text-display-hero text-primary">Ag</div>
            <div className="text-display-hero text-transparent bg-clip-text bg-gradient-to-b from-white to-[--color-border-primary]">
              84
            </div>
          </div>
          <div className="mt-8 p-6 bg-secondary border border-primary rounded-lg">
            <p className="text-mono text-muted">
              Used for headlines, data values, and short navigational elements.
              Tracking-tight for impact. Tracking-wide for labels.
            </p>
          </div>
        </div>

        {/* Secondary Font */}
        <div>
          <div className="mb-8 pb-4 border-b border-primary flex justify-between items-end">
            <span className="text-label text-dim">Body / Data</span>
            <span className="text-mono text-primary">Neue Montreal</span>
          </div>
          <div className="space-y-6">
            <p className="text-[2rem] font-body font-normal text-primary leading-tight">
              The quick brown fox jumps over the lazy dog.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-body-sm text-muted">
                Regular (400) - Body copy
              </p>
              <p className="text-body-sm text-primary font-medium">
                Medium (500) - Labels
              </p>
              <p className="text-body-sm text-primary font-bold">
                Bold (700) - Emphasis
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Type Scale */}
      <div className="border-t border-primary pt-12">
        <h3 className="text-display-sm text-primary mb-8">Type Scale</h3>
        <div className="space-y-8">
          {TYPOGRAPHY_TOKENS.map((type, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-4 items-baseline border-b border-subtle pb-6"
            >
              <div className="col-span-2">
                <span className="text-mono text-accent">{type.name}</span>
              </div>
              <div className="col-span-3">
                <span className="text-body-sm text-dim">
                  {type.description}
                </span>
              </div>
              <div className="col-span-7">
                <span className={type.class}>{type.preview}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ----------------------------------------------------------------------------------
// SECTION 4: COLOR SYSTEM
// ----------------------------------------------------------------------------------
const ColorSection = () => (
  <div className="min-h-screen bg-primary section-padding border-t border-primary">
    <div className="container-default">
      <SectionHeader number="03.0" title="Color System" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
        {COLOR_TOKENS.map((color, i) => (
          <Swatch
            key={i}
            name={color.name}
            hex={color.hex}
            usage={color.usage}
            varName={color.var}
          />
        ))}
      </div>

      {/* Status Colors */}
      <h3 className="text-display-sm text-primary mb-8">Status Indicators</h3>
      <div className="grid grid-cols-3 gap-8 mb-24">
        <div className="p-6 bg-secondary border border-primary rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="status-dot status-optimal"></div>
            <span className="text-label text-dim">Optimal</span>
          </div>
          <span className="text-mono text-[--color-status-optimal]">
            --color-status-optimal
          </span>
        </div>
        <div className="p-6 bg-secondary border border-primary rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="status-dot status-warning"></div>
            <span className="text-label text-dim">Warning</span>
          </div>
          <span className="text-mono text-[--color-status-warning]">
            --color-status-warning
          </span>
        </div>
        <div className="p-6 bg-secondary border border-primary rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="status-dot status-critical"></div>
            <span className="text-label text-dim">Critical</span>
          </div>
          <span className="text-mono text-[--color-status-critical]">
            --color-status-critical
          </span>
        </div>
      </div>
    </div>
  </div>
);

// ----------------------------------------------------------------------------------
// SECTION 5: SPACING & LAYOUT
// ----------------------------------------------------------------------------------
const SpacingSection = () => (
  <div className="min-h-screen bg-primary section-padding border-t border-primary">
    <div className="container-default">
      <SectionHeader number="04.0" title="Spacing & Layout" />

      {/* Spacing Scale */}
      <h3 className="text-display-sm text-primary mb-8">Spacing Scale</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {SPACING_TOKENS.map((space, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 bg-secondary border border-primary rounded-lg"
          >
            <div
              className="bg-accent flex-shrink-0"
              style={{
                width: space.value,
                height: space.value,
                minWidth: "4px",
                minHeight: "4px",
              }}
            ></div>
            <div className="flex-1">
              <span className="text-mono text-accent">--{space.name}</span>
              <span className="text-body-sm text-dim ml-4">
                {space.value} ({space.px})
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Grid System */}
      <h3 className="text-display-sm text-primary mb-8">Grid System</h3>
      <div className="p-8 bg-secondary border border-primary rounded-xl mb-8">
        <div className="grid grid-cols-12 gap-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-16 bg-accent/20 border border-accent/30 rounded flex items-center justify-center"
            >
              <span className="text-mono text-accent text-xs">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="p-4 bg-secondary border border-primary rounded-lg">
          <span className="text-label text-dim">Columns</span>
          <p className="text-data text-primary mt-2">12</p>
        </div>
        <div className="p-4 bg-secondary border border-primary rounded-lg">
          <span className="text-label text-dim">Gap (Default)</span>
          <p className="text-data text-primary mt-2">2rem</p>
        </div>
        <div className="p-4 bg-secondary border border-primary rounded-lg">
          <span className="text-label text-dim">Max Width</span>
          <p className="text-data text-primary mt-2">80rem</p>
        </div>
      </div>
    </div>
  </div>
);

// ----------------------------------------------------------------------------------
// SECTION 6: COMPONENTS
// ----------------------------------------------------------------------------------
const ComponentsSection = () => (
  <div className="min-h-screen bg-primary section-padding border-t border-primary">
    <div className="container-default">
      <SectionHeader number="05.0" title="Components" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Buttons */}
        <div className="space-y-8">
          <h3 className="text-display-sm text-primary mb-6">Buttons</h3>

          <div className="p-6 bg-secondary border border-primary rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-mono text-dim">.btn-primary</span>
            </div>
            <button className="btn-primary">Execute</button>
          </div>

          <div className="p-6 bg-secondary border border-primary rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-mono text-dim">.btn-secondary</span>
            </div>
            <button className="btn-secondary">Configure</button>
          </div>

          <div className="p-6 bg-secondary border border-primary rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-mono text-dim">.btn-ghost</span>
            </div>
            <button className="btn-ghost">Learn More</button>
          </div>
        </div>

        {/* Cards & Surfaces */}
        <div className="space-y-8">
          <h3 className="text-display-sm text-primary mb-6">
            Cards & Surfaces
          </h3>

          <div className="card p-6">
            <span className="text-mono text-dim mb-4 block">.card</span>
            <p className="text-body-md text-muted">
              Default card with subtle border and hover state.
            </p>
          </div>

          <div className="card-elevated p-6">
            <span className="text-mono text-dim mb-4 block">
              .card-elevated
            </span>
            <p className="text-body-md text-muted">
              Elevated card with shadow for prominence.
            </p>
          </div>

          <div className="surface p-6">
            <span className="text-mono text-dim mb-4 block">.surface</span>
            <p className="text-body-md text-muted">
              Transparent surface for grouping content.
            </p>
          </div>
        </div>
      </div>

      {/* Motion */}
      <div className="mt-24">
        <h3 className="text-display-sm text-primary mb-8">Motion Physics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-secondary border border-primary rounded-xl text-center">
            <div className="w-12 h-12 bg-accent rounded-lg mx-auto mb-4 animate-bounce glow-teal"></div>
            <span className="text-mono text-accent">--ease-spring</span>
            <p className="text-body-sm text-dim mt-2">Snappy interactions</p>
          </div>
          <div className="p-8 bg-secondary border border-primary rounded-xl">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-label text-dim">Fast</span>
                <span className="text-mono text-muted">150ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-label text-dim">Normal</span>
                <span className="text-mono text-muted">200ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-label text-dim">Slow</span>
                <span className="text-mono text-muted">300ms</span>
              </div>
            </div>
          </div>
          <div className="p-8 bg-secondary border border-primary rounded-xl">
            <p className="text-body-md text-muted">
              Animation should be snappy and precise. Avoid &quot;floaty&quot;
              easing. UI elements should feel like they&apos;re sliding on a
              lubricated rail.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ----------------------------------------------------------------------------------
// SECTION 7: LIVE APPLICATION
// ----------------------------------------------------------------------------------
const Dashboard = () => (
  <div className="bg-primary min-h-screen text-primary selection:bg-accent selection:text-black">
    <nav className="fixed top-0 w-full z-50 border-b border-primary bg-[--color-bg-primary]/90 backdrop-blur-md">
      <div className="container-default h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent clip-hex flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>
          <span className="text-display-sm">ONSET</span>
        </div>
        <div className="hidden md:flex gap-1">
          {["Dashboard", "Protocol", "Analytics", "Settings"].map((item, i) => (
            <button
              key={item}
              className={`btn-ghost ${i === 0 ? "text-primary" : ""}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="w-8 h-8 rounded-full border border-primary flex items-center justify-center hover:border-accent transition-colors">
            <Settings size={14} />
          </button>
          <div className="w-8 h-8 rounded-full bg-elevated flex items-center justify-center text-xs font-bold border border-primary">
            JD
          </div>
        </div>
      </div>
    </nav>

    <main className="container-default pt-32 pb-24">
      {/* Status Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 animate-fade-in-up">
        <div className="lg:col-span-8 card-elevated p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
            <Activity size={120} strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="status-dot status-optimal animate-pulse"></span>
              <span className="text-label text-accent">System Optimized</span>
            </div>
            <h1 className="text-display-xl text-primary mb-6">
              Peak
              <br />
              Performance
            </h1>
            <p className="text-body-lg text-muted max-w-md mb-8">
              Biomarkers indicate a 12% increase in recovery efficiency.
              Testosterone is within the elite percentile.
            </p>
            <button className="btn-primary">View Full Analysis</button>
          </div>
        </div>

        <div className="lg:col-span-4 grid grid-rows-2 gap-8">
          <div className="card p-8 flex flex-col justify-between cursor-pointer">
            <div className="flex justify-between items-start">
              <span className="text-label text-dim">Bio-Age</span>
              <BarChart3 className="text-accent" size={20} />
            </div>
            <div>
              <span className="text-data text-primary">-2.4</span>
              <span className="text-body-md text-dim ml-2">Years</span>
            </div>
          </div>
          <div className="card p-8 flex flex-col justify-between cursor-pointer">
            <div className="flex justify-between items-start">
              <span className="text-label text-dim">Sleep Efficiency</span>
              <Zap className="text-accent" size={20} />
            </div>
            <div>
              <span className="text-data text-primary">94</span>
              <span className="text-body-md text-accent ml-1">%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-display-md text-primary">Key Biomarkers</h2>
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center border border-primary text-dim hover:text-primary hover:border-white transition-colors">
            <ChevronRight size={16} className="rotate-180" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-primary text-dim hover:text-primary hover:border-white transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[--color-border-primary] border border-primary">
        {BIOMARKERS.map((bio, i) => (
          <div
            key={i}
            className="bg-primary p-6 hover:bg-secondary transition-colors group"
          >
            <div className="flex justify-between items-start mb-12">
              <span className="text-label text-dim group-hover:text-primary transition-colors">
                {bio.name}
              </span>
              <span
                className={`text-mono ${bio.change.includes("+") ? "text-accent" : "text-dim"}`}
              >
                {bio.change}
              </span>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-data text-primary">{bio.value}</span>
              <span className="text-body-sm text-dim mb-1">{bio.unit}</span>
            </div>
            <div className="h-8 mt-4 flex items-end gap-1">
              {bio.trend.map((val, idx) => (
                <div
                  key={idx}
                  style={{ height: `${val}%` }}
                  className={`flex-1 ${idx === 6 ? "bg-accent" : "bg-[--color-border-primary]"} rounded-t-sm`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
);

// ----------------------------------------------------------------------------------
// PAGE COMPONENT
// ----------------------------------------------------------------------------------

export default function BrandBiblePage() {
  const [viewMode, setViewMode] = useState<"bible" | "app">("bible");

  return (
    <div className="bg-primary min-h-screen text-primary">
      {/* Mode Switcher */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] p-1.5 bg-elevated border border-primary rounded-full flex gap-1 shadow-2xl">
        <button
          onClick={() => setViewMode("bible")}
          className={`px-6 py-2 rounded-full text-label transition-all ${
            viewMode === "bible"
              ? "bg-white text-black"
              : "text-dim hover:text-primary"
          }`}
        >
          Brand Bible
        </button>
        <button
          onClick={() => setViewMode("app")}
          className={`px-6 py-2 rounded-full text-label transition-all ${
            viewMode === "app"
              ? "bg-accent text-black"
              : "text-dim hover:text-primary"
          }`}
        >
          Live App
        </button>
      </div>

      {/* Content Area */}
      <div className="animate-fade-in">
        {viewMode === "bible" ? (
          <div>
            <StrategySection />
            <LogoSection />
            <TypeSection />
            <ColorSection />
            <SpacingSection />
            <ComponentsSection />
          </div>
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
}
