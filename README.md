# Personal website

A static site built with [Astro](https://astro.build), deployed to GitHub Pages.
No JavaScript ships to the browser; images are optimized at build time.

## Running it locally

```bash
npm install
npm run dev
```

Then open <http://localhost:4321>. Edits appear instantly — no restart needed.

| Command           | What it does                                    |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Local preview with live reload                  |
| `npm run build`   | Builds the static site into `dist/`             |
| `npm run preview` | Serves `dist/` exactly as GitHub Pages will     |
| `npm run check`   | Type-checks pages and validates content files   |

---

## First-time setup

Three things to change before the first deploy:

1. **`src/data/site.ts`** — your name, tagline, email, location, and social
   links. Each social has `placeholder: true` on it; **delete that line** once
   you've put in a real URL. Links still marked as placeholders don't render,
   so half-finished profiles never go live.

2. **`astro.config.mjs`** — set `site` to `https://YOUR-USERNAME.github.io`.
   This only affects canonical URLs and social preview cards, so a wrong value
   won't break the build.

3. **`src/pages/index.astro`** — your bio, in the block marked `EDIT ME`.

Optional but worth doing:

- Drop your CV at `public/cv.pdf` (or set `cv: null` in `site.ts` to hide the button).
- Add `public/og.png` (1200×630) — the image shown when someone shares your link.
- Replace `public/favicon.svg` with your own mark.

---

## Adding content

Every section is a folder of Markdown files under `src/content/`. Add a file,
it appears on the page. Delete it, it's gone. No template editing.

| Page     | Folder                  |
| -------- | ----------------------- |
| Research | `src/content/research/` |
| Projects | `src/content/projects/` |
| Outreach | `src/content/outreach/` |
| Hobbies  | `src/content/hobbies/`  |
| Art      | `src/content/art/`      |

The `example-*.md` files in each folder show every available field. Delete them
once you've added real content.

### A research entry

```markdown
---
title: "Thermal tolerance in reef fish larvae"
year: 2025
authors: "Y. Chen, A. Rivera, M. Okonkwo"
venue: "Journal of Marine Biology"
image: "./images/larvae-setup.jpg"
imageAlt: "Aquarium tanks under controlled lighting"
paper: "/papers/thermal-tolerance.pdf"
slides: "/papers/talk-2025.pdf"
doi: "10.1000/example"
tags: ["marine biology", "imaging"]
featured: true
---

Your blurb goes here, in plain Markdown.
```

Only `title` and `year` are required. Every other field is optional and simply
doesn't render when absent — an entry with just a blurb looks deliberate, not
broken.

### Where files go

- **Images** → next to the Markdown file, in that folder's `images/`
  subfolder, referenced as `./images/name.jpg`. Astro resizes them, converts
  them to WebP, and generates a responsive `srcset` automatically. Use the
  original full-size file; don't pre-shrink it.
- **PDFs** (papers, slides) → `public/papers/`, referenced as
  `/papers/name.pdf`.
- **Teaching resources** (lesson plans, STL files) → `public/files/`,
  referenced as `/files/name.stl`.

Anything in `public/` is served as-is at the matching URL.

### Useful flags

- `featured: true` — pins an entry to the top of its page, and surfaces it in
  **Selected work** on the home page.
- `published: false` — keeps a draft out of the built site entirely.

---

## Deploying

Once, when you set up the repo:

1. Name the repo exactly `YOUR-USERNAME.github.io` so the site serves from the
   root domain.
2. Push it to GitHub.
3. Go to **Settings → Pages → Build and deployment**, and set **Source** to
   **GitHub Actions**. (Not "Deploy from a branch" — that's the old way and it
   won't run the build.)

After that, every push to `main` rebuilds and republishes the site in about a
minute. Watch it happen in the repo's **Actions** tab.

```bash
git add -A
git commit -m "Update research page"
git push
```

`dist/` and `node_modules/` are gitignored — you never commit build output.

### Custom domain

If you later buy a domain: add a file `public/CNAME` containing just the
domain (e.g. `yourname.com`), point a `CNAME` DNS record at
`YOUR-USERNAME.github.io`, and set the domain under Settings → Pages. Then
update `site` in `astro.config.mjs` to match.

---

## Layout notes

- The nav is defined once in `src/data/site.ts` and rendered by
  `src/components/Nav.astro`. Adding a page means adding a line there plus a
  file in `src/pages/`.
- Colors, fonts, and spacing are CSS custom properties at the top of
  `src/styles/global.css`. Changing `--accent` restyles the whole site.
- **Dark is the default theme**, not a `prefers-color-scheme` fallback — it's
  the site's identity. A visitor can switch to light via the toggle in the
  header; that choice is saved in their browser (`localStorage`) and restored
  on their next visit. The toggle's logic is a single inline script in
  `src/layouts/BaseLayout.astro` — it's the only JavaScript the site ships,
  and it runs before first paint so there's no flash of the wrong theme.
  Both palettes live in the token block at the top of `global.css`, under
  `:root` (dark) and `:root[data-theme="light"]`.
- The dot-grid background (`body` in `global.css`) and the small crosshair
  marks on card corners (`.entry`, `.hobby`) are pure CSS — no images.
