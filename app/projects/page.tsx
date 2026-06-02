import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { PROJECTS } from "@/lib/data";

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function ProjectsPage() {
  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <div className="px-8 pt-20 pb-10">
        <h1
          className="font-semibold"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
            letterSpacing: "-0.03em",
            color: "var(--ink3)",
          }}
        >
          Projects
        </h1>
      </div>

      <div className="px-8 pb-16 flex flex-col gap-5">
        {PROJECTS.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block rounded-[10px] overflow-hidden border transition-all duration-200"
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
              boxShadow: "var(--shadow)",
              textDecoration: "none",
            }}
          >
            {/* Mockup image area */}
            <div
              className="relative w-full overflow-hidden border-b"
              style={{ height: "215px", borderColor: "var(--border2)" }}
            >
              <Image
                src={`/projects/${project.slug}.png`}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Card body */}
            <div className="px-5 pt-4 pb-4">
              <div className="flex justify-between items-start mb-1.5">
                <span
                  className="text-[16px] font-semibold tracking-tight"
                  style={{ color: "var(--ink)", letterSpacing: "-0.01em" }}
                >
                  {project.title}
                </span>
                <span
                  className="text-[15px] flex-shrink-0 pl-2 transition-transform duration-200 group-hover:translate-x-0.5"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--ink3)",
                  }}
                >
                  →
                </span>
              </div>

              <p
                className="text-[13.5px] leading-[1.65] mb-3.5"
                style={{ color: "var(--ink2)" }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-3.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11.5px] px-2.5 py-[3px] rounded"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: "0.02em",
                      background: "var(--tag-bg)",
                      color: "var(--tag-text)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="flex items-center gap-4 pt-3"
                style={{ borderTop: "1px solid var(--border2)" }}
              >
                <span
                  className="flex items-center gap-1.5 text-[11px] tracking-[0.03em]"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--ink3)" }}
                >
                  <ClockIcon />
                  {project.date}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}

function MeridianMockup() {
  return (
    <svg viewBox="0 0 700 215" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="700" height="215" fill="#0d1117"/>
      <rect width="700" height="34" fill="#161b22"/>
      <circle cx="15" cy="17" r="4.5" fill="#ff5f56"/><circle cx="28" cy="17" r="4.5" fill="#ffbd2e"/><circle cx="41" cy="17" r="4.5" fill="#27c93f"/>
      <rect x="60" y="7" width="128" height="20" rx="4" fill="#0d1117"/>
      <text x="72" y="21" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.5)">auth/session.go</text>
      <rect x="60" y="31" width="128" height="3" rx="1" fill="#E51937"/>
      <rect x="0" y="34" width="175" height="181" fill="#161b22"/>
      <rect x="7" y="43" width="161" height="22" rx="4" fill="rgba(229,25,55,0.15)"/>
      <rect x="15" y="51" width="4" height="6" rx="1" fill="#E51937"/>
      <text x="24" y="58" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.82)">auth/session.go</text>
      <text x="12" y="79" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.28)">{"  api/handlers.go"}</text>
      <text x="12" y="95" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.28)">{"  pkg/store/redis.go"}</text>
      <text x="12" y="111" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.28)">{"  internal/ot/engine.go"}</text>
      <text x="12" y="127" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.28)">{"  cmd/server/main.go"}</text>
      <line x1="0" y1="190" x2="175" y2="190" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      <circle cx="14" cy="203" r="5.5" fill="#27ae60"/>
      <text x="24" y="207" fontFamily="sans-serif" fontSize="10" fill="rgba(255,255,255,0.38)">3 reviewers active</text>
      <rect x="175" y="34" width="28" height="181" fill="#161b22"/>
      <text x="177" y="56" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.16)">42</text>
      <text x="177" y="71" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.16)">43</text>
      <text x="177" y="86" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.16)">44</text>
      <text x="177" y="101" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.16)">45</text>
      <rect x="203" y="93" width="318" height="13" fill="rgba(229,25,55,0.08)"/>
      <text x="177" y="116" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.16)">46</text>
      <rect x="203" y="108" width="318" height="13" fill="rgba(39,174,96,0.05)"/>
      <text x="209" y="56" fontFamily="monospace" fontSize="10.5" fill="#79c0ff">func </text>
      <text x="239" y="56" fontFamily="monospace" fontSize="10.5" fill="#e2e8f0">(s *Session) </text>
      <text x="321" y="56" fontFamily="monospace" fontSize="10.5" fill="#d2a8ff">Apply</text>
      <text x="353" y="56" fontFamily="monospace" fontSize="10.5" fill="#e2e8f0">(op Operation) error {"{"}</text>
      <text x="221" y="71" fontFamily="monospace" fontSize="10.5" fill="#79c0ff">if </text>
      <text x="239" y="71" fontFamily="monospace" fontSize="10.5" fill="#e2e8f0">s.version != op.BaseVersion {"{"}</text>
      <text x="209" y="101" fontFamily="monospace" fontSize="10.5" fill="#8b949e">{"// transform concurrent ops"}</text>
      <text x="209" y="116" fontFamily="monospace" fontSize="10.5" fill="#e2e8f0">t, err := s.</text>
      <text x="275" y="116" fontFamily="monospace" fontSize="10.5" fill="#d2a8ff">OTEngine</text>
      <text x="323" y="116" fontFamily="monospace" fontSize="10.5" fill="#e2e8f0">.Transform(op)</text>
      <rect x="521" y="34" width="179" height="181" fill="#161b22"/>
      <rect x="521" y="34" width="179" height="28" fill="#1c2128"/>
      <text x="533" y="52" fontFamily="sans-serif" fontSize="11" fontWeight="500" fill="rgba(255,255,255,0.6)">Comments · 2</text>
      <rect x="529" y="70" width="163" height="56" rx="5" fill="#21262d"/>
      <circle cx="541" cy="82" r="5.5" fill="#E51937"/>
      <text x="551" y="86" fontFamily="sans-serif" fontSize="10" fontWeight="500" fill="rgba(255,255,255,0.8)">sarah_k</text>
      <text x="551" y="97" fontFamily="sans-serif" fontSize="9" fill="rgba(255,255,255,0.28)">line 45 · 2 min ago</text>
      <text x="537" y="112" fontFamily="sans-serif" fontSize="10" fill="rgba(255,255,255,0.5)">Cache transform result?</text>
      <text x="537" y="124" fontFamily="sans-serif" fontSize="10" fill="rgba(255,255,255,0.5)">Hot path concern.</text>
      <rect x="529" y="136" width="163" height="46" rx="5" fill="#21262d"/>
      <circle cx="541" cy="148" r="5.5" fill="#8b5cf6"/>
      <text x="551" y="152" fontFamily="sans-serif" fontSize="10" fontWeight="500" fill="rgba(255,255,255,0.8)">alex_c</text>
      <text x="537" y="175" fontFamily="sans-serif" fontSize="10" fill="rgba(255,255,255,0.5)">Good catch — on the list ✓</text>
    </svg>
  );
}

function FieldworkMockup() {
  return (
    <svg viewBox="0 0 700 215" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="700" height="215" fill="#0a1628"/>
      <rect x="18" y="12" width="146" height="191" rx="14" fill="#0f2044" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <rect x="27" y="25" width="128" height="166" rx="8" fill="#0d1b38"/>
      <rect x="66" y="17" width="38" height="5" rx="2.5" fill="#0a1628"/>
      <rect x="27" y="25" width="128" height="21" rx="8" fill="#0f2044"/>
      <rect x="27" y="37" width="128" height="9" fill="#0f2044"/>
      <text x="38" y="40" fontFamily="sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.4)">Fieldwork</text>
      <circle cx="144" cy="35" r="3.5" fill="#27ae60"/>
      <text x="38" y="62" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="rgba(255,255,255,0.75)">Site A · Plot 7</text>
      <text x="38" y="73" fontFamily="sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.28)">GPS locked · offline</text>
      <rect x="38" y="78" width="112" height="17" rx="3.5" fill="rgba(255,255,255,0.04)" stroke="rgba(39,174,96,0.4)" strokeWidth="0.8"/>
      <text x="46" y="90" fontFamily="monospace" fontSize="9" fill="rgba(39,174,96,0.9)">34.7°C</text>
      <rect x="38" y="99" width="112" height="17" rx="3.5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
      <text x="46" y="111" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.6)">7.2 pH</text>
      <rect x="38" y="120" width="112" height="17" rx="3.5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
      <text x="46" y="132" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.6)">342 ppm CO₂</text>
      <rect x="38" y="143" width="54" height="13" rx="3" fill="rgba(234,179,8,0.12)" stroke="rgba(234,179,8,0.3)" strokeWidth="0.5"/>
      <text x="65" y="153" fontFamily="sans-serif" fontSize="7.5" fill="rgba(234,179,8,0.9)" textAnchor="middle">⚡ offline</text>
      <rect x="38" y="163" width="112" height="18" rx="5" fill="#27ae60"/>
      <text x="94" y="175" fontFamily="sans-serif" fontSize="9" fontWeight="500" fill="#fff" textAnchor="middle">Save Record</text>
      <rect x="196" y="8" width="488" height="199" rx="8" fill="#0f1e35" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <rect x="196" y="8" width="488" height="30" rx="8" fill="#142236"/>
      <rect x="196" y="26" width="488" height="12" fill="#142236"/>
      <text x="212" y="27" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.7)">Fieldwork Dashboard</text>
      <rect x="208" y="48" width="108" height="52" rx="6" fill="#142236"/>
      <text x="220" y="64" fontFamily="sans-serif" fontSize="9" fill="rgba(255,255,255,0.3)">Records</text>
      <text x="220" y="86" fontFamily="sans-serif" fontSize="22" fontWeight="600" fill="#fff">2,847</text>
      <rect x="324" y="48" width="108" height="52" rx="6" fill="#142236"/>
      <text x="336" y="64" fontFamily="sans-serif" fontSize="9" fill="rgba(255,255,255,0.3)">Pending</text>
      <text x="336" y="86" fontFamily="sans-serif" fontSize="22" fontWeight="600" fill="#f59e0b">9</text>
      <rect x="440" y="48" width="108" height="52" rx="6" fill="#142236"/>
      <text x="452" y="64" fontFamily="sans-serif" fontSize="9" fill="rgba(255,255,255,0.3)">Active sites</text>
      <text x="452" y="86" fontFamily="sans-serif" fontSize="22" fontWeight="600" fill="#27ae60">12</text>
      <rect x="208" y="112" width="460" height="20" rx="3" fill="#142236"/>
      <text x="218" y="126" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.25)">ID</text>
      <text x="268" y="126" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.25)">Site</text>
      <text x="338" y="126" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.25)">Researcher</text>
      <text x="460" y="126" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.25)">Status</text>
      <rect x="208" y="132" width="460" height="19" fill="rgba(255,255,255,0.012)"/>
      <text x="218" y="145" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.5)">#2847</text>
      <text x="268" y="145" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.5)">A·P7</text>
      <text x="338" y="145" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.5)">J. Martinez</text>
      <rect x="458" y="135" width="48" height="12" rx="3" fill="rgba(234,179,8,0.1)"/>
      <text x="482" y="144" fontFamily="sans-serif" fontSize="8" fill="rgba(234,179,8,0.85)" textAnchor="middle">pending</text>
      <text x="218" y="164" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.35)">#2846</text>
      <text x="268" y="164" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.35)">B·P3</text>
      <text x="338" y="164" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.35)">K. Okonkwo</text>
      <rect x="458" y="154" width="44" height="12" rx="3" fill="rgba(39,174,96,0.1)"/>
      <text x="480" y="163" fontFamily="sans-serif" fontSize="8" fill="rgba(39,174,96,0.85)" textAnchor="middle">synced</text>
    </svg>
  );
}

function KairosMockup() {
  return (
    <svg viewBox="0 0 700 215" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="700" height="215" fill="#0e0e1a"/>
      <rect width="262" height="215" fill="#13131f"/>
      <rect width="262" height="38" fill="#18182c"/>
      <text x="14" y="24" fontFamily="sans-serif" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.75)">kairos</text>
      <text x="64" y="24" fontFamily="sans-serif" fontSize="9.5" fill="rgba(255,255,255,0.2)">scheduling assistant</text>
      <rect x="10" y="46" width="200" height="36" rx="7" fill="#1e1e35"/>
      <text x="20" y="61" fontFamily="sans-serif" fontSize="10" fill="rgba(255,255,255,0.6)">Schedule a 45-min eng sync</text>
      <text x="20" y="75" fontFamily="sans-serif" fontSize="10" fill="rgba(255,255,255,0.6)">next week, avoid Fri afternoons</text>
      <rect x="10" y="90" width="244" height="80" rx="7" fill="rgba(229,25,55,0.08)" stroke="rgba(229,25,55,0.2)" strokeWidth="0.5"/>
      <circle cx="22" cy="101" r="5.5" fill="#E51937"/>
      <text x="32" y="105" fontFamily="sans-serif" fontSize="9" fontWeight="500" fill="rgba(229,25,55,0.9)">Kairos</text>
      <text x="18" y="122" fontFamily="sans-serif" fontSize="10" fill="rgba(255,255,255,0.55)">Found 3 slots across 6 people</text>
      <text x="18" y="136" fontFamily="sans-serif" fontSize="10" fill="rgba(255,255,255,0.55)">in 4 timezones. Best: Tue 10am PT</text>
      <text x="18" y="152" fontFamily="monospace" fontSize="10" fill="#E51937">energy score 94/100 ✓</text>
      <rect x="262" y="0" width="438" height="215" fill="#0e0e1a"/>
      <rect x="262" y="0" width="438" height="32" fill="#13131f"/>
      <text x="278" y="20" fontFamily="sans-serif" fontSize="11" fontWeight="500" fill="rgba(255,255,255,0.5)">Week of Jan 13</text>
      <text x="318" y="44" fontFamily="sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.2)" textAnchor="middle">MON</text>
      <text x="378" y="44" fontFamily="sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.2)" textAnchor="middle">TUE</text>
      <text x="438" y="44" fontFamily="sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.2)" textAnchor="middle">WED</text>
      <text x="498" y="44" fontFamily="sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.2)" textAnchor="middle">THU</text>
      <text x="558" y="44" fontFamily="sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.12)" textAnchor="middle">FRI</text>
      <line x1="290" y1="52" x2="690" y2="52" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
      <line x1="290" y1="84" x2="690" y2="84" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
      <line x1="290" y1="116" x2="690" y2="116" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
      <line x1="290" y1="148" x2="690" y2="148" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
      <rect x="294" y="54" width="46" height="28" rx="4" fill="rgba(59,130,246,0.18)" stroke="rgba(59,130,246,0.28)" strokeWidth="0.5"/>
      <text x="317" y="72" fontFamily="sans-serif" fontSize="8" fill="rgba(59,130,246,0.9)" textAnchor="middle">1:1</text>
      <rect x="354" y="54" width="46" height="44" rx="4" fill="rgba(59,130,246,0.18)" stroke="rgba(59,130,246,0.28)" strokeWidth="0.5"/>
      <text x="377" y="80" fontFamily="sans-serif" fontSize="8" fill="rgba(59,130,246,0.9)" textAnchor="middle">Sprint Plan</text>
      <rect x="354" y="86" width="46" height="28" rx="4" fill="rgba(229,25,55,0.2)" stroke="#E51937" strokeWidth="1.5"/>
      <rect x="354" y="82" width="46" height="5" rx="2" fill="#E51937" opacity="0.5"/>
      <text x="377" y="104" fontFamily="sans-serif" fontSize="8" fontWeight="500" fill="#E51937" textAnchor="middle">Eng Sync ✓</text>
      <rect x="414" y="86" width="46" height="28" rx="4" fill="rgba(59,130,246,0.18)" stroke="rgba(59,130,246,0.28)" strokeWidth="0.5"/>
      <text x="437" y="104" fontFamily="sans-serif" fontSize="8" fill="rgba(59,130,246,0.9)" textAnchor="middle">Design</text>
    </svg>
  );
}
