import Image from "next/image";
import type { Metadata } from "next";
import { SiteNav } from "../components/site-nav";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "About — Goran Pavlik",
  description: "Chess, sports-arbitrage trading, and a decade in Revenue Operations and Commercial Intelligence. The thinking behind the work.",
};

const journey = [
  { org: "Orange", role: "Where the analytical career began — telecom data at scale." },
  { org: "AZA Finance", role: "Fintech: turning messy transactional data into commercial insight." },
  { org: "Intelsat", role: "Forecasting and revenue reporting across a global satellite-communications portfolio." },
  { org: "FlexiOffices", role: "BI and Revenue Operations — funnel economics and go-to-market effectiveness." },
];

export default function About() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="max-w-[1200px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-12">
          <p className="mono text-[11px] uppercase tracking-[0.2em] text-[var(--faint)] mb-5">About</p>
          <h1 className="serif text-[clamp(34px,4.5vw,56px)] leading-[1.04] tracking-[-0.025em] text-[var(--heading)] max-w-[16ch]">The thinking behind the work.</h1>
        </section>

        <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-16 md:pb-24">
          <div className="grid md:grid-cols-[0.8fr_1fr] gap-10 md:gap-16 items-start">
            <div className="relative aspect-[4/5] rounded-[16px] overflow-hidden border border-[var(--hairline)]" style={{ boxShadow: "var(--shadow-card)" }}>
              <Image src="/portrait.jpeg" alt="Goran Pavlik" fill sizes="(max-width: 768px) 100vw, 38vw" className="object-cover object-[center_15%]" priority />
            </div>
            <div className="max-w-[44ch]">
              <p className="text-[17px] leading-[1.75] text-[var(--text)] mb-5">I make revenue legible — turning scattered pipelines, forecasts, and reporting into a clear view of what&apos;s happening, what&apos;s likely next, and where the risk is hiding.</p>
              <p className="text-[16px] leading-[1.78] text-[var(--muted)] mb-5">Long before a Salesforce report or a forecast model, I was learning to make decisions with incomplete information. I started playing chess at seven, became a national under-16 champion at fifteen, and competed across five European and one World Championship. The board teaches a specific discipline: think several moves ahead, weigh the odds, commit, and live with uncertainty.</p>
              <p className="text-[16px] leading-[1.78] text-[var(--muted)] mb-5">I later spent three years running a sports-arbitrage portfolio — a daily exercise in probability, edge, and emotional discipline. Different game, identical skill: act on expected value, not on hope.</p>
              <p className="text-[16px] leading-[1.78] text-[var(--muted)]">Revenue Operations is where that thinking found its commercial home. Forecasting, pipeline health, and revenue intelligence are the same discipline, pointed at a P&amp;L.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--hairline)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-20">
            <figure>
              <div className="relative aspect-[2/1] rounded-[16px] overflow-hidden border border-[var(--hairline)]" style={{ boxShadow: "var(--shadow-card)" }}>
                <Image src="/chess-probability.png" alt="Chess pattern recognition resolving into analytics" fill sizes="(max-width: 768px) 100vw, 1120px" className="object-cover" />
              </div>
              <figcaption className="mono mt-4 text-[11px] tracking-[0.04em] text-[var(--faint)] text-center">Pattern recognition · probability · evaluate · commit — the same discipline, applied to revenue.</figcaption>
            </figure>
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <p className="mono text-[11px] uppercase tracking-[0.2em] text-[var(--faint)] mb-8">The path</p>
          <div className="max-w-[640px]">
            {journey.map((j) => (
              <div key={j.org} className="border-t border-[var(--hairline)] py-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                <div className="serif text-[20px] text-[var(--heading)] sm:w-44 shrink-0">{j.org}</div>
                <p className="text-[15px] text-[var(--muted)] leading-[1.6]">{j.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}