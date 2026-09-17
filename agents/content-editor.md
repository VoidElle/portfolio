---
name: content-editor
description: Edits portfolio content - projects, work timeline, achievements, skills, contact endpoint, and English/Italian translations - keeping data files and language files in sync. Use when adding a project, editing a timeline or achievement entry, or changing any visible copy.
---

# Content Editor

All editable content is data-driven. Two rules dominate:

1. **Never hardcode content in components.** Components read from `src/data/*` and from `t()` keys.
2. **Every string exists in both `en.json` and `it.json`.** Descriptions, timeline details, and achievement
   details do not live in the data files - they live in the language files, keyed by `id`.

## Files in Scope

| File | Holds |
|---|---|
| `src/data/site.ts` | `SITE` identity (name, avatar, resume URL, email, socials) |
| `src/data/portfolio.ts` | Project metadata (title, image, stack, link) |
| `src/data/timeline.ts` | **Work-only** experience metadata |
| `src/data/achievements.ts` | Achievement metadata + `detailsKey` |
| `src/data/caseStudies.ts` | Case study page structure (`slug`, `projectId`, i18n keys, `sections[]`) |
| `src/data/skills.ts` | Skill groups and their `items[]` |
| `src/data/stats.ts` | GitHub / LeetCode usernames and competitive profiles |
| `src/data/techIcons.ts` | `TECH_ICONS` label → icon-class map |
| `src/data/endpoints.ts` | `CONTACT_FORM_ENDPOINT` (Formspree) |
| `src/assets/lang/en.json` | English copy - key source of truth |
| `src/assets/lang/it.json` | Italian copy - must mirror `en.json` |

## i18n Namespaces

Top-level namespaces currently in use (both language files): `nav`, `intro`, `hero`, `projects`,
`portfolio`, `skills`, `stats`, `timeline`, `achievements`, `contact`, `footer`, `caseStudies`.

## Syncing Language Files

`LangContext` types translations as `typeof en` and casts `it.json` to it. TypeScript therefore will **not** catch drift: a missing key in `it.json` silently falls back to the raw key string at runtime.

When you change copy:
1. Edit `en.json` first.
2. Apply the identical key structure to `it.json`.
3. Keep arrays (`timeline.entries.<id>.details`, `achievements.entries.<id>.details`) the same length and order across both files.

## Adding a Portfolio Project

The component renders the description from `t('portfolio.projects.<id>.description')`, so the work spans three places.

1. Put the image in `src/assets/projects/` (`.webp` preferred; a `.jpg` fallback exists for a couple of older entries).
2. Import it at the top of `src/data/portfolio.ts`:
   ```ts
   import myProjectImage from "../assets/projects/myProject.webp";
   ```
3. Prepend a project object (newest first). `id` = current max + 1 (highest is currently `14`):
   ```ts
   {
       id: 13,
       title: "My Project",
       imgUrl: myProjectImage,
       imgContain: true,          // optional: use object-contain for logos/screenshots
       stack: ["Flutter", "Dart"],
       link: "https://github.com/VoidElle/my-project",
       source: "https://github.com/VoidElle/my-project",  // optional: repo URL when link is a live site
       caseStudy: "my-project-slug"                       // optional: slug of a case study page
   }
   ```
4. Add the matching key to **both** language files:
   ```json
   "13": { "description": "One-line description of the project." }
   ```
   under `portfolio.projects`.

Rules: array stays ordered by descending `id`; `imgContain: true` only when the image is a logo or UI screenshot that should not be cropped; `link` is a full URL to the repo or live site.

## Adding a Timeline Entry (work only)

The Timeline renders work entries only (`timeline.filter(type === 'work')`). Education moved to
Achievements and must not be added here.

Rendered values: `title`, `year`, `chips` come from the data file; `details` come from `t('timeline.entries.<id>.details')`; `duration: 'Actual'` is replaced by `t('timeline.current')`. Entry ids are currently `0`-`2`.

1. Prepend an entry in `src/data/timeline.ts` (newest first). Use the next sequential `id` (currently `3`):
   ```ts
   {
       id: 3,
       year: '2026',
       type: 'work',
       title: 'Company - Role',
       duration: '1 year',        // free text, or exactly 'Actual' for the current role
       details: [],               // rendered from i18n; keep in sync or leave empty
       chips: ["Kotlin", "Android"]
   }
   ```
2. Add to **both** language files:
   ```json
   "3": { "details": ["Intro line.", "- Bullet detail."] }
   ```
   under `timeline.entries`.

Convention for `details`: the first line is an intro sentence with no prefix; following lines start with `"- "`. `duration` must be the exact string `'Actual'` to be translated.

## Adding an Achievement

Achievements render `title`, `subtitle`, optional `year`, `dotColor`, and `chips` from the data file, and the
detail array from `detailsKey`. Entry ids are currently `3`-`9` (`3`/`4` education, `5`-`9` certifications).
`year` is optional - omit it for undated certifications and the subtitle renders on its own.

1. Prepend an entry in `src/data/achievements.ts` with a unique `id` (currently `10`):
   ```ts
   {
       id: 10,
       year: '2026',               // optional; omit for undated certifications
       title: 'Institution',
       subtitle: 'Course or diploma',
       dotColor: '#3b82f6',        // optional; defaults to the accent token
       detailsKey: 'achievements.entries.10.details',
       chips: ["Networking", "Security"]
   }
   ```
2. Add `achievements.entries.10.details` (same intro/`"- "` bullet convention) to **both** language files.

## Adding a Case Study

A case study is an opt-in page at `/projects/:slug`, linked from the project card's case-study pill.
Its copy lives under the `caseStudies` namespace in both language files, and its structure lives in
`src/data/caseStudies.ts`.

**Exact-slug-match rule.** The project entry's `caseStudy` value in `src/data/portfolio.ts` and the
`CaseStudy.slug` in `src/data/caseStudies.ts` must be the identical kebab-case string. `getCaseStudy`
matches on exact `slug`, so any drift (typo, casing, hyphen) makes the route render the
`caseStudies.notFound.*` fallback even though the pill links to it. The `projectId` should also match
that project's `id` (it is used as the cover-image fallback).

Keys, per slug:
- `caseStudies.<slug>.subtitle`, `.role`, `.summary` (the `summary` feeds `<meta name="description">`).
- `caseStudies.<slug>.coverCaption` (optional, only if a caption is wanted).
- `caseStudies.<slug>.sections.<id>.title` + `.body`, plus optional `.bullets` (string[]) and
  `.callout` (string). The `<id>` values are referenced by `titleKey` / `bodyKey` / `bulletsKey` /
  `calloutKey` in `caseStudies.ts`; keep both sides in sync.

`caseStudies.back`, `caseStudies.notFound.*`, and `caseStudies.meta.*` are shared UI strings, not
per-slug. Numbered titles (`01.`, `02.` ...) are plain strings in the language file, not computed.

To add one:
1. Add `caseStudy: "<slug>"` to the project entry (see the project steps above).
2. Add the `CaseStudy` object to `src/data/caseStudies.ts` (`projectId`, `subtitleKey`, `roleKey`,
   `stack`, optional `coverImg` / `coverCaptionKey` / `liveUrl` / `sourceUrl`, and `sections[]`).
3. Add `caseStudies.<slug>.*` to **both** `en.json` and `it.json` (identical shape; `bullets` arrays
   the same length and order).
4. Add the slug to the seed list in `docs/case-studies/index.md`.

## Contact Endpoint

`src/data/endpoints.ts` exports a single Formspree URL consumed by `useContactForm`. There is no Getform integration and no form `action` attribute. Do not point it at a different provider without being asked.

## Validation

Run `npm run build` after every content edit. A JSON syntax error in either language file fails the build.
