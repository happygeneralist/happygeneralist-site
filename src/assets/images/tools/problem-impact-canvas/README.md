# Problem Impact Canvas source images

Put source images for the Problem Impact Canvas tool here when you want Astro to optimise them.

Recommended files:

```text
problem-impact-canvas-preview.png
problem-impact-canvas-in-use.png
```

Why this folder exists:

- images in `public/` are served as-is
- images in `src/assets/` can be processed by Astro's image pipeline
- the site components can generate responsive image markup from these source assets

Move current public images here with:

```bash
git mv public/images/tools/problem-impact-canvas/problem-impact-canvas-preview.png src/assets/images/tools/problem-impact-canvas/problem-impact-canvas-preview.png
git mv public/images/tools/problem-impact-canvas/problem-impact-canvas-in-use.png src/assets/images/tools/problem-impact-canvas/problem-impact-canvas-in-use.png
```

Then update content image paths to:

```yaml
preview_image:
  src: tools/problem-impact-canvas/problem-impact-canvas-preview.png
```

For MDX visual images, use:

```mdx
<VisualSignal
  src="tools/problem-impact-canvas/problem-impact-canvas-in-use.png"
  alt="..."
  caption="..."
/>
```
