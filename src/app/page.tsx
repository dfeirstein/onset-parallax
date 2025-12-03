"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Panels from "@/components/Panels";
import Science from "@/components/Science";
import Results from "@/components/Results";
import Promise from "@/components/Promise";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadComplete={() => setIsLoading(false)} />
      )}

      <main
        className={`min-h-screen bg-[#0A0A0A] transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navigation />

        {/* Hero stays fixed behind */}
        <Hero />

        {/* Content curtain - slides up over the hero */}
        <div className="relative z-20">
          {/* Curtain edge with subtle shadow for depth */}
          <div className="absolute inset-x-0 -top-32 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />

          {/* Main content wrapper */}
          <div className="relative bg-[#0A0A0A] rounded-t-[2rem] shadow-[0_-20px_60px_rgba(0,0,0,0.5)]">
            <HowItWorks />
            <Panels />
            <Science />
            <Results />
            <Promise />
            <Pricing />
            <FAQ />
            <FinalCTA />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
