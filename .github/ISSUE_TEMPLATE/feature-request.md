name: 功能建议
about: 对网站功能、使用体验的改进建议
title: '[功能建议] '
labels: [enhancement]
body:
  - type: textarea
    id: problem
    attributes:
      label: 想解决的问题
      description: 这个建议是为了解决什么问题？
    validations:
      required: true
  - type: textarea
    id: solution
    attributes:
      label: 期望的方案
      description: 你希望网站变成什么样？
    validations:
      required: true
  - type: textarea
    id: alternatives
    attributes:
      label: 备选方案
      description: 你考虑过的其他做法（可选）。
    validations:
      required: false
