# Blake Beal Portfolio V2

A modern, clean portfolio website showcasing my work as a Product Manager who builds.

## Quick Start

**Just double-click `start.bat`** — this will install dependencies (first run) and start the dev server.

Then open: http://localhost:5173

## Tech Stack

- **React 19** + **Vite** — Fast, modern frontend
- **React Router** — Client-side routing for project detail pages
- **TypeScript** — Type-safe development
- **Tailwind CSS v4** — Utility-first styling with CSS-based config
- **Custom fonts** — Playfair Display (serif), DM Sans (body), JetBrains Mono (code)

## Features

- **Homepage** — Hero, About, Projects overview, Experience, Contact
- **Project Detail Pages** — Individual pages for each project with full case study structure
- **Responsive Design** — Mobile-first, works on all devices
- **GitHub Pages Ready** — Static build for easy deployment

## Customizing

### Adding Your Headshot

1. Add your headshot image to `public/` (e.g., `public/headshot.jpg`)
2. Update `src/components/Hero.tsx` to display it instead of the placeholder

### Adding Project Screenshots

1. Add screenshots to `public/projects/` (e.g., `public/projects/garminsights.png`)
2. Update `src/components/Projects.tsx` and `src/components/ProjectDetail.tsx` to display them

### Writing Project Stories

Each project has placeholder content for telling the full story. Edit `src/data/projects.ts` to fill in:

- **Origin** — What sparked the idea, the frustration that led to building it
- **Approach** — How you started, key decisions, how you used Cursor/AI
- **Challenges** — Technical hurdles, moments you got stuck, wrong turns
- **Iterations** — How the project evolved, features added/removed
- **Outcome** — What it does today, how you use it, the value it provides
- **Learnings** — What you learned, what you'd do differently

### Updating Content

- **Resume/Experience**: Edit `src/components/Experience.tsx`
- **Projects overview**: Edit `src/data/projects.ts`
- **Project detail pages**: Edit `src/data/projects.ts` (story sections)
- **About text**: Edit `src/components/About.tsx`
- **Contact info**: Edit `src/components/Contact.tsx`

## Deploying to GitHub Pages

1. Update `vite.config.ts` with your repo name:
   ```ts
   base: '/your-repo-name/',
   ```

2. Run the deploy command:
   ```bash
   npm run deploy
   ```

3. In your GitHub repo settings, set Pages source to the `gh-pages` branch.

## Project Structure

```
V2 Portfolio/
├── public/
│   ├── favicon.svg
│   └── projects/              # Add project screenshots here
├── src/
│   ├── components/
│   │   ├── Header.tsx         # Navigation (uses React Router)
│   │   ├── Hero.tsx           # Main hero with headshot placeholder
│   │   ├── About.tsx          # About section
│   │   ├── Projects.tsx       # Project cards (links to detail pages)
│   │   ├── ProjectDetail.tsx  # Individual project case study page
│   │   ├── Experience.tsx     # Work history + skills
│   │   ├── Contact.tsx        # Contact info + social links
│   │   ├── Footer.tsx         # Footer
│   │   └── HomePage.tsx       # Home page wrapper
│   ├── data/
│   │   └── projects.ts        # All project data & stories
│   ├── App.tsx                # Router setup
│   ├── main.tsx
│   └── index.css              # Tailwind config + custom styles
├── index.html
├── start.bat                  # One-click launcher
└── package.json
```

## URLs

- `/` — Homepage
- `/project/garminsights` — GarminSights case study
- `/project/hearth` — Hearth case study
- `/project/whispertranscribe` — WhisperTranscribe case study
- `/project/vboard` — V Board case study
- `/project/bealglass` — Beal Glass case study

## License

MIT
