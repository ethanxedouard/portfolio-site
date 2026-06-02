import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/SectionLabel";
import { PROJECTS, getProject } from "@/lib/data";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} — Ethan Edouard`,
    description: project.tagline,
  };
}

function BackIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProject(slug);
  if (!project) notFound();

  const architectureParagraphs = project.architecture.split("\n\n");

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <div className="px-8 pt-10 pb-16">

        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 mb-8 text-[11.5px] tracking-[0.03em] transition-colors duration-150"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--ink3)",
            textDecoration: "none",
          }}
        >
          <BackIcon />
          back to projects
        </Link>

        {/* Title */}
        <h1
          className="font-semibold mb-2 leading-[1.1]"
          style={{
            fontSize: "clamp(1.6rem, 3.5vw, 2rem)",
            letterSpacing: "-0.025em",
            color: "var(--ink)",
          }}
        >
          {project.title}
        </h1>

        <p
          className="text-[15px] leading-[1.7] mb-7"
          style={{ color: "var(--ink2)", maxWidth: "560px" }}
        >
          {project.tagline}
        </p>

        {/* Meta row */}
        <div
          className="flex items-center flex-wrap gap-4 mb-7 pb-6"
          style={{ borderBottom: "1px solid var(--border2)" }}
        >
          <span
            className="flex items-center gap-1.5 text-[11px] tracking-[0.02em]"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--ink3)" }}
          >
            <CalendarIcon /> {project.date}
          </span>

          {/* Buttons */}
          <div className="flex gap-2 ml-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11.5px] px-3.5 py-1.5 rounded border transition-all duration-150"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--ink)",
                  borderColor: "var(--border)",
                  background: "var(--card)",
                  boxShadow: "var(--shadow)",
                  textDecoration: "none",
                }}
              >
                <GithubIcon />
                source
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11.5px] px-3.5 py-1.5 rounded border transition-all duration-150"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--ink)",
                  borderColor: "var(--border)",
                  background: "var(--card)",
                  boxShadow: "var(--shadow)",
                  textDecoration: "none",
                }}
              >
                <ExternalIcon />
                live demo
              </a>
            )}
          </div>
        </div>

        {/* Tech stack */}
        <div className="mb-6">
          <SectionLabel>tech stack</SectionLabel>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[12px] px-3 py-1 rounded border"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.02em",
                  background: "var(--tag-bg)",
                  color: "var(--tag-text)",
                  borderColor: "var(--border)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-8">
          <SectionLabel>metrics</SectionLabel>
          <div
            className="grid gap-4 mt-4"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}
          >
            {project.metrics.map(([val, label]) => (
              <div
                key={label}
                className="rounded-[8px] p-4 border"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <div
                  className="font-bold leading-[1.1] mb-1"
                  style={{
                    fontSize: "1.5rem",
                    letterSpacing: "-0.03em",
                    color: "var(--accent)",
                  }}
                >
                  {val}
                </div>
                <div
                  className="text-[10.5px] tracking-[0.04em] uppercase"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--ink3)",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8" style={{ borderTop: "1px solid var(--border2)" }} />

        {/* Overview */}
        <div className="mb-6">
          <SectionLabel>overview</SectionLabel>
          <p
            className="text-[14.5px] leading-[1.82] mt-3"
            style={{ color: "var(--ink2)" }}
          >
            {project.overview}
          </p>
        </div>

        {/* Highlights */}
        <h2
          className="font-semibold mb-3 mt-8"
          style={{ fontSize: "1rem", letterSpacing: "-0.01em", color: "var(--ink)" }}
        >
          Technical Highlights
        </h2>
        <ul className="mb-6" style={{ paddingLeft: "1.15rem" }}>
          {project.highlights.map(([bold, rest]) => (
            <li
              key={bold}
              className="text-[14.5px] leading-[1.78] mb-1.5"
              style={{ color: "var(--ink2)" }}
            >
              <strong style={{ color: "var(--ink)", fontWeight: 500 }}>{bold}</strong>{" "}
              — {rest}
            </li>
          ))}
        </ul>

        {/* Architecture */}
        <h2
          className="font-semibold mb-3 mt-8"
          style={{ fontSize: "1rem", letterSpacing: "-0.01em", color: "var(--ink)" }}
        >
          Architecture
        </h2>
        {architectureParagraphs.map((para, i) => (
          <p
            key={i}
            className="text-[14.5px] leading-[1.82] mb-4"
            style={{ color: "var(--ink2)" }}
          >
            {para}
          </p>
        ))}

        {/* Learned */}
        <h2
          className="font-semibold mb-3 mt-8"
          style={{ fontSize: "1rem", letterSpacing: "-0.01em", color: "var(--ink)" }}
        >
          What I Learned
        </h2>
        <p
          className="text-[14.5px] leading-[1.82]"
          style={{ color: "var(--ink2)" }}
        >
          {project.learned}
        </p>
      </div>

      <Footer />
    </div>
  );
}
