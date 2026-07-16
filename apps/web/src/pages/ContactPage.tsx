import { Accessibility, Building2, Camera, Flag, Handshake, LockKeyhole, Mail, ShieldAlert, Users } from "lucide-react";
import { Container } from "@htx/design-system";
import { InquiryForm } from "../components/InquiryForm";
import { PageHero } from "../components/PageHero";

const routes = [
  [Users, "Teams and registration", "Captain interest, team applications, registration support, and player onboarding."],
  [Flag, "Referees", "Assignment interest, officiating operations, standards, and support."],
  [Building2, "Venue and operations", "Fields, facilities, event delivery, vendors, and matchday logistics."],
  [Handshake, "Partnerships", "Sponsorships, strategic partners, community programs, and services."],
  [Camera, "Media", "Press, photography, video, content collaboration, and usage rights."],
  [Accessibility, "Accessibility", "Website, venue, communication, and participation access questions."],
  [ShieldAlert, "Safety or conduct", "Non-emergency safety concerns, conduct reports, and escalation guidance."],
  [LockKeyhole, "Privacy", "Access, correction, deletion, consent, and other privacy requests."],
];

export function ContactPage() {
  return (
    <main id="main-content">
      <PageHero eyebrow="Contact and help" title="Start with the right conversation." body="Choose the subject that best matches your request. Structured routing helps the league respond clearly as operating roles and service levels are finalized." aside={<><span>General contact</span><strong>hello@htxsuperleague.com</strong><p>Mailboxes and response targets must be operationally verified before public launch.</p></>} />

      <section className="page-section page-section--chalk">
        <Container><div className="contact-route-grid">{routes.map(([Icon, title, body]) => { const RouteIcon = Icon as typeof Mail; return <article key={String(title)}><RouteIcon aria-hidden="true" /><h2>{String(title)}</h2><p>{String(body)}</p></article>; })}</div></Container>
      </section>

      <section className="safety-notice"><Container><ShieldAlert aria-hidden="true" /><div><strong>This website is not an emergency channel.</strong><p>For an immediate threat to life or safety, contact 911 or the appropriate emergency service. Non-emergency reporting instructions and safeguarding contacts must be approved before competition begins.</p></div></Container></section>

      <section className="interest" id="inquiry">
        <Container className="interest__grid"><div className="interest__intro"><span className="eyebrow">Send an inquiry</span><h2>Give us enough context to route it.</h2><p>Do not submit sensitive health, eligibility, identity, payment, or incident evidence through this general prototype form.</p><div className="interest__location"><Mail aria-hidden="true" size={20} /><span>Houston, Texas</span></div></div><InquiryForm name="general-inquiry" topics={["Teams and registration", "Player support", "Referee interest", "Venue and operations", "Partnerships and sponsorship", "Media", "Accessibility", "Safety or conduct concern", "Privacy request", "General inquiry"]} /></Container>
      </section>
    </main>
  );
}
