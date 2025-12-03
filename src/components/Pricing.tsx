"use client";

import { CheckIcon } from "./Icons";

const features = [
  "Monthly Core Panel (17 biomarkers)",
  "Quarterly Expanded Panel included",
  "Trend tracking & insights dashboard",
  "Protocol recommendations",
  "Free shipping both ways",
  "Results in 2-3 days",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#111111] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Simple Pricing
          </h2>
          <p className="mt-4 font-body text-lg text-white/60">
            Everything you need. Cancel anytime.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mx-auto max-w-lg">
          <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-8 lg:p-10">
            {/* Accent border */}
            <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-3xl bg-gradient-to-r from-transparent via-[#14B8A6] to-transparent" />

            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center rounded-full bg-[#14B8A6] px-4 py-1 font-body text-sm font-medium text-black">
                Most Popular
              </span>
            </div>

            {/* Plan Name */}
            <div className="text-center mb-8 pt-4">
              <h3 className="font-display text-2xl font-bold text-white">
                Monthly Plan
              </h3>
              <div className="mt-4 flex items-baseline justify-center gap-2">
                <span className="font-display text-6xl font-black text-white">$149</span>
                <span className="font-body text-white/50">/month</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#14B8A6]/20">
                      <CheckIcon className="w-3 h-3 text-[#14B8A6]" />
                    </div>
                  </div>
                  <span className="font-body text-white/80">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#"
              className="block w-full rounded-full bg-[#14B8A6] py-4 text-center font-body text-base font-medium text-black transition-all hover:bg-[#0D9488]"
            >
              Start Your First Month
            </a>

            {/* Note */}
            <p className="mt-4 text-center font-body text-sm text-white/40">
              No commitment. Cancel anytime.
            </p>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="font-body text-white/50">
            Questions? <a href="#faq" className="text-[#14B8A6] hover:underline">Check our FAQ</a> or{" "}
            <a href="mailto:hello@onsethealth.com" className="text-[#14B8A6] hover:underline">contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
}
