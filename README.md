# Rohan, portfolio

A single-page portfolio for a developer in India who builds AI products and small web tools.

The page is a pinned poster: the name holds still while the projects pass through the frame. The
weave card at the end is a real tool, not a mockup. Type the name, choose a pattern, and the card
draws itself, then copies a URL that reproduces it.

## Stack

- React 19 with TypeScript
- Vite
- Plain CSS custom properties, native sticky positioning and IntersectionObserver
- No Next.js, no animation library

## Run

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run preview` serves the production build at `http://localhost:4173/`.

## Checks

```bash
npm run lint
```

The design-taste inspector is in `.agents/skills/design-taste-frontend/scripts/inspect.mjs`. It needs
a Chrome or Chromium executable. On this machine:

```bash
CHROME_PATH="/Users/naveenkumar/Library/Caches/ms-playwright/chromium-1248/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing" \
  node .agents/skills/design-taste-frontend/scripts/inspect.mjs http://localhost:4173/
```

Final state: 0 failures, 0 warnings. The written critique is in `docs/critique.md`. The recorded
inspection is in `.taste-skill/` and is not committed.

## Structure

```
src/
  App.tsx          page composition and reveal observer
  content.ts       project copy, links, facts, email
  hooks.ts         scroll progress, reveal, media query
  styles.css       tokens, layout, responsive rules, reduced motion
  components/      Nav, Hero, Work, About, Loom, Contact, Footer
public/
  fonts/           Ethnocentric subset, Instrument Sans
  images/          live project screenshots and the Utamaro print
  media/           Jacquard loom clip and poster
docs/              brief, palette, critique
```

## Credits

- Project screenshots: [inkloom.art](https://inkloom.art),
  [repoquestt.vercel.app](https://repoquestt.vercel.app),
  [lurkr-bsr.vercel.app](https://lurkr-bsr.vercel.app).
- Print: Kitagawa Utamaro, *A Woman Weaving at a Hand Loom*, 1796. The Met, public domain, via
  Wikimedia Commons.
- Video: *Metier a tisser Jacquard 01* by Bastenbas, CC BY-SA 4.0, via Wikimedia Commons.
- Display type: Ethnocentric by Typodermic. The repository ships a subset only. Web use needs the
  appropriate webfont license from Typodermic; the desktop EULA in `docs/` is not a web license.
- Text type: Instrument Sans, SIL Open Font License.
