"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "../lib/utils";

interface NavbarProps {
  onOpenQuote?: () => void;
}

const PATCH_CATEGORIES = [
  "Custom Embroidered Patches",
  "Custom Chenille Patches",
  "Custom PVC Patches",
  "Custom Woven Patches",
  "Custom Printed Patches",
  "Custom Leather Patches",
  "Custom 3D Embroidery Transfer",
  "Custom Sequin Patch",
];

export function Navbar({ onOpenQuote }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleQuoteClick = () => {
    closeMenu();
    onOpenQuote?.();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="My Custom Patches"
              width={120}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-brand-orange transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 hover:text-brand-orange transition-colors"
          >
            About
          </Link>

          {/* Custom Patches Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium text-gray-700 hover:text-brand-orange transition-colors flex items-center gap-1">
              Custom Patches
              <ChevronDown className="h-4 w-4" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full pt-2 hidden group-hover:block bg-white rounded-lg shadow-xl border border-gray-200 min-w-[240px] z-50">
              {PATCH_CATEGORIES.map((category) => (
                <Link
                  key={category}
                  href={`/custom-patches/${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/blog"
            className="text-sm font-medium text-gray-700 hover:text-brand-orange transition-colors"
          >
            Blogs & Insights
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-gray-700 hover:text-brand-orange transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button onClick={handleQuoteClick} size="sm" className="hidden md:inline-flex bg-white text-black hover:bg-brand-orange hover:text-white border-2 border-brand-orange">
            Instant Quote
          </Button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-md md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="block text-base font-medium text-gray-700 hover:text-brand-orange transition-colors py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="block text-base font-medium text-gray-700 hover:text-brand-orange transition-colors py-2"
            >
              About
            </Link>

            {/* Custom Patches Mobile Dropdown */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left text-base font-medium text-gray-700 hover:text-brand-orange transition-colors py-2 flex items-center justify-between"
              >
                Custom Patches
                <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Items */}
                {isDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {PATCH_CATEGORIES.map((category) => (
                      <Link
                        key={category}
                        href={`/custom-patches/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={closeMenu}
                        className="block text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors py-1.5"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                onClick={closeMenu}
                className="block text-base font-medium text-gray-700 hover:text-brand-orange transition-colors py-2"
              >
                Blogs & Insights
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="block text-base font-medium text-gray-700 hover:text-brand-orange transition-colors py-2"
              >
                Contact
              </Link>
              
              <button
              onClick={handleQuoteClick}
              className="w-full bg-transparent text-black border-2 border-brand-orange hover:bg-brand-orange hover:text-white transition-colors py-2 px-4 font-bold text-sm rounded-md"
            >
              Instant Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}