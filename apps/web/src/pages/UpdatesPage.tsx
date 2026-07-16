import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button, Container, SectionHeader } from "@htx/design-system";
import { PageHero } from "../components/PageHero";
import { articles } from "../data/articles";
import { stockImageSrcSet } from "../utils/images";

export function UpdatesPage() {
  const [subscribed, setSubscribed] = useState(false);
  const subscribe = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubscribed(true); };

  return (
    <main id="main-content">
      <PageHero eyebrow="Updates" title="Follow the league as it takes shape." body="Founding notes, competition explainers, partner announcements, and durable operational updates from HTX Super League." />
      <section className="page-section page-section--chalk">
        <Container>
          <SectionHeader eyebrow="Latest" title="Ideas behind the build." body="Before opening day, the most useful stories make decisions, standards, and expectations visible." />
          <div className="article-grid">{articles.map((article, index) => <article className={index === 0 ? "article-card article-card--feature" : "article-card"} key={article.slug}><div className="article-card__image"><img src={article.image} srcSet={stockImageSrcSet(article.image)} sizes={index === 0 ? "(max-width: 760px) 100vw, 60vw" : "(max-width: 760px) 100vw, 42vw"} alt={article.alt} width={article.width} height={article.height} loading={index ? "lazy" : "eager"} /></div><div className="article-card__body"><span>{article.category}</span><h2>{article.title}</h2><p>{article.summary}</p><a href={`/updates/${article.slug}`}>Read the story <ArrowRight aria-hidden="true" size={18} /></a></div></article>)}</div>
          <p className="stock-note">Temporary licensed stock photography. These images do not depict an HTX Super League event.</p>
        </Container>
      </section>
      <section className="newsletter">
        <Container className="newsletter__grid">
          <div><span className="eyebrow eyebrow--light">League updates</span><h2>Know when the next decision is confirmed.</h2><p>Occasional updates about the founding season, applications, venue, partners, and opening day.</p></div>
          {subscribed ? <div className="newsletter__success" role="status" tabIndex={-1}><Check aria-hidden="true" /><div><strong>Prototype subscription completed.</strong><p>No email address was transmitted or stored. Connect the approved email platform and consent record before launch.</p></div></div> : <form className="newsletter__form" onSubmit={subscribe}><label htmlFor="newsletter-email">Email address</label><div><input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /><Button type="submit">Preview subscription <ArrowRight aria-hidden="true" size={18} /></Button></div><label className="newsletter__consent"><input name="marketing_consent" type="checkbox" required /><span>I agree to receive relevant HTX Super League development and launch updates.</span></label><p>This prototype does not transmit data. Once connected, every message will include an unsubscribe route.</p></form>}
        </Container>
      </section>
    </main>
  );
}
