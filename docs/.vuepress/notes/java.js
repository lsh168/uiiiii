import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  link: '/java/',
  dir: 'java',
  sidebar: [
    {
      dir: '面试',
      text: 'Java面试',
      collapsed: false,
      items: ['Java基础','Java集合','常用框架','数据库'],
    }
  ],
})
