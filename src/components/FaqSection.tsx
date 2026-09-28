"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
  {
    q: "What is heat press transfer technology and why is it better for clothing brands?",
    a: "Heat press transfer technology applies embroidered patches in 10-15 seconds using commercial heat press, looking identical to direct embroidery. For clothing brands, this means dramatically faster production (150+ garments/hour vs 6-12/hour), perfect placement consistency, zero defects reaching customers, and significantly reduced labor costs while maintaining premium quality.",
  },
  {
    q: "What's your minimum order quantity and turnaround time?",
    a: "MOQ starts at just 50 units, perfect for testing new designs or limited releases. Standard production is 12-14 days from design approval to delivery. Rush production available in 4-7 days for urgent collection launches. All orders include digitization, sampling, production, quality inspection, and shipping.",
  },
  {
    q: "Can you match our specific Pantone colors and brand guidelines?",
    a: "Yes. We maintain comprehensive thread charts with hundreds of colors and can match specific Pantone references. We'll provide thread color samples for your approval before production begins, ensuring perfect brand consistency across all your patches. Our quality control process verifies color matching on every production run.",
  },
  {
    q: "How durable are heat press patches compared to sewn-on patches?",
    a: "Our heat press patches undergo rigorous wash testing and withstand 50+ commercial wash cycles without lifting or degrading. The industrial-strength adhesive creates permanent bonds equivalent to traditional sewn applications, meeting US quality standards for commercial apparel. Many clothing brands report patches lasting the lifetime of the garment.",
  },
  {
    q: "What file format do you need and do you offer design services?",
    a: "Vector files (AI, EPS, PDF) work best. High-resolution raster images (PNG, JPG at 300+ DPI) also acceptable. If you only have low-resolution files or concepts, our in-house design team can recreate or develop them for $75-200 depending on complexity. We'll provide mockups for approval before production.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-white pt-6 pb-6 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-4 uppercase tracking-wide">
          <span className="text-brand-dark">FREQUENTLY ASKED </span>
          <span className="text-brand-orange">QUESTIONS</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base">
          Common questions from clothing brands about our custom patches, heat press technology, and production process.
        </p>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className={`border rounded-lg overflow-hidden transition-all duration-300 bg-white ${
                openIndex === idx ? "border-brand-orange shadow-md" : "border-gray-200"
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-hidden"
              >
                <span className="font-semibold text-sm md:text-base text-brand-dark pr-8">
                  {faq.q}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="h-5 w-5 text-brand-orange shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 pt-0 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
