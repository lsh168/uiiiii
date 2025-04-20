import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  link: '/siteNavigation/',
  dir: 'siteNavigation',
  sidebar: [
    {
      dir: '导航',
      text: '站点导航',
      collapsed: false,
      items: ['常用导航','开发导航','学习导航'],
    }
  ],
})
