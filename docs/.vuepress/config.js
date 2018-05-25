module.exports = {
  title: 'Ream',
  description: 'Universal Vue.js Applications Made Simple',
  serviceWorker: true,
  themeConfig: {
    repo: 'ream/ream',
    docsRepo: 'ream/ream-website',
    docsDir: 'docs',
    editLinks: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' }
    ],
    sidebar: [
      {
        title: 'Guide',
        children: [
          '/guide/installation',
          '/guide/introduction',
          '/guide/data-prefetching',
          '/guide/custom-document',
          '/guide/serve-public-files',
          '/guide/manipulating-head',
        ]
      },
      '/config'
    ]
  }
}