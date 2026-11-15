# Rohan, portfolio

A two-page portfolio for a developer in India who builds AI products and small web tools.

The site is a black-and-white "Engineering Workstation" composition: near-black ground, white ink,
three greys, Space Grotesk display type, Inter body text and IBM Plex Mono labels. Sections are
separated by thin rules, project screenshots are monochrome, and the layout reads like a clean
control panel rather than a retro costume. A barely visible grain and scanline layer sits above the
page without blocking clicks.

The home page carries the positioning, two featured projects, a short bio, a compact timeline and
contact. The projects page is the full record: three live products, earlier experiments, a toolkit
panel and a build log. Clicking "Rohan" on either page opens a digital business card with a
downloadable vCard.

## Stack

- Static HTML, CSS and JavaScript. No framework, no build step.
- Google Fonts: Space Grotesk, Inter, IBM Plex Mono.
- One shared `styles.css` and one shared `main.js` across both pages.
- IntersectionObserver is not used. Content is visible immediately; only hover, focus and dialog
  transitions remain.

## Run

Any static file server works. From the repository root:

```bash
python3 -m http.server 4180
```

Open `http://localhost:4180/`. On Vercel, import the repository and serve the root directory with no
build command. There is nothing to compile.

## Pages

```
index.html      Home: hero, selected work, about, experience, contact
projects.html   Full work: three products, experiments, toolkit, build log
styles.css      Tokens, layout, components, responsive rules, accessibility preferences
main.js         Mobile menu, profile modal, vCard download
favicon.svg     Dark favicon
images/         Project screenshots and the profile placeholder
```

## Design tokens

`styles.css` is the single source of truth for colour, type, spacing and motion. The tokens are
commented in the `:root` block. `docs/design.md` records the palette, contrast measurements, type
system, grid and motion rules.

- Ground `#0a0a0a`, raised surface `#101010`, inset surface `#141414`.
- Ink `#f5f5f5`, body `#cfcfcf`, muted `#b0b0b0`, dim `#8a8a8a`.
- Rules `#2c2c2c`, strong rules `#4a4a4a`.
- Display: Space Grotesk 700, tight tracking, 0.98 leading.
- Body: Inter 400, 16px, 1.6 leading.
- Labels: IBM Plex Mono 400/500, uppercase, 0.06em tracking, 13px.
- Square corners everywhere. No shadows except the floating business card.

The nav is sticky at 64px. Sections use a fluid 56 to 92px vertical rhythm and sit on full-width
rules. The container is capped at 1240px with fluid gutters. The work grid is one column below
1024px and a 7/5 asymmetric grid above it.

## Checks

Checked at 1440, 1280, 1024, 768, 390 and 375 pixels with no horizontal overflow. Both pages have
one H1, the nav links resolve, the mobile menu opens and closes, the profile card closes on an
outside click or Escape, the vCard downloads as `rohan.vcf`, and reduced motion removes the
remaining transitions. Body text is 16px and every text colour clears 4.5:1 against its surface.

## Profile card

The wordmark is a button on both pages. It toggles `#profile-modal`, a dark card under the nav with
a short fade and a small rise. It closes on an outside click or Escape. "Save contact" builds a
vCard string in `main.js`, wraps it in a Blob and downloads `rohan.vcf` with no library or backend.
Swap the placeholder portrait in `images/` and the details in `main.js` before launch.

## Credits

- Project screenshots: [inkloom.art](https://inkloom.art),
  [repoquestt.vercel.app](https://repoquestt.vercel.app),
  [lurkr-bsr.vercel.app](https://lurkr-bsr.vercel.app).
- Type: Space Grotesk, Inter and IBM Plex Mono, all under the SIL Open Font License and served
  through Google Fonts.
