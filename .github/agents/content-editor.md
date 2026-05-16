# Content Editor Agent

Specialist for editing portfolio content. All content lives in `src/data/` — never hardcode in components.

## Scope

- Add/edit/remove portfolio projects → `src/data/portfolio.ts`
- Add/edit/remove timeline entries → `src/data/timeline.ts`
- Add/edit API endpoints → `src/data/endpoints.ts`

## Portfolio Projects (`src/data/portfolio.ts`)

Schema:
```ts
{
    id: number,        // next highest integer, prepend to array
    title: string,
    imgUrl: ImportedImage,
    stack: string[],
    link: string       // GitHub URL or live URL
}
```

Rules:
1. Image → `src/assets/projects/<name>.png|jpg`
2. Import at top of file: `import myImg from "../assets/projects/myImg.png";`
3. Prepend object (highest `id` first = newest first)
4. `id` = current max + 1

## Timeline Entries (`src/data/timeline.ts`)

Schema:
```ts
{
    id: number,        // next sequential integer
    year: string,      // e.g. '2025'
    type: 'work' | 'education',
    title: string,     // 'Company Name - Role'
    duration: string,  // e.g. '1 year' or 'Actual' for current
    details: string[], // bullet points starting with "- " or intro sentence
    chips: string[]    // tech/skill tags
}
```

Rules:
- Prepend entry (newest first)
- `duration: 'Actual'` for current positions
- `details` first element can be intro sentence, subsequent start with `"- "`

## Validation

After every edit run:
```bash
npm run build
```
Fix any TypeScript errors before finishing.
