"use client";

import Image from "next/image";
import { VideoRevealCard } from "./VideoRevealCard";
import { WaveDivider } from "./ui/WaveDivider";

const TESTIMONIALS = [
  {
    initials: "BB",
    name: "Billy Bob J.",
    location: "US",
    date: "Feb 21, 2026",
    headline: "They're Legit!!",
    tilt: "lg:rotate-4",
    quote:
      "They're legit!!! I saw the reviews and asked ChatGPT before ordering. My patches arrived on time and a few were messed up. I sent 1 email with pictures and they mailed me more than I said were unusable. I'll be back for more! Good quality!",
  },
  {
    initials: "SP",
    name: "Selena P.",
    location: "US",
    date: "Feb 16, 2026",
    headline: "Epic Experience",
    tilt: "lg:-rotate-4",
    quote:
      "The quality is outstanding, durable, vibrant, and exactly what I envisioned. From my very first message, the team was friendly, responsive, and incredibly helpful. They checked in to make sure I was satisfied, and their customer service didn't stop after delivery. I highly recommend them!",
  },
  {
    initials: "TS",
    name: "Taye S.",
    location: "US",
    date: "Nov 28, 2025",
    headline: "Great Quality",
    tilt: "lg:rotate-5",
    quote:
      "My experience was quite positive. They were impressively on time with both delivery and service. The quality of the material was excellent. It felt sturdy yet flexible, which is essential for long-lasting wear. I would recommend Panda Patches for anyone looking for incredibly reliable service.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-white pt-16 pb-40 lg:pt-32 lg:pb-48">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center mb-14">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl leading-[0.95] text-black">
              REAL ORDER
              <br />
              FROM REAL
              <br />
              CUSTOMERS
            </h2>
            <p className="mt-4 font-mouse text-base text-gray-600">
              Real Orders. Real people. See why customers keep coming back.
            </p>
            <button className="mt-6 rounded-full border-2 border-black px-6 py-2.5 font-mouse text-sm text-black hover:bg-black hover:text-white transition-colors">
              View More
            </button>
          </div>

          <div className="relative aspect-square w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto">
            <Image
              src="/assets/Images_21.png"
              alt=""
              width={200}
              height={214}
              aria-hidden="true"
              unoptimized
              className="pointer-events-none absolute -top-12 -left-10 z-50 hidden w-28 lg:block"
            />
            <VideoRevealCard
              title="Real customer order"
              iconSrc="/assets/icons/sample1.png"
              videoSrc="/assets/videos/Sample1.mp4"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3 lg:gap-7">
          <Image
            src="/assets/Images_22.png"
            alt=""
            width={200}
            height={214}
            aria-hidden="true"
            unoptimized
            className="pointer-events-none absolute -top-28 left-[25%] z-20 hidden w-32 lg:block"
          />

          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className={`flex min-h-[340px] flex-col rounded-[18px] bg-black p-7 shadow-2xl transition-transform duration-300 hover:rotate-0 lg:min-h-[365px] ${t.tilt}`}
            >
              <span className="mb-5 inline-block self-start rounded-[50%] border-2 border-white px-5 py-2 font-mouse text-xl leading-none text-white">
                {t.headline}
              </span>
              <p className="grow font-mouse text-base leading-relaxed text-white/90">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-lime font-mouse text-sm text-black">
                  {t.initials}
                </span>
                <div>
                  <p className="font-mouse text-sm text-white">{t.name.toUpperCase()}</p>
                  <p className="font-mouse text-xs text-white/50">{t.location} &middot; {t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 translate-y-px">
        <WaveDivider fill="var(--color-brand-blue)" />
      </div>
    </section>
  );
}
