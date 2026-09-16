# Editing your portfolio content (Sanity)

All content — profile, nav, social links, about, skills, the CodeSphere Agency section,
projects, blog settings, contact, footer, and SEO — is managed in Sanity, a free hosted
headless CMS. The React app fetches this content live at runtime via `src/lib/sanity.js`
and `src/contexts/ContentContext.jsx`. There are no `content/*.json` files anymore —
Sanity is the single source of truth.

## Where things live

- **Studio (the editor UI):** https://hasnain-portfolio-cms.sanity.studio
- **Sanity project dashboard:** https://www.sanity.io/manage/project/79z7j8su
- **Studio source code:** `../studio-hasnain-portfolio` (sibling folder to this repo,
  kept standalone as instructed — not part of this repo or its deploy)
- **Project ID:** `79z7j8su` · **Dataset:** `production` (public read access, no token
  needed for the live site to fetch content)

## Editing content

1. Go to https://hasnain-portfolio-cms.sanity.studio and log in (GitHub login, same
   account as hasnainmakada@gmail.com)
2. Pick a section from the sidebar — Profile / Home, About, Skills, CodeSphere Agency,
   Projects, Writing / Blog (section settings), Contact, Footer, SEO, Navigation,
   Social Links
3. Edit the fields and click **Publish**
4. Changes appear on the live site within seconds — the site fetches fresh from
   Sanity's CDN on every page load (no rebuild/redeploy needed for content changes)

**Projects** is the one list-type section — each project is its own document, editable
individually, with an **order** field controlling display order. Add a new project by
clicking **Projects → Create new**.

## How this fits with GitHub Pages

The portfolio itself still deploys only to GitHub Pages — nothing changed there. Sanity
is used purely as a hosted content backend the static site calls out to at runtime.
GitHub Actions (`.github/workflows/deploy.yml`) still builds and publishes this repo to
`gh-pages` on every push to `main`, same as before — that only matters for code/design
changes now, not content changes.

## The Studio project (for code-level changes, e.g. adding a new field)

The Studio lives in a sibling folder: `../studio-hasnain-portfolio`. To run it locally:

```bash
cd ../studio-hasnain-portfolio
npm install
npm run dev
```

To deploy Studio changes (e.g. after editing a schema) to the hosted URL:

```bash
npx sanity deploy
```

Schemas are in `../studio-hasnain-portfolio/schemaTypes/`. The custom Studio menu
(singleton settings docs + the Projects list) is defined in
`../studio-hasnain-portfolio/structure.ts`.
