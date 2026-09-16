---
name: component-developer
description: Implements and refactors React + TypeScript components in this portfolio, following its Tailwind 4 design tokens, i18n rules, and reveal-animation patterns. Use when creating or editing a component in src/components or src/hooks.
---

# Component Developer

Specialist for React component work. Follow the conventions below exactly — they reflect the current codebase, not generic React habits.

## Stack

React 19 + TypeScript 7 + Tailwind CSS 4 + react-router-dom 7. Functional components only. **styled-components is not used — never add it.**

## Design Tokens (not raw Tailwind colors)

Colors come from CSS custom properties declared in `src/styles/tailwind.css` via `@theme` and flipped by the `.dark` class. Use the token utilities, never `stone-*`, `violet-*`, or hex literals:

| Utility | Purpose |
|---|---|
| `bg-main` | page background |
| `bg-main-blur` | translucent page background (sticky bar) |
| `bg-surface` | cards, inputs, chips |
| `border-subtle` | all borders / dividers |
| `text-fg` | primary text |
| `text-muted` | secondary text |
| `text-accent` | accent text, links, focus rings |

Also available: `font-satoshi` (the site typeface).

Dark mode is automatic through the tokens. If you need a conditional, use a `dark:` variant — but the token approach is preferred and usually means you write no `dark:` classes at all. Never hardcode a theme color.

## Motion

Animations are declared in `tailwind.css` — use the utilities, do not invent keyframes:

- `animate-fade-up` — entrance from below
- `animate-fade-in` — plain fade
- `animate-slide-in-left` — timeline rows

Reveal-on-scroll uses `useInView`:

```tsx
const [ref, inView] = useInView<HTMLDivElement>();
return (
    <div ref={ref} className={inView ? 'animate-fade-up' : 'opacity-0'}>
        ...
    </div>
);
```

Stagger lists with an `animDelay` prop applied as `style={{ animationDelay: `${animDelay}ms` }}` while `inView`.

## i18n — No Hardcoded Copy

Every user-facing string must come from `useLang()`:

```tsx
import { useLang } from '../context/LangContext';
const { t } = useLang();
<p>{t('contact.title')}</p>
```

`t()` takes a dotted key and resolves against `src/assets/lang/en.json` (bundled) or `it.json` (lazy-loaded). When you introduce a new string, add the key to **both** language files — see the content-editor agent.

## Reusable Components — Use These

```tsx
<Title id="optional-anchor">Section Name</Title>   // section heading + accent rule
<PortfolioItem title description imgUrl imgContain? stack link animDelay? />
<TimelineItem id year type title duration details chips animDelay? />
```

Do not re-implement these. Extend them instead.

## Conventions

- Props interface named `Props` for a single-component file (e.g. `PortfolioItem.tsx`), or `<ComponentName>Props` when a file exports several things (e.g. `Nav.tsx` uses `NavProps`).
- Non-optional props are required; make optional props explicit (`imgContain?: boolean`, `animDelay?: number`).
- Default exports for components (all existing components use `export default`).
- Inline SVG icons are defined as small local function components, using `strokeWidth` / `strokeLinecap` / `strokeLinejoin` (camelCase — this is JSX).
- Tailwind utilities go directly on JSX. Avoid the `style` prop except for `animationDelay` and the one root background gradient in `App.tsx`.
- Layout wrapper: `max-w-5xl w-11/12 mx-auto`. Narrow sections (Timeline, Contact) already wrap their own `max-w-2xl mx-auto`.
- Responsive: `md:` for tablet+. `Portfolio` also uses `lg:grid-cols-3` for its grid.
- Icons/links that open externally use `target="_blank" rel="noopener noreferrer"` and an `aria-label`.

## File Placement

- Section + reusable UI → `src/components/<Name>.tsx`
- Shared hooks → `src/hooks/<name>.ts`
- Cross-cutting state → `src/context/`
- Static data → `src/data/`

## Validation

Run `npm run build` after every change and fix all errors before finishing.
