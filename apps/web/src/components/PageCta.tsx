import type { ReactNode } from "react";
import { Container } from "@htx/design-system";

type PageCtaProps = {
  eyebrow: string;
  title: string;
  body: string;
  children: ReactNode;
};

export function PageCta({ eyebrow, title, body, children }: PageCtaProps) {
  return (
    <section className="page-cta">
      <Container className="page-cta__grid">
        <div>
          <span className="eyebrow eyebrow--volt">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        <div>
          <p>{body}</p>
          <div className="page-cta__actions">{children}</div>
        </div>
      </Container>
    </section>
  );
}
