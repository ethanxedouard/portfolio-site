import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[60vh] px-8 text-center"
      style={{ maxWidth: "700px", margin: "0 auto" }}
    >
      <p
        className="text-[11px] tracking-[0.12em] uppercase mb-3"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)" }}
      >
        404
      </p>
      <h1
        className="font-semibold mb-3"
        style={{ fontSize: "1.5rem", letterSpacing: "-0.025em", color: "var(--ink)" }}
      >
        Page not found
      </h1>
      <p className="text-[14px] mb-8" style={{ color: "var(--ink2)" }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-[12px] tracking-[0.04em] px-5 py-2 rounded border transition-all duration-150"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: "var(--ink)",
          borderColor: "var(--border)",
          background: "var(--card)",
          textDecoration: "none",
        }}
      >
        ← go home
      </Link>
    </div>
  );
}
