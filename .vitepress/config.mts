import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { defineConfig } from 'vitepress'

import sidebar from './config/sidebar'

/** GitHub 仓库地址 */
const GITHUB_REPO = 'https://github.com/LuBanQAQ/DNUI-Survival-Guide'

/** 页面贡献者数据（由 scripts/contributors.mjs 生成） */
interface ContributorEntry {
  name: string
  email: string
  github?: string
}

let perFileCache: Record<string, ContributorEntry[]> | null = null

function loadContributors(): Record<string, ContributorEntry[]> {
  if (perFileCache) return perFileCache
  try {
    perFileCache = JSON.parse(
      readFileSync(
        resolve(process.cwd(), '.vitepress/contributors-data.json'),
        'utf-8',
      ),
    ).perFile
  } catch {
    perFileCache = {}
  }
  return perFileCache
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'DNUI Survival Guide',
  description:
    '大连东软信息学院非官方生存指南：新生指南、校园生活、学习经验、竞赛、实习就业与升学，由学生共同维护。',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    // Open Graph 基础配置
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'DNUI Survival Guide' }],
    [
      'meta',
      {
        property: 'og:title',
        content: 'DNUI Survival Guide | 大连东软信息学院生存指南',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: '写给每一个不想稀里糊涂度过大学四年的 DNUIer。',
      },
    ],
    ['meta', { property: 'og:url', content: 'https://survive.dnui.cc/' }],
    [
      'meta',
      { property: 'og:image', content: 'https://survive.dnui.cc/logo.png' },
    ],
    ['meta', { name: 'twitter:card', content: 'summary' }],
  ],

  // README / CONTRIBUTING / GitHub 模板不参与站点构建
  srcExclude: ['**/README.md', '**/CONTRIBUTING.md', '**/.github/**/*.md'],

  // 启用 LaTeX 数学公式（行内 $...$ 与块级 $$...$$）
  markdown: {
    math: true,
  },

  // 页面底部显示「最后更新」时间（取自 Git 提交记录）
  lastUpdated: {
    text: '最后更新',
  },

  // 为每个页面注入「本文贡献者」数据（渲染见 theme/Contributors.vue）
  transformPageData(pageData) {
    const contributors = loadContributors()[pageData.relativePath]
    if (contributors?.length) {
      pageData.frontmatter.contributors = contributors
    }
  },

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'DNUI Survival Guide',

    // 顶部导航保持极简（与 BYR Docs 一致）：
    // 所有栏目通过侧边栏组织，由首页「开始阅读」进入
    nav: [],

    sidebar,

    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    // 本地搜索：无后端、无数据库、无第三方服务依赖
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    // 「在 GitHub 上编辑此页」
    editLink: {
      pattern: `${GITHUB_REPO}/edit/main/:path`,
      text: '在 GitHub 上编辑此页',
    },

    socialLinks: [
      {
        icon: 'github',
        link: GITHUB_REPO,
      },
    ],

    footer: {
      message:
        '非官方社区项目，与大连东软信息学院官方无隶属关系 · 校徽版权归大连东软信息学院所有',
      copyright:
        'Copyright © 2025-present DNUI Survival Guide 贡献者 · MIT License',
    },
  },
})
