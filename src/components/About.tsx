import { earlier, facts, positioning } from "../content";

export function About() {
  return (
    <section className="about" id="about">
      <div className="about-panel">
        <div className="about-copy">
          <h2 className="sec-title" data-reveal>
            About
          </h2>

          <p className="about-position" data-reveal style={{ ["--d" as string]: "80ms" }}>
            {positioning}
          </p>

          <p className="about-statement" data-reveal style={{ ["--d" as string]: "120ms" }}>
            I named my first product after a loom: a frame that holds the threads still while the
            work passes through.
          </p>

          <dl className="facts" data-reveal style={{ ["--d" as string]: "140ms" }}>
            {facts.map((fact) => (
              <div className="fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="earlier" data-reveal style={{ ["--d" as string]: "200ms" }}>
            <h3>Earlier work</h3>
            <ul>
              {earlier.map((item) => (
                <li key={item.name}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    <span>{item.name}</span>
                    <span>{item.detail}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="about-print" data-reveal style={{ ["--d" as string]: "120ms" }}>
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
    </section>
  );
}
