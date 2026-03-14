import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section id="book-demo" className="py-24 px-4 bg-surface">
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="font-[var(--font-dm-serif)] text-[clamp(2.5rem,6vw,3.5rem)] text-text-primary tracking-tight leading-tight mb-6">
          Ready to give your team an AI coworker?
        </h2>
        <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Book a 30-minute demo to see how Companion can capture your
          organizational knowledge and make it instantly accessible.
        </p>

        <a
          href="https://cal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-cta-text bg-cta-bg hover:bg-cta-bg-hover transition-all duration-200 cursor-pointer"
        >
          Book a Demo
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </section>
  );
}
