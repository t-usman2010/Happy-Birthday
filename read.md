# 🎀 Birthday 💌

> A tiny digital keepsake, wrapped with love and made for one very special birthday.

This is an offline-friendly, mobile-first birthday experience built to feel like opening a handmade petal postcard. Follow the little journey through personal notes, a gift reveal, confetti, music, and one final birthday wish. ✨

<p align="center">
  <strong>🌸 Tender · Playful · Keepsake-worthy 🌸</strong>
</p>

## 💖 What Makes It Special

| ✉️ Personal | 🎁 Playful | 🎵 Memorable |
| --- | --- | --- |
| A journey written especially for Isbah | A replayable gift reveal with confetti | Local artwork and a custom birthday track |

### Little details

- 🗺️ A four-step journey with focused birthday scenes
- 🎀 A tactile, postcard-inspired visual style with bows, paper, and soft pinks
- 🎉 A larger celebration burst when the gift opens
- 🔁 An explicit replay action so the surprise can be enjoyed again
- 🔊 Persistent play, pause, mute, and volume controls
- 📱 Responsive layouts for phones, tablets, and desktops
- 📴 All birthday images, branding, and music bundled locally for offline use

## 🛠️ Built With

`React 19` · `TypeScript` · `Vite` · `Wouter` · `Tailwind CSS 4` · `Radix UI` · `Lucide` · `Express` · `pnpm`

## 🚀 Run It Locally

You will need **Node.js 18+** and **pnpm 10+**.

```bash
pnpm install
pnpm dev
```

Open the local URL printed in the terminal. Vite commonly uses `http://localhost:5173`.

## 📦 Production Build

```bash
pnpm build
pnpm start
```

The production server runs on port `3000` by default. To use another port:

```bash
PORT=4000 pnpm start
```

## 🧭 The Birthday Journey

| Route | Chapter |
| --- | --- |
| `/` | 🌷 The welcome scene |
| `/little-notes` | 💌 A collection of personal notes |
| `/gift` | 🎁 The interactive gift reveal |
| `/wish` | 🎂 The final birthday wish |

## 🗂️ Project Map

```text
client/
  public/media/       Local birthday images and music
  src/
    components/       Shared layout and UI components
    pages/            Birthday journey pages
    contexts/         Theme and application context
    App.tsx           Routes and app providers
server/
  index.ts            Express server for production
shared/
  const.ts            Shared constants
```

## 🧪 Useful Commands

```bash
pnpm check     # Type-check the project
pnpm build     # Build the client and production server
pnpm format    # Format files with Prettier
pnpm preview   # Preview the Vite build locally
```

## 🎶 Local Media

Birthday-specific assets live in `client/public/media/`:

- `petal-postcard-hero.jpg` — hero artwork
- `pink-birthday-cake.jpg` — cake artwork
- `petal-bow-heart-logo.png` — bow-heart logo and favicon
- `isbah-birthday-petal-waltz.mp3` — background music

No hosted media URLs are required. The whole experience can travel with the project. 🌙

## ⭐ Leave a Little Sparkle

If this project made you smile, inspired your own surprise, or helped you celebrate someone wonderful, consider giving it a star. Every ⭐ is a tiny high-five for thoughtful digital gifts.

<p align="center">
  Made By Taha Usman, paper textures, and a suspicious number of bows.
</p>
