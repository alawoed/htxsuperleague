import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@htx/design-system";

export function InterestForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" tabIndex={-1}>
        <Check aria-hidden="true" />
        <div>
          <strong>Prototype form completed.</strong>
          <p>No information was transmitted or stored. Once the approved form service is connected, captains will receive an emailed copy and a response-time expectation after submission.</p>
        </div>
      </div>
    );
  }

  return (
    <form className="interest-form" name="team-interest" onSubmit={handleSubmit} aria-describedby="team-interest-note">
      <div className="form-field">
        <label htmlFor="interest-name">Captain name</label>
        <input id="interest-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="form-field">
        <label htmlFor="interest-email">Email</label>
        <input id="interest-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="form-field">
        <label htmlFor="interest-phone">Mobile number</label>
        <input id="interest-phone" name="phone" type="tel" autoComplete="tel" required />
      </div>
      <div className="form-field">
        <label htmlFor="interest-team">Team name <span>Optional if still forming</span></label>
        <input id="interest-team" name="team" type="text" autoComplete="organization" />
      </div>
      <div className="form-field">
        <label htmlFor="interest-group">Preferred participant group</label>
        <select id="interest-group" name="participant_group" defaultValue="open" required>
          <option value="open">Open / best-fit division</option>
          <option value="mens">Men's division</option>
          <option value="womens">Women's division</option>
          <option value="coed">Coed division</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="interest-level">Current playing level</label>
        <select id="interest-level" name="playing_level" defaultValue="competitive-recreational" required>
          <option value="competitive-recreational">Competitive recreational</option>
          <option value="serious-amateur">Serious amateur</option>
          <option value="recreational">Recreational</option>
          <option value="former-college-semi-pro">Former college / semi-professional mix</option>
          <option value="unsure">Not sure</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="interest-roster">Likely roster size</label>
        <input id="interest-roster" name="likely_roster_size" type="number" min="9" max="30" inputMode="numeric" required />
      </div>
      <div className="form-field">
        <label htmlFor="interest-nights">Preferred match nights</label>
        <input id="interest-nights" name="preferred_nights" type="text" placeholder="Example: Tuesday or Thursday" required />
      </div>
      <div className="form-field form-field--wide">
        <label htmlFor="interest-area">Preferred Houston area</label>
        <input id="interest-area" name="preferred_area" type="text" placeholder="Example: central, southwest, north" required />
      </div>
      <div className="form-field form-field--wide">
        <label htmlFor="interest-history">Team history and current leagues <span>Keep it brief</span></label>
        <textarea id="interest-history" name="league_history" rows={5} required />
      </div>
      <label className="form-consent form-field--wide">
        <input name="contact_consent" type="checkbox" required />
        <span>I consent to HTX Super League using these details to evaluate interest and contact me about the founding competition.</span>
      </label>
      <label className="form-consent form-field--wide">
        <input name="marketing_consent" type="checkbox" />
        <span>Send me occasional HTX Super League development and launch updates.</span>
      </label>
      <div className="form-field--wide">
        <Button type="submit" size="large">
          Complete prototype interest <ArrowRight aria-hidden="true" size={19} />
        </Button>
        <p className="form-note" id="team-interest-note">This prototype does not transmit data. Interest does not guarantee acceptance, and no payment is collected.</p>
      </div>
    </form>
  );
}
