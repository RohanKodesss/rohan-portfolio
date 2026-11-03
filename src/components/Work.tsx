import { projects, github } from "../content";
import { useMedia, useScrollProgress } from "../hooks";

export function Work() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const stacked = useMedia("(max-width: 900px)");
  const reduced = useMedia("(prefers-reduced-motion: reduce)");
  const showAll = stacked || reduced;
  const active = Math.min(projects.length - 1, Math.floor(progress * projects.length));

  return (
    <section className="work" id="work">
      <div
        className="work-track"
        ref={ref}
        style={{ height: `${projects.length * 73}svh` }}
      >
        <div className="work-stage">
          <div className="work-left">
            <div className="work-head">
              <h2 className="sec-title" data-reveal>
                Work
              </h2>
              <p className="work-intro" data-reveal style={{ ["--d" as string]: "90ms" }}>
                Three builds, live and in the open. Every one shipped alone, from the first sketch
                to the deploy.
              </p>
              <a
                className="text-link work-more"
                href={github}
                target="_blank"
                rel="noreferrer"
                data-reveal
                style={{ ["--d" as string]: "160ms" }}
              >
                The rest are on GitHub
              </a>
            </div>

            <ol className="work-index">
              {projects.map((project, index) => (
                <li key={project.id} className={index === active ? "is-active" : undefined}>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    <span className="work-index__name">{project.name}</span>
                    <span className="work-index__kind">{project.kind}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <div className="work-right">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={`work-view work-view--${project.tone} ${
                  index === active ? "is-active" : ""
                }`}
                aria-hidden={!showAll && index !== active}
              >
                <header className="work-view__head">
                  <h3 className="work-view__name">{project.name}</h3>
                  <p className="work-view__meta">
                    {project.kind}, {project.year}
                  </p>
                </header>

                <div className="work-view__body">
                  <figure className="work-mount">
                    <img
                      src={project.image}
                      alt={project.alt}
                      width={1440}
                      height={900}
                      loading="eager"
                      decoding="async"
                    />
                  </figure>

                  <div className="work-view__case">
                    <p className="work-view__line">{project.line}</p>

                    <dl className="case">
                      <div>
                        <dt>Problem</dt>
                        <dd>{project.problem}</dd>
                      </div>
                      <div>
                        <dt>What I built</dt>
                        <dd>{project.built}</dd>
                      </div>
                      <div>
                        <dt>Outcome</dt>
                        <dd>{project.outcome}</dd>
                      </div>
                      <div>
                        <dt>My role</dt>
                        <dd>{project.role}</dd>
                      </div>
                    </dl>

                    <p className="work-stack">
                      <span>Stack:</span> {project.stack}
                    </p>

                    <div className="work-links">
                      <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                        Live: {project.linkLabel}
                      </a>
                      <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">
                        Repo
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
