# AGENTS.md - Portfolio Codebase Guide

## Project Overview
Personal portfolio SPA for Luca Del Corona (Android Native & Cross-Platform Developer).
Stack: **React 19 + TypeScript 7 + Vite 8 + Tailwind CSS 4 + React Router DOM 7**.
Deployed on **Vercel** with SPA rewrites configured in `vercel.json`.
There is **no styled-components** and no styled-components dependency - styling is Tailwind utilities plus CSS custom-property tokens.

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
  App.tsx           # LangProvider + BrowserRouter + the route tree
  pages/            # Routed pages, default exports
    Home.tsx        # The single scrollable column (index route)
    CaseStudy.tsx   # /projects/:slug, resolves via getCaseStudy
  components/        # Section components + shared UI (see list below)
    RootLayout.tsx       # Layout route: theme state + Nav + content wrapper + <Outlet />
    CaseStudyHeader.tsx  # Case study title, meta badges, links, cover image
    CaseStudySection.tsx # One numbered case study section (body, bullets, callout)
  hooks/            # useInView, useDocumentTitle, useContactForm, useGithubContributions, useLeetCode
  context/          # LangContext (en/it i18n, lazy-loads it.json)
  data/             # Pure TS data files - single source of truth for content
    caseStudies.ts  # CaseStudy[] + getCaseStudy(slug)
  styles/tailwind.css  # Tailwind import + @theme tokens + keyframes
  assets/           # Images, SVGs (imported `?react`), lang/en.json + lang/it.json
```

The `Home` page (`src/pages/Home.tsx`) renders a single scrollable column:
`Nav → Hero (#hero) → Projects (#projects) → Skills (#skills) → Stats (#stats) → Timeline (#timeline) → Achievements (#achievements) → Contact (#contact) → Footer`.
The `/projects/:slug` page renders `Nav` + the case study body + `Footer`.

## Content Is Driven by Data Files

All editable content lives in `src/data/`. **Never hardcode content in components.**

| File | Holds |
|---|---|
| `src/data/site.ts` | `SITE` - name, avatar, resume URL, email, social links (`SocialLink[]`) |
| `src/data/portfolio.ts` | Project entries `{ id, title, imgUrl, imgContain?, stack[], link, source?, caseStudy? }` (`caseStudy` is the slug of an optional case study page) |
| `src/data/caseStudies.ts` | `CaseStudy[]` + `getCaseStudy(slug)`: case study pages (`{ slug, projectId, title, subtitleKey, roleKey, stack[], coverImg?, coverCaptionKey?, liveUrl?, sourceUrl?, sections[] }`, sections `{ id, titleKey, bodyKey, bulletsKey?, calloutKey? }`) |
| `src/data/timeline.ts` | **Work-only** experience entries `{ id, year, type, title, duration, details[], chips[] }` |
| `src/data/achievements.ts` | Achievement entries `{ id, year?, title, subtitle, dotColor?, detailsKey, chips[] }` |
| `src/data/skills.ts` | Skill groups `{ id, labelKey, icon, items[] }` |
| `src/data/stats.ts` | `GITHUB_USERNAME`, `LEETCODE_USERNAME`, `LEETCODE_URL`, `COMPETITIVE_PROFILES` |
| `src/data/techIcons.ts` | `TECH_ICONS` map: tech label → icon class |
| `src/data/endpoints.ts` | `CONTACT_FORM_ENDPOINT` (Formspree) |

Images are imported at the top of `portfolio.ts` from `src/assets/`.
Projects are ordered newest-first by descending `id` (current highest: `14`).
`timeline.ts` holds ids `0`-`2`; `achievements.ts` holds ids `3`-`9` (education ids `3`/`4`, certifications `5`-`9`). `year` is optional - certifications render without a date.

### Adding a Portfolio Project
1. Place the image under `src/assets/projects/`.
2. Import it at the top of `src/data/portfolio.ts`:
   ```ts
   import myProjectImage from "../assets/projects/myProject.webp";
   ```
3. Prepend a new object to the array with `id` = current highest `id` + 1 (currently `15`):
   ```ts
   {
       id: 13,
       title: "My Project",
       imgUrl: myProjectImage,
       imgContain: true,          // optional: object-contain for logos/screenshots
       stack: ["Flutter", "Dart"],
       link: "https://github.com/VoidElle/my-project",
       source: "https://github.com/VoidElle/my-project"   // optional: only when link is a live site and the repo differs
   },
   ```
   Projects are displayed in descending `id` order (newest first). Add the matching
   description key to `portfolio.projects.<id>` in **both** language files.

### Adding a Timeline Entry (work)
1. Open `src/data/timeline.ts`.
2. Prepend a new object; `id` must be unique among timeline entries (currently `0`-`2`):
   ```ts
   {
       id: 3,
       year: '2026',
       type: 'work',
       title: 'Company Name - Role',
       duration: 'Actual',          // exact 'Actual' is replaced by t('timeline.current')
       details: [],                 // rendered from i18n; keep in sync or leave empty
       chips: ["Kotlin", "Android", "Firebase"]
   },
   ```
   Timeline is work-only and renders top-to-bottom in array order - keep it newest-first.

### Adding an Achievement
1. Open `src/data/achievements.ts`.
2. Prepend a new object with a unique `id` (currently `3`-`9`, next is `10`):
   ```ts
   {
       id: 10,
       year: '2026',                // optional; omit for undated certifications
       title: 'Institution',
       subtitle: 'Course or diploma',
       dotColor: '#3b82f6',        // optional; defaults to accent
       detailsKey: 'achievements.entries.10.details',
       chips: ["Networking", "Security"]
   }
   ```
3. Add `achievements.entries.10.details` to **both** language files.

### Adding a Case Study
A case study is an opt-in internal SPA page at `/projects/:slug`, linked from the project card's
case-study pill. Four steps:

1. Add the slug to the matching project in `src/data/portfolio.ts`:
   ```ts
   caseStudy: "my-project-slug"
   ```
   The slug is kebab-case and must match the `caseStudies.ts` `slug` string exactly.
2. Add a `CaseStudy` object to `src/data/caseStudies.ts`. `projectId` must match the project's
   `id`, and `slug` must equal the value from step 1:
   ```ts
   {
       slug: "my-project-slug",
       projectId: 15,
       title: "My Project",                   // proper noun, not translated
       subtitleKey: "caseStudies.my-project-slug.subtitle",
       roleKey: "caseStudies.my-project-slug.role",
       stack: ["Flutter", "Dart"],
       coverImg: myProjectCover,              // optional; omit to reuse the project cover
       coverCaptionKey: "caseStudies.my-project-slug.coverCaption",  // optional
       liveUrl: "https://example.com",        // optional
       sourceUrl: "https://github.com/VoidElle/my-project",          // optional
       sections: [
           {
               id: "overview",
               titleKey: "caseStudies.my-project-slug.sections.overview.title",
               bodyKey: "caseStudies.my-project-slug.sections.overview.body"
               // bulletsKey? and calloutKey? are optional
           }
       ]
   }
   ```
3. Add the matching `caseStudies.<slug>.*` copy (`subtitle`, `role`, `summary`, optional
   `coverCaption`, then `sections.<id>.title` + `.body`, optional `.bullets` / `.callout`) to **both**
   `en.json` and `it.json`, with identical shape.
4. Add the slug to the seed list in `docs/case-studies/index.md` (Locked Decisions #4) and record its
   source material in `docs/case-studies/06-content-seed.md`.

`vercel.json` still needs no change: it already rewrites every path to `/`, so the deep route works.

## Routing Conventions

Routes are defined in `src/App.tsx` using nested `<Route>` syntax under a layout route.
`src/components/RootLayout.tsx` owns the theme state and renders `Nav` plus the shared content
wrapper (`max-w-[860px] w-11/12 mx-auto`) around an `<Outlet />`:

```tsx
<BrowserRouter>
  <Routes>
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="projects/:slug" element={<CaseStudy />} />
    </Route>
  </Routes>
</BrowserRouter>
```

Pages are default-exported components in `src/pages/`. `Home` is the scroll column; `CaseStudy`
reads `useParams().slug`, resolves it with `getCaseStudy`, and renders the `caseStudies.notFound.*`
fallback when the slug is unknown. Each page renders its own `Footer`; the layout does not.

`vercel.json` rewrites all paths to `/` to support client-side routing on Vercel. Deep links to
`/projects/:slug` already work - do not edit the rewrites.

## Dark Mode

Implemented in `App.tsx` with a single `theme` state (`'dark' | 'light'`).
- Initialised from `window.matchMedia('(prefers-color-scheme: dark)')`.
- Toggle adds/removes the `dark` class on `document.documentElement`.
- Theme is expressed through tokens in `tailwind.css` flipped by `.dark`; the
  `dark:` variant exists (`@variant dark (&:where(.dark, .dark *))`) but is rarely needed.

## Styling Conventions

- **Tailwind CSS 4** is the primary styling tool; utility classes go directly on JSX elements.
- Design tokens come from `@theme` in `src/styles/tailwind.css`. Use the token utilities, never
  raw palette colors (`stone-*`, `violet-*`) or hex literals in JSX:

| Utility | Purpose |
|---|---|
| `bg-main` | page background |
| `bg-main-blur` | translucent page background (sticky nav) |
| `bg-surface` | cards, inputs, chips |
| `border-subtle` | all borders / dividers |
| `border-strong` | hover borders |
| `text-fg` | primary text |
| `text-muted` | secondary text |
| `text-accent` | accent text, links, focus rings |
| `bg-accent-soft` | soft accent fills |
| `text-accent-contrast` | text on accent fills |
| `font-head` | Space Grotesk - headings + brand |
| `font-body` | Parkinsans - body text |

- Content wrapper: `max-w-[860px] w-11/12 mx-auto` - keep all sections within this wrapper.
- Sections use `py-20` with `border-t border-subtle` dividers.
- Responsive breakpoints: `md:` (tablet+) plus `sm:` / `min-[480px]:` for grids.

## Reusable Components

- **`<AccordionItem>`** - collapsible row `{ id, title, subtitle, dotColor?, defaultOpen?, children }`.
  Used by `Timeline` (work history) and `Achievements` (education & certifications).
- **`<PortfolioItem>`** - one project card; receives `{ title, imgUrl, imgContain?, description, stack, link, source?, caseStudy?, animDelay? }`.
- **`<CaseStudyHeader>`** - case study header; receives `{ title, subtitle, role, stack, links, coverImg?, coverCaption?, titleRef? }`.
- **`<CaseStudySection>`** - one numbered case study section; receives `{ title, body?, bullets?, callout? }`. Body text supports `**bold**` inline.
- **Section headings are inline.** Each section renders the same pattern: an accent uppercase
  `t('<ns>.label')`, an `<h2 className="font-head …">` title, and a muted `t('<ns>.sub')` subtitle.
- **`src/components/Title.tsx`** is currently **unused** (the port moved headings inline). It can be
  removed; do not add new `<Title>` usages.

## External Integrations

| Service | Where | Purpose |
|---|---|---|
| Formspree | `src/data/endpoints.ts` → `useContactForm` | Contact form submissions |
| Vercel Analytics | `src/main.tsx` | Page-view analytics |
| Vercel Speed Insights | `src/main.tsx` | Performance monitoring |
| GitHub contributions API | `src/hooks/useGithubContributions.ts` (`github-contributions-api.jogruber.de`, user `VoidElle`) | Stats calendar, total, streak |
| LeetCode API | `src/hooks/useLeetCode.ts` (`alfa-leetcode-api.onrender.com`) | Stats card; gated by `LEETCODE_USERNAME`, currently empty |

The contact endpoint is the Formspree URL in `src/data/endpoints.ts` - there is **no Getform
integration**. Do not point it at a different provider.

## Key Files at a Glance

| File | Role |
|---|---|
| `src/App.tsx` | Provider + BrowserRouter + the route tree |
| `src/components/RootLayout.tsx` | Layout route: theme state + Nav + content wrapper + `<Outlet />` |
| `src/pages/Home.tsx` / `src/pages/CaseStudy.tsx` | The two routed pages (scroll column / `/projects/:slug`) |
| `src/hooks/useDocumentTitle.ts` | Sets `document.title` for a page, restores it on cleanup |
| `src/context/LangContext.tsx` | `useLang()` / `t()` i18n |
| `src/data/portfolio.ts` | All project entries |
| `src/data/caseStudies.ts` | Case study pages + `getCaseStudy(slug)` |
| `src/data/timeline.ts` | Work experience entries |
| `src/data/achievements.ts` | Education/achievement entries |
| `src/data/site.ts` | Site identity + social links |
| `src/styles/tailwind.css` | Tailwind entry + `@theme` tokens + keyframes |
| `vercel.json` | SPA rewrite rule for Vercel |
