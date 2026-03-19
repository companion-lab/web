"use client";

import { Terminal, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function CallToAction() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("curl -fsSL https://companion.ky0.dev/install.bash | bash");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="py-32 px-4 bg-[#0F0F0D] border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-2 text-accent text-sm font-mono mb-6">
          <Terminal size={14} />
          <span className="tracking-widest uppercase">Start Building</span>
        </div>
        
        <h2 className="font-[var(--font-serif)] text-[clamp(2.5rem,6vw,3.5rem)] text-text-primary tracking-tight leading-tight mb-6">
          Ready to ship faster?
        </h2>
        <p className="text-text-secondary text-lg leading-relaxed max-w-xl mx-auto mb-12">
          Install the Companion CLI globally to start indexing your codebase and attending your meetings.
        </p>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-between w-full max-w-md bg-[#141413] border border-border rounded-md p-1 pl-4 shadow-xl">
            <code className="text-[#8BBF7A] font-mono text-sm">
              curl -fsSL https://companion.ky0.dev/install.bash | bash
            </code>
            <button
              onClick={copyCommand}
              className="p-2 rounded hover:bg-[#1A1A17] text-text-secondary hover:text-text-primary transition-colors focus:outline-none"
              aria-label="Copy command"
            >
              {copied ? <Check size={16} className="text-[#8BBF7A]" /> : <Copy size={16} />}
            </button>
          </div>
          <div className="text-xs font-mono text-text-tertiary mt-2">
            Requires macOS or Linux and an active API key.
          </div>
        </div>
      </div>
    </section>
  );
}
