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
  featured: z.boolean().default(false)
})

const contentLoader = (section: string) =>
  glob({
    pattern: '**/*.{md,mdx}',
    base: `./src/content/${section}`
  })

const notebook = defineCollection({
  loader: contentLoader('notebook'),
  schema: baseSchema.extend({
    entry_type: z.enum(['note', 'observation', 'question', 'pattern', 'fragment']).default('note')
  })
})

const ideas = defineCollection({
  loader: contentLoader('ideas'),
  schema: baseSchema.extend({
    idea_type: z.enum(['concept', 'distinction', 'provocation', 'principle', 'pattern']).default('concept'),
    core_claim: z.string().optional(),
    useful_when: z.array(z.string()).default([])
  })
})

const tools = defineCollection({
  loader: contentLoader('tools'),
  schema: baseSchema.extend({
    tool_type: z.enum(['canvas', 'checklist', 'prompt', 'method', 'framework', 'diagnostic']).default('framework'),
    use_when: z.array(z.string()).default([]),
    helps_with: z.array(z.string()).default([]),
    inputs: z.array(z.string()).default([]),
    outputs: z.array(z.string()).default([])
  })
})

const labs = defineCollection({
  loader: contentLoader('labs'),
  schema: baseSchema.extend({
    lab_type: z.enum(['case-study', 'prototype', 'experiment', 'system', 'visual-essay']).default('experiment'),
    layout: z.enum(['standard', 'magazine', 'canvas', 'interactive']).default('standard'),
    project_status: z.enum(['concept', 'active', 'paused', 'complete', 'archived']).default('concept'),
    source_repos: z.array(z.string()).default([]),
    outputs: z.array(z.string()).default([])
  })
})

const themes = defineCollection({
  loader: contentLoader('themes'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    theme_type: z.enum(['domain', 'method', 'concept', 'practice-area']).default('concept')
  })
})

export const collections = {
  notebook,
  ideas,
  tools,
  labs,
  themes
}
