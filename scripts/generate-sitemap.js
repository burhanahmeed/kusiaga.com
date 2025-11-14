const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const BASE_URL = process.env.SITE_URL || 'https://brhn.my.id'

const toUrl = (p) => `${BASE_URL}${p}`

function getPosts() {
  const dir = path.join(process.cwd(), '_posts')
  if (!fs.existsSync(dir)) return []
  const names = fs.readdirSync(dir)
  return names.reduce((acc, name) => {
    let file = path.join(dir, `${name}.md`)
    if (!fs.existsSync(file)) file = path.join(dir, name, 'index.md')
    if (!fs.existsSync(file)) return acc
    const { data } = matter(fs.readFileSync(file, 'utf8'))
    acc.push({ loc: toUrl(`/posts/${name}`), lastmod: data.date })
    return acc
  }, [])
}

function getPortfolios() {
  const dir = path.join(process.cwd(), 'contents', 'portfolios')
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir)
  return files.reduce((acc, file) => {
    if (!file.endsWith('.mdx') || file.startsWith('draft.')) return acc
    const slug = file.replace(/\.mdx$/, '')
    const { data } = matter(fs.readFileSync(path.join(dir, file), 'utf8'))
    acc.push({ loc: toUrl(`/portfolio/${slug}`), lastmod: data.date })
    return acc
  }, [])
}

function buildXml(urls) {
  const head = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  const tail = '</urlset>'
  const body = urls
    .map((u) => {
      const last = u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''
      const cf = u.changefreq ? `\n    <changefreq>${u.changefreq}</changefreq>` : ''
      const pr = u.priority ? `\n    <priority>${u.priority}</priority>` : ''
      return `  <url>\n    <loc>${u.loc}</loc>${last}${cf}${pr}\n  </url>`
    })
    .join('\n')
  return [head, body, tail].join('\n')
}

function main() {
  const staticPages = [
    { loc: toUrl('/'), changefreq: 'weekly', priority: '1.0' },
    { loc: toUrl('/about'), changefreq: 'monthly' },
    { loc: toUrl('/consultants'), changefreq: 'monthly' },
    { loc: toUrl('/projects'), changefreq: 'monthly' },
    { loc: toUrl('/projects-v1'), changefreq: 'monthly' },
    { loc: toUrl('/portfolio'), changefreq: 'monthly' }
  ]

  const posts = getPosts().map((p) => ({ ...p, changefreq: 'yearly' }))
  const portfolios = getPortfolios().map((p) => ({ ...p, changefreq: 'yearly' }))

  const xml = buildXml([...staticPages, ...posts, ...portfolios])

  const outDir = path.join(process.cwd(), 'public')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)
  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml)

  const robots = `User-agent: *\nAllow: /\nSitemap: ${toUrl('/sitemap.xml')}`
  fs.writeFileSync(path.join(outDir, 'robots.txt'), robots)
}

main()