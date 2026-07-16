import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@htx/design-system";

type InquiryFormProps = {
  name: string;
  defaultTopic?: string;
  topics: string[];
  submitLabel?: string;
};

export function InquiryForm({ name, defaultTopic, topics, submitLabel = "Send inquiry" }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <div className="form-success" role="status"><Check aria-hidden="true" /><div><strong>Inquiry received.</strong><p>This prototype has recorded the interaction locally. Connect the approved form endpoint and service-level response before public launch.</p></div></div>;
  }

  return (
    <form className="interest-form" name={name} onSubmit={submit}>
      <div className="form-field"><label htmlFor={`${name}-name`}>Name</label><input id={`${name}-name`} name="name" autoComplete="name" required /></div>
      <div className="form-field"><label htmlFor={`${name}-email`}>Email</label><input id={`${name}-email`} name="email" type="email" autoComplete="email" required /></div>
      <div className="form-field"><label htmlFor={`${name}-organization`}>Organization <span>Optional</span></label><input id={`${name}-organization`} name="organization" autoComplete="organization" /></div>
      <div className="form-field"><label htmlFor={`${name}-topic`}>Topic</label><select id={`${name}-topic`} name="topic" defaultValue={defaultTopic ?? topics[0]}>{topics.map((topic) => <option key={topic}>{topic}</option>)}</select></div>
      <div className="form-field form-field--wide"><label htmlFor={`${name}-message`}>How can we help?</label><textarea id={`${name}-message`} name="message" rows={6} required /></div>
      <label className="form-consent form-field--wide"><input type="checkbox" required /><span>I consent to HTX Super League using these details to respond to this inquiry.</span></label>
      <div className="form-field--wide"><Button type="submit">{submitLabel} <ArrowRight aria-hidden="true" size={18} /></Button><p className="form-note">Do not include payment information, identity documents, medical records, or emergency information.</p></div>
    </form>
  );
}
