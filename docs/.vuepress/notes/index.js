import { defineNotesConfig } from 'vuepress-theme-plume'
import java from './java.js'
import siteNavigation from './siteNavigation.js'
export default defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    java,
    siteNavigation
  ],
})
