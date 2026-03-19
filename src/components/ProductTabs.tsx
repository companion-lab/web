"use client";

import { useState } from "react";
import { Terminal, Database, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  {
    id: "opencode",
    label: "Dev Mode",
    icon: Terminal,
    title: "Interact with your repo in the terminal.",
    description:
      "OpenCode uses context from previous commits, READMEs, and your colleagues' pull requests to write intelligent, robust code.",
    demo: <TerminalDemo />,
  },
  {
    id: "vexa",
    label: "Voice Bots",
    icon: Bot,
    title: "Turn meetings into engineering specs.",
    description:
      "Vexa dials into Google Meet or Zoom. It captures architectural decisions and translates them into Markdown documentation for your agent.",
    demo: <VexaDemo />,
  },
  {
    id: "mcp",
    label: "MCP Integration",
    icon: Database,
    title: "Connect your enterprise tools safely.",
    description:
      "Use Model Context Protocol to hook your internal APIs, JIRA instances, and observability platforms straight into your coding agent.",
    demo: <MCPDemo />,
  },
];

function TerminalDemo() {
  return (
    <div className="rounded-lg border border-border bg-[#0a0a09] font-mono overflow-hidden shadow-2xl">
      <div className="flex px-4 py-2 border-b border-border bg-[#141413] items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="text-xs text-text-tertiary ml-2">bash</span>
      </div>
      <div className="p-5 text-sm leading-relaxed text-text-primary/90 min-h-[220px]">
        <div className="mb-4">
          <span className="text-accent font-bold mr-3">❯</span>
          <span className="text-text-secondary font-medium">companion ask</span> "Update the Auth Service"
        </div>
        <div className="pl-4 border-l-2 border-[#2a2a28] mb-4 space-y-2 text-text-secondary">
          <div className="flex gap-2 items-center text-accent/80 text-xs uppercase tracking-wider">
            <Bot size={14} /> Planning
          </div>
          <div>Analyzing src/auth.ts and src/routes.ts...</div>
          <div>Found recent meeting: "Auth Service Refactor" (2 days ago)</div>
          <div>Requirement: Use JSON Web Tokens (JWT) instead of sessions.</div>
        </div>
        <div className="text-[#8BBF7A]">
          ✔ Wrote 140 lines. Updated tests. Ready to commit.
        </div>
        <div className="mt-4">
          <span className="text-accent font-bold mr-3">❯</span>
          <span className="animate-pulse bg-accent w-2 h-4 inline-block align-middle" />
        </div>
      </div>
    </div>
  );
}

function VexaDemo() {
    return (
    <div className="rounded-lg border border-border bg-[#0a0a09] font-sans overflow-hidden shadow-2xl">
      <div className="flex px-4 py-2 border-b border-border bg-[#141413] items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-text-tertiary font-mono">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Vexa Recording
        </div>
        <span className="text-xs text-text-tertiary">engineering-weekly.txt</span>
      </div>
      <div className="p-6 text-sm leading-relaxed text-text-secondary bg-[#111110] min-h-[220px]">
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="font-semibold text-text-primary w-12 pt-0.5">Alex</div>
            <div className="flex-1">We need to migrate to PostgreSQL by next sprint. The current SQLite setup is locking during heavy writes.</div>
          </div>
          <div className="flex gap-4">
            <div className="font-semibold text-text-primary w-12 pt-0.5">Sarah</div>
            <div className="flex-1">Agreed. Let's use Prisma as our ORM. Companion, create a ticket for this.</div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-border font-mono text-xs">
            <div className="text-accent mb-2 uppercase tracking-widest font-bold text-[10px]">Companion Extract:</div>
            <div className="bg-[#1a1a18] p-3 rounded text-[#8BBF7A] border border-border">
              Action Item: Migrate from SQLite to PostgreSQL using Prisma ORM.
              [Jira-402 Created]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MCPDemo() {
    return (
    <div className="rounded-lg border border-border bg-[#0a0a09] font-mono overflow-hidden shadow-2xl">
       <div className="flex px-4 py-2 border-b border-border bg-[#141413] items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="text-xs text-text-tertiary ml-2">mcp-config.json</span>
      </div>
      <div className="p-5 text-sm text-[#A3A198] min-h-[220px]">
        <pre className="overflow-x-auto leading-loose">
          <span className="text-text-tertiary">{"{"}</span>
          <br/>
          <span className="text-text-primary ml-4">"mcpServers":</span> <span className="text-text-tertiary">{"{"}</span>
          <br/>
          <span className="text-accent ml-8">"jira":</span> <span className="text-text-tertiary">{"{"}</span>
          <br/>
          <span className="text-text-primary ml-12">"command":</span> <span className="text-[#8BBF7A]">"npx"</span>,
          <br/>
          <span className="text-text-primary ml-12">"args":</span> <span className="text-text-tertiary">["-y", "@modelcontextprotocol/server-jira"]</span>,
          <br/>
          <span className="text-text-primary ml-12">"env":</span> <span className="text-text-tertiary">{"{"}</span>
          <br/>
          <span className="text-text-primary ml-16">"JIRA_API_TOKEN":</span> <span className="text-[#8BBF7A]">"sk-..."</span>
          <br/>
          <span className="text-text-tertiary ml-12">{"}"}</span>
          <br/>
          <span className="text-text-tertiary ml-8">{"}"}</span>
          <br/>
          <span className="text-text-tertiary ml-4">{"}"}</span>
          <br/>
          <span className="text-text-tertiary">{"}"}</span>
        </pre>
      </div>
    </div>
  );
}

export default function ProductTabs() {
  const [active, setActive] = useState("opencode");
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <section id="product" className="py-24 px-4 bg-[#0F0F0D]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <h2 className="font-[var(--font-serif)] text-[clamp(2rem,5vw,3rem)] text-text-primary tracking-tight leading-[1.1] mb-6">
              Connect your codebase to reality.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-lg">
              Companion isn't just an LLM wrapper. It's a suite of targeted agents that unify your tools, repositories, and conversations.
            </p>

            <div className="flex flex-col gap-3 w-full max-w-md">
              {TABS.map((t) => {
                const Icon = t.icon;
                const isActive = active === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={cn(
                      "flex flex-col items-start gap-1 p-4 rounded-md border text-left transition-all duration-300",
                      isActive
                        ? "bg-[#1A1A17] border-border text-text-primary"
                        : "border-transparent text-text-secondary hover:text-text-primary hover:bg-[#141413]"
                    )}
                  >
                    <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-wider mb-1 font-bold">
                      <Icon size={16} className={isActive ? "text-accent" : ""} />
                      {t.label}
                    </div>
                    {isActive && (
                      <p className="text-sm text-text-secondary mt-1 animate-slide-up">
                        {t.description}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:w-1/2 w-full max-w-xl">
             {tab.demo}
          </div>
        </div>
      </div>
    </section>
  );
}
