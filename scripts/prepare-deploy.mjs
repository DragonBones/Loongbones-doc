// 整理部署目录，复刻手动部署前的目录整理步骤：
//   1) 把构建产物 .vitepress/dist/<target>/ 的全部内容复制到 deploy/doc/
//   2) 把 deploy/doc/index.html 复制一份到 deploy/ 根目录
// 最终 deploy/ 的结构（即要上传的静态资源）为：
//   deploy/
//   ├── index.html        ← 根路径入口（doc/index.html 的副本）
//   └── doc/              ← 站点本体（vitepress base 为 /doc/，所以必须放在 doc/ 下）
//       ├── index.html
//       ├── assets/
//       └── ...
// 之后由 `wrangler deploy --config wrangler.worker.toml` 把 deploy/ 作为 Worker 静态资源上传。

import { cpSync, copyFileSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const projectRoot = join(scriptDir, '..')

// 构建目标：命令行参数 > 环境变量 DOC_TARGET > 默认 en。
// 注意 package.json 的 build:en/build:cn 用 cross-env 注入的 DOC_TARGET 只在那条命令内有效，
// deploy-worker.mjs 是独立进程拿不到，所以这里也支持显式传参：node scripts/prepare-deploy.mjs en
const target = (process.argv[2] || process.env.DOC_TARGET || 'en').toLowerCase()

const distDir = join(projectRoot, '.vitepress', 'dist', target)
const deployDir = join(projectRoot, 'deploy')
const assetDir = join(deployDir, 'doc')

if (!existsSync(distDir)) {
  console.error(`[prepare-deploy] 找不到构建产物 ${distDir}，请先运行构建（如 npm run build:${target}）`)
  process.exit(1)
}
if (!existsSync(join(distDir, 'index.html'))) {
  console.error(`[prepare-deploy] ${distDir} 里没有 index.html，构建可能未完成`)
  process.exit(1)
}

// 清理上一次生成的 deploy/
if (existsSync(deployDir)) rmSync(deployDir, { recursive: true, force: true })
mkdirSync(assetDir, { recursive: true })

// 1) .vitepress/dist/<target>/* -> deploy/doc/*
//    用复制而不是移动：保留构建产物，脚本可重复执行，也不影响 vitepress preview
cpSync(distDir, assetDir, { recursive: true })

// 2) doc/index.html 的副本 -> deploy/index.html
copyFileSync(join(assetDir, 'index.html'), join(deployDir, 'index.html'))

console.log(`[prepare-deploy] 已生成 deploy/（根 index.html + doc/，来源 .vitepress/dist/${target}），可部署。`)
