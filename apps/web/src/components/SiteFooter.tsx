import { BrandMark, Container } from "@htx/design-system";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">
          <BrandMark className="site-footer__brand" variant="split" tone="light" />
          <div className="site-footer__columns">
            <div>
              <strong>Competition</strong>
              <a href="/competition">Format and standards</a>
              <a href="/teams">For teams</a>
              <a href="/competition#matchday">Matchday</a>
            </div>
            <div>
              <strong>League</strong>
              <a href="/updates">Updates</a>
              <a href="/partners">Partners</a>
              <a href="/about">About</a>
            </div>
            <div>
              <strong>Help and legal</strong>
              <a href="/contact">Contact</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/accessibility">Accessibility</a>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} HTX Super League</span>
          <span>A TRIMNDS venture</span>
          <span>Pre-launch website · competition details remain subject to approval</span>
        </div>
      </Container>
    </footer>
  );
}

