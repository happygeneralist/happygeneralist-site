# Happygeneralist site

This repository contains the public Happygeneralist website.

It is the publishing and presentation layer for selected public work from the wider Happygeneralist knowledge system.

The site uses Astro, GOV.UK Frontend-adjacent patterns, Markdown/MDX content and GitHub-based publishing.

The goal is to make it easy to publish clear, accessible writing, tools, ideas and labs without creating a heavy CMS or unnecessary maintenance burden.

## Site sections

```text
Notebook
  Working thoughts, observations, fragments and early patterns.

Ideas
  Short concepts, distinctions, provocations and named frames.

Tools
  Canvases, methods, prompts, frameworks and reusable structures.

Labs
  Applied experiments, case studies, prototypes and complex use cases.

Themes
  Cross-site navigation across ideas, tools, labs and notebook entries.
```

## Design posture

The standard site should stay clear, accessible and GOV.UK/x-gov adjacent.

Labs may use richer layouts for large-screen, modular and visual explanation, but should remain content-led, accessible and semantically clear.

## Tech stack

- Astro for the static site
- TypeScript for validation and content modelling
- GOV.UK Frontend as a standards-adjacent foundation
- Markdown/MDX for content
- Zod-backed Astro Content Collections
- GitHub Actions for checking and deployment
- GitHub Pages or another static host for publishing

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Related repos

```text
happygeneralist-web-system
  reusable visual, semantic and publishing system

product-bible
  operational practice knowledge

mt-genome
  method anatomy and mind-tool depth

civic-design-intelligence
  public-service design-intelligence knowledge system

work-support
  private work scaffolding and support patterns
```
