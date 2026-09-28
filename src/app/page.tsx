"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { Modal } from "../components/ui/Modal";
import { QuoteForm } from "../components/QuoteForm";

// Dynamic imports for below-the-fold components (lazy loading)
const SpecialRates = dynamic(() => import("../components/SpecialRates").then(mod => ({ default: mod.SpecialRates })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const ValueProps = dynamic(() => import("../components/ValueProps").then(mod => ({ default: mod.ValueProps })), {
  loading: () => <div className="h-64 bg-white animate-pulse" />,
});

const ProductsGrid = dynamic(() => import("../components/ProductsGrid").then(mod => ({ default: mod.ProductsGrid })), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
});

const ProcessSteps = dynamic(() => import("../components/ProcessSteps").then(mod => ({ default: mod.ProcessSteps })), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse" />,
});

const QueenCTA = dynamic(() => import("../components/QueenCTA").then(mod => ({ default: mod.QueenCTA })), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const FaqSection = dynamic(() => import("../components/FaqSection").then(mod => ({ default: mod.FaqSection })), {
  loading: () => <div className="h-64 bg-white animate-pulse" />,
});

const BlogsSection = dynamic(() => import("../components/BlogsSection").then(mod => ({ default: mod.BlogsSection })), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
});

const BottomCTA = dynamic(() => import("../components/BottomCTA").then(mod => ({ default: mod.BottomCTA })), {
  loading: () => <div className="h-32 bg-gray-900 animate-pulse" />,
});

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 1. Hero - Above the fold, loaded immediately */}
      <Hero onOpenQuote={() => setIsQuoteOpen(true)} onSeeAllProducts={scrollToProducts} />

      {/* 2. Unlock Special Rates (Dark Form) */}
      <SpecialRates />

      {/* 3. Our Value (Icons) */}
      <ValueProps />

      {/* 4. Products Grid (Infuse Your Style) */}
      <div ref={productsRef}>
        <ProductsGrid />
      </div>

      {/* 5. Process Steps (Patch Quest) */}
      <ProcessSteps />

      {/* 6. Queen CTA (Journey) */}
      <QueenCTA onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 7. FAQ Section */}
      <FaqSection />

      {/* 8. Blogs Section */}
      <BlogsSection />

      {/* 9. Bottom CTA */}
      <BottomCTA onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Modal & Footer */}
      <Modal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)}>
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold">
            <span className="text-white">Unlock </span>
            <span className="text-brand-orange">Special Rates</span>
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Fill out the details below and attach your design.
          </p>
        </div>
        <QuoteForm />
      </Modal>

      <Footer />
    </main>
  );
}
