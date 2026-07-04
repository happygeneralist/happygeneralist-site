# Agent instructions

This repository is the public Happygeneralist website.

Use these instructions when working with Codex or other agentic coding tools.

## Purpose

The site is the publishing and presentation layer for selected public work from the wider Happygeneralist knowledge system.

It should reduce publishing friction and make complex thinking clear, usable and explorable.

## Design posture

Keep the default site clear, accessible and GOV.UK/x-gov adjacent.

Do not create decorative complexity. Standard pages should be readable, boring in the best sense, and content-led.

Labs may be more expressive, modular and spatial, especially on large screens, but they must remain accessible and semantically clear.

## Technical posture

Prefer simple Astro patterns.

Use Markdown or MDX for content.

Use Astro Content Collections for content modelling.

Use GOV.UK Frontend as a standards-adjacent dependency, but do not fork or imitate GOV.UK branding.

Avoid unnecessary client-side JavaScript.

Avoid adding a CMS, search, analytics, comments or heavy visualisation libraries unless there is a documented reason.

## Content architecture

The main sections are:

```text
notebook
  working thoughts and early patterns

ideas
  named concepts, distinctions and provocations

tools
  reusable frameworks, methods, canvases and prompts

labs
  applied experiments, case studies, prototypes and complex use cases

themes
  cross-site navigation across the knowledge system
```

## Repo boundaries

Do not import private or sensitive material into this repo.

Public site content belongs here only when it is safe, shaped and intended for publication.

Private conceptual development should remain outside this repo.

Work-facing support material should remain outside this repo unless it has been generalised into a safe public pattern.

## Change safety

Make small, reviewable changes.

Preserve accessibility.

Preserve British English.

Prefer semantic HTML.

Do not add dependencies without a clear reason in the pull request or commit message.
