import { useMemo, useState } from "react";
import { useInView } from "../hooks";
import { patterns, type PatternId } from "../content";

const THREADS: Array<[string, string]> = [
  ["--text-heading", "--accent-gold-soft"],
  ["--accent-gold", "--text-heading"],
  ["--text-body", "--accent-gold-soft"],
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
      aria-label={`A woven card for ${clean}, ${label.toLowerCase()} weave, in burgundy, gold and slate.`}
    >
      <rect width="640" height="420" fill="var(--bg-surface)" />
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
              fill={`var(${isOver(pattern, col, row) ? pair[0] : pair[1]})`}
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
  const { ref: cardRef, inView } = useInView<HTMLDivElement>();

  async function copyLink() {
    const url = new URL(window.location.href);
    url.searchParams.set("name", name.trim() || "Rohan");
    url.searchParams.set("weave", pattern);
    url.hash = "playground";
    window.history.replaceState(null, "", url);

    try {
      await navigator.clipboard.writeText(url.toString());
      setStatus("Link copied.");
    } catch {
      setStatus("The link is in the address bar. Copy it from there.");
    }
  }

  return (
    <section className="section playground" id="playground">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="mono-label">FIELD NOTE / PLAYGROUND</span>
          <div className="section-head__row">
            <h2>A small tool, built <em>into this page</em>.</h2>
            <p className="section-intro">
              Type a name, pick a weave, and the threads choose their colours from the name itself.
              It is a real tool, not a mockup.
            </p>
          </div>
        </div>

        <div className="playground__grid">
          <form
            className="playground__controls card"
            onSubmit={(event) => {
              event.preventDefault();
              void copyLink();
            }}
            data-reveal
          >
            <div className="field">
              <label className="mono" htmlFor="loom-name">
                Your name
              </label>
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
              <p className="weaves__label mono" id="weave-label">
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

            <p className="playground__note">
              The pattern is generated from the name, so the same name always returns the same card.
            </p>
          </form>

          <div
            className="playground__card card"
            ref={cardRef}
            data-reveal
            style={{ ["--d" as string]: "100ms" }}
          >
            {inView ? (
              <WeaveCard name={name} pattern={pattern} />
            ) : (
              <div className="loom-placeholder" aria-hidden="true" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
