import { email, facts, positioningShort, projects } from "../content";
import { ArrowUpRight } from "./Icons";

export function Hero() {
  const featured = projects[0];

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__head">
          <p className="eyebrow" data-reveal>
            Independent developer / India
          </p>

          <h1 className="hero__title" data-reveal style={{ ["--d" as string]: "60ms" }}>
            Rohan builds AI products and small tools.
          </h1>
        </div>

        <div className="hero__body">
          <div className="hero__copy">
            <p className="hero__lede" data-reveal style={{ ["--d" as string]: "120ms" }}>
              {positioningShort}
            </p>

            <div className="hero__actions" data-reveal style={{ ["--d" as string]: "180ms" }}>
              <a className="btn" href="#projects">
                See selected work
                <ArrowUpRight />
              </a>
              <a className="btn btn--ghost" href={`mailto:${email}`}>
                Email me
              </a>
            </div>

            <p className="hero__status" data-reveal style={{ ["--d" as string]: "240ms" }}>
              <span className="status-dot" aria-hidden="true" />
              STATUS: Available for work
            </p>
          </div>

          <div className="hero__visual" data-reveal style={{ ["--d" as string]: "160ms" }}>
            <a
              className="hero__feature card"
              href={featured.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${featured.name}, ${featured.line} Visit the live site.`}
            >
              <div className="hero__feature-media">
                <img
                  src={featured.image}
                  alt={featured.alt}
                  width={1440}
                  height={900}
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="hero__feature-body">
                <p className="mono hero__feature-meta">
                  Featured / {featured.year}
                  <span>{featured.kind}</span>
                </p>
                <p className="hero__feature-title">{featured.name}</p>
                <p className="hero__feature-line">{featured.line}</p>
              </div>
            </a>
            <p className="hero__caption mono">Inkloom / early access / open source</p>
          </div>
        </div>
      </div>

      <div className="container hero__facts">
        {facts.map((fact) => (
          <div className="hero__fact" key={fact.label}>
            <p className="hero__fact-label mono">{fact.label}</p>
            <p className="hero__fact-value">{fact.value}</p>
          </div>
        ))}
        <a className="hero__scroll mono" href="#about">
          Scroll to read
          <span aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
