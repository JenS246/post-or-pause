# Post or Pause?

Post or Pause? is a short classroom mini-game for paralegal students. Each 10-card round asks students to choose the right communication method, audience, or whether a workplace message should be sent at all.

## How it works

- A round draws 10 unique cards from a 45-card deck.
- The draw is balanced across three card types and shuffled on every round.
- Students receive immediate feedback and move forward when they are ready.
- The final screen offers a low-pressure score and a review of missed cards.
- All state stays in the browser. There is no login, API, database, or backend.

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Project structure

- `index.html`: accessible screen structure and interface copy
- `styles.css`: responsive visual system, reduced-motion handling, and dark mode
- `app.js`: card deck, randomization, gameplay, scoring, and review logic

## Deployment

The site is designed for GitHub Pages and deploys with `.github/workflows/pages.yml`.

- Frontend: `https://jens246.github.io/post-or-pause/`
- Source: `https://github.com/JenS246/post-or-pause`
- Backend: none
- Data location: scenarios are stored in `app.js`
- Backup and restore: clone the GitHub repository; there is no runtime data to restore

No external services are required.
