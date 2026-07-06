# Unignorable analysis downloads

This folder holds downloadable Unignorable analysis artefacts.

The website should treat these files as public artefacts, not as ordinary site content. The site can reference, catalogue and contextualise them, but the main analysis should usually remain in the PDF.

## Recommended structure

Group analyses by year:

```text
public/downloads/unignorable/
  README.md
  2026/
    2026-07-05-school-absence-needs-crisis.pdf
    2026-07-05-school-absence-needs-crisis.md
```

Each PDF should have a matching Markdown sidecar with the same base filename.

```text
2026-07-05-school-absence-needs-crisis.pdf
2026-07-05-school-absence-needs-crisis.md
```

The PDF is the published artefact. The Markdown file is the metadata record.

## File naming convention

Use lowercase kebab case:

```text
YYYY-MM-DD-short-topic-slug.pdf
YYYY-MM-DD-short-topic-slug.md
```

Examples:

```text
2026-07-05-school-absence-needs-crisis.pdf
2026-07-05-bureaucracy-built-this-way.pdf
2026-07-05-ai-child-safety-narratives.pdf
```

Guidance:

- start with the publication date
- keep the slug short and descriptive
- avoid punctuation, apostrophes, en dashes and special characters
- avoid spaces
- avoid source names unless needed for clarity
- use the same base filename for the PDF and Markdown sidecar

## Sidecar metadata template

Use this template for the `.md` file paired with each PDF:

```md
---
title: School absence is framed as a delivery problem, but it is really a needs crisis
slug: 2026-07-05-school-absence-needs-crisis
date: 2026-07-05
status: published
analysis_type: unignorable-analysis
framework: Unignorable
llm_assisted: true
review_level: light-review
source_context: Institute for Government paper, Reducing school absence, April 2025
source_url: https://www.instituteforgovernment.org.uk/sites/default/files/2025-04/School-absence-innovation-lessons-last-labour-government.pdf
pdf: /downloads/unignorable/2026/2026-07-05-school-absence-needs-crisis.pdf
themes:
  - school absence
  - education
  - SEND
  - child poverty
  - public service reform
lenses:
  - needs erasure
  - burden transfer
  - false efficiency
  - leadership theatre
  - luxury of disconnection
summary: >-
  An Unignorable analysis of school absence framing, arguing that absence should be read as evidence of unmet needs around safety, health, belonging, accessibility, family support and trust, rather than only as a delivery or attendance problem.
---

## Catalogue note

Short public-facing note for the archive page.

## Publication caveat

This is an interpretive, LLM-assisted analysis using the Unignorable framework. It is not neutral reporting or a substitute for reading the source material.
```

## Review levels

Use simple review levels rather than pretending everything is equally settled:

```text
seed
light-review
reviewed
archived
```

Suggested meaning:

- `seed`: generated or drafted, not yet safe to promote
- `light-review`: checked enough to publish as a working analysis
- `reviewed`: stronger editorial review completed
- `archived`: kept for record, not actively promoted

## Public framing

Use this wording on archive pages or references:

```text
These analyses are working applications of the Unignorable framework to public topics, reports, speeches, policies and institutional narratives.

They are interpretive, not neutral reporting. Some are LLM-assisted and should be read as structured analysis rather than verified journalism.

The purpose is to test whether hidden needs, displaced burdens, legitimacy gaps and patterns of institutional erasure can be made easier to see.
```
