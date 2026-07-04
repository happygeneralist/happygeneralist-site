# Problem Impact Canvas downloads

Put public downloadable assets for the Problem Impact Canvas tool page in this folder.

Recommended files:

```text
problem-impact-canvas-v1.4.pdf
problem-impact-canvas-v1.4.png
```

Use the PDF as the primary download for people who want to print or use the canvas.

Use the PNG only if you want to offer an image version as a secondary download.

Reference these files from tool frontmatter as:

```yaml
downloads:
  - label: Download the canvas
    href: /happygeneralist-site/downloads/tools/problem-impact-canvas/problem-impact-canvas-v1.4.pdf
    type: PDF
```

When the site moves to `happygeneralist.com`, the `/happygeneralist-site/` base path will be removed. In Astro components, download paths should normally be resolved with `import.meta.env.BASE_URL` rather than hard-coded.
