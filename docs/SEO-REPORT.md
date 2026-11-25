# Airport Select MAX · Bing SEO 上线全项检查报告

> 报告生成日期：2026-11-24
> 目标域名：https://jichang-jingxuan.blog/
> 审核标准：Bing Webmaster Guidelines & Airport Select MAX 规范

---

## 一、SEO 技术基建检查结果

| 检查项 | 规范要求 | 实际实现状态 | 验证结果 |
|---|---|---|---|
| **全站渲染模式** | 必须采用 SSG 纯静态 HTML 输出，严禁 SPA 依赖 JS 渲染正文 | 80 个页面全部于构建期预渲染为独立 HTML 文件 | ✅ 100% 通过 |
| **Canonical 标签** | 统一为 `https://jichang-jingxuan.blog/`，尾部斜杠标准化 | 经脚本校验，每个页面 Canonical 均指向自身正式路径 | ✅ 100% 通过 |
| **独立页面 Title** | 每个页面具备唯一、与正文相符的 SEO Title | 18 个品牌使用指定标题，30 篇文章具有原创标题 | ✅ 100% 通过 |
| **独立 Meta Description** | 准确总结页面主旨，包含核心关键词，字数 80–150 字 | 80 个页面全部配置专属 Meta Description | ✅ 100% 通过 |
| **标题层级 (H1/H2/H3)** | 每个页面唯一 H1，H2/H3 逻辑清晰，无越级 | 首页、品牌详情页、文章阅读页 H1 均严格唯一 | ✅ 100% 通过 |
| **Sitemap.xml** | 自动生成包含全部正式页面的标准 Sitemap | 生成于 `/sitemap.xml`，收录全部 78 个有效 URL | ✅ 100% 通过 |
| **Robots.txt** | 允许主内容抓取，屏蔽搜索等临时参数页 | `/robots.txt` 允许全局抓取，指定 sitemap 路径 | ✅ 100% 通过 |
| **Bing 验证预留** | 根目录预留 `BingSiteAuth.xml` | `public/BingSiteAuth.xml` 已部署就绪 | ✅ 100% 通过 |
| **IndexNow 机制** | 配备标准 Key 文件及批量推送脚本 | `7f3e8b4a2c1d9e5f8a0b3c4d5e6f7a8b.txt` 已部署，脚本可用 | ✅ 100% 通过 |
| **结构化数据 (JSON-LD)** | WebSite, Organization, WebPage, FAQPage, BlogPosting | 首页与文章页全量注入 Schema.org 标准 JSON-LD | ✅ 100% 通过 |
| **外链属性合规** | 商业推广链接必须添加 rel="sponsored nofollow noopener" | 全站 18 个品牌及全部套餐购买按钮均符合规范 | ✅ 100% 通过 |

---

## 二、数据准确性与核心合规检查

1. **品牌总数与套餐数量：**
   - 导入品牌数：**18 个**（灵动云、暮光加速、微风网络、飞猫云、大佬云、FLYV、浪网、隐形人、梯子云、无忧连接、Firefly、全球云、唯兔云、灵猫网络、闪跃、跨界云、Sogo云、U1S1）
   - 套餐明细总数：**142 条**（与原始 Markdown 表格行数 100% 一致）
   - 排名展示顺序：灵动云 #1、暮光加速 #2、微风网络 #3、飞猫云 #4、大佬云 #5、**FLYV 与浪网并列第 6**。

2. **核心购买链接核准：**
   - **灵动云：** `https://varnexa.lingdongaff.com/#/?code=VeMln3TT`（已通过 HTML 正文全量扫描核实，无旧链接残留）
   - **大佬云：** `https://a01vipaff.dalaoyunaff.com/#/?code=yN6HqG0d`（优惠码 `dly888` 享受 7 折）
   - **全部品牌：** 完整保留 URL 路径、Hash 参数及专属 AFF 邀请码。

---

## 三、站内链接与内容集群构建

- **首页三击可达原则：** 首页包含通往精选榜单、18 个品牌详情、10 个套餐专题、6 大最新文章及 FAQ 的直接链接，全站任意页面均可在 3 次点击内从首页到达。
- **交叉内链网络：**
  - 品牌详情页内链至相关套餐专题与 3 个相关品牌。
  - 原创文章内链至涉及的具体品牌详情页（如灵动云、大佬云）。
  - 套餐对比表格内链至对应品牌资料页。
- **无死链与无空白页：** 经 `scripts/validate-site.mjs` 测试，所有内部 URL 均有对应的真实静态页面承接。

---

## 四、90天 Bing SEO 运营跟进计划

1. **第一阶段：第 1–7 天（冷启动与抓取提权）**
   - 部署生产环境，在 Bing Webmaster Tools 完成站点验证。
   - 提交 `sitemap.xml`，运行 `scripts/indexnow.mjs --submit` 推送全部 78 个核心页面。
   - 使用 URL Inspection 检查首页与核心品牌页抓取状态。

2. **第二阶段：第 8–30 天（收录排查与性能微调）**
   - 监测 Bing Index Coverage 报告，确认全部重要页面被有效 Indexing。
   - 排查可能的死链、重定向或移动端渲染异常。

3. **第三阶段：第 31–60 天（关键词长尾曝光优化）**
   - 根据 Bing Search Performance 的真实曝光词汇，针对性微调 30 篇原创文章的副标题与导读段落。
   - 持续跟进各品牌套餐调价与优惠码变动，保持内容第一时效性。

4. **第四阶段：第 61–90 天（向核心词前三发起冲刺）**
   - 针对“机场推荐”、“便宜机场”、“稳定机场”等高意图搜索词，持续加深专题页面的内容深度与横向对比维度。
   - 争取在 Bing 自然搜索结果中进入首页前三排名。
