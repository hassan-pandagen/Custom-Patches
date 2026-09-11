"use client";

import Image from "next/image";
import { WaveDivider } from "./ui/WaveDivider";

// Each step is set word-by-word: a plain black lead-in, one oversized mint hero
// word, then a black tail — matching the comp's typographic rhythm.
const SIZES = {
  sm: "text-2xl sm:text-3xl",
  md: "text-3xl sm:text-4xl",
  xl: "text-6xl sm:text-7xl",
} as const;

type Line = { t: string; tone: "dark" | "mint"; size: keyof typeof SIZES };

// Positions are for the lg+ collage; below lg every step falls back into normal flow.
const STEPS: { id: number; place: string; lines: Line[] }[] = [
  {
    id: 1,
    place: "lg:left-0 lg:top-[8%] lg:w-[280px] lg:-rotate-6",
    lines: [
      { t: "Let's", tone: "dark", size: "sm" },
      { t: "Get", tone: "mint", size: "xl" },
      { t: "Started", tone: "dark", size: "md" },
    ],
  },
  {
    id: 2,
    place: "lg:left-[9%] lg:top-[70%] lg:w-[450px] lg:-rotate-3",
    lines: [
      { t: "Your Satisfaction", tone: "mint", size: "md" },
      { t: "Comes First", tone: "mint", size: "md" },
    ],
  },
  {
    id: 3,
    place: "lg:right-0 lg:top-[8%] lg:w-[300px] lg:rotate-3",
    lines: [
      { t: "Precision", tone: "dark", size: "md" },
      { t: "Craft", tone: "mint", size: "xl" },
      { t: "Begins", tone: "dark", size: "md" },
    ],
  },
  {
    id: 4,
    place: "lg:right-[2%] lg:top-[50%] lg:w-[330px] lg:rotate-2",
    lines: [
      { t: "Delivery At Your Doorstep", tone: "mint", size: "md" },
      { t: "Ready To Be Impressed?", tone: "mint", size: "md" },
    ],
  },
];

// Chunky mint lettering with a heavy black keyline, as in the comp.
const OUTLINE = { WebkitTextStroke: "4px #000", paintOrder: "stroke" } as const;
const OUTLINE_XL = { WebkitTextStroke: "9px #000", paintOrder: "stroke" } as const;

interface QueenCTAProps {
  onOpenQuote: () => void;
}

export function QueenCTA({ onOpenQuote }: QueenCTAProps) {
  return (
    <section className="relative bg-brand-lime pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <svg viewBox="0 0 320 80" className="mx-auto h-16 w-72 overflow-visible" aria-hidden="true">
            <path id="quick-apply-arc" d="M14 74 A 400 400 0 0 1 306 74" fill="none" />
            <text
              className="font-display"
              fill="var(--color-brand-mint)"
              stroke="#000"
              strokeWidth={8}
              strokeLinejoin="round"
              paintOrder="stroke"
              fontSize={34}
            >
              <textPath href="#quick-apply-arc" startOffset="50%" textAnchor="middle">
                QUICK APPLY
              </textPath>
            </text>
          </svg>
          <span className="sr-only">Quick Apply</span>
          <h2 className="mt-2 font-display text-4xl sm:text-6xl text-black">IRON-ON MAGIC</h2>
        </div>

        <div className="relative mt-12 flex flex-col items-center gap-10 lg:mt-16 lg:h-[680px] lg:gap-0">
          <svg
            className="pointer-events-none absolute left-1/2 top-[38%] hidden h-[320px] w-[680px] -translate-x-1/2 lg:block"
            viewBox="0 0 680 320"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M24 150 C70 108 118 52 166 26 C194 11 214 15 220 36 C230 70 176 132 130 176 C96 208 74 240 90 258 C112 282 156 258 200 230 L470 44 C508 20 536 20 550 44 C568 76 512 130 458 176 C412 216 384 250 402 272 C424 296 464 268 508 240 L660 150"
              stroke="#fff"
              strokeWidth="22"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Image
            src="/assets/iron-on-antisocial.png"
            alt="Example iron-on patch"
            width={424}
            height={313}
            className="relative z-10 w-56 h-auto rotate-6 drop-shadow-xl sm:w-64 lg:absolute lg:left-1/2 lg:top-0 lg:w-[300px] lg:-translate-x-1/2"
          />

          {STEPS.map((step) => (
            <div key={step.id} className={`relative z-10 max-w-sm text-center lg:absolute lg:max-w-none lg:text-left ${step.place}`}>
              <span className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-mint font-display text-lg text-black ring-3 ring-black">
                {step.id}
              </span>
              <h3 className="font-display leading-[0.85]">
                {step.lines.map((line) => (
                  <span
                    key={line.t}
                    className={`block ${SIZES[line.size]} ${line.tone === "mint" ? "text-brand-mint" : "text-black"}`}
                    style={line.tone === "mint" ? (line.size === "xl" ? OUTLINE_XL : OUTLINE) : undefined}
                  >
                    {line.t.toUpperCase()}
                  </span>
                ))}
              </h3>
            </div>
          ))}

          <Image
            src="/assets/satisfaction-photo.png"
            alt=""
            width={318}
            height={378}
            aria-hidden="true"
            className="relative z-[5] w-44 h-auto lg:absolute lg:left-[14%] lg:top-[44%] lg:w-[210px]"
          />
        </div>

        <div className="mt-14 flex justify-center">
          <button
            onClick={onOpenQuote}
            className="rounded-full bg-black px-8 py-3 font-mouse text-sm text-white hover:bg-brand-mint hover:text-black transition-colors"
          >
            Get My Free Quote
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 translate-y-px">
        <WaveDivider fill="white" />
      </div>
    </section>
  );
}
