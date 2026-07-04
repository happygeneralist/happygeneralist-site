# Content model

The site uses Astro Content Collections.

## Shared fields

Most publishable content uses these fields:

```yaml
title:
description:
date:
updated:
status:
maturity:
themes:
tags:
related:
origin_repo:
origin_path:
featured:
```

## Collections

### Notebook

Working thoughts, observations, fragments and early patterns.

Additional fields:

```yaml
entry_type: note | observation | question | pattern | fragment
```

### Ideas

Short concepts, distinctions, provocations and named frames.

Additional fields:

```yaml
idea_type: concept | distinction | provocation | principle | pattern
core_claim:
useful_when:
```

### Tools

Canvases, methods, prompts, frameworks and reusable structures.

Additional fields:

```yaml
tool_type: canvas | checklist | prompt | method | framework | diagnostic
use_when:
helps_with:
inputs:
outputs:
```

### Labs

Applied experiments, case studies, prototypes and complex use cases.

Additional fields:

```yaml
lab_type: case-study | prototype | experiment | system | visual-essay
layout: standard | magazine | canvas | interactive
project_status: concept | active | paused | complete | archived
source_repos:
outputs:
```

### Themes

Cross-site navigation across ideas, tools, labs and notebook entries.

Additional fields:

```yaml
theme_type: domain | method | concept | practice-area
```
