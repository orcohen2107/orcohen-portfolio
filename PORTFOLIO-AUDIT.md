# Portfolio Audit

Last reviewed: 2026-04-25

## Goal

Turn the site into a portfolio that feels credible, polished, and production-ready for recruiters, clients, and technical reviewers.

## Current status

The project has a strong visual base and a clean component structure, but it still falls short on three areas that matter most for a professional portfolio:

1. credibility
2. technical release quality
3. proof of impact

## Must fix

### 1. Build and lint must be clean

- `next build` currently fails locally because the workspace is running Node `18.20.6` while `next@16.2.1` requires Node `>=20.9.0`.
- `eslint` was failing because locale hydration used `setState` directly inside an effect.
- The project gallery had keyboard-handler warnings from `@typescript-eslint/no-unused-expressions`.

Why this matters:
A portfolio site should be deployable and verifiably healthy. If the codebase does not pass its own baseline checks, it weakens the professional signal.

### 2. Remove broken public links

- The navigation exposed `/resume.pdf`, but there was no matching file in `public/`.

Why this matters:
Broken primary calls to action are one of the fastest ways to make a portfolio feel unfinished.

### 3. Replace weak credibility signals

- Testimonials currently look generic and are not obviously verifiable.
- Several projects have placeholder screenshots and no live/demo/source links.

Why this matters:
For a portfolio, weak proof hurts more than missing proof. It is better to show fewer projects with stronger evidence.

## Should improve

### 1. Upgrade project case studies

Each project should answer:

- What problem did it solve?
- What was your role?
- What constraints existed?
- What decisions did you make?
- What changed because of the work?

Recommended additions per project:

- short outcome summary
- architecture summary
- technical tradeoffs
- screenshots of the real product
- live demo or private-demo note
- GitHub link if shareable
- measurable impact if available

### 2. Make the experience section more specific

The current experience copy is readable, but still broad. Add concrete detail such as:

- scale of users or operations
- system sensitivity or reliability constraints
- responsibility level
- technologies actually owned
- examples of high-impact work

### 3. Strengthen contact hardening

The contact form works, but production hardening is still light. Consider adding:

- spam protection
- request throttling
- better failure logging
- delivery monitoring

### 4. Improve internationalization strategy

The UI supports Hebrew and English, but locale is currently handled on the client. If global discoverability matters, consider server-aware locale handling for metadata and rendered content.

## Good as-is

### 1. Component structure

The app is organized clearly by sections, layout, motion, SEO, and data. It is easy to navigate and maintain.

### 2. Visual direction

The site already has a coherent visual identity instead of looking like a default template. The hero, section rhythm, spacing, and dark palette are solid.

### 3. Basic SEO foundation

The project already includes:

- metadata
- `robots.ts`
- `sitemap.ts`
- JSON-LD for person data

This is a good base even though it should be expanded.

### 4. Accessibility intent

The site includes a skip link, semantic sections, reduced-motion handling, and interactive labeling in several places. That is a good starting point.

## Add

- real resume file and explicit resume CTA
- real project media for every displayed project
- case-study pages or expanded project panels
- stronger social proof only if verifiable
- performance verification on a production build
- Lighthouse pass review before launch

## Remove or reduce

- placeholder assets shown as if they are real project evidence
- unverified testimonials
- generic claims that are not backed by examples

## Priority roadmap

### Phase 1

- keep lint clean
- build with supported Node version
- remove broken links
- keep only credible content

### Phase 2

- enrich projects with evidence and outcome-driven copy
- replace generic testimonials or remove the section
- strengthen contact handling

### Phase 3

- expand SEO structured data
- consider server-aware i18n
- run full performance and accessibility audit

## Files reviewed

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/actions/contact.ts`
- `src/components/layout/navbar.tsx`
- `src/components/sections/footer.tsx`
- `src/components/projects/project-gallery.tsx`
- `src/components/seo/json-ld.tsx`
- `src/data/projects.ts`
- `src/data/testimonials.ts`
- `src/data/experience.ts`
- `src/i18n/locale-provider.tsx`
- `src/app/globals.css`

## External references used

- Google Search Central: ProfilePage structured data
- web.dev accessibility guidance
- web.dev performance guidance

## Recommended next implementation pass

The highest-value next step is not another visual tweak. It is a credibility pass:

1. keep only projects with real proof
2. rewrite project copy around outcomes and decisions
3. add resume and real external links
4. remove or replace weak testimonials
