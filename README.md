# Rohan, portfolio

A single-page portfolio for a developer in India who builds AI products and small web tools.

The page is a pinned poster: the name holds still while the projects pass through the frame. Each
project is a short case study with the problem, the build, the outcome and the role, plus live and
repository links. A GitHub star count sits between the work and the story. The weave card near the
end is a real tool, not a mockup: type the name, choose a pattern, and the card draws itself, then
copies a URL that reproduces it.

The page has a light and a dark theme. It follows the system preference on the first visit, the nav
toggle remembers the choice, and `?theme=light` or `?theme=dark` forces one for screenshots and
testing. The red accent is the same family in both themes; dark uses a brightened member of it.

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
  node .agents/skills/design-taste-frontend/scripts/inspect.mjs "http://localhost:4173/?theme=light"
```

Run it again with `?theme=dark` for the night palette. Both themes pass at 1440, 768 and 390 with
0 failures. The only remaining inspector warning is the number of type sizes, which is the deliberate
editorial scale.

Lighthouse accessibility is 100 in both themes. The page was also checked at 375px, with keyboard-only
navigation, with reduced motion enabled, and with JavaScript disabled (the `<noscript>` fallback keeps
a plain `mailto:` path).

The written critique is in `docs/critique.md`. The recorded inspection is in `.taste-skill/` and is
not committed.

## Structure

```
src/
  App.tsx          page composition and reveal observer
  content.ts       positioning line, case-study copy, links, facts, email
  hooks.ts         scroll progress, reveal, media query, in-view mount
  theme.ts         light and dark theme, storage, ?theme override
  styles.css       tokens, layout, responsive rules, reduced motion
  components/      Nav, Hero, Work, Proof, About, Loom, Contact, Footer
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
- Video: *Métier à tisser Jacquard 01* by Bastenbas, CC BY-SA 4.0, via Wikimedia Commons.
- Display type: Ethnocentric by Typodermic. The repository ships a subset only. Web use needs the
  appropriate webfont license from Typodermic; the desktop EULA in `docs/` is not a web license.
- Text type: Instrument Sans, SIL Open Font License.
