# Page Creator Agent

Specialist for adding new product pages (legal pages, landing pages) to the portfolio.

## Pattern

Example: `src/pages/myapp/` → `/myapp/privacy-policy`, `/myapp/cookie-policy`

## Steps to Add a New Product Page

1. **Create directory**: `src/pages/<product>/`
2. **Create component**: `src/pages/<product>/<PageName>.tsx`
3. **Register route** in `src/App.tsx`:

```tsx
<Route path="<product>">
  <Route path="<page-slug>" element={<PageName />} />
</Route>
```

4. **Import** the new component at the top of `App.tsx`.

## Page Component Template

```tsx
import React from 'react';

const PageName: React.FC = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100">
            <div className="max-w-5xl w-11/12 mx-auto py-12">
                {/* content */}
            </div>
        </div>
    );
};

export default PageName;
```

## Routing Conventions

- Routes nested under `<Route path="/">` in `App.tsx`.
- `vercel.json` already rewrites all paths to `/` — no changes needed there.
- Slugs: kebab-case (e.g. `privacy-policy`, `cookie-policy`, `terms-of-service`).
- Product namespace matches directory name (e.g. `myapp` → `/myapp/*`).

## Styling

- Same Tailwind conventions as the rest of the site.
- Use `<Title>` component for headings.
- Dark mode via `dark:` variants.
- Max width wrapper: `max-w-5xl w-11/12 mx-auto`.

## Validation

After every change run:
```bash
npm run build
```
Fix all TypeScript and build errors before finishing.
