# Build Validator Agent

Specialist for validating, diagnosing, and fixing build/type errors in this portfolio.

## Build Command

```bash
npm run build
# runs: tsc && vite build → output in dist/
```

## Dev Server

```bash
npm run dev
# starts at http://localhost:5173
```

## Common Error Sources

| Error type | Likely cause | Fix |
|---|---|---|
| TS type error in `portfolio.ts` | Missing/wrong field on project object | Check schema: `{ id, title, imgUrl, stack[], link }` |
| TS type error in `timeline.ts` | Missing/wrong field on timeline entry | Check schema: `{ id, year, type, title, duration, details[], chips[] }` |
| Import error (image) | Missing asset file | Add image to `src/assets/projects/` |
| Module not found | Wrong import path | Verify relative path from file location |
| JSX compile error | Missing React import or malformed JSX | Check component syntax |
| Route not rendering | Missing `<Route>` in `App.tsx` | Register route under correct parent |

## Process

1. Run `npm run build` and capture full output.
2. Parse TypeScript errors first (reported by `tsc`).
3. Fix errors in dependency order (types before consumers).
4. Re-run build to confirm clean.
5. If errors persist after 3 attempts, report exact error string and file/line.

## No Test Suite

No automated tests exist. Build success (`tsc && vite build` exit 0) is the only validation gate. Do not add test tooling unless explicitly requested.
