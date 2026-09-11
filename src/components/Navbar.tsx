"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "../lib/utils";

interface NavbarProps {
  onOpenQuote?: () => void;
}

const MENU_LINKS = [
  { label: "Custom Patches", href: "/custom-patches" },
  { label: "About Us", href: "/about" },
  { label: "Blogs & Insights", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar({ onOpenQuote }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleQuoteClick = () => {
    closeMenu();
    onOpenQuote?.();
  };

  const handleChatClick = () => {
    const tawk = (window as any).Tawk_API;
    if (tawk?.maximize) {
      tawk.maximize();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-blue">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0" onClick={closeMenu}>
          <Image
            src="/assets/Logo & PIn-01.png"
            alt="My Custom Patches"
            width={1250}
            height={356}
            className="h-11 w-auto object-contain sm:h-12"
            priority
          />
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleChatClick}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 font-mouse text-sm text-brand-blue hover:bg-white transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Chat Now
          </button>

          <button
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand-blue-light/70 px-5 py-2.5 font-mouse text-sm text-white hover:bg-white/10 transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? "Close" : "Menu"}
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Floating dropdown panel */}
      <div
        className={cn(
          "absolute right-4 top-[calc(100%+0.5rem)] sm:right-6 lg:right-8 w-[calc(100%-2rem)] max-w-xs origin-top-right rounded-2xl bg-white p-6 shadow-2xl transition-all duration-200",
          isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <ul className="space-y-3">
          {MENU_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="font-display text-2xl text-brand-blue hover:text-brand-mint transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={handleQuoteClick}
          className="mt-6 w-full rounded-full bg-brand-blue py-3 font-mouse text-sm text-white hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
        >
          Get Instant Quote
        </button>

        <button
          onClick={handleChatClick}
          className="mt-3 w-full rounded-full border-2 border-brand-blue/20 py-3 font-mouse text-sm text-brand-blue sm:hidden"
        >
          Chat Now
        </button>

        <p className="mt-6 font-mouse text-xs text-gray-500">
          EST. 2014 &middot; Austin, United States
        </p>
      </div>

      {/* Backdrop to close on outside click */}
      {isOpen && (
        <div className="fixed inset-0 -z-10" onClick={closeMenu} aria-hidden="true" />
      )}
    </nav>
  );
}
