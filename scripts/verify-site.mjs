import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const root = process.cwd()
const errors = []

const read = (path) => readFileSync(join(root, path), 'utf8')

const fail = (message) => {
  errors.push(message)
}

const walk = (dir, files = []) => {
  for (const entry of readdirSync(join(root, dir))) {
    const fullPath = join(root, dir, entry)
    const relPath = relative(root, fullPath)

    if (entry === 'node_modules' || entry === '.git' || entry === 'dist') continue

    if (statSync(fullPath).isDirectory()) {
      walk(relPath, files)
    } else {
      files.push(relPath)
    }
  }

  return files
}

const assertFileContainsExactly = (path, expected) => {
  if (!existsSync(join(root, path))) {
    fail(`${path} is missing`)
    return
  }

  const actual = read(path).trim()
  if (actual !== expected) {
    fail(`${path} should contain exactly "${expected}" but contains "${actual}"`)
  }
}

assertFileContainsExactly('public/CNAME', 'happygeneralist.com')

const astroConfig = read('astro.config.mjs')
if (!astroConfig.includes("const productionSite = 'https://happygeneralist.com'")) {
  fail('astro.config.mjs should set productionSite to https://happygeneralist.com')
}

if (/base\s*:/.test(astroConfig)) {
  fail('astro.config.mjs should not set a base path for the custom domain deployment')
}

const sourceFiles = walk('src').filter((path) => /\.(astro|md|mdx|ts|js|css)$/.test(path))
const publicFiles = walk('public')

for (const path of sourceFiles) {
  const content = read(path)

  if (content.includes('/happygeneralist-site/')) {
    fail(`${path} contains stale /happygeneralist-site/ project-base path`)
  }

  const downloadLinks = [
    ...content.matchAll(/href=["'](\/downloads\/[^"']+)["']/g),
    ...content.matchAll(/["'](\/downloads\/[^"']+)["']/g)
  ].map((match) => match[1])

  for (const href of new Set(downloadLinks)) {
    const publicPath = `public${href}`
    if (!existsSync(join(root, publicPath))) {
      fail(`${path} references missing download: ${href}`)
    }
  }
}

for (const path of publicFiles) {
  if (/\s/.test(path)) {
    fail(`${path} contains whitespace; public download and asset filenames should use kebab case without spaces`)
  }
}

if (errors.length > 0) {
  console.error('Site verification failed:')
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log('Site verification passed')
