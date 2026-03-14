const LOGO_LINES = [
  "                                       ▀▀                 ",
  "▄████ ▄███▄ ███▄███▄ ████▄  ▀▀█▄ ████▄ ██  ▄███▄ ████▄   ",
  "██    ██ ██ ██ ██ ██ ██ ██ ▄█▀██ ██ ██ ██  ██ ██ ██ ██   ",
  "▀████ ▀███▀ ██ ██ ██ ████▀ ▀█▄██ ██ ██ ██▄ ▀███▀ ██ ██ ██",
  "                     ██                                   ",
  "                     ▀▀                                   ",
];

// Full hero logo — displayed between Hero and ProductTabs
export function AsciiLogoFull() {
  return (
    <div className="w-full overflow-x-auto py-10 px-6">
      <pre
        className="font-[var(--font-mono)] text-accent leading-snug whitespace-pre mx-auto"
        style={{ fontSize: "clamp(6px, 1.4vw, 13px)", width: "max-content", maxWidth: "100%" }}
        aria-label="Companion"
      >
        {LOGO_LINES.join("\n")}
      </pre>
    </div>
  );
}

// Compact nav/footer wordmark — just the brand name in mono
export function AsciiLogoNav() {
  return (
    <span
      className="font-[var(--font-mono)] font-bold text-accent tracking-tight select-none"
      style={{ fontSize: "13px", letterSpacing: "0.02em" }}
      aria-label="Companion"
    >
      companion<span className="text-text-primary">.</span>
    </span>
  );
}
