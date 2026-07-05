# Longform notebook layout

## Problem

Some Notebook entries will be much longer than ordinary notes, observations or short essays. These may come from talks, lectures, provocations or long-form arguments.

The first candidate is a long essay based on a talk. It makes sense to keep it readable as a complete piece, but the current narrow single-column notebook pattern would make it feel like an endless vertical transcript.

## Design intent

Create a `longform` notebook presentation pattern that keeps the essay intact while improving orientation, scanning and reading rhythm.

This should still belong to Notebook, but it should not feel identical to a normal notebook article.

## Content model

Longform entries may need:

- title
- subtitle or deck-style framing line
- origin note, for example `Based on a talk given at...`
- date
- entry type: `longform`
- sections
- optional section standfirsts
- pull quotes or provocations
- images
- callout boxes
- related fragments or smaller articles extracted from the long essay
- optional table of contents

## Layout principles

### Default reading

On small and medium screens, keep a single readable column. Do not create cramped newspaper columns on mobile.

### Large screens

On larger screens, give the page more spatial presence than normal Notebook entries. Options to explore:

### 1. Magazine spine

The main text column remains readable. A side column can contain section navigation, pull quotes, related fragments or notes.

### 2. Section bands

Major sections get subtle full-width background rhythm. Text remains constrained inside each band. Images and provocations can break the column.

### 3. Newspaper-inspired modular layout

This should not mean literal multi-column body text for every paragraph. Use modular blocks: headline, intro, pull quote, image, two-column evidence/provocation blocks. Only use columns for short scannable sections, not dense body text.

### 4. Talk-to-essay layout

Preserve the feeling of a talk with clear beats: large section headings, occasional visual slides/images, pull-out provocations and related article cards for extracted ideas.

## Avoid

- long body text split into multiple CSS columns by default
- overdesigned newspaper pastiche
- heavy borders
- making the page look like a PDF pasted into the site
- losing the Notebook relationship

## Proposed implementation

Add a dedicated layout:

```text
src/layouts/LongformNotebookLayout.astro
```

Add support in Notebook content frontmatter:

```yaml
entry_type: longform
layout_variant: longform
origin_note: Based on a talk...
extracts:
  - title: Ghost buildings as lean provocation
    href: /notebook/ghost-buildings-as-lean-provocation/
```

Update the dynamic notebook route to choose `LongformNotebookLayout` when `entry_type: longform` or `layout_variant: longform`.

## Initial visual direction

- mostly white canvas
- wider page shell than ordinary Notebook
- readable main measure remains around 65 to 75 characters
- semantic elevation used sparingly for pullouts, images and cards
- subtle section rhythm
- optional sticky contents column on desktop
- strong typography and spacing rather than heavy decoration

## Acceptance criteria

- longform entries are accessible and readable on mobile
- desktop view has more presence than ordinary Notebook pages
- readers can understand where they are in a long essay
- extracted smaller articles can be linked from the longform page
- pattern works for talk-based essays without requiring every one to be split into separate posts
