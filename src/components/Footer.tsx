"use client";

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 font-sans">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: Brand & Socials */}
          <div className="space-y-6">
            <Link href="/">
                <Image
                src="/assets/logo.png"
                alt="My Custom Patches"
                width={160}
                height={64}
                className="h-16 w-auto object-contain -ml-2"
                />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              We turn your designs into premium custom patches. High quality, fast turnaround, and free shipping.
            </p>
            
            {/* Social Icons - Industry Standard for Trust */}
            <div className="flex gap-4">
              {[
                { Icon: Facebook, url: "#", label: "Facebook" },
                { Icon: Instagram, url: "https://www.instagram.com/mycustompatches/", label: "Instagram" },
                { Icon: Twitter, url: "#", label: "Twitter" },
                { Icon: Linkedin, url: "#", label: "LinkedIn" },
              ].map(({ Icon, url, label }, i) => (
                <a key={i} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-brand-orange hover:text-white transition-all duration-300">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Quick Links (Company) */}
          <div>
            <h3 className="font-bold text-lg text-brand-dark mb-6 uppercase tracking-wide">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
                { name: "Blogs & Insights", href: "/blog" },
                { name: "FAQ", href: "/#faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-brand-orange transition-colors flex items-center gap-2 group">
                    <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-brand-orange" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Custom Patches (Core Products) */}
          <div>
            <h3 className="font-bold text-lg text-brand-dark mb-6 uppercase tracking-wide">Our Patches</h3>
            <ul className="space-y-3">
              {[
                "Custom Embroidered Patches",
                "Custom Chenille Patches",
                "Custom PVC Patches",
                "Custom Woven Patches",
                "Custom Leather Patches",
                "Custom Printed Patches",
                "Custom 3D Embroidery Transfer",
                "Custom Sequin Patch",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/custom-patches/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm text-gray-600 hover:text-brand-orange transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact & Legal */}
          <div>
            <h3 className="font-bold text-lg text-brand-dark mb-6 uppercase tracking-wide">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-600 group">
                <div className="h-8 w-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                </div>
                <span>admin@mycustompatches.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 group">
                <div className="h-8 w-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <Phone className="h-4 w-4" />
                </div>
                <span>3027738982</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600 group">
                <div className="h-8 w-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors shrink-0">
                    <MapPin className="h-4 w-4" />
                </div>
                <span>701 TILLERY ST STE 12 AUSTIN TX 78702</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} My Custom Patches. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-brand-orange">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-xs text-gray-500 hover:text-brand-orange">Terms of Service</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-brand-orange">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
