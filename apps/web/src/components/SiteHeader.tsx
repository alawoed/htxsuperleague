import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button, Container } from "@htx/design-system";

const navItems = [
  ["Competition", "/competition"],
  ["For teams", "/teams"],
  ["Partners", "/partners"],
  ["Updates", "/updates"],
  ["About", "/about"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="utility-bar">
        <Container className="utility-bar__inner">
          <span>A new Houston competition</span>
          <div className="utility-bar__links" aria-label="Utility navigation">
            <a href="/about">About</a>
            <a href="/partners">Partners</a>
            <a href="/contact">Contact</a>
            <span className="utility-bar__owner">A TRIMNDS venture</span>
          </div>
        </Container>
      </div>
      <header className="site-header">
        <Container className="site-header__inner">
          <a className="site-header__brand" href="/" aria-label="HTX Super League home">
            <span className="site-header__logo-window" aria-hidden="true">
              <img
                src="/brand/htx-slab-white-on-black.png"
                alt=""
                width="1004"
                height="396"
              />
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} aria-current={currentPath === href ? "page" : undefined}>
                {label}
              </a>
            ))}
          </nav>

          <Button className="desktop-cta" href="/teams#interest" size="small">
            Register interest <ArrowUpRight aria-hidden="true" size={17} />
          </Button>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </Container>

        <nav
          id="mobile-navigation"
          className="mobile-nav"
          data-open={menuOpen}
          aria-label="Mobile navigation"
        >
          <Container>
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu} aria-current={currentPath === href ? "page" : undefined}>
                {label}
              </a>
            ))}
            <Button href="/teams#interest" onClick={closeMenu}>
              Register interest <ArrowUpRight aria-hidden="true" size={18} />
            </Button>
          </Container>
        </nav>
      </header>
      <a className="status-strip" href="/teams#interest">
        <Container className="status-strip__inner">
          <span className="status-strip__state">Interest open</span>
          <span>Founding season team and captain interest</span>
          <ArrowUpRight aria-hidden="true" size={17} />
        </Container>
      </a>
    </>
  );
}
