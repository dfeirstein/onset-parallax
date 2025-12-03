"use client";

export default function Promise() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0A0A0A] to-[#0A0A0A]" />

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#14B8A6]/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
          No Needles.
          <br />
          No Lab Visits.
          <br />
          <span className="text-[#14B8A6]">Ever.</span>
        </h2>

        <p className="mt-8 font-body text-xl text-white/60 max-w-2xl mx-auto">
          Unless something concerning shows up. Then we&apos;ll recommend a confirmatory
          draw—and help you book it.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="w-full sm:w-auto rounded-full bg-[#14B8A6] px-8 py-4 font-body text-base font-medium text-black transition-all hover:bg-[#0D9488]"
          >
            Start Your First Month
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto rounded-full border border-white/20 bg-transparent px-8 py-4 font-body text-base font-medium text-white transition-all hover:bg-white/5"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
