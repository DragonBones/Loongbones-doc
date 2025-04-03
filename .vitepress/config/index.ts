import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
import { zh } from './zh'

export default defineConfig({
  ...shared,
  locales: {
    zh: { label: '简体中文', ...zh },
    root: { label: 'English', ...en }
  }
})
