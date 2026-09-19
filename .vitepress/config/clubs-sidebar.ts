import type { DefaultTheme } from 'vitepress'

/**
 * 学生社团侧边栏分组
 *
 * 由社团名单生成：每个社团一个占位页面，按七大类别分组。
 * 新增社团：在 student-orgs/clubs/<类别>/ 下新建页面后，
 * 在对应类别的 items 里追加一行。
 */
export const clubGroups: DefaultTheme.SidebarItem[] = [
  {
    text: "学术科技类",
    collapsed: true,
    items: [
      {
        text: "ACM编程爱好者社",
        link: "/student-orgs/clubs/tech/acm-bian-cheng-ai-hao-zhe-she"
      },
      {
        text: "安云网络安全社",
        link: "/student-orgs/clubs/tech/an-yun-wang-luo-an-quan-she"
      },
      {
        text: "创意游戏设计与开发社",
        link: "/student-orgs/clubs/tech/chuang-yi-you-xi-she-ji-yu-kai-fa-she"
      },
      {
        text: "大数据分析社",
        link: "/student-orgs/clubs/tech/da-shu-ju-fen-xi-she"
      },
      {
        text: "电子商务社",
        link: "/student-orgs/clubs/tech/dian-zi-shang-wu-she"
      },
      {
        text: "东软电子DIY社",
        link: "/student-orgs/clubs/tech/dong-ruan-dian-zi-diy-she"
      },
      {
        text: "东软网络技术社",
        link: "/student-orgs/clubs/tech/dong-ruan-wang-luo-ji-shu-she"
      },
      {
        text: "供应链协会",
        link: "/student-orgs/clubs/tech/gong-ying-lian-xie-hui"
      },
      {
        text: "机器人俱乐部",
        link: "/student-orgs/clubs/tech/ji-qi-ren-ju-le-bu"
      },
      {
        text: "极限编程社",
        link: "/student-orgs/clubs/tech/ji-xian-bian-cheng-she"
      },
      {
        text: "集成电路社",
        link: "/student-orgs/clubs/tech/ji-cheng-dian-lu-she"
      },
      {
        text: "交互技术制作社",
        link: "/student-orgs/clubs/tech/jiao-hu-ji-shu-zhi-zuo-she"
      },
      {
        text: "人工智能产品开发社",
        link: "/student-orgs/clubs/tech/ren-gong-zhi-neng-chan-pin-kai-fa-she"
      },
      {
        text: "人工智能社",
        link: "/student-orgs/clubs/tech/ren-gong-zhi-neng-she"
      },
      {
        text: "人力资源管理社",
        link: "/student-orgs/clubs/tech/ren-li-zi-yuan-guan-li-she"
      },
      {
        text: "数据科学社",
        link: "/student-orgs/clubs/tech/shu-ju-ke-xue-she"
      },
      {
        text: "数学Club",
        link: "/student-orgs/clubs/tech/shu-xue-club"
      },
      {
        text: "投资与理财协会",
        link: "/student-orgs/clubs/tech/tou-zi-yu-li-cai-xie-hui"
      },
      {
        text: "万物互联社",
        link: "/student-orgs/clubs/tech/wan-wu-hu-lian-she"
      },
      {
        text: "未来游戏创研社",
        link: "/student-orgs/clubs/tech/wei-lai-you-xi-chuang-yan-she"
      },
      {
        text: "无线电测向社",
        link: "/student-orgs/clubs/tech/wu-xian-dian-ce-xiang-she"
      },
      {
        text: "无限空间社",
        link: "/student-orgs/clubs/tech/wu-xian-kong-jian-she"
      },
      {
        text: "校辩论队",
        link: "/student-orgs/clubs/tech/xiao-bian-lun-dui"
      },
      {
        text: "星云软件工作室",
        link: "/student-orgs/clubs/tech/xing-yun-ruan-jian-gong-zuo-shi"
      },
      {
        text: "医疗产品创新协会",
        link: "/student-orgs/clubs/tech/yi-liao-chan-pin-chuang-xin-xie-hui"
      },
      {
        text: "移动应用开发社",
        link: "/student-orgs/clubs/tech/yi-dong-ying-yong-kai-fa-she"
      },
      {
        text: "元宇宙设计社",
        link: "/student-orgs/clubs/tech/yuan-yu-zhou-she-ji-she"
      },
      {
        text: "智慧医疗陪诊服务社",
        link: "/student-orgs/clubs/tech/zhi-hui-yi-liao-pei-zhen-fu-wu-she"
      },
      {
        text: "智能医疗社",
        link: "/student-orgs/clubs/tech/zhi-neng-yi-liao-she"
      },
      {
        text: "智能影像社",
        link: "/student-orgs/clubs/tech/zhi-neng-ying-xiang-she"
      },
      {
        text: "智能制造社",
        link: "/student-orgs/clubs/tech/zhi-neng-zhi-zao-she"
      },
      {
        text: "AI+未来研究社",
        link: "/student-orgs/clubs/tech/ai-wei-lai-yan-jiu-she"
      },
      {
        text: "AI创新应用社",
        link: "/student-orgs/clubs/tech/ai-chuang-xin-ying-yong-she"
      },
      {
        text: "E&E创客社",
        link: "/student-orgs/clubs/tech/ee-chuang-ke-she"
      },
      {
        text: "ERP协会",
        link: "/student-orgs/clubs/tech/erp-xie-hui"
      },
      {
        text: "ME微电子社",
        link: "/student-orgs/clubs/tech/me-wei-dian-zi-she"
      }
    ]
  },
  {
    text: "思想政治类",
    collapsed: true,
    items: [
      {
        text: "大学生演讲与口才协会",
        link: "/student-orgs/clubs/civic/da-xue-sheng-yan-jiang-yu-kou-cai-xie-hui"
      },
      {
        text: "东软反诈社",
        link: "/student-orgs/clubs/civic/dong-ruan-fan-zha-she"
      },
      {
        text: "东软红数字红旅社",
        link: "/student-orgs/clubs/civic/dong-ruan-hong-shu-zi-hong-l-she"
      },
      {
        text: "法律社",
        link: "/student-orgs/clubs/civic/fa-l-she"
      },
      {
        text: "国旗护卫队",
        link: "/student-orgs/clubs/civic/guo-qi-hu-wei-dui"
      },
      {
        text: "青年马克思主义学社",
        link: "/student-orgs/clubs/civic/qing-nian-ma-ke-si-zhu-yi-xue-she"
      }
    ]
  },
  {
    text: "文化艺术类",
    collapsed: true,
    items: [
      {
        text: "采薇文学社",
        link: "/student-orgs/clubs/arts/cai-wei-wen-xue-she"
      },
      {
        text: "大学生话剧团",
        link: "/student-orgs/clubs/arts/da-xue-sheng-hua-ju-tuan"
      },
      {
        text: "大学生摄影协会",
        link: "/student-orgs/clubs/arts/da-xue-sheng-she-ying-xie-hui"
      },
      {
        text: "大学生艺术团",
        link: "/student-orgs/clubs/arts/da-xue-sheng-yi-shu-tuan"
      },
      {
        text: "东软非遗艺术研究学会",
        link: "/student-orgs/clubs/arts/dong-ruan-fei-yi-yi-shu-yan-jiu-xue-hui"
      },
      {
        text: "东软钢琴社",
        link: "/student-orgs/clubs/arts/dong-ruan-gang-qin-she"
      },
      {
        text: "东软美术社",
        link: "/student-orgs/clubs/arts/dong-ruan-mei-shu-she"
      },
      {
        text: "东软说唱社",
        link: "/student-orgs/clubs/arts/dong-ruan-shuo-chang-she"
      },
      {
        text: "东软相声社",
        link: "/student-orgs/clubs/arts/dong-ruan-xiang-sheng-she"
      },
      {
        text: "东软桌游社",
        link: "/student-orgs/clubs/arts/dong-ruan-zhuo-you-she"
      },
      {
        text: "东软AIGC衍艺研究社",
        link: "/student-orgs/clubs/arts/dong-ruan-aigc-yan-yi-yan-jiu-she"
      },
      {
        text: "吉他协会",
        link: "/student-orgs/clubs/arts/ji-ta-xie-hui"
      },
      {
        text: "交互创意工坊",
        link: "/student-orgs/clubs/arts/jiao-hu-chuang-yi-gong-fang"
      },
      {
        text: "明德传统文化协会",
        link: "/student-orgs/clubs/arts/ming-de-chuan-tong-wen-hua-xie-hui"
      },
      {
        text: "魔术协会",
        link: "/student-orgs/clubs/arts/mo-shu-xie-hui"
      },
      {
        text: "拼装与模型设计研究社",
        link: "/student-orgs/clubs/arts/pin-zhuang-yu-mo-xing-she-ji-yan-jiu-she"
      },
      {
        text: "云辞汉服协会",
        link: "/student-orgs/clubs/arts/yun-ci-han-fu-xie-hui"
      },
      {
        text: "ACG.Family 动漫社",
        link: "/student-orgs/clubs/arts/acgfamily-dong-man-she"
      },
      {
        text: "Frame Agency 大连东软帧像社",
        link: "/student-orgs/clubs/arts/frameagency-da-lian-dong-ruan-zhen-xiang-she"
      },
      {
        text: "S.R.B-box社",
        link: "/student-orgs/clubs/arts/srb-box-she"
      }
    ]
  },
  {
    text: "体育竞技类",
    collapsed: true,
    items: [
      {
        text: "棒燃星耀棒球社",
        link: "/student-orgs/clubs/sports/bang-ran-xing-yao-bang-qiu-she"
      },
      {
        text: "东软电子竞技社",
        link: "/student-orgs/clubs/sports/dong-ruan-dian-zi-jing-ji-she"
      },
      {
        text: "东软篮球协会",
        link: "/student-orgs/clubs/sports/dong-ruan-lan-qiu-xie-hui"
      },
      {
        text: "东软乒乓球社",
        link: "/student-orgs/clubs/sports/dong-ruan-ping-pang-qiu-she"
      },
      {
        text: "东软武术协会",
        link: "/student-orgs/clubs/sports/dong-ruan-wu-shu-xie-hui"
      },
      {
        text: "风之声跑步协会",
        link: "/student-orgs/clubs/sports/feng-zhi-sheng-pao-bu-xie-hui"
      },
      {
        text: "极限飞盘社",
        link: "/student-orgs/clubs/sports/ji-xian-fei-pan-she"
      },
      {
        text: "轮滑社",
        link: "/student-orgs/clubs/sports/lun-hua-she"
      },
      {
        text: "排球协会",
        link: "/student-orgs/clubs/sports/pai-qiu-xie-hui"
      },
      {
        text: "羽毛球协会",
        link: "/student-orgs/clubs/sports/yu-mao-qiu-xie-hui"
      },
      {
        text: "My Way滑板社",
        link: "/student-orgs/clubs/sports/myway-hua-ban-she"
      }
    ]
  },
  {
    text: "志愿公益类",
    collapsed: true,
    items: [
      {
        text: "东软之声广播台",
        link: "/student-orgs/clubs/volunteer/dong-ruan-zhi-sheng-guang-bo-tai"
      },
      {
        text: "健康管理与急救社",
        link: "/student-orgs/clubs/volunteer/jian-kang-guan-li-yu-ji-jiu-she"
      },
      {
        text: "开源电脑运维社",
        link: "/student-orgs/clubs/volunteer/kai-yuan-dian-nao-yun-wei-she"
      },
      {
        text: "猫咪港湾流浪动物救助站",
        link: "/student-orgs/clubs/volunteer/mao-mi-gang-wan-liu-lang-dong-wu-jiu-zhu-zhan"
      },
      {
        text: "校青年志愿者协会",
        link: "/student-orgs/clubs/volunteer/xiao-qing-nian-zhi-yuan-zhe-xie-hui"
      },
      {
        text: "印象东软",
        link: "/student-orgs/clubs/volunteer/yin-xiang-dong-ruan"
      }
    ]
  },
  {
    text: "自律互助类",
    collapsed: true,
    items: [
      {
        text: "大连东软网络安全工作室",
        link: "/student-orgs/clubs/mutual-aid/da-lian-dong-ruan-wang-luo-an-quan-gong-zuo-shi"
      },
      {
        text: "大学生校友服务中心",
        link: "/student-orgs/clubs/mutual-aid/da-xue-sheng-xiao-you-fu-wu-zhong-xin"
      },
      {
        text: "俄语协会",
        link: "/student-orgs/clubs/mutual-aid/e-yu-xie-hui"
      },
      {
        text: "凌云飞行协会",
        link: "/student-orgs/clubs/mutual-aid/ling-yun-fei-xing-xie-hui"
      },
      {
        text: "日语协会",
        link: "/student-orgs/clubs/mutual-aid/ri-yu-xie-hui"
      },
      {
        text: "图书馆乐读社",
        link: "/student-orgs/clubs/mutual-aid/tu-shu-guan-le-du-she"
      },
      {
        text: "英语协会",
        link: "/student-orgs/clubs/mutual-aid/ying-yu-xie-hui"
      },
      {
        text: "粤语社",
        link: "/student-orgs/clubs/mutual-aid/yue-yu-she"
      },
      {
        text: "智慧天空",
        link: "/student-orgs/clubs/mutual-aid/zhi-hui-tian-kong"
      },
      {
        text: "YPDA青年心理发展协会",
        link: "/student-orgs/clubs/mutual-aid/ypda-qing-nian-xin-li-fa-zhan-xie-hui"
      }
    ]
  },
  {
    text: "创新创业类",
    collapsed: true,
    items: [
      {
        text: "大学生就业服务中心",
        link: "/student-orgs/clubs/startup/da-xue-sheng-jiu-ye-fu-wu-zhong-xin"
      },
      {
        text: "全媒体运营社",
        link: "/student-orgs/clubs/startup/quan-mei-ti-yun-ying-she"
      },
      {
        text: "智能产品研发社",
        link: "/student-orgs/clubs/startup/zhi-neng-chan-pin-yan-fa-she"
      },
      {
        text: "SOVO学生管理委员会",
        link: "/student-orgs/clubs/startup/sovo-xue-sheng-guan-li-wei-yuan-hui"
      },
      {
        text: "TRIZ创新方法社",
        link: "/student-orgs/clubs/startup/triz-chuang-xin-fang-fa-she"
      }
    ]
  }
]
