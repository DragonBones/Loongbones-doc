import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const en = defineConfig({
  lang: 'en-US',
  description: 'World-renowned 2D skeletal animation solution',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/tutorial/': { base: '/tutorial/', items: sidebarTutorial() },
      '/editor/': { base: '/editor/', items: sidebarEditor() },
    },

    editLink: {
      pattern: 'https://github.com/dragonbones/loongbones-doc/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2024-${new Date().getFullYear()} Beijing Nezhayuhu Technology Co.`
    },

    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },

    outline: {
      label: 'Navigation'
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: 'Language',
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Switch to light mode',
    darkModeSwitchTitle: 'Switch to dark mode',
    skipToContentLabel: 'Skip to content'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Getting Started',
      link: '/tutorial/index',
      activeMatch: '/tutorial/'
    },
    {
      text: 'Editor Documentation',
      link: '/editor/index',
      activeMatch: '/editor/'
    },
    {
      text: pkg.version,
      items: [
        // {
        //   text: 'Changelog',
        //   link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
        // },
        // {
        //   text: 'Contribute',
        //   link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
        // }
      ]
    }
  ]
}

function sidebarTutorial(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Beginner Guide',
      collapsed: false,
      items: [
        { text: 'What is LoongBones?', link: 'loongbones' },
        { text: 'What is Skeletal Animation', link: 'boneAnimation' },
        { text: 'What is the Editor', link: 'editor' },
        { text: 'What is Runtime', link: 'runtime' }
      ]
    },
    {
      text: 'Registration and Login',
      collapsed: false,
      items: [
        { text: 'Sign Up', link: 'sign-up' },
        { text: 'Login', link: 'login' },
      ]
    },
    {
      text: 'Create and Publish Animations',
      collapsed: false,
      items: [
        { text: 'Create Your First Project', link: 'first-work' },
        { text: 'Create Bones and Slots', link: 'create-bone-slot' },
        { text: 'Create Your First Animation', link: 'create-animation' },
        { text: 'Preview and Export', link: 'preview-publish' },
      ]
    },
    { text: 'Learn More', base: '/editor/', link: 'index' }
  ]
}

function sidebarEditor(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Terminology',
      collapsed: false,
      items: [
        { text: 'LoongBones', link: 'loongbones' },
        { text: 'Skeletal Animation', link: 'bone-animation' },
        { text: 'Editor', link: 'editor' },
        { text: 'Runtime', link: 'runtime' },
        { text: 'Armature', link: 'armature' },
        { text: 'Bone', link: 'bone' },
        { text: 'Slot', link: 'slot' },
        { text: 'Attachment', link: 'attachment' },
        { text: 'Image', link: 'image' },
        { text: 'BoundingBox', link: 'bounding-box' },
        { text: 'SubArmature', link: 'sub-armature' },
        { text: 'Mesh', link: 'mesh' },
        { text: 'LinkMesh', link: 'link-mesh' },
        { text: 'Free Form Deformation (FFD)', link: 'ffd' },
        { text: 'Inverse Kinematics (IK)', link: 'ik' },
        { text: 'Rigging', link: 'binding' },
        { text: 'Onion Skin', link: 'onion-layer' },
        { text: 'Timeline', link: 'timeline' },
        { text: 'Animation Curve', link: 'animation-curve' },
        { text: 'Atlas/Sprite Sheet', link: 'atlas' },
      ]
    },
    {
      text: 'Interface',
      collapsed: false,
      items: [
        { text: 'Overview', link: 'ui-all' },
        { text: 'Toolbar', link: 'ui-tool' },
        { text: 'Stage Area', link: 'ui-stage' },
        { text: 'Library Panel', link: 'ui-library' },
        { text: 'Outline Panel', link: 'ui-outline' },
        { text: 'Hierarchy Panel', link: 'ui-z-order' },
        { text: 'Properties Panel', link: 'ui-property' },
        { text: 'Dope Sheet', link: 'ui-dope-sheet' },
        { text: 'Animation Panel', link: 'ui-animation' },
        { text: 'Curve Panel', link: 'ui-curve' },
        { text: 'Import', link: 'ui-import' },
        { text: 'Export', link: 'ui-export' },
        { text: 'Preview', link: 'ui-preview' },
        { text: 'AI Assistant', link: 'ui-ai' },
      ]
    },
    {
      text: 'Creation',
      collapsed: false,
      items: [
        { text: 'Basic Operations', collapsed: false,
          items: [
            { text: 'Mouse Operations', link: 'act-base' },
            { text: 'Selection and Deselection', link: 'act-select' },
            { text: 'Stage Operations', link: 'act-stage' },
            { text: 'Cross Handles', link: 'act-handle' },
            { text: 'Keyboard Shortcuts', link: 'act-keyboard' }
          ]
        },
        { text: 'Armature Creation', collapsed: false,
          items: [
            { text: 'Create and Edit Bones', link: 'pose-bone' },
            { text: 'Create and Edit Slots', link: 'pose-slot' },
            { text: 'Create and Edit Images', link: 'pose-image' },
            { text: 'Create and Edit Bounding Boxes', link: 'pose-bounding-box' },
            { text: 'Create and Edit Meshes', link: 'pose-mesh' },
            { text: 'Create and Edit Shapes', link: 'pose-shape' },
            { text: 'Mesh Bone Binding', link: 'pose-rigging' },
            { text: 'Mesh Weight Adjustment', link: 'pose-weight' },
            { text: 'Create and Edit Linked Meshes', link: 'pose-link-mesh' },
            { text: 'Create and Edit SubArmatures', link: 'pose-sub-armature' },
            { text: 'Create and Edit IK Constraints', link: 'pose-ik' },
            { text: 'Create and Edit Transform Constraints', link: 'pose-transform-constrain' },
            { text: 'Create and Edit Path Constraints', link: 'pose-path-constrain' },
            { text: 'Create and Edit Physics Constraints', link: 'pose-physics' },
            { text: 'Create and Edit Masks', link: 'pose-mask' },
            { text: 'Create and Edit Mesh Deformers', link: 'pose-surface' },
            { text: 'Adjust Layer Order', link: 'pose-z-order' },
          ]
        },
        { text: 'Animation Creation', collapsed: false,
          items: [
            { text: 'Create a New Animation', link: 'anim-create' },
            { text: 'Bone Translation Animation', link: 'anim-translate' },
            { text: 'Bone Rotation Animation', link: 'anim-rotate' },
            { text: 'Bone Scale Animation', link: 'anim-scale' },
            { text: 'Animation Curves', link: 'anim-curve' },
            { text: 'Slot Color and Transparency Animation', link: 'anim-color' },
            { text: 'Slot Display Switching Animation', link: 'anim-index' },
            { text: 'Mesh Free Form Deformation Animation', link: 'anim-ffd' },
            { text: 'Z-Order Change Animation', link: 'anim-z-order' },
            { text: 'Mesh Deformer Animation', link: 'anim-surface' },
            { text: 'SubArmature Animation', link: 'anim-sub-armature' },
            { text: 'Path Animation', link: 'anim-path' },
            { text: 'Event Animation', link: 'anim-event' },
          ]
        },
      ]
    },
    {
      text: 'Import',
      collapsed: false,
      items: [
        { text: 'Import Images and Atlases to Library', link: 'import-image' },
        { text: 'Import PSD Files', link: 'import-psd' },
        { text: 'Import DragonBones Project Files', link: 'import-db-pro' },
        { text: 'Import DragonBones Data Files', link: 'import-db-data' },
        { text: 'Import Other Format Data Files', link: 'import-other' },
      ]
    },
    {
      text: 'Export',
      collapsed: false,
      items: [
        { text: 'Export DragonBones Data Files', link: 'export-db-data' },
        { text: 'Export Other Data Files', link: 'export-other-data' },
        { text: 'Export Images or Sprite Sheets', link: 'export-image' },
        { text: 'Atlas Configuration', link: 'export-atlas' },
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
