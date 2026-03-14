import { Code } from "lucide-react";

const FOOTER_LINKS = {
  Product: ["Chat Mode", "Code Mode", "Meeting Intelligence"],
  Company: ["About", "Blog", "Careers"],
  Resources: ["Documentation", "API Reference", "Changelog"],
};

import { AsciiLogoNav } from "@/components/AsciiLogo";

function CompanionLogo() {
  return (
    <a href="#" className="flex items-center gap-2.5 group cursor-pointer">
       <AsciiLogoNav />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <CompanionLogo />
            <p className="text-sm text-text-secondary leading-relaxed mt-4 max-w-xs">
              Privacy-first AI coworker platform. Your knowledge, your infrastructure.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-text-primary/90 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-tertiary">
            © {new Date().getFullYear()} Companion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
