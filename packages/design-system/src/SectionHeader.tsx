import type { ReactNode } from "react";

export interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  body?: string;
  action?: ReactNode;
}

export function SectionHeader({ eyebrow, title, body, action }: SectionHeaderProps) {
  return (
    <header className="htx-section-header">
      <div>
        <span className="htx-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {(body || action) && (
        <div className="htx-section-header__support">
          {body && <p>{body}</p>}
          {action}
        </div>
      )}
    </header>
  );
}

