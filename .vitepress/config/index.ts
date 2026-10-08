import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
import { zh } from './zh'
import { isEnTarget } from './target'

// 目标语言永远是 root locale（占站点根路径 /doc/），另一种语言带 /<lang> 前缀。
// 注意：VitePress 是按「最终 URL 路径」判定 locale 的，所以这里必须和 shared.ts 的 rewrites 保持一致。
export default defineConfig({
  ...shared,
  locales: isEnTarget
    ? { root: { label: 'English', ...en }, zh: { label: '简体中文', ...zh } }
    : { root: { label: '简体中文', ...zh }, en: { label: 'English', ...en } }
})
