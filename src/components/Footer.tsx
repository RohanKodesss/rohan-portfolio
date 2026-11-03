import { email } from "../content";

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer-name" aria-hidden="true">
        Rohan
      </p>

      <div className="footer-cta">
        <a className="btn btn--deep" href="#work">
          See selected work
        </a>
        <a className="footer-email" href={`mailto:${email}`}>
          Email me
        </a>
      </div>

      <div className="footer-row">
        <p>Built with React, in India, 2026.</p>
        <p className="footer-credits">
          Print: Kitagawa Utamaro, The Met, public domain. Loom video: Métier à tisser Jacquard 01,
          Bastenbas, CC BY-SA 4.0, via Wikimedia Commons. Project screenshots from inkloom.art,
          repoquestt.vercel.app and lurkr-bsr.vercel.app.
        </p>
      </div>
    </footer>
  );
}
