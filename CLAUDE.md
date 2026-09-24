# Instructions for Claude

## Git branches
- Always commit and push to the `beta-pull` branch. Do not create `claude/*` branches or any other new branch.
- If `beta-pull` doesn't exist or is behind `main`, recreate or update it from the latest `main` first.
- Open pull requests from `beta-pull` into `main`. The owner merges them.

## Project layout
- The portfolio app (React + Vite + Tailwind) lives in the `shamsudeen-portfolio/` subfolder, not the repo root.
- Project cards are defined in `shamsudeen-portfolio/src/data/projects.js`; screenshots go in `shamsudeen-portfolio/public/projects/`.
- Check changes with `npm run build` inside `shamsudeen-portfolio/`.
