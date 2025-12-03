"use client";

export default function Science() {
  return (
    <section id="science" className="relative bg-[#0A0A0A] py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#14B8A6]/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Lab-Grade Results.
            <br />
            <span className="text-[#14B8A6]">Zero Lab Visits.</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tasso+ Technology */}
          <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#14B8A6]/10">
                <svg className="w-6 h-6 text-[#14B8A6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Tasso+ Technology
            </h3>
            <p className="font-body text-white/60 leading-relaxed">
              FDA Class II cleared. 300-600µL capillary blood collection. Lower hemolysis than finger pricks for superior sample quality.
            </p>
          </div>

          {/* Partner Labs */}
          <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#14B8A6]/10">
                <svg className="w-6 h-6 text-[#14B8A6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Partner Labs
            </h3>
            <p className="font-body text-white/60 leading-relaxed">
              ARUP Laboratories and CLIA-certified network. The same standards and equipment used for traditional venous blood testing.
            </p>
          </div>

          {/* Validated Panels */}
          <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#14B8A6]/10">
                <svg className="w-6 h-6 text-[#14B8A6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Validated Panels
            </h3>
            <p className="font-body text-white/60 leading-relaxed">
              Every biomarker clinically validated for capillary blood accuracy. Results you can trust, action you can take.
            </p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl font-bold text-white">FDA</span>
            <span className="font-body text-sm text-white/40">Class II Cleared</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl font-bold text-white">CLIA</span>
            <span className="font-body text-sm text-white/40">Certified Labs</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl font-bold text-white">HIPAA</span>
            <span className="font-body text-sm text-white/40">Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
}
