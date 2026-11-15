# Rohan, portfolio

Two builds live in this repository. The root is a one-file portfolio in an "80s photocopied zine
meets classic Macintosh" style. `classic/` keeps the previous "Engineering Workstation" build.

## The zine — `index.html`

A single self-contained page. Inline CSS and inline JavaScript, no framework, no build step, no
images, no libraries. The only external request is the Google Fonts stylesheet.

- Two hash-routed views: `#home` and `#projects`, separated by a stepped page wipe that swaps
  content at the halfway point.
- Mac System-1 windows with striped title bars on a dotted desktop, hard offset shadows, one
  circular sticker, and `steps()` timing on the wipe, entrances and caret.
- Strict `--bg` / `--ink` / `--mid` tokens. Light and dark both pass AA. Invert persists in
  `sp_t` and rewrites both `theme-color` metas.
- Typewriter intro, spinning sticker, marquee, headline jitter, card tilt and hover, and a
  "What I’d redo" note behind each project.
- Copy-email button with a select-text fallback, `h` / `p` / `i` shortcuts, skip link, focus moved
  to the new `<main>` after routing, `aria-current` on the active nav item.
- `<noscript>` window so the home view and the address still work without JavaScript.
- Phone rules below 520px and a print stylesheet that drops the decoration and forces black on white.

### What to edit

Everything user-facing is in one of two places inside `index.html`:

1. `CONFIG` at the top of the second `<script>` block — `name`, `email`, `github`, `linkedin`,
   `instagram`, `resume`. `name` drives the titles and copyright, `email` drives the mail link and
   the copy button.
2. `PROJECTS` just below it — five objects of `title`, `year`, `blurb`, `tags[]`, `note`, `url`.
   A `url` of `"#"` renders the Visit button dimmed and unclickable; any real URL makes it a live
   link that opens in a new tab.

Three things sit outside both and are edited in the markup: the hero greeting (`// hi, i’m Sam.`),
the `<title>` / `og:title` / `meta description` in `<head>`, and the address inside the
`<noscript>` sentence.

### Checks

Verified at 1440, 768, 519 and 360 pixels with no horizontal overflow, and with `localStorage`
stubbed to throw on every call. Routing moves focus to the new view, updates the title, resets the
scroll position and swaps `aria-current`. Print emulation hides the menu bar, marquee, sticker and
buttons. Without JavaScript the home view and the fallback window still render.

## The previous build — `classic/`

`classic/index.html` and `classic/projects.html` are the "Engineering Workstation" site: near-black
ground, white ink, Space Grotesk display, Inter body, IBM Plex Mono labels, a digital business card
with a vCard download. It is self-contained in that folder — `styles.css`, `main.js`, `images/` and
`favicon.svg` all sit beside the pages. Its palette, type system, grid and motion rules are written
up in `docs/design.md`.

That build is kept for reference and is not linked from the zine.

## Run

Any static file server works. From the repository root:

```bash
python3 -m http.server 4180
```

Open `http://localhost:4180/` for the zine and `http://localhost:4180/classic/` for the old site.

## Deploy

Vercel serves the repository root with no build step; `vercel.json` only pins `outputDirectory` to
`.`. The root is `index.html`, so the zine is the landing page and `classic/` is served as plain
static files.

## Credits

- Type: Archivo Black and Space Mono (zine), Space Grotesk, Inter and IBM Plex Mono (classic), all
  under the SIL Open Font License and served through Google Fonts.
- Project screenshots in `classic/images/`: [inkloom.art](https://inkloom.art),
  [repoquestt.vercel.app](https://repoquestt.vercel.app), [lurkr-bsr.vercel.app](https://lurkr-bsr.vercel.app).
