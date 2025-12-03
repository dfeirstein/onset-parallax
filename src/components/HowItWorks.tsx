"use client";

import { useRef } from "react";
import { howItWorksSteps } from "@/lib/data";
import { BoxIcon, DeviceIcon, ChartIcon } from "./Icons";

const iconMap = {
  box: BoxIcon,
  device: DeviceIcon,
  chart: ChartIcon,
};

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative bg-[#0A0A0A] py-24 lg:py-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#111111]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            How It Works
          </h2>
          <p className="mt-4 font-body text-lg text-white/60 max-w-2xl mx-auto">
            Three simple steps to understanding your health
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {howItWorksSteps.map((step, index) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap];
            return (
              <div
                key={step.number}
                className="group relative"
              >
                {/* Connector line (hidden on last item and mobile) */}
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
                )}

                <div className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 font-display text-sm font-bold text-[#14B8A6]">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#14B8A6]/10 text-[#14B8A6] transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
