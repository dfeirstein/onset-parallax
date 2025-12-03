"use client";

export default function Results() {
  return (
    <section className="relative bg-[#111111] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Results That
              <br />
              <span className="text-[#14B8A6]">Drive Action</span>
            </h2>
            <p className="font-body text-lg text-white/60 mb-8 max-w-md">
              Every result comes with trend analysis and concrete actions.
              No jargon, no confusion—just clear next steps.
            </p>

            <ul className="space-y-4">
              {[
                "Traffic-light scoring for instant clarity",
                "12-month trend visualization",
                "3 actionable insights per result",
                "Protocol recommendations tailored to you",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-[#14B8A6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="font-body text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Mock Results Card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#14B8A6]/20 blur-3xl rounded-full" />

            {/* Card */}
            <div className="relative rounded-2xl bg-[#1A1A1A] border border-white/10 p-6 lg:p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <p className="font-body text-sm text-white/40">October Results</p>
                  <p className="font-display text-lg font-bold text-white">Sample User</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="font-body text-sm text-green-500">On Track</span>
                </div>
              </div>

              {/* Key Insights */}
              <div className="mb-6">
                <h4 className="font-body text-xs font-medium uppercase tracking-wider text-white/40 mb-3">
                  Key Insights
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-[#14B8A6]">•</span>
                    <span className="font-body text-white/70">LDL-C down 12% since starting Zone 2 cardio</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-[#14B8A6]">•</span>
                    <span className="font-body text-white/70">HbA1c stable at 5.2% — metabolic health strong</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-[#14B8A6]">•</span>
                    <span className="font-body text-white/70">Testosterone trending up after sleep protocol</span>
                  </li>
                </ul>
              </div>

              {/* Actions */}
              <div className="p-4 rounded-xl bg-white/5">
                <h4 className="font-body text-xs font-medium uppercase tracking-wider text-white/40 mb-3">
                  Actions This Month
                </h4>
                <ol className="space-y-2">
                  <li className="flex items-start gap-3 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#14B8A6]/20 text-[#14B8A6] font-body text-xs flex items-center justify-center">1</span>
                    <span className="font-body text-white/70">Maintain cardio volume (150 min/week)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#14B8A6]/20 text-[#14B8A6] font-body text-xs flex items-center justify-center">2</span>
                    <span className="font-body text-white/70">Add 200mg Magnesium Glycinate before bed</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#14B8A6]/20 text-[#14B8A6] font-body text-xs flex items-center justify-center">3</span>
                    <span className="font-body text-white/70">Retest Vitamin D next quarter</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
