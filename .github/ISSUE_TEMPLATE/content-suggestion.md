name: 新内容建议
about: 建议新增某个方向的文章或栏目内容
title: '[内容建议] '
labels: [content]
body:
  - type: textarea
    id: topic
    attributes:
      label: 想新增的内容
      description: 想看或想写哪方面的内容？例如「宿舍生活攻略」「考研时间线」。
    validations:
      required: true
  - type: input
    id: section
    attributes:
      label: 建议放置的栏目
      description: 新生指南 / 校园生活 / 学习指南 / 课程指南 / 计算机方向 / 竞赛 / 实习就业 / 升学 / 经验分享
      placeholder: 例如：校园生活
    validations:
      required: false
  - type: textarea
    id: material
    attributes:
      label: 你能提供的内容
      description: 相关经验、素材或大纲（如果愿意亲自贡献，也可以直接提交 PR）。
    validations:
      required: false
