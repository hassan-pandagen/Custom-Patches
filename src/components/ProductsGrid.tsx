"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";

// When you replace product images, change this to v2, v3, etc. to force reload
const IMG_V = "v1";

const PRODUCTS = [
  // --- ROW 1 ---
  {
    id: 1,
    title: "Custom Chenille Patches",
    desc: "Transform your designs into vibrant masterpieces with custom embroidered patches. Timeless classics, everyone's favorite choice!",
    bgColor: "bg-[#DC2626]",
    image: `/assets/product-chenille.png?${IMG_V}`,
    width: "lg:w-[532px]",
    isWide: true,
    link: "/custom-patches/custom-chenille-patches",
  },
  {
    id: 2,
    title: "Custom PVC Patches",
    desc: "Transform your designs into vibrant masterpieces with custom embroidered patches. Timeless classics, everyone's favorite choice!",
    bgColor: "bg-[#1A1A1A]",
    image: `/assets/product-pvc.png?${IMG_V}`,
    width: "lg:w-[340px]",
    isWide: false,
    link: "/custom-patches/custom-pvc-patches",
  },
  {
    id: 3,
    title: "Custom Woven Patches",
    desc: "Transform your designs into vibrant masterpieces with custom embroidered patches. Timeless classics, everyone's favorite choice!",
    bgColor: "bg-[#2F4248]",
    image: `/assets/product-woven.png?${IMG_V}`,
    width: "lg:w-[340px]",
    isWide: false,
    link: "/custom-patches/custom-woven-patches",
  },

  // --- ROW 2 ---
  {
    id: 4,
    title: "Custom Leather Patches",
    desc: "Transform your designs into vibrant masterpieces with custom embroidered patches. Timeless classics, everyone's favorite choice!",
    bgColor: "bg-[#261818]",
    image: `/assets/product-leather.png?${IMG_V}`,
    width: "lg:w-[340px]",
    isWide: false,
    link: "/custom-patches/custom-leather-patches",
  },
  {
    id: 5,
    title: "Custom Shoes Charm",
    desc: "Transform your designs into vibrant masterpieces with custom embroidered patches. Timeless classics, everyone's favorite choice!",
    bgColor: "bg-[#7D4510]",
    image: `/assets/product-charm.png?${IMG_V}`,
    width: "lg:w-[340px]",
    isWide: false,
    link: "/custom-patches/custom-pvc-patches",
  },
  {
    id: 6,
    title: "Custom Embroidery Patches",
    desc: "Transform your designs into vibrant masterpieces with custom embroidered patches. Timeless classics, everyone's favorite choice!",
    bgColor: "bg-[#22386E]",
    image: `/assets/product-embroidery.png?${IMG_V}`,
    width: "lg:w-[532px]",
    isWide: true,
    link: "/custom-patches/custom-embroidered-patches",
  },
];

export function ProductsGrid() {
  return (
    <section className="bg-white pt-6 pb-24 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide leading-tight">
            <span className="text-brand-dark">INFUSE YOUR STYLE WITH </span>
            <span className="text-brand-orange">EXCLUSIVE <br />
            CUSTOM PATCH DESIGNS</span>
          </h2>
          <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed">
            From custom logo patches to iron-on patches, military patches, and custom Velcro patches, our tailored selection ensures a lasting impression, showcasing your unique style. At My Custom Patches, we&apos;re dedicated to providing custom-made patches that bring brand vision to life and take your product to the next level.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="flex flex-wrap justify-center gap-[54px]">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className={`
                relative overflow-hidden rounded-[10px] p-6 md:p-8 text-white shadow-lg group
                h-[295px] w-full ${product.width} ${product.bgColor}
                transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
              `}
            >
              {/* 
                 LAYER 1: Text Content (Z-Index 20 - ON TOP) 
                 - We set a max-width of 240px to force the line breaks to match Figma
                 - We use 'relative' to keep it in flow
              */}
              <div className="relative z-20 flex flex-col h-full justify-between items-start max-w-[240px]">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed font-normal">
                    {product.desc}
                  </p>
                </div>

                {/* Button: White Box with Black Text, Orange on Hover */}
                <Link href={product.link}>
                  <Button
                    className="bg-white text-black hover:bg-brand-orange hover:text-white border-none font-bold text-xs px-6 h-9 w-max rounded-md transition-all duration-300"
                    size="sm"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              {/*
                 LAYER 2: The Image (Z-Index 10 - BEHIND)
                 - Positioned Absolute Right
                 - It's okay if it slides under the text slightly
              */}
              <div className="absolute top-0 right-[-10px] h-full w-[55%] flex items-center justify-center z-10 pointer-events-none">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-contain transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
