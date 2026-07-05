// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

const productionSite = 'https://happygeneralist.com'

export default defineConfig({
  site: productionSite,
  integrations: [mdx()]
})
