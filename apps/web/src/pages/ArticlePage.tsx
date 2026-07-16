import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button, Container } from "@htx/design-system";
import { articles } from "../data/articles";

export function ArticlePage({ slug }: { slug: string }) {
  const article = articles.find((item) => item.slug === slug);
  if (!article) return null;

  return (
    <main id="main-content">
      <article className="article-page">
        <header className="article-page__header"><Container><a className="back-link" href="/updates"><ArrowLeft aria-hidden="true" size={17} /> All updates</a><span>{article.category}</span><h1>{article.title}</h1><p>{article.summary}</p><small>{article.published}</small></Container></header>
        <figure className="article-page__image"><img src={article.image} alt={article.alt} /></figure>
        <Container className="article-page__body">{article.sections.map(([title, body]) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}<aside><strong>Planning note</strong><p>Competition details in editorial content are explanatory and provisional. Approved registration terms, rules, and policies will control if they differ.</p></aside></Container>
      </article>
      <section className="article-next"><Container><span>Continue exploring</span><h2>See how the competition is being designed.</h2><Button href="/competition" variant="outline">Competition overview <ArrowRight aria-hidden="true" size={18} /></Button></Container></section>
    </main>
  );
}
