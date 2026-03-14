"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Calendar, Code, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

function AnimatedCodeLine({ visible }: { visible: boolean }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div
      className={cn(
        "flex flex-col w-full rounded-xl bg-surface border border-border shadow-2xl transition-all duration-700 overflow-hidden",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ animationDelay: "400ms" }}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-border" />
          <div className="w-3 h-3 rounded-full bg-border" />
          <div className="w-3 h-3 rounded-full bg-border" />
        </div>
        <div className="text-xs font-mono text-text-tertiary select-none">
          companion — ~/project
        </div>
        <button
          onClick={() => setCopied(true)}
          className="p-1 rounded hover:bg-border text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
        </button>
      </div>
      
      {/* Terminal Body */}
      <div className="p-4 sm:p-6 font-mono text-sm leading-relaxed overflow-x-auto">
        <div className="flex items-start gap-3">
          <span className="text-accent mt-0.5">&gt;</span>
          <div className="flex-1">
            <div className="text-text-primary mb-4">companion ask "Why did we switch to ROS2?"</div>
            
            <div className="flex items-center gap-2 text-text-secondary mb-2 opacity-80">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Searching internal memory...
            </div>
            
            <div className="text-text-secondary pl-4 border-l border-border mb-4">
              Found 3 relevant decisions in #engineering-sync (Oct 2023)
            </div>
            
            <div className="text-text-primary">
              <span className="text-accent font-bold">Companion:</span> We switched to ROS2 primarily to adopt DDS for better real-time communication across distributed nodes, and to take advantage of the more mature lifecycle management compared to ROS1.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dummy Check icon for copied state
const Check = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20 6L9 17l-5-5"
    />
  </svg>
);


export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-20 px-4 overflow-hidden">
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
      </div>

      {/* Badge */}
      <div
        className={cn(
          "relative mb-6 flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-text-secondary text-xs font-medium transition-all duration-500",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <Code size={12} className="text-accent" />
        Privacy-First AI Coworker
      </div>

      {/* Headline */}
      <h1
        className={cn(
          "text-center font-[var(--font-dm-serif)] text-text-primary tracking-tight max-w-4xl mx-auto transition-all duration-500",
          "text-[clamp(2.8rem,8vw,5rem)] leading-[1.1]",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ animationDelay: "100ms" }}
      >
        Your organization&apos;s memory,
        <br />
        made <span className="text-accent">intelligent</span>
      </h1>

      {/* Sub-headline */}
      <p
        className={cn(
          "mt-6 text-center text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed transition-all duration-500",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ animationDelay: "200ms" }}
      >
        Companion gives every team member a personal AI agent that attends
        meetings, captures decisions, and answers questions — all running on
        your private infrastructure.
      </p>

      {/* CTAs */}
      <div
        className={cn(
          "mt-10 flex flex-col sm:flex-row items-center gap-4 transition-all duration-500",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ animationDelay: "300ms" }}
      >
        <a
          href="#book-demo"
          className="group flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-cta-text bg-cta-bg hover:bg-cta-bg-hover transition-all duration-200 cursor-pointer"
        >
          Book a Demo
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </a>
        <a
          href="#product"
          className="group flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-text-secondary hover:text-text-primary hover:bg-surface transition-all duration-200 cursor-pointer"
        >
          Or read the documentation
        </a>
      </div>

      {/* Animated code line */}
      <div className="w-full max-w-3xl mx-auto mt-16">
        <AnimatedCodeLine visible={visible} />
      </div>

      <TrustBar />

    </section>
  );
}

function TrustBar() {
  const logos = [
    { name: "Notion", w: 80 },
    { name: "Zapier", w: 80 },
    { name: "Intercom", w: 90 },
    { name: "Plaid", w: 80 },
    { name: "Databricks", w: 100 },
    { name: "PagerDuty", w: 100 },
    { name: "Figma", w: 60 },
    { name: "Asana", w: 80 },
  ];

  return (
    <div className="w-full mt-24">
       <p className="text-center text-sm text-text-tertiary mb-8">
        Works with the tools your team already uses
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {logos.map((logo) => (
          <span
            key={logo.name}
            className="text-lg font-medium text-text-tertiary grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default"
            style={{width: logo.w}}
          >
           {/* In a real project, these would be SVG logos */}
            {logo.name}
          </span>
        ))}
      </div>
    </div>
  );
}
