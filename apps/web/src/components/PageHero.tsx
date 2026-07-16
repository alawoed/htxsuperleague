import type { ReactNode } from "react";
import { Container } from "@htx/design-system";
import { stockImageSrcSet } from "../utils/images";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  aside?: ReactNode;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export function PageHero({ eyebrow, title, body, aside, image, imageAlt = "", imageWidth = 1800, imageHeight = 1200 }: PageHeroProps) {
  return (
    <section className={`page-hero${image ? " page-hero--image" : ""}`}>
      {image ? (
        <div className="page-hero__media" aria-hidden={imageAlt ? undefined : "true"}>
          <img src={image} srcSet={stockImageSrcSet(image)} sizes="100vw" alt={imageAlt} width={imageWidth} height={imageHeight} />
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
      {image ? <p className="page-hero__disclosure">Temporary licensed stock image. Not an HTX Super League event.</p> : null}
    </section>
  );
}
