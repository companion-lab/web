import { AsciiLogoNav } from "@/components/AsciiLogo";

const FOOTER_LINKS = {
  Ecosystem: ["OpenCode Agent", "Vexa Voice Bots", "MCP Servers"],
  Developers: ["Documentation", "GitHub", "NPM Registry"],
  Company: ["About", "Blog", "Discord Community"],
};

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-4 bg-[#0a0a09] font-mono text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2 md:col-span-2">
            <a href="#" className="flex items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity">
              <AsciiLogoNav />
            </a>
            <p className="text-text-secondary leading-relaxed mt-4 max-w-xs text-xs">
              Agentic platform bridging codebases, terminal workflows, and organizational memory.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-text-primary uppercase tracking-widest text-xs font-bold mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-text-tertiary hover:text-text-primary transition-colors duration-200 cursor-pointer text-xs"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[#1a1a18] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            © {new Date().getFullYear()} Companion. Licensed under MIT.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-tertiary">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8BBF7A] animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
