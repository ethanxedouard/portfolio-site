export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase"
      style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--ink3)" }}
    >
      <span style={{ color: "var(--accent)", fontSize: "13px" }}>#</span>
      {children}
    </span>
  );
}
