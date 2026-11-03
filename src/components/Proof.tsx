import { useEffect, useState } from "react";
import { github, projects } from "../content";

const repoNames = new Set(projects.map((project) => project.repo.split("/").pop()?.toLowerCase()));

export function Proof() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.github.com/users/RohanKodesss/repos?per_page=100", {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((repos: Array<{ name: string; stargazers_count: number }>) => {
        const total = repos
          .filter((repo) => repoNames.has(repo.name.toLowerCase()))
          .reduce((sum, repo) => sum + repo.stargazers_count, 0);
        setStars(total);
      })
      .catch(() => {
        // The fallback copy carries the same point without a live number.
      });

    return () => controller.abort();
  }, []);

  return (
    <section className="proof" aria-labelledby="proof-title">
      <div className="proof-inner">
        <h2 className="proof__line" id="proof-title">
          {stars !== null ? (
            <>
              <span className="proof__number">{stars}</span>{" "}
              <span className="proof__stars">
                GitHub stars across three public builds, each shipped solo.
              </span>
            </>
          ) : (
            <span>
              Three public builds, each shipped solo and open to read, from the first commit to the
              deploy.
            </span>
          )}
        </h2>
        <a className="text-link" href={github} target="_blank" rel="noreferrer">
          Read the code on GitHub
        </a>
      </div>
    </section>
  );
}
