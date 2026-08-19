# Run Isbah’s Birthday Surprise Locally

This project archive contains the React source code and every required local media file. The images, logo, favicon, and the **Isbah’s Petal Waltz** music track are all stored in `client/public/media/`, so they do not depend on hosted asset URLs.

## Quick start

Install a current Node.js release, then open a terminal inside the extracted project folder and run:

```bash
pnpm install
pnpm dev
```

Open the local address printed by the terminal, normally `http://localhost:3000`.

## What is bundled

| Item | Local location |
| --- | --- |
| Hero birthday artwork | `client/public/media/petal-postcard-hero.jpg` |
| Birthday cake artwork | `client/public/media/pink-birthday-cake.jpg` |
| Bow-heart logo and favicon | `client/public/media/petal-bow-heart-logo.png` |
| Background music | `client/public/media/isbah-birthday-petal-waltz.mp3` |

## Production build

To create a production build on your machine, run:

```bash
pnpm build
pnpm start
```

Then open `http://localhost:3000`. The multi-page birthday routes, music player, confetti gift reveal, and all media assets remain local to the extracted project.
