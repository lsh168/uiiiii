import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/', icon: 'material-symbols:home' },
  // {
  //   text: '博客',
  //   link: '/blog/',
  //   activeMatch: '^/(blog|article)/',
  //   icon: 'material-symbols:menu-book',
  // },
  // { text: 'Projects', link: '/projects/', icon: 'ri:open-source-fill' },
  {
    text: '计算机408笔记',
    icon: 'mdi:idea',
    activeMatch: '^/(vuepress-theme-plume|vuepress-plugin)/',
    items: [
      {
        text: '计算机组成原理',
        icon: 'material-symbols:toys-fan',
        link: 'https://www.yuque.com/ale666/kaoyan/gz0q7xddypdy5lqg'
      },
      {
        text: '操作系统',
        icon: 'material-symbols:toys-fan',
        link: 'https://www.yuque.com/ale666/kaoyan/ereg1mxzmyro0rhv'
      },
      {
        text: '计算机网络',
        icon: 'material-symbols:toys-fan',
        link: 'https://www.yuque.com/ale666/kaoyan/ytgattk4mlbfw4cy'
      },
      {
        text: '数据结构',
        icon: 'material-symbols:toys-fan',
        link: 'https://www.yuque.com/ale666/kaoyan/rnz73a1wycg2gdcp'
      },
      {
        text: '更多',
        icon: 'material-symbols:pending',
        items: [
          { 
            text: '考研',
            link: 'https://www.yuque.com/ale666/kaoyan',
            icon: 'material-symbols:sentiment-satisfied-outline'
          },
          { 
            text: '计算机408脑图',
            link: 'https://www.yuque.com/ale666/kaoyan/wb6m6yf9hpdilzxu',
            icon: 'material-symbols:sentiment-satisfied-outline'
          },
        ]
      }
    ],
  },
  {
    text: '人工智能',
    icon: 'icon-park-solid:bookshelf',
    items: [
      {
        text: '人工智能',
        link: '/ai/',
        activeMatch: '^/ai/',
        icon: 'emojione:memo',
      },
    ],
  },
  {
    text: '笔记',
    icon: 'icon-park-solid:bookshelf',
    items: [
      {
        text: 'Java',
        link: '/java/',
        activeMatch: '^/java/',
        icon: 'emojione:memo',
      },
      // {
      //   text: '防御性CSS',
      //   link: '/defensive-css/',
      //   activeMatch: '^/defensive-css/',
      //   icon: 'streamline:css-three',
      // },
      // {
      //   text: '前端面试题',
      //   link: '/interview-question/',
      //   activeMatch: '^/interview-question/',
      //   icon: 'codicon:comment-unresolved',
      // },
      // {
      //   text: 'type-challenges',
      //   link: '/type-challenges/',
      //   activeMatch: '^/type-challenges/',
      //   icon: 'mdi:language-typescript',
      // },
      // {
      //   text: 'Rust学习简记',
      //   link: '/learn-rust/',
      //   activeMatch: '^/learn-rust/',
      //   icon: 'mdi:language-rust',
      // },
    ],
  },
  {
    text: '更多',
    icon: 'mingcute:more-3-fill',
    items: [
      // {
      //   text: '书籍推荐',
      //   link: '/ebooks/',
      //   icon: 'material-symbols:recommend',
      //   activeMatch: '^/ebooks/',
      // },
      {
        text: '常用导航',
        link: '/siteNavigation/',
        icon: 'mdi:roadmap',
        activeMatch: '^/siteNavigation/',
      },
      // {
      //   text: 'Command-Line Interface',
      //   link: '/cli/',
      //   icon: 'grommet-icons:cli',
      //   activeMatch: '^/cli',
      // },
      // {
      //   text: 'You-Need-Know-Vite',
      //   link: 'https://you-need-know-vite.netlify.app/',
      //   icon: 'vscode-icons:file-type-vite',
      // },
      // {
      //   text: '中国古典文学',
      //   link: 'https://poetry.pengzhanbo.cn',
      //   icon: 'icon-park-outline:chinese',
      // },
    ],
  },
])
