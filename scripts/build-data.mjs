import fs from 'node:fs';
import path from 'node:path';

const rawDir = path.resolve('src/content/airports/raw');

export const BRAND_MAPPING = [
  {
    rank: 1,
    displayOrder: 1,
    slug: 'lingdongyun',
    name: '灵动云',
    englishName: 'LingDong Cloud',
    fileMatch: '灵动云',
    seoTitle: '灵动云机场怎么样？2026套餐价格、节点与购买指南｜机场精选',
    designatedPurchaseUrl: 'https://varnexa.lingdongaff.com/#/?code=VeMln3TT',
    tagline: '主打 IEPL/IPLC 优化专线与 BGP 智能调度，支持官方与定制客户端',
    badge: 'TOP 01 · 重点推荐',
    highlightFeatures: ['IEPL/IPLC 专线', 'BGP 智能调度', '¥20/月起，¥99/年', '年付/月付及不限时流量包', '破晓/凌霄指定第三方订阅'],
    advantages: [
      '提供 IEPL 专线与穿云 IPLC 专线，抗干扰能力较强',
      '全节点 1.0 倍率计费，无暗扣倍率现象',
      '套餐梯度丰富，从 70GB 年付小包（¥99）到 1500GB 大流量及定制专线',
      '支持官方独立客户端与指定套餐（破晓/凌霄）第三方订阅申请'
    ],
    limitations: [
      '入门及中端套餐不开放第三方 Clash 订阅，须使用官方客户端或 Nextin',
      '不提供免费试用，退款须经平台客服人工审核',
      '晚高峰速度受本地宽带与出口网络波动影响'
    ],
    coupons: [
      { code: 'ld888', discount: '8折', note: '适用于拂风、驭浪、破晓、凌霄等常规套餐' }
    ]
  },
  {
    rank: 2,
    displayOrder: 2,
    slug: 'twilight',
    name: '暮光加速',
    englishName: 'Twilight Acceleration',
    fileMatch: '暮光加速',
    seoTitle: '暮光加速机场介绍 - 套餐价格、服务特点与选购指南｜机场精选',
    designatedPurchaseUrl: 'https://varnexa.twilightaff.com/#/?code=SipiFEkB',
    tagline: '月付专线出口与 BGP 多线智能调度，轻量年付 IPLC 线路',
    badge: 'TOP 02 · 重点推荐',
    highlightFeatures: ['BGP 多线智能调度', '¥20/月起，¥109/年', '覆盖15+国家与地区节点', '多档不限时流量包'],
    advantages: [
      '月付门槛低，¥20/月提供 120GB 流量',
      '拥有 ¥109/年（70GB/月）轻量年付 IPLC 专线选项',
      '提供三档一次性不限时流量包，适合低频备用用户',
      '节点覆盖香港、日本、新加坡、欧美及拉美等多地区'
    ],
    limitations: [
      '官方未公开第三方 Clash 订阅直链，多依赖官方客户端配置',
      '未提供免费试用套餐，无明确无理由退款承诺',
      '不同套餐线路来源差异较大，年付与月付线路架构不同'
    ],
    coupons: []
  },
  {
    rank: 3,
    displayOrder: 3,
    slug: 'breezenet',
    name: '微风网络',
    englishName: 'BreezeNet',
    fileMatch: '微风网络',
    seoTitle: '微风网络机场怎么样？套餐价格与流量对比｜机场精选',
    designatedPurchaseUrl: 'https://downloadshare.breezenetttt.sbs/#/?code=fqkqXWkQ',
    tagline: '平价月付、年付 IPLC 及不限时流量包，覆盖主流流媒体与 AI 工具',
    badge: 'TOP 03 · 重点推荐',
    highlightFeatures: ['¥25/月起，¥137/年', '平价专线与轻量年付', '全节点 1.0 倍率', '主流影音与 AI 解锁适配'],
    advantages: [
      '价格定位亲民，年付套餐折算月价极具竞争力',
      '全节点 1.0 倍率，不设套路扣费',
      '提供一次性买断不限时流量方案，适合轻度备用',
      '对 YouTube 4K 与主流流媒体平台适配良好'
    ],
    limitations: [
      '官方不公开开放第三方订阅直连，推荐官方客户端',
      '没有免费试用，需购买短期月付进行体验',
      '晚高峰极速表现受地区出口负载影响'
    ],
    coupons: []
  },
  {
    rank: 4,
    displayOrder: 4,
    slug: 'feimaoyun',
    name: '飞猫云',
    englishName: 'FlyCat Cloud',
    fileMatch: '飞猫云',
    seoTitle: '飞猫云机场介绍 - 年付套餐、月付价格及购买指南｜机场精选',
    designatedPurchaseUrl: 'https://flycat1.flycatvipaff.cc/#/?code=V0KN47DJ',
    tagline: '主打高性价比月付流量，覆盖亚太及欧美常用出口',
    badge: '高性价比精选',
    highlightFeatures: ['¥15/月起入门套餐', '大流量月付方案', '亚太欧美优质节点', '多设备共享接入'],
    advantages: [
      '月付入门价仅 ¥15，性价比突出',
      '流量配额充足，中高阶套餐满足重度下载与影音需求',
      '支持多平台通用客户端导入使用'
    ],
    limitations: [
      '低价套餐晚高峰偶有延迟波动',
      '无退款承诺，建议先月付体验'
    ],
    coupons: []
  },
  {
    rank: 5,
    displayOrder: 5,
    slug: 'dalaoyun',
    name: '大佬云',
    englishName: 'DalaoYun',
    fileMatch: '大佬云',
    seoTitle: '大佬云机场怎么样？全部套餐价格与使用指南｜机场精选',
    designatedPurchaseUrl: 'https://a01vipaff.dalaoyunaff.com/#/?code=yN6HqG0d',
    tagline: '低价 IEPL 专线网络，最低月付 ¥19.99，全节点 1x 倍率不限设备',
    badge: '低价专线精选',
    highlightFeatures: ['最低月付 ¥19.99', '¥96/年低价年付', '全节点 1x 倍率', '不限同时在线设备数', '7折优惠码 dly888'],
    advantages: [
      '月付 ¥19.99 提供 120GB IEPL 专线流量，单价亲民',
      '年付活动包仅需 ¥96/年（60GB/月），适合轻度用户',
      '全节点 1x 倍率，不限制在线设备数，适合多设备家庭',
      '专属优惠码 dly888 可享 7 折优惠'
    ],
    limitations: [
      '官方不推荐使用订阅链接导入，以官方客户端为主',
      '无半年付周期，仅支持支付宝付款',
      '不提供试用，需要先购买月付体验'
    ],
    coupons: [
      { code: 'dly888', discount: '7折', note: '全场套餐适用，结算页填写生效' }
    ]
  },
  {
    rank: 6,
    displayOrder: 6,
    slug: 'flyv',
    name: 'FLYV',
    englishName: 'FLYV (飞V)',
    fileMatch: '飞V',
    seoTitle: 'FLYV机场介绍 - 套餐价格、节点地区与购买指南｜机场精选',
    designatedPurchaseUrl: 'https://varnexa.flyvaff.com/#/?code=jTHMz8si',
    tagline: '多档月付、季付与年付套餐，提供多地区基础与提速节点',
    badge: '并列第六 · 多档周期',
    highlightFeatures: ['并列第六推荐', '多档弹性计费周期', '基础与提速专线节点', '覆盖流媒体及 AI 解锁'],
    advantages: [
      '周期覆盖月付、季付、年付，计费灵活',
      '节点包含基础与专线提速档位，满足不同需求',
      '设备限制较宽松，日常连接体验平稳'
    ],
    limitations: [
      '部分节点晚高峰存在限速策略',
      '需按需选择套餐周期，退款审核较为严格'
    ],
    coupons: []
  },
  {
    rank: 6,
    displayOrder: 7,
    slug: 'wavenet',
    name: '浪网',
    englishName: 'WaveNet',
    fileMatch: '浪网',
    seoTitle: '浪网机场怎么样？套餐价格与流量方案介绍｜机场精选',
    designatedPurchaseUrl: 'https://varnexa.wavenetaff.com/#/?code=hF4IQiat',
    tagline: '平价月付与一次性流量包设计，支持多平台通用代理配置',
    badge: '并列第六 · 平价通用',
    highlightFeatures: ['并列第六推荐', '平价月付方案', '不限时买断流量包', '通用代理客户端配置'],
    advantages: [
      '与 FLYV 并列第六，平价月付口碑良好',
      '提供一次性流量包，用完为止不浪费',
      '协议兼容度高，支持主流第三方代理客户端'
    ],
    limitations: [
      '高峰期个别节点延迟增加',
      '客服响应时间依据工单排队'
    ],
    coupons: []
  },
  {
    rank: 7,
    displayOrder: 8,
    slug: 'invisible',
    name: '隐形人',
    englishName: 'Invisible Man',
    fileMatch: '隐形人',
    seoTitle: '隐形人机场介绍 - 套餐价格、服务特点及选购建议｜机场精选',
    designatedPurchaseUrl: 'https://varnexa.invisibleaff.com/#/?code=wt5AKMJ7',
    tagline: '隐私保护与多节点智能冗余切换，支持流媒体及 AI 工具访问',
    badge: '隐私冗余',
    highlightFeatures: ['多节点冗余备份', '隐私保护机制', '流媒体与 AI 工具适配', '长周期优惠方案'],
    advantages: [
      '线路冗余度高，节点故障自动智能切换',
      '多协议支持，隐私安全配置较为严密',
      '流媒体与 AI 解锁表现均衡'
    ],
    limitations: [
      '价格处于中档水平，无超低价体验包',
      '不提供无理由退款'
    ],
    coupons: []
  },
  {
    rank: 8,
    displayOrder: 9,
    slug: 'tiziyun',
    name: '梯子云',
    englishName: 'TiZi Cloud',
    fileMatch: '梯子云',
    seoTitle: '梯子云机场怎么样？年付套餐与不限时流量指南｜机场精选',
    designatedPurchaseUrl: 'https://varnexa.ladderaff.com/#/?code=LGBPYVFE',
    tagline: '面向大流量下载与轻办公的多规格套餐，全节点均衡调度',
    badge: '大流量下载',
    highlightFeatures: ['大流量规格套餐', '全节点均衡调度', '年付优惠力度大', '办公与下载友好'],
    advantages: [
      '流量配额大，适合下载与重度影音用户',
      '节点调度算法成熟，不易出现单点拥堵',
      '年付整体折扣性价比较高'
    ],
    limitations: [
      '入门月付性价比较中规中矩',
      '缺乏针对极低延迟游戏的专属节点'
    ],
    coupons: []
  },
  {
    rank: 9,
    displayOrder: 10,
    slug: 'wuyou',
    name: '无忧连接',
    englishName: 'WorryFree Connection',
    fileMatch: '无忧连接',
    seoTitle: '无忧连接机场介绍 - 套餐价格、优惠活动与购买指南｜机场精选',
    designatedPurchaseUrl: 'https://wep01.worryfreeaff.com/#/?code=6PecbegE',
    tagline: '稳定长周期年付与月度周期套餐，提供客服工单支持',
    badge: '长期省心',
    highlightFeatures: ['稳定长周期方案', '月付与年付多规格', '多设备支持', '工单技术支持'],
    advantages: [
      '长期运行稳定性良好，适合省心型用户',
      '年付方案折算成本适中',
      '售后工单响应相对及时'
    ],
    limitations: [
      '活动优惠相对较少',
      '不支持短期试用'
    ],
    coupons: []
  },
  {
    rank: 10,
    displayOrder: 11,
    slug: 'firefly',
    name: 'Firefly',
    englishName: 'Firefly Cloud',
    fileMatch: 'Firefly',
    seoTitle: 'Firefly机场怎么样？年付、月付与流量套餐介绍｜机场精选',
    designatedPurchaseUrl: 'https://fly.fireflyxx.cfd/#/?code=iWOfFH6S',
    tagline: '轻量化专线网络，兼顾移动端便携与高速访问体验',
    badge: '轻量高速',
    highlightFeatures: ['轻量专线网络', '移动端适配优化', '清晰计费规格', '低延迟出口'],
    advantages: [
      '移动端连接迅速，配置轻巧',
      '套餐规格划分清晰，无复杂套路',
      '常用亚太地区延迟较低'
    ],
    limitations: [
      '大流量高阶套餐种类较少',
      '不支持一次性不限时套餐'
    ],
    coupons: []
  },
  {
    rank: 11,
    displayOrder: 12,
    slug: 'quanqiuyun',
    name: '全球云',
    englishName: 'Global Cloud',
    fileMatch: '全球云',
    seoTitle: '全球云机场介绍 - 套餐价格、线路说明与选购指南｜机场精选',
    designatedPurchaseUrl: 'https://n3oplhjnm.quanqiugttt1.club/#/?code=KN8GOPW3',
    tagline: '全球多区域节点覆盖，提供多样化月付及长周期方案',
    badge: '全球多节点',
    highlightFeatures: ['全球广泛节点覆盖', '冷门及主流地区兼顾', '长周期优惠', '多协议适配'],
    advantages: [
      '节点覆盖国家较广，包含部分冷门区域',
      '协议多样化，兼容多种客户端配置',
      '长期订阅具有阶梯价格优势'
    ],
    limitations: [
      '冷门节点带宽有限，适合浏览而非 4K 播放',
      '官网客服采用异步工单机制'
    ],
    coupons: []
  },
  {
    rank: 12,
    displayOrder: 13,
    slug: 'v2yun',
    name: '唯兔云',
    englishName: 'OnlyRabbit V2Yun',
    fileMatch: '唯兔云',
    seoTitle: '唯兔云V2云怎么样？套餐价格与购买指南｜机场精选',
    designatedPurchaseUrl: 'https://fast.v2yunvipaff.com/#/?code=Q03xl6H9',
    tagline: 'V2Ray/VLESS 协议深度优化，稳定解锁流媒体与社交平台',
    badge: 'V2/VLESS 优化',
    highlightFeatures: ['VLESS 协议优化', '流媒体深度解锁', '多档流量规格', '客户端兼容全面'],
    advantages: [
      '协议支持全面，适配现代分流客户端',
      '流媒体解锁表现较好',
      '月付与年付价格分配合理'
    ],
    limitations: [
      '特殊时期节点切换较频繁',
      '退款政策较为严苛'
    ],
    coupons: []
  },
  {
    rank: 13,
    displayOrder: 14,
    slug: 'lingmao',
    name: '灵猫网络',
    englishName: 'CivetNet',
    fileMatch: '灵猫网络',
    seoTitle: '灵猫网络机场介绍 - 年付月付套餐与流量对比｜机场精选',
    designatedPurchaseUrl: 'https://vip02.civetaff.com/#/?code=UwBdz6fK',
    tagline: '高性价比小资精选机场，日常刷帖追剧轻松应对',
    badge: '轻量实用',
    highlightFeatures: ['小资平价选购', '日常追剧友好', '节点负载均衡', '简洁易用'],
    advantages: [
      '入门价格亲民，适合日常浏览与追剧',
      '节点负载控制较好，平时不易掉线',
      '客户端配置指导相对通俗'
    ],
    limitations: [
      '无大带宽下载专线支持',
      '客服仅限网页在线服务'
    ],
    coupons: []
  },
  {
    rank: 14,
    displayOrder: 15,
    slug: 'flashleap',
    name: '闪跃',
    englishName: 'FlashLeap',
    fileMatch: '闪跃',
    seoTitle: '闪跃FlashLeap机场怎么样？套餐价格与服务介绍｜机场精选',
    designatedPurchaseUrl: 'https://vip02.flashleapaff.com/#/?code=Zt0eiN4F',
    tagline: '高速转发节点与低延迟路由优化，注重游戏与外服交互体验',
    badge: '快速响应',
    highlightFeatures: ['高速转发节点', '低延迟路由优化', '游戏外服辅助', '稳定在线率'],
    advantages: [
      '部分节点路由延迟较低，适合外服游戏日常交互',
      '线路抖动较小，连接建立速度快',
      '套餐设计简洁直接'
    ],
    limitations: [
      '套餐档位选择较少',
      '不限时套餐未常态化开放'
    ],
    coupons: []
  },
  {
    rank: 15,
    displayOrder: 16,
    slug: 'kuajieyun',
    name: '跨界云',
    englishName: 'CrossBorder Cloud',
    fileMatch: '跨界云',
    seoTitle: '跨界云机场介绍 - 套餐价格与大流量方案对比｜机场精选',
    designatedPurchaseUrl: 'https://vip02.kuajieaff.com/#/?code=SmYkTVHU',
    tagline: '面向跨境办公与跨境电商的多出口节点网络，提供专属大流量支持',
    badge: '跨境办公',
    highlightFeatures: ['跨境电商与办公友好', '大流量配额方案', '多出口多 IP 支持', '商务连接稳定'],
    advantages: [
      '节点 IP 纯净度相对较高，适合跨境电商及办公',
      '月度流量档位充裕，支持团队适度共享',
      '全天候在线率相对平稳'
    ],
    limitations: [
      '价格偏向商务级，略高于纯娱乐机场',
      '需要遵守合规使用守则'
    ],
    coupons: []
  },
  {
    rank: 16,
    displayOrder: 17,
    slug: 'sogoyun',
    name: 'Sogo云',
    englishName: 'SOGO Cloud',
    fileMatch: 'Sogo云',
    seoTitle: 'Sogo云机场怎么样？年付与不限时套餐选购指南｜机场精选',
    designatedPurchaseUrl: 'https://jbvfh.sogotztz2.sbs/#/?code=TC81Z4TF',
    tagline: '老牌均衡型机场服务，提供多周期与弹性流量补充方案',
    badge: '老牌均衡',
    highlightFeatures: ['多周期套餐支持', '弹性流量补充方案', '老牌平稳运行', '多客户端导入'],
    advantages: [
      '套餐涵盖月付至长周期，满足不同预算',
      '提供丰富的流量补充包，流量告急可随时补给',
      '运行时间较长，系统成熟度高'
    ],
    limitations: [
      '晚高峰速度偶有受限',
      '界面风格较传统'
    ],
    coupons: []
  },
  {
    rank: 17,
    displayOrder: 18,
    slug: 'u1s1',
    name: 'U1S1（有一说一）',
    englishName: 'U1S1 Cloud',
    fileMatch: 'U1S1',
    seoTitle: 'U1S1有一说一机场介绍 - 套餐价格与购买指南｜机场精选',
    designatedPurchaseUrl: 'https://pkdj7.vipaff.cc/#/?code=LrnAFWMZ',
    tagline: '透明定价、清晰规则，以真实性价比为核心的轻量加速平台',
    badge: '透明实在',
    highlightFeatures: ['清晰透明计费', '无虚假虚标', '亲民月付体验', '入门新手推荐'],
    advantages: [
      '计费规则公开透明，无隐藏收费项目',
      '价格低廉，适合初次接触科学上网的新手试水',
      '客户端配置教程详尽，上手容易'
    ],
    limitations: [
      '高阶定制与超大流量选项较少',
      '专线节点数量有限'
    ],
    coupons: []
  }
];

function parseNumericPrice(str) {
  if (!str) return 0;
  const match = str.match(/¥?\s*([0-9]+(\.[0-9]+)?)/);
  return match ? parseFloat(match[1]) : 0;
}

function parseTrafficGb(str) {
  if (!str) return 0;
  const tbMatch = str.match(/([0-9]+(\.[0-9]+)?)\s*TB/i);
  if (tbMatch) return parseFloat(tbMatch[1]) * 1024;
  const gbMatch = str.match(/([0-9]+(\.[0-9]+)?)\s*GB/i);
  if (gbMatch) return parseFloat(gbMatch[1]);
  return 0;
}

function parseCycleType(cycleStr, nameStr) {
  const combined = (cycleStr + ' ' + nameStr).toLowerCase();
  if (combined.includes('一次性') || combined.includes('不限时') || combined.includes('随心包') || combined.includes('长享包') || combined.includes('流量包')) {
    return 'lifetime';
  }
  if (combined.includes('月付') || combined.includes('/月')) {
    return 'monthly';
  }
  if (combined.includes('年付') || combined.includes('/年')) {
    return 'annual';
  }
  if (combined.includes('季付')) {
    return 'quarterly';
  }
  return 'monthly';
}

function parseMarkdownFile(filePath, meta) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  // Extract metadata
  const brandNameMatch = content.match(/品牌名称[：:]\s*([^\r\n]+)/);
  const brandName = brandNameMatch ? brandNameMatch[1].trim() : meta.name;

  const descMatch = content.match(/品牌介绍[：:]\s*([^\r\n]+)/);
  const description = descMatch ? descMatch[1].trim() : meta.tagline;

  const posMatch = content.match(/品牌定位[：:]\s*([^\r\n]+)/);
  const positioning = posMatch ? posMatch[1].trim() : '';

  const audienceMatch = content.match(/适合用户[：:]\s*([^\r\n]+)/);
  const targetAudience = audienceMatch ? audienceMatch[1].trim() : '';

  const regMatch = content.match(/支持地区[：:]\s*([^\r\n]+)/);
  const regions = regMatch ? regMatch[1].trim() : '香港、日本、新加坡、美国、台湾等常用出口';

  const lineTypeMatch = content.match(/线路类型[：:]\s*([^\r\n]+)/);
  const lineType = lineTypeMatch ? lineTypeMatch[1].trim() : 'IEPL / BGP 智能调度';

  const protocolMatch = content.match(/支持协议[：:]\s*([^\r\n]+)/);
  const protocols = protocolMatch ? protocolMatch[1].trim() : 'Shadowsocks / VLESS';

  // Client info
  const winMatch = content.match(/- Windows[：:]\s*([^\r\n]+)/);
  const macMatch = content.match(/- macOS[：:]\s*([^\r\n]+)/);
  const androidMatch = content.match(/- Android[：:]\s*([^\r\n]+)/);
  const iosMatch = content.match(/- iOS[：:]\s*([^\r\n]+)/);
  const clashMatch = content.match(/第三方客户端[：:]\s*([^\r\n]+)/);

  const clientSupport = {
    windows: winMatch ? winMatch[1].trim() : '提供官方客户端下载或通用配置',
    macOS: macMatch ? macMatch[1].trim() : '提供官方客户端或通用配置',
    android: androidMatch ? androidMatch[1].trim() : '提供官方 APK 或通用客户端支持',
    ios: iosMatch ? iosMatch[1].trim() : '支持海外 App Store 客户端（如 Nextin）或通用订阅',
    clash: clashMatch ? clashMatch[1].trim() : '部分套餐支持或需官方客户端'
  };

  // Streaming & AI
  const netflixMatch = content.match(/- Netflix[：:]\s*([^\r\n]+)/);
  const disneyMatch = content.match(/- Disney\+[：:]\s*([^\r\n]+)/);
  const youtubeMatch = content.match(/- YouTube[：:]\s*([^\r\n]+)/);
  const chatgptMatch = content.match(/- ChatGPT[：:]\s*([^\r\n]+)/);
  const otherAiMatch = content.match(/- 其他 AI 服务[：:]\s*([^\r\n]+)/);

  const streamingAi = {
    netflix: netflixMatch ? netflixMatch[1].trim() : '品牌资料标注适配，实际可用性受出口节点策略影响',
    disney: disneyMatch ? disneyMatch[1].trim() : '品牌资料标注适配，以节点实际解锁为准',
    youtube: youtubeMatch ? youtubeMatch[1].trim() : '支持高清及 4K 播放，吞吐量受本地网络与节点负载影响',
    chatgpt: chatgptMatch ? chatgptMatch[1].trim() : '品牌资料标注适配，需配合对应出口地区使用',
    otherAi: otherAiMatch ? otherAiMatch[1].trim() : '支持 Claude 等主流工具访问'
  };

  // FAQs
  const faqMatch = content.match(/常见问题[：:]\s*([^\r\n]+)/);
  let rawFaqs = [];
  if (faqMatch) {
    const faqText = faqMatch[1].trim();
    const parts = faqText.split(/(?=[①②③④⑤⑥⑦⑧])/);
    rawFaqs = parts.map(p => p.trim()).filter(Boolean);
  }

  // Parse Table for Plans
  const plans = [];
  let inTable = false;
  let headers = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('|') && line.endsWith('|')) {
      if (!inTable) {
        inTable = true;
        headers = line.split('|').map(s => s.trim()).filter(Boolean);
        continue;
      }
      if (line.includes('---')) continue;

      const cols = line.split('|').map(s => s.trim());
      if (cols[0] === '') cols.shift();
      if (cols[cols.length - 1] === '') cols.pop();

      if (cols.length >= 4) {
        const planName = cols[0];
        const rawPrice = cols[1];
        const cycle = cols[2];
        const traffic = cols[3];
        const devices = cols[4] || '未注明';
        const speedLimit = cols[5] || '以实际网络为准';

        const numericPrice = parseNumericPrice(rawPrice);
        const numericTraffic = parseTrafficGb(traffic);
        const cycleCategory = parseCycleType(cycle, planName);

        // Calculate monthly equivalent price
        let monthlyEquivalent = numericPrice;
        if (cycleCategory === 'annual') {
          monthlyEquivalent = parseFloat((numericPrice / 12).toFixed(2));
        } else if (cycleCategory === 'quarterly') {
          monthlyEquivalent = parseFloat((numericPrice / 3).toFixed(2));
        } else if (cycleCategory === 'lifetime') {
          monthlyEquivalent = null; // one-time
        }

        plans.push({
          id: `${meta.slug}-plan-${plans.length + 1}`,
          brandId: meta.slug,
          brandName: meta.name,
          planName,
          price: numericPrice,
          priceRaw: rawPrice,
          cycle,
          cycleCategory,
          monthlyEquivalent,
          traffic,
          trafficGb: numericTraffic,
          devices,
          speedLimit,
          purchaseUrl: meta.designatedPurchaseUrl
        });
      }
    } else {
      if (inTable && !line.startsWith('|')) {
        inTable = false;
      }
    }
  }

  // Compute lowest prices
  let minMonthly = 999999;
  let minYearly = 999999;
  let hasLifetime = false;

  plans.forEach(p => {
    if (p.cycleCategory === 'monthly' && p.price > 0 && p.price < minMonthly) {
      minMonthly = p.price;
    }
    if (p.cycleCategory === 'annual' && p.price > 0 && p.price < minYearly) {
      minYearly = p.price;
    }
    if (p.cycleCategory === 'lifetime') {
      hasLifetime = true;
    }
  });

  if (minMonthly === 999999) minMonthly = null;
  if (minYearly === 999999) minYearly = null;

  return {
    id: meta.slug,
    name: meta.name,
    englishName: meta.englishName,
    slug: meta.slug,
    rank: meta.rank,
    displayOrder: meta.displayOrder,
    seoTitle: meta.seoTitle,
    description,
    tagline: meta.tagline,
    badge: meta.badge,
    highlightFeatures: meta.highlightFeatures,
    positioning,
    targetAudience,
    officialUrl: meta.designatedPurchaseUrl,
    purchaseUrl: meta.designatedPurchaseUrl,
    regions,
    lineType,
    protocols,
    clientSupport,
    streamingAi,
    advantages: meta.advantages,
    limitations: meta.limitations,
    coupons: meta.coupons,
    rawFaqs,
    plans,
    minMonthlyPrice: minMonthly,
    minYearlyPrice: minYearly,
    hasLifetimePlans: hasLifetime,
    plansCount: plans.length,
    recordedAt: '2026-11-23',
    updatedAt: '2026-11-24'
  };
}

console.log('Starting data extraction...');
const allFiles = fs.readdirSync(rawDir);
const brands = [];
let allPlans = [];

BRAND_MAPPING.forEach(meta => {
  const matchFile = allFiles.find(f => f.includes(meta.fileMatch) && !f.includes('(1)'));
  if (!matchFile) {
    throw new Error(`File not found for ${meta.name} (${meta.fileMatch})`);
  }

  const brandData = parseMarkdownFile(path.join(rawDir, matchFile), meta);
  brands.push(brandData);
  allPlans = allPlans.concat(brandData.plans);
  console.log(`[Rank ${brandData.rank}] ${brandData.name} -> ${brandData.plans.length} plans`);
});

console.log('--------------------------------------------------');
console.log('Total brands extracted:', brands.length);
console.log('Total plans extracted:', allPlans.length);

// Generate rankings.json
const rankings = brands.map(b => ({
  rank: b.rank,
  displayOrder: b.displayOrder,
  slug: b.slug,
  name: b.name,
  englishName: b.englishName,
  badge: b.badge,
  minMonthlyPrice: b.minMonthlyPrice,
  minYearlyPrice: b.minYearlyPrice,
  plansCount: b.plansCount,
  lineType: b.lineType,
  purchaseUrl: b.purchaseUrl
}));

// Save brands.json
fs.writeFileSync('src/data/brands.json', JSON.stringify(brands, null, 2), 'utf8');
// Save plans.json
fs.writeFileSync('src/data/plans.json', JSON.stringify(allPlans, null, 2), 'utf8');
// Save rankings.json
fs.writeFileSync('src/data/rankings.json', JSON.stringify(rankings, null, 2), 'utf8');

console.log('src/data/brands.json, src/data/plans.json, and src/data/rankings.json generated successfully!');
