"use client";

import { CheckIcon } from "./Icons";
import AnimateOnScroll from "./AnimateOnScroll";

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
    <section id="pricing" className="relative bg-tertiary section-padding">
      <div className="container-default">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-display-lg">Simple Pricing</h2>
          <p className="mt-4 text-body-lg text-subtle">
            Everything you need. Cancel anytime.
          </p>
        </AnimateOnScroll>

        {/* Pricing Card */}
        <AnimateOnScroll delay={100} className="mx-auto max-w-lg">
          <div className="relative card-elevated p-8 lg:p-10">
            {/* Accent border */}
            <div className="card-accent-line" />

            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="pricing-badge">Most Popular</span>
            </div>

            {/* Plan Name */}
            <div className="text-center mb-8 pt-4">
              <h3 className="text-display-sm">Monthly Plan</h3>
              <div className="mt-4 flex items-baseline justify-center gap-2">
                <span className="text-data">$149</span>
                <span className="text-body-sm text-dim">/month</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="feature-check mt-0.5">
                    <CheckIcon className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-body-sm text-muted">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#"
              className="btn-primary block w-full py-4 text-center text-base"
            >
              Start Your First Month
            </a>

            {/* Note */}
            <p className="mt-4 text-center text-body-sm text-dim">
              No commitment. Cancel anytime.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Additional info */}
        <AnimateOnScroll delay={200} className="mt-12 text-center">
          <p className="text-body-sm text-dim">
            Questions?{" "}
            <a href="#faq" className="text-accent hover:underline">
              Check our FAQ
            </a>{" "}
            or{" "}
            <a
              href="mailto:hello@onsethealth.com"
              className="text-accent hover:underline"
            >
              contact us
            </a>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
