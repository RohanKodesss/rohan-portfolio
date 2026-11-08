# Rohan, portfolio

A single-page portfolio for a developer in India who builds AI products and small web tools.

The page is a flat, light "digital editorial" composition: ice-blue ground, white surfaces, burgundy
Fraunces display type and one muted-gold accent. It is a single scroll with four main sections
(About, Projects, Experience, Contact) plus a small interactive weave card in a field-note section.
The work is shown as a bento grid: Inkloom as the large featured case study on the left, RepoQuest
and Lurkr stacked on the right.

## Stack

- React 19 with TypeScript
- Vite
- Plain CSS custom properties, native smooth scroll and IntersectionObserver
- Google Fonts: Fraunces, Inter, JetBrains Mono
- No animation library, no UI framework, no texture, no gradient

## Run

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run preview` serves the production build at `http://localhost:4173/`.

## Design tokens

`src/styles.css` is the single source of truth for colour, type, spacing, radius and motion. The
tokens are commented in the `:root` block. `docs/design.md` records the palette, contrast
measurements, type system, grid and motion rules.

The nav is fixed at 76px with a 12px backdrop blur. Sections use `padding: 120px 0` and
`scroll-margin-top: 100px` so the nav never covers a heading. The container is capped at 1100px.

## Checks

```bash
npm run lint
```

The design-taste inspector is in `.agents/skills/design-taste-frontend/scripts/inspect.mjs`. It needs
a Chrome or Chromium executable. On this machine:

```bash
CHROME_PATH="/Users/naveenkumar/Library/Caches/ms-playwright/chromium-1248/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing" \
  node .agents/skills/design-taste-frontend/scripts/inspect.mjs "http://localhost:4173/"
```

The page has been checked at 1440, 1024, 901, 860, 768 and 390 pixels, with keyboard-only navigation,
reduced motion, and JavaScript disabled. The mobile menu closes on Escape and on a link click, locks
the body scroll while open, and has a solid ice-blue panel so the hero never shows through the links.

## Structure

```
src/
  App.tsx          page composition and reveal observer
  content.ts       positioning, project copy, experience, toolkit, links, email
  hooks.ts         reveal, scroll-spy, in-view mount
  styles.css       tokens, layout, components, responsive rules, reduced motion
  components/      Nav, Hero, About, Work, Experience, Loom, Contact, Footer, Icons
public/
  images/          live project screenshots and the Utamaro print
docs/              design notes, critique, brief
```

## The weave card

The field-note section is a real tool. Type a name, choose Plain, Twill or Basket, and the card
redraws from the name. The name determines the thread pair. "Copy link" writes the name and weave
into the URL so the card can be shared. The card mounts only when it approaches the viewport, behind
a same-ratio placeholder.

## Credits

- Project screenshots: [inkloom.art](https://inkloom.art),
  [repoquestt.vercel.app](https://repoquestt.vercel.app),
  [lurkr-bsr.vercel.app](https://lurkr-bsr.vercel.app).
- Print: Kitagawa Utamaro, *A Woman Weaving at a Hand Loom*, 1796. The Met, public domain, via
  Wikimedia Commons.
- Type: Fraunces, Inter and JetBrains Mono, all under the SIL Open Font License and served through
  Google Fonts.
