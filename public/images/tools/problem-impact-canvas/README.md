# Problem Impact Canvas images

Put public image assets for the Problem Impact Canvas tool page in this folder.

Recommended files:

```text
problem-impact-canvas-preview.png
problem-impact-canvas-in-use.png
```

Use `problem-impact-canvas-preview.png` for the blank canvas or product-style preview image.

Use `problem-impact-canvas-in-use.png` for a contextual image showing the canvas being used in practice.

Reference these files from content as:

```yaml
preview_image:
  src: /happygeneralist-site/images/tools/problem-impact-canvas/problem-impact-canvas-preview.png
  alt: Brief description of the image.
```

When the site moves to `happygeneralist.com`, the base path will change. In Astro components, asset paths should normally be resolved with `import.meta.env.BASE_URL` rather than hard-coded.
