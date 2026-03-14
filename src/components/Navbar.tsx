"use client";

import { ChevronDown, Code, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Privacy", href: "#privacy" },
];

import { AsciiLogoNav } from "@/components/AsciiLogo";

function CompanionLogo() {
  return (
    <a href="#" className="flex items-center gap-2.5 group cursor-pointer">
      <AsciiLogoNav />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <div className="flex items-center gap-8">
          <CompanionLogo />

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-surface transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                  <ChevronDown size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            Log in
          </a>
          <a
            href="#book-demo"
            className="px-4 py-2 rounded-lg text-sm font-medium bg-cta-bg text-cta-text hover:bg-cta-bg-hover transition-colors duration-200 cursor-pointer"
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface transition-colors duration-200 cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-bg px-6 py-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base text-text-secondary hover:text-text-primary hover:bg-surface transition-colors duration-200 cursor-pointer"
            >
              {link.label}
              <ChevronDown size={16} />
            </a>
          ))}
          <a
            href="#book-demo"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-5 py-3 rounded-lg text-base font-medium bg-cta-bg text-cta-text text-center hover:bg-cta-bg-hover transition-colors duration-200 cursor-pointer"
          >
            Book a Demo
          </a>
           <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="mt-2 py-3 rounded-lg text-base text-text-secondary text-center hover:text-text-primary transition-colors duration-200 cursor-pointer"
          >
            Log in
          </a>
        </div>
      )}
    </header>
  );
}
