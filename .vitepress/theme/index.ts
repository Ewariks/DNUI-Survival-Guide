import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'

import AllContributors from './AllContributors.vue'
import Contributors from './Contributors.vue'

import './custom.css'

/**
 * 自定义主题：基于 VitePress 默认主题扩展。
 *
 * - 每个内容页底部显示「本文贡献者」（数据由 scripts/contributors.mjs 生成）；
 * - <AllContributors /> 组件可在 Markdown 中使用（见 acknowledgments.md）。
 */
export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'doc-after': () => h(Contributors),
    }),
  enhanceApp({ app }) {
    app.component('AllContributors', AllContributors)
  },
} satisfies Theme
