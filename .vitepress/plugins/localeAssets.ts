import fs from 'node:fs'
import path from 'node:path'
import type MarkdownIt from 'markdown-it'

export interface LocaleAssetsOptions {
  /** 项目根目录，用于拼接 public 目录做存在性检查 */
  root?: string
  /** 回退语言（默认语言），英文等缺失时回退到此语言的图片 */
  defaultLang?: string
  /** 占位图（当目标语言与默认语言都缺图时使用），相对 public 根，以 / 开头 */
  placeholder?: string
}

const SRC_RE = /\bsrc\s*=\s*(["'])([^"']+)\1/gi

// 存在性检查缓存：同一 public 路径只查一次，避免热路径上重复 IO
const existsCache = new Map<string, boolean>()
function exists(file: string): boolean {
  const cached = existsCache.get(file)
  if (cached !== undefined) return cached
  const result = fs.existsSync(file)
  existsCache.set(file, result)
  return result
}

// 去重后的回退/缺失日志，避免每页刷屏
const logged = new Set<string>()
function logFallback(relativePath: string, original: string, resolved: string, kind: 'fallback' | 'placeholder') {
  const key = `${kind}:${relativePath}:${original}`
  if (logged.has(key)) return
  logged.add(key)
  if (kind === 'fallback') {
    console.warn(`[locale-assets] 回退图片：${relativePath} 的 ${original} 不存在，使用 ${resolved}`)
  } else {
    console.warn(`[locale-assets] 缺失图片：${relativePath} 的 ${original} 任何语言均无对应文件，使用占位图 ${resolved}`)
  }
}

function resolveSrc(src: string, env: any, options: Required<LocaleAssetsOptions>): string {
  // 相对路径、外部链接、锚点等不做语言化处理
  if (!src.startsWith('/') || /^(https?:)?\/\//i.test(src)) return src

  // 必须用「源文件路径」判断语言：env.relativePath / env.path 是 rewrites 之后的目标路径，
  // 英文构建下英文页会被重写到根路径（tutorial/...），据此会误判成默认语言 zh 而取错图片。
  const sourcePath: string = env?.realPath || env?.path || ''
  const relativePath: string = sourcePath
    ? path.relative(options.root, sourcePath)
    : env?.relativePath || ''
  const lang = relativePath.startsWith('en/') ? 'en' : options.defaultLang

  const publicFile = (p: string) => path.join(options.root, 'public', p)
  const langPath = `/${lang}${src}`
  if (exists(publicFile(langPath))) return langPath

  const defPath = `/${options.defaultLang}${src}`
  if (lang !== options.defaultLang && exists(publicFile(defPath))) {
    logFallback(relativePath, src, defPath, 'fallback')
    return defPath
  }

  logFallback(relativePath, src, options.placeholder, 'placeholder')
  return options.placeholder
}

function walk(tokens: any[], env: any, options: Required<LocaleAssetsOptions>) {
  for (const token of tokens) {
    if (!token) continue
    if (token.type === 'inline' && Array.isArray(token.children)) {
      walk(token.children, env, options)
      continue
    }
    if (token.type === 'image') {
      const src = token.attrGet('src')
      if (src) token.attrSet('src', resolveSrc(src, env, options))
    }
    if (token.type === 'html_inline' || token.type === 'html_block') {
      if (typeof token.content === 'string') {
        token.content = token.content.replace(SRC_RE, (_m, q: string, p: string) => {
          return `src=${q}${resolveSrc(p, env, options)}${q}`
        })
      }
    }
  }
}

export function localeAssets(md: MarkdownIt, opts: LocaleAssetsOptions = {}) {
  const options: Required<LocaleAssetsOptions> = {
    root: opts.root ?? process.cwd(),
    defaultLang: opts.defaultLang ?? 'zh',
    placeholder: opts.placeholder ?? '/placeholder.svg'
  }

  md.core.ruler.push('locale-assets', (state) => {
    walk(state.tokens, state.env, options)
  })
}

export default localeAssets
