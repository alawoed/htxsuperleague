import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
} from "lucide-react";
import {
  BrandMark,
  Button,
  Container,
  SectionHeader,
} from "@htx/design-system";
import { InterestForm } from "./components/InterestForm";
import { SiteHeader } from "./components/SiteHeader";
import {
  captainBenefits,
  competitionFacts,
  experiencePillars,
  updates,
} from "./data/site-content";

function App() {
  return (
    <div id="top">
      <SiteHeader />

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__media" aria-hidden="true">
            <img
              src="/images/stock/hero-match.jpg"
              alt=""
              width="2000"
              height="1255"
              fetchPriority="high"
            />
          </div>
          <div className="hero__shade" />
          <Container className="hero__content">
            <div className="hero__copy">
              <span className="eyebrow eyebrow--light">Houston 9v9 soccer</span>
              <h1 id="hero-title">
                Built for the teams who <em>show up.</em>
              </h1>
              <p>
                A new competition for teams that expect organized matchdays, clear standards,
                and a season worth following.
              </p>
              <div className="hero__actions">
                <Button href="#interest" size="large">
                  Register team interest <ArrowUpRight aria-hidden="true" size={19} />
                </Button>
                <Button href="#competition" size="large" variant="ghost-inverse">
                  Explore the competition <ArrowDown aria-hidden="true" size={18} />
                </Button>
              </div>
            </div>

            <div className="hero__note">
              <span className="hero__note-label">Founding season</span>
              <strong>Planning now</strong>
              <p>Competition details shown below are the pilot baseline until confirmed.</p>
            </div>
          </Container>
          <p className="photo-disclosure">Temporary licensed stock image. Not an HTX event.</p>
        </section>

        <section className="facts" aria-label="Competition planning baseline">
          <Container>
            <div className="facts__label">
              <span>Planning baseline</span>
              <p>Proposed until founder and venue approvals are complete.</p>
            </div>
            <div className="facts__grid">
              {competitionFacts.map((fact) => (
                <div className="fact" key={fact.label}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="section section--chalk" id="competition">
          <Container>
            <SectionHeader
              eyebrow="The competition"
              title="Serious enough to matter. Accessible enough to enter."
              body="HTX Super League is being designed around the parts of league soccer that teams feel every week: dependability, fair competition, clear information, and a better matchday standard."
            />

            <div className="pillar-grid">
              {experiencePillars.map(({ icon: Icon, title, body }) => (
                <article className="pillar-card" key={title}>
                  <Icon aria-hidden="true" size={25} strokeWidth={1.8} />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="format" aria-labelledby="format-title">
          <Container className="format__grid">
            <div className="format__number" aria-hidden="true">
              9<span>v</span>9
            </div>
            <div className="format__copy">
              <span className="eyebrow eyebrow--volt">The founding format</span>
              <h2 id="format-title">More touches. More space. Every player matters.</h2>
              <p>
                The pilot is centered on organized 9v9 competition: a format with tactical
                depth, manageable rosters, and enough space for quality soccer.
              </p>
              <dl className="format__list">
                <div>
                  <dt>Season</dt>
                  <dd>League phase plus playoffs</dd>
                </div>
                <div>
                  <dt>Roster</dt>
                  <dd>Final limits to be confirmed</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>Houston-area venue in evaluation</dd>
                </div>
              </dl>
              <Button href="#interest" variant="outline-inverse">
                Tell us about your team <ArrowRight aria-hidden="true" size={18} />
              </Button>
            </div>
          </Container>
        </section>

        <section className="section matchday" id="matchday">
          <Container>
            <SectionHeader
              eyebrow="The matchday"
              title="The league is more than the final whistle."
              body="From arrival through the final result, the intended experience is organized, visible, and worth sharing."
              action={<a href="#interest">Follow the build <ArrowUpRight aria-hidden="true" size={17} /></a>}
            />

            <div className="matchday-grid">
              <figure className="matchday-grid__feature">
                <img
                  src="/images/stock/community-match.jpg"
                  alt="Adult players competing in front of a community crowd"
                  width="1800"
                  height="1200"
                  loading="lazy"
                />
                <figcaption>
                  <span>Community</span>
                  <strong>A competition people can belong to.</strong>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="/images/stock/referee.jpg"
                  alt="Soccer referee walking onto a sunlit field"
                  width="1600"
                  height="2361"
                  loading="lazy"
                />
                <figcaption>
                  <span>Standards</span>
                  <strong>Officials set up to succeed.</strong>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="/images/stock/night-goal.jpg"
                  alt="Soccer field and goal under lights at night"
                  width="1800"
                  height="1200"
                  loading="lazy"
                />
                <figcaption>
                  <span>Atmosphere</span>
                  <strong>A weekly rhythm worth following.</strong>
                </figcaption>
              </figure>
            </div>
            <p className="stock-note">Temporary licensed stock photography. These images do not depict an HTX Super League event.</p>
          </Container>
        </section>

        <section className="section captain" id="teams">
          <Container className="captain__grid">
            <div className="captain__image">
              <img
                src="/images/stock/team-huddle.jpg"
                alt="Adult soccer team joining hands before a match"
                width="1600"
                height="1067"
                loading="lazy"
              />
              <div className="captain__image-label">Built with captains, not just for them.</div>
            </div>
            <div className="captain__content">
              <span className="eyebrow">For team captains</span>
              <h2>Less chasing. More leading.</h2>
              <p>
                Captains already carry the team. The league should not add unnecessary admin,
                uncertainty, or last-minute confusion.
              </p>
              <ul className="check-list">
                {captainBenefits.map((benefit) => (
                  <li key={benefit}>
                    <Check aria-hidden="true" size={18} /> {benefit}
                  </li>
                ))}
              </ul>
              <Button href="#interest" variant="outline">
                Register team interest <ArrowRight aria-hidden="true" size={18} />
              </Button>
            </div>
          </Container>
        </section>

        <section className="section updates" id="updates">
          <Container>
            <SectionHeader
              eyebrow="Updates and ideas"
              title="Follow the league as it takes shape."
              body="The first stories will make the product decisions visible: format, venue, standards, captains, partners, and the path to opening day."
            />
            <div className="story-grid">
              {updates.map((story) => (
                <article className="story-card" key={story.title}>
                  <div className="story-card__image">
                    <img src={story.image} alt={story.alt} loading="lazy" />
                  </div>
                  <div className="story-card__content">
                    <span>{story.category}</span>
                    <h3>{story.title}</h3>
                    <p>{story.summary}</p>
                    <a href="#interest" aria-label={`Get updates about: ${story.title}`}>
                      Get updates <ArrowUpRight aria-hidden="true" size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="partner-band" id="partners">
          <Container className="partner-band__grid">
            <div>
              <span className="eyebrow eyebrow--volt">Build Houston's next competition</span>
              <h2>There is room on the founding team.</h2>
            </div>
            <div>
              <p>
                We are developing relationships with venues, referees, media creators,
                community organizations, and commercial partners who value organized local soccer.
              </p>
              <Button href="mailto:partners@htxsuperleague.com" variant="outline-inverse">
                Start a partner conversation <ArrowUpRight aria-hidden="true" size={18} />
              </Button>
            </div>
          </Container>
        </section>

        <section className="interest" id="interest">
          <Container className="interest__grid">
            <div className="interest__intro">
              <span className="eyebrow">Founding season interest</span>
              <h2>Put your team on our radar.</h2>
              <p>
                Tell us who you are and how you want to be involved. This is a demand-validation
                form, not a registration or payment commitment.
              </p>
              <div className="interest__location">
                <MapPin aria-hidden="true" size={20} />
                <span>Houston, Texas</span>
              </div>
            </div>
            <InterestForm />
          </Container>
        </section>

        <section className="about-strip" id="about">
          <Container>
            <p>
              HTX Super League is an independent customer-facing competition brand owned and
              governed through <strong>TRIMNDS</strong>, a venture-building company founded by
              Marcus, Nesta, and David.
            </p>
          </Container>
        </section>
      </main>

      <footer className="site-footer">
        <Container>
          <div className="site-footer__top">
            <BrandMark variant="stacked" tone="light" />
            <div className="site-footer__columns">
              <div>
                <strong>Competition</strong>
                <a href="#competition">Format</a>
                <a href="#teams">For teams</a>
                <a href="#matchday">Matchday</a>
              </div>
              <div>
                <strong>League</strong>
                <a href="#updates">Updates</a>
                <a href="#partners">Partners</a>
                <a href="#about">About</a>
              </div>
              <div>
                <strong>Contact</strong>
                <a href="mailto:hello@htxsuperleague.com">General</a>
                <a href="mailto:partners@htxsuperleague.com">Partnerships</a>
                <a href="#interest">Register interest</a>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom">
            <span>© {new Date().getFullYear()} HTX Super League</span>
            <span>A TRIMNDS venture</span>
            <span>Prototype · policies coming before launch</span>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
