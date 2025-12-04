"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Results() {
  return (
    <section className="relative bg-tertiary section-padding overflow-hidden">
      <div className="container-default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <AnimateOnScroll>
              <h2 className="text-display-lg text-primary mb-6">
                Results That
                <br />
                <span className="text-accent">Drive Action</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <p className="text-body-lg text-subtle mb-8 max-w-md">
                Every result comes with trend analysis and concrete actions. No
                jargon, no confusion—just clear next steps.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <ul className="space-y-4">
                {[
                  "Traffic-light scoring for instant clarity",
                  "12-month trend visualization",
                  "3 actionable insights per result",
                  "Protocol recommendations tailored to you",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-accent"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <span className="text-body-md text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>

          {/* Right - Mock Results Card */}
          <AnimateOnScroll delay={150}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 glow-bg-primary blur-3xl rounded-full" />

              {/* Card */}
              <div className="card-elevated relative p-6 lg:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-secondary">
                  <div>
                    <p className="text-body-sm text-dim">October Results</p>
                    <p className="text-display-sm text-primary">Sample User</p>
                  </div>
                  <div className="status-badge status-badge-optimal">
                    <div className="status-dot status-optimal" />
                    <span className="text-body-sm status-text-optimal">
                      On Track
                    </span>
                  </div>
                </div>

                {/* Key Insights */}
                <div className="mb-6">
                  <h4 className="text-label text-dim mb-3">Key Insights</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-accent">•</span>
                      <span className="text-body-sm text-muted">
                        LDL-C down 12% since starting Zone 2 cardio
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-accent">•</span>
                      <span className="text-body-sm text-muted">
                        HbA1c stable at 5.2% — metabolic health strong
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-accent">•</span>
                      <span className="text-body-sm text-muted">
                        Testosterone trending up after sleep protocol
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Actions */}
                <div className="info-box">
                  <h4 className="text-label text-dim mb-3">
                    Actions This Month
                  </h4>
                  <ol className="space-y-2">
                    <li className="flex items-start gap-3 text-sm">
                      <span className="action-number">1</span>
                      <span className="text-body-sm text-muted">
                        Maintain cardio volume (150 min/week)
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <span className="action-number">2</span>
                      <span className="text-body-sm text-muted">
                        Add 200mg Magnesium Glycinate before bed
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <span className="action-number">3</span>
                      <span className="text-body-sm text-muted">
                        Retest Vitamin D next quarter
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
