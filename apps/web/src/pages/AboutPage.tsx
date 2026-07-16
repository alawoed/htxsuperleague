import { ArrowRight, Scale, ShieldCheck, Target, UsersRound } from "lucide-react";
import { Button, Container, SectionHeader } from "@htx/design-system";
import { PageCta } from "../components/PageCta";
import { PageHero } from "../components/PageHero";

export function AboutPage() {
  return (
    <main id="main-content">
      <PageHero eyebrow="About HTX" title="Build the competition Houston teams deserve." body="HTX Super League is an independent customer-facing soccer competition created and governed through TRIMNDS, the venture-building company founded by Marcus, Nesta, and David." aside={<><span>Brand architecture</span><strong>HTX first</strong><p>TRIMNDS owns and governs the venture while HTX Super League remains the public league identity.</p></>} />

      <section className="page-section page-section--chalk">
        <Container className="editorial-grid">
          <div><span className="eyebrow">Our purpose</span><h2>Make organized local soccer feel organized.</h2></div>
          <div className="editorial-copy"><p className="lead-copy">The idea is simple: teams should not have to choose between competitive soccer and dependable administration.</p><p>HTX Super League is being developed as a league and tournament platform centered first on 9v9 competition. Its job is to make every layer—from registration and fixtures to officials, discipline, media, and recognition—clearer and more intentional.</p></div>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <SectionHeader eyebrow="Operating values" title="The standard behind the brand." body="These principles guide product and operating decisions while the founding season is validated." />
          <div className="icon-card-grid">
            <article><Target aria-hidden="true" /><h3>Purposeful</h3><p>Every feature, rule, and partnership should solve a real participant or operating need.</p></article>
            <article><Scale aria-hidden="true" /><h3>Fair</h3><p>Competition, eligibility, discipline, and appeals require published standards and consistent authority.</p></article>
            <article><ShieldCheck aria-hidden="true" /><h3>Responsible</h3><p>Safety, privacy, legal review, financial controls, and venue obligations are launch requirements.</p></article>
            <article><UsersRound aria-hidden="true" /><h3>Community-minded</h3><p>The league should create lasting value for Houston teams, officials, partners, and soccer culture.</p></article>
          </div>
        </Container>
      </section>

      <section className="ownership-section">
        <Container className="ownership-section__grid">
          <div><img src="/partners/trimnds-logo.svg" alt="TRIMNDS logo" width="210" height="108" /></div>
          <div><span className="eyebrow">A TRIMNDS venture</span><h2>Independent in market. Accountable in governance.</h2><p>TRIMNDS provides venture governance, shared capability, and founder oversight. HTX Super League has its own customer promise, competition identity, channels, and operating responsibilities.</p><p>The final legal operator, contracting entity, and required public disclosures must be confirmed before paid registration or binding commercial activity.</p></div>
        </Container>
      </section>

      <PageCta eyebrow="Get involved" title="Build the first season with us." body="Teams, referees, venue operators, media creators, community organizations, and partners can help validate the right launch model."><Button href="/contact" variant="outline-inverse">Choose a contact route <ArrowRight aria-hidden="true" size={18} /></Button></PageCta>
    </main>
  );
}
