const container = require('markdown-it-container')
const path = require('path')

const head = require('./head.config')

module.exports = {
  dest: 'dist',
  head,
  ga: 'UA-125480832-1',
  markdown: {
    config: md => {
      md.use(container, 'share', {
        render(tokens, idx) {
          return tokens[idx].nesting === 1 ? '<Share>' : '</Share>'
        },
      })
    },
  },
  locales: {
    '/': {
      lang: 'id-ID',
      title: 'Pake Web',
      description: 'Website gratis mutakhir, cepat dan profesional.',
    },
  },
  serviceWorker: true,
  themeConfig: {
    search: false,
    editLinks: true,
    repo: 'pakeweb/pakeweb',
    docsDir: 'docs',
    logo: '/logo.svg',
    locales: {
      '/': {
        editLinkText: 'Edit halaman ini',
        nav: [
          { text: 'Beranda', link: '/' },
          // { text: 'pengembang', link: '/pengembang/' },
          { text: 'ikhtisar', link: '/ikhtisar/' },
          // { text: 'hubungi', link: '/hubungi/' },
          { text: 'pengajuan', link: '/pengajuan/' },
        ],
        serviceWorker: {
          updatePopup: {
            message: 'Ditemukan pembaruan.',
            buttonText: 'Perbarui',
          },
        },
        lastUpdated: 'Diperbarui pada',
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@pkg': path.resolve(__dirname, '../../node_modules'),
      },
    },
  },
}
