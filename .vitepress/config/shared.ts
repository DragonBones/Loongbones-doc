import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'
import { localeAssets } from '../plugins/localeAssets'
import { isEnTarget, langOfSourcePath, localeUrl } from './target'

export const shared = defineConfig({
  base: '/doc/',
  title: '龙骨动画 | LoongBones',

  // 目标语言占根路径，另一种语言下沉到 /<lang>/。规则按顺序匹配、命中即停，
  // 所以更具体的 loongbones 规则必须排在通用的 '<lang>/:rest*' 之前。
  rewrites: isEnTarget
    ? {
        // 英文构建：英文占根路径（/doc/ 即英文首页），中文下沉到 /zh/
        // 龙骨：物理目录 <lang>/loongbones，URL 用 /tutorial、/editor
        'en/loongbones/:rest*': ':rest*',
        'zh/loongbones/:rest*': 'zh/:rest*',
        // 龙鳞：物理目录 <lang>/loongscales，URL 用 /loongscales、/zh/loongscales
        'en/loongscales/:rest*': 'loongscales/:rest*',
        'zh/loongscales/:rest*': 'zh/loongscales/:rest*',
        // 其余（首页、runtime 等）
        'en/:rest*': ':rest*'
      }
    : {
        // 中文构建：中文占根路径（/doc/ 即中文首页），英文仍在 /en/
        'zh/loongbones/:rest*': ':rest*',
        'en/loongbones/:rest*': 'en/:rest*',
        'zh/loongscales/:rest*': 'loongscales/:rest*',
        'en/loongscales/:rest*': 'en/loongscales/:rest*',
        'zh/:rest*': ':rest*'
      },

  // 首页 hero 按钮等链接写在 md frontmatter 里，无法随构建目标变化，这里统一按目标语言重写
  transformPageData(pageData: any) {
    const lang = langOfSourcePath(pageData?.filePath || '')
    const actions = pageData?.frontmatter?.hero?.actions
    if (Array.isArray(actions)) {
      for (const action of actions) {
        if (action && typeof action.link === 'string') {
          action.link = localeUrl(lang, action.link)
        }
      }
    }
  },
  // 默认主题：新访客默认浅色（中文站）；英文站由 head 脚本 + LocaleAppearance 组件按 lang 设为深色。
  // appearance 是顶层配置，VitePress 不支持按 locale 分别设置，故用初始值 light + 运行时补足深色。
  appearance: { initialValue: 'light' } as any,
  // 按语言分别输出，便于分别部署（产物均含双语，可在站内互切）
  outDir: isEnTarget ? '.vitepress/dist/en' : '.vitepress/dist/cn',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    config(md) {
      md.use(localeAssets, {
        root: process.cwd(),
        defaultLang: 'zh'
      })
    },
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  sitemap: {
    hostname: 'https://www.loongbones.com',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  head: [
    // 防首屏闪烁：在 VitePress 注入的 #check-dark-mode 之前，按页面语言补正默认深色（英文）。
    // 仅在用户未手动选择主题时生效，且不写入偏好键值。
    ['script', {}, `
      ;(() => {
        try {
          if (localStorage.getItem('vitepress-theme-appearance')) return;
          var lang = document.documentElement.lang || '';
          if (lang.indexOf('en') === 0) document.documentElement.classList.add('dark');
        } catch (e) {}
      })();
    `],
    ['script', {}, `
      console.log('Hello from head script');
      setTimeout(() => {  
        console.log('Hello from head script setTimeout');
        const titleElement = document.querySelector('.VPNavBarTitle');
        console.log(titleElement);
        if (titleElement) {
          titleElement.style.cursor = 'pointer';
          titleElement.addEventListener('click', function() {
            window.location.href = 'https://www.loongbones.com';
          });
        }
      }, 2000);
      document.addEventListener('DOMContentLoaded', function() {
        console.log('DOMContentLoaded');
        const titleElement = document.querySelector('.VPNavBarTitle');
        console.log(titleElement);
        if (titleElement) {
          titleElement.style.cursor = 'pointer';
          titleElement.addEventListener('click', function() {
            window.location.href = 'https://www.loongbones.com';
          });
        }
      });
    `],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo28.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: '龙骨动画 | LoongBones' }],
    ['meta', { property: 'og:site_name', content: 'LoongBones' }],
    ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://www.loongbones.com' }],
    // ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  ],

  themeConfig: {
    logo: { src: '/logo28.png', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DragonBones/' }
    ],

    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '8J64VVRP8K',
    //     apiKey: '52f578a92b88ad6abde815aae2b0ad7c',
    //     indexName: 'vitepress',
    //     locales: {
    //       ...zhSearch,
    //     }
    //   }
    // }
  }
})
