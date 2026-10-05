<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { useData } from 'vitepress'

// 根据用户当前语言设置默认明暗主题：中文（zh-Hans）默认浅色、英文（en-US）默认深色。
// 仅在用户尚未手动选择过主题（localStorage 中无 'vitepress-theme-appearance'）时生效，
// 用户的手动选择会被记住且不被此逻辑覆盖。
const { lang } = useData()

function applyTheme(langValue: string) {
  let hasPreference = false
  try {
    hasPreference = !!localStorage.getItem('vitepress-theme-appearance')
  } catch (e) {
    // 隐私模式等场景下 localStorage 可能抛异常，安全降级为不干预
    return
  }
  if (hasPreference) return
  const isDark = langValue.startsWith('en')
  document.documentElement.classList.toggle('dark', isDark)
}

onMounted(() => applyTheme(lang.value))
watch(lang, (value) => applyTheme(value))
</script>

<template>
  <span style="display: none" aria-hidden="true"></span>
</template>
