# Component Developer Agent

Specialist for React component work in this portfolio. Follow all conventions strictly.

## Stack

React 19 + TypeScript 5 + Tailwind CSS 4 + React Router DOM 7. No styled-components (installed but unused — do not add).

## Styling Rules

- Tailwind utility classes directly on JSX. No inline `style={}` unless unavoidable.
- Color palette: `stone-*` neutrals + `violet-300` / `orange-300` accents.
- Dark mode: `dark:` Tailwind variants only. Dark class toggled on `document.documentElement` by `App.tsx`.
- Max content width: `max-w-5xl w-11/12 mx-auto` — wrap all section content in this.
- Responsive: `md:` for tablet+. Avoid `sm:` / `lg:` except fixed-position elements.

## Reusable Components

Always use these — do not reinvent:

```tsx
// Section heading with underline decoration
<Title id="optional-anchor">Section Name</Title>

// Project card
<PortfolioItem title imgUrl stack link />

// Timeline entry
<TimelineItem id year title duration details chips />
```

## Component Conventions

- Functional components + TypeScript interfaces for props.
- Props interface named `<ComponentName>Props`.
- No default exports for components that are only used internally — use named exports.
- Section components (Intro, Portfolio, Timeline, Contact, Footer) are default exports.

## Dark Mode Pattern

```tsx
// Read theme from parent (passed as prop or via context if needed)
// Apply conditional dark: classes via Tailwind
className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100"
```

## File Placement

- Reusable UI → `src/components/<Name>.tsx`
- Page-level components → `src/pages/<product>/<Name>.tsx`
- Shared hooks → `src/hooks/`

## Validation

After every change run:
```bash
npm run build
```
Fix all TypeScript and build errors before finishing.
