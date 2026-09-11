"use client";

import Image from "next/image";

interface HeroProps {
  onOpenQuote: () => void;
  onSeeAllProducts: () => void;
}

export function Hero({ onOpenQuote, onSeeAllProducts }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-blue pt-28 pb-8 lg:pt-36 lg:pb-8">
      {/* Giant watermark word */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-20 select-none whitespace-nowrap text-center font-display text-[13vw] leading-none text-brand-blue-light/40 lg:top-24"
      >
        PATCHES
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rotate-[6deg] inline-block rounded-lg border-2 border-brand-blue-light bg-brand-blue px-5 py-2 font-display text-3xl sm:text-4xl text-white shadow-lg">
          CUSTOM
        </div>

        {/* Patch collage */}
        <div className="relative mt-6 w-full max-w-6xl -ml-2 sm:ml-0">
          <Image
            src="/assets/hero-patch-collage.png"
            alt="Examples of custom embroidered, chenille and PVC patches"
            width={1247}
            height={331}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl font-mouse text-base sm:text-lg text-white/90 leading-relaxed">
            From embroidered to PVC, woven, chenille and leather.
            <br />
            Every patch type, any quantity, delivered in 12&ndash;14 days (rush 4&ndash;7 days).
            <br />
            Free digital mockup included. No setup fees.
          </p>

          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="font-mouse text-sm text-white/80 lg:text-right">
              Rated 4.7/5 by 75+ customers on Trustpilot.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Image src="/assets/badge-asi.png" alt="ASI" width={111} height={44} className="h-6 w-auto object-contain brightness-0 invert opacity-80" />
              <Image src="/assets/badge-trustpilot.png" alt="Trustpilot" width={111} height={50} className="h-6 w-auto object-contain brightness-0 invert opacity-80" />
              <Image src="/assets/badge-google.png" alt="Google" width={111} height={43} className="h-6 w-auto object-contain brightness-0 invert opacity-80" />
              <Image src="/assets/badge-etsy.png" alt="Etsy" width={111} height={25} className="h-6 w-auto object-contain brightness-0 invert opacity-80" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <button
            onClick={onOpenQuote}
            className="rounded-full bg-brand-mint px-8 py-3 font-mouse text-sm text-brand-blue hover:bg-white transition-colors"
          >
            Get Custom Quote
          </button>
          <button
            onClick={onSeeAllProducts}
            className="rounded-full border-2 border-white/40 px-8 py-3 font-mouse text-sm text-white hover:bg-white/10 transition-colors"
          >
            See All Products
          </button>
        </div>
      </div>
    </section>
  );
}
