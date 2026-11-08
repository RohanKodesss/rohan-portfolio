# Design notes

## Direction

A flat, light "digital editorial" page: ice-blue ground, white surfaces, burgundy display type and
one muted-gold accent. No texture, no gradient, no dark theme. Depth comes from a small step in tone
and a 1px border. The profile card is the single exception: it gets a soft shadow because it should
feel dropped onto the page.

## Palette

All values live as CSS custom properties in `src/styles.css`.

| Token | Value | Use |
| --- | --- | --- |
| `--bg-canvas` | `#d4e6f4` | page ground |
| `--bg-surface` | `#ffffff` | cards, form fields, the weave card, the profile card |
| `--text-heading` | `#6d263f` | every h1, h2 and h3, plus labels and links |
| `--accent-primary` | `#6d263f` | primary button fill |
| `--accent-gold` | `#c29b57` | small rules, dots, hover fills and focus rings |
| `--accent-gold-deep` | `#7d5f2c` | the darker gold used for small text on light grounds |
| `--text-body` | `#1e293b` | running paragraphs and body copy |
| `--muted` | `#4f6276` | captions, metadata and secondary labels |
| `--border-color` | `rgba(109, 38, 63, 0.15)` | the standard 1px card and section border |
| `--border-color-strong` | `rgba(109, 38, 63, 0.24)` | form and control borders |
| `--nav-glass` | `rgba(212, 230, 244, 0.85)` | the one glass surface, the sticky nav |

Gold is a detail colour. It is used on hover fills, focus rings, short rules and the status dot. It
is not used for running text on the ice-blue ground. `--accent-gold-deep` is the accessible
small-text cut.

## Contrast

Measured on the real tokens:

- Body on canvas: 11.44:1. Muted on canvas: 4.92:1.
- Heading on canvas: 8.22:1. Heading on white: 10.50:1.
- Body on white: 14.63:1. Muted on white: 6.29:1.
- White on heading: 10.50:1. Body on gold: 5.66:1.
- Accent-gold-deep on canvas: 4.63:1. Accent-gold-deep on white: 5.92:1.

## Type

- Display: Fraunces, weights 700 / 900, optical sizing on, tracking -0.02em, 0.98 leading. One word
  per heading may be italic for emphasis.
- Text: Inter 400, 17px base, 1.7 line height. Paragraphs use `--text-body`, not burgundy.
- Labels, nav and buttons: JetBrains Mono 500, uppercase, 0.05em tracking.
- One fluid scale in `:root`; section headings use `--text-h2`, the hero `--text-h1`.

## Space and frame

- One container: `min(100% - 48px, 1100px)`, centred, 24px gutters.
- Sections: `padding: 120px 0`. `scroll-margin-top: 100px`. Smooth scrolling on `html`.
- One spacing scale from 4px to 120px. Cards use the same 12px radius; controls use 8px.
- The bento is a 12-column grid. The featured card spans 7 columns and 2 rows. The two smaller cards
  span 5 columns and stack on the right. It becomes one column below 768px.

## Motion

- `useReveal` adds `.is-in` to `[data-reveal]` elements through IntersectionObserver. Items travel
  20px and fade in, with a per-item `--d` delay.
- `.js` is set in the document head, so the page is fully readable if JavaScript fails.
- `prefers-reduced-motion: reduce` removes the travel, the smooth scroll and the status pulse.
- The status dot pulses on a 2.6s loop. Nothing else loops.
- The weave card mounts when it approaches the viewport, behind a same-ratio placeholder.

## Nav and mobile

The nav is fixed, 76px tall, ice blue at 85% with a 12px backdrop blur. At 767px the links collapse
into a hamburger panel with a solid ice-blue ground, Escape to close, body scroll lock, and a link
click that closes the panel before the smooth scroll.

Clicking the "Rohan" wordmark opens the profile card under the nav. It closes on an outside click or
Escape, and the mobile menu closes it too.
