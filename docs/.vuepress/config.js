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
          '/guide/serve-public-files',
          '/guide/manipulating-head',
          '/guide/custom-document',
          '/guide/custom-root-component',
          '/guide/custom-error-page',
          '/guide/using-plugins'
        ]
      },
      {
        title: 'Advanced',
        children: [
          '/advanced/app-level-enhancements'
        ]
      },
      '/entry-file',
      '/config',
      '/plugin-api'
    ]
  }
}