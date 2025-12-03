"use client";

import { TwitterIcon, InstagramIcon, LinkedInIcon } from "./Icons";

const productLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Panels", href: "#panels" },
  { label: "Pricing", href: "#pricing" },
  { label: "Science", href: "#science" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Press", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "HIPAA Notice", href: "#" },
  { label: "Contact", href: "mailto:hello@onsethealth.com" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="font-display text-2xl font-bold tracking-wider text-white">
              ONSET
            </a>
            <p className="mt-4 font-body text-sm text-white/40">
              Track. Trend. Transform.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-body text-sm font-medium uppercase tracking-wider text-white/60 mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-body text-sm font-medium uppercase tracking-wider text-white/60 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-body text-sm font-medium uppercase tracking-wider text-white/60 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/10 mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="font-body text-sm text-white/30">
            © 2025 Onset Health, Inc. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com/onsethealth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 transition-colors hover:text-white"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/onsethealth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 transition-colors hover:text-white"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/onsethealth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
