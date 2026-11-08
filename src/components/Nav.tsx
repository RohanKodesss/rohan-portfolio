import { useEffect, useRef, useState } from "react";
import { useActiveSection } from "../hooks";
import {
  email,
  github,
  instagram,
  linkedin,
  phone,
  profileBio,
  profileRole,
} from "../content";
import { GitHub, Instagram, LinkedIn, Mail, Phone } from "./Icons";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const sectionIds = [...links.map((link) => link.id), "playground"];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const markRef = useRef<HTMLButtonElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
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

  // Digital business card. pointerdown instead of click so the same tap that
  // opens the card doesn't immediately count as an outside click.
  useEffect(() => {
    if (!profileOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (cardRef.current?.contains(target) || markRef.current?.contains(target)) return;
      setProfileOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProfileOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [profileOpen]);

  const toggleMenu = () => {
    setOpen((current) => !current);
    setProfileOpen(false);
  };

  return (
    <header className={`nav${open ? " is-open" : ""}`}>
      <div className="container nav__inner">
        <button
          type="button"
          className="nav__mark"
          ref={markRef}
          aria-expanded={profileOpen}
          aria-controls="profile-card"
          aria-haspopup="dialog"
          aria-label={profileOpen ? "Rohan, close profile card" : "Rohan, open profile card"}
          onClick={() => {
            setProfileOpen((current) => !current);
            setOpen(false);
          }}
        >
          Rohan<span>.</span>
        </button>

        <nav className="nav__menu" id="nav-menu" aria-label="Primary">
          {links.map((link) => (
            <a
              className={`nav__link${active === link.id ? " is-active" : ""}`}
              href={`#${link.id}`}
              key={link.id}
              aria-current={active === link.id ? "true" : undefined}
              onClick={() => {
                setOpen(false);
                setProfileOpen(false);
              }}
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
          onClick={toggleMenu}
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

        {/* The one surface allowed a shadow. It should feel dropped, not floated. */}
        <div
          id="profile-card"
          className={`profile-card${profileOpen ? " show" : ""}`}
          ref={cardRef}
          role="dialog"
          aria-label="Rohan, independent developer"
          aria-hidden={!profileOpen}
        >
          <div className="profile-card__top">
            <img
              className="profile-card__photo"
              src="/images/profile-placeholder.svg"
              alt=""
              width={88}
              height={88}
            />
            <div>
              <p className="profile-card__name">Rohan</p>
              <p className="profile-card__role mono">{profileRole}</p>
              <p className="profile-card__bio">{profileBio}</p>
            </div>
          </div>

          <div className="profile-card__bottom">
            <div className="profile-card__socials">
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitHub />
              </a>
              <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedIn />
              </a>
              <a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram />
              </a>
            </div>

            <div className="profile-card__contact">
              <a href={`mailto:${email}`}>
                <Mail />
                Email me
              </a>
              <a href={`tel:${phone}`}>
                <Phone />
                Call me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
