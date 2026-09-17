---
name: page-creator
description: Adds new routed pages (legal, landing, product, case study) to the portfolio SPA, wiring nested routes in App.tsx and matching the site's theming and shared layout. Use when creating a new page or route beyond the scroll column.
---

# Page Creator

The portfolio is a React Router SPA with a layout route. The index route renders one scrollable column
(`Nav → Hero → Projects → Skills → Stats → Timeline → Achievements → Contact → Footer`); other routes
render their own page inside the same shell. This agent adds routed pages without disturbing the index.

## Current Routing

`src/App.tsx` wraps the routes in `LangProvider` and a `BrowserRouter`, using a layout route:

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

`src/components/RootLayout.tsx` is the shared shell: it owns the dark/light theme state, renders `Nav`,
and wraps `<Outlet />` in `max-w-[860px] w-11/12 mx-auto`. Pages live in `src/pages/` as default-exported
components and render their own `Footer` (`Home` = the scroll column, `CaseStudy` = `/projects/:slug`).

## Adding a Page

1. **Create the component** at `src/pages/<PageName>.tsx`. It renders inside the layout wrapper, so do
   not add the `max-w-[860px]` wrapper or a `min-h-screen` shell:

   ```tsx
   import React from 'react';
   import { useLang } from '../context/LangContext';
   import { useDocumentTitle } from '../hooks/useDocumentTitle';

   const PageName: React.FC = () => {
       const { t } = useLang();
       useDocumentTitle(t('page.title') as string);
       return (
           <section className="py-16">
               <p className="text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-3">
                   {t('page.label')}
               </p>
               <h1 className="font-head text-3xl md:text-5xl font-bold tracking-tight text-fg mb-4">
                   {t('page.title')}
               </h1>
               {/* content */}
           </section>
       );
   };

   export default PageName;
   ```

2. **Register the route** in `src/App.tsx` as a nested `<Route>` under `<Route element={<RootLayout />}>`:

   ```tsx
   <Route path="myapp/privacy-policy" element={<PrivacyPolicy />} />
   ```

   Add the import at the top of `App.tsx`. Slugs are kebab-case. Use an index route
   (`<Route index element={<Home />} />`) only for the scroll column.

3. **vercel.json needs no change.** It already rewrites every path to `/`, so client-side routing works on deep links. Do not modify the rewrites.

## Conventions

- Styling uses the design tokens (`bg-main`, `bg-main-blur`, `bg-surface`, `border-subtle`, `border-strong`, `text-fg`, `text-muted`, `text-accent`, `bg-accent-soft`, `font-head`, `font-body`) - not raw Tailwind palette colors. See the component-developer agent.
- Headings use the inline label + title pattern shown above. **Do not** use `<Title>` - `src/components/Title.tsx` is unused.
- `RootLayout` already provides the `max-w-[860px] w-11/12 mx-auto` wrapper - do not re-add it. For a narrower column, use a local `max-w-[720px] mx-auto` (as `CaseStudy` does).
- Set the page title with `useDocumentTitle` from `src/hooks/useDocumentTitle`; it restores the previous title on unmount.
- All copy goes through `t()` and must be added to both `src/assets/lang/en.json` and `it.json`.
- Default-export the page component.
- Render `<Footer />` at the end of a page if it should end with the site footer; the layout does not render it.
- If the page needs a back link, use `Link` from `react-router-dom` pointing at `/`.

## Validation

Run `npm run build` after adding the page and route, and fix all TypeScript and build errors before finishing.
