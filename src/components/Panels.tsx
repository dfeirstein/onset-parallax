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
            <div className="panel-card h-full">
              {/* Accent border */}
              <div className="panel-accent-primary" />

              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-display-sm text-primary">
                    Monthly Core Panel
                  </h3>
                  <p className="mt-1 text-body-sm text-dim">17 Biomarkers</p>
                </div>
                <div className="badge-circle badge-circle-primary">17</div>
              </div>

              <div className="space-y-6">
                {Object.entries(biomarkers.monthly).map(
                  ([category, markers]) => (
                    <div key={category}>
                      <h4 className="text-label text-dim mb-3">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {markers.map((marker) => (
                          <span key={marker} className="chip chip-default">
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
            <div className="panel-card h-full">
              {/* Accent border */}
              <div className="panel-accent-secondary" />

              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-display-sm text-primary">
                    Quarterly Expanded
                  </h3>
                  <p className="mt-1 text-body-sm text-dim">
                    Months 3, 6, 9, 12
                  </p>
                </div>
                <div className="badge-circle badge-circle-secondary">+7</div>
              </div>

              <div className="info-box mb-6">
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
                          <span key={marker} className="chip chip-secondary">
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
