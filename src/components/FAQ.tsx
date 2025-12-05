"use client";

import { useState } from "react";
import { faqItems } from "@/lib/data";
import { PlusIcon, MinusIcon } from "./Icons";
import AnimateOnScroll from "./AnimateOnScroll";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-primary section-padding">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-display-lg">Questions?</h2>
            <p className="mt-4 text-body-lg text-subtle">
              Everything you need to know about Onset
            </p>
          </div>
        </AnimateOnScroll>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <AnimateOnScroll key={index} delay={index * 50}>
              <div className="surface rounded-2xl overflow-hidden transition-all duration-200 hover:border-subtle">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-body-sm font-medium text-primary pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <MinusIcon className="w-5 h-5 text-accent-primary" />
                    ) : (
                      <PlusIcon className="w-5 h-5 text-dim" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-body-sm text-subtle leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Contact CTA */}
        <AnimateOnScroll delay={faqItems.length * 50 + 100}>
          <div className="mt-12 text-center">
            <p className="text-body-sm text-dim">
              Still have questions?{" "}
              <a
                href="mailto:hello@getonset.co"
                className="text-accent hover:underline"
              >
                Reach out to our team
              </a>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
