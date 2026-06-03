import { Monogram } from "./components/monogram";
import { SiteNav } from "./components/site-nav";
import { SiteFooter } from "./components/site-footer";

const principles = [
  { label: "Measurement", line: "You manage what you measure — and most teams measure the wrong things.", body: "Vanity metrics feel good and change nothing. I build around the few that move the result." },
  { label: "Forecasting", line: "A forecast is a probability, not a promise.", body: "The useful question isn't the figure — it's the confidence behind it, and where the risk hides." },
  { label: "Incentive alignment", line: "People do what they're paid to do, so comp is a design problem.", body: "When incentives reward activity over value, the funnel fills with the wrong work." },
];

const signals = [
  { v: "112%", l: "NRR" },
  { v: "14 mo", l: "CAC payback" },
  { v: "4.2×", l: "LTV : CAC" },
  { v: "+38%", l: "ARR YoY" },
];

const caseStudies = [
  { index: "01", eyebrow: "Intelsat · Scale & complexity", title: "From reconciling numbers to reading risk", dek: "A single trusted view of pipeline, forecast, actuals, and plan across a $200M portfolio — so forecast reviews became decisions, not arguments.", tags: ["Power BI", "Salesforce", "Forecasting"], metric: "$200M", metricLabel: "Portfolio" },
  { index: "02", eyebrow: "FlexiOffices · Insight & strategy", title: "The 60 / 16 problem", dek: "60% of sales effort was chasing just 16% of revenue. I found it in the funnel data and built the case that redirected the team.", tags: ["Funnel analysis", "ICP & scoring", "GTM strategy"], metric: "16%", metricLabel: "Of revenue, 60% of effort" },
];

const tools = [
  { name: "SaaS Metrics Calculator", desc: "Enter ARR, customers, and churn — get NRR, CAC payback, and LTV:CAC instantly." },
  { name: "Growth Stage Diagnostic", desc: "A few inputs reveal which stage you're in and the commercial problem to solve next." },
  { name: "Lead Scoring Model", desc: "Turn account and behaviour signals into a prioritised, defensible target list." },
  { name: "Commission Calculator", desc: "Model quota, accelerators, and OTE to design comp that points at revenue." },
];

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="top">
        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="glow-pulse pointer-events-none absolute -top-40 -right-24 w-[560px] h-[560px]" style={{ background: "radial-gradient(circle, var(--glow-cool), rgba(80,98,255,0.05) 42%, transparent 66%)" }} />
          <div aria-hidden className="pointer-events-none absolute -bottom-44 -left-32 w-[460px] h-[460px]" style={{ background: "radial-gradient(circle, var(--glow-warm), transparent 64%)" }} />
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse 70% 60% at 75% 15%, #000, transparent 72%)", WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 75% 15%, #000, transparent 72%)" }} />
          <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 pt-36 md:pt-44 pb-20 md:pb-28">
            <div className="fade-up flex items-center gap-3 mb-10">
              <Monogram className="w-11 h-11 text-[16px]" />
              <div className="mono text-[10.5px] uppercase tracking-[0.1em] text-[var(--muted)] leading-relaxed">
                Goran Pavlik<br />Revenue Operations &amp; Commercial Intelligence · London
              </div>
            </div>
            <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-14 items-center">
              <div>
                <h1 className="serif fade-up text-[clamp(44px,6vw,72px)] leading-[0.98] tracking-[-0.03em] font-medium text-[var(--heading)]" style={{ animationDelay: "100ms" }}>
                  Revenue,<br />made <span className="text-[var(--accent-text)]">legible.</span>
                </h1>
                <p className="fade-up mt-6 text-[17px] leading-[1.6] text-[var(--muted)] max-w-[34ch]" style={{ animationDelay: "180ms" }}>
                  I build the metrics, forecasts, and systems revenue leaders act on with confidence.
                </p>
                <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "260ms" }}>
                  <a href="#contact" className="rounded-[9px] bg-[var(--accent)] px-[17px] py-[10px] text-[14px] font-medium text-white hover:bg-[var(--accent-hover)] transition-colors">Work with me</a>
                  <a href="/work" className="rounded-[9px] border border-[var(--hairline-strong)] px-[17px] py-[10px] text-[14px] font-medium text-[var(--heading)] hover:bg-[var(--surface)] transition-colors">See the work</a>
                </div>
              </div>
              <div className="fade-up" style={{ animationDelay: "320ms" }}>
                <div className="rounded-[14px] border border-[var(--hairline)] bg-[var(--panel)] p-5" style={{ boxShadow: "var(--shadow-glow)" }}>
                  <div className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--faint)]">Forecast confidence</div>
                  <div className="mono text-[33px] tracking-[-0.02em] text-[var(--heading)] mt-2 leading-none">112%</div>
                  <div className="text-[12px] text-[var(--muted)] mt-1">Net revenue retention, trending up</div>
                  <svg className="mt-4 w-full" height="52" viewBox="0 0 240 52" aria-hidden="true">
                    <polyline className="draw" points="4,44 44,37 84,40 124,26 164,28 204,12 236,6" fill="none" stroke="#8E9AFF" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="236" cy="6" r="4" fill="#8E9AFF" />
                  </svg>
                  <div className="mono text-[9.5px] uppercase tracking-[0.1em] text-[var(--faint)] mt-3.5 pt-3 border-t border-[var(--hairline)]">Intelsat engagement · representative</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── PROOF ───── */}
        <section className="border-y border-[var(--hairline)] bg-[var(--surface)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-7 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3">
            <span className="mono text-[11px] uppercase tracking-[0.2em] text-[var(--faint)]">Experience</span>
            <span className="hidden sm:block h-4 w-px bg-[var(--hairline-strong)]" />
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-1">
              <span className="serif text-xl text-[var(--muted)]">Intelsat</span><span className="text-[var(--faint)]">·</span>
              <span className="serif text-xl text-[var(--muted)]">AZA Finance</span><span className="text-[var(--faint)]">·</span>
              <span className="serif text-xl text-[var(--muted)]">Orange</span>
            </div>
          </div>
        </section>

        {/* ───── OPERATING LENS ───── */}
        <section className="border-b border-[var(--hairline)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="grid md:grid-cols-[1fr_0.9fr] gap-12 md:gap-16 items-start">
              <div>
                <p className="mono text-[11px] uppercase tracking-[0.2em] text-[var(--faint)] mb-4">Operating lens</p>
                <h2 className="serif text-[clamp(26px,3vw,36px)] leading-[1.12] tracking-[-0.02em] text-[var(--heading)] mb-3">How I read a revenue engine.</h2>
                <p className="text-[16px] text-[var(--muted)] leading-[1.6] max-w-[42ch]">Three beliefs that shape every system I build.</p>
                <div className="mt-8">
                  {principles.map((p) => (
                    <div key={p.label} className="border-t border-[var(--hairline)] pt-6 mt-6 first:mt-0">
                      <div className="mono text-[11px] uppercase tracking-[0.16em] text-[var(--faint)] mb-2">{p.label}</div>
                      <p className="serif text-[clamp(19px,2vw,23px)] leading-[1.3] text-[var(--heading)] mb-2">{p.line}</p>
                      <p className="text-[15px] text-[var(--muted)] leading-[1.6] max-w-[44ch]">{p.body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:pt-1">
                <div className="rounded-[14px] border border-[var(--hairline)] bg-[var(--panel)] p-7">
                  <div className="flex items-center justify-between mb-7">
                    <span className="mono text-[11px] uppercase tracking-[0.16em] text-[var(--faint)]">Operating signals</span>
                    <span className="mono text-[10px] uppercase tracking-[0.12em] text-[var(--faint)]">Representative</span>
                  </div>
                  <div className="flex items-center gap-6 pb-7 border-b border-[var(--hairline)]">
                    <div className="relative shrink-0 w-24 h-24">
                      <svg viewBox="0 0 100 100" className="w-24 h-24" role="img" aria-label="Pipeline coverage 3.4 times">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="8" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#5062FF" strokeWidth="8" strokeLinecap="round" strokeDasharray="251.3" strokeDashoffset="80.4" transform="rotate(-90 50 50)" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="mono text-xl text-[var(--heading)] leading-none">3.4×</span>
                      </div>
                    </div>
                    <div>
                      <div className="mono text-[11px] uppercase tracking-[0.13em] text-[var(--faint)] mb-1.5">Pipeline coverage</div>
                      <p className="text-[13px] text-[var(--muted)] leading-snug max-w-[24ch]">Enough pipeline to hit the number, with margin for slippage.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4 pt-7">
                    {signals.map((s) => (
                      <div key={s.l}>
                        <div className="mono text-[26px] text-[var(--heading)] leading-none tracking-[-0.01em]">{s.v}</div>
                        <div className="mono text-[11px] uppercase tracking-[0.13em] text-[var(--faint)] mt-2.5">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── SELECTED WORK ───── */}
        <section id="work" className="border-b border-[var(--hairline)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <p className="mono text-[11px] uppercase tracking-[0.2em] text-[var(--faint)] mb-3">Selected work</p>
                <h2 className="serif text-[clamp(26px,3vw,36px)] leading-[1.12] tracking-[-0.02em] text-[var(--heading)]">Where the thinking shows up.</h2>
              </div>
              <a href="/work" className="mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent-text)] hover:text-[var(--heading)] transition-colors">All work →</a>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {caseStudies.map((cs) => (
                <article key={cs.title} className="group rounded-[14px] border border-[var(--hairline)] bg-[var(--panel)] p-8 transition-all duration-200 hover:border-[var(--hairline-strong)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]">
                  <div className="flex items-start justify-between gap-6 pb-5 border-b border-[var(--hairline)]">
                    <div>
                      <span className="mono text-[11px] text-[var(--faint)]">{cs.index}</span>
                      <p className="mono text-[11px] uppercase tracking-[0.13em] text-[var(--faint)] mt-1">{cs.eyebrow}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="mono text-[28px] text-[var(--heading)] leading-none tracking-[-0.02em]">{cs.metric}</div>
                      <div className="text-[11px] text-[var(--faint)] mt-1.5 max-w-[120px] leading-snug ml-auto">{cs.metricLabel}</div>
                    </div>
                  </div>
                  <h3 className="serif text-[clamp(20px,2.2vw,26px)] mt-5 mb-3 leading-[1.18] text-[var(--heading)]">{cs.title}</h3>
                  <p className="text-[15px] text-[var(--muted)] leading-[1.6] mb-6">{cs.dek}</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((t) => (
                      <span key={t} className="mono text-[11.5px] text-[var(--muted)] bg-[var(--surface)] border border-[var(--hairline)] rounded-full px-2.5 py-1">{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───── TOOLS TEASER ───── */}
        <section id="tools" className="relative overflow-hidden border-b border-[var(--hairline)]">
          <div aria-hidden className="glow-pulse pointer-events-none absolute -top-24 left-1/3 w-[520px] h-[420px]" style={{ background: "radial-gradient(ellipse, var(--glow-cool), transparent 68%)" }} />
          <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
            <p className="mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent-text)] mb-4">Tools</p>
            <h2 className="serif text-[clamp(26px,3vw,36px)] leading-[1.12] tracking-[-0.02em] text-[var(--heading)] max-w-[20ch]">Free tools, built on the same thinking.</h2>
            <p className="text-[16px] text-[var(--muted)] leading-[1.6] max-w-[52ch] mt-4">Calculators and diagnostics that turn the frameworks behind the work into something you can use in minutes.</p>
            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {tools.map((t) => (
                <div key={t.name} className="rounded-[14px] border border-[var(--hairline)] bg-[var(--panel)] p-7 flex items-start justify-between gap-5">
                  <div>
                    <h3 className="serif text-[20px] text-[var(--heading)] leading-[1.2] mb-2">{t.name}</h3>
                    <p className="text-[14px] text-[var(--muted)] leading-[1.55]">{t.desc}</p>
                  </div>
                  <span className="mono text-[10px] uppercase tracking-[0.12em] text-[var(--accent-text)] bg-[var(--accent-tint)] border border-[var(--hairline)] rounded-full px-2.5 py-1 shrink-0">Soon</span>
                </div>
              ))}
            </div>
            <a href="/tools" className="inline-block mt-8 mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent-text)] hover:text-[var(--heading)] transition-colors">Explore tools →</a>
          </div>
        </section>

        {/* ───── CTA ───── */}
        <section id="contact" className="relative overflow-hidden">
          <div aria-hidden className="glow-pulse pointer-events-none absolute inset-x-0 -top-20 mx-auto w-[640px] h-[420px]" style={{ background: "radial-gradient(ellipse, var(--glow-cool), transparent 66%)" }} />
          <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 py-24 md:py-32">
            <div className="rounded-[16px] border border-[var(--hairline)] bg-[var(--panel)] px-8 py-12 md:px-14 md:py-16 text-center" style={{ boxShadow: "var(--shadow-glow)" }}>
              <h2 className="serif text-[clamp(28px,3.4vw,42px)] leading-[1.1] tracking-[-0.02em] text-[var(--heading)] max-w-[20ch] mx-auto">Let&apos;s make your revenue legible.</h2>
              <p className="text-[16px] text-[var(--muted)] leading-[1.6] max-w-[44ch] mx-auto mt-5">If your revenue picture is scattered across a dozen spreadsheets, that&apos;s the problem I solve.</p>
              <div className="flex flex-wrap justify-center gap-3 mt-9">
                <a href="mailto:pavlikgoran@yahoo.com" className="rounded-[9px] bg-[var(--accent)] px-6 py-3 text-[14px] font-medium text-white hover:bg-[var(--accent-hover)] transition-colors">Get in touch</a>
                <a href="https://www.linkedin.com/in/goran-pavlik/" target="_blank" rel="noopener" className="rounded-[9px] border border-[var(--hairline-strong)] px-6 py-3 text-[14px] font-medium text-[var(--heading)] hover:bg-[var(--surface)] transition-colors">LinkedIn ↗</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}