# Design notes

## Direction

A dark "Modern Tech" page: near-black ground, one surface step, a violet action colour and a cyan
detail colour. Flat surfaces, 1px borders, no gradients, no texture and no illustration. Depth comes
from the tone step and the border. The fixed nav is the only glass surface. The profile card is the
only surface with a shadow, because it should feel dropped onto the page.

The site is two static pages. `index.html` carries the positioning and the short story;
`projects.html` carries the full bento. They share one stylesheet and one script.

## Palette

All values live as CSS custom properties in `styles.css`.

| Token | Value | Use |
| --- | --- | --- |
| `--bg-canvas` | `#0A0A0A` | page ground |
| `--bg-surface` | `#171717` | cards, panel, toolkit, profile card |
| `--text-heading` | `#EDEDED` | every h1, h2 and h3, plus primary links |
| `--text-body` | `#A3A3A3` | running paragraphs, captions, metadata |
| `--accent-primary` | `#8B5CF6` | the violet accent: borders, dots, focus rings, hover |
| `--accent-secondary` | `#22D3EE` | cyan detail: labels, tech tags, terminal prompt, status dot |
| `--border-color` | `rgba(255,255,255,0.1)` | the standard 1px card and section border |
| `--accent-primary-deep` | `#7C3AED` | primary button fill, a shade darker for text contrast |
| `--accent-primary-darker` | `#6D28D9` | primary button hover |
| `--nav-glass` | `rgba(10,10,10,0.8)` | the one glass surface, the fixed nav |

Violet is the action colour. Cyan is the detail colour. They do not trade roles. Running text stays
in `--text-body`; headings stay in `--text-heading`.

## Contrast

Measured on the real tokens:

- Heading on canvas: 16.9:1. Body on canvas: 7.9:1.
- Heading on surface: 15.3:1. Body on surface: 7.1:1.
- White on `--accent-primary-deep`: 5.7:1. White on `--accent-primary`: 4.2:1.
- Cyan on surface: 9.9:1. Violet on surface: 4.2:1.

The button fill is `--accent-primary-deep`, not `--accent-primary`, so 12px white text clears 4.5:1.
The violet token still owns borders, dots and focus rings. It is not used for small text on a
surface, where it lands at 4.2:1.

## Type

- Display: Fraunces, weights 700 / 900, optical sizing on, tracking -0.02em, 0.98 leading. One word
  per heading may be italic for emphasis.
- Text: Inter 400, 16px base, 1.7 line height. Paragraphs use `--text-body`, not white.
- Labels, nav and buttons: JetBrains Mono 500, uppercase, 0.05em tracking.
- One fluid scale in `:root`; section headings use `--text-h2`, the hero `--text-h1`.

## Space and frame

- One container: `min(100% - 48px, 1100px)`, centred, 24px gutters.
- Sections: `padding: 120px 0`. `scroll-margin-top: 100px`. Smooth scrolling on `html`.
- One spacing scale from 4px to 120px. Cards use the same 12px radius; controls use 8px.
- The bento is a 12-column grid at 768px and wider. It becomes one column below 768px.
- Home bento: Inkloom spans 7 columns, RepoQuest spans 5. Both cards share a row height so the
  shorter card does not leave a void.
- Projects bento: Inkloom spans 7 columns and 2 rows. RepoQuest and Lurkr stack in the right 5
  columns. Experiments span 7, Toolkit spans 5, and the terminal spans the full width.

## Motion

- `main.js` adds `.is-in` to `[data-reveal]` elements through IntersectionObserver. Items travel
  20px and fade in, with a per-item `--d` delay. Items unobserve after they appear.
- `.js` is set in the document head, so the page is fully readable if JavaScript fails.
- `prefers-reduced-motion: reduce` removes the travel, the smooth scroll and the status pulse.
- The status dot pulses on a 2.6s loop. The terminal cursor blinks on a 1s step. Nothing else loops.

## Nav and mobile

The nav is fixed, 76px tall, near-black at 80% with a 16px backdrop blur. At 767px the links collapse
into a hamburger panel with a solid near-black ground, Escape to close, body scroll lock, and a link
click that closes the panel before navigation.

Clicking "Rohan" opens the profile card under the nav. It closes on an outside click or Escape, and
the mobile menu closes it too. The card generates a vCard from a plain string and a Blob.

## Copy

Punchy, confident builder voice. Short sentences. No filler verbs, no fake metrics, no em dashes. One
italic word per heading at most. The terminal on `projects.html` ends exactly on
`> __ still more to go_`.
