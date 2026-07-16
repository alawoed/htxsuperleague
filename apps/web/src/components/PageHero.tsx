import type { ReactNode } from "react";
import { Container } from "@htx/design-system";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  aside?: ReactNode;
  image?: string;
  imageAlt?: string;
};

export function PageHero({ eyebrow, title, body, aside, image, imageAlt = "" }: PageHeroProps) {
  return (
    <section className={`page-hero${image ? " page-hero--image" : ""}`}>
      {image ? (
        <div className="page-hero__media" aria-hidden={imageAlt ? undefined : "true"}>
          <img src={image} alt={imageAlt} width="1800" height="1200" />
        </div>
      ) : null}
      <Container className="page-hero__inner">
        <div className="page-hero__copy">
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
        {aside ? <div className="page-hero__aside">{aside}</div> : null}
      </Container>
    </section>
  );
}

