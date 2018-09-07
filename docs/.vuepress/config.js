// use config.yml for simple configuration
module.exports = {
  dest: 'dist',
  title: 'PakeWeb',
  description: 'Website gratis mutakhir, cepat dan profesional.',
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
    ['meta', { name: 'apple-mobile-web-app-title', content: 'PakeWeb' }],
    ['meta', { name: 'application-name', content: 'PakeWeb' }],
    ['meta', { name: 'msapplication-TileColor', content: '#00aba9' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],
  serviceWorker: true,
  themeConfig: {
    search: false,
    repo: 'pakeweb/pakeweb',
    editLinks: true,
    editLinkText: 'Edit halaman ini',
    docsDir: 'docs',
    logo: '/logo.svg',
    nav: [
      { text: 'pengembang', link: '/pengembang/' },
      { text: 'ikhtisar', link: '/ikhtisar/' },
      // { text: 'hubungi', link: '/hubungi/' },
    ],
    activeHeaderLinks: false,
    serviceWorker: {
      updatePopup: {
        message: 'Ditemukan pembaruan pada website.',
        buttonText: 'Perbarui',
      },
    },
  },
}
