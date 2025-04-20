import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  link: '/ai/',
  dir: 'ai',
  sidebar: [
    {
      dir: '基础',
      text: '基础',
      collapsed: false,
      items: ['基础理论'],
    }
  ],
})
