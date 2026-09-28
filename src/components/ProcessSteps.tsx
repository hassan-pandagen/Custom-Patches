"use client";

import Image from "next/image";

const STEPS = [
  { id: 1, title: "Submit Design", desc: "Send us your logo or artwork in any format. Our team digitizes it for optimal patch production.", image: "/assets/step-sketch.png" },
  { id: 2, title: "Approve Mockup", desc: "Review your digital mockup with exact thread colors and sizing. Changes are free until you approve.", image: "/assets/step-mockup.png" },
  { id: 3, title: "Receive & Apply", desc: "Get your heat press-ready patches in 12-14 days (rush 4-7 days). Apply in seconds with professional results.", image: "/assets/step-patch.png" },
];

export function ProcessSteps() {
  return (
    <section className="bg-[#111] py-12 md:py-24 text-white relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase mb-4 tracking-wide">
          <span className="text-white">FROM CONCEPT TO </span>
          <span className="text-brand-orange">PRODUCTION-READY PATCHES</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 md:mb-16 text-sm md:text-base">
          Our streamlined process takes your clothing brand from design concept to heat press-ready patches in three simple steps. Professional quality, predictable timelines.
        </p>

        <div className="relative grid gap-8 md:gap-12 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Arrows */}
          <Image src="/assets/arrow-curve.png" width={96} height={48} className="hidden md:block absolute top-20 left-[25%] w-24 opacity-80" alt="" />
          <Image src="/assets/arrow-curve.png" width={96} height={48} className="hidden md:block absolute top-20 right-[25%] w-24 opacity-80" alt="" />

          {STEPS.map((step) => (
            <div key={step.id} className="flex flex-col items-center relative z-10">
              <div className="relative w-40 h-40 md:w-48 md:h-48 mb-4 md:mb-8 rounded-full border-2 border-white/20 p-2 hover:border-brand-orange transition-colors duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-black/50 relative">
                  <Image src={step.image} alt={step.title} fill className="object-cover" sizes="(max-width: 768px) 160px, 192px" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{step.title}</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-xs px-4 md:px-0">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
