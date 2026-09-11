"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { WaveDivider } from "./ui/WaveDivider";
import { CheckerBand } from "./ui/CheckerBand";

interface BeyondPatchesProps {
  onOpenQuote: () => void;
}

const ITEMS = [
  { title: "Custom Lapel Pins", image: "/assets/beyond-lapel-pins.png", width: 234, height: 252 },
  { title: "Custom Challenge Coin", image: "/assets/beyond-challenge-coin.png", width: 255, height: 243 },
  { title: "Custom Keychains", image: "/assets/beyond-keychain.png", width: 262, height: 257 },
  { title: "Custom PVC Shoe Charms", image: "/assets/beyond-shoe-charms.png", width: 294, height: 257 },
];

export function BeyondPatches({ onOpenQuote }: BeyondPatchesProps) {
  return (
    <section id="beyond-patches" className="relative bg-brand-blue pb-24 lg:pb-32">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <svg
          className="pointer-events-none absolute left-1/2 top-[66%] hidden h-[300px] w-[960px] -translate-x-1/2 z-0 lg:block"
          viewBox="0 0 960 300"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 160 L250 160 C290 135 320 112 348 100 C365 93 378 96 384 110 C392 129 366 157 338 184 C315 206 294 225 305 238 C319 253 350 239 382 218 L670 35 C708 14 735 15 749 36 C764 59 715 108 663 153 C620 191 592 221 609 241 C628 262 665 241 706 221 L930 155"
            stroke="white"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h2 className="font-display text-4xl sm:text-5xl text-white">BEYOND PATCHES</h2>
        <p className="mt-3 font-mouse text-xs sm:text-sm text-white/80 uppercase tracking-wide mb-6">
          Coins, Pins, Keychains &amp; PVC Charms
        </p>

        <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <button
              key={item.title}
              onClick={onOpenQuote}
              className="group relative flex flex-col rounded-2xl bg-white p-4 text-left overflow-hidden"
            >
              <span className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-brand-mint text-black group-hover:bg-brand-lime transition-colors">
                <Plus className="h-4 w-4" />
              </span>

              <div className="relative aspect-square w-full flex items-center justify-center bg-white">
                <CheckerBand bleed />
                <Image
                  src={item.image}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className="relative z-10 h-[62%] w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-4 flex items-end justify-between gap-2">
                <h3 className="font-mouse text-2xl sm:text-3xl text-black leading-tight">{item.title}</h3>
                <span className="shrink-0 text-right font-mouse text-base sm:text-lg text-black">Get a quote</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 translate-y-px">
        <WaveDivider fill="white" />
      </div>
    </section>
  );
}
