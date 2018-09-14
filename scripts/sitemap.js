import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { createSitemap } from 'sitemap'

const { siteData } = require('vuepress/lib/app/.temp/siteData')
const { pages } = siteData

const urls = pages.map(i => ({
  url: i.path,
  lastmodISO: new Date(i.lastUpdated).toISOString(),
  changefreq: 'daily',
}))

const sitemap = createSitemap({
  hostname: 'https://pake.web.id',
  cacheTime: 600000, // 600 sec cache period
  urls,
})

writeFileSync(
  resolve(__dirname, '../docs/.vuepress/public/sitemap.xml'),
  sitemap.toString()
)
