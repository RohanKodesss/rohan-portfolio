import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const sectionIds = [...links.map((link) => link.id), "playground"];

export function Nav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onResize = () => {
      if (window.matchMedia("(min-width: 861px)").matches) setOpen(false);
    };

    document.body.classList.add("nav-open");
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`nav${open ? " is-open" : ""}`}>
      <div className="container nav__inner">
        <a className="nav__mark" href="#top" aria-label="Rohan, back to top">
          Rohan<span>.</span>
        </a>

        <nav className="nav__menu" id="nav-menu" aria-label="Primary">
          {links.map((link) => (
            <a
              className={`nav__link${active === link.id ? " is-active" : ""}`}
              href={`#${link.id}`}
              key={link.id}
              aria-current={active === link.id ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <span className="nav__status">
            <span className="status-dot" aria-hidden="true" />
            STATUS: Available for work
          </span>
        </nav>

        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
