import { useTheme } from "../theme";

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M20 14.4A8.2 8.2 0 0 1 9.6 4a8.2 8.2 0 1 0 10.4 10.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.6v2.3M12 19.1v2.3M2.6 12h2.3M19.1 12h2.3M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" />
      </g>
    </svg>
  );
}

export function Nav() {
  const { theme, toggle } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <header className="nav">
      <a className="nav__mark" href="#top" aria-label="Rohan, back to top">
        Rohan
      </a>
      <nav className="nav__links" aria-label="Sections">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#loom">Loom</a>
        <a
          className="nav__cta"
          href="#contact"
          aria-label="Available for work. Go to contact."
        >
          <span className="status-dot" aria-hidden="true" />
          Available
        </a>
      </nav>
      <button
        type="button"
        className="theme-toggle"
        onClick={toggle}
        aria-label={`Switch to ${next} theme`}
        title={`Switch to ${next} theme`}
      >
        <span className="theme-toggle__icon" aria-hidden="true">
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </span>
        <span className="theme-toggle__label">{next === "dark" ? "Dark" : "Light"}</span>
      </button>
    </header>
  );
}
