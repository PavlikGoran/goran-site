export function Monogram({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-full flex items-center justify-center serif text-[var(--heading)] shrink-0 ${className}`}
      style={{ background: "radial-gradient(circle at 35% 30%, #48422F, #241F17)", border: "1.5px solid var(--accent)" }}
    >
      GP
    </div>
  );
}