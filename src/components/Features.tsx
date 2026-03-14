import { Brain, Users, Zap, Database, Shield, GitBranch } from "lucide-react";

const FEATURES = [
  {
    icon: Brain,
    title: "Organizational Memory",
    description:
      "Every meeting, document, and discussion is captured and transformed into a searchable, intelligent knowledge base.",
  },
  {
    icon: Zap,
    title: "Real-Time Meeting Intelligence",
    description:
      "Your AI agent joins calls, transcribes, and extracts decisions, topics, and action items as they happen.",
  },
  {
    icon: Users,
    title: "A Personal Agent for Everyone",
    description:
      "Each team member gets a persistent AI companion that learns their workflows and retrieves relevant context.",
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    description:
      "Self-hosted by default. Your data, transcripts, and embeddings never leave your private infrastructure.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-[var(--font-dm-serif)] text-[clamp(2.5rem,6vw,3.5rem)] text-text-primary tracking-tight leading-tight">
            Knowledge that works
          </h2>
          <p className="mt-4 text-text-secondary text-lg leading-relaxed">
            Companion is more than a search tool. It's an active participant in building and retrieving your organization's institutional memory.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <div 
                key={feat.title}
                className="p-6 rounded-2xl bg-surface/30 border border-border hover:bg-surface transition-colors duration-300"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-surface border border-border"
                >
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="font-bold text-text-primary mb-3 text-lg">
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
