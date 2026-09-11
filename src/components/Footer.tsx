"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const PATCH_LINKS = [
  { name: "Custom Embroidered Patches", href: "/custom-patches/custom-embroidered-patches" },
  { name: "Custom Chenille Patches", href: "/custom-patches/custom-chenille-patches" },
  { name: "Custom PVC Patches", href: "/custom-patches/custom-pvc-patches" },
  { name: "Custom Woven Patches", href: "/custom-patches/custom-woven-patches" },
  { name: "Custom Leather Patches", href: "/custom-patches/custom-leather-patches" },
  { name: "Custom Printed Patches", href: "/custom-patches/custom-printed-patches" },
];

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 font-sans">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link href="/" className="block">
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.9] text-brand-blue">
            MY CUSTOM
            <br />
            PATCHES!
          </h2>
        </Link>

        <div className="mt-12 grid gap-10 sm:grid-cols-3 border-t border-gray-200 pt-10">
          <div>
            <h3 className="font-mouse text-sm text-brand-blue mb-4">Our Patches</h3>
            <ul className="space-y-2">
              {PATCH_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-brand-blue transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mouse text-sm text-brand-blue mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Blogs & Insights", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
                { name: "FAQ", href: "/#faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-brand-blue transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mouse text-sm text-brand-blue mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-sm text-gray-600 break-words">
              <li>admin@mycustompatches.com</li>
              <li>302-773-8982</li>
              <li>701 Tillery St Ste 12, Austin TX 78702</li>
            </ul>
            <div className="mt-4 flex gap-3">
              {[
                { Icon: Facebook, url: "#", label: "Facebook" },
                { Icon: Instagram, url: "https://www.instagram.com/mycustompatches/", label: "Instagram" },
                { Icon: Twitter, url: "#", label: "Twitter" },
                { Icon: Linkedin, url: "#", label: "LinkedIn" },
              ].map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-blue hover:text-white transition-colors"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} My Custom Patches. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-brand-blue">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-xs text-gray-500 hover:text-brand-blue">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
