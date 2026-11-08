import { github, projects } from "../content";
import { ArrowUpRight } from "./Icons";

export function Work() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="section-label">02. // Projects</p>
          <div className="section-head__row">
            <h2>Three builds, live and in the open.</h2>
            <p className="section-intro">
              Every one shipped alone, from the first sketch to the deploy. The code is public.
            </p>
          </div>
        </div>

        <div className="bento">
          {projects.map((project, index) => (
            <article
              className={`project-card card${index === 0 ? " project-card--featured" : ""}`}
              key={project.id}
              data-reveal
              style={{ ["--d" as string]: `${index * 80}ms` }}
            >
              <a
                className="project-card__media"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name} in a new tab`}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  width={1440}
                  height={900}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </a>

              <div className="project-card__body">
                <p className="project-card__meta mono">
                  <span>{project.kind}</span>
                  <span>{project.year}</span>
                </p>

                <h3>{project.name}</h3>
                <p className="project-card__line">{project.line}</p>

                {index === 0 ? (
                  <dl className="project-card__case">
                    <div>
                      <dt className="mono">Problem</dt>
                      <dd>{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="mono">What I built</dt>
                      <dd>{project.built}</dd>
                    </div>
                    <div>
                      <dt className="mono">Outcome</dt>
                      <dd>{project.outcome}</dd>
                    </div>
                    <div>
                      <dt className="mono">My role</dt>
                      <dd>{project.role}</dd>
                    </div>
                  </dl>
                ) : (
                  <>
                    <p className="project-card__desc">{project.summary}</p>
                    <p className="project-card__outcome">
                      <span className="mono">Outcome</span>
                      {project.outcome}
                    </p>
                  </>
                )}

                <p className="project-card__stack mono">
                  <span>Stack</span>
                  {project.stack}
                </p>

                <div className="project-card__links">
                  <a
                    className="link-arrow"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live site
                    <ArrowUpRight />
                  </a>
                  <a
                    className="link-arrow"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repository
                    <ArrowUpRight />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__footer" data-reveal>
          <p>Three public builds, each shipped solo and open to read.</p>
          <a className="link-arrow" href={github} target="_blank" rel="noreferrer">
            All repositories
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
