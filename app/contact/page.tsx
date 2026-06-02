import { Footer } from "@/components/Footer";
import { PERSON } from "@/lib/data";

const CONTACTS = [
  {
    label: "Email",
    value: PERSON.links.email,
    href: `mailto:${PERSON.links.email}`,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ethanedouard",
    href: PERSON.links.linkedin,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/alexchen",
    href: PERSON.links.github,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <div className="px-8 pt-20 pb-16">
        <h1
          className="font-semibold mb-1.5"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
            letterSpacing: "-0.03em",
            color: "var(--ink)",
          }}
        >
          Contact
        </h1>
        <p
          className="text-[14px] mb-12 leading-[1.6]"
          style={{ color: "var(--ink2)" }}
        >
          Want to get in touch? Here are the best ways to reach me.
        </p>

        <div className="flex flex-col gap-4">
          {CONTACTS.map(({ label, value, href, icon }) => {
            const isExternal = !href.startsWith("mailto");
            return (
              <a
                key={label}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-[10px] border px-5 py-4 transition-all duration-150"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  boxShadow: "var(--shadow)",
                  textDecoration: "none",
                }}
              >
                {/* Icon box */}
                <div
                  className="w-[38px] h-[38px] rounded-[8px] border flex items-center justify-center flex-shrink-0 transition-all duration-150"
                  style={{
                    background: "var(--bg2)",
                    borderColor: "var(--border)",
                    color: "var(--ink2)",
                  }}
                >
                  {icon}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <div
                    className="text-[14.5px] font-medium mb-0.5 transition-colors duration-150"
                    style={{ color: "var(--ink)" }}
                  >
                    {label}
                  </div>
                  <div
                    className="text-[13px] tracking-[0.02em]"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "var(--ink3)",
                    }}
                  >
                    {value}
                  </div>
                </div>

                {/* Arrow */}
                <span
                  className="text-[14px] transition-all duration-150 group-hover:translate-x-0.5"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--ink3)",
                  }}
                >
                  ↗
                </span>
              </a>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
