# Design notes

## Direction

A black-and-white "Engineering Workstation" page. Hard rules, square corners, three working
typefaces and one inverted moment per screen. The structure comes from a technical dossier or a
control panel: numbered modules, labelled data rows, monochrome screenshots and a single white
action per screen. The grain and scanline layers are texture, not a theme. They stay subtle enough
that body text remains the loudest thing on the page.

The site is two static pages. `index.html` carries the positioning, selected work and short story;
`projects.html` carries the full record. They share one stylesheet and one script.

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
| `--rule` | `#2c2c2c` | standard 1px borders and dividers |
| `--rule-strong` | `#4a4a4a` | hover borders, outlined controls |

There is no accent colour. Emphasis comes from scale, weight, an inverted word and a heavier rule.

## Contrast

Measured on the real tokens:

- Heading on ground: 18.2:1. Body on ground: 12.7:1. Muted on ground: 9.1:1.
- Dim on ground: 5.7:1. Dim on inset surface: 5.3:1.
- Heading on raised surface: 17.5:1. Body on raised surface: 12.2:1.

Every text role clears WCAG AA at its size. The grain overlay is capped at 0.15 and drops to 0.08
below 640px, so it does not erode contrast on a phone.

## Type

- Display: Space Grotesk 700, tracking -0.035em to -0.045em, 0.98 leading. The hero uses the same
  face at up to 7rem and one inverted word.
- Body: Inter 400, 16px, 1.6 leading. Running copy is 16px, not 14px.
- Labels, navigation, buttons, metadata and code: IBM Plex Mono 400/500, uppercase, 0.06em to
  0.08em tracking, 13px.
- Three families only. Each has one job. The stack is declared in `:root`.
- Emphasis in headings is a 3px underline. The hero word `ship` is the only inverted moment.

## Space and frame

- One container: `min(100% - 2 * gutter, 1240px)`, with fluid 20 to 48px gutters.
- Sections: fluid 56 to 92px padding, one full-width rule between each, and `scroll-margin-top` so
  anchors clear the sticky nav.
- Section labels use the module index: `[00]` for the hero, `[01]` work, `[02]` about, `[03]`
  experience, `[04]` contact. The bracket is decorative; the label text stays readable.
- The home work grid is two equal columns above 768px. The projects grid is one column below
  1024px, then a 7/5 asymmetric grid with a stacked pair on the right. The featured card spans both
  stack rows and gives its extra height to the problem/built/outcome/role table, so the rows read as
  a spaced datasheet rather than leaving a dead field under the summary.
- The experience record becomes a three-column table above 768px: year, record, link at the far
  edge. No row is a card.
- The footer closes with the name at full width. The period is a solid square.

## Components

- Buttons: 48px minimum height, square, monospace uppercase. The primary button is white on black
  and inverts on hover. The ghost button is a 1px outline.
- Project cards: 1px rule, raised ground, monochrome screenshot, a metadata bar, a one-line claim,
  a short summary, slash-separated stack and a link row pushed to the bottom. Hover lifts the border
  to white and brightens the screenshot slightly. No movement, no zoom.
- Tech stacks are monospace text separated by slashes, not pills.
- The digital business card is a floating dialog: 1px border, a 3px white top edge, square corners,
  and a soft 180ms fade plus 8px rise. It is the only surface allowed a shadow.
- Status indicators are 7px white squares with a two-step grey ring. They never pulse.

## Texture

- `body::before` holds an inline SVG `feTurbulence` grain, fixed, 180px tile, 0.15 opacity, overlay
  blend. It is pointer-events none and sits at z-index 9999.
- `body::after` holds a 4px repeating scanline gradient at 0.18 opacity of a 5.5% white line.
- Both layers are removed under `prefers-contrast: more`. There is no CRT curvature, no glitch and
  no distortion over text.

## Motion

- No scroll reveals. The page is fully readable the moment it is scrolled to, and no content
  depends on JavaScript.
- Hover and focus transitions are 170ms on colour, border and icon position.
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
The terminal on `projects.html` ends exactly on `> __ still more to go_` and does not animate.
