import { email } from "../content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <p className="footer__name">Rohan</p>
          <nav className="footer__links" aria-label="Footer">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#playground">Playground</a>
            <a href="#contact">Contact</a>
            <a href={`mailto:${email}`}>Email</a>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>Independent developer, India. Built in 2026.</p>
          <p className="footer__credits">
            Print: Kitagawa Utamaro, A Woman Weaving at a Hand Loom, 1796. The Met, public domain.
            Project screenshots from inkloom.art, repoquestt.vercel.app and lurkr-bsr.vercel.app.
          </p>
        </div>
      </div>
    </footer>
  );
}
