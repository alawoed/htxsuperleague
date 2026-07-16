import { ArrowRight, Check, ClipboardCheck, MessagesSquare, Shirt, Users } from "lucide-react";
import { Button, Container, SectionHeader } from "@htx/design-system";
import { InterestForm } from "../components/InterestForm";
import { PageHero } from "../components/PageHero";

const readiness = [
  "A dependable captain and backup team contact",
  "A likely adult roster that can meet weekly commitments",
  "Honest playing-level and league-history information",
  "Ability to meet published deadlines once terms are confirmed",
  "Commitment to conduct, eligibility, waiver, and uniform standards",
  "A willingness to communicate changes early and clearly",
];

export function TeamsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="For teams"
        title="Less chasing. More leading."
        body="Captains already carry the team. HTX Super League should reduce uncertainty, make expectations visible, and give organized teams a competition they can plan around."
        image="/images/stock/team-huddle.jpg"
        imageWidth={1600}
        imageHeight={1067}
        aside={<><span>Interest stage</span><strong>No fee today</strong><p>The form qualifies demand only. It does not reserve a place or authorize payment.</p></>}
      />

      <section className="page-section page-section--chalk">
        <Container>
          <SectionHeader eyebrow="Who should apply" title="Teams prepared to compete and communicate." body="The intended pilot is for established or forming adult teams that value organization, fair play, reliable attendance, and a meaningful weekly standard." />
          <div className="icon-card-grid">
            <article><Users aria-hidden="true" /><h3>Organized roster</h3><p>A realistic player pool and leadership structure—not a complete registration roster yet.</p></article>
            <article><MessagesSquare aria-hidden="true" /><h3>Responsive captain</h3><p>One accountable contact who can relay official information and meet deadlines.</p></article>
            <article><Shirt aria-hidden="true" /><h3>Team identity</h3><p>A distinguishable kit and approved identity before the competition begins.</p></article>
            <article><ClipboardCheck aria-hidden="true" /><h3>Shared standards</h3><p>Players prepared to follow eligibility, waiver, conduct, and facility requirements.</p></article>
          </div>
        </Container>
      </section>

      <section className="page-section">
        <Container className="editorial-grid">
          <div><span className="eyebrow">Captain journey</span><h2>A visible route from first interest to kickoff.</h2></div>
          <div className="step-stack">
            <article><span>Interest</span><h3>Tell us about the team.</h3><p>Share fit, history, likely roster size, preferred nights, and Houston area. No player documents or payment are collected.</p></article>
            <article><span>Qualification</span><h3>Review the confirmed offer.</h3><p>Selected captains receive final format, dates, venue, fees, inclusions, policies, and application requirements.</p></article>
            <article><span>Application</span><h3>Apply with informed consent.</h3><p>The captain completes the approved team application and payment workflow only after the full terms are published.</p></article>
            <article><span>Onboarding</span><h3>Prepare the roster and matchday.</h3><p>Players complete required registration and waivers; captains confirm uniforms, eligibility, and communications.</p></article>
          </div>
        </Container>
      </section>

      <section className="page-section page-section--panel">
        <Container className="editorial-grid">
          <div><span className="eyebrow">Readiness checklist</span><h2>Before submitting interest.</h2><p className="section-intro">You do not need every answer today. You should have a credible plan for each item before a paid application opens.</p></div>
          <ul className="readiness-list">{readiness.map((item) => <li key={item}><Check aria-hidden="true" size={18} /><span>{item}</span></li>)}</ul>
        </Container>
      </section>

      <section className="interest" id="interest">
        <Container className="interest__grid">
          <div className="interest__intro">
            <span className="eyebrow">Team interest</span>
            <h2>Put your team on our radar.</h2>
            <p>We will use this information to understand demand and determine who should receive the confirmed pilot offer. Interest does not guarantee acceptance.</p>
            <Button href="/competition" variant="outline">Review competition plan <ArrowRight aria-hidden="true" size={18} /></Button>
          </div>
          <InterestForm />
        </Container>
      </section>
    </main>
  );
}
