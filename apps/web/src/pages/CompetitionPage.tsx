import { ArrowRight, Check, Clock3, MapPin, ShieldCheck, Trophy } from "lucide-react";
import { Button, Container, SectionHeader } from "@htx/design-system";
import { PageCta } from "../components/PageCta";
import { PageHero } from "../components/PageHero";

const seasonFlow = [
  ["Team interest", "Captains share team fit, history, likely roster, and availability."],
  ["Founder review", "The league evaluates demand, competitive balance, and venue capacity."],
  ["Applications", "Approved details, fees, rules, dates, and acceptance criteria are published."],
  ["League phase", "A proposed eight-team competition creates a dependable weekly rhythm."],
  ["Playoffs", "Qualification, tiebreakers, and awards are confirmed before registration opens."],
];

const faqs = [
  ["Is the first season confirmed?", "No. The founding season is in validation. Venue, dates, fees, roster limits, and final rules must be approved before paid registration opens."],
  ["What level is the league for?", "The intended standard is competitive adult soccer for organized teams that can meet weekly attendance, conduct, roster, and payment expectations. Final division criteria remain under review."],
  ["Why 9v9?", "It supports tactical soccer with more involvement per player, manageable roster sizes, and a field footprint that can make high-quality competition more accessible."],
  ["What will team fees include?", "The intended bundle includes scheduled field time, assigned officials, league administration, standings and results, basic awards, and matchday operations. Only the final registration offer will be binding."],
  ["Where will matches be played?", "A Houston-area venue is being evaluated. No venue should be treated as confirmed until a signed agreement and operating review are complete."],
];

export function CompetitionPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="The competition"
        title="A weekly standard teams can trust."
        body="HTX Super League is being built around organized 9v9 soccer, dependable operations, fair competition, and matchdays worth following."
        image="/images/stock/community-match.jpg"
        aside={<><span>Planning baseline</span><strong>9v9 · Houston</strong><p>League phase plus playoffs. Final format subject to founder, venue, and risk approval.</p></>}
      />

      <section className="page-section page-section--chalk">
        <Container>
          <SectionHeader eyebrow="Competition fit" title="Competitive by design. Clear about what is still proposed." body="The pilot should reward prepared teams without pretending unresolved operating details are final. Every confirmed commitment will be published before money is collected." />
          <div className="metric-grid">
            <article><strong>9v9</strong><span>Founding format</span><p>More touches, more space, and meaningful roles across the field.</p></article>
            <article><strong>8</strong><span>Proposed team cap</span><p>A focused pilot sized for reliable delivery and competitive balance.</p></article>
            <article><strong>18+</strong><span>Proposed segment</span><p>Adult participation, subject to eligibility and insurance approval.</p></article>
            <article><strong>HTX</strong><span>Houston area</span><p>A venue-led footprint before any broader geographic expansion.</p></article>
          </div>
        </Container>
      </section>

      <section className="page-section" id="format">
        <Container className="editorial-grid">
          <div>
            <span className="eyebrow">Why 9v9</span>
            <h2>Enough structure for serious soccer. Enough space to express it.</h2>
          </div>
          <div className="editorial-copy">
            <p>Small-sided competition should not feel improvised. The intended product combines appropriate field dimensions, qualified officials, published rules, clear scheduling, and visible results.</p>
            <ul className="feature-list">
              <li><Check size={18} aria-hidden="true" /> Tactical depth without an oversized roster burden</li>
              <li><Check size={18} aria-hidden="true" /> Centralized fixtures, updates, results, and standings</li>
              <li><Check size={18} aria-hidden="true" /> Defined conduct, discipline, and escalation processes</li>
              <li><Check size={18} aria-hidden="true" /> A repeatable matchday presentation standard</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="page-section page-section--ink" id="season">
        <Container>
          <SectionHeader eyebrow="Season structure" title="From interest to opening night." body="This sequence is the operating path, not a confirmed calendar. Dates will be published only after venue capacity and launch gates are approved." />
          <ol className="process-grid">
            {seasonFlow.map(([title, body]) => <li key={title}><h3>{title}</h3><p>{body}</p></li>)}
          </ol>
        </Container>
      </section>

      <section className="page-section" id="matchday">
        <Container>
          <SectionHeader eyebrow="Operating standard" title="The details around the game matter." body="The pilot standard is being designed for teams, officials, venue partners, and spectators—not only the final score." />
          <div className="icon-card-grid">
            <article><Clock3 aria-hidden="true" /><h3>Predictable timing</h3><p>Published kickoffs, arrival expectations, and timely change notices.</p></article>
            <article><ShieldCheck aria-hidden="true" /><h3>Clear authority</h3><p>Named matchday roles, approved rules, and visible incident escalation.</p></article>
            <article><MapPin aria-hidden="true" /><h3>Venue clarity</h3><p>Field, parking, access, weather, and facility information in one place.</p></article>
            <article><Trophy aria-hidden="true" /><h3>Recognition</h3><p>Standings, playoffs, awards, and media tied to verified competition data.</p></article>
          </div>
        </Container>
      </section>

      <section className="page-section page-section--panel">
        <Container className="faq-layout">
          <div><span className="eyebrow">Questions</span><h2>What teams need to know now.</h2></div>
          <div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
        </Container>
      </section>

      <PageCta eyebrow="Founding season" title="Think your team fits?" body="Share your interest now. This helps validate demand and does not create a registration, acceptance, or payment commitment.">
        <Button href="/teams#interest" variant="outline-inverse">View team information <ArrowRight aria-hidden="true" size={18} /></Button>
      </PageCta>
    </main>
  );
}
