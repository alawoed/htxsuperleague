import { BarChart3, Building2, Camera, HeartHandshake, MapPinned, Trophy } from "lucide-react";
import { Container, SectionHeader } from "@htx/design-system";
import { InquiryForm } from "../components/InquiryForm";
import { PageHero } from "../components/PageHero";
import { partners } from "../data/partners";

const categories = [
  [Building2, "Commercial partners", "Brand integrations designed around useful matchday and digital experiences."],
  [MapPinned, "Venue partners", "Reliable fields, facilities, lighting, parking, and a shared operating standard."],
  [Camera, "Media partners", "Photography, video, storytelling, and highlights with clear rights and delivery."],
  [HeartHandshake, "Community partners", "Organizations connecting soccer, Houston communities, and measurable local value."],
  [Trophy, "Awards partners", "Credible recognition tied to verified competition and season moments."],
  [BarChart3, "Service partners", "Medical, technology, operations, apparel, and other capabilities that improve delivery."],
];

export function PartnersPage() {
  return (
    <main id="main-content">
      <PageHero eyebrow="Partnerships" title="Help shape Houston's next competition." body="HTX Super League offers launch partners the chance to contribute to a well-run local soccer product from the beginning—with honest measurement and clear fulfillment." aside={<><span>Commercial principle</span><strong>Value before volume</strong><p>No inflated audience claims, unapproved exclusivity, or inventory the league cannot reliably deliver.</p></>} />

      <section className="page-section page-section--chalk">
        <Container>
          <SectionHeader eyebrow="The opportunity" title="Built into the product, not pasted around it." body="The best partnerships improve what teams, players, officials, spectators, and the Houston soccer community actually experience." />
          <div className="icon-card-grid icon-card-grid--three">{categories.map(([Icon, title, body]) => { const PartnerIcon = Icon as typeof Building2; return <article key={String(title)}><PartnerIcon aria-hidden="true" /><h3>{String(title)}</h3><p>{String(body)}</p></article>; })}</div>
        </Container>
      </section>

      <section className="page-section">
        <Container className="editorial-grid">
          <div><span className="eyebrow">Partner inventory</span><h2>Useful moments across the season.</h2></div>
          <div className="inventory-grid">
            <article><h3>Digital</h3><p>Website placements, partner profiles, content support, competition data surfaces, and owned-channel recognition.</p></article>
            <article><h3>Matchday</h3><p>Field and venue presentation, activation space, operational support, and spectator touchpoints subject to venue approval.</p></article>
            <article><h3>Content</h3><p>Stories, photography, video, awards, and recurring editorial formats built around authentic league moments.</p></article>
            <article><h3>Community</h3><p>Access, development, volunteer, and local-impact programs with agreed objectives and evidence.</p></article>
          </div>
        </Container>
      </section>

      <section className="page-section page-section--panel">
        <Container>
          <SectionHeader eyebrow="Current partners" title="The founding network." body="Official TRIMNDS portfolio companies and strategic launch partners supporting the venture's first chapter." />
          <div className="partner-roster__grid" role="list">
            {partners.map((partner) => {
              const logo = <img src={partner.logo} alt={`${partner.name} logo`} width={partner.width} height={partner.height} loading="lazy" />;
              return partner.href ? <a className={`partner-logo partner-logo--${partner.treatment}`} href={partner.href} target="_blank" rel="noreferrer" role="listitem" aria-label={`Visit ${partner.name}`} key={partner.name}>{logo}</a> : <div className={`partner-logo partner-logo--${partner.treatment}`} role="listitem" aria-label={`${partner.name}; production website pending`} key={partner.name}>{logo}</div>;
            })}
          </div>
        </Container>
      </section>

      <section className="interest" id="inquiry">
        <Container className="interest__grid">
          <div className="interest__intro"><span className="eyebrow">Start a conversation</span><h2>Tell us what you can help build.</h2><p>Share the category, organization, and contribution you have in mind. Commercial terms, inventory, and exclusivity are subject to written approval.</p></div>
          <InquiryForm name="partner-inquiry" defaultTopic="Partnership or sponsorship" topics={["Partnership or sponsorship", "Venue", "Media and content", "Community", "Medical or safety", "Technology or operations"]} submitLabel="Start partner conversation" />
        </Container>
      </section>
    </main>
  );
}
