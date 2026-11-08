import { facts, positioning } from "../content";

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="mono-label">01. // ABOUT</span>
          <div className="section-head__row">
            <h2>I take a <em>fuzzy idea</em> to a working v1.</h2>
            <p className="section-intro">
              The short version: I build the model, the interface and the launch, and I ship alone.
            </p>
          </div>
        </div>

        <div className="about__grid">
          <div className="about__copy">
            <p className="about__position" data-reveal>
              {positioning}
            </p>

            <blockquote className="about__quote" data-reveal style={{ ["--d" as string]: "80ms" }}>
              I named my first product after a loom: a frame that holds the threads still while the
              work passes through.
            </blockquote>

            <p className="about__body" data-reveal style={{ ["--d" as string]: "120ms" }}>
              I work alone, end to end. One person can keep the model, the interface and the deploy
              in the same head, which is usually faster than handing a fuzzy idea between three
              people. The constraint is the point.
            </p>

            <dl className="facts" data-reveal style={{ ["--d" as string]: "160ms" }}>
              {facts.map((fact) => (
                <div className="fact" key={fact.label}>
                  <dt className="mono">{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="about__print card" data-reveal style={{ ["--d" as string]: "100ms" }}>
            <img
              src="/images/loom-print-1400.jpg"
              alt="A woodblock print of a woman seated at a hand loom, weaving a pale cloth."
              width={1400}
              height={2059}
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              Kitagawa Utamaro, A Woman Weaving at a Hand Loom, 1796. The Met, public domain.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
