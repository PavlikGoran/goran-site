import type { Metadata } from "next";
import { SiteNav } from "../components/site-nav";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "Work — Goran Pavlik",
  description: "Selected Revenue Operations and Commercial Intelligence work: forecasting at scale, and the funnel economics behind go-to-market effectiveness.",
};

const cases = [
  { index: "01", eyebrow: "Intelsat · Scale & complexity", title: "From reconciling numbers to reading risk", dek: "A single trusted view of pipeline, forecast, actuals, and plan across a $200M portfolio — integrating Salesforce, finance, and backlog into one source of truth, so forecast reviews became decisions, not arguments.", tags: ["Power BI", "Salesforce", "Forecasting"], metric: "$200M", metricLabel: "Portfolio" },
  { index: "02", eyebrow: "FlexiOffices · Insight & strategy", title: "The 60 / 16 problem", dek: "60% of sales effort was chasing just 16% of revenue. I found the asymmetry in the funnel data and built the ICP and prioritisation case that redirected the team from activity volume to commercial effectiveness.", tags: ["Funnel analysis", "ICP & scoring", "GTM strategy"], metric: "16%", metricLabel: "Of revenue, 60% of effort" },
];

export default function Work() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="max-w-[1200px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-12">
          <p className="mono text-[11px] uppercase tracking-[0.2em] text-[var(--faint)] mb-5">Work</p>
          <h1 className="serif text-[clamp(34px,4.5vw,56px)] leading-[1.04] tracking-[-0.025em] text-[var(--heading)] max-w-[18ch]">Where the thinking shows up.</h1>
          <p className="text-[17px] text-[var(--muted)] leading-[1.7] max-w-[52ch] mt-6">Two engagements that show the range — forecasting and reporting at scale, and the funnel economics behind go-to-market strategy. Detailed write-ups are in progress.</p>
        </section>

        <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-20 md:pb-28">
          <div className="grid md:grid-cols-2 gap-5">
            {cases.map((cs) => (
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
                <h2 className="serif text-[clamp(20px,2.2vw,26px)] mt-5 mb-3 leading-[1.18] text-[var(--heading)]">{cs.title}</h2>
                <p className="text-[15px] text-[var(--muted)] leading-[1.6] mb-6">{cs.dek}</p>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((t) => (
                      <span key={t} className="mono text-[11.5px] text-[var(--muted)] bg-[var(--surface)] border border-[var(--hairline)] rounded-full px-2.5 py-1">{t}</span>
                    ))}
                  </div>
                  <span className="mono text-[10px] uppercase tracking-[0.12em] text-[var(--accent-text)] shrink-0">Detail soon</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}