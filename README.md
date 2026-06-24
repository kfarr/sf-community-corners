# Community Corners

A simple, durable landing page for San Francisco's **Community Corners** pilot — the SFMTA program
that lets neighborhoods turn safer, daylit street corners into beautiful places with planters and
murals. It explains *what it is, why it matters, how to get one, the rules, and an FAQ*, and collects
interest sign-ups.

Built as **plain HTML/CSS/JS** — no build step, no dependencies, no framework. Open the folder, edit
the files, deploy them anywhere.

## Files

```
index.html     All page content (semantic, accessible). Edit copy here.
styles.css     All styling (design tokens at the top in :root).
main.js        Tiny optional enhancements (sticky nav, mobile menu, scroll reveal).
assets/
  favicon.svg
  img/         Placeholder scene SVGs + REPLACE-ME.md (how to swap real photos)
  video/       REPLACE-ME.md (how to add the hero timelapse)
```

## Preview locally

Just open `index.html` in a browser — that's it. Or serve it (nicer for testing):

```bash
python3 -m http.server   # then visit http://localhost:8000
```

## Things to fill in (search the code for `TODO`)

1. **Google Form (sign-up).** In `index.html`, find `<!-- TODO: Google Form -->`.
   - In your Google Form: **Send → `< >` Embed HTML** and copy the `src` URL.
   - Paste it into the `<iframe ... src="...">` and into the fallback `<a href="...">` link.
2. **Hero video.** Add a timelapse to `assets/video/` and uncomment the `<video>` block in `index.html`.
   See `assets/video/REPLACE-ME.md` for specs (16:9, < 5 MB, muted loop).
3. **Photos.** Replace the placeholder SVGs in `assets/img/` with real photos (keep filenames, or
   update the `src`/`alt`). See `assets/img/REPLACE-ME.md`.
4. **Partner orgs** (FAQ "Which organizations support this?") and the **contact email** in the footer
   (`mailto:hello@example.org`).
5. **Official source links** in the footer — confirm they still resolve.

## Editing content

All copy lives in `index.html` as plain text — change wording directly. To restyle, the color
palette, fonts, spacing, and radii are CSS variables in `:root` at the top of `styles.css`.

## Deploy

It's a static folder, so any static host works:

- **Netlify / Cloudflare Pages / Vercel:** drag-and-drop the folder, or connect the repo (no build
  command, publish directory = project root).
- **GitHub Pages:** push to a repo and enable Pages on the branch root.

## Accessibility & performance notes

- Works with JavaScript disabled (FAQ uses native `<details>`; all nav is real anchors).
- Respects `prefers-reduced-motion`; AA color contrast; keyboard-navigable; descriptive `alt` text.
- No external JS/CSS frameworks; images lazy-load below the fold; the hero video is `preload="none"`.

## Disclaimer

This is an independent, community-run advocacy site. It is not affiliated with or endorsed by the
City and County of San Francisco. Always confirm program details with official SFMTA sources.
