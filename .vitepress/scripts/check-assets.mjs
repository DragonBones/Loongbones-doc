// 扫描全站 md 的图片引用，输出「英文缺图清单 / 缺失清单」。
// 不阻塞构建，仅供补全英文（及其它语言）截图时对照。
// 用法：npm run assets:check
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const publicDir = path.join(root, 'public')

const SRC_RE = /(?:!\[[^\]]*\]\(([^)\s]+)\)|<img\b[^>]*\bsrc\s*=\s*(["'])([^"']+)\2[^>]*>)/gi

function listMd(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...listMd(full))
    else if (entry.name.endsWith('.md')) out.push(full)
  }
  return out
}

function publicFile(lang, src) {
  return path.join(publicDir, lang, src)
}

const fallback = [] // 回退到中文图（英文站）
const missing = []  // 任何语言都没有

for (const file of listMd(path.join(root, 'zh')).concat(listMd(path.join(root, 'en')))) {
  const rel = path.relative(root, file).replace(/\\/g, '/')
  const lang = rel.startsWith('en/') ? 'en' : 'zh'
  const content = fs.readFileSync(file, 'utf-8')
  let m
  SRC_RE.lastIndex = 0
  while ((m = SRC_RE.exec(content))) {
    const src = (m[1] || m[3]).trim()
    if (!src.startsWith('/') || /^(https?:)?\/\//i.test(src)) continue
    const langExists = fs.existsSync(publicFile(lang, src))
    if (langExists) continue
    const zhExists = fs.existsSync(publicFile('zh', src))
    if (lang === 'en' && zhExists) fallback.push({ rel, src })
    else missing.push({ rel, src })
  }
}

console.log('\n=== 英文站回退到中文图的页面（建议补英文截图） ===')
if (fallback.length === 0) console.log('（无）')
else fallback.forEach((f) => console.log(`  ${f.rel}  ->  ${f.src}`))

console.log('\n=== 任何语言都缺失的图片（将显示占位图，需补图） ===')
if (missing.length === 0) console.log('（无）')
else missing.forEach((f) => console.log(`  ${f.rel}  ->  ${f.src}`))

console.log(`\n合计：回退 ${fallback.length} 处，缺失 ${missing.length} 处。\n`)
