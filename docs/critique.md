# Critique

## Round 2, light and dark

Run against the production build at `http://localhost:4173/?theme=light` and `?theme=dark` on
3 November 2026. Screens: `.taste-skill/light/` and `.taste-skill/dark/` (desktop, tablet, phone for
both themes).

```
ROUND 2
Seen in one second: the same poster in two temperatures. Paper and forest by day, night and cream
after dark, with the red kept for the button and the woven cloth.
Idea: unchanged. The loom holds the threads still while the work passes.
Live thing: unchanged, and the weave card stays paper in both themes so it still reads as an object.
Scores: design 8 · usability 8 · creativity 8 · content 8 → overall 8.0
Caps applied: none.
```

### What changed

1. **Dark mode is now a first-class theme, not an inverted filter.** `data-theme` on `<html>` drives a
   semantic token layer (`--bg`, `--ink`, `--surface`, `--panel`, `--field`, `--deep`, `--accent-text`).
   The `--c-*` palette values never move. Night `#171717` is the page, `#06110c` is the about and work
   panel, and the red carries fills only. Red never becomes small text on night: muted text is cream,
   hover text is lilac, so body contrast stays above 7:1.
2. **The theme is chosen before the first paint.** A small inline script in `index.html` reads
   `?theme=`, then `localStorage`, then `prefers-color-scheme`, and sets the attribute before React
   mounts. There is no flash of the wrong ground.
3. **The toggle is visible in the nav.** A moon and the word "Dark" in light mode; a sun and "Light" in
   dark. It is a 44px target on a phone, where it sits alone on the first nav row and the section links
   take the second row. The `?theme=` test parameter is removed when the toggle is used, so the choice
   sticks.
4. **The desktop nav no longer collides with the wordmark.** At 1440 the section links were sitting on
   the tops of the cream letters, which turned into cream-on-cream in dark mode. The wordmark now
   starts below the nav (`clamp(88px, 12svh, 116px)`), the cap is 192px, and the links are right
   aligned. The poster still bleeds to the edge but nothing overlaps.
5. **The weave card and the screenshot mounts are constants.** They stay paper `#e8dcc6` with forest
   thread, so the small tool reads the same in both themes and the screenshots keep a neutral mat.

### Remaining soft spots

- The dark loom field is a lilac and night mix rather than a named palette value. It is the one
  derived ground on the page; a pure `#171717` field lost the loom's colour and a full lilac field
  fought the night page.
- The left work column keeps a deliberate rest between the intro and the active project note. It is a
  column, not a hole, but it is the quietest screen on the page.
- The weave card is a gingham-like draw. It reads as cloth at card scale but is the simplest object on
  the page; a real selvedge would be the next move if the card were the product rather than a proof.
- The Ethnocentric webfont is a subset of a desktop-licensed face. The site ships only the subset;
  commercial web use still needs the appropriate license from Typodermic.

## Round 1, light only

Run against the production build at `http://localhost:4173/` on 3 November 2026.
Screens: `.taste-skill/inspect/desktop-fold.jpg`, `desktop-page-01..03.jpg`, `tablet-fold.jpg`,
`tablet-page-01..02.jpg`, `mobile-fold.jpg`, `mobile-page-01.jpg`.

```
ROUND 1
Seen in one second: ROHAN, set as a poster on paper, with a live product frame held under it.
Idea (one sentence): The inkloom holds the threads still while the work passes, so the name is pinned
and the projects move through the frame.
Live thing: the weave card: name and pattern choose the threads, the result redraws, and the card can
be linked from the URL.
Layout words by section: hero = poster / work = pinned index / about = split panel / loom = tool plus
film / contact = display type / footer = masthead.
Scores: design 8 · usability 8 · creativity 8 · content 8 → overall 8.0
Caps applied: none.
```

### Problems found and fixed

1. **No primary action in the first screen.** The nav was the only way to move, so the first screen
   asked the visitor to guess. Added a real "See the work" button at the bottom of the hero, red on
   paper, 50px tall, which scrolls to the work pin. The button is a `<button>`, not a label above a
   section, so it does not revive the eyebrow pattern.
2. **The phone hero overlapped the action with the lede.** The desktop button is absolute; on the
   stacked hero it landed over the supporting sentence and the WORK heading. Moved it into the
   stacked flow below the lede, full width on a phone and auto width on a tablet.
3. **The type scale sprawled to twelve sizes and the running text fell to 14px.** Consolidated to nine
   sizes (14 / 16 / 17 / 23 / 35 / 42 / 62 / 108 / 192), raised the captions and credits to 16px, and
   set the running ink to full forest or paper so the page reads at 7:1 or more on every ground.
4. **The stacked work panels were hidden from screen readers.** `aria-hidden` was still tied to the
   pinned active index below 900px, where all three panels are visible. It now switches only while
   the desktop pin is in use.
5. **The RepoQuest frame could arrive blank while scrolling.** The three work screenshots were lazy
   loaded inside a pinned stage; they are now eager, so the panel never opens on an empty mount.

### Remaining soft spots

- The left work column keeps a deliberate rest between the intro and the active project note. It is a
  column, not a hole, but it is the quietest screen on the page.
- The weave card is a gingham-like draw. It reads as cloth at card scale but is the simplest object on
  the page; a real selvedge would be the next move if the card were the product rather than a proof.
- The Ethnocentric webfont is a subset of a desktop-licensed face. The site ships only the subset;
  commercial web use still needs the appropriate license from Typodermic.
