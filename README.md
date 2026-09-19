# DNUI Survival Guide · 大连东软信息学院生存指南

> 写给每一个不想稀里糊涂度过大学四年的 DNUIer。
>
> 本项目是由学生共同维护的非官方开源项目，与大连东软信息学院官方无隶属关系。

**在线访问：<https://survive.dnui.cc>**

**GitHub 仓库：<https://github.com/LuBanQAQ/DNUI-Survival-Guide>**

[![Build Check](https://github.com/LuBanQAQ/DNUI-Survival-Guide/actions/workflows/build.yml/badge.svg)](https://github.com/LuBanQAQ/DNUI-Survival-Guide/actions/workflows/build.yml)

## 项目介绍

DNUI Survival Guide 是一个由大连东软信息学院学生共同维护的非官方生存指南，长期目标是成为：

- 校园 Wiki 与新生指南
- 学习经验库与专业成长指南
- 竞赛经验库
- 实习就业与升学指南
- 学长学姐经验传承平台

任何会 Markdown 的同学都可以通过 Pull Request 参与维护，不需要接触服务器和部署。

## 当前状态

- [x] 第一阶段：站点框架（栏目结构、协作流程、CI 构建检查、自动部署配置）
- [ ] 内容建设：持续推进中，欢迎贡献

## 协作流程

```text
Fork 仓库
   ↓
修改 Markdown
   ↓
提交 Pull Request
   ↓
GitHub Actions Build Check
   ↓
维护者 Review
   ↓
Merge 到 main
   ↓
Cloudflare Pages 自动构建部署
   ↓
survive.dnui.cc 更新
```

## 技术栈

- [VitePress](https://vitepress.dev/) + Vue 3 + TypeScript
- 纯静态网站：无后端、无数据库、无服务器运维
- GitHub（协作）+ GitHub Actions（构建检查）
- Cloudflare Pages（自动构建与部署）

## 本地运行

要求 [Node.js](https://nodejs.org/) 22+：

```bash
git clone https://github.com/<你的用户名>/DNUI-Survival-Guide.git
cd DNUI-Survival-Guide

npm install

npm run docs:dev
```

打开 `http://localhost:5173` 即可实时预览。其他命令：

```bash
npm run docs:build    # 生产构建（输出到 .vitepress/dist）
npm run docs:preview  # 本地预览构建产物
```

## 项目结构

```text
DNUI-Survival-Guide/
├── .github/                 # PR / Issue 模板与 CI workflow
├── .vitepress/
│   ├── config.mts           # VitePress 主配置（SEO、搜索、Edit Link）
│   ├── config/
│   │   ├── nav.ts           # 顶部导航
│   │   └── sidebar.ts       # 侧边栏
│   └── theme/               # 主题扩展与自定义样式
├── public/                  # 静态资源（logo、favicon）
├── freshman/ … experience/  # 一级栏目（每个栏目一个目录）
├── contribute/              # 参与贡献指南（站内页面）
├── about/                   # 关于项目（站内页面）
├── index.md                 # 站点首页
├── README.md
├── CONTRIBUTING.md          # 贡献指南
└── LICENSE
```

内容以 Markdown 维护：在栏目目录下新增 `xxx.md`，并在 `.vitepress/config/sidebar.ts` 中登记，即可发布一篇新文章。

## 如何贡献

最简单的方式（不需要本地环境）：

1. 打开网站任意内容页，点击底部「在 GitHub 上编辑此页」；
2. 修改 Markdown，提交到你的 Fork；
3. 向主仓库的 `main` 分支提交 Pull Request，等待 Review 与 Merge。

详见 [CONTRIBUTING.md](CONTRIBUTING.md)，格式规范见站内[内容编写指南](https://survive.dnui.cc/contribute/writing)。

## 致谢

本指南由同学们共同贡献。所有贡献者会依据 Git 提交记录**自动**出现在[致谢页](https://survive.dnui.cc/acknowledgments)及每篇文章底部——用 GitHub 关联邮箱提交即可自动识别头像，无需登记。

感谢每一位分享经验的 DNUIer 🎉

## 部署方式（维护者）

网站部署在 Cloudflare Pages，代码仓库中不包含任何服务器配置：

| 配置项 | 值 |
| --- | --- |
| Production Branch | `main` |
| Build Command | `npm run docs:build` |
| Build Output Directory | `.vitepress/dist` |

- Push 到 `main`（含 PR Merge）自动触发生产部署；
- Pull Request 会自动生成 Preview Deployment，供 Merge 前预览实际效果；
- 建议在 Cloudflare Pages 环境变量中设置 `NODE_VERSION=22`（仓库已附带 `.nvmrc`）。

### 建议的 main 分支保护（GitHub → Settings → Branches）

为 `main` 分支开启：

- Require a pull request before merging
- Require status checks to pass：勾选 CI 中的 `VitePress Build` 检查项

原则：普通贡献不直接 Push 到 `main`。

## License

[MIT License](LICENSE) © DNUI Survival Guide Contributors

## 免责声明

DNUI Survival Guide 是由学生维护的非官方项目，与大连东软信息学院官方无隶属关系。站内内容由学生贡献者整理，仅供参考，不代表学校立场。如内容涉及侵权或失实，欢迎通过 [Issue](https://github.com/LuBanQAQ/DNUI-Survival-Guide/issues) 指正。
