"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

function AnimatedTerminal({ visible }: { visible: boolean }) {
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!visible) return;
    
    const timers = [
      setTimeout(() => setStep(1), 800),   // Type command
      setTimeout(() => setStep(2), 2000),  // Show "Thinking"
      setTimeout(() => setStep(3), 3200),  // Show response
      setTimeout(() => setStep(4), 4500),  // Show action
    ];

    return () => timers.forEach(clearTimeout);
  }, [visible]);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div
      className={cn(
        "flex flex-col w-full rounded-xl bg-surface border border-border shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-700 overflow-hidden font-mono text-sm",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ animationDelay: "400ms" }}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-[#10100F]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#32312C]" />
          <div className="w-3 h-3 rounded-full bg-[#32312C]" />
          <div className="w-3 h-3 rounded-full bg-[#32312C]" />
        </div>
        <div className="text-xs font-mono text-text-tertiary select-none">
          companion — ~/workspace
        </div>
        <button
          onClick={() => setCopied(true)}
          className="p-1.5 rounded hover:bg-border text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check size={14} className="text-[#8BBF7A]" /> : <Copy size={14} />}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-5 sm:p-6 text-text-primary leading-relaxed min-h-[280px]">
        {/* Command Line */}
        <div className="flex items-start gap-3">
          <span className="text-accent mt-0.5 font-bold">❯</span>
          <div className="flex-1">
            <div className={cn("text-text-primary mb-5", step < 1 ? "opacity-0" : "opacity-100 transition-opacity")}>
              companion init --with-vexa-voice
              {step === 1 && <span className="inline-block w-2 h-4 ml-1 bg-accent animate-blink align-middle" />}
            </div>

            {/* Output Steps */}
            <div className={cn("space-y-4", step < 2 ? "hidden" : "block")}>
              <div className="flex items-center gap-2 text-text-secondary">
                <span className="text-[#8BBF7A]">✔</span> Initializing Companion agent...
              </div>
              
              <div className={cn("flex items-center gap-2 text-text-secondary", step < 3 ? "hidden" : "block")}>
                <span className="text-[#8BBF7A]">✔</span> Linking Vexa meeting transcripts...
              </div>

              <div className={cn("border-l-2 border-border pl-4 mt-2", step < 4 ? "hidden" : "block")}>
                <div className="text-text-tertiary mb-1">Companion active. Ready to assist.</div>
                <div className="text-text-primary">
                  I've read the transcripts from today's <span className="text-accent">#engineering-sync</span>.
                  <br />
                  Would you like me to implement the proposed ROS2 refactor?
                </div>
              </div>
              
              {step === 4 && (
                <div className="mt-6 flex items-start gap-3">
                  <span className="text-accent mt-0.5 font-bold">❯</span>
                  <span className="inline-block w-2 h-4 mt-1 bg-accent animate-blink" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Check = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 6L9 17l-5-5" />
  </svg>
);

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div
        className={cn(
          "relative mb-8 flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-surface text-text-secondary text-xs font-mono transition-all duration-500",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <Terminal size={14} className="text-accent" />
        companion v2.0-beta
      </div>

      <h1
        className={cn(
          "text-center font-[var(--font-serif)] text-text-primary tracking-tight max-w-4xl mx-auto transition-all duration-500",
          "text-[clamp(3rem,8vw,5.5rem)] leading-[1.05]",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ animationDelay: "100ms" }}
      >
        Your codebase <span className="text-text-tertiary italic">&amp;</span><br />
        meetings, <span className="text-accent">unified.</span>
      </h1>

      <p
        className={cn(
          "mt-8 text-center text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed transition-all duration-500",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ animationDelay: "200ms" }}
      >
        Companion merges your development environment, meeting transcripts, and desktop tools into a single, intelligent agent. Code faster, with full context.
      </p>

      <div
        className={cn(
          "mt-10 flex flex-col sm:flex-row items-center gap-4 transition-all duration-500",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ animationDelay: "300ms" }}
      >
        <a
          href="#install"
          className="group flex items-center gap-2 px-6 py-3 rounded-md font-medium text-cta-text bg-cta-bg hover:bg-cta-bg-hover transition-all duration-200 cursor-pointer"
        >
          curl -fsSL https://companion.ky0.dev/install.bash | bash
        </a>
        <a
          href="#product"
          className="group flex items-center gap-2 px-6 py-3 rounded-md font-medium text-text-secondary hover:text-text-primary hover:bg-surface transition-all duration-200 cursor-pointer border border-transparent hover:border-border"
        >
          View Documentation
        </a>
      </div>

      <div className="w-full max-w-3xl mx-auto mt-20 relative z-10">
        <AnimatedTerminal visible={visible} />
      </div>
    </section>
  );
}
