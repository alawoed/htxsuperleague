import { FormEvent, useState } from "react";
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
      <div className="form-success" role="status">
        <Check aria-hidden="true" />
        <div>
          <strong>Prototype form confirmed.</strong>
          <p>The production form connection will be added before the public launch.</p>
        </div>
      </div>
    );
  }

  return (
    <form className="interest-form" onSubmit={handleSubmit}>
      <div className="form-field form-field--wide">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="form-field">
        <label htmlFor="role">I am a</label>
        <select id="role" name="role" defaultValue="captain" required>
          <option value="captain">Team captain</option>
          <option value="player">Player</option>
          <option value="referee">Referee</option>
          <option value="partner">Potential partner</option>
          <option value="supporter">Supporter</option>
        </select>
      </div>
      <div className="form-field form-field--wide">
        <label htmlFor="team">Team name or organization <span>(optional)</span></label>
        <input id="team" name="team" type="text" />
      </div>
      <label className="form-consent form-field--wide">
        <input name="updates" type="checkbox" />
        <span>Send me occasional HTX Super League development and launch updates.</span>
      </label>
      <div className="form-field--wide">
        <Button type="submit" size="large">
          Submit interest <ArrowRight aria-hidden="true" size={19} />
        </Button>
        <p className="form-note">Interest does not guarantee team acceptance. No payment is collected.</p>
      </div>
    </form>
  );
}

