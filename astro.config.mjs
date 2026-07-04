// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

const productionSite = 'https://happygeneralist.github.io'

export default defineConfig({
  site: productionSite,
  base: '/happygeneralist-site/',
  integrations: [mdx()]
})
