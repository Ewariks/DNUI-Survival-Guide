---
title: 计算机学习常用网站
description: 走技术方向常用的一批网站导航：刷题与算法竞赛、查文档、计算机基础与自学路线、工具与协作，以及硬件与嵌入式方向。
---

# 计算机学习常用网站

> 这是按用途整理的一份常用网站清单，**全部是外部站点，与本站无隶属关系**，内容以各自官网为准。选择上偏个人习惯，不追求大而全。

## 刷题与算法竞赛

| 网站 | 说明 |
| --- | --- |
| [洛谷](https://www.luogu.com.cn) | 中文题面，题单和题解体系完整，入门最省事 |
| [Codeforces](https://codeforces.com) | 英文题面，比赛频繁，有 rating 体系，算法竞赛的主战场 |
| [AtCoder](https://atcoder.jp) | 日本赛站，题目质量高，比赛时间对国内相对友好 |
| [牛客](https://ac.nowcoder.com) | 中文竞赛，同时有大量校招笔试真题 |
| [拼题 A（PTA）](https://pintia.cn) | 天梯赛的评测平台，也有成套题目集可练 |
| [LeetCode 中国](https://leetcode.cn) | 面向面试的算法题，题目按标签和公司分类 |
| [Virtual Judge](https://vjudge.net) | 把各个 OJ 的题聚在一起提交，不必注册一堆账号 |

## 查文档

写代码时最常回查的几份文档：

| 网站 | 说明 |
| --- | --- |
| [cppreference 中文版](https://zh.cppreference.com) | C / C++ 语言与标准库的权威参考，查 STL 首选 |
| [Python 官方中文文档](https://docs.python.org/zh-cn/3/) | 官方文档有完整中文版，比二手教程可靠 |
| [MDN](https://developer.mozilla.org/zh-CN/) | Web 前端（HTML / CSS / JavaScript）最权威的中文文档 |
| [DevDocs](https://devdocs.io) | 把几百种技术文档聚合在一个界面里，支持离线使用 |

## 计算机基础与自学路线

| 网站 | 说明 |
| --- | --- |
| [OI Wiki](https://oi-wiki.org) | 算法竞赛知识体系百科，适合当工具书查 |
| [Hello 算法](https://www.hello-algo.com) | 数据结构与算法图解教程，有动画演示，开源免费 |
| [CS 自学指南](https://csdiy.wiki) | 按课程整理的自学路线，把国内外公开课串成体系 |
| [MIT《计算机教育中缺失的一课》中文版](https://missing-semester-cn.github.io) | 讲 shell、Git、调试、脚本这些「学校不教但天天要用」的东西，强烈建议早看 |

> [!TIP]
> 如果只从这一页挑一个先看，选《**计算机教育中缺失的一课**》。它不教算法，教的是命令行、编辑器、版本控制这些你每天都在用、但没人系统讲过的工具——投入产出比最高。

## 开发环境与下载

装环境这一步最容易卡住，下面这几个是绕不开的：

| 网站 | 说明 |
| --- | --- |
| [清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn) | 国内镜像，下载 Linux 发行版、Python 包和各类开发工具都快很多 |
| [MinGW-w64](https://www.mingw-w64.org) | Windows 上的 GCC 工具链（gcc / g++），配 VS Code 写 C/C++ 常用 |
| [MSYS2](https://www.msys2.org) | 用 pacman 包管理器装 MinGW-w64 工具链，比手动配置省事 |
| [WinLibs](https://winlibs.com) | 免安装的 MinGW-w64 整合包，解压即用 |
| [Visual Studio Code 下载页](https://code.visualstudio.com/Download) | 轻量编辑器，装扩展后可以当 C/C++、Python 的 IDE |
| [Codex](https://github.com/openai/codex) | OpenAI 的编程命令行工具（一般用 `npm install -g @openai/codex` 安装） |
| [DSH Desktop](https://www.dshdesktop.cn) | DeepSeek Harness 桌面版，本站就是用它写出来的 |

> [!TIP]
> **pip 装包一直失败的话，先换源。** 国内直连 pypi.org 经常超时，换成清华源通常立刻就好了：
>
> ```bash
> pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
> ```
>
> 其他包管理器（conda、npm、apt 等）的换源方法见[镜像站帮助页](https://mirrors.tuna.tsinghua.edu.cn/help/pypi/)。

## 工具与协作

| 网站 | 说明 |
| --- | --- |
| [GitHub](https://github.com) | 代码托管与开源社区。**建议尽早注册**，交作业、做项目、参与开源都会用到 |
| [Pro Git 中文版](https://git-scm.com/book/zh/v2) | Git 官方书的官方中文翻译，完整且免费 |
| [Learn Git Branching](https://learngitbranching.js.org/?locale=zh_CN) | 用可视化闯关的方式练 Git 分支操作，比看文档直观 |
| [Compiler Explorer](https://godbolt.org) | 在线查看 C / C++ 编译后的汇编，理解代码究竟变成了什么 |
| [regex101](https://regex101.com) | 在线调试正则表达式，逐段解释匹配过程 |
| [Stack Overflow](https://stackoverflow.com) | 英文技术问答。**把报错信息直接粘进去搜**，往往能搜到答案 |

## 怎么提问

在论坛、群里问技术问题之前，建议先读这一篇：

- [《提问的智慧》中文版](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)：Eric S. Raymond 的名文，讲清楚怎么描述问题、给足信息，才能真的拿到答案；
- [原文（英文）](http://www.catb.org/~esr/faqs/smart-questions.html)：作者官网上的原版。

**大多数人问不出答案，不是因为没人愿意帮，而是因为问题里缺少别人判断所需的信息**——报错原文、你的环境、你已经试过什么。把这三点写清楚，得到回复的概率会高很多。

## 视频与公开课

- [哔哩哔哩](https://www.bilibili.com)：大学阶段的很多课程（数学、编程都有）能找到成套的免费讲解；
- [中国大学 MOOC](https://www.icourse163.org)：国内高校的慕课平台，不少是完整课程。

## 硬件与嵌入式方向

如果你走的是电子与嵌入式方向（见[方向选择：电子与嵌入式](/experience/direction)），这几个站会用得比较多：

| 网站 | 说明 |
| --- | --- |
| [立创 EDA](https://lceda.cn) | 在线画原理图与 PCB，免费，适合课设和小项目 |
| [立创商城](https://www.szlcsc.com) | 查元件价格、封装与替代料 |
| [ST 官网](https://www.st.com) | STM32 的数据手册、参考手册与官方工具 |
| [TI 官网](https://www.ti.com) | 模拟器件与电源芯片资料齐全 |
| [Arduino](https://www.arduino.cc) | 入门嵌入式最快的路径，库与资料生态大 |
| [微雪 Wiki](https://www.waveshare.net/wiki) | 各类模块的中文接线说明与例程 |
| [电子发烧友](https://www.elecfans.com) | 中文电子论坛，查模块踩坑记录 |

## 校内系统不在这里

教务系统、选课系统、智慧教育平台、图书馆、学生邮箱等校内入口，统一整理在 [DNUI 常用网站导航](/campus/website-navigation)，本页不重复。

笔记软件、AI 工具的使用建议等，见[学习工具与资源](/study/tools)。

> [!NOTE]
> 上述站点均为第三方服务，本站不对其内容与可用性负责。部分国外站点（Codeforces、GitHub、Stack Overflow 等）在校园网环境下访问可能不稳定。
