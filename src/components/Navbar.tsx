"use client";

import { Terminal, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AsciiLogoNav } from "@/components/AsciiLogo";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Architecture", href: "#features" },
  { label: "Docs", href: "#docs" },
  { label: "GitHub", href: "https://github.com/companion-lab/companion" },
];

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono text-sm",
        scrolled
          ? "bg-[#0F0F0D]/90 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-[64px] flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#" className="flex items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity">
            <AsciiLogoNav />
          </a>

          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="#install"
            className="group flex items-center gap-2 px-4 py-1.5 rounded-sm bg-accent/10 border border-accent/20 text-accent hover:bg-accent hover:text-[#0F0F0D] transition-all duration-200 cursor-pointer font-bold"
          >
            <Terminal size={14} />
            Install
          </a>
        </div>

        <button
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-[#0F0F0D] px-6 py-4 flex flex-col gap-4 font-mono">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <div className="h-[1px] w-full bg-border my-2" />
          <a
            href="#install"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-sm bg-accent text-[#0F0F0D] font-bold text-center hover:opacity-90 transition-opacity cursor-pointer"
          >
            <Terminal size={14} />
            Install CLI
          </a>
        </div>
      )}
    </header>
  );
}
