module.exports = {
  title: 'nmmc-ui',
  description: '我们的目标是搞事情~',
  themeConfig: {
    nav: [ // 导航栏配置
      { text: '首页', link: '/' },
      { text: '技术文档', link: '/guide/' },
      { text: 'github', link: 'https://github.com/axiea5/nmmc-ui' }
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 1, // 侧边栏显示2级
    lastUpdated: '上次更新', // string | boolean
    author: 'echo',
    sidebar:
    {
      '/guide/': [
        '',
        'button',
        'content'
      ]
    }
  },
  plugins: [
    ['one-click-copy', {
      copyMessage: '复制成功!', // default is 'Copied successfully!'
      toolTipMessage: '复制到剪切板', // default is ''Copy to clipboard'
    }],
    ['dynamic-title', { //动态标题
      showText: "(/≧▽≦/)你来啦！",
      hideText: "o(´^｀)o你快回来！",
      recoverTime: 2000
    }],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新"
      }
    }]
  ]
}