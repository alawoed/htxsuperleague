import type { HTMLAttributes } from "react";

export interface BrandMarkProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "split" | "stacked";
  tone?: "dark" | "light";
}

export function BrandMark({
  variant = "split",
  tone = "dark",
  className = "",
  ...props
}: BrandMarkProps) {
  return (
    <span
      className={`htx-brand-mark htx-brand-mark--${variant} htx-brand-mark--${tone} ${className}`.trim()}
      aria-label="HTX Super League"
      {...props}
    >
      <span className="htx-brand-mark__htx">HTX</span>
      <span className="htx-brand-mark__rule" aria-hidden="true" />
      <span className="htx-brand-mark__league">
        <span>Super</span>
        <span>League</span>
      </span>
    </span>
  );
}

