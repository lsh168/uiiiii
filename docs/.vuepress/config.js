import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // 请不要忘记设置默认语言
  lang: 'zh-CN',
  port: '80',
  title: 'Uiiiii  （一个u五个i）',
  description: '这是我的第一个 VuePress 站点',
  theme: plumeTheme({
    
    // more...
    footer: {
      message: `
        <a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2024093349号</a> | Copyright © 2016-2024
      `,
      // copyright: '111111111',
    }
  }),
  bundler: viteBundler(),

})