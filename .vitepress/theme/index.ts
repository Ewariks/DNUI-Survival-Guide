import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

import './custom.css'

/**
 * 自定义主题：基于 VitePress 默认主题扩展。
 *
 * 未来如需全局注册自定义 Vue 组件，可以在这里添加：
 *
 * export default {
 *   extends: DefaultTheme,
 *   enhanceApp({ app }) {
 *     app.component('MyComponent', () => import('./components/MyComponent.vue'))
 *   },
 * } satisfies Theme
 */
export default {
  extends: DefaultTheme,
} satisfies Theme
