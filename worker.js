// 极简 Worker 入口：把所有请求转发给 Static Assets 绑定。
// 静态资源（根 index.html + /doc/*）由 Cloudflare 直接托管，
// SPA 路由回退由 wrangler.worker.toml 的 not_found_handling 处理。
// 服务端 API 在另一个 Worker，这里只负责交付前端静态文件。
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request)
  },
}
