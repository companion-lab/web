"use client";

import { useState } from "react";
import { MessageSquare, Code2, Mic } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  {
    id: "chat",
    label: "Chat Mode",
    icon: MessageSquare,
    title: "For the entire team",
    description:
      "A familiar chat interface where anyone can ask questions, retrieve decisions, and get instant answers about what's happening across the organization.",
    demo: <ChatModeDemo />,
  },
  {
    id: "code",
    label: "Code Mode",
    icon: Code2,
    title: "For developers",
    description:
      "A CLI and IDE-integrated tool that brings organizational context directly into the development workflow. Understand the 'why' behind the code.",
    demo: <CodeModeDemo />,
  },
  {
    id: "meeting",
    label: "Meeting Intelligence",
    icon: Mic,
    title: "For every meeting",
    description:
      "Companion automatically joins, transcribes, and analyzes your meetings. It extracts decisions, action items, and key topics in real-time.",
    demo: <MeetingDemo />,
  },
];

function ChatModeDemo() {
  return (
    <div className="p-6 rounded-lg border border-border bg-surface/80 space-y-4">
      <div className="flex gap-3 justify-end">
        <div className="px-4 py-2 rounded-lg bg-border text-text-secondary text-sm max-w-[80%]">
          Summarize the sonar sensor discussion.
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-7 h-7 rounded-full bg-accent/20 border border-accent/30 flex-shrink-0" />
        <div className="px-4 py-2 rounded-lg bg-border text-text-secondary text-sm max-w-[85%] leading-relaxed">
          The team decided to switch to the Velodyne unit for a 40% cost reduction. 
          <span className="text-text-primary block mt-1">✓ Action: Sarah to finalize procurement.</span>
        </div>
      </div>
    </div>
  );
}

function CodeModeDemo() {
    return (
    <div className="p-6 rounded-lg border border-border bg-surface/80 font-mono">
      <div className="text-sm text-text-secondary mb-3">
        <span className="text-accent">$</span> companion ask
      </div>
      <div className="text-sm text-text-primary mb-5">
        &gt; Why did we switch to ROS2?
      </div>
      <div className="text-sm text-text-primary/50 leading-relaxed border-l-2 border-border pl-4">
        <p>Based on <span className="text-text-primary/80">robotics-planning-Jan-22.md</span>:</p>
        <p className="mt-2">ROS1 End-of-Life was the primary driver. Improved lifecycle management and Python 3 support were also cited.</p>
      </div>
    </div>
  );
}

function MeetingDemo() {
    return (
    <div className="p-6 rounded-lg border border-border bg-surface/80 space-y-3">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-red-500" />
        <span className="text-xs text-red-400/80 font-medium uppercase tracking-wide">
          Live: Engineering Sync
        </span>
      </div>
       <div className="pt-2 space-y-2">
        {[
          { speaker: "Alex", text: "We need to decide on the migration timeline." },
          { speaker: "Sarah", text: "I'd suggest a phased rollout." },
        ].map((line) => (
          <div key={line.speaker} className="flex gap-2 items-baseline">
            <span className="text-xs font-semibold text-text-primary/60 w-14 flex-shrink-0">
              {line.speaker}:
            </span>
            <span className="text-sm text-text-primary/80">{line.text}</span>
          </div>
        ))}
      </div>
      <div className="pt-3 border-t border-border">
        <p className="text-xs text-text-primary/40 uppercase tracking-wide mb-2 font-medium">Companion detected</p>
        <div className="flex flex-wrap gap-2">
            <span className="px-2.5 py-1 rounded-md bg-accent/15 border border-accent/25 text-accent text-xs font-medium">
              Decision: Phased rollout
            </span>
          </div>
      </div>
    </div>
  );
}


export default function ProductTabs() {
  const [active, setActive] = useState("chat");
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <section id="product" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="font-[var(--font-dm-serif)] text-[clamp(2.5rem,6vw,3.5rem)] text-text-primary tracking-tight leading-tight">
            One platform, every role
          </h2>
          <p className="mt-4 text-text-secondary text-lg leading-relaxed">
            From daily standups to architectural reviews — Companion has a mode designed for every workflow.
          </p>
        </div>

        {/* Tab selectors */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 p-1 rounded-lg bg-surface border border-border">
            {TABS.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer",
                    active === t.id
                      ? "bg-cta-bg/10 text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  <Icon size={16} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              <h3 className="font-bold text-text-primary mb-2 text-lg">
                {tab.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {tab.description}
              </p>
            </div>
            <div>{tab.demo}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
