name: 内容错误反馈
about: 发现页面内容存在错误、过时或表述不当
title: '[内容错误] '
labels: [content]
body:
  - type: markdown
    attributes:
      value: |
        感谢反馈！请尽量提供可靠的信息来源，便于维护者核对。
  - type: input
    id: page
    attributes:
      label: 涉及页面
      description: 请粘贴出错的页面地址（URL），或说明是哪个栏目、哪篇文章。
      placeholder: https://survive.dnui.cc/freshman/
    validations:
      required: true
  - type: textarea
    id: problem
    attributes:
      label: 错误内容
      description: 哪里写错了？建议直接引用原文。
    validations:
      required: true
  - type: textarea
    id: correct
    attributes:
      label: 正确的信息与来源
      description: 请提供你认为正确的信息，并注明来源（学校官网、通知、个人核实经历等）。
    validations:
      required: false
