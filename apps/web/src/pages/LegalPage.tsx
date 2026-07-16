import { Container } from "@htx/design-system";

const legalPages = {
  privacy: {
    eyebrow: "Privacy notice",
    title: "Privacy, explained before collection grows.",
    intro: "This provisional notice describes the limited information collected by the pre-launch website. It must be reviewed against the final operating entity, vendors, analytics, forms, and applicable law before launch.",
    sections: [
      ["Information we expect to collect", "Contact details, team or organization information, inquiry content, communication consent, basic website diagnostics, and campaign attribution. The interest forms should not collect government ID, payment data, medical records, emergency contacts, player eligibility evidence, or complete rosters."],
      ["How information is used", "To respond to inquiries, validate demand, evaluate team and partner fit, communicate relevant venture updates, improve the website, maintain security, and prepare approved launch operations."],
      ["Sharing and service providers", "Information may be processed by approved hosting, form, email, analytics, security, and operational providers under appropriate terms. HTX Super League should not sell personal information."],
      ["Retention and choices", "Retention periods, consent records, unsubscribe handling, access, correction, and deletion workflows must be defined before live collection begins. Requests should use the Privacy route on the Contact page."],
      ["Children and sensitive information", "The proposed competition is adult-focused. The pre-launch website is not intended to collect information from children or sensitive participant records."],
    ],
  },
  terms: {
    eyebrow: "Website terms",
    title: "Clear limits for a pre-launch website.",
    intro: "These provisional website terms are informational and are not the registration agreement, competition rules, waiver, refund policy, or participant code of conduct.",
    sections: [
      ["Pre-launch information", "Dates, venue, fees, team capacity, format details, benefits, and other competition information may be planning assumptions unless explicitly identified as confirmed. The venture may change or withdraw proposed details."],
      ["Interest is not acceptance", "Submitting a team, player, referee, venue, media, or partner inquiry does not create a contract, reserve a place, guarantee acceptance, or authorize a payment."],
      ["Website use", "Do not misuse the site, interfere with security, submit unlawful or harmful content, impersonate another person, or attempt to access systems or information without authorization."],
      ["Brand and content", "HTX Super League names, marks, layouts, copy, and original media may be protected. Partner marks remain the property of their respective owners and are displayed with approval for the stated relationship."],
      ["Final legal framework", "The operating entity, governing law, disclaimers, dispute terms, intellectual-property provisions, and contact details require legal approval before public launch or binding transactions."],
    ],
  },
  accessibility: {
    eyebrow: "Accessibility",
    title: "A competition people can access and understand.",
    intro: "HTX Super League intends to make its digital information and participant experience usable across abilities, devices, and access needs. This statement records the current direction and the work still required.",
    sections: [
      ["Digital standard", "The website is designed around semantic structure, keyboard access, visible focus, readable contrast, responsive layouts, reduced-motion support, descriptive labels, and meaningful alternative text."],
      ["Known pre-launch work", "Complete automated and manual WCAG review, screen-reader testing, form-endpoint error testing, content review, caption and transcript workflows, and third-party vendor assessment remain required before launch."],
      ["Venue and participation", "Physical access, accessible parking and routes, restroom information, spectator accommodations, communication support, and reasonable participation processes depend on the selected venue and final operating policies."],
      ["Request help or report a barrier", "Use the Accessibility topic on the Contact page and describe the page, task, format, or accommodation involved. Do not include unnecessary medical details."],
      ["Ongoing improvement", "Accessibility should be reviewed at every release, after material content or vendor changes, and when feedback identifies a barrier."],
    ],
  },
} as const;

export type LegalPageKind = keyof typeof legalPages;

export function LegalPage({ kind }: { kind: LegalPageKind }) {
  const page = legalPages[kind];
  return (
    <main id="main-content" className="legal-page">
      <header className="legal-page__header"><Container><span className="eyebrow eyebrow--light">{page.eyebrow}</span><h1>{page.title}</h1><p>{page.intro}</p><small>Provisional · last updated July 15, 2026</small></Container></header>
      <Container className="legal-page__layout"><aside><strong>On this page</strong>{page.sections.map(([title]) => <a href={`#${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} key={title}>{title}</a>)}<a href="/contact">Contact and requests</a></aside><article>{page.sections.map(([title, body]) => <section id={title.toLowerCase().replace(/[^a-z0-9]+/g, "-")} key={title}><h2>{title}</h2><p>{body}</p></section>)}<div className="legal-callout"><strong>Not final legal advice or participant terms</strong><p>This page is a product and policy draft. Counsel and the approved operating entity must review it before reliance or public launch.</p></div></article></Container>
    </main>
  );
}

