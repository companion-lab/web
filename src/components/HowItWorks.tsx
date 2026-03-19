import { Terminal, Database, Code } from "lucide-react";

const STEPS = [
  {
    icon: Database,
    title: "1. Connect Context",
    description:
      "Initialize Companion in your repository. It automatically parses your READMEs, issues, and syncs with your Vexa meeting bots.",
    command: "$ companion init --all",
  },
  {
    icon: Code,
    title: "2. Assign Tasks",
    description:
      "Assign complex coding tasks or ask architectural questions directly from your terminal or IDE.",
    command: "$ companion assign 'Fix auth bug'",
  },
  {
    icon: Terminal,
    title: "3. Review & Ship",
    description:
      "Companion writes code, runs your local test suite, and prepares the commit. You review the diff and ship.",
    command: "$ companion review && git push",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-[#141413] border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-accent text-sm font-mono mb-6">
            <span className="w-8 h-[1px] bg-accent" />
            <span className="tracking-wider uppercase">Workflow</span>
            <span className="w-8 h-[1px] bg-accent" />
          </div>
          <h2 className="font-[var(--font-serif)] text-[clamp(2.5rem,6vw,3.5rem)] text-text-primary tracking-tight leading-tight mb-6">
            Agentic workflow,
            <br />
            simplified.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative p-8 rounded-md border border-border bg-[#0F0F0D] hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 rounded flex items-center justify-center bg-[#1A1A17] border border-border mb-6">
                  <Icon size={20} className="text-text-primary" />
                </div>
                <h3 className="text-lg font-bold font-mono text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 min-h-[80px]">
                  {step.description}
                </p>
                <div className="bg-[#1A1A17] px-3 py-2 rounded text-[#8BBF7A] font-mono text-xs border border-border">
                  {step.command}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
