import type { DefaultTheme } from 'vitepress'

/**
 * 侧边栏配置
 *
 * 当前阶段每个栏目只挂一个入口页面。
 * 新增文章时，在对应栏目的 items 里追加一行即可，例如：
 *
 *   { text: '报到流程', link: '/freshman/checkin' }
 *
 * link 对应栏目目录下的 Markdown 文件（不含扩展名）。
 */
const sidebar: DefaultTheme.Sidebar = {
  '/freshman/': [
    {
      text: '新生指南',
      items: [
        { text: '概览', link: '/freshman/' },
        // 新增文章示例：{ text: '报到流程', link: '/freshman/checkin' },
      ],
    },
  ],
  '/campus/': [
    {
      text: '校园生活',
      items: [
        { text: '概览', link: '/campus/' },
        { text: '校园网络与信息化服务', link: '/campus/it-services' },
      ],
    },
  ],
  '/study/': [
    {
      text: '学习指南',
      items: [{ text: '概览', link: '/study/' }],
    },
  ],
  '/courses/': [
    {
      text: '课程指南',
      items: [{ text: '概览', link: '/courses/' }],
    },
  ],
  '/cs/': [
    {
      text: '计算机方向',
      items: [{ text: '概览', link: '/cs/' }],
    },
  ],
  '/competition/': [
    {
      text: '竞赛',
      items: [{ text: '概览', link: '/competition/' }],
    },
  ],
  '/career/': [
    {
      text: '实习就业',
      items: [{ text: '概览', link: '/career/' }],
    },
  ],
  '/postgraduate/': [
    {
      text: '升学',
      items: [{ text: '概览', link: '/postgraduate/' }],
    },
  ],
  '/experience/': [
    {
      text: '经验分享',
      items: [{ text: '概览', link: '/experience/' }],
    },
  ],
  '/contribute/': [
    {
      text: '参与贡献',
      items: [
        { text: '贡献指南', link: '/contribute/' },
        { text: '内容编写指南', link: '/contribute/writing' },
      ],
    },
  ],
  '/about/': [
    {
      text: '关于项目',
      items: [{ text: '项目介绍', link: '/about/' }],
    },
  ],
}

export default sidebar
