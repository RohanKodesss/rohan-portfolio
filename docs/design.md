# Design notes

## Direction

A black-and-white "Engineering Workstation" page. Hard rules, square corners, three working
typefaces and one inverted moment per screen. The structure comes from a technical dossier or a
control panel: numbered modules, labelled data rows, monochrome screenshots and a single white
action per screen. The grain layer is texture, not a theme. It stays subtle enough that body text
remains the loudest thing on the page.

The site is two static pages. `index.html` carries the positioning, a small project index, selected
work and short story; `projects.html` carries the full record, split into built work and upcoming
work. They share one stylesheet and one script.

## Palette

All values live as CSS custom properties in `styles.css`.

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#0a0a0a` | page ground |
| `--bg-raise` | `#101010` | cards, panels, toolkit |
| `--bg-inset` | `#141414` | panel bars, hover surfaces |
| `--fg` | `#f5f5f5` | headings, primary links, rules of emphasis |
| `--fg-body` | `#cfcfcf` | running paragraphs |
| `--fg-muted` | `#b0b0b0` | secondary paragraphs, nav |
| `--fg-dim` | `#8a8a8a` | labels, timestamps, fine print |
| `--rule` | `#1f1f1f` | standard 1px borders and dividers |
| `--rule-strong` | `#4a4a4a` | hover borders, outlined controls |

There is no accent colour. Emphasis comes from scale, weight, an inverted word and a heavier rule.

## Contrast

Measured on the real tokens:

- Heading on ground: 18.2:1. Body on ground: 12.7:1. Muted on ground: 9.1:1.
- Dim on ground: 5.7:1. Dim on inset surface: 5.3:1.
- Heading on raised surface: 17.5:1. Body on raised surface: 12.2:1.

Every text role clears WCAG AA at its size. The grain overlay is capped at 0.09 and drops to 0.07
below 640px, so it does not erode contrast on a phone. Rules sit at `#1f1f1f`, dark enough to read as
structure without competing with muted text.

## Type

- Display: Space Grotesk 700, tracking -0.035em to -0.045em, 0.98 leading. The hero uses the same
  face at up to 7rem and one inverted word.
- Body: Inter 400, 16px, 1.6 leading. Running copy is 16px, not 14px.
- Labels and navigation: IBM Plex Mono 400/500, uppercase, 0.06em to 0.08em tracking, 13px.
- Buttons and inline text links: Inter 500, sentence case, no tracking, 15px.
- Three families only. Each has one job. The stack is declared in `:root`.
- Emphasis in headings is a 3px underline. The hero word `ship` is the only inverted moment.

## Space and frame

- One container: `min(100% - 2 * gutter, 1240px)`, with fluid 20 to 48px gutters.
- Sections: fluid 72 to 140px padding, one full-width rule between each, and `scroll-margin-top` so
  anchors clear the sticky nav. About is the one borderless band: no rule above it.
- The hero ends in a project index, not a project detail. Two rows link out to built work
  (`projects.html#work`) and upcoming work (`projects.html#upcoming`), with a small count line under
  them. Project facts stay on the projects page.
- Section labels use the module index: `[00]` for the hero, `[01]` work, `[02]` about, `[03]`
  experience, `[04]` contact. The bracket is decorative; the label text stays readable.
- The projects page runs built work at `#work`, then upcoming builds at `#upcoming`. The build log
  closes the upcoming section instead of sitting inside the project grid.
- The home work grid is two equal columns above 768px. The projects grid is one column below
  1024px, then a 7/5 asymmetric grid with a stacked pair on the right. The featured card spans both
  stack rows and gives its extra height to the problem/built/outcome/role table, so the rows read as
  a spaced datasheet rather than leaving a dead field under the summary.
- The experience record becomes a three-column table above 768px: year, record, link at the far
  edge. No row is a card.
- The footer closes with the name as an outline at `clamp(2.5rem, 6vw, 5rem)`, clearly below the
  hero H1. The period is a solid square that stays solid while the name is outlined.

## Components

- Buttons: 48px minimum height, square, Inter 500 in sentence case. The primary button is white on
  black and inverts on hover. The ghost button is a 1px outline.
- Inline text links use Inter 500, sentence case, a rule underline and the arrow icon. Mono is kept
  for nav links, labels, status chips and tech stacks, not for actions.
- Project cards: 1px rule, raised ground, monochrome screenshot, a metadata bar, a one-line claim,
  a short summary, slash-separated stack and a link row pushed to the bottom. Hover lifts the border
  to white and brightens the screenshot slightly. No movement, no zoom.
- Tech stacks are monospace text separated by slashes, not pills.
- The digital business card is a floating dialog: 1px border, a 3px white top edge, square corners,
  and a soft 180ms fade plus 8px rise. It is the only surface allowed a shadow.
- Status indicators are 7px white squares with a two-step grey ring. They never pulse.
- The footer name is outline-only: transparent fill, a 1px ink stroke, Space Grotesk 700 at
  `clamp(2.5rem, 6vw, 5rem)`, `-0.02em` tracking and 0.9 leading. Hover fills it solid in 150ms. An
  `@supports (-webkit-text-stroke: 1px #fff)` guard keeps the name solid where strokes are
  unsupported, and the minimum size stays at 2.5rem so the stroke survives 375px.

## Texture

- `body::before` holds an inline SVG `feTurbulence` grain, fixed, 180px tile, 0.09 opacity, overlay
  blend. It is pointer-events none and sits at z-index 9999. On phones it drops to 0.07.
- There are no scanlines. The old `body::after` repeating gradient was removed, so nothing crosses
  the text and no CRT, glitch or curvature effect exists.
- The grain is hidden under `prefers-contrast: more`, which also strengthens text and rules.

## Motion

- No scroll reveals. The page is fully readable the moment it is scrolled to, and no content
  depends on JavaScript.
- Hover and focus transitions are 170ms on colour, border and icon position. The footer name fills
  in 150ms.
- The dialog opens in 180ms. The mobile menu opens in 170ms.
- `prefers-reduced-motion: reduce` removes smooth scroll and all transition durations. Content stays.

## Nav and mobile

The nav is sticky, 64px tall, solid ground and a 1px rule. The wordmark is a button that opens the
digital business card. Three links sit in bordered cells on desktop. Below 768px the links collapse
into a full-panel menu with 1px row rules, Escape to close, body scroll lock and a link click that
closes the panel before navigation.

The "Skip to content" link is the first focusable element. Focus rings are 2px white with a 3px
offset. The menu and dialog both trap focus and restore it on close.

## Copy

Punchy, confident builder voice. Short sentences. No filler verbs, no fake metrics, no em dashes.
The terminal in the upcoming section of `projects.html` ends exactly on `> __ still more to go_` and
does not animate.
