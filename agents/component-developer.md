---
name: component-developer
description: Implements and refactors React + TypeScript components in this portfolio, following its Tailwind 4 design tokens, i18n rules, and reveal-animation patterns. Use when creating or editing a component in src/components or src/hooks.
---

# Component Developer

Specialist for React component work. Follow the conventions below exactly - they reflect the current codebase, not generic React habits.

## Stack

React 19 + TypeScript 7 + Tailwind CSS 4 + react-router-dom 7. Functional components only. **styled-components is not used - never add it.**

## Design Tokens (not raw Tailwind colors)

Colors come from CSS custom properties declared in `src/styles/tailwind.css` via `@theme` and flipped by the `.dark` class. Use the token utilities, never `stone-*`, `violet-*`, or hex literals:

| Utility | Purpose |
|---|---|
| `bg-main` | page background |
| `bg-main-blur` | translucent page background (sticky bar) |
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

Dark mode is automatic through the tokens. If you need a conditional, use a `dark:` variant - but the token approach is preferred and usually means you write no `dark:` classes at all. Never hardcode a theme color.

## Motion

Animations are declared in `tailwind.css` - use the utilities, do not invent keyframes:

- `animate-fade-up` - entrance from below
- `animate-fade-in` - plain fade
- `animate-slide-in-left` - slide from left

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

`prefers-reduced-motion` is handled globally in `tailwind.css`: the animation tokens resolve to
`none` and the `animate-*` classes run at `0.001ms`, so reveals appear instantly. Add no
motion-specific override for it in components.

## i18n - No Hardcoded Copy

Every user-facing string must come from `useLang()`:

```tsx
import { useLang } from '../context/LangContext';
const { t } = useLang();
<p>{t('contact.title')}</p>
```

`t()` takes a dotted key and resolves against `src/assets/lang/en.json` (bundled) or `it.json` (lazy-loaded). When you introduce a new string, add the key to **both** language files - see the content-editor agent.

## Reusable Components - Use These

```tsx
<AccordionItem id title subtitle dotColor? defaultOpen?>{children}</AccordionItem>
<PortfolioItem title description imgUrl imgContain? stack link source? caseStudy? animDelay? />
<CaseStudyHeader title subtitle role stack links coverImg? coverCaption? titleRef? />
<CaseStudySection title body? bullets? callout? />
```

`AccordionItem` backs both the work Timeline and the Achievements (education) list. Do not
re-implement it. There is no `TimelineItem` component anymore.

`CaseStudyHeader` renders the case study title, meta badges, links and cover image; `CaseStudySection`
renders one numbered section (body, bullets, callout). `CaseStudySection` body/bullet/callout text
supports `**bold**` inline. Both are used only by `src/pages/CaseStudy.tsx`.

Section headings are **inline**, not a shared component. Each section renders the same pattern:

```tsx
<p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-3">{t('skills.label')}</p>
<h2 className="font-head text-2xl md:text-4xl font-bold tracking-tight text-fg mb-2">{t('skills.title')}</h2>
<p className="text-sm md:text-base text-muted leading-relaxed max-w-[520px] mb-10">{t('skills.sub')}</p>
```

`src/components/Title.tsx` still exists but is **unused** - do not add new `<Title>` usages.

## Conventions

- Props interface named `Props` for a single-component file (e.g. `PortfolioItem.tsx`), or `<ComponentName>Props` when a file exports several things (e.g. `Nav.tsx` uses `NavProps`).
- Non-optional props are required; make optional props explicit (`imgContain?: boolean`, `animDelay?: number`).
- Default exports for components (all existing components use `export default`).
- Inline SVG icons are defined as small local function components, using `strokeWidth` / `strokeLinecap` / `strokeLinejoin` (camelCase - this is JSX).
- Tailwind utilities go directly on JSX. Avoid the `style` prop except for `animationDelay` and the decorative gradient backgrounds in `Intro.tsx` / `Footer.tsx`.
- Layout wrapper: `max-w-[860px] w-11/12 mx-auto`. Sections use `py-20 border-t border-subtle`; Timeline and Achievements additionally wrap their body in `max-w-2xl mx-auto`.
- Grids: Projects use `grid-cols-1 sm:grid-cols-2`; Skills use `min-[480px]:grid-cols-2 md:grid-cols-3`; Stats use `min-[480px]:grid-cols-2`.
- Icons/links that open externally use `target="_blank" rel="noopener noreferrer"` and an `aria-label`.

## File Placement

- Routed pages → `src/pages/<Page>.tsx` (default export; `Home`, `CaseStudy`)
- Section + reusable UI → `src/components/<Name>.tsx`
- Shared hooks → `src/hooks/<name>.ts`
- Cross-cutting state → `src/context/`
- Static data → `src/data/`

## Validation

Run `npm run build` after every change and fix all errors before finishing.
