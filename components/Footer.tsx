"use client";

import Link from "next/link";
import { PERSON } from "@/lib/data";

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function Footer() {
  const icons = [
    { href: `mailto:${PERSON.links.email}`, icon: <MailIcon />, label: "Email" },
    { href: PERSON.links.linkedin, icon: <LinkedinIcon />, label: "LinkedIn" },
    { href: PERSON.links.github, icon: <GithubIcon />, label: "GitHub" },
  ];

  return (
    <footer
      className="border-t mx-auto flex items-center justify-between px-8 py-5"
      style={{
        maxWidth: "700px",
        borderColor: "var(--border2)",
      }}
    >
      <span
        className="text-xs"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--ink3)" }}
      >
        © 2026{" "}
        <span style={{ color: "var(--ink2)", fontWeight: 500 }}>
          {PERSON.name}
        </span>
      </span>
      <div className="flex gap-0.5">
        {icons.map(({ href, icon, label }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="w-[30px] h-[30px] rounded-md flex items-center justify-center transition-colors duration-150"
            style={{ color: "var(--ink3)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              (e.currentTarget as HTMLElement).style.background = "var(--mono-bg)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--ink3)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            {icon}
          </Link>
        ))}
      </div>
    </footer>
  );
}
