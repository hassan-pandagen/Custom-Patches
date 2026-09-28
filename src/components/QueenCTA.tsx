"use client";

import Image from "next/image";
import { Button } from "./ui/Button";

interface QuoteButtonProps {
  onClick: () => void;
}

function QuoteBtn({ onClick }: QuoteButtonProps) {
  return (
    <Button onClick={onClick} className="bg-black text-white hover:bg-brand-orange hover:text-black border border-brand-orange/30 px-6 py-2 h-auto text-xs uppercase tracking-widest font-bold mt-4 rounded-none skew-x-[-10deg] transition-all duration-300">
      <span className="skew-x-[10deg] text-brand-orange mr-2">❝</span>
      <span className="skew-x-[10deg]">Get Quote Now</span>
    </Button>
  );
}

interface QueenCTAProps {
  onOpenQuote: () => void;
}

export function QueenCTA({ onOpenQuote }: QueenCTAProps) {
  return (
    <section className="bg-[#EDEBE8] py-12 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-8 relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-wide leading-tight mb-4">
            <span className="text-brand-dark">YOUR PRODUCTION PARTNER </span>
            <span className="text-brand-orange">FROM DESIGN TO <br/>
            FINISHED PATCHES</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm">
            Four key stages where we handle the complexity so you can focus on growing your clothing brand.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-4 items-center">
          
          {/* --- LEFT COLUMN --- */}
          <div className="flex flex-col gap-8 lg:gap-32 text-center lg:text-right order-2 lg:order-1">
             <div className="pt-0 md:pt-24">
               <h3 className="font-bold text-lg md:text-xl text-brand-dark">Submit Your Design</h3>
               <p className="text-brand-orange text-xs font-bold uppercase mb-2">Professional Digitization Included</p>
               <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto lg:ml-auto lg:mr-0">
                 Send us your logo or artwork in any format. Our team digitizes it for optimal patch production with exact specifications.
               </p>
               <div className="flex justify-center lg:justify-end">
                 <QuoteBtn onClick={onOpenQuote} />
               </div>
             </div>

             <div className="pb-0 md:pb-24">
               <h3 className="font-bold text-lg md:text-xl text-brand-dark">Receive Ready Patches</h3>
               <p className="text-brand-orange text-xs font-bold uppercase mb-2">12 to 14 Days Standard Turnaround</p>
               <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto lg:ml-auto lg:mr-0">
                 Your heat press ready patches arrive inspected and verified. Apply in 10 to 15 seconds with professional results every time.
               </p>
               <div className="flex justify-center lg:justify-end">
                 <QuoteBtn onClick={onOpenQuote} />
               </div>
             </div>
          </div>

          {/* --- CENTER IMAGE --- */}
          <div className="relative flex justify-center order-1 lg:order-2 my-4 lg:my-0">
             <Image
               src="/assets/queen-illustration.png"
               alt="Queen Illustration"
               width={450}
               height={500}
               sizes="(max-width: 768px) 200px, (max-width: 1024px) 400px, 450px"
               className="w-[200px] md:w-[400px] lg:w-[450px] object-contain z-10"
               loading="lazy"
             />
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="flex flex-col gap-8 lg:gap-32 text-center lg:text-left order-3">
             <div className="pt-0 md:pt-24">
               <h3 className="font-bold text-lg md:text-xl text-brand-dark">Approve Your Mockup</h3>
               <p className="text-brand-orange text-xs font-bold uppercase mb-2">Free Revisions Until Perfect</p>
               <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto lg:mx-0">
                 Review your digital mockup with exact thread colors and sizing. We make changes until you approve the final design for production.
               </p>
               <div className="flex justify-center lg:justify-start">
                 <QuoteBtn onClick={onOpenQuote} />
               </div>
             </div>

             <div className="pb-0 md:pb-24">
               <h3 className="font-bold text-lg md:text-xl text-brand-dark">Production Begins</h3>
               <p className="text-brand-orange text-xs font-bold uppercase mb-2">US Quality Standards</p>
               <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto lg:mx-0">
                 Once approved, we manufacture your patches with rigorous quality control. Every patch is inspected to meet commercial apparel standards.
               </p>
               <div className="flex justify-center lg:justify-start">
                 <QuoteBtn onClick={onOpenQuote} />
               </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
