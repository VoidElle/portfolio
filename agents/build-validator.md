---
name: build-validator
description: Validates, diagnoses, and fixes build and TypeScript errors in this Vite + React portfolio. Use when npm run build fails, tsc reports type errors, the dev server breaks, or a change needs verifying before it is considered done.
---

# Build Validator

Specialist for keeping this portfolio compiling. The only automated gate in this repo is the production build - there is no test suite, no linter, and no CI type check.

## Commands

```bash
npm run build     # tsc && vite build  → dist/
npm run dev       # vite dev server    → http://localhost:5173
npm run preview   # serve dist/        → http://localhost:4173
```

`npm run build` is the source of truth: it runs `tsc` first, then `vite build`. A change is only "done" when this exits 0.

## Stack Versions (do not silently upgrade)

- React 19.3, react-dom 19.3
- TypeScript 7.0.2 (`tsc` is invoked from `node_modules`)
- Vite 8.3, `@vitejs/plugin-react` 6.1
- Tailwind CSS 4.3 via `@tailwindcss/postcss`
- react-router-dom 7.18
- vite-plugin-svgr 5.2 (imports SVG as a React component with `?react`)

Config files: `tsconfig.json`, `tsconfig.node.json`, `vite.config.js`, `postcss.config.js`. There is no ESLint config.

## Common Error Sources

| Error | Likely cause | Fix |
|---|---|---|
| TS error in `src/data/portfolio.ts` | Wrong/missing field on a project object | Schema is `{ id, title, imgUrl, imgContain?, stack[], link, source? }` |
| TS error in `src/data/timeline.ts` | Wrong/missing field on a work entry | Schema is `{ id, year, type, title, duration, details[], chips[] }`; `type` is `'work'` (Timeline renders work-only) |
| TS error in `src/data/achievements.ts` | Wrong/missing field on an achievement | Schema is `{ id, year?, title, subtitle, dotColor?, detailsKey, chips[] }` |
| TS error in `src/data/caseStudies.ts` | Wrong/missing field on a case study or section | `CaseStudy` is `{ slug, projectId, title, subtitleKey, roleKey, stack[], coverImg?, coverCaptionKey?, liveUrl?, sourceUrl?, sections[] }`; section is `{ id, titleKey, bodyKey, bulletsKey?, calloutKey? }` |
| TS error in `src/data/skills.ts` | Wrong/missing field on a skill group/item | Group is `{ id, labelKey, icon, items[] }`; item is `{ label, icon? }` |
| TS error in `src/data/stats.ts` / `site.ts` | Wrong type on a config constant | `GITHUB_USERNAME`, `LEETCODE_USERNAME`, `LEETCODE_URL` are strings; `SITE.socials` is `SocialLink[]` |
| Image import fails | Asset missing or wrong folder | Images live in `src/assets/projects/` (project cards) or `src/assets/` (site assets) |
| `Cannot find module './x'` | Wrong relative path or missing extension | Paths are relative and extensionless for `.ts`/`.tsx`; images keep their extension |
| SVG import error | Missing `?react` suffix | `import Icon from '../assets/sun.svg?react'` |
| `t('...')` returns a raw key | Key missing from `src/assets/lang/en.json` | Add the key to `en.json` (namespaces: `nav`, `intro`, `hero`, `projects`, `portfolio`, `skills`, `stats`, `timeline`, `achievements`, `contact`, `footer`, `caseStudies`); `t()` falls back to the key string |
| i18n shape error at runtime | `it.json` diverged from `en.json` | `Translations = typeof en`, and `it.json` is cast `as Translations` - TS will NOT catch drift. Keep both files structurally identical |
| JSX compile error | Malformed JSX or missing type on `React.FC` props | Props interfaces are declared in-file; no `React` default import needed in Vite 8 |
| Case study route renders not-found | `portfolio.ts` `caseStudy` slug does not equal any `caseStudies.ts` `slug` | Make the strings identical (kebab-case); `getCaseStudy` finds by exact `slug`, and `projectId` should match the portfolio `id` |
| Route not rendering | Not registered in `src/App.tsx` | Add a nested `<Route>` under `<Route element={<RootLayout />}>`; pages live in `src/pages/` |

## Process

1. Run `npm run build` and capture the FULL output.
2. Fix TypeScript errors before touching Vite errors - `tsc` runs first and blocks the build.
3. Fix in dependency order: data files → hooks/context → components → `App.tsx`.
4. Re-run `npm run build` to confirm clean.
5. If still failing after 3 attempts, report the exact error string with file and line. Do not guess or suppress with `any` / `@ts-ignore`.

## Rules

- Never weaken types to make the build pass. Fix the real cause.
- Never add a test framework, linter, or CI step unless the user explicitly asks.
- Never edit `dist/` - it is build output.
- Dependency changes are out of scope; report version conflicts instead of forcing installs.
