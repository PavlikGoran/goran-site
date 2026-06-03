import Link from "next/link";
import { Monogram } from "./monogram";

export function SiteNav() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 border-b border-[var(--hairline)]"
      style={{ background: "rgba(22,21,18,0.8)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
    >
      <nav className="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Monogram className="w-8 h-8 text-[13px]" />
          <span className="font-medium text-[15px] text-[var(--heading)] tracking-[-0.01em]">Goran Pavlik</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-[14px] text-[var(--muted)]">
          <Link href="/work" className="hover:text-[var(--heading)] transition-colors">Work</Link>
          <Link href="/insights" className="hover:text-[var(--heading)] transition-colors">Insights</Link>
          <Link href="/tools" className="hover:text-[var(--heading)] transition-colors">Tools</Link>
          <Link href="/about" className="hover:text-[var(--heading)] transition-colors">About</Link>
        </div>
        <Link href="/#contact" className="text-[13px] font-medium rounded-[9px] bg-[var(--accent)] text-white px-4 py-2 hover:bg-[var(--accent-hover)] transition-colors">
          Work with me
        </Link>
      </nav>
    </header>
  );
}