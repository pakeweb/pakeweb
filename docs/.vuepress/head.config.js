module.exports = [
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  [
    'meta',
    { name: 'apple-mobile-web-app-status-bar-style', content: '#008080' },
  ],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Pake Web' }],
  ['meta', { name: 'application-name', content: 'Pake Web' }],
  ['meta', { name: 'msapplication-TileColor', content: '#00aba9' }],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
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
  [
    'link',
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:300',
    },
  ],
]
