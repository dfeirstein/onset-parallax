"use client";

import { useState } from "react";
import { faqItems } from "@/lib/data";
import { PlusIcon, MinusIcon } from "./Icons";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-[#0A0A0A] py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Questions?
          </h2>
          <p className="mt-4 font-body text-lg text-white/60">
            Everything you need to know about Onset
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-200 hover:border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-body text-base font-medium text-white pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <MinusIcon className="w-5 h-5 text-[#14B8A6]" />
                  ) : (
                    <PlusIcon className="w-5 h-5 text-white/40" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="font-body text-white/60 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="font-body text-white/50">
            Still have questions?{" "}
            <a
              href="mailto:hello@onsethealth.com"
              className="text-[#14B8A6] hover:underline"
            >
              Reach out to our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
