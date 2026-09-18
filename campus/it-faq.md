---
title: 信息化服务常见问题
description: DNUI 信息化服务的常见问题处理：教务系统与学习平台登录异常的原因与解决方法，以及访客邀请、党费缴纳与校友卡开通的入口。
---

# 信息化服务常见问题

[校园网络与信息化服务](/campus/it-services) 讲的是**怎么把各项服务开通**；这一页讲**办事和排障**——出问题走哪个入口、找谁。

内容整理自学校网络与信息中心维护的 [DNUI 知识库](https://dnuikb.neusoft.edu.cn/)，只做摘要和导航，完整图文步骤请以原文为准。

## 教务系统、学习平台登录异常

如果你访问**教务网站、智慧教育平台**时登录异常，多半不是账号问题，而是浏览器开启了 **HSTS**（HTTP Strict Transport Security）。

**怎么判断**：访问教务系统时，浏览器地址栏出现**锁标志**，就说明 HSTS 生效了——浏览器会强制把 HTTP 自动跳转到 HTTPS，导致网站部分功能无法正常访问。

**要处理的域名**（三个都要）：

```text
newjw.neusoft.edu.cn
ca.neusoft.edu.cn
study1230.neuedu.com
```

**各浏览器的处理方法**：

| 浏览器 | 操作 |
| --- | --- |
| **Edge** | 地址栏输入 `edge://net-internals/#hsts`，在 `Delete domain security policies` 里输入域名，点 `Delete` |
| **Chrome** | 地址栏输入 `chrome://net-internals/#hsts`，其余同上 |
| **Firefox** | 默认无需设置：清空历史记录和缓存，并在设置里搜索 `https`，把 HTTPS-Only 模式设为「不启用」 |
| **Safari** | 完全关闭 Safari，删除 `~/Library/Cookies/HSTS.plist` 后重新打开（极少数情况需重启系统） |

设置完成后，**用 `http://域名` 的方式访问**（注意是 http，不是 https）。

> [!TIP]
> 这是新生最容易踩的坑之一：刚入学发现「教务系统登不上」，容易以为是账号没开通，其实可能只是浏览器的问题。先按上面的步骤试一次，再去问人。

## 访客邀请

家人朋友要来校，**由校内学生发起邀请**，入口是官方的[访客邀请](https://dnuikb.neusoft.edu.cn/archives/fang-ke-yao-qing)。

访客那一侧的操作（自己注册账号、预约入校）见[访客账号注册与入校预约说明](https://dnuikb.neusoft.edu.cn/archives/dnuifang-ke-zhang-hao-zhu-ce-ru-xiao-yu-yue-cao-zuo-shuo-ming)——**这是两个不同的入口，别搞反**。

## 缴纳党费

党员学生缴党费走的是**财务缴费**入口，和寝室缴费不是同一条路：

```text
服务号「DNUI综合服务平台」→ 校园服务 → 财务缴费 → 登录 → 缴费账单
```

## 校友卡开通

快毕业或已经毕业的同学，可以按官方的[校友卡开通](https://dnuikb.neusoft.edu.cn/archives/xiao-you-qia-kai-tong)流程办理。

## 参考来源

- [DNUI 知识库](https://dnuikb.neusoft.edu.cn/)（分类：[账号服务](https://dnuikb.neusoft.edu.cn/categories/zhang-hao-fu-wu)、[通行服务](https://dnuikb.neusoft.edu.cn/categories/ru-xiao-fu-wu)、[缴费服务](https://dnuikb.neusoft.edu.cn/categories/jiao-fei-fu-wu)、[校园网](https://dnuikb.neusoft.edu.cn/categories/xiao-yuan-wang)）
- [关闭部分网站 HSTS 功能](https://dnuikb.neusoft.edu.cn/archives/e455fca1-68cf-4394-8ef7-0c977fc50ffe)（登录异常的原因、三个域名与各浏览器处理方法）
- [访客邀请](https://dnuikb.neusoft.edu.cn/archives/fang-ke-yao-qing) · [缴纳党费](https://dnuikb.neusoft.edu.cn/archives/jiao-na-dang-fei) · [校友卡开通](https://dnuikb.neusoft.edu.cn/archives/xiao-you-qia-kai-tong)

> [!WARNING]
> 浏览器版本与系统入口都可能调整，发现本页信息过时，欢迎[参与贡献](/contribute/)更新；实际操作请以 DNUI 知识库原文为准。
