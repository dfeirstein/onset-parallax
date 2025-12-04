"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Promise() {
  return (
    <section className="relative bg-primary section-padding overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg-tertiary-to-primary" />

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] glow-bg-primary rounded-full blur-3xl" />

      <div className="relative container-default text-center">
        <AnimateOnScroll>
          <h2 className="text-display-lg leading-tight">
            No Needles.
            <br />
            No Lab Visits.
            <br />
            <span className="text-accent">Ever.</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <p className="mt-8 text-body-lg text-subtle max-w-2xl mx-auto">
            Unless something concerning shows up. Then we&apos;ll recommend a
            confirmatory draw—and help you book it.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto btn-primary px-8 py-4 text-base"
            >
              Start Your First Month
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto btn-secondary px-8 py-4 text-base"
            >
              Learn More
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
