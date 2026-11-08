# Design notes

## Direction

A flat, light "digital editorial" page: ice-blue ground, white surfaces, burgundy display type and
one muted-gold accent. No texture, no gradient, no dark theme. Depth comes from a small step in tone
and a 1px border, not a drop shadow.

## Palette

All values live as CSS custom properties in `src/styles.css`.

| Token | Value | Use |
| --- | --- | --- |
| `--canvas` | `#d4e6f4` | page ground |
| `--surface` | `#ffffff` | cards, form fields, the weave card |
| `--heading` | `#6d263f` | every h1, h2 and h3, plus labels and links |
| `--accent` | `#c29b57` | small rules, dots, hover fills and focus rings |
| `--accent-deep` | `#7d5f2c` | the darker gold used for small text on light grounds |
| `--body` | `#1e293b` | running paragraphs and body copy |
| `--muted` | `#4f6276` | captions, metadata and secondary labels |
| `--line` | `rgba(109, 38, 63, 0.14)` | the standard 1px card and section border |
| `--line-strong` | `rgba(109, 38, 63, 0.24)` | form and control borders |
| `--nav-glass` | `rgba(212, 230, 244, 0.76)` | the one glass surface, the sticky nav |

Gold is a detail colour. It is used on hover fills, focus rings, short rules and the status dot. It
is not used for running text on the ice-blue ground. `--accent-deep` is the accessible small-text
cut.

## Contrast

Measured on the real tokens:

- Body on canvas: 11.44:1. Muted on canvas: 4.92:1.
- Heading on canvas: 8.22:1. Heading on white: 10.50:1.
- Body on white: 14.63:1. Muted on white: 6.29:1.
- White on heading: 10.50:1. Body on gold: 5.66:1.
- Accent-deep on canvas: 4.63:1. Accent-deep on white: 5.92:1.

## Type

- Display: Fraunces, weights 600 / 700 / 900, optical sizing on. Tight tracking, 0.98 leading.
- Text: Inter, 17px base, 1.7 line height. Paragraphs use `--body`, not burgundy.
- Labels, nav and buttons: JetBrains Mono, uppercase, 0.08 to 0.12em tracking.
- One fluid scale in `:root`; section headings use `--text-h2`, the hero `--text-h1`.

## Space and frame

- One container: `min(100% - 2 * gutter, 1100px)`.
- Sections: `padding: 120px 0` on desktop, 88px on a phone. `scroll-margin-top: 100px`.
- One spacing scale from 4px to 120px. Cards use the same 12px radius; controls use 8px.
- The bento is a 7fr / 5fr grid. The featured card spans two rows on the left; the two smaller cards
  stack on the right. It becomes one column at 900px.

## Motion

- `useReveal` adds `.is-in` to `[data-reveal]` elements through IntersectionObserver. Only opacity
  and transform move.
- `.js` is set in the document head, so the page is fully readable if JavaScript fails.
- `prefers-reduced-motion: reduce` removes the travel and the smooth scroll.
- The weave card mounts when it approaches the viewport, behind a same-ratio placeholder.

## Nav and mobile

The nav is fixed, 76px tall, ice blue at 76% with a 12px backdrop blur. At 860px the links collapse
into a hamburger panel with a solid ice-blue ground, Escape to close, body scroll lock, and a link
click that closes the panel before the smooth scroll.
