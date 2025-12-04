"use client";

import { howItWorksSteps } from "@/lib/data";
import { BoxIcon, DeviceIcon, ChartIcon } from "./Icons";
import AnimateOnScroll from "./AnimateOnScroll";

const iconMap = {
  box: BoxIcon,
  device: DeviceIcon,
  chart: ChartIcon,
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-primary section-padding">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[--color-bg-primary] via-[--color-bg-primary] to-[--color-bg-tertiary]" />

      <div className="relative container-default">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-16 lg:mb-24">
          <h2 className="text-display-lg text-primary">How It Works</h2>
          <p className="mt-4 text-body-lg text-subtle max-w-2xl mx-auto">
            Three simple steps to understanding your health
          </p>
        </AnimateOnScroll>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {howItWorksSteps.map((step, index) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap];
            return (
              <AnimateOnScroll
                key={step.number}
                delay={index * 100}
                className="group relative"
              >
                {/* Connector line (hidden on last item and mobile) */}
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-[--color-border-secondary] to-transparent" />
                )}

                <div className="surface relative flex flex-col items-center text-center p-8 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 text-label text-accent">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[--color-accent-primary]/10 text-accent transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-display-sm text-primary mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-body-md text-subtle">{step.description}</p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
