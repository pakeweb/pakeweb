const container = require('markdown-it-container')

module.exports = {
  dest: 'dist',
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    [
      'link',
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: '#008080' },
    ],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Pake Web' }],
    ['meta', { name: 'application-name', content: 'Pake Web' }],
    ['meta', { name: 'msapplication-TileColor', content: '#00aba9' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],
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
}
