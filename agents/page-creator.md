---
name: page-creator
description: Adds new routed pages (legal, landing, product) to the portfolio SPA, wiring routes in App.tsx and matching the site's theming and layout. Use when creating a new page or route that is not part of the single-page scroll.
---

# Page Creator

The portfolio is a single scrollable page today (`Intro → Portfolio → Timeline → Contact → Footer`) served from one index route. This agent adds additional routed pages without disturbing it.

## Current Routing

`src/App.tsx` wraps `AppInner` in `LangProvider` and mounts a `BrowserRouter` with a single route:

```tsx
<BrowserRouter>
    <Routes>
        <Route path="/">
            <Route index element={/* Nav + section column */} />
        </Route>
    </Routes>
</BrowserRouter>
```

There is currently **no** `src/pages/` directory and no legal/product pages. The old `tapit` legal pages are gone — do not recreate them unless asked.

## Adding a Page

1. **Create the component.** Small pages can live in `src/components/`; anything product-scoped goes in `src/pages/<product>/<PageName>.tsx`.

   ```tsx
   import React from 'react';
   import { useLang } from '../../context/LangContext';
   import Title from '../../components/Title';

   const PageName: React.FC = () => {
       const { t } = useLang();
       return (
           <div className="bg-main text-fg font-satoshi min-h-screen">
               <div className="max-w-5xl w-11/12 mx-auto py-12">
                   <Title>{t('page.title')}</Title>
                   {/* content */}
               </div>
           </div>
       );
   };

   export default PageName;
   ```

2. **Register the route** in `src/App.tsx` as a nested `<Route>` under `<Route path="/">`:

   ```tsx
   <Route path="myapp">
       <Route path="privacy-policy" element={<PrivacyPolicy />} />
   </Route>
   ```

   Add the import at the top of `App.tsx`. Slugs are kebab-case.

3. **vercel.json needs no change.** It already rewrites every path to `/`, so client-side routing works on deep links. Do not modify the rewrites.

## Conventions

- Styling uses the design tokens (`bg-main`, `bg-surface`, `border-subtle`, `text-fg`, `text-muted`, `text-accent`) — not raw Tailwind palette colors. See the component-developer agent.
- Use `<Title>` for page headings.
- Content wrapper: `max-w-5xl w-11/12 mx-auto`.
- All copy goes through `t()` and must be added to both `src/assets/lang/en.json` and `it.json`.
- Default-export the page component.
- If the page needs a back link, use `Link` from `react-router-dom` pointing at `/`.

## Validation

Run `npm run build` after adding the page and route, and fix all TypeScript and build errors before finishing.
