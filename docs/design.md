# Design notes

## Palette

The `--c-*` values are the fixed palette. Everything on the page reads a semantic token built from
them, and the dark theme overrides the semantic layer, not the palette.

### Light

| Token | Value | Use |
| --- | --- | --- |
| `--c-paper` | `#e8dcc6` | page ground, card stock |
| `--c-forest` | `#1f3b2e` | ink, panels |
| `--c-red` | `#a31c1b` | links, focus, primary button |
| `--c-lilac` | `#cbb3e8` | loom field only |
| `--c-night` | `#121412` | footer |
| `--c-night-deep` | `#06110c` | contact ground |
| `--c-sage` | `#7a9b76` | availability / success only |

### Dark

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#121412` | warm forest night |
| `--accent` / `--accent-text` / `--focus` | `#dd5f58` | one red family, brightened for night |
| `--on-accent` | `#121412` | ink on the bright red |
| `--panel` | `#06110c` | about and work panels |
| `--deep` | `#0b0d0b` | contact ground |
| `--signal` | `#7a9b76` | availability / success only |

`--signal` never becomes a link or heading colour. The dark theme keeps the loom field as a lilac and
night mix, because a pure night field lost the loom's colour and a full lilac field fought the page.

## Contrast

Measured against the actual mixed tokens:

- Body ink on paper: 8.99:1. Muted ink on paper: 7.21:1.
- Paper on forest panel: 8.99:1. Panel-muted on forest: 7.37:1.
- Cream on night: 13.65:1. Muted cream on night: 8.23:1.
- Bright red on night: 5.16:1. Paper on brick red: 5.65:1.
- Sage with night ink: 5.97:1.
- Card muted on paper: 4.75:1.
- Contact and footer muted text: 9.22:1 and 9.00:1 in light, 8.87:1 and 8.23:1 in dark.

## Type

- Display: Ethnocentric subset, uppercase, tight leading.
- Text: Instrument Sans, 16px base, 1.55 line height.
- The editorial scale keeps display, section, title, lead, body, small and caption sizes. The
  inspector reports the number of sizes as a warning; it is deliberate, not an accident.

## Motion

- Hero: `140svh` track, sticky `100svh` stage, three project images swapped by scroll progress.
- Work: `219svh` track, sticky stage, clip-path panel transitions.
- Reveals: IntersectionObserver adds `.is-in`; only runs when `.js` is present.
- `prefers-reduced-motion: reduce` unpins both stages, removes the frame animation and panel
  transitions, freezes scroll progress at zero, and stops the loom video.
- The weave card is mounted only when it approaches the viewport, with a same-ratio placeholder so
  there is no layout shift.

## Theme

The inline script in `index.html` sets `data-theme` before the first paint from `?theme=`,
`localStorage`, then `prefers-color-scheme`. The nav toggle persists the choice and removes the test
parameter. There is no flash and no layout shift from the swap.
