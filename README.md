# Chayanth Suthahar — Portfolio

Two-page static site. No build step, no dependencies.

## Files
- `index.html` — home (big name, connect, language switcher, `+` colour theme, intro zoom)
- `projects.html` — projects page (per-project titled sections; Drivetrain filled in)
- `drivebase.png` — the drivetrain render (transparent, already web-optimised)

Keep all three in the same folder.

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
- **Home** — real email (`say hi`/`connect` → mailto + LinkedIn is set), GitHub URL
  (the `GH` link), and drop a `resume.pdf` beside the files for the Resume link.
- **Projects** — projects `02` and `03` are templates. Duplicate a
  `<section class="project">`, bump the number, set the title/tag/render/lede and
  the Requirements + Details lists. Add `class="spec spec--flip"` to alternate the
  render side.
- **Renders** — export transparent PNGs, 16:9-ish. The page greyscales them for the
  black-and-white look; delete the `filter:` line in the `.spec__media img` rule to
  show colour.

## Handy knobs
- **Colour themes** — the `+` button cycles void / paper / blueprint; choice is saved
  and shared across both pages. Black-and-white now because the `void` theme's
  `--accent` is white — change that one token to bring an accent colour back.
- **Description position (home)** — `--indent` at the top of `index.html`.
- **Intro zoom (home)** — `@keyframes camera`; plays once per browser session.
- **Scroll spin (projects)** — `DEG` and `DRIFT` in the last script; desktop only.
