// 部署到 Cloudflare Worker，并把 git/构建信息作为 deployment message 附加，
// 这样在 Cloudflare 控制台的 Deployments 列表里能直接看到本次部署对应了哪个 commit。
// 等价于原流程：build:en → prepare-deploy.mjs → wrangler deploy --message "..."。
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const root = join(scriptDir, '..')

function git(cmd) {
  try {
    return execSync(cmd, { cwd: root, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim()
  } catch {
    return ''
  }
}

const version = (() => {
  try {
    // package.json 里没有 version 字段时，node -p 会打印 "undefined"，这里一并当成无版本号
    const v = execSync('node -p "require(\'./package.json\').version"', { cwd: root }).toString().trim()
    return v && v !== 'undefined' ? v : ''
  } catch {
    return ''
  }
})()

// 部署目标：命令行参数 > 环境变量 DOC_TARGET > 默认 en
// --dry-run：只整理目录并打印 message，不真正上传，用于先确认部署信息
const args = process.argv.slice(2).filter((a) => !a.startsWith('--'))
const dryRun = process.argv.includes('--dry-run')
const target = (args[0] || process.env.DOC_TARGET || 'en').toLowerCase()

// 部署环境：对应 wrangler.worker.toml 里的 [env.<name>]，决定部署到哪个 Worker。
// 空 = 顶层 name（测试 Worker）；"prod" = 生产 Worker（loongbones-doc-en）
const deployEnv = process.env.DEPLOY_ENV || ''

// 分支保护：设置后，只有当前分支等于该值时才允许部署（生产部署要求 main）
const requireBranch = process.env.DEPLOY_BRANCH || ''
if (requireBranch) {
  const currentBranch = git('git rev-parse --abbrev-ref HEAD')
  if (currentBranch !== requireBranch) {
    console.error(
      `[deploy-worker] 当前分支是 "${currentBranch || '未知'}"，只有在 "${requireBranch}" 分支上才能部署，已中止。`,
    )
    process.exit(1)
  }
  console.log(`[deploy-worker] 分支检查通过：${currentBranch}`)
}

const commit = (git('git rev-parse HEAD') || '').slice(0, 7)
const branch = git('git rev-parse --abbrev-ref HEAD')
const dirty = git('git status --porcelain').length > 0 ? 'dirty' : 'clean'
const time = new Date().toISOString()

// 最后一次提交的 message（只取标题行 %s），超长时截断，避免部署消息过长
const rawCommitMsg = git('git log -1 --pretty=%s')
const commitMsg = rawCommitMsg
  ? rawCommitMsg.length > 120
    ? `${rawCommitMsg.slice(0, 117)}...`
    : rawCommitMsg
  : 'no commit message'

const message = [
  version ? `v${version}` : '',
  commitMsg,
  commit || 'nogit',
  branch || '?',
  dirty,
  time,
]
  .filter(Boolean)
  .join(' · ')

console.log(`[deploy-worker] deployment message: ${message}`)
console.log(`[deploy-worker] 部署目标：${target}${deployEnv ? ` · env=${deployEnv}` : ' · env=(顶层/test)'}`)

// 1) 整理目录（.vitepress/dist/<target> → deploy/，根 index.html + doc/）
execSync(`node scripts/prepare-deploy.mjs ${target}`, { cwd: root, stdio: 'inherit' })

// 2) 推到 Cloudflare Worker，并附加 message
// 用显式绝对路径调用 wrangler（不依赖 npm 注入的 PATH），并走系统 shell 执行，
// 这样 .cmd 在 Windows 下也能正常拉起；wrangler 自身的报错会直接打印到终端。
const wranglerBin = join(
  root,
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'wrangler.cmd' : 'wrangler',
)
const envArg = deployEnv ? ` --env ${deployEnv}` : ''
const deployCmd =
  `"${wranglerBin}" deploy --config wrangler.worker.toml${envArg} --message ${JSON.stringify(message)}`
if (dryRun) {
  console.log(`[deploy-worker] --dry-run：已跳过上传，将执行：\n${deployCmd}`)
  process.exit(0)
}
try {
  execSync(deployCmd, { cwd: root, stdio: 'inherit' })
} catch (e) {
  const status = typeof e?.status === 'number' ? e.status : 1
  console.error(`[deploy-worker] wrangler deploy 失败 (exit ${status})`)
  process.exit(status)
}
