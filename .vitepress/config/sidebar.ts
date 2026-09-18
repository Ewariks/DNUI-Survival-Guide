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
        { text: '选课与学分', link: '/freshman/course-selection' },
        { text: '转专业', link: '/freshman/major-transfer' },
        { text: '大一常见误区', link: '/freshman/pitfalls' },
      ],
    },
  ],
  '/campus/': [
    {
      text: '校园生活',
      items: [
        { text: '概览', link: '/campus/' },
        { text: '食堂与校内餐饮', link: '/campus/canteen' },
        { text: '出行与校园周边', link: '/campus/transport' },
        { text: '校内消费与门禁', link: '/campus/daily-services' },
        { text: '校园网络与信息化服务', link: '/campus/it-services' },
        { text: '信息化服务常见问题', link: '/campus/it-faq' },
        { text: 'DNUI 常用网站导航', link: '/campus/website-navigation' },
      ],
    },
  ],
  '/study/': [
    {
      text: '学习指南',
      items: [
        { text: '概览', link: '/study/' },
        { text: '绩点、考试与复习', link: '/study/gpa-and-exams' },
        { text: '英语课与四六级', link: '/study/english' },
        { text: '学习工具与资源', link: '/study/tools' },
        { text: '时间管理', link: '/study/time-management' },
        { text: '体育课、校园跑与体质测试', link: '/study/pe-and-fitness' },
      ],
    },
    {
      text: '评优与学分',
      items: [
        { text: '奖学金', link: '/study/scholarships' },
        { text: '学年评优', link: '/study/awards' },
        { text: '素质学分与竞赛积分', link: '/study/quality-credits' },
      ],
    },
  ],
  '/courses/': [
    {
      text: '课程指南',
      items: [
        { text: '概览', link: '/courses/' },
        { text: '微电子专业基础课体验', link: '/courses/microelectronics-basics' },
        { text: '作业、实验与课程设计', link: '/courses/assignments' },
        { text: '课程免听', link: '/courses/course-exemption' },
        { text: '高数与线代笔记（微电子专业）', link: '/courses/math-notes' },
      ],
    },
  ],
  '/cs/': [
    {
      text: '计算机方向',
      items: [
        { text: '概览', link: '/cs/' },
        { text: '从零开始学编程：一条自学路线', link: '/cs/learning-path' },
        { text: '计算机学习常用网站', link: '/cs/websites' },
      ],
    },
  ],
  '/competition/': [
    {
      text: '竞赛',
      items: [
        { text: '概览', link: '/competition/' },
        { text: '竞赛类别与课程加分', link: '/competition/levels' },
      ],
    },
    {
      text: '程序设计类',
      items: [
        { text: '蓝桥杯', link: '/competition/lanqiao' },
        { text: '团体程序设计天梯赛', link: '/competition/gplt' },
        { text: 'ACM-ICPC 与 CCPC', link: '/competition/icpc-ccpc' },
        { text: '传智杯', link: '/competition/chuangzhi' },
      ],
    },
    {
      text: '数学与建模',
      items: [
        { text: '全国大学生数学建模竞赛', link: '/competition/math-modeling' },
      ],
    },
    {
      text: '电子与集成电路',
      items: [{ text: '集创赛', link: '/competition/ic-design' }],
    },
    {
      text: '生涯规划',
      items: [
        { text: '全国大学生职业规划大赛', link: '/competition/career-planning' },
      ],
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
      items: [
        { text: '概览', link: '/postgraduate/' },
        { text: '升学这件事：当下的想法', link: '/postgraduate/thinking' },
      ],
    },
  ],
  '/experience/': [
    {
      text: '经验分享',
      items: [
        { text: '概览', link: '/experience/' },
        { text: '大学四年怎么走', link: '/experience/four-years' },
        { text: '社团值不值得参加', link: '/experience/clubs' },
        { text: '方向选择：电子与嵌入式', link: '/experience/direction' },
      ],
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
