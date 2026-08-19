# Pink Birthday Surprise — Visual Direction

## Three possible approaches

### 1. Petal Postcard
**Very Brief Intro:** A keepsake-like birthday page that feels like opening a hand-painted postcard left on a vanity. Soft blush paper, tiny bows, and illustrated gifts make the surprise feel personal and gently magical.

**Probability:** 0.04

### 2. Sugar Ribbon Studio
**Very Brief Intro:** A playful confectionery-inspired scene with ribbons, cake frosting forms, and glossy charm-like accents. The mood is joyful, bouncy, and a little extra—like a carefully styled birthday table.

**Probability:** 0.07

### 3. Secret Garden Sparkle
**Very Brief Intro:** A floral twilight reveal with glowing lanterns, embroidered botanicals, and animated gift boxes. It is more dreamy and romantic, with a stronger storybook atmosphere.

**Probability:** 0.02

## Chosen approach: Petal Postcard

### Design Movement
**Romantic scrapbooking meets editorial stationery.** The page should look like a contemporary, collectible birthday card: tactile paper textures, hand-lettered moments, glossy details, and graceful layering rather than a generic application dashboard.

### Core Principles
1. **Celebration feels hand-prepared:** Elements should appear tucked, pinned, wrapped, or written with care.
2. **Softness needs contrast:** Baby pink is supported by warm cream, raspberry ink, and dark cherry copy so every message remains legible.
3. **One reveal at a time:** The experience moves from anticipation to delight through intentional interaction, not a crowded information wall.
4. **Cute, not childish:** Bows, hearts, flowers, and tiny mascots are used sparingly with refined composition and tactile materials.

### Color Philosophy
The site is built around **petal pink** as its emotional field: affectionate, warm, and celebratory without turning fluorescent. Porcelain cream creates breathing room, while plum-cherry ink provides a grounded, elegant counterpoint for text and controls. Buttercream and strawberry accents are reserved for moments that should feel unwrap-worthy.

### Layout Paradigm
The page follows an **unfolding postcard composition** rather than a centered landing-page grid. A slim letterhead sits above an asymmetrical hero: a text note on the left, a tall gift tableau on the right, with floating decorations crossing between them. Below, individual keepsakes appear as overlapping paper cards that read like a small birthday care package.

### Signature Elements
- **Torn-edge paper panels** with subtle grain and soft shadow.
- **Satin ribbon paths** that lead attention toward the next interaction.
- **Wax-seal buttons and bow-topped gift boxes** as the recurring action affordances.

### Interaction Philosophy
Every interaction should feel like opening or discovering something: lift a lid, turn a note, or release confetti. Controls have gentle spring feedback, clear focus states, and immediate visual confirmation. The page never asks users to decipher a complex flow.

### Animation
Entrance motion uses small cascades: cards lift from `translateY(12px)` with opacity changes, while stickers float by a few pixels in a slow, offset loop. Gift-opening is the rare high-delight event: a 420ms lid lift, a small burst of hearts and petals, and a message fade-in. Hover effects stay under 220ms, use a crisp custom ease-out, and all decorative motion is disabled for reduced-motion preferences.

### Typography System
**DM Serif Display** is used for large birthday wishes and expressive editorial headings. **Manrope** supports all body copy, buttons, and labels for clean readability. Headings use a warm plum color, measured tracking, and high contrast; supporting copy stays compact and confident, never overly ornate.

### Brand Essence
**A tiny digital birthday keepsake for people who want their celebration to feel thoughtfully wrapped, not merely announced.**

Personality: **Tender, playful, keepsake-worthy.**

### Brand Voice
The writing is direct, affectionate, and a little theatrical—like a best friend presenting the final ribbon.

Example lines:

> “A little something sweet, saved just for you.”

> “One more ribbon. Then the surprise is yours.”

Generic filler such as “Welcome to our website” and “Get started today” is not used.

### Wordmark & Logo
The mark is a **looped satin bow with a tiny sparkling heart at its knot**. It is a bold graphic symbol only—recognizable at favicon scale—and it is paired with a hand-set “Birthday, darling” wordmark only when space permits.

### Signature Brand Color
**Petal Pop — #FFB8CB.** A lively yet soft pink used for ribbons, primary actions, and the most celebratory moments.

## Style Decisions

- Use light backgrounds throughout; never place primary copy over an unprotected textured or illustrated surface.
- Use asymmetric columns, overlapping paper layers, and mobile-friendly stacking instead of uniform card grids.
- Keep visual warmth in materials and silhouette rather than using bright gradients or neon effects.
- The master mark—a looped satin bow with a tiny sparkling heart—appears in the header, primary actions, present seal, reveal, and footer.
- Primary actions should read as tactile wax seals, ribbon tabs, or sealed cards before they read as conventional buttons.
- The central gift reveal uses layered paper, labels, and wrapped material cues rather than a flat app-style icon treatment.
- The experience is a mobile-first route sequence: welcome, little notes, gift, and birthday wish. Each chapter fits comfortably into a focused phone screen instead of relying on one long scroll.
- The gift’s visible opening animation must end in a dedicated reveal card and include an explicit “Open it again” control, making the delight replayable.
