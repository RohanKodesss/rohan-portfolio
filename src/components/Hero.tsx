import { email, positioningShort, projects } from "../content";
import { useScrollProgress } from "../hooks";

export function Hero() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const active = Math.min(projects.length - 1, Math.floor(progress * projects.length));
  const current = projects[active];

  return (
    <section className="hero" id="top">
      <div className="hero-track" ref={ref}>
        <div className="hero-stage">
          <h1 className="hero-title">
            <span className="hero-title__name">Rohan</span>{" "}
            <span className="hero-title__sub">builds AI products and small tools</span>
          </h1>

          <div className="hero-media">
            <div className="hero-window">
              <div className="hero-frame" key={current.id}>
                <img
                  src={current.image}
                  alt={current.alt}
                  width={1440}
                  height={810}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            <p className="hero-caption">
              <span>{current.name}, {current.year}.</span> {current.line}
            </p>
          </div>

          <p className="hero-subline">{positioningShort}</p>

          <div className="hero-actions">
            <a className="btn" href="#work">
              See selected work
            </a>
            <a className="hero-secondary" href={`mailto:${email}`}>
              Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
