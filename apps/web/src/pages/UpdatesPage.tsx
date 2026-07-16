import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button, Container, SectionHeader } from "@htx/design-system";
import { PageHero } from "../components/PageHero";
import { articles } from "../data/articles";

export function UpdatesPage() {
  const [subscribed, setSubscribed] = useState(false);
  const subscribe = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubscribed(true); };

  return (
    <main id="main-content">
      <PageHero eyebrow="Updates" title="Follow the league as it takes shape." body="Founding notes, competition explainers, partner announcements, and durable operational updates from HTX Super League." />
      <section className="page-section page-section--chalk">
        <Container>
          <SectionHeader eyebrow="Latest" title="Ideas behind the build." body="Before opening day, the most useful stories make decisions, standards, and expectations visible." />
          <div className="article-grid">{articles.map((article, index) => <article className={index === 0 ? "article-card article-card--feature" : "article-card"} key={article.slug}><div className="article-card__image"><img src={article.image} alt={article.alt} loading={index ? "lazy" : "eager"} /></div><div className="article-card__body"><span>{article.category}</span><h2>{article.title}</h2><p>{article.summary}</p><a href={`/updates/${article.slug}`}>Read the story <ArrowRight aria-hidden="true" size={18} /></a></div></article>)}</div>
        </Container>
      </section>
      <section className="newsletter">
        <Container className="newsletter__grid">
          <div><span className="eyebrow eyebrow--light">League updates</span><h2>Know when the next decision is confirmed.</h2><p>Occasional updates about the founding season, applications, venue, partners, and opening day.</p></div>
          {subscribed ? <div className="newsletter__success" role="status"><Check aria-hidden="true" /><div><strong>You're on the prototype list.</strong><p>Connect the approved email platform and consent record before launch.</p></div></div> : <form className="newsletter__form" onSubmit={subscribe}><label htmlFor="newsletter-email">Email address</label><div><input id="newsletter-email" type="email" autoComplete="email" placeholder="you@example.com" required /><Button type="submit">Get updates <ArrowRight aria-hidden="true" size={18} /></Button></div><p>By subscribing, you agree to receive relevant HTX Super League communications. Unsubscribe at any time.</p></form>}
        </Container>
      </section>
    </main>
  );
}

