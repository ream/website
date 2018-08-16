module.exports = {
  title: 'Ream',
  description: 'Universal Vue.js Applications Made Simple',
  ga: 'UA-54857209-15',
  themeConfig: {
    repo: 'ream/ream',
    docsRepo: 'ream/ream-website',
    docsDir: 'docs',
    editLinks: true,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Learn',
        items: [
          { text: 'Guide', link: '/guide/introduction' },
          {
            text: 'API',
            link: '/api'
          },
          {
            text: 'Plugin API',
            link: '/plugin-api'
          }
        ]
      },
      {
        text: 'References',
        items: [
          {
            text: 'Config file',
            link: '/references/config'
          },
          {
            text: 'Entry file',
            link: '/references/entry'
          }
        ]
      }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/installation',
          '/guide/introduction',
          '/guide/avoid-stateful-singletons',
          '/guide/data-prefetching',
          '/guide/serve-public-files',
          '/guide/manipulating-head',
          '/guide/progressive-web-app',
          '/guide/using-plugins'
        ]
      },
      {
        title: 'Customization',
        collapsable: false,
        children: [
          '/guide/custom-document',
          '/guide/custom-root-component',
          '/guide/custom-error-page'
        ]
      },
      {
        title: 'Advanced',
        collapsable: false,
        children: [
          '/advanced/custom-server',
          '/advanced/app-level-enhancements',
          '/advanced/cli'
        ]
      }
    ]
  }
}
