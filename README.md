# Rohan, portfolio

A two-page portfolio for a developer in India who builds AI products and small web tools.

The site is a dark "Modern Tech" composition: near-black ground, one surface step, Fraunces display
type, Inter body text, JetBrains Mono labels, violet action and cyan detail. The home page carries the
positioning, a short bio, two featured projects, a compact timeline and contact. The projects page is
the full 12-column bento with three live products, earlier experiments, a toolkit card and a terminal
that ends on an unfinished line. Clicking "Rohan" on either page opens a digital business card with a
downloadable vCard.

## Stack

- Static HTML, CSS and JavaScript. No framework, no build step.
- Google Fonts: Fraunces, Inter, JetBrains Mono.
- IntersectionObserver for scroll reveals. Native smooth scroll.
- One shared `styles.css` and one shared `main.js` across both pages.

## Run

Any static file server works. From the repository root:

```bash
python3 -m http.server 4180
```

Open `http://localhost:4180/`. On Vercel, import the repository and serve the root directory with no
build command. There is nothing to compile.

## Pages

```
index.html      Home: hero, about, two featured projects, experience, contact
projects.html   Full work: three products, experiments, toolkit, terminal
styles.css      Tokens, layout, components, responsive rules, reduced motion
main.js         Mobile menu, profile modal, vCard download, scroll reveals
favicon.svg     Dark favicon
images/         Project screenshots and the profile placeholder
```

## Design tokens

`styles.css` is the single source of truth for colour, type, spacing, radius and motion. The tokens
are commented in the `:root` block. `docs/design.md` records the palette, contrast measurements, type
system, grid and motion rules.

The nav is fixed at 76px with an 80% near-black glass and a 16px blur. Sections use
`padding: 120px 0` and `scroll-margin-top: 100px` so the nav never covers a heading. The container is
capped at 1100px with 24px gutters. The bento is one column below 768px and a 12-column grid above it.

## Checks

The site has been checked at 1440, 1100, 900, 768, 767, 480, 390 and 320 pixels with no horizontal
overflow. Both pages have one H1, the nav links resolve, the mobile menu opens and closes, the profile
card closes on an outside click or Escape, the vCard downloads as `rohan.vcf`, all reveals fire, and
reduced motion shows the content without travel.

## Profile card

The wordmark is a button on both pages. It toggles `#profile-modal`, a dark card under the nav with a
scale-and-fade transition. It closes on an outside click or Escape. "Save contact" builds a vCard
string in `main.js`, wraps it in a Blob and downloads `rohan.vcf` with no library or backend. Swap the
placeholder portrait in `images/` and the details in `main.js` before launch.

## Credits

- Project screenshots: [inkloom.art](https://inkloom.art),
  [repoquestt.vercel.app](https://repoquestt.vercel.app),
  [lurkr-bsr.vercel.app](https://lurkr-bsr.vercel.app).
- Type: Fraunces, Inter and JetBrains Mono, all under the SIL Open Font License and served through
  Google Fonts.
