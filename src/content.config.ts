import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  status: z.enum(['rough', 'emerging', 'usable', 'tested', 'archived']).default('emerging'),
  maturity: z.enum(['seed', 'draft', 'developing', 'stable']).default('draft'),
  themes: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  related: z.array(z.string()).default([]),
  origin_repo: z.string().optional(),
  origin_path: z.string().optional(),
  source_repo: z.string().optional(),
  source_path: z.string().optional(),
  source_visibility: z.enum(['public', 'private', 'internal']).optional(),
  source_note: z.string().optional(),
  featured: z.boolean().default(false)
})

const imageAssetSchema = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional()
})

const contentLoader = (section: string) =>
  glob({
    pattern: '**/*.{md,mdx}',
    base: `./src/content/${section}`
  })

const notebook = defineCollection({
  loader: contentLoader('notebook'),
  schema: baseSchema.extend({
    entry_type: z.enum(['note', 'short-entry', 'essay', 'longform', 'observation', 'question', 'pattern', 'fragment']).default('note'),
    layout_variant: z.enum(['standard', 'longform']).default('standard'),
    origin_note: z.string().optional(),
    hero_image: imageAssetSchema.optional(),
    sections: z.array(z.object({
      label: z.string(),
      href: z.string()
    })).default([]),
    extracts: z.array(z.object({
      title: z.string(),
      href: z.string(),
      description: z.string().optional()
    })).default([])
  })
})

const tools = defineCollection({
  loader: contentLoader('tools'),
  schema: baseSchema.extend({
    tool_type: z.enum(['canvas', 'checklist', 'prompt', 'method', 'framework', 'diagnostic']).default('framework'),
    use_when: z.array(z.string()).default([]),
    helps_with: z.array(z.string()).default([]),
    inputs: z.array(z.string()).default([]),
    outputs: z.array(z.string()).default([]),
    preview_image: imageAssetSchema.optional(),
    downloads: z.array(z.object({
      label: z.string(),
      href: z.string(),
      type: z.string().optional()
    })).default([])
  })
})

const labs = defineCollection({
  loader: contentLoader('labs'),
  schema: baseSchema.extend({
    lab_type: z.enum(['case-study', 'prototype', 'experiment', 'system', 'visual-essay']).default('experiment'),
    layout: z.enum(['standard', 'magazine', 'canvas', 'interactive']).default('standard'),
    project_status: z.enum(['concept', 'active', 'paused', 'complete', 'archived']).default('concept'),
    preview_image: imageAssetSchema.optional(),
    source_repos: z.array(z.string()).default([]),
    outputs: z.array(z.string()).default([])
  })
})

export const collections = {
  notebook,
  tools,
  labs
}
