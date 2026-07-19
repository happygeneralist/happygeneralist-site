import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const root = process.cwd()
const distDir = join(root, 'dist')
const productionSite = new URL('https://happygeneralist.com')

if (!existsSync(distDir)) {
  console.error('dist is missing; run the Astro build before generating the sitemap')
  process.exit(1)
}

const walk = (dir, files = []) => {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry)

    if (statSync(fullPath).isDirectory()) {
      walk(fullPath, files)
    } else {
      files.push(fullPath)
    }
  }

  return files
}

const escapeXml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;')

const hasNoIndexDirective = (html) => {
  const metaTags = html.match(/<meta\b[^>]*>/gi) ?? []

  return metaTags.some((tag) => {
    const name = tag.match(/\bname\s*=\s*["']([^"']+)["']/i)?.[1]?.toLowerCase()
    const content = tag.match(/\bcontent\s*=\s*["']([^"']+)["']/i)?.[1]?.toLowerCase()

    return (name === 'robots' || name === 'googlebot') && content?.includes('noindex')
  })
}

const getCanonicalUrl = (html) => {
  const linkTags = html.match(/<link\b[^>]*>/gi) ?? []

  for (const tag of linkTags) {
    const rel = tag.match(/\brel\s*=\s*["']([^"']+)["']/i)?.[1]?.toLowerCase()
    if (!rel?.split(/\s+/).includes('canonical')) continue

    const href = tag.match(/\bhref\s*=\s*["']([^"']+)["']/i)?.[1]
    if (href) return new URL(href, productionSite).href
  }

  return null
}

const deriveUrlFromFile = (filePath) => {
  const relativePath = relative(distDir, filePath).split(sep).join('/')

  if (relativePath === 'index.html') {
    return productionSite.href
  }

  if (relativePath.endsWith('/index.html')) {
    return new URL(relativePath.slice(0, -'index.html'.length), productionSite).href
  }

  return new URL(relativePath.replace(/\.html$/, '/'), productionSite).href
}

const urls = [...new Set(
  walk(distDir)
    .filter((filePath) => filePath.endsWith('.html'))
    .filter((filePath) => !filePath.endsWith('/404.html') && !filePath.endsWith('\\404.html'))
    .flatMap((filePath) => {
      const html = readFileSync(filePath, 'utf8')
      if (hasNoIndexDirective(html)) return []

      return [getCanonicalUrl(html) ?? deriveUrlFromFile(filePath)]
    })
)].sort()

if (urls.length === 0) {
  console.error('No indexable HTML routes were found in dist')
  process.exit(1)
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`).join('\n')}
</urlset>
`

const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${escapeXml(new URL('sitemap-0.xml', productionSite).href)}</loc></sitemap>
</sitemapindex>
`

writeFileSync(join(distDir, 'sitemap-0.xml'), sitemap)
writeFileSync(join(distDir, 'sitemap-index.xml'), sitemapIndex)

console.log(`Generated sitemap for ${urls.length} indexable routes`)
