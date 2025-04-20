import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
// import { defaultTheme } from '@vuepress/theme-default'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // 请不要忘记设置默认语言
  lang: 'zh-CN',
  port: '80',
  title: 'Uiiiii（Ui⁵）',
  description: '这是我的第一个 VuePress 站点',
  // theme: defaultTheme(),
  theme: plumeTheme({
    plugins: {
      shiki: {
        languages: ['javascript', 'typescript', 'vue', 'bash', 'sh',"java","xml","sql","yaml"], 
      },
      redirect: {
        redirectors: [
          {
            from: '/',
            to: '/java/' // 替换为你的笔记页面实际路径
          }
        ]
      }
    },
    
    // more...
    footer: {
      message: `
        <a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2024093349号</a> | Copyright © 2024-present
      `,
      copyright: '111111111',
    }
  }),
  bundler: viteBundler(),


})