import type { DefaultTheme } from 'vitepress'

/**
 * 顶部导航栏
 *
 * 顶部保持简洁，通过下拉菜单收纳二级入口；
 * 新增大栏目时在这里补充对应条目。
 */
const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  {
    text: '指南',
    activeMatch: '/freshman/|/campus/',
    items: [
      { text: '新生指南', link: '/freshman/' },
      { text: '校园生活', link: '/campus/' },
    ],
  },
  {
    text: '学习',
    activeMatch: '/study/|/courses/|/cs/',
    items: [
      { text: '学习指南', link: '/study/' },
      { text: '课程指南', link: '/courses/' },
      { text: '计算机方向', link: '/cs/' },
    ],
  },
  { text: '竞赛', link: '/competition/', activeMatch: '/competition/' },
  {
    text: '就业',
    activeMatch: '/career/|/postgraduate/',
    items: [
      { text: '实习就业', link: '/career/' },
      { text: '升学', link: '/postgraduate/' },
    ],
  },
  { text: '经验', link: '/experience/', activeMatch: '/experience/' },
  {
    text: '关于',
    activeMatch: '/contribute/|/about/',
    items: [
      { text: '参与贡献', link: '/contribute/' },
      { text: '关于项目', link: '/about/' },
    ],
  },
]

export default nav
