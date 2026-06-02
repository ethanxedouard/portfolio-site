import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GitHubHeatmap } from "@/components/GitHubHeatmap";
import { SectionLabel } from "@/components/SectionLabel";
import { PERSON, EXPERIENCE, AWARDS } from "@/lib/data";

// ── Icons ────────────────────────────────────────────────────
function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

export default function HomePage() {
  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>

      {/* ── HERO ── */}
      <section className="px-8 pt-20 pb-0">
        {/* Status pill */}
        <div
          className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded text-[11px] tracking-[0.1em] uppercase border"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--ink3)",
            borderColor: "var(--border)",
            background: "var(--card)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{
              background: "var(--green)",
              boxShadow: "0 0 0 0 rgba(22,163,74,0.4)",
              animation: "ripple 2.2s ease-in-out infinite",
            }}
          />
          {PERSON.status}
        </div>

        <h1
          className="font-semibold mb-5 leading-[1.1]"
          style={{
            fontSize: "clamp(2rem, 5vw, 2.75rem)",
            letterSpacing: "-0.03em",
            color: "var(--ink)",
          }}
        >
          Hi, I&apos;m{" "}
          <span style={{ color: "var(--accent)" }}>{PERSON.name}</span>
        </h1>

        {PERSON.bio.map((para, i) => (
          <p
            key={i}
            className="text-[15.5px] leading-[1.78] mb-2.5 max-w-[500px]"
            style={{ color: "var(--ink2)" }}
          >
            {i === 0 ? (
              <>
                CS student at Howard University building software that solves real problems. Interested in full-stack development, distributed systems, and creating products people actually use.
              </>
            ) : (
              para
            )}
          </p>
        ))}

        {/* Social links */}
        <div className="flex flex-wrap gap-2.5 mt-8">
          {[
            { href: PERSON.links.github, icon: <GithubIcon />, label: "github" },
            { href: PERSON.links.linkedin, icon: <LinkedinIcon />, label: "linkedin" },
            { href: `mailto:${PERSON.links.email}`, icon: <MailIcon />, label: "email" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-1.5 text-[11.5px] px-3.5 py-1.5 rounded border transition-all duration-150"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.04em",
                color: "var(--ink2)",
                borderColor: "var(--border)",
                background: "var(--card)",
              }}
            >
              {icon}
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="mx-8 mt-12" style={{ borderTop: "1px solid var(--border2)" }} />

      {/* ── EXPERIENCE ── */}
      <section className="px-8 py-14">
        <div
          className="flex items-center justify-between mb-8 pb-3.5"
          style={{ borderBottom: "1px solid var(--border2)" }}
        >
          <SectionLabel>experience</SectionLabel>
        </div>

        <div className="flex flex-col gap-9">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="grid gap-4" style={{ gridTemplateColumns: "44px 1fr" }}>
              {/* Logo — uses real image if provided, otherwise fallback */}
              <div
                className="w-11 h-11 rounded-[10px] border flex items-center justify-center overflow-hidden flex-shrink-0 text-sm font-semibold"
                style={{
                  background: exp.image ? "var(--bg2)" : (exp.logoBg ?? "var(--bg2)"),
                  borderColor: "var(--border)",
                  boxShadow: "var(--shadow)",
                  color: "#fff",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "-0.05em",
                  position: "relative",
                }}
              >
                {exp.image ? (
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                ) : exp.company.includes("Notion") ? (
                  <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
                    <rect x="10" y="10" width="35" height="35" rx="5" fill="white"/>
                    <rect x="55" y="10" width="35" height="35" rx="5" fill="rgba(255,255,255,0.5)"/>
                    <rect x="10" y="55" width="35" height="35" rx="5" fill="rgba(255,255,255,0.5)"/>
                    <rect x="55" y="55" width="35" height="35" rx="5" fill="rgba(255,255,255,0.22)"/>
                  </svg>
                ) : exp.company.includes("Stripe") ? (
                  <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
                    <path d="M50 10 L90 80 H10 Z" fill="rgba(255,255,255,0.9)"/>
                  </svg>
                ) : (
                  <span style={{ background: exp.logoBg ?? "var(--bg2)", width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    {exp.logo ?? exp.company[0]}
                  </span>
                )}
              </div>

              {/* Content */}
              <div>
                <div className="flex justify-between items-start gap-4 flex-wrap mb-[3px]">
                  <span className="text-[14.5px] font-medium" style={{ color: "var(--ink)" }}>
                    {exp.role}
                  </span>
                  <span
                    className="text-[11px] tracking-[0.04em] pt-0.5 flex-shrink-0"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--ink3)" }}
                  >
                    {exp.period}
                  </span>
                </div>
                <div
                  className="text-[13px] mb-1.5 tracking-[0.02em]"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--navy)" }}
                >
                  {exp.company}
                </div>
                <p className="text-[13.5px] leading-[1.72]" style={{ color: "var(--ink2)" }}>
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-8" style={{ borderTop: "1px solid var(--border2)" }} />

      {/* ── HONORS, AWARDS & FELLOWSHIPS ── */}
      <section className="px-8 py-14">
        <div
          className="flex items-center justify-between mb-8 pb-3.5"
          style={{ borderBottom: "1px solid var(--border2)" }}
        >
          <SectionLabel>honors, awards &amp; fellowships</SectionLabel>
        </div>

        <div className="flex flex-col">
          {AWARDS.map((award, i) => (
            <div
              key={i}
              className="grid gap-6 py-5"
              style={{
                gridTemplateColumns: "1fr auto",
                borderBottom: i < AWARDS.length - 1 ? "1px solid var(--border2)" : "none",
              }}
            >
              <div>
                <p className="text-[14.5px] font-medium mb-[3px] leading-[1.4]" style={{ color: "var(--ink)" }}>
                  {award.title}
                </p>
                <p
                  className="text-[12.5px] mb-1 tracking-[0.02em]"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--navy)" }}
                >
                  {award.org}
                </p>
                <p className="text-[13px] leading-[1.65]" style={{ color: "var(--ink2)" }}>
                  {award.description}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <p
                  className="text-[11.5px] tracking-[0.04em] whitespace-nowrap"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--ink3)" }}
                >
                  {award.year}
                </p>
                <span className="award-badge mt-1.5 inline-block">{award.type}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-8" style={{ borderTop: "1px solid var(--border2)" }} />

      {/* ── GITHUB ── */}
      <section className="px-8 py-14">
        <div
          className="flex items-center justify-between mb-8 pb-3.5"
          style={{ borderBottom: "1px solid var(--border2)" }}
        >
          <SectionLabel>github contributions</SectionLabel>
          <a
            href={PERSON.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] flex items-center gap-1 transition-colors duration-150"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--ink3)" }}
          >
            view on github ↗
          </a>
        </div>

        <GitHubHeatmap />

        <div className="flex justify-center mt-10">
          <a
            href={PERSON.links.resume}
            target="_blank"
            className="text-[12px] tracking-[0.06em] px-7 py-2.5 rounded border transition-all duration-150"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--ink)",
              borderColor: "var(--border)",
              background: "var(--card)",
              boxShadow: "var(--shadow)",
            }}
          >
            open_resume.pdf
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
