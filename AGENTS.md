# Agent instructions

This repository is the public Happygeneralist website.

Use this file as the canonical instruction source when working with Codex, Copilot, ChatGPT, or other agentic coding tools.

## Repository purpose

`happygeneralist-site` is the public publishing and presentation layer for selected Happygeneralist work.

It exists to make complex thinking, tools, essays, experiments and civic-design ideas easier to publish, navigate and use.

The site should support:

- public writing and notebook entries
- reusable tools and canvases
- applied labs and experiments
- longform essays based on talks or deeper arguments
- a future custom-domain replacement for the current WordPress site

This is not the full Happygeneralist knowledge system. It is the public-facing website.

## Current MVP priority

The near-term goal is to make the Astro site good enough to redirect the Happygeneralist CNAME and shutter the WordPress site.

Prioritise work that supports that move:

- stable navigation
- publishable content
- usable layouts
- responsive images
- accessible structure
- working GitHub Pages deployment
- low-friction authoring

Avoid work that delays the CNAME switch without materially improving the MVP.

## Site positioning

Happygeneralist is a public thinking space for design, civic systems, tools and experiments.

The site should feel:

- clear
- human
- thoughtful
- practical
- accessible
- modern but not fashionable
- capable of carrying serious public/civic design work

It should not feel:

- bureaucratic
- generic SaaS
- over-designed
- like a 1990s bordered-box website
- like a pasted PDF archive
- like a heavy component demo

## Design strategy

### White canvas with semantic moments

The base site should be mostly white, calm and readable. Stronger visual moments should be used deliberately where they carry meaning.

Do not make every component visually loud. Use space, scale, rhythm and elevation to express content hierarchy.

### GOV.UK adjacent, not GOV.UK imitation

The site may borrow from GOV.UK and x-gov principles:

- clarity
- accessibility
- semantic HTML
- direct language
- strong focus states
- robust content structure

But it must not imitate GOV.UK branding or become visually bureaucratic.

### Material-inspired semantic elevation

Subtle depth is allowed and encouraged when it expresses structure. The original Google Material idea is a useful reference: elevation is not decoration; it is a semantic cue.

Use the existing elevation tokens rather than inventing one-off shadows:

- `--elevation-0`
- `--elevation-1`
- `--elevation-2`
- `--elevation-3`
- `--surface-outline`

Cards, modules, callouts and images may have small physical presence, but the base should remain restrained.

### Space is semantic

Different content types should receive different spatial treatment:

```text
Notebook
  reading-first, narrower, text-led

Tools
  wider, artefact/product-like, more visual gravity

Labs
  widest, exploratory, modular, able to support systems and experiments

Longform Notebook
  wider shell, readable main column, optional side spine, visual breaks
```

Do not force every page into the same GOV.UK-style reading column.

## Information architecture

Current main navigation order:

```text
Tools
Labs
Notebook
```

`About` belongs in the footer, not the main nav.

Current primary sections:

```text
src/content/tools
  reusable public tools, canvases, methods, prompts and frameworks

src/content/labs
  applied experiments, prototypes, case studies and system explorations

src/content/notebook
  notes, essays, observations, questions, patterns, fragments and longform writing
```

Do not reintroduce top-level `ideas` or `themes` sections unless there is a deliberate IA decision. Smaller ideas, essays and fragments belong in Notebook for now.

## Content types

### Notebook

Notebook is for public thinking. It includes:

- notes
- short entries
- essays
- longform essays
- observations
- questions
- patterns
- fragments

Notebook content should usually remain reading-first and constrained for legibility.

Use `entry_type: longform` and `layout_variant: longform` for talks or extended essays that need more presence than an ordinary article.

### Longform Notebook

Longform entries are still Notebook entries, not Labs.

Use longform for:

- talk transcripts expanded into essays
- large arguments
- source essays that may later generate smaller posts
- pieces with sections, visual breaks and extract links

Longform layout principles:

- mobile remains single-column and readable
- desktop may use a wider shell
- the main text measure remains readable
- a side spine may hold contents and extracted article links
- images may break the text column
- do not split dense body text into newspaper columns by default
- avoid PDF-like presentation

The first implemented longform example is:

```text
src/content/notebook/designing-lean-provocations.mdx
```

### Tools

Tools should feel like artefacts with gravity, not just blog posts.

Tool pages may use wider layouts, preview images, metadata modules and primary calls to action.

The current tool showcase pattern is implemented through:

```text
src/layouts/ToolLayout.astro
src/components/ResponsiveImage.astro
```

The Problem Impact Canvas is the first major tool page.

### Labs

Labs are for applied experiments, prototypes and more spatial/systemic work.

Labs can be more widescreen and modular than Notebook, but must remain accessible.

## Public/private boundaries

This repo is public.

Do not include private method anatomy, private LLM prompts, ingestion chains, sensitive project material or internal IP unless the user explicitly decides it is public-safe.

Important boundary:

- MT Genome is not public near-term.
- MT Genome is private method/source structure and may eventually inform public tools.
- Public pages may expose controlled summaries and usable artefacts.
- Do not link directly to private repos.
- Avoid putting specific private repo paths in public-facing content unless deliberately approved.

For tools, the principle is:

```text
Expose use value.
Protect generative anatomy.
```

## Writing and voice

Use British English.

Prefer clear, direct language.

Keep Ryan's voice where source material exists. Do not flatten it into generic AI synthesis.

Avoid AI tells:

- over-balanced explanatory paragraphs
- generic phrases like “navigating complexity” unless earned
- “this essay explores” framing unless it sounds natural
- excessive “not only / but also” structures
- too many neat triads
- bland framework summaries that read like an MBA glossary

When editing longform essays, preserve the author’s rhythm, examples and viewpoint. Make targeted edits rather than rewriting wholesale.

## Content migration strategy

The site is replacing WordPress. Migration should prioritise:

1. content needed before CNAME redirection
2. flagship tools and essays
3. content that demonstrates the site’s range
4. material that can be safely public

Do not migrate everything mechanically. Some WordPress material should be rewritten, split, archived or left behind.

Long essays may remain whole if they make sense as source objects, while smaller extracted Notebook entries can be created later.

Example: `Designing lean provocations` should remain as a full longform piece, with future extract candidates such as:

- Ghost buildings as lean provocation
- Conceptual variation as design discipline
- Stories as prototypes

## Image strategy

Prefer Astro’s image pipeline for local source images.

Use:

```text
src/assets/images/...
```

for images that should be processed by Astro.

Use:

```text
public/...
```

only for assets that must be served as-is.

Use `ResponsiveImage.astro` for content images where possible. It should:

- provide responsive image output when the asset exists in `src/assets/images`
- fall back safely for public or remote images
- preserve alt text and captions
- support semantic variants such as `standard`, `wide`, `tool-preview` and `longform-hero`

Do not use large images as inaccessible CSS backgrounds when they carry meaning. Prefer real images with alt text and captions.

## Accessibility

Accessibility is non-negotiable.

Always preserve:

- semantic HTML
- logical heading order
- meaningful link text
- visible focus states
- sufficient colour contrast
- readable line length
- mobile readability
- useful alt text for informative images
- empty alt text only for genuinely decorative images

If an image contains important text, make sure the page also contains the important information in HTML nearby.

## Technical strategy

This is an Astro site.

Prefer:

- simple Astro components
- content collections
- Markdown/MDX for authored content
- build-time rendering
- minimal dependencies
- minimal client-side JavaScript

Avoid adding:

- a CMS
- analytics
- comments
- search
- heavy visualisation libraries
- unnecessary client-side state

unless there is a documented reason and a clear MVP need.

## Deployment and domain strategy

The site is temporarily configured for GitHub Pages project hosting.

Current temporary deployment assumptions may include:

```text
site: https://happygeneralist.github.io
base: /happygeneralist-site/
```

Before switching to the custom domain:

- restore or create `public/CNAME` with `happygeneralist.com`
- update Astro config to use `site: https://happygeneralist.com`
- remove the project `base` path
- make sure image and navigation paths still resolve correctly
- confirm GitHub Pages source is GitHub Actions
- check repository Pages settings for stale custom-domain configuration

If GitHub Pages deployment fails after artifact upload and deployment creation, suspect Pages/domain/environment configuration before suspecting Astro build code.

## Repo hygiene

Do not add loose design notes or scratch Markdown files to random folders.

Use GitHub issues for backlog, strategy notes and exploratory design decisions unless the documentation is intended to be permanent project guidance.

Accepted durable instruction/documentation locations:

```text
AGENTS.md
.github/copilot-instructions.md
README.md
```

Add other docs only when there is a clear, durable purpose.

## Change workflow

Make small, reviewable changes.

Before changing content, identify whether it is:

- public page content
- project instruction
- implementation detail
- backlog/issue material
- private method/source material that should not be published

Do not silently rewrite large authored essays. For longform content, prefer targeted edits.

When using Codex or another coding agent, include:

- exact files to edit
- exact scope
- instruction not to rewrite wholesale
- build command to run

## Build checks

After code changes, run the available checks/build locally where possible:

```bash
npm run build
```

If a build fails, fix the build before continuing content/design work.

## Repository description

Suggested GitHub repository description:

```text
Public Astro site for Happygeneralist: tools, labs and longform writing on design, civic systems and making complex work more usable.
```
