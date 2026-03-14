const STEPS = [
  {
    number: "1",
    title: "Connect your sources",
    description:
      "Link meeting platforms, documents, and code repositories. Companion ingests and indexes everything into a secure, shared organizational memory.",
  },
  {
    number: "2",
    title: "Companion attends & learns",
    description:
      "Your AI agent joins meetings to transcribe, identify speakers, and automatically extract decisions, action items, and key topics.",
  },
  {
    number: "3",
    title: "Ask anything, instantly",
    description:
      "Query your organization's knowledge through natural conversation. Get grounded answers with full source attribution, on your infrastructure.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
           <p className="text-sm font-medium text-accent mb-3">
            How It Works
          </p>
          <h2 className="font-[var(--font-dm-serif)] text-[clamp(2.5rem,6vw,3.5rem)] text-text-primary tracking-tight leading-tight">
            Up and running in minutes
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
           <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="relative p-8 rounded-lg border border-border bg-bg/40"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-text-primary bg-surface border border-border-hover mb-6">
                    {step.number}
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
