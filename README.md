# Peak Fitness — Gym Demo Site

A brutalist-design fitness website built with [Hugo](https://gohugo.io/) and [Tailwind CSS](https://tailwindcss.com/).

**Live site:** [boonziman.github.io/gymdemo](https://boonziman.github.io/gymdemo/)

## Pages

| Page | Description |
|------|-------------|
| **Home** | Hero with typing animation, brand methodology, training modes, trainer preview, pricing |
| **Schedule** | 7-day class grid with brutalist UI, sidebar navigation, class detail modals |
| **Roster** | Trainer cards with hover-reveal bios and specialties |
| **Memberships** | Pricing tiers (Standard / Elite) with feature comparison |

## Tech Stack

- **Hugo** — Static site generator
- **Tailwind CSS** — Utility-first CSS (CDN)
- **GitHub Pages** — Hosting via GitHub Actions
- **Google Fonts** — Oswald + Space Grotesk

## Project Structure

```
├── assets/css/          # Custom CSS (animations, components)
├── content/             # Page content (Markdown + front matter)
│   ├── _index.md        # Homepage
│   ├── schedule/        # Schedule page
│   ├── roster/          # Roster page
│   └── memberships/     # Memberships page
├── layouts/
│   ├── _default/
│   │   └── baseof.html  # Master template (head, Tailwind config, scripts)
│   ├── partials/        # Shared components (header, footer, logo)
│   ├── shortcodes/      # Reusable shortcodes (CTA, SEO)
│   ├── index.html       # Homepage layout
│   ├── schedule/        # Schedule page layout
│   ├── roster/          # Roster page layout
│   └── memberships/     # Memberships page layout
├── hugo.toml            # Site configuration
└── .github/workflows/   # GitHub Actions deployment
```

## Local Development

```bash
# Install Hugo (macOS)
brew install hugo

# Run dev server
hugo server -D

# Build for production
hugo --minify
```

## Design

Dark-mode brutalist aesthetic with:
- Neon green (#CCFF00) accent color
- Zero border-radius (sharp edges everywhere)
- Scanline and typing animations
- HUD-style corner brackets
- Grayscale imagery with high contrast

---

*Built as a portfolio demo by [BoonZiman](https://github.com/BoonZiman)*
