import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '文苑推免指南',
  description: '2025年最新收录 · 985/211高校保研信息平台',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '院校名录', link: '/universities' },
      { text: '推免资讯', link: '/guide' },
      { text: '关于平台', link: '/about' }
    ],

    sidebar: {
      '/universities/': [
        {
          text: '院校名录',
          items: [
            { text: '全部院校', link: '/universities/' },
            { text: '985高校', link: '/universities/?tag=985' },
            { text: '211高校', link: '/universities/?tag=211' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/baoyan-platform' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: '保研路上，与你同行',
      copyright: '© 2025 文苑推免指南'
    }
  },
  markdown: {
    lineNumbers: true
  }
})
