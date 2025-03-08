import path from 'node:path'
import { defineThemeConfig } from 'vuepress-theme-plume'
import navbar from './navbar.js'
import notes from './notes/index.js'
// 
// 
// 主题配置文件，由于每次修改 .vuepress/config.ts，都需要重启 VuePress 服务，然而实际上大多数时候都不需要这么做。
// 
// 主题将不需要重启服务的配置移动到了这里。在这里修改配置时，仅通过热更新的方式更新主题。
export default defineThemeConfig({
  logo: '/plume.png',
  docsRepo: 'https://github.com/pengzhanbo/vuepress-theme-plume',
  docsDir: 'docs',
  
  navbar,
  notes,

  profile: {
    avatar: '/plume.png',
    name: 'Plume Theme',
    description: 'The Theme for Vuepress 2.0',
    location: 'GuangZhou, China',
    organization: 'pengzhanbo',
  },

  social: [
    { icon: 'github', link: 'https://github.com/pengzhanbo/vuepress-theme-plume' },
    { icon: 'qq', link: 'https://qm.qq.com/q/FbPPoOIscE' },
  ],
  navbarSocialInclude: ['github', 'qq'],

  footer: {
    copyright: 'Copyright © 2021-present pengzhanbo',
  },


})
