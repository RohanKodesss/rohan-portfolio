# Design notes

## Palette

The `--c-*` values are the fixed palette. Everything on the page reads a semantic token built from
them, and the dark theme overrides the semantic layer, not the palette.

Roles: teal = structure, sand = surface, terracotta = interaction, moss = status only.

### Light

| Token | Value | Use |
| --- | --- | --- |
| `--c-sand` | `#EDE3D0` | page ground |
| `--c-sand-lift` | `#F3EAD9` | cards, fields, elevated surfaces |
| `--c-sand-sink` | `#E6DAC3` | dividers, loom ground, insets |
| `--c-teal` | `#1C2E2A` | body ink |
| `--c-teal-strong` | `#0F3D3A` | headings, panels, contact ground |
| `--c-teal-muted` | `#404E47` | secondary text |
| `--c-terracotta` | `#A54329` | links, focus, primary button |
| `--c-terracotta-strong` | `#8F3A24` | pressed / hover |
| `--c-moss` | `#69844F` | availability / success only |

### Dark

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#0D1615` | teal-tinted night |
| `--bg-elevated` | `#14201E` | cards, work surface |
| `--bg-sunken` | `#0A1211` | panels, loom ground, contact |
| `--ink` | `#E6D8C1` | sand body ink |
| `--ink-strong` | `#EFE4CE` | headings |
| `--muted` | `#B9AE9B` | secondary text |
| `--accent` | `#D9784E` | brightened terracotta |
| `--accent-strong` | `#E88A60` | hover / pressed |
| `--signal` | `#93AE7C` | availability / success only |

`--signal` never becomes a link or heading colour. The light-mode sand returns as dark-mode body
ink, and the light-mode teal returns as the dark ground tint.

## Contrast

Measured against the actual mixed tokens:

- Body ink on sand: 11.20:1. Muted ink on sand: 6.88:1.
- Sand on teal panel: 10.05:1. Panel-muted on teal: 7.00:1.
- Sand on contact deep: 10.05:1. Contact muted: 7.00:1.
- Sand on footer: 11.93:1. Footer muted: 8.16:1.
- Terracotta on sand: 4.80:1. Sand on terracotta: 5.12:1.
- Focus ring on sand / elevated / sunken: 4.80 / 5.12 / 4.42:1. On the darkest textured ground: 4.59:1.
- Moss dot on sand: 3.29:1 (3.14:1 on the textured ground). Deep ink on moss: 4.53:1.
- Dark body ink on night: 13.09:1. Dark muted on night: 8.39:1.
- Dark sand on sunken panel: 15.04:1. Panel-muted: 8.45:1.
- Dark terracotta on night: 5.90:1. Night ink on terracotta: 5.90:1.
- Dark focus ring on night / elevated / sunken: 5.90 / 5.38 / 6.09:1.
- Dark moss on night: 7.51:1. Deep ink on moss: 7.75:1.

## Texture

The page ground is a crushed-paper relief, not grain. It is one self-contained SVG data URI applied
to two fixed, `pointer-events: none` pseudo-elements below all content.

- Filter: `feTurbulence` `fractalNoise`, `baseFrequency="0.012"`, `numOctaves="5"`, `seed="7"`,
  `stitchTiles="stitch"`, then `feDiffuseLighting` with `surfaceScale="2.5"`,
  `diffuseConstant="1"`, `feDistantLight azimuth="235" elevation="55"`.
- Tile: 1280px; a second copy at 1730px with a 420px / 310px offset breaks any repeat read.
- Light: lighting colour `#F3EAD9`, primary alpha 0.065, blend `multiply`.
- Dark: lighting colour `#E6D8C1`, primary alpha 0.042, blend `soft-light` (chosen over `screen`
  because screen lifted the night teal toward milk).
- The same geometry and seed run in both themes; only the lighting colour and intensity change.
- The texture is attached after first contentful paint so its one-time rasterization cannot delay
  LCP. It is static, never animated, and is hidden under `prefers-reduced-data: reduce`.
- Cards, fields, buttons and the weave tool sit on opaque surfaces, so the relief never crosses an
  interactive element. The nav sits above the relief rather than under an overlay.

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
