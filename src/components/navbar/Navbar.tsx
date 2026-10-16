
import { useState } from "react";
import {
  BiSolidSun,
  BiMoon,
  BiMenu,
  BiX,
} from "react-icons/bi";
import useTheme from "../../theme/useTheme";
import "./style.css";

export default function Navbar() {
  const toggleTheme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleThemeToggle = () => {
    toggleTheme();
    closeMenu();
  };

  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar" id="top">
      <div className="navbar-wrap">
        <a className="navbar-logo" href="#top" onClick={closeMenu}>
          Amresh Maurya<span>.</span>
        </a>

        <div className="navbar-desktop-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}

          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            type="button"
          >
            <BiSolidSun className="sun-icon" />
            <BiMoon className="moon-icon" />
          </button>
        </div>

        <div className="navbar-mobile-actions">
          <button
            className="theme-btn"
            onClick={handleThemeToggle}
            aria-label="Toggle theme"
            type="button"
          >
            <BiSolidSun className="sun-icon" />
            <BiMoon className="moon-icon" />
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            {menuOpen ? <BiX /> : <BiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`navbar-mobile-menu ${menuOpen ? "is-open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
