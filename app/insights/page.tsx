import type { Metadata } from "next";
import { SiteNav } from "../components/site-nav";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "Insights — Goran Pavlik",
  description: "Frameworks and essays on Revenue Operations, SaaS metrics, company growth stages, and forecasting under uncertainty.",
};

const pillars = [
  { name: "Stages of company growth", desc: "Product-Market Fit, Go-To-Market Fit, and Growth & Moat — and the commercial problem to solve at each.", articles: ["What product-market fit actually looks like in the numbers", "Go-to-market fit: building a repeatable, profitable motion", "Growth & moat: efficient growth that defends itself"] },
  { name: "SaaS metrics that matter", desc: "The handful of numbers that move decisions — and the ones that quietly mislead.", articles: ["NRR is the number investors weight most — here's why", "CAC payback, and the trap of averages", "LTV:CAC without the fantasy assumptions"] },
  { name: "Forecasting & revenue intelligence", desc: "Treating a forecast as a probability you manage, not a promise you defend.", articles: ["A forecast is a probability, not a promise", "Reading forecast risk from pipeline coverage and win rate"] },
];

export default function Insights() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="max-w-[1200px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-12">
          <p className="mono text-[11px] uppercase tracking-[0.2em] text-[var(--faint)] mb-5">Insights</p>
          <h1 className="serif text-[clamp(34px,4.5vw,56px)] leading-[1.04] tracking-[-0.025em] text-[var(--heading)] max-w-[18ch]">Frameworks for thinking clearly about revenue.</h1>
          <p className="text-[17px] text-[var(--muted)] leading-[1.7] max-w-[54ch] mt-6">Essays and frameworks drawn from the work — organised by theme, not by date. The first pieces are on the way.</p>
        </section>

        <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-20 md:pb-28 space-y-14">
          {pillars.map((p) => (
            <div key={p.name} className="border-t border-[var(--hairline)] pt-10">
              <h2 className="serif text-[clamp(22px,2.6vw,30px)] leading-[1.15] text-[var(--heading)] mb-2">{p.name}</h2>
              <p className="text-[15px] text-[var(--muted)] leading-[1.6] max-w-[56ch] mb-7">{p.desc}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {p.articles.map((a) => (
                  <div key={a} className="rounded-[12px] border border-[var(--hairline)] bg-[var(--panel)] p-6 flex flex-col justify-between min-h-[150px]">
                    <h3 className="serif text-[17px] leading-[1.3] text-[var(--heading)]">{a}</h3>
                    <span className="mono text-[10px] uppercase tracking-[0.12em] text-[var(--accent-text)] bg-[var(--accent-tint)] border border-[var(--hairline)] rounded-full px-2.5 py-1 self-start mt-5">Soon</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}