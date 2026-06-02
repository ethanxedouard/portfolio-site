"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const LINKS = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

export function Nav() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b"
      style={{
        background: "var(--nav-bg, rgba(255,255,255,0.92))",
        borderColor: "var(--border2)",
      }}
    >
      <nav
        className="flex items-center justify-between mx-auto px-8"
        style={{ maxWidth: "700px", height: "56px" }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-[17px] font-semibold tracking-tight"
          style={{ color: "var(--ink)", letterSpacing: "-0.03em" }}
        >
          {process.env.NEXT_PUBLIC_PERSON_SHORT ?? "ethan"}
          <span style={{ color: "var(--accent)" }}>.</span>
        </Link>

        {/* Links + theme toggle */}
        <div className="flex items-center gap-0.5">
          {LINKS.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className="font-mono text-[12px] px-2.5 py-1.5 rounded-md transition-colors duration-150"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.04em",
                  color: active ? "var(--accent)" : "var(--ink3)",
                  fontWeight: active ? 500 : 400,
                  background: "transparent",
                }}
              >
                {label}
              </Link>
            );
          })}

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="ml-2 w-8 h-8 rounded-lg border flex items-center justify-center transition-colors duration-150"
            style={{
              borderColor: "var(--border)",
              color: "var(--ink3)",
              background: "transparent",
            }}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
}
