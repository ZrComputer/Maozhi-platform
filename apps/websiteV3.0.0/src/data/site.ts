export const site = {
  name: "茂之科技",
  fullName: "安徽茂之数智科技有限公司",
  englishName:
    "Anhui Maozhi Digital Intelligence Technology Co., Ltd.",

  seoDescription:
    "安徽茂之数智科技有限公司立足滁州，为工业、园区及政企客户提供智能化集成、机器人与AI应用、算电协同等数字化解决方案。",

  navigation: [
    { label: "首页", href: "#home" },
    { label: "核心业务", href: "#services" },
    { label: "解决方案", href: "#solutions" },
    { label: "项目案例", href: "#cases" },
    { label: "联系我们", href: "#contact" }
  ],

  hero: {
    badges: [
      "科技型企业",
      "滁州本土数字化服务商"
    ],

    headline: "以技术为核",
    highlightedHeadline: "以落地为本",

    summary:
      "立足滁州，面向工业、园区与政企客户，提供智能化集成、机器人与 AI 应用、算电协同的一体化解决方案。",

    metrics: [
      {
        value: "3",
        label: "大业务主线"
      },
      {
        value: "9",
        label: "项案例实践"
      },
      {
        value: "全周期",
        label: "项目交付服务"
      }
    ]
  },

  services: [
    {
      id: "intelligent-integration",
      number: "01",
      eyebrow: "INTELLIGENT INTEGRATION",
      title: "智能化集成",
      description:
        "面向工业、园区及政企场景，提供智能化弱电、安防监控、综合布线、机房和门禁报警等系统建设服务。",
      specialties: [
        "弱电系统集成",
        "安防监控",
        "机房与综合布线"
      ]
    },
    {
      id: "robotics-ai",
      number: "02",
      eyebrow: "ROBOTICS & AI",
      title: "机器人与 AI 应用",
      description:
        "结合工业机器人、仓储设备、AI 算法与定制软件，推动搬运、分拣、巡检和生产环节的智能化升级。",
      specialties: [
        "工业与仓储机器人",
        "AI 算法应用",
        "定制软件开发"
      ]
    },
    {
      id: "digital-energy",
      number: "03",
      eyebrow: "DIGITAL ENERGY",
      title: "算电协同",
      description:
        "围绕企业用能和绿色发展需求，提供购电咨询、绿电对接、储能集成及能源数字化管理服务。",
      specialties: [
        "购电与绿电咨询",
        "储能系统集成",
        "能源数字化管理"
      ]
    }
  ],

  solutions: [
    {
      id: "smart-factory",
      number: "01",
      audience: "制造企业",
      title: "智慧工厂",
      description:
        "将厂区安防、巡检监测、综合布线、机房与数据平台纳入统一建设方案，帮助企业形成稳定、可视、可管理的数字化基础设施。",
      features: [
        "厂区安防",
        "巡检监测",
        "机房与网络",
        "数据平台"
      ]
    },
    {
      id: "integrated-security",
      number: "02",
      audience: "园区与政企",
      title: "综合安防与指挥",
      description:
        "统筹视频监控、门禁报警和指挥中心建设，提升园区、政企单位及公共空间的安全管理和事件响应能力。",
      features: [
        "视频监控",
        "门禁报警",
        "指挥中心",
        "集中管理"
      ]
    },
    {
      id: "smart-logistics",
      number: "03",
      audience: "物流与仓储",
      title: "智能仓储",
      description:
        "结合仓储机器人和配套软件，对存储、搬运及分拣环节进行自动化改造，构建柔性的人机协同仓储体系。",
      features: [
        "仓储机器人",
        "自动搬运",
        "智能分拣",
        "系统协同"
      ]
    },
    {
      id: "energy-digitalization",
      number: "04",
      audience: "工商业用能",
      title: "能源数字化",
      description:
        "结合企业实际用能需求，对接购电、绿电、储能和能源管理能力，帮助企业优化用能成本并提升能源管理效率。",
      features: [
        "购电咨询",
        "绿电对接",
        "储能集成",
        "能源管理"
      ]
    }
  ],

  caseGroups: [
    {
      id: "integration",
      label: "传统智能化",
      eyebrow: "INTELLIGENT INTEGRATION",
      description:
        "围绕工业厂区、政企单位及公共设施，持续积累安防监控、指挥中心、机房和综合布线等项目经验。",
      items: [
        {
          id: "jinhe-security",
          number: "01",
          category: "工业智能化",
          title:
            "安徽金禾实业合成氨厂区智能安防项目",
          summary:
            "围绕新建合成氨厂区，建设视频监控、高点巡检监测、入侵报警和智能控制中心，提升厂区安全管理能力。",
          highlights: [
            "厂区监控",
            "高点巡检",
            "智能控制中心"
          ],
          image:
            "/assets/images/cases/case1-control-room.webp",
          imageAlt:
            "安徽金禾实业合成氨厂区智能控制中心"
        },
        {
          id: "jinxuan-factory",
          number: "02",
          category: "智慧工厂",
          title:
            "安徽金轩科技智能化系统建设工程",
          summary:
            "围绕厂区监控、入侵报警、指挥中心及智慧工厂平台开展分阶段建设，形成统一的智能化管理体系。",
          highlights: [
            "安防监控",
            "入侵报警",
            "智慧工厂平台"
          ],
          image:
            "/assets/images/cases/case2-monitoring-room.webp",
          imageAlt:
            "安徽金轩科技项目监控中心"
        },
        {
          id: "huike-intelligence",
          number: "03",
          category: "工业智能化",
          title:
            "滁州惠科光电智能化工程",
          summary:
            "围绕电子纸显示模组新建厂区，建设厂区监控、入侵报警、洁净室安防及机房等智能化系统。",
          highlights: [
            "厂区监控",
            "洁净室安防",
            "机房建设"
          ],
          image:
            "/assets/images/cases/case3-command-center.webp",
          imageAlt:
            "滁州惠科光电项目智能指挥中心"
        },
        {
          id: "langya-fire-rescue",
          number: "04",
          category: "政企智能化",
          title:
            "琅琊区消防救援大队安防及指挥中心项目",
          summary:
            "围绕新建大楼内外空间，建设安防监控、入侵报警和指挥中心，提升消防救援单位的集中管理能力。",
          highlights: [
            "安防监控",
            "入侵报警",
            "指挥中心"
          ],
          image:
            "/assets/images/cases/case4-service-center.webp",
          imageAlt:
            "琅琊区消防救援大队指挥中心"
        },
        {
          id: "dingyuan-railway-station",
          number: "05",
          category: "公共设施",
          title:
            "定远高铁东站扩建项目安防工程",
          summary:
            "围绕车站扩建项目，建设站内及站前广场监控系统，为公共交通空间提供持续稳定的安防保障。",
          highlights: [
            "车站安防",
            "广场监控",
            "公共设施"
          ],
          image:
            "/assets/images/cases/case5-railway-station.webp",
          imageAlt:
            "定远高铁东站扩建项目航拍图"
        }
      ]
    },

    {
      id: "digital",
      label: "数字新兴业务",
      eyebrow: "DIGITAL EMERGING BUSINESS",
      description:
        "面向仓储物流和商业运营场景，融合智能设备、软件平台与业务流程，推动企业数字化升级。",
      items: [
        {
          id: "qinyuan-warehouse",
          number: "01",
          category: "智能仓储",
          title:
            "重庆沁园食品仓储智能化升级项目",
          summary:
            "结合食品仓储业务需求，引入仓储机器人及配套管理系统，优化货物存储、搬运和出入库作业流程。",
          highlights: [
            "仓储机器人",
            "自动搬运",
            "系统协同"
          ],
          image:
            "/assets/images/cases/case-digital-qinyuan-warehouse.webp",
          imageAlt:
            "重庆沁园食品仓储智能化设备"
        },
        {
          id: "baoshun-platform",
          number: "02",
          category: "软件平台",
          title:
            "宝顺商城数字化开发项目",
          summary:
            "围绕商城运营、商品管理、会员管理及订单业务，搭建统一的数字化管理平台，提升业务协同效率。",
          highlights: [
            "商城开发",
            "商品管理",
            "运营平台"
          ],
          image:
            "/assets/images/cases/case-digital-baoshun-platform.webp",
          imageAlt:
            "宝顺商城数字化管理平台"
        }
      ]
    },

    {
      id: "energy",
      label: "算电协同业务",
      eyebrow: "DIGITAL ENERGY",
      description:
        "围绕新能源场站和工商业用能需求，建设能源监测、智能运维、购售电及绿色能源服务能力。",
      items: [
        {
          id: "energy-station-platform",
          number: "01",
          category: "新能源场站",
          title:
            "新能源场站智能化升级",
          summary:
            "融合设备监测、视频监控、智能巡检和运维管理能力，提升新能源场站运行状态的可视化与管理效率。",
          highlights: [
            "场站监测",
            "智能巡检",
            "运维平台"
          ],
          image:
            "/assets/images/cases/case-energy-station-platform.webp",
          imageAlt:
            "新能源场站智能运维管理平台"
        },
        {
          id: "power-trading-service",
          number: "02",
          category: "能源服务",
          title:
            "工商业电力交易与绿电服务",
          summary:
            "面向工商业客户提供用能分析、购电咨询、绿电对接及能源管理服务，帮助企业优化用能结构和成本。",
          highlights: [
            "用能分析",
            "电力交易",
            "绿电服务"
          ],
          image:
            "/assets/images/cases/case-energy-power-trading.webp",
          imageAlt:
            "工商业电力交易与能源管理平台"
        }
      ]
    }
  ],

contact: {
  eyebrow: "CONTACT US",

  title: "让项目从一次沟通开始",

  description:
    "无论您正在规划智能化系统建设、机器人与 AI 应用，还是企业能源数字化项目，都欢迎与我们联系。我们将结合实际场景，为您提供针对性的方案建议。",

  phones: [
    "18255005858",
    "19955065858",
    "13625509966"
  ],

  email: "18255005858@139.com",

  website: "www.maozhi.online",

  websiteUrl: "https://www.maozhi.online",

  address:
    "安徽省滁州市南谯中路2299号鲁班城410室",

  wechat: {
    name: "安徽茂之数智科技有限公司",

    description:
      "扫码关注公众号，获取公司动态、项目案例与行业资讯。",

    qrImage:
      "/assets/images/contact/wechat-qrcode.jpg"
  }
}
};