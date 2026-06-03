import Link from "next/link";
import { Monogram } from "./monogram";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--hairline)] bg-[var(--bg)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <Monogram className="w-9 h-9 text-[14px]" />
            <span className="font-medium text-[15px] text-[var(--heading)]">Goran Pavlik</span>
          </div>
          <p className="serif text-[clamp(20px,2.4vw,26px)] leading-[1.15] text-[var(--heading)] max-w-xs">Making revenue legible.</p>
        </div>
        <div className="flex flex-col gap-2 text-[15px] text-[var(--muted)] md:text-right">
          <a href="mailto:pavlikgoran@yahoo.com" className="hover:text-[var(--heading)] transition-colors">pavlikgoran@yahoo.com</a>
          <a href="https://www.linkedin.com/in/goran-pavlik/" target="_blank" rel="noopener" className="hover:text-[var(--heading)] transition-colors">LinkedIn ↗</a>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 pb-10 mono text-[11px] tracking-[0.04em] text-[var(--faint)] flex flex-wrap justify-between gap-3">
        <span>Revenue Operations · Commercial Intelligence</span>
        <span>© 2026 Goran Pavlik</span>
      </div>
    </footer>
  );
}