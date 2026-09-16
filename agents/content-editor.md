---
name: content-editor
description: Edits portfolio content — projects, timeline entries, contact endpoint, and English/Italian translations — keeping data files and language files in sync. Use when adding a project, editing a timeline entry, or changing any visible copy.
---

# Content Editor

All editable content is data-driven. Two rules dominate:

1. **Never hardcode content in components.** Components read from `src/data/*` and from `t()` keys.
2. **Every string exists in both `en.json` and `it.json`.** Descriptions and timeline details do not live in the data files — they live in the language files, keyed by `id`.

## Files in Scope

| File | Holds |
|---|---|
| `src/data/portfolio.ts` | Project metadata (title, image, stack, link) |
| `src/data/timeline.ts` | Experience/education metadata |
| `src/data/endpoints.ts` | `CONTACT_FORM_ENDPOINT` (Formspree) |
| `src/assets/lang/en.json` | English copy — key source of truth |
| `src/assets/lang/it.json` | Italian copy — must mirror `en.json` |

## Syncing Language Files

`LangContext` types translations as `typeof en` and casts `it.json` to it. TypeScript therefore will **not** catch drift: a missing key in `it.json` silently falls back to the raw key string at runtime.

When you change copy:
1. Edit `en.json` first.
2. Apply the identical key structure to `it.json`.
3. Keep arrays (`timeline.entries.<id>.details`) the same length and order across both files.

## Adding a Portfolio Project

The component renders the description from `t('portfolio.projects.<id>.description')`, so the work spans three places.

1. Put the image in `src/assets/projects/` (`.webp` preferred; a `.jpg` fallback exists for a couple of older entries).
2. Import it at the top of `src/data/portfolio.ts`:
   ```ts
   import myProjectImage from "../assets/projects/myProject.webp";
   ```
3. Prepend a project object (newest first). `id` = current max + 1 (highest is currently `12`):
   ```ts
   {
       id: 13,
       title: "My Project",
       imgUrl: myProjectImage,
       imgContain: true,          // optional: use object-contain for logos/screenshots
       stack: ["Flutter", "Dart"],
       link: "https://github.com/VoidElle/my-project"
   }
   ```
4. Add the matching key to **both** language files:
   ```json
   "13": { "description": "One-line description of the project." }
   ```
   under `portfolio.projects`.

Rules: array stays ordered by descending `id`; `imgContain: true` only when the image is a logo or UI screenshot that should not be cropped; `link` is a full URL to the repo or live site.

## Adding a Timeline Entry

Rendered values: `title`, `year`, `chips` come from the data file; `details` come from `t('timeline.entries.<id>.details')`; `duration: 'Actual'` is replaced by `t('timeline.current')`.

1. Prepend an entry in `src/data/timeline.ts` (newest first). Use the next sequential `id` (currently `0`–`4`):
   ```ts
   {
       id: 5,
       year: '2026',
       type: 'work',              // 'work' | 'education' — also picks the icon
       title: 'Company - Role',
       duration: '1 year',        // free text, or exactly 'Actual' for the current role
       details: [],               // rendered from i18n; keep in sync or leave empty
       chips: ["Kotlin", "Android"]
   }
   ```
2. Add to **both** language files:
   ```json
   "5": { "details": ["Intro line.", "- Bullet detail."] }
   ```
   under `timeline.entries`.

Convention for `details`: the first line is an intro sentence with no prefix; following lines start with `"- "`. `duration` must be the exact string `'Actual'` to be translated.

## Contact Endpoint

`src/data/endpoints.ts` exports a single Formspree URL consumed by `useContactForm`. There is no Getform integration and no form `action` attribute. Do not point it at a different provider without being asked.

## Validation

Run `npm run build` after every content edit. A JSON syntax error in either language file fails the build.
