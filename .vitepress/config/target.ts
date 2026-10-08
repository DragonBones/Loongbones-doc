/**
 * 构建目标语言：由 package.json 的 build:cn / build:en 通过 DOC_TARGET 注入。
 *
 * 约定：
 * - 目标语言的页面全部生成在站点根路径下（/doc/ 就是该语言的首页）；
 * - 另一种语言整体下沉到 /<lang>/ 下，避免与目标语言同名 URL 碰撞。
 *
 * 因此：
 * - build:cn → /doc/ 中文首页，/doc/en/ 英文；
 * - build:en → /doc/ 英文首页，/doc/zh/ 中文。
 */
export type DocTarget = 'zh' | 'en'

export const docTarget: DocTarget = process.env.DOC_TARGET === 'en' ? 'en' : 'zh'
export const isEnTarget = docTarget === 'en'
/** 非目标语言（在产物里需要带前缀的那个） */
export const otherLang: DocTarget = isEnTarget ? 'zh' : 'en'

/**
 * 某个语言在当前构建产物中的 URL 前缀：
 * 目标语言为 ''（占根路径），另一种语言为 '/<lang>'。
 */
export function prefix(lang: DocTarget): string {
  return lang === docTarget ? '' : `/${lang}`
}

/** 去掉链接里已有的语言前缀，便于按当前构建目标重新拼前缀 */
function stripLangPrefix(link: string): string {
  return link.replace(/^\/(?:en|zh)(?=\/|$)/, '')
}

/**
 * 把写在源码里的链接（可能带 /en、/zh，也可能不带）按当前构建目标拼成正确 URL。
 * 外链、锚点等非站内路径原样返回。
 */
export function localeUrl(lang: DocTarget, link: string): string {
  if (typeof link !== 'string') return link
  if (!link.startsWith('/') || /^(?:https?:)?\/\//i.test(link)) return link
  return prefix(lang) + stripLangPrefix(link)
}

/** 从页面源文件路径（pageData.filePath，不受 rewrites 影响）判断语言 */
export function langOfSourcePath(filePath: string): DocTarget {
  return filePath.startsWith('en/') ? 'en' : 'zh'
}
