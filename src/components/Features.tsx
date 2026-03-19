"use client";

import { Terminal, Bot, Network, Code, Shield, BrainCircuit } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: Code,
    title: "OpenCode Engine",
    description:
      "A fast, terminal-integrated coding agent that understands your repository structure, writes features, and debugs errors.",
  },
  {
    icon: Bot,
    title: "Vexa Voice Bots",
    description:
      "Connect Companion to your Google Meet or Zoom. Vexa transcribes in real-time and surfaces action items into your workspace.",
  },
  {
    icon: Network,
    title: "MCP Server",
    description:
      "A flexible Model Context Protocol layer to safely expose internal enterprise tools to your AI coding agents.",
  },
  {
    icon: BrainCircuit,
    title: "Organizational Context",
    description:
      "Transcripts, readmes, and codebase vectors are automatically indexed into a shared, searchable knowledge graph.",
  },
  {
    icon: Terminal,
    title: "Desktop Automation",
    description:
      "Automate tedious local workflows. Ask Companion to run test suites, manage docker containers, or start build scripts.",
  },
  {
    icon: Shield,
    title: "Local & Private",
    description:
      "Run your agent directly on your machine. Companion defaults to on-premise embeddings, keeping code and meetings secure.",
  },
];

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const words = ["Developers", "Researchers"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 1500); // 1.5 seconds per user request
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-24 px-4 bg-[#0F0F0D] border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="mb-20 max-w-2xl">
          <div className="flex items-center gap-2 text-accent text-sm font-mono mb-6">
            <span className="w-8 h-[1px] bg-accent" />
            <span className="tracking-wider uppercase">Architecture</span>
          </div>
          <h2 
            className={cn(
              "font-[var(--font-serif)] text-[clamp(2.5rem,6vw,3.5rem)] text-text-primary tracking-tight leading-[1.1]",
              "opacity-0",
              isVisible && "animate-slide-up"
            )}
            style={{ animationDelay: "100ms" }}
          >
            Built for{" "}
            <span className="inline-grid overflow-hidden align-bottom px-1 -mx-1 pb-1 -mb-1">
              {words.map((word, i) => (
                <span
                  key={word}
                  className="col-start-1 row-start-1 transition-all duration-500 ease-in-out text-accent"
                  style={{
                    transform: `translateY(${(i - wordIndex) * 100}%)`,
                    opacity: i === wordIndex ? 1 : 0,
                  }}
                >
                  {word}
                </span>
              ))}
            </span>.
            <br />
            Powered by context.
          </h2>
          <p 
            className={cn(
              "mt-6 text-text-secondary text-lg leading-relaxed max-w-xl",
              "opacity-0",
              isVisible && "animate-slide-up"
            )}
            style={{ animationDelay: "300ms" }}
          >
            Companion is an intelligent orchestrator bridging your codebase and team communication.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <div 
                key={feat.title}
                className="group p-8 rounded-lg bg-surface/50 border border-border hover:border-accent/40 transition-colors duration-300"
              >
                <div
                  className="w-12 h-12 rounded-md flex items-center justify-center mb-6 bg-[#1A1A17] border border-border group-hover:bg-accent/10 transition-colors duration-300"
                >
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="font-mono font-bold text-text-primary mb-3 text-lg tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
