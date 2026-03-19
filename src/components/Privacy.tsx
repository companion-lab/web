import { Lock, Server, Cpu } from "lucide-react";

export default function Privacy() {
  return (
    <section id="privacy" className="py-24 px-4 bg-[#0F0F0D]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-lg">
            <div className="flex items-center gap-2 text-accent text-sm font-mono mb-6">
              <span className="w-8 h-[1px] bg-accent" />
              <span className="tracking-wider uppercase">Security</span>
            </div>
            <h2 className="font-[var(--font-serif)] text-[clamp(2.5rem,6vw,3.5rem)] text-text-primary tracking-tight leading-[1.1] mb-6">
              Air-gapped by default.
            </h2>
            <p className="text-text-secondary leading-relaxed text-lg mb-6">
              Companion is built for organizations with sensitive intellectual property. Every component can run entirely on your local machine or private cloud—from transcription and embedding generation to AI inference.
            </p>
            <p className="text-text-tertiary font-mono text-sm leading-relaxed border-l-2 border-[#2a2a28] pl-4">
              Compatible with <span className="text-text-primary">Ollama</span>,{" "}
              <span className="text-text-primary">vLLM</span>, and any
              OpenAI-compatible endpoint. Bring your own models.
            </p>
          </div>

          <div className="p-8 rounded-md border border-border bg-[#141413] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
            
            <div className="text-left mb-8 font-mono">
              <h4 className="font-bold text-text-primary uppercase tracking-wider text-sm mb-1">Architecture Config</h4>
              <p className="text-xs text-text-tertiary">~/.companion/config.yml</p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded border border-border bg-[#0a0a09] flex items-center gap-4 hover:border-accent/30 transition-colors">
                <Server size={18} className="text-text-secondary flex-shrink-0" />
                <div>
                  <h5 className="font-bold font-mono text-text-primary text-sm">storage: local</h5>
                  <p className="text-xs text-text-tertiary mt-1">Vector DB and transcripts never leave disk</p>
                </div>
              </div>
              <div className="p-4 rounded border border-border bg-[#0a0a09] flex items-center gap-4 hover:border-accent/30 transition-colors">
                <Cpu size={18} className="text-text-secondary flex-shrink-0" />
                <div>
                  <h5 className="font-bold font-mono text-text-primary text-sm">inference: ollama</h5>
                  <p className="text-xs text-text-tertiary mt-1">100% local weights and computation</p>
                </div>
              </div>
              <div className="p-4 rounded border border-border bg-[#0a0a09] flex items-center gap-4 hover:border-accent/30 transition-colors">
                <Lock size={18} className="text-text-secondary flex-shrink-0" />
                <div>
                  <h5 className="font-bold font-mono text-text-primary text-sm">telemetry: false</h5>
                  <p className="text-xs text-text-tertiary mt-1">No phone home. Zero data sharing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
