# Critique, round 1

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

## Problems found and fixed

1. **No primary action in the first screen.** The nav was the only way to move, so the first screen
   asked the visitor to guess. Added a real "See the work" button at the bottom of the hero, red on
   paper, 50px tall, which scrolls to the work pin. The button is a `<button>`, not a label above a
   section, so it does not revive the eyebrow pattern.
2. **The phone hero overlapped the action with the lede.** The desktop button is absolute; on the
   stacked hero it landed over the supporting sentence and the WORK heading. Moved it into the
   stacked flow below the lede, full width on a phone and auto width on a tablet.
3. **The type scale sprawled to twelve sizes and the running text fell to 14px.** Consolidated to nine
   sizes (14 / 16 / 17 / 23 / 35 / 42 / 62 / 108 / 209), raised the captions and credits to 16px, and
   set the running ink to full forest or paper so the page reads at 7:1 or more on every ground.
4. **The stacked work panels were hidden from screen readers.** `aria-hidden` was still tied to the
   pinned active index below 900px, where all three panels are visible. It now switches only while
   the desktop pin is in use.
5. **The RepoQuest frame could arrive blank while scrolling.** The three work screenshots were lazy
   loaded inside a pinned stage; they are now eager, so the panel never opens on an empty mount.

## Remaining soft spots

- The left work column keeps a deliberate rest between the intro and the active project note. It is a
  column, not a hole, but it is the quietest screen on the page.
- The weave card is a gingham-like draw. It reads as cloth at card scale but is the simplest object on
  the page; a real selvedge would be the next move if the card were the product rather than a proof.
- The Ethnocentric webfont is a subset of a desktop-licensed face. The site ships only the subset;
  commercial web use still needs the appropriate license from Typodermic.
