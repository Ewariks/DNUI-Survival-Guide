---
title: 参与贡献
description: 如何向 DNUI Survival Guide 贡献内容：最简单的网页编辑方式、本地开发与 Pull Request 流程。
---

# 参与贡献

本站由学生共同维护。**你只需要会写 Markdown，就可以参与贡献**，不需要了解 VitePress、部署或服务器相关的知识。

## 最简单的贡献方式

直接在 GitHub 网页上编辑，全程不需要安装任何东西：

1. 在本站任意内容页底部，点击「在 GitHub 上编辑此页」（或直接进入 [GitHub 仓库](https://github.com/LuBanQAQ/DNUI-Survival-Guide) 找到对应的 `.md` 文件）。
2. 点击文件右上角的铅笔图标进入编辑模式，GitHub 会自动为你创建 Fork。
3. 使用 Markdown 修改内容。
4. 填写 Commit 信息（如 `docs: 更新生指南`），保存到你自己的 Fork。
5. 点击「Open pull request」，按模板简单填写后提交 Pull Request。
6. 等待 CI 检查与维护者 Review，通过后 Merge，网站自动更新。

```text
Fork → 修改 Markdown → Pull Request → Review → Merge → 网站自动更新
```

## 本地开发（可选）

如果需要预览效果或频繁修改，建议在本地运行（需要 [Node.js](https://nodejs.org/) 22+）：

```bash
git clone https://github.com/<你的用户名>/DNUI-Survival-Guide.git
cd DNUI-Survival-Guide

npm install

npm run docs:dev
```

然后打开 `http://localhost:5173` 实时预览。提交 Pull Request 前建议确认本地构建通过：

```bash
npm run docs:build
```

## 内容放哪里

站点内容按一级栏目存放在仓库根目录的同名文件夹中：

| 栏目 | 目录 | 适合的内容 |
| --- | --- | --- |
| 新生指南 | `freshman/` | 入学、选课、新生 FAQ |
| 校园生活 | `campus/` | 食宿、出行、周边 |
| 学习指南 | `study/` | 学习方法、绩点、资源 |
| 课程指南 | `courses/` | 课程学习经验 |
| 计算机方向 | `cs/` | 编程、技术路线、项目 |
| 竞赛 | `competition/` | 各类竞赛经验 |
| 实习就业 | `career/` | 实习、校招、面试 |
| 升学 | `postgraduate/` | 考研、保研、留学 |
| 经验分享 | `experience/` | 个人经验与规划 |

新增一篇文章只需要两步：

1. 在对应栏目目录下新建 `xxx.md`（文件名使用小写英文、数字和连字符）。
2. 在 `.vitepress/config/sidebar.ts` 中把文章加入对应栏目的侧边栏。

完整的贡献规范（分支命名、Commit 规范、内容要求等）见仓库中的 [CONTRIBUTING.md](https://github.com/LuBanQAQ/DNUI-Survival-Guide/blob/main/CONTRIBUTING.md)。文章的格式要求（Frontmatter、标题层级、链接、图片等）见[内容编写指南](/contribute/writing)。

## 内容规范速览

- 不编造未经确认的学校政策、收费、宿舍、考试规则、就业数据等信息。
- 不发布个人敏感信息（联系方式、成绩单等）。
- 不包含攻击性、歧视性内容，不对教师和课程进行打分。
- 经验类内容代表作者个人视角，请明确说明。
