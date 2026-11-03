# AGENTS.md — Personal Portfolio

> **Read this file first. Every time.**
> This is the contract for building a personal portfolio that reads like a designed product, not an assembled template.
> The **Taste Skill** (`design-taste-frontend`) is installed in this project. Use it. Do not bypass it.
> The `design.md` file in the repository root is the single source of truth for colour, type, and radius tokens. Read it before writing any styles.

---

## 0. Project Identity

| Field | Value |
|---|---|
| **Project type** | Personal portfolio / scrollytelling one-pager + routed sub-pages |
| **Audience** | Hiring managers, technical recruiters, collaborators, and peers who scan fast and judge taste |
| **Primary goal** | Prove competence and taste through the interface itself. The portfolio is the work sample. |
| **Secondary goal** | Convert a 30-second scan into a résumé download, a project deep-dive, or a contact. |
| **Anti-goal** | Do not look like an AI-generated portfolio. No lurid colour washes, no three equal cards, no “elevate your digital presence” copy. |

---

## 1. The Taste Skill Contract (Non-Negotiable)

The Taste Skill is an **anti-slop frontend skill** for landing pages, portfolios, and redesigns. It forces the agent to read the brief, set design dials, and pass a pre-flight check before handing over. This portfolio project **must** follow its protocol.

### 1.1 Design Read (Before Any Code)

Before opening a component file or writing a single CSS declaration, output a one-line **Design Read** in the conversation:

> *“Reading this as: solo developer portfolio for hiring managers, with an editorial / kinetic-type language, leaning toward native CSS + scroll-driven animation + custom typography.”*

Do not proceed until the Design Read is stated. If the brief is ambiguous, ask **exactly one** clarifying question — never a multi-question dump.

### 1.2 The Three Dials

Set and record these dials in every build session. Baseline is **8 / 6 / 4**; adjust based on the Design Read.

| Dial | Value for this project | Rationale |
|---|---|---|
| **`DESIGN_VARIANCE`** | **7** | Asymmetric layouts, offset grids, and broken alignment read as intentional. Full symmetry (1) is a template tell; 10 is chaos without hierarchy. |
| **`MOTION_INTENSITY`** | **7** | Lenis smooth scroll + GSAP ScrollTrigger reveals. Motion is choreographed, not decorative. Never infinite-loop micro-animations. |
| **`VISUAL_DENSITY`** | **3** | Gallery-like. Generous whitespace. One idea per viewport. The recruiter must breathe. |

### 1.3 Anti-Slop Rules (Absolute Bans)

The following are **banned outright** from this project. If a linter or a reviewer finds one, the build fails.

- ❌ **Em dashes (—)** anywhere: copy, comments, UI. Use a colon, comma, or period.
- ❌ Three identical feature/project cards in a row.
- ❌ **Inter** as the default body face. Use the type system defined in `design.md`.
- ❌ Section-number eyebrows like `01 · about` or `02 · work`.
- ❌ “BETA” labels in the hero.
- ❌ Decorative status dots (green “available” pulses).
- ❌ Filler verbs: *elevate, seamless, unleash, empower, revolutionize.*
- ❌ Fake-perfect metrics: `99.99%`, `10x`, `1000+ users` unless real and sourced.
- ❌ Lurid colour washes, a centred hero over a dark mesh, generic glassmorphism on everything.
- ❌ Duplicate CTAs in the same viewport.
- ❌ A hero that does not fit the viewport or a headline longer than two lines at desktop width.

### 1.4 Pre-Flight Check (Run Before Handover)

Before declaring any section or page “done,” verify all of the following:

- [ ] Zero em dashes in the diff.
- [ ] One accent colour only (from `design.md`). One radius system.
- [ ] CTA contrast ratio ≥ 4.5:1 against its background.
- [ ] Hero fits `100svh`; headline is two lines or fewer at `1440px`.
- [ ] No duplicate CTAs above the fold.
- [ ] Copy self-audit: no filler verbs, no fake metrics, no AI-tell phrases.
- [ ] `prefers-reduced-motion` is respected: Lenis is disabled, reveal animations become opacity-only or instant.
- [ ] Real images or real project thumbnails. No placeholder colour washes.
- [ ] `design.md` tokens are used via CSS custom properties, not hard-coded hex values.

---

## 2. Design Token Source: `design.md`

**`design.md` in the repository root is law.** Do not invent colours, type scales, or radii. Read the file, extract the values, and map them to CSS custom properties in a single `:root` block (or the framework’s token layer).

The agent must:

1. Read `design.md` before generating any style.
2. Emit a `:root` token block that mirrors `design.md` exactly.
3. Use `var(--color-…)`, `var(--font-…)`, `var(--radius-…)` everywhere.
4. If `design.md` is missing a value needed for a component, **stop and ask** — do not invent a colour or font.

Expected token categories in `design.md` (the agent must adapt to whatever is actually there):

```css
/* Example shape. Replace with actual values from design.md */
:root {
  --color-bg: …;
  --color-surface: …;
  --color-text: …;
  --color-text-muted: …;
  --color-accent: …;      /* exactly ONE accent */
  --color-border: …;

  --font-display: …;      /* not Inter */
  --font-body: …;
  --font-mono: …;

  --radius-sm: …;
  --radius-md: …;
  --radius-lg: …;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-fast: 200ms;
  --dur-base: 420ms;
  --dur-slow: 800ms;
}