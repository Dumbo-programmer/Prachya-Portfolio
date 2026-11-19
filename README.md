# Prachya Biswas — Portfolio

Personal portfolio for Prachya Biswas, ML and AI Engineer. Built with Next.js App Router, TypeScript, Tailwind CSS, MDX and Resend, deployed on Vercel.

The home page presents its sections as tab panels: navbar links switch the visible section instantly and update a shareable `?tab=` URL instead of scrolling. The MDX writing archive (`/writing`) and individual article pages (`/writing/[slug]`) remain separate routes. It has a dark default theme with a decorative coding atmosphere, plus a clean light theme.

## Quick start

```bash
cp .env.example .env.local   # fill in the values you have
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # TypeScript check
npm run lint       # ESLint
```

Node 18.18+ is required (Node 22 recommended).

## Project structure

```
app/
  api/contact/              Resend-backed contact endpoint
  writing/                  /writing archive and /writing/[slug] article pages
  writing/[slug]/opengraph-image.tsx
  rss.xml/route.ts          generated RSS feed
  globals.css               theme tokens, base styles, article/code typography
  layout.tsx                fonts, theme bootstrap, navbar, footer, Person JSON-LD
  page.tsx                  home page tab panels
  opengraph-image.tsx       generated home social image
  sitemap.ts, robots.ts
components/
  tabs/                     tab panel wrapper and in-page tab links
  writing/                  home writing section, archive filters, share buttons
  ...                       navbar, hero, sections, contact, theme, background
content/writing/            MDX articles (new files publish automatically)
data/content.ts             ALL editable site content, types and UI copy
lib/
  writing.ts                reads/sorts MDX front matter, reading time, dates
  mdx.ts                    shared remark/rehype pipeline
  tabs.ts                   tab ids, deep links and switch helper
  format.ts, site.ts, og-image.tsx
public/images/, public/logos/
```

## Editing site content

Everything visible on the site lives in `data/content.ts`: `profile`, `stats`, `atAGlance`, `education`, `experience`, `achievements`, `skills`, `projects`, `leadership`, `talks`, `socialLinks`, `navigation` and `copy` (all headings, labels, form messages and a11y text). Edit those values; components read from them and need no changes.

Invented numbers and examples are marked as placeholders in that file. See the replacement checklist below before publishing.

## Adding an article

1. Create a new `.mdx` file in `content/writing/`, e.g. `content/writing/my-new-post.mdx`.
2. Add front matter:

```mdx
---
title: "My New Post"
slug: "my-new-post"
date: "2026-11-01"
excerpt: "A short summary shown on the home page and archive."
tags: ["Machine Learning", "Notes"]
featured: false
language: "en"          # "en" or "bn"
coverImage: "/images/writing-placeholder.svg"  # optional
---
```

3. Write the body using Markdown and MDX. Supported: headings, lists, links, blockquotes, GFM tables, fenced code blocks with syntax highlighting, inline/display KaTeX math (`$...$` / `$$...$$`) and figures:

```mdx
<figure>
  <img src="/images/writing-placeholder.svg" alt="Description" />
  <figcaption>Caption text.</figcaption>
</figure>
```

4. Save. `lib/writing.ts` picks up the file automatically. It appears on the home Writing section, in the archive (newest first), in `/sitemap.xml`, in `/rss.xml`, and gets a static page with generated metadata, JSON-LD and an Open Graph image. No component code changes are needed.

Set `featured: true` on exactly one article for the large home-page card; if none is featured, the newest article is used. Set `language: "bn"` for Bengali — the article element gets `lang="bn"` and the Noto Sans Bengali font.

## Theme

Colors, fonts, radius, spacing and shadows are defined once in `app/globals.css` and exposed through `tailwind.config.ts`. Dark is the default; `html.light` switches tokens. The choice is stored in `localStorage` as `portfolio-theme`, and an inline script in `app/layout.tsx` applies it before paint to avoid a flash. Floating controls at the bottom right toggle the theme and scroll to top.

`components/dark-background.tsx` renders the decorative code layer and floating symbols only in dark mode. It is `fixed`, `pointer-events-none`, `aria-hidden="true"`, `data-nosnippet`, respects `prefers-reduced-motion` and reduces elements on mobile.

## Environment variables

Copy `.env.example` to `.env.local` (git-ignored):

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Server-only Resend API key. |
| `CONTACT_TO_EMAIL` | Inbox that receives contact messages. |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL, OG images, sitemap, RSS and share links. No trailing slash. |

### Resend setup

1. Create an account at [resend.com](https://resend.com) and create an API key.
2. Add it as `RESEND_API_KEY` in `.env.local`.
3. Set `CONTACT_TO_EMAIL` to the inbox that should receive messages.
4. Verify your sending domain in Resend and replace the `from` address in `app/api/contact/route.ts` with an address on your domain. The included `onboarding@resend.dev` address is for development only.
5. Never commit `.env.local`.

The contact form validates in the browser and again on the server, includes a honeypot, and rate-limits to 3 messages per IP per minute (per serverless instance). Without the env vars, the endpoint returns a clear 503 error instead of pretending to send.

## Deployment on Vercel

1. Push to GitHub and import the repository in Vercel.
2. Add the three environment variables in **Project Settings → Environment Variables**.
3. Deploy; Vercel runs `npm run build`.
4. Add your custom domain in **Project Settings → Domains** and create the DNS records Vercel provides.
5. Keep HTTPS enforced (Vercel issues and renews certificates automatically). Do not disable "Redirect HTTP to HTTPS".
6. Add `www` and redirect it to the apex domain (or the reverse) in the Domains settings. Set `NEXT_PUBLIC_SITE_URL` to the final canonical URL so canonical tags, OG images, sitemap and RSS match.
7. Submit `https://your-domain/sitemap.xml` to Google Search Console and request indexing for the home page.

## SEO notes

- Home title: `Prachya Biswas | ML and AI Engineer`; H1 contains the full name.
- Unique descriptions, canonical URLs, Open Graph/Twitter cards and generated OG images for the home page and every article.
- `Person` JSON-LD on the site and `Article` JSON-LD on each article.
- `app/sitemap.ts` includes the home page, `/writing` and all articles. `robots.txt` points to the sitemap. `/rss.xml` lists all articles.
- All content is server-rendered; client components only handle tab switching, the theme toggle, menus, form, scroll reveal, archive filters and share buttons. Every tab panel is present in the HTML and deep links such as `/?tab=projects` render the correct panel on the server.

## Replacement checklist before publishing

- [ ] Replace `public/images/photo-placeholder.svg` with a real portrait and update `profile.photo` / `profile.photoAlt`.
- [ ] Replace `public/logos/placeholder.svg` with real organization logos and update `experience[].logo`.
- [ ] Replace `profile.email`, the LinkedIn/Kaggle/social URLs and the biography/`introSegments` placeholder links. GitHub already points to `github.com/prachyabiswas`.
- [ ] Replace all placeholder stats and project metrics with verified numbers (remove `placeholder: true`).
- [ ] Replace all experience, education, achievements, skills, projects, leadership and talks placeholder text with real content.
- [ ] Confirm the skills list matches what you can actually discuss in an interview.
- [ ] Replace both sample MDX articles and `public/images/writing-placeholder.svg` with real writing and figures.
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your real domain and finish the Vercel domain setup.
- [ ] Add a real `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and a verified sending domain.
