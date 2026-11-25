# Airport Select MAX · 机场精选旗舰版

> **精选好机场，每一次连接，都值得。**
> 
> 官方网站：https://jichang-jingxuan.blog/
> 目标搜索引擎：Bing（必应）SEO
> 部署架构：Cloudflare Pages / GitHub SSG 静态站点生成

---

## 01｜项目概览

**机场精选（Airport Select）** 是一个专注于机场品牌介绍、优质机场推荐、套餐价格对比、性价比分析与科学上网选购指南的专业内容平台。

本项目全站采用静态网站生成（SSG）技术，在构建阶段直接输出完整 HTML 正文，即使用户关闭 JavaScript，首页、品牌介绍、套餐价格、原创文章及主要导航内容也均可正常阅读与抓取。

---

## 02｜核心技术架构

- **框架体系：** Astro v7.4.8 (Static SSG)
- **类型安全：** TypeScript 5.9+
- **样式系统：** Airport Select MAX 专属高奢杂志设计系统（CSS Custom Properties）
- **数据管理：** 统一结构化 JSON 数据（`src/data/brands.json`, `src/data/plans.json`, `src/data/articles.json`）
- **搜索引擎优化：** Bing 技术 SEO 强制标准、Sitemap 0.9、Robots.txt、IndexNow 自动提交、JSON-LD Schema
- **部署平台：** Cloudflare Pages（静态零配置秒级全球 CDN 部署）

---

## 03｜固定品牌排名与数据核对

全站严格遵循站长指定的编辑推荐展示顺序，FLYV 与浪网并列第六：

| 推荐排名 | 品牌名称 | URL Slug | 起步月付 | 起步年付 | 在售规格 | 主打线路 |
|---:|---|---|---|---|---|---|
| 1 | 灵动云 | `lingdongyun` | ¥20/月 | ¥99/年 | 9 档 | IEPL/IPLC 优化线路 + BGP 智能调度 |
| 2 | 暮光加速 | `twilight` | ¥20/月 | ¥109/年 | 9 档 | 月付专线出口 + BGP 多线智能调度 |
| 3 | 微风网络 | `breezenet` | ¥25/月 | ¥137/年 | 7 档 | 平价专线 + 轻量年付 + 不限时流量包 |
| 4 | 飞猫云 | `feimaoyun` | ¥15/月 | - | 7 档 | 高性价比月付流量方案 |
| 5 | 大佬云 | `dalaoyun` | ¥19.99/月 | ¥96/年 | 6 档 | 低价 IEPL 专线，全节点 1x 倍率不限设备 |
| 6 | FLYV | `flyv` | ¥15/月 | ¥108/年 | 9 档 | 多档弹性周期，基础与提速节点 |
| 6 | 浪网 | `wavenet` | ¥16/月 | ¥118/年 | 9 档 | 平价月付与一次性买断流量包 |
| 7 | 隐形人 | `invisible` | ¥20/月 | ¥158/年 | 9 档 | 隐私保护与多节点智能冗余切换 |
| 8 | 梯子云 | `tiziyun` | ¥20/月 | ¥168/年 | 9 档 | 大流量下载与轻办公均衡调度 |
| 9 | 无忧连接 | `wuyou` | ¥20/月 | ¥178/年 | 9 档 | 稳定长周期年付与月度周期方案 |
| 10 | Firefly | `firefly` | ¥18/月 | ¥138/年 | 6 档 | 轻量化专线网络，移动端便携优化 |
| 11 | 全球云 | `quanqiuyun` | ¥20/月 | ¥160/年 | 9 档 | 全球多区域节点覆盖 |
| 12 | 唯兔云 | `v2yun` | ¥20/月 | ¥150/年 | 10 档 | V2Ray/VLESS 协议深度优化 |
| 13 | 灵猫网络 | `lingmao` | ¥18/月 | ¥130/年 | 6 档 | 高性价比小资精选机场 |
| 14 | 闪跃 | `flashleap` | ¥20/月 | ¥160/年 | 5 档 | 高速转发节点与低延迟路由优化 |
| 15 | 跨界云 | `kuajieyun` | ¥25/月 | ¥180/年 | 7 档 | 跨境办公与外贸大流量支持 |
| 16 | Sogo云 | `sogoyun` | ¥20/月 | ¥150/年 | 10 档 | 老牌均衡型机场服务与弹性补充包 |
| 17 | U1S1（有一说一） | `u1s1` | ¥15/月 | ¥120/年 | 6 档 | 透明定价、清晰规则的轻量加速平台 |

> **关键合规说明：**
> 1. 灵动云本项目指定购买链接为：`https://varnexa.lingdongaff.com/#/?code=VeMln3TT`
> 2. 大佬云专属购买链接为：`https://a01vipaff.dalaoyunaff.com/#/?code=yN6HqG0d`，可用 7 折优惠码：`dly888`
> 3. 灵动云可用 8 折优惠码：`ld888`
> 4. 所有购买外链严格配置 `rel="sponsored nofollow noopener"` 属性。

---

## 04｜全站页面清单 (共 80 个完整静态页面)

- **核心首页：**
  - `/` (首页，6大模块，完整正文)
- **专题中心与榜单：**
  - `/ranking/` (精选排行榜)
  - `/airports/` (机场品牌大全)
  - `/recommend/` (机场推荐指南)
  - `/stable-airports/` (稳定机场选购)
  - `/cheap-airports/` (便宜机场推荐)
  - `/value-airports/` (高性价比机场)
  - `/premium-airports/` (高端机场推荐)
  - `/clash-airports/` (Clash机场推荐)
  - `/proxy-airports/` (翻墙机场指南)
  - `/ai-airports/` (AI机场指南)
  - `/streaming-airports/` (流媒体机场指南)
  - `/compare/` (套餐横向全量对比)
- **套餐专题矩阵：**
  - `/plans/` (全部套餐总览)
  - `/plans/annual/` (年付套餐)
  - `/plans/monthly/` (月付套餐)
  - `/plans/lifetime/` (不限时流量包)
  - `/plans/under-100-yearly/` (百元以内年付)
  - `/plans/under-20-monthly/` (20元及以下月付)
  - `/plans/under-30-monthly/` (30元以内月付)
  - `/plans/30-60-monthly/` (30–60元月付)
  - `/plans/large-traffic/` (大流量套餐)
- **18 个品牌独立详情页 (/airports/{slug}/)：**
  - 覆盖全部 12 大规定结构，包含完整在售套餐表格、客户端与设备兼容、AI/流媒体支持说明、品牌优势与局限、品牌专属 5-8 个 FAQ。
- **30 篇原创深度 SEO 文章 (/articles/{slug}/) + 文章归档 (/articles/)：**
  - 单篇 1500–2500 字，包含完整 TOC、正文 H2/H3、套餐卡片与站内互链。
- **网站信任与辅助页面：**
  - `/about/` (关于我们)
  - `/methodology/` (精选标准与测评逻辑)
  - `/disclosure/` (推广关系披露)
  - `/contact/` (联系与纠错)
  - `/privacy/` (隐私政策)
  - `/terms/` (使用条款)
  - `/guides/` (新手指南)
  - `/search/` (轻量站内搜索)
  - `/404.html` (404 页面)
  - `/sitemap.xml` (动态 Sitemap)
  - `/robots.txt` (爬虫规则)

---

## 05｜本地运行与构建指南

### 本地开发预览
\`\`\`bash
# 1. 抽取并验证数据
node scripts/build-data.mjs

# 2. 启动开发服务器
node ./node_modules/astro/bin/astro.mjs dev

# 访问 http://localhost:4321
\`\`\`

### 生产环境构建
\`\`\`bash
# 执行生产构建
node ./node_modules/astro/bin/astro.mjs build

# 执行全站验证测试
node scripts/validate-site.mjs
\`\`\`

---

## 06｜IndexNow 与 Bing Webmaster 提交流程

1. 根目录验证文件已就绪：`public/7f3e8b4a2c1d9e5f8a0b3c4d5e6f7a8b.txt`
2. BingSiteAuth 占位符已预留：`public/BingSiteAuth.xml`
3. 提交全站 78 个正式 Canonical URL 至 IndexNow：
\`\`\`bash
node scripts/indexnow.mjs --submit
\`\`\`
