import { ArrowLeft } from "lucide-react";
import { Button, Container } from "@htx/design-system";

export function NotFoundPage() {
  return <main id="main-content" className="not-found"><Container><span>404</span><h1>That page is off the field.</h1><p>The link may be old, or the competition surface may not be active yet.</p><Button href="/" variant="outline-inverse"><ArrowLeft aria-hidden="true" size={18} /> Return home</Button></Container></main>;
}
