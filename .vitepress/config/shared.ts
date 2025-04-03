import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'

export const shared = defineConfig({
  base: '/doc/',
  title: '龙骨动画 | LoongBones',

  rewrites: {
    'en/:rest*': ':rest*'
  },
  // appearance: 'dark',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
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
    hostname: 'https://www.loongbones.app',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  head: [
    ['script', {}, `
      console.log('Hello from head script');
      setTimeout(() => {  
        console.log('Hello from head script setTimeout');
        const titleElement = document.querySelector('.VPNavBarTitle');
        console.log(titleElement);
        if (titleElement) {
          titleElement.style.cursor = 'pointer';
          titleElement.addEventListener('click', function() {
            window.location.href = 'https://www.loongbones.app';
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
            window.location.href = 'https://www.loongbones.app';
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
    ['meta', { property: 'og:url', content: 'https://www.loongbones.app' }],
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
