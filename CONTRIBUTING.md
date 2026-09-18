# 贡献指南

感谢你愿意为 DNUI Survival Guide 贡献内容！

本指南面向所有同学，**你不需要懂 VitePress、前端或部署**：90% 以上的贡献只需要会写 Markdown。

## 贡献前请了解

- 本站是非官方项目，内容需要可靠：不确定的信息请注明是个人经验或附上来源。
- 不要编造学校政策、收费、宿舍、考试、就业数据等未经确认的信息。
- 不发布个人敏感信息（手机号、身份证、成绩单等）。
- 不包含攻击性、歧视性内容；本站不收录教师、课程、企业评分类内容。
- 修改后请确认 `npm run docs:build` 能通过（纯文案小改动可跳过）。

## 方式一：网页直接编辑（最简单，推荐新手）

不需要安装任何软件：

1. 打开网站任意内容页，点击底部的「在 GitHub 上编辑此页」（或自己进入仓库找到对应 `.md` 文件）。
2. GitHub 会自动 Fork 仓库并进入编辑器。
3. 使用 Markdown 修改内容。
4. 填写 Commit 信息（如 `docs: 更新生指南`），点击「Propose changes」。
5. 点击「Create pull request」，按模板简单填写后提交。
6. 等待 CI 检查与维护者 Review，通过后 Merge，网站自动更新。

```text
打开 GitHub → 找到 Markdown → 点击 Edit → 修改 → 提交 Pull Request
```

## 方式二：本地开发

适合需要预览效果、新增文章或调整结构的贡献者。

### 1. Fork 并克隆

先在 GitHub 上点击 Fork，然后：

```bash
git clone https://github.com/<你的用户名>/DNUI-Survival-Guide.git
cd DNUI-Survival-Guide

npm install

npm run docs:dev
```

打开 `http://localhost:5173` 即可实时预览。

### 2. 创建分支

```bash
git checkout -b docs/add-something
```

分支命名建议：

```text
docs/xxx   内容新增或修改
feat/xxx   网站功能
fix/xxx    修复错误
```

### 3. 修改内容

- 内容都在仓库根目录的栏目文件夹中（`freshman/`、`campus/`、`study/` …）。
- 新增文章：在对应目录新建 `xxx.md`，并在 `.vitepress/config/sidebar.ts` 里登记到侧边栏。
- 文件名使用小写英文、数字和连字符（如 `dorm-life.md`）。
- 每篇文章建议在开头写 frontmatter：`title` 与 `description`。
- 详细的格式规范见站内《内容编写指南》：[contribute/writing.md](contribute/writing.md)。

### 4. Commit

采用简单的 Conventional Commits：

```text
docs: add freshman guide        # 新增/修改内容
fix: correct sidebar link       # 修复错误
feat: add local search          # 新功能
style: adjust brand color       # 样式调整
refactor: simplify config       # 重构
chore: update dependencies      # 构建、工具等
```

### 5. 提交 Pull Request

```bash
git add .
git commit -m "docs: add xxx guide"
git push origin docs/add-something
```

然后到 GitHub 上对你 Fork 的仓库点击「Contribute → Open pull request」，向主仓库的 `main` 分支提交 PR：

```text
Fork → 新建 Branch → 提交修改 → Pull Request → Review → Merge
```

提交后 GitHub Actions 会自动执行 Build Check；如果显示红色 ❌，点进详情查看报错并修复。

## 常见问题

**Q：我不小心把页面改坏了怎么办？**
PR 阶段的任何修改都不会影响线上网站，只有 Merge 之后才会部署，放心修改。

**Q：构建失败提示 dead link？**
说明文章里有指向不存在页面的链接。内部链接请使用 `/栏目/文件名` 的形式，并确认目标文件存在。

**Q：图片怎么放？**
可以放在 `public/` 目录（通过 `/文件名` 引用），或放在文章附近用相对路径引用。

**Q：想新增一个大栏目？**
先开 Issue 讨论，达成一致后再动手，避免目录结构频繁变动。
