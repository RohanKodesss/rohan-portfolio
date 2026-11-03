import { useMemo, useState } from "react";
import { useMedia } from "../hooks";
import { patterns, type PatternId } from "../content";

const THREADS: Array<[string, string]> = [
  ["--c-forest", "--card-thread"],
  ["--c-red", "--card-thread"],
  ["--c-lilac", "--card-thread"],
];

const COLS = 26;
const ROWS = 10;
const CELL = 20;
const X0 = 56;
const Y0 = 156;

function hash(input: string) {
  let value = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    value ^= input.charCodeAt(i);
    value = Math.imul(value, 16777619);
  }
  return Math.abs(value);
}

function isOver(pattern: PatternId, col: number, row: number) {
  if (pattern === "twill") return (col + row * 2) % 4 < 2;
  if (pattern === "basket") return (Math.floor(col / 2) + Math.floor(row / 2)) % 2 === 0;
  return (col + row) % 2 === 0;
}

function WeaveCard({ name, pattern }: { name: string; pattern: PatternId }) {
  const clean = name.trim().slice(0, 16) || "Rohan";
  const upper = clean.toUpperCase();
  const pair = THREADS[hash(clean.toLowerCase() + pattern) % THREADS.length];
  const label = patterns.find((item) => item.id === pattern)?.label ?? "Plain";

  const size = useMemo(() => Math.min(46, 500 / (upper.length * 1.02)), [upper.length]);

  return (
    <svg
      className="weave"
      viewBox="0 0 640 420"
      role="img"
      aria-label={`A woven card for ${clean}, ${label.toLowerCase()} weave, in forest green, deep red and lilac.`}
    >
      <rect width="640" height="420" style={{ fill: "var(--card)" }} />
      <text className="weave__name" x={X0} y={94} fontSize={size}>
        {upper}
      </text>
      <text className="weave__sub" x={X0} y={122}>
        {label} weave, 2026
      </text>

      <g>
        {Array.from({ length: ROWS }).map((_, row) =>
          Array.from({ length: COLS }).map((__, col) => (
            <rect
              key={`${col}-${row}`}
              x={X0 + col * CELL}
              y={Y0 + row * CELL}
              width={CELL - 2}
              height={CELL - 2}
              style={{ fill: `var(${isOver(pattern, col, row) ? pair[0] : pair[1]})` }}
            />
          )),
        )}
      </g>
    </svg>
  );
}

function readParams() {
  if (typeof window === "undefined") {
    return { name: "", pattern: "plain" as PatternId };
  }
  const params = new URLSearchParams(window.location.search);
  const weave = params.get("weave");
  const known = patterns.some((item) => item.id === weave);
  return {
    name: (params.get("name") ?? "").slice(0, 16),
    pattern: (known ? weave : "plain") as PatternId,
  };
}

export function Loom() {
  const initial = useMemo(readParams, []);
  const [name, setName] = useState(initial.name);
  const [pattern, setPattern] = useState<PatternId>(initial.pattern);
  const [status, setStatus] = useState("");
  const reduced = useMedia("(prefers-reduced-motion: reduce)");

  async function copyLink() {
    const url = new URL(window.location.href);
    url.searchParams.set("name", name.trim() || "Rohan");
    url.searchParams.set("weave", pattern);
    url.hash = "loom";
    window.history.replaceState(null, "", url);

    try {
      await navigator.clipboard.writeText(url.toString());
      setStatus("Link copied.");
    } catch {
      setStatus("The link is in the address bar. Copy it from there.");
    }
  }

  return (
    <section className="loom" id="loom">
      <div className="loom-head">
        <h2 className="sec-title" data-reveal>
          Weave a card
        </h2>
        <p className="loom-lede" data-reveal style={{ ["--d" as string]: "80ms" }}>
          A small tool, built into this page. Type a name, pick a weave, and the threads choose
          their colours from the name itself.
        </p>
      </div>

      <div className="loom-body">
        <form
          className="loom-controls"
          onSubmit={(event) => {
            event.preventDefault();
            void copyLink();
          }}
          data-reveal
        >
          <div className="field">
            <label htmlFor="loom-name">Your name</label>
            <input
              id="loom-name"
              name="name"
              type="text"
              value={name}
              maxLength={16}
              autoComplete="given-name"
              placeholder="Rohan"
              onChange={(event) => {
                setName(event.target.value);
                setStatus("");
              }}
            />
          </div>

          <div className="weaves" role="radiogroup" aria-labelledby="weave-label">
            <p className="weaves__label" id="weave-label">
              Weave
            </p>
            <div className="weave-options">
              {patterns.map((item) => (
                <label className="weave-option" key={item.id}>
                  <input
                    type="radio"
                    name="weave"
                    value={item.id}
                    checked={pattern === item.id}
                    onChange={() => {
                      setPattern(item.id);
                      setStatus("");
                    }}
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="btn">
            Copy link
          </button>

          <p className="loom-status" role="status">
            {status}
          </p>
        </form>

        <div className="loom-card" data-reveal style={{ ["--d" as string]: "120ms" }}>
          <WeaveCard name={name} pattern={pattern} />
        </div>
      </div>

      <figure className="loom-film" data-reveal>
        <video
          autoPlay={!reduced}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/jacquard-loom-poster.jpg"
          width={854}
          height={480}
          aria-hidden="true"
        >
          <source src="/media/jacquard-loom.webm" type="video/webm" />
        </video>
        <figcaption>
          A Jacquard loom runs on punched cards: the pattern is set once, then the machine repeats
          it. The first loom you could program. Musée départemental de la Seine-et-Marne. Video by
          Bastenbas, CC BY-SA 4.0.
        </figcaption>
      </figure>
    </section>
  );
}
