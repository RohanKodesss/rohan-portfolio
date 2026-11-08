import { earlier, experience, github, toolkit } from "../content";
import { ArrowUpRight } from "./Icons";

export function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="section-label">03. // Experience</p>
          <div className="section-head__row">
            <h2>A short record of the work.</h2>
            <p className="section-intro">
              Not a list of job titles. A list of things that shipped, and the tools I used to get
              them out the door.
            </p>
          </div>
        </div>

        <div className="experience__grid">
          <ol className="timeline">
            {experience.map((item, index) => (
              <li
                className="timeline__item"
                key={`${item.year}-${item.name}`}
                data-reveal
                style={{ ["--d" as string]: `${index * 70}ms` }}
              >
                <p className="timeline__year mono">{item.year}</p>
                <div className="timeline__body">
                  <h3>{item.name}</h3>
                  <p className="timeline__role mono">{item.role}</p>
                  <p className="timeline__detail">{item.detail}</p>
                  <a
                    className="link-arrow"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.linkLabel}
                    <ArrowUpRight />
                  </a>
                </div>
              </li>
            ))}
          </ol>

          <aside className="experience__aside">
            <div className="aside-card card" data-reveal>
              <p className="aside-card__label mono">Toolkit</p>
              <dl className="toolkit">
                {toolkit.map((group) => (
                  <div key={group.label}>
                    <dt className="mono">{group.label}</dt>
                    <dd>{group.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div
              className="aside-card card"
              data-reveal
              style={{ ["--d" as string]: "80ms" }}
            >
              <p className="aside-card__label mono">Earlier work</p>
              <ul className="earlier-list">
                {earlier.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      <span className="earlier-list__name">{item.name}</span>
                      <span className="earlier-list__detail">{item.detail}</span>
                      <ArrowUpRight />
                    </a>
                  </li>
                ))}
              </ul>
              <a className="link-arrow aside-card__link" href={github} target="_blank" rel="noreferrer">
                More on GitHub
                <ArrowUpRight />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
