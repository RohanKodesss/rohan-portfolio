import { projects } from "../content";
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
            <span className="hero-title__name">Rohan</span>
            <span className="hero-title__sub">builds small tools</span>
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

          <p className="hero-lede">
            Rohan, a developer in India. I build AI products and small web tools end to end: the
            model, the interface, the launch.
          </p>

          <button
            type="button"
            className="btn hero-cta"
            onClick={() => document.getElementById("work")?.scrollIntoView({ block: "start" })}
          >
            See the work
          </button>
        </div>
      </div>
    </section>
  );
}
