import { ReactNode } from "react";

type Props = {
  label: string;
  value: string;
  sub?: string;
  className?: string;
  icon?: ReactNode;
};

/**
 * Small data card used as the repeating visual signature across the site.
 * Floats and overlaps other elements to break rigid grids.
 */
export function FloatingCard({ label, value, sub, className = "", icon }: Props) {
  return (
    <div
      className={`inline-flex items-start gap-3 rounded-2xl bg-cream border border-line shadow-lg shadow-forest/5 px-4 py-3 ${className}`}
    >
      {icon && (
        <div className="w-9 h-9 rounded-lg bg-forest/10 text-forest flex items-center justify-center shrink-0">
          {icon}
        </div>
      )}
      <div className="flex flex-col min-w-0">
        <span className="text-[10px] uppercase tracking-widest text-muted">
          {label}
        </span>
        <span className="font-serif text-xl text-ink leading-tight">{value}</span>
        {sub && <span className="text-xs text-muted mt-0.5">{sub}</span>}
      </div>
    </div>
  );
}
