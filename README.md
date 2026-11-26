# Chayanth Suthahar — Portfolio

Static site. No build step, no dependencies.

## Files
- `index.html` — home (big name, email, language switcher, `+` menu, intro zoom)
- `projects.html` — project cards, "Currently building", closing contact block
- `drivetrain.html`, `rc-aircraft.html` — case-study pages (8-section structure)
- `site.js` — **the nav** (Home · Projects · Resume · Connect) and the page crossfade.
  Every page includes `<script src="site.js" data-page="..."></script>` where the nav
  goes; edit the link list once in `site.js`, not on each page.
- `site.css` — shared nav, label colour (`--label`) and curtain styles
- `case-study.css` — layout for the case-study pages
- `portfolio/` — print source for the PDF portfolio; `node portfolio/build.js`
  writes `portfolio/Chayanth_Suthahar_Portfolio_DRAFT.pdf`
- `gallery.html` — leftover from an older version of the site; not linked anywhere

## Placeholders
Search for `TODO(Chay)` to find every gap. Case-study pages also show a visible
dashed "To come" box for each one, and an "Image coming soon" slot for any image
file that isn't uploaded yet (upload with the exact filename and it appears).

## Run it locally
Do **not** just double-click the files — some features (and, later, any 3D model)
break under `file://`. Serve the folder instead:

```
cd this-folder
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deploy (GitHub Pages)
Put these three files in your repo (root, or a `/docs` folder), commit, push, and
enable Pages on that branch/folder. `index.html` must be at the folder root so it
loads as the home page.

> If you currently see an old "ENTER / CLICK TO BEGIN" splash screen, that's a
> leftover `index.html` from a previous version. Overwrite it with this one.

## Things to fill in
- **GitHub** — not in the nav until confirmed; uncomment the entry in `site.js`.
- **Case studies / portfolio** — see `TODO(Chay)` comments.
- **New project card** — duplicate a `<section class="proj">` on `projects.html`,
  bump the number, and add it to the Contents list.

## Handy knobs
- **Colour themes** — the `+` button cycles void / paper / blueprint; choice is saved
  and shared across both pages. Black-and-white now because the `void` theme's
  `--accent` is white — change that one token to bring an accent colour back.
- **Description position (home)** — `--indent` at the top of `index.html`.
- **Intro zoom (home)** — `@keyframes camera`; plays once per browser session.
- **Scroll spin (projects)** — `DEG` and `DRIFT` in the last script; desktop only.
