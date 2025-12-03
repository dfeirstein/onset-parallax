"use client";

import { biomarkers } from "@/lib/data";

export default function Panels() {
  return (
    <section id="panels" className="relative bg-[#111111] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            The Panels
          </h2>
          <p className="mt-4 font-body text-lg text-white/60 max-w-2xl mx-auto">
            Comprehensive biomarker tracking designed for optimization
          </p>
        </div>

        {/* Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Core Panel */}
          <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-8 lg:p-10">
            {/* Accent border */}
            <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-3xl bg-gradient-to-r from-[#14B8A6] via-[#14B8A6] to-transparent" />

            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Monthly Core Panel
                </h3>
                <p className="mt-1 font-body text-white/50">17 Biomarkers</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#14B8A6]/20 text-[#14B8A6] font-display font-bold">
                17
              </div>
            </div>

            <div className="space-y-6">
              {Object.entries(biomarkers.monthly).map(([category, markers]) => (
                <div key={category}>
                  <h4 className="font-body text-sm font-medium uppercase tracking-wider text-white/40 mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {markers.map((marker) => (
                      <span
                        key={marker}
                        className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 font-body text-sm text-white/80 border border-white/10"
                      >
                        {marker}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quarterly Expanded Panel */}
          <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-8 lg:p-10">
            {/* Accent border */}
            <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-3xl bg-gradient-to-r from-[#F59E0B] via-[#F59E0B] to-transparent" />

            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Quarterly Expanded
                </h3>
                <p className="mt-1 font-body text-white/50">Months 3, 6, 9, 12</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F59E0B]/20 text-[#F59E0B] font-display font-bold">
                +7
              </div>
            </div>

            <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="font-body text-sm text-white/60">
                Everything in the Monthly Core Panel, plus:
              </p>
            </div>

            <div className="space-y-6">
              {Object.entries(biomarkers.quarterly).map(([category, markers]) => (
                <div key={category}>
                  <h4 className="font-body text-sm font-medium uppercase tracking-wider text-white/40 mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {markers.map((marker) => (
                      <span
                        key={marker}
                        className="inline-flex items-center rounded-full bg-[#F59E0B]/10 px-3 py-1 font-body text-sm text-[#F59E0B] border border-[#F59E0B]/20"
                      >
                        {marker}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
