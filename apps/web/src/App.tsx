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
import { siteSettings } from "./data/site-settings";

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
    const origin = window.location.origin;
    const canonicalUrl = new URL(window.location.pathname, origin).toString();
    const socialImageUrl = new URL(siteSettings.socialImage, origin).toString();
    const setMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    document.title = title;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", window.location.pathname.startsWith("/updates/") ? "article" : "website");
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", socialImageUrl);
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", socialImageUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
    window.scrollTo(0, 0);
  }, [title, description]);
  return null;
}

function StructuredData() {
  const origin = window.location.origin;
  const path = window.location.pathname;
  const article = path.startsWith("/updates/") ? articles.find((item) => item.slug === path.slice("/updates/".length)) : undefined;
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "SportsOrganization",
      name: siteSettings.name,
      url: origin,
      logo: new URL("/brand/htx-slab-white-on-black.png", origin).toString(),
      description: siteSettings.defaultDescription,
      parentOrganization: { "@type": "Organization", name: "TRIMNDS", url: "https://www.trimnds.com" },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteSettings.name,
      url: origin,
    },
    ...(article ? [{
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.summary,
      image: new URL(article.image, origin).toString(),
      mainEntityOfPage: new URL(path, origin).toString(),
      publisher: { "@type": "SportsOrganization", name: siteSettings.name },
    }] : []),
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function App() {
  const route = resolveRoute(window.location.pathname);
  return <div id="top"><Metadata title={route.title} description={route.description} /><StructuredData /><SiteHeader />{route.page}<SiteFooter /></div>;
}

export default App;
