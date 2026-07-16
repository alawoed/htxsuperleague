import { useEffect, type ReactNode } from "react";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { AboutPage } from "./pages/AboutPage";
import { ArticlePage } from "./pages/ArticlePage";
import { CompetitionPage } from "./pages/CompetitionPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { LegalPage } from "./pages/LegalPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PartnersPage } from "./pages/PartnersPage";
import { TeamsPage } from "./pages/TeamsPage";
import { UpdatesPage } from "./pages/UpdatesPage";
import { articles } from "./data/articles";

type Route = { page: ReactNode; title: string; description: string; found?: boolean };

const staticRoutes: Record<string, Route> = {
  "/": { page: <HomePage />, title: "HTX Super League | Houston 9v9 Soccer", description: "A new Houston competition for teams that expect organized matchdays, clear standards, and a season worth following." },
  "/competition": { page: <CompetitionPage />, title: "Competition | HTX Super League", description: "Explore the proposed HTX Super League 9v9 format, season structure, matchday standards, and founding-season planning baseline." },
  "/teams": { page: <TeamsPage />, title: "For Teams | HTX Super League", description: "Team and captain information for the proposed HTX Super League founding season in Houston." },
  "/partners": { page: <PartnersPage />, title: "Partners | HTX Super League", description: "Partnership opportunities and official launch partners supporting HTX Super League." },
  "/updates": { page: <UpdatesPage />, title: "Updates | HTX Super League", description: "Founding notes, competition guides, standards, and announcements from HTX Super League." },
  "/about": { page: <AboutPage />, title: "About | HTX Super League", description: "Learn about HTX Super League, its operating values, and its relationship to TRIMNDS." },
  "/contact": { page: <ContactPage />, title: "Contact | HTX Super League", description: "Contact HTX Super League about teams, referees, venues, partnerships, media, accessibility, privacy, or support." },
  "/privacy": { page: <LegalPage kind="privacy" />, title: "Privacy | HTX Super League", description: "Provisional privacy notice for the HTX Super League pre-launch website." },
  "/terms": { page: <LegalPage kind="terms" />, title: "Terms | HTX Super League", description: "Provisional website terms for HTX Super League." },
  "/accessibility": { page: <LegalPage kind="accessibility" />, title: "Accessibility | HTX Super League", description: "The HTX Super League accessibility direction and feedback route." },
};

function resolveRoute(pathname: string): Route {
  const path = pathname !== "/" ? pathname.replace(/\/+$/, "") : pathname;
  if (staticRoutes[path]) return staticRoutes[path];
  if (path.startsWith("/updates/")) {
    const slug = path.slice("/updates/".length);
    const article = articles.find((item) => item.slug === slug);
    if (article) return { page: <ArticlePage slug={slug} />, title: `${article.title} | HTX Super League`, description: article.summary };
  }
  return { page: <NotFoundPage />, title: "Page not found | HTX Super League", description: "The requested HTX Super League page could not be found.", found: false };
}

function Metadata({ title, description }: Pick<Route, "title" | "description">) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    window.scrollTo(0, 0);
  }, [title, description]);
  return null;
}

function App() {
  const route = resolveRoute(window.location.pathname);
  return <div id="top"><Metadata title={route.title} description={route.description} /><SiteHeader />{route.page}<SiteFooter /></div>;
}

export default App;
