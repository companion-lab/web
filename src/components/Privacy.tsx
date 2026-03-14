import { Lock, Server, Cpu, ShieldCheck } from "lucide-react";

export default function Privacy() {
  return (
    <section id="privacy" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div className="max-w-lg">
                <p className="text-sm font-medium text-accent mb-3">
                    Privacy by Design
                </p>
                <h2 className="font-[var(--font-dm-serif)] text-[clamp(2.5rem,6vw,3.5rem)] text-text-primary tracking-tight leading-tight mb-6">
                    Your data never leaves your walls
                </h2>
                <p className="text-text-secondary leading-relaxed text-lg mb-6">
                    Companion is built for organizations with sensitive internal
                    discussions. Every component can run on-premise — from
                    transcription to embedding generation to AI inference.
                </p>
                <p className="text-text-tertiary text-base leading-relaxed">
                    Compatible with <span className="text-text-secondary">Ollama</span>,{" "}
                    <span className="text-text-secondary">OpenRouter</span>, and any
                    OpenAI-compatible endpoint. Bring your own models.
                </p>
            </div>

            {/* Right: Diagram */}
            <div className="p-8 rounded-lg border border-border bg-surface/80">
                <div className="text-center mb-6">
                    <h4 className="font-bold text-text-primary">Self-Hosted Architecture</h4>
                    <p className="text-sm text-text-secondary">You control every component</p>
                </div>
                <div className="space-y-4">
                    <div className="p-4 rounded-md border border-border bg-bg flex items-center gap-4">
                        <Server size={18} className="text-accent flex-shrink-0" />
                        <div>
                            <h5 className="font-medium text-text-primary/90 text-sm">Your Private Cloud / On-Prem</h5>
                            <p className="text-xs text-text-secondary">VPC, bare metal, or air-gapped</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-md border border-border bg-bg flex items-center gap-4">
                        <Cpu size={18} className="text-accent flex-shrink-0" />
                         <div>
                            <h5 className="font-medium text-text-primary/90 text-sm">Local AI Inference</h5>
                            <p className="text-xs text-text-secondary">Transcription, embeddings, and LLMs run locally</p>
                        </div>
                    </div>
                     <div className="p-4 rounded-md border border-border bg-bg flex items-center gap-4">
                        <Lock size={18} className="text-accent flex-shrink-0" />
                         <div>
                            <h5 className="font-medium text-text-primary/90 text-sm">Encrypted Knowledge Base</h5>
                            <p className="text-xs text-text-secondary">Your data is encrypted at rest, with keys you manage</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </section>
  );
}
