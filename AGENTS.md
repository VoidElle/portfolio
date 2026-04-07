# AGENTS.md — Portfolio Codebase Guide

## Project Overview
Personal portfolio SPA for Luca Del Corona (Android Native & Cross-Platform Developer).
Stack: **React 19 + TypeScript 5 + Vite 7 + Tailwind CSS 4 + styled-components 6 + React Router DOM 7**.
Deployed on **Vercel** with SPA rewrites configured in `vercel.json`.

## Developer Workflows

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Type-check (tsc) then bundle (vite build) → dist/
npm run preview   # Serve the dist/ build locally
```

No test suite exists. Build validation is `tsc && vite build`.

## Architecture

```
src/
  main.tsx          # Entry point: mounts <SpeedInsights />, <Analytics />, <App />
  App.tsx           # BrowserRouter + Routes + dark-mode state
  components/       # Section components (Intro, Portfolio, Timeline, Contact, Footer, Title)
  pages/tapit/      # Legal pages (PrivacyPolicy, CookiePolicy) for the "TapIt" app
  data/             # Pure TS data files — single source of truth for content
  styles/tailwind.css  # Global Tailwind import (only file needed for Tailwind)
  assets/           # Images imported directly in data/ or components/
```

The main page renders a single scrollable column: `Intro → Portfolio → Timeline → Contact → Footer`.

## Content Is Driven by Data Files

All editable content lives in `src/data/`. **Never hardcode content in components.**

- **`src/data/portfolio.ts`** — Array of project objects `{ id, title, imgUrl, stack[], link }`.
  - Images are imported at the top of the file from `src/assets/`.
  - Projects are ordered newest-first by descending `id`.
- **`src/data/timeline.ts`** — Array of experience/education entries `{ id, year, title, duration, details[], chips[] }`.

### Adding a Portfolio Project
1. Place the image under `src/assets/projects/`.
2. Import it at the top of `src/data/portfolio.ts`:
   ```ts
   import myProjectImage from "../assets/projects/myProject.png";
   ```
3. Prepend a new object to the array with `id` = current highest `id` + 1:
   ```ts
   {
       id: 7,
       title: "My Project",
       imgUrl: myProjectImage,
       stack: ["Flutter", "Dart"],
       link: "https://github.com/VoidElle/my-project"
   },
   ```
   Projects are displayed in descending `id` order (newest first).

### Adding a Timeline Entry
1. Open `src/data/timeline.ts`.
2. Prepend a new object; `id` must be unique (use the next sequential integer):
   ```ts
   {
       id: 4,
       year: '2025',
       title: 'Company Name - Role',
       duration: '1 year',          // or 'Actual' for current position
       details: [
           "Description of responsibilities and achievements."
       ],
       chips: ["Kotlin", "Android", "Firebase"]
   },
   ```
   Timeline entries are rendered top-to-bottom in array order, so keep them newest-first.

## Routing Conventions

Routes are defined in `src/App.tsx` using nested `<Route>` syntax:

```tsx
<Route path="/">
  <Route index element={/* Main portfolio page */} />
  <Route path="tapit">
    <Route path="privacy-policy" element={<PrivacyPolicy />} />
    <Route path="cookie-policy" element={<CookiePolicy />} />
  </Route>
</Route>
```

`vercel.json` rewrites all paths to `/` to support client-side routing on Vercel.
New pages go in `src/pages/<product>/` and get a nested route added here.

## Dark Mode

Implemented entirely in `App.tsx` with a single `theme` state (`'dark' | 'light'`).
- Initialised from `window.matchMedia('(prefers-color-scheme: dark)')`.
- Toggle adds/removes the `dark` class on `document.documentElement`.
- All dark-mode styles use Tailwind's `dark:` variant (e.g. `dark:bg-stone-900`).
- The toggle button is the **only interactive UI element** in `App.tsx`.

## Styling Conventions

- **Tailwind CSS 4** is the primary styling tool; utility classes go directly on JSX elements.
- **styled-components** is installed but not yet used — do not add new styled-components.
- Color palette: `stone-*` (neutral grays) + `violet-300` / `orange-300` (theme toggle accents).
- Max content width: `max-w-5xl w-11/12 mx-auto` — keep all new sections within this wrapper.
- Responsive breakpoints used: `md:` (tablet+); no `sm:` or `lg:` except the fixed-position toggle button.

## Reusable Components

- **`<Title>`** — section headings with underline decoration. Always use this for section titles.
  ```tsx
  <Title id="optional-anchor">Section Name</Title>
  ```
- **`<PortfolioItem>`** — renders one project card; receives `{ title, imgUrl, stack, link }`.
- **`<TimelineItem>`** — renders one timeline entry; receives `{ id, year, title, duration, details, chips }`.

## External Integrations

| Service | Where | Purpose |
|---|---|---|
| Vercel Analytics | `src/main.tsx` | Page-view analytics |
| Vercel Speed Insights | `src/main.tsx` | Performance monitoring |
| Getform | `src/components/Contact.tsx` (form `action` URL) | Contact form submissions |

The Getform endpoint URL is hardcoded in `Contact.tsx`. Do not commit a different endpoint.

## Key Files at a Glance

| File | Role |
|---|---|
| `src/App.tsx` | Routing + dark-mode logic |
| `src/data/portfolio.ts` | All project entries |
| `src/data/timeline.ts` | All experience/education entries |
| `src/components/Title.tsx` | Shared section-heading component |
| `vercel.json` | SPA rewrite rule for Vercel |
| `src/styles/tailwind.css` | Tailwind entry point (imported once in `main.tsx`) |

