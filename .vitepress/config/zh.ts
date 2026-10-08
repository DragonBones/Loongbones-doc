import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'
import { prefix } from './target'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

// 中文在产物中的 URL 前缀：build:cn 时为 ''（占根路径），build:en 时为 '/zh'
const P = prefix('zh')

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '全球闻名2D骨骼动画解决方案',

  themeConfig: {
    nav: nav(),

    sidebar: {
      [`${P}/tutorial/`]: { base: `${P}/tutorial/`, items: sidebarTutorial() },
      [`${P}/editor/`]: { base: `${P}/editor/`, items: sidebarEditor() },
      [`${P}/loongscales/`]: { base: `${P}/loongscales/`, items: sidebarLoongscales() },
    },

    editLink: {
      pattern: 'https://github.com/dragonbones/dragonbones-doc/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 北京哪吒互娱科技有限公司`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '新手引导',
      link: `${P}/tutorial/index`,
      activeMatch: `${P}/tutorial/`
    },
    {
      text: '编辑器文档',
      link: `${P}/editor/index`,
      activeMatch: `${P}/editor/`
    },
    {
      text: '龙鳞 LoongScales',
      activeMatch: `${P}/loongscales/`,
      items: [
        { text: '产品简介', link: `${P}/loongscales/` },
        { text: '快速上手', link: `${P}/loongscales/quickstart` },
        { text: '工具箱', link: `${P}/loongscales/tools` },
        { text: '图层系统', link: `${P}/loongscales/layers` },
        { text: 'AI 助手', link: `${P}/loongscales/ai` },
        { text: '与龙骨协同', link: `${P}/loongscales/loongbones-sync` }
      ]
    },
    {
      text: pkg.version,
      items: [
        // {
        //   text: '更新日志',
        //   link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
        // },
        // {
        //   text: '参与贡献',
        //   link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
        // }
      ]
    }
  ]
}

function sidebarTutorial(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '新手引导',
      collapsed: false,
      items: [
        { text: '什么是龙骨？', link: 'loongbones' },
        { text: '什么是骨骼动画', link: 'boneAnimation' },
        { text: '什么是编辑器', link: 'editor' },
        { text: '什么是运行时', link: 'runtime' }
      ]
    },
    {
      text: '注册登录',
      collapsed: false,
      items: [
        { text: '注册', link: 'sign-up' },
        { text: '登录', link: 'login' },
      ]
    },
    {
      text: '制作和发布动画',
      collapsed: false,
      items: [
        { text: '创建你的第一个作品', link: 'first-work' },
        { text: '创建骨骼和插槽', link: 'create-bone-slot' },
        { text: '创建第一个动画', link: 'create-animation' },
        { text: '预览和导出', link: 'preview-publish' },
      ]
    },
    { text: '学习更多', base: `${P}/editor/`, link: 'index' }
  ]
}

function sidebarEditor(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '术语',
      collapsed: false,
      items: [
        { text: '龙骨', link: 'loongbones' },
        { text: '骨骼动画', link: 'bone-animation' },
        { text: '编辑器', link: 'editor' },
        { text: '运行时', link: 'runtime' },
        { text: '骨架Armature', link: 'armature' },
        { text: '骨骼Bone', link: 'bone' },
        { text: '插槽Slot', link: 'slot' },
        { text: '插槽资源', link: 'attachment' },
        { text: '图片Image', link: 'image' },
        { text: '边界框 BoundingBox', link: 'bounding-box' },
        { text: '子骨架 SubArmature', link: 'sub-armature' },
        { text: '网格 Mesh', link: 'mesh' },
        { text: '关联网格 LinkMesh', link: 'link-mesh' },
        { text: '自由变形FFD', link: 'ffd' },
        { text: '反向运动学 IK', link: 'ik' },
        { text: '骨骼绑定-蒙皮 rigging', link: 'binding' },
        { text: '洋葱皮', link: 'onion-layer' },
        { text: '时间轴', link: 'timeline' },
        { text: '动画曲线', link: 'animation-curve' },
        { text: '纹理集/精灵图/雪碧图', link: 'atlas' },
      ]
    },
    {
      text: '界面',
      collapsed: false,
      items: [
        { text: '概览', link: 'ui-all' },
        { text: '工具栏', link: 'ui-tool' },
        { text: '舞台编辑区', link: 'ui-stage' },
        { text: '库面板', link: 'ui-library' },
        { text: '大纲面板', link: 'ui-outline' },
        { text: '层级面板', link: 'ui-z-order' },
        { text: '属性面板', link: 'ui-property' },
        { text: '摄影表', link: 'ui-dope-sheet' },
        { text: '动画面板', link: 'ui-animation' },
        { text: '曲线面板', link: 'ui-curve' },
        { text: '导入', link: 'ui-import' },
        { text: '导出', link: 'ui-export' },
        { text: '预览', link: 'ui-preview' },
        { text: 'AI助手', link: 'ui-ai' },
      ]
    },
    {
      text: '创作',
      collapsed: false,
      items: [
        { text: '基本操作', collapsed: false,
          items: [
            { text: '鼠标的操作', link: 'act-base' },
            { text: '选择与取消', link: 'act-select' },
            { text: '舞台操作', link: 'act-stage' },
            { text: '十字手柄', link: 'act-handle' },
            { text: '快捷键', link: 'act-keyboard' }
          ]
        },
        { text: '骨架创作', collapsed: false,
          items: [
            { text: '创建和编辑骨骼', link: 'pose-bone' },
            { text: '创建和编辑插槽', link: 'pose-slot' },
            { text: '创建和编辑图片', link: 'pose-image' },
            { text: '创建和编辑边界框', link: 'pose-bounding-box' },
            { text: '创建和编辑网格', link: 'pose-mesh' },
            { text: '创建和编辑形状', link: 'pose-shape' },
            { text: '网格绑定骨骼', link: 'pose-rigging' },
            { text: '网格调整权重', link: 'pose-weight' },
            { text: '创建和编辑关联网格', link: 'pose-link-mesh' },
            { text: '创建和编辑子骨架', link: 'pose-sub-armature' },
            { text: '创建和编辑IK约束', link: 'pose-ik' },
            { text: '创建和编辑变换约束', link: 'pose-transform-constrain' },
            { text: '创建和编辑路径约束', link: 'pose-path-constrain' },
            { text: '创建和编辑物理约束', link: 'pose-physics' },
            { text: '创建和编辑遮罩', link: 'pose-mask' },
            { text: '创建和编辑网格变形器', link: 'pose-surface' },
            { text: '调整图层顺序', link: 'pose-z-order' },
          ]
        },
        { text: '动画创作', collapsed: false,
          items: [
            { text: '新建一个动画', link: 'anim-create' },
            { text: '骨骼位移动画', link: 'anim-translate' },
            { text: '骨骼旋转动画', link: 'anim-rotate' },
            { text: '骨骼缩放动画', link: 'anim-scale' },
            { text: '动画曲线', link: 'anim-curve' },
            { text: '插槽颜色和透明度动画', link: 'anim-color' },
            { text: '插槽资源切换动画', link: 'anim-index' },
            { text: '网格的自由变形动画', link: 'anim-ffd' },
            { text: '层级改变动画', link: 'anim-z-order' },
            { text: '网格变形器动画', link: 'anim-surface' },
            { text: '子骨架动画', link: 'anim-sub-armature' },
            { text: '路径动画', link: 'anim-path' },
            { text: '事件动画', link: 'anim-event' },
          ]
        },
      ]
    },
    {
      text: '导入',
      collapsed: false,
      items: [
        { text: '导入图片和图片集到素材库', link: 'import-image' },
        { text: '导入psd文件', link: 'import-psd' },
        { text: '导入龙骨工程文件', link: 'import-db-pro' },
        { text: '导入龙骨数据文件', link: 'import-db-data' },
        { text: '导入其他格式数据文件', link: 'import-other' },
      ]
    },
    {
      text: '导出',
      collapsed: false,
      items: [
        { text: '导出龙骨数据文件', link: 'export-db-data' },
        { text: '导出其他数据文件', link: 'export-other-data' },
        { text: '导出图片或者序列帧', link: 'export-image' },
        { text: '图片集的配置', link: 'export-atlas' },
      ]
    }
  ]
}

function sidebarLoongscales(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '入门',
      collapsed: false,
      items: [
        { text: '产品简介', link: 'index' },
        { text: '快速上手与界面布局', link: 'quickstart' },
        { text: '画布与视图', link: 'canvas' }
      ]
    },
    {
      text: '核心编辑',
      collapsed: false,
      items: [
        { text: '工具箱详解', link: 'tools' },
        { text: '图层系统', link: 'layers' },
        { text: '非破坏性编辑', link: 'adjustments' },
        { text: '选区与蒙版', link: 'selection' },
        { text: '文字与矢量', link: 'text-vector' }
      ]
    },
    {
      text: 'AI 与龙骨协同',
      collapsed: false,
      items: [
        { text: 'AI 智能助手', link: 'ai' },
        { text: '与龙骨动画协同', link: 'loongbones-sync' }
      ]
    },
    {
      text: '参考',
      collapsed: false,
      items: [
        { text: '文件交换：PSD 与本地保存', link: 'files' },
        { text: '撤销、重做与历史', link: 'history' },
        { text: '快捷键速查表', link: 'shortcuts' },
        { text: '常见问题 FAQ', link: 'faq' }
      ]
    }
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}
