"use client";

import { biomarkers } from "@/lib/data";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Panels() {
  return (
    <section id="panels" className="relative bg-tertiary section-padding">
      <div className="container-default">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-16 lg:mb-24">
          <h2 className="text-display-lg text-primary">The Panels</h2>
          <p className="mt-4 text-body-lg text-subtle max-w-2xl mx-auto">
            Comprehensive biomarker tracking designed for optimization
          </p>
        </AnimateOnScroll>

        {/* Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Core Panel */}
          <AnimateOnScroll delay={0}>
            <div className="relative rounded-3xl bg-gradient-to-br from-[--color-border-subtle] to-transparent border border-secondary p-8 lg:p-10 h-full">
              {/* Accent border */}
              <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-3xl bg-gradient-to-r from-[--color-accent-primary] via-[--color-accent-primary] to-transparent" />

              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-display-sm text-primary">
                    Monthly Core Panel
                  </h3>
                  <p className="mt-1 text-body-sm text-dim">17 Biomarkers</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[--color-accent-primary]/20 text-accent font-display font-bold">
                  17
                </div>
              </div>

              <div className="space-y-6">
                {Object.entries(biomarkers.monthly).map(
                  ([category, markers]) => (
                    <div key={category}>
                      <h4 className="text-label text-dim mb-3">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {markers.map((marker) => (
                          <span
                            key={marker}
                            className="inline-flex items-center rounded-full bg-[--color-border-subtle] px-3 py-1 text-body-sm text-secondary border border-secondary"
                          >
                            {marker}
                          </span>
                        ))}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Quarterly Expanded Panel */}
          <AnimateOnScroll delay={150}>
            <div className="relative rounded-3xl bg-gradient-to-br from-[--color-border-subtle] to-transparent border border-secondary p-8 lg:p-10 h-full">
              {/* Accent border */}
              <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-3xl bg-gradient-to-r from-[--color-accent-secondary] via-[--color-accent-secondary] to-transparent" />

              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-display-sm text-primary">
                    Quarterly Expanded
                  </h3>
                  <p className="mt-1 text-body-sm text-dim">
                    Months 3, 6, 9, 12
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[--color-accent-secondary]/20 text-[--color-accent-secondary] font-display font-bold">
                  +7
                </div>
              </div>

              <div className="mb-6 p-4 rounded-xl bg-[--color-border-subtle] border border-secondary">
                <p className="text-body-sm text-subtle">
                  Everything in the Monthly Core Panel, plus:
                </p>
              </div>

              <div className="space-y-6">
                {Object.entries(biomarkers.quarterly).map(
                  ([category, markers]) => (
                    <div key={category}>
                      <h4 className="text-label text-dim mb-3">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {markers.map((marker) => (
                          <span
                            key={marker}
                            className="inline-flex items-center rounded-full bg-[--color-accent-secondary]/10 px-3 py-1 text-body-sm text-[--color-accent-secondary] border border-[--color-accent-secondary]/20"
                          >
                            {marker}
                          </span>
                        ))}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
