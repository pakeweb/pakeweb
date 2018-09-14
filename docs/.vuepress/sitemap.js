const fs = require('fs')
const path = require('path')
const sitemap = require('sitemap')
const _ = require('lodash')

const config = require('./config')

const nav = _.get(config, 'themeConfig.locales./.nav')

const urls = nav.map(i => ({ url: i.link, changefreq: 'daily' }))

const sitemapXML = sitemap.createSitemap({
  hostname: 'https://pake.web.id',
  cacheTime: 600000, // 600 sec cache period
  urls,
})

fs.writeFileSync(
  path.resolve(__dirname, 'public/sitemap.xml'),
  sitemapXML.toString()
)
