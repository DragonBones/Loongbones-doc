import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import LocaleAppearance from './LocaleAppearance.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(LocaleAppearance)
    })
  }
}
