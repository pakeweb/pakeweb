// use config.yml for simple configuration
module.exports = {
  dest: 'dist',
  title: 'PakeWeb',
  description: 'Website gratis mutakhir, cepat dan profesional.',
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
  },
}
