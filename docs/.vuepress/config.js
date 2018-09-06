// use config.yml for simple configuration
module.exports = {
  dest: 'dist',
  title: 'Pak é Web',
  description: 'Buat website gratis dengan teknologi mutakhir.',
  themeConfig: {
    repo: 'pakeweb/pakeweb',
    editLinks: true,
    docsDir: 'docs',
    logo: '/logo.svg',
    nav: [
      { text: 'pengembang', link: '/pengembang/' },
      { text: 'ikhtisar', link: '/ikhtisar/' },
      { text: 'hubungi', link: '/hubungi/' },
    ],
    activeHeaderLinks: false,
  },
}
