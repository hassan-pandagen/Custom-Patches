"use client";

import Image from "next/image";
import { WaveDivider } from "./ui/WaveDivider";

const STEPS = [
  {
    id: 1,
    tag: "Sketch",
    image: "/assets/process-sketch.png",
    wrapClass: "sm:absolute sm:left-[68%] sm:-top-[170px] sm:w-[20%]",
  },
  {
    id: 2,
    tag: "Mockup",
    image: "/assets/process-mockup.png",
    wrapClass: "sm:absolute sm:left-[14%] sm:-top-[40px] sm:w-[20%]",
  },
  {
    id: 3,
    tag: "Patch",
    image: "/assets/process-patch.png",
    wrapClass: "sm:absolute sm:left-[54%] sm:top-[197px] sm:w-[20%]",
  },
];

function StepTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="mb-3 self-start -rotate-6 font-display text-3xl sm:text-4xl text-brand-lime drop-shadow-[3px_3px_0_rgba(0,0,0,0.9)]"
      style={{ WebkitTextStroke: "2px black" }}
    >
      {children}
    </span>
  );
}

export function ProcessSteps() {
  return (
    <section id="process" className="relative bg-white pt-36 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute top-0 left-0 right-0">
        <WaveDivider fill="var(--color-brand-blue)" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <span
          className="inline-block -rotate-6 font-display text-3xl leading-none text-white sm:text-5xl"
          style={{ WebkitTextStroke: "3px black" }}
        >
          3STEPS
        </span>

        <h2 className="mt-6 font-display text-4xl sm:text-6xl leading-[0.95] text-black">
          HERE&apos;S
          <br />
          EXACTLY HOW
          <br />
          WE MAKE
        </h2>

        <p className="mt-6 max-w-xl font-mouse text-xl sm:max-w-none sm:text-2xl lg:whitespace-nowrap text-black font-bold">
          From your artwork or idea to a patch in hand. Three steps, no surprises, no setup fees.
        </p>

        <div className="relative mt-36 flex flex-col gap-16 sm:block sm:h-[560px] lg:h-[540px]">
          {/* One continuous track: top middle -> Sketch -> Mockup -> Patch. */}
          <svg
            className="pointer-events-none absolute inset-0 hidden overflow-visible sm:block"
            viewBox="0 0 1088 540"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M440,-450 C535,-395 610,-305 700,-235 C790,-165 850,-82 850,-5 C850,110 730,175 570,170 C435,166 338,124 262,120 C190,118 132,190 140,286 C150,408 276,450 406,422 C520,397 616,362 698,360"
              fill="none"
              stroke="#ECECEC"
              strokeWidth="8"
              strokeDasharray="38 34"
              strokeLinecap="butt"
            />
          </svg>

          {STEPS.map((step) => (
            <div key={step.id} className={`relative flex flex-col items-start ${step.wrapClass}`}>
              <StepTag>{step.tag}</StepTag>
              <div className="w-full max-w-[220px] overflow-hidden rounded-2xl bg-brand-mint shadow-lg">
                <Image
                  src={step.image}
                  alt={`${step.tag} step`}
                  width={259}
                  height={302}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 translate-y-px">
        <WaveDivider fill="var(--color-brand-lime)" />
      </div>
    </section>
  );
}
