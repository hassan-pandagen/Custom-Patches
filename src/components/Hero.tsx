"use client";

import Image from "next/image";
import { Button } from "./ui/Button";
import { VideoRevealCard } from "./VideoRevealCard";
import { Star } from "lucide-react";
import Link from "next/link";

interface HeroProps {
    onOpenQuote: () => void;
    onSeeAllProducts: () => void;
}

// Single featured video for performance
const FEATURED_VIDEO = {
    id: 1,
    title: "Embroidered",
    iconSrc: "/assets/icons/sample1.png",
    videoSrc: "/assets/videos/Sample1.mp4",
};

export function Hero({ onOpenQuote, onSeeAllProducts }: HeroProps) {
    return (
        <section className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col items-start space-y-6 text-left">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="text-brand-orange">Custom Patches</span> <br />
                            <span className="text-brand-dark">That Scale With Your Brand</span>
                        </h1>

                        <p className="max-w-xl text-lg text-gray-600 leading-relaxed">
                            Transform your apparel line with premium embroidered, chenille, and PVC patches. Our revolutionary heat press transfer technology delivers professional results in seconds – designed for clothing brands ready to scale.
                        </p>

                        {/* USP Badges */}
                        <div className="flex flex-col gap-3 w-full">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-orange rounded-full shrink-0"></div>
                                <span className="text-brand-dark font-semibold">Heat Press Transfer Technology – Apply like a pro, no sewing required</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-orange rounded-full shrink-0"></div>
                                <span className="text-brand-dark font-semibold">Rush Delivery in 4-7 Days – Keep up with your production schedule</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-orange rounded-full shrink-0"></div>
                                <span className="text-brand-dark font-semibold">US Quality Standards – Consistent results that match your brand guidelines</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
                            <Button size="lg" variant="outline" onClick={onOpenQuote}>
                                Get Custom Quote
                            </Button>
                            <Button size="lg" variant="outline" onClick={onSeeAllProducts}>
                                See All Products
                            </Button>
                        </div>

                        {/* 5 Star Ratings Section */}
                        <div className="pt-4 space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-bold text-brand-dark uppercase">5 Star Ratings</span>
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>

                            {/* Trust Badges - 4 logos */}
                            <div className="flex flex-wrap items-center gap-2 md:gap-6">
                                <Image src="/assets/badge-asi.png" alt="ASI" width={100} height={40} className="h-5 md:h-10 w-auto object-contain" priority />
                                <Image src="/assets/badge-trustpilot.png" alt="Trustpilot" width={100} height={40} className="h-5 md:h-10 w-auto object-contain" priority />
                                <Image src="/assets/badge-google.png" alt="Google" width={100} height={40} className="h-5 md:h-10 w-auto object-contain" priority />
                                <Image src="/assets/badge-etsy.png" alt="Etsy" width={100} height={40} className="h-5 md:h-10 w-auto object-contain" priority />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Featured Video + Instagram Link */}
                    <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
                        {/* Featured Video - Industry standard size */}
                        <div className="aspect-square max-w-[400px] w-full mx-auto">
                            <VideoRevealCard
                                title={FEATURED_VIDEO.title}
                                iconSrc={FEATURED_VIDEO.iconSrc}
                                videoSrc={FEATURED_VIDEO.videoSrc}
                                className="w-full h-full"
                            />
                        </div>

                        {/* Instagram Link Card - Compact */}
                        <Link
                            href="https://www.instagram.com/mycustompatches/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative overflow-hidden rounded-xl bg-linear-to-br from-purple-600 via-pink-600 to-orange-500 p-6 text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-bold mb-1">See More Designs</h3>
                                    <p className="text-white/90 text-xs">Follow us on Instagram</p>
                                </div>
                                <svg
                                    className="w-10 h-10 shrink-0 group-hover:scale-110 transition-transform"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}