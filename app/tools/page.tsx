import type { Metadata } from "next";
import { SiteNav } from "../components/site-nav";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "Tools — Goran Pavlik",
  description: "Free Revenue Operations tools: a SaaS metrics calculator, growth-stage diagnostic, lead-scoring model, and commission calculator.",
};

const tools = [
  { name: "SaaS Metrics Calculator", desc: "Enter ARR, customer count, churn, and acquisition cost — get NRR, CAC payback, LTV:CAC, and ARPU computed instantly, with plain-language reads on each." },
  { name: "Growth Stage Diagnostic", desc: "Answer a few questions about retention, repeatability, and economics, and see which stage you're in — and the single commercial problem worth solving next." },
  { name: "Lead Scoring Model", desc: "Turn account fit and behavioural signals into a transparent, weighted score, so the team works the right accounts in the right order." },
  { name: "Commission Calculator", desc: "Model quota, accelerators, and OTE to design compensation that points effort at company revenue, not just activity." },
];

export default function Tools() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="relative overflow-hidden">
          <div aria-hidden className="glow-pulse pointer-events-none absolute -top-28 right-1/4 w-[560px] h-[460px]" style={{ background: "radial-gradient(ellipse, var(--glow-cool), transparent 66%)" }} />
          <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-12">
            <p className="mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent-text)] mb-5">Tools</p>
            <h1 className="serif text-[clamp(34px,4.5vw,56px)] leading-[1.04] tracking-[-0.025em] text-[var(--heading)] max-w-[18ch]">Free tools, built on the same thinking.</h1>
            <p className="text-[17px] text-[var(--muted)] leading-[1.7] max-w-[54ch] mt-6">Calculators and diagnostics that turn the frameworks behind the work into something you can use in minutes. Launching soon.</p>
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-20 md:pb-28">
          <div className="grid sm:grid-cols-2 gap-5">
            {tools.map((t) => (
              <div key={t.name} className="rounded-[14px] border border-[var(--hairline)] bg-[var(--panel)] p-8" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="serif text-[22px] text-[var(--heading)] leading-[1.2]">{t.name}</h2>
                  <span className="mono text-[10px] uppercase tracking-[0.12em] text-[var(--accent-text)] bg-[var(--accent-tint)] border border-[var(--hairline)] rounded-full px-2.5 py-1 shrink-0">Soon</span>
                </div>
                <p className="text-[15px] text-[var(--muted)] leading-[1.6]">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-[16px] border border-[var(--hairline)] bg-[var(--panel)] px-8 py-10 text-center" style={{ boxShadow: "var(--shadow-glow)" }}>
            <h2 className="serif text-[clamp(22px,2.6vw,30px)] text-[var(--heading)] leading-[1.15] max-w-[24ch] mx-auto">Want to know when these go live?</h2>
            <a href="mailto:pavlikgoran@yahoo.com" className="inline-block mt-6 rounded-[9px] bg-[var(--accent)] px-6 py-3 text-[14px] font-medium text-white hover:bg-[var(--accent-hover)] transition-colors">Get in touch</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}