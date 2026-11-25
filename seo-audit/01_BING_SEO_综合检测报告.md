# 01 BING SEO 综合检测报告 · 机场精选（jichang-jingxuan.blog）

> 审计日期：2026-11-24
> 审计对象：项目目录 `C:\Users\USERR\Desktop\博客\jichang-jingxuan.blog`，以 `dist/` 构建产物（80 个静态 HTML，构建时间晚于全部源码修改时间，为最新构建）为准，并交叉核对 `src/` 源码、`src/data/*.json`、`public/` 与 `scripts/`。
> 审计性质：**内部 SEO 审计评分**，不代表 Bing 官方评分、真实收录状态或网站权重。
> 执行限制：本次仅检测、分析与生成报告，未修改任何网站代码、文案、URL、UI、品牌资料、套餐价格、AFF 链接或内链。
> 数据边界：生产域名 `jichang-jingxuan.blog` 在审计时 **DNS 无法解析**（本机探测 8 个 URL 均返回“远程名称无法解析”），因此所有依赖线上环境的项目（HTTPS、HTTP 状态码、301、Bing 抓取/收录、Bing Webmaster Tools 数据）均标记为“无法验证”，报告中不作任何收录或排名声明。

---

## 一、博客主题自动识别（基于实际内容）

识别依据：`package.json` 描述、`README.md`、首页 `src/pages/index.astro`、`BaseLayout.astro` 的 WebSite/Organization 结构化数据、`src/data/brands.json`（18 个品牌）、`src/data/plans.json`（142 条套餐）、`src/data/articles.json`（30 篇文章）、全部 78 个可索引页面的 Title/H1/H2/正文。

| 项目 | 识别结果 |
|---|---|
| 网站名称与品牌定位 | 机场精选 · Airport Select（口号“精选好机场，每一次连接，都值得”）。定位为“机场”（订阅制代理/科学上网服务）品牌导购与套餐比价的中立内容平台，自称“非单一机场官网”，收入来源为联盟推广（AFF）返佣，已有披露页。 |
| 博客核心主题 | 机场品牌介绍、机场推荐榜单、套餐价格横向对比、按预算/场景选购指南、线路与协议科普、客户端配置常识。 |
| 目标用户群体 | 中文简体用户（`lang="zh-CN"`），以中国大陆为主：预算敏感的学生/个人用户、需要多设备的家庭与小型工作室、跨境办公/外贸人员、需要访问 ChatGPT/Claude 与 Netflix/Disney+/YouTube 4K 的用户、科学上网新手。 |
| 首页内容方向 | 六大模块：Hero（H1“2026 机场精选｜优质机场推荐与选购指南”）→ 本期精选 TOP3 → 18 个品牌卡片 → 142 条套餐价格对比表（含 10 个预算专题入口）→ 最新 6 篇文章 → 8 条 FAQ（含 FAQPage 结构化数据）。首页承担“机场推荐 / 优质机场 / 稳定机场 / 高性价比机场 / 选购指南”综合入口。 |
| 全站文章分类 | 文章页按 `category` 分为：机场推荐、性价比分析、选购指南、客户端教程、高端专线、品牌大全、套餐指南、线路科普、流量与计费、客户端/平台、故障排查、风险防范等（30 篇）。站点页面分为：首页 1、导航/聚合页 6（榜单、品牌大全、套餐指南、文章索引、横向对比、新手指南）、主题专题页 8（稳定/便宜/高性价比/高端/Clash/翻墙/AI/流媒体机场）、套餐专题页 8、品牌详情页 18、文章页 30、信任页 6、功能页 2（搜索、404，均 noindex）。 |
| 核心行业关键词 | 机场、机场推荐、机场套餐、稳定机场、便宜机场、高性价比机场、科学上网、翻墙机场、Clash 机场、IEPL/IPLC/BGP 专线、节点、流量倍率、年付/月付、不限时流量包、优惠码、ChatGPT/流媒体解锁。 |
| 用户搜索意图 | 商业调查型为主（“2026 机场推荐”“便宜机场”“XX 机场怎么样”“套餐价格对比”），其次信息型（“IEPL 和 IPLC 区别”“流量倍率是什么”“100GB 够用吗”），少量交易型（优惠码 ld888/dly888、“前往购买”）与导航型（品牌名）。 |
| 网站内容专业程度 | 品牌与套餐数据层专业度较高：18 份原始品牌资料（`src/content/airports/raw/*.md`，均标注 2026-11-23 核实日期）→ `build-data.mjs` 结构化为 brands/plans JSON，品牌页包含线路、协议、地区、客户端政策、AI/流媒体支持、优劣势、优惠券与 FAQ 12 个板块。**但文章层专业度低**：30 篇文章由 `scripts/generate-articles.mjs` 用同一模板生成，正文除标题被插入两次外完全相同，未针对各自标题展开。 |
| 当前 SEO 布局策略 | 典型“枢纽 + 矩阵”布局：首页 → 8 个场景专题页 + 8 个预算套餐页 → 18 个品牌页 → 30 篇文章；每页独立 Title/Description/Canonical、单一 H1、面包屑结构化数据、sitemap 78 URL、robots.txt、IndexNow Key 与推送脚本、BingSiteAuth 占位；购买外链统一 `rel="sponsored nofollow noopener"`。策略方向正确，但“内容唯一性”与“页面意图分工”未落实。 |

---

## 二、Bing SEO 综合价值评分（内部审计评分）

| 检测项目 | 满分 | 得分 | 评分依据（实际检测结果） | 发现的问题与扣分原因 |
|---|---:|---:|---|---|
| 内容质量与原创价值 | 15 | **6** | 品牌页：数据来自 18 份一手核实资料，正文 2,270–2,910 中文字，12 个板块，品牌间相似度均值 0.41（可接受）。专题页：有独有导语与 2–3 段正文。 | **30 篇文章正文为同一模板**（`generate-articles.mjs` 第 15–113 行），仅 `${art.title}` 被插入两处；两两 8 字分片 Jaccard 相似度均值 **0.767**，435 对文章组合全部 ≥ 0.4，最高 0.893；标题承诺的问题（如“IEPL、IPLC、BGP 线路有什么区别？”）正文并未回答。8 个套餐专题页独有正文仅 100–200 字。扣 9 分。 |
| 核心关键词布局 | 15 | **10** | 20 个核心词全部在某页面 Title/H1 承接：机场推荐→首页/recommend、稳定机场→/stable-airports/、便宜机场→/cheap-airports/、高性价比→/value-airports/、Clash 机场→/clash-airports/、翻墙机场→/proxy-airports/、AI 机场→/ai-airports/、流媒体机场→/streaming-airports/、高端机场→/premium-airports/、机场排行榜→/ranking/、机场品牌大全→/airports/。18 个品牌名各有独立品牌页 Title。 | “机场推荐”在 18 个页面的 Title/H1 中出现（首页、/recommend/、/ai-airports/ 及 14 篇文章），主词承接分散；首页 Title 与 /recommend/、文章 `best-airports-2026-guide` 三者意图重叠；“优质机场”仅 3 页强承接且无独立页面。扣 5 分。 |
| 长尾关键词覆盖 | 10 | **5** | 文章与套餐页 Title 覆盖了 30 个长尾词中的 17 个（如“每月100GB机场流量够用吗”“机场月付和年付哪个更划算”“500GB与1TB”“IEPL IPLC BGP 区别”“机场跑路”“晚高峰卡顿”）；品牌页 FAQ H3 覆盖“最低价格是多少/支持 Clash 吗/能否访问 ChatGPT/流量用完怎么办”四类问答词 ×18。 | 长尾词只在标题层出现，正文不承接（文章模板化），Bing 可读到标题却读不到对应答案；“机场哪个好”“Telegram/电报”“Google/谷歌”“知乎”等高频伴随词站内 0 次；13 个长尾词仅在正文/组件中出现而无专属页面。扣 5 分。 |
| Title 与 Description | 10 | **6** | 78 个可索引页面 Title 与 Description **均唯一**（0 重复）；Title 含年份与品牌后缀“｜机场精选”；Description 普遍含核心词与品牌名。 | 13 个品牌页 Description 长度 128–181 字，且由 `lineType`/`regions` 字段直接拼接，出现“。，”双标点与内部核验备注（如 /airports/feimaoyun/ “营销资料写全 IPLC；后台节点名出现 IEPL，不应把两种标签视为独立证据。，最低月付¥25起，覆盖2026-11 账号后台样本仅见…”），不适合作为搜索摘要；24 个页面 Title 超过 32 字（最长 51 字：/clash-airports/、/streaming-airports/），Bing 结果页将截断；404 页 Description 仅 42 字（noindex，影响小）。扣 4 分。 |
| H1/H2/H3 标题结构 | 10 | **7** | 80 页均为单一 H1，0 重复 H1；品牌页 11 个 H2 + 14 个 H3 层级清晰；专题页 3 个 H2；文章页 7 个 H2 + 5 个 H3。 | 30 篇文章的 H2/H3 集合完全相同（“一、背景概述…六、资料来源…”）；首页 35 个 H3 中灵动云/暮光加速/微风网络各出现 2 次（本期精选 + 品牌网格）；8 个套餐专题页仅 1 个 H2 且无 H3；/compare/ 无 H2/H3；/airports/ 无 H2 直接到 H3。扣 3 分。 |
| Bing 抓取与索引配置 | 10 | **7** | 纯 SSG 静态 HTML（关闭 JS 仍可读正文）；78 页 canonical 自指且与 sitemap 78 条 URL 完全一致（0 缺失、0 多余、0 重复）；robots.txt 允许抓取并声明 sitemap、屏蔽 /search/；/search/ 与 /404.html 均 `noindex,follow`；IndexNow Key 文件 `7f3e8b4a2c1d9e5f8a0b3c4d5e6f7a8b.txt` 已就位且脚本可生成 78 条 URL 清单；全站 0 条站内死链；全部外链带 sponsored nofollow。 | `BingSiteAuth.xml` 仍为占位符 `PLACEHOLDER_FOR_BING_WEBMASTER_TOOLS_VERIFICATION`；域名未解析，HTTPS/状态码/301/线上 404 均无法验证；404.html 的 canonical 指向不存在的 `/404/`；全站 0 个页面有 `og:image`（`dist/og/` 为空目录）；sitemap 中 72 条 URL 的 lastmod 为硬编码的同一日期 2026-11-24（`sitemap.xml.ts` 第 6 行），更新信号失真。扣 3 分。 |
| 内部链接结构 | 10 | **6** | 页头 6 项主导航 + 页脚 21 项分类链接全站共享；首页直达 18 个品牌、10 个套餐专题、6 篇文章；品牌页含面包屑、3 个相关品牌、返回品牌大全；文章页含 4 个品牌链接、上一篇/下一篇、3 篇相关文章。 | 4 个套餐专题页（/plans/under-20-monthly/、/plans/under-30-monthly/、/plans/30-60-monthly/、/plans/large-traffic/）全站仅 **2 条入链**（首页专题芯片 + /plans/），未进入页脚；24 篇非首页文章仅 4–6 条入链；品牌页“相关品牌”固定为前三名（`[slug].astro` 第 15–17 行 `.slice(0,3)`），链接权重集中于灵动云（358 条入链）/暮光加速（283）/微风网络（205），尾部品牌仅 60–70 条；文章“延伸阅读”使用 `Math.random()` 随机选取（`[slug].astro` 第 114 行），每次构建变化；锚文本以“详情/查看详情/阅读全文/前往购买”为主，缺乏关键词锚文本；专题页之间无横向互链。扣 4 分。 |
| 页面独立性与重复内容 | 5 | **1** | 78 页 URL 唯一、canonical 自指、Title/H1 唯一。 | 正文层面重复严重：/compare/ 与 /plans/ 相似度 **0.929**（均渲染 142 行全表）；/airports/ 与 /ranking/ 0.774（均为 18 张品牌卡）；/proxy-airports/ 与 /value-airports/ 0.773；/plans/annual/ 与 /plans/under-100-yearly/ 0.767；/plans/large-traffic/ 与 /premium-airports/ 0.747；主题专题页中 80 对组合相似度 ≥ 0.4；30 篇文章互为近重复。扣 4 分。 |
| 网站性能 | 5 | **3** | 静态托管、单一 CSS 文件 16.6KB、无第三方脚本、页内脚本约 3KB、图片均为 lazy（首页）/eager（文章首图）加载并声明 `decoding="async"`。 | 首页 HTML **243KB**、/plans/ 180KB、/compare/ 176KB、/search/ 210KB（将 brands/articles/plans 三份 JSON 内联进页面脚本）、/plans/monthly/ 109KB；30 张文章封面 JPG 合计 2.0MB（单张 17–152KB），无 WebP/AVIF、无 srcset、无 width/height（存在 CLS 风险）；无法在线实测 LCP/TTFB。扣 2 分。 |
| 移动端适配 | 5 | **4** | 全站 viewport（含 viewport-fit=cover）；global.css 含 10 处响应式断点（640/768/992/1024）；移动端抽屉导航带 aria 属性；表格使用 `.table-scroll-container` 横向滚动容器。 | 142 行套餐表在移动端仍需横向滚动；未进行真机/Bing 移动友好性在线验证。扣 1 分。 |
| 网站可信度 | 5 | **3** | 具备 关于我们/精选标准与方法论/推广关系披露/联系与纠错/隐私政策/使用条款 6 个信任页；文章署名“机场精选编辑部”并有发布/更新日期；品牌页标注资料核实日期；AFF 链接全部 sponsored 标注；Organization 结构化数据。 | 联系页正文仅 412 字且无可验证联系方式（邮箱/表单）；关于页无团队/编辑身份信息；首页与 README 宣称“30 篇原创深度文章”，与模板化事实不符（对 E-E-A-T 式评估不利）；Bing 站点验证未完成；Organization 的 logo 仅为 favicon.svg。扣 2 分。 |
| **综合评分** | **100** | **58** | | |

> 评分解读：技术基建（SSG、canonical、sitemap、robots、IndexNow、noindex 控制、外链属性）达到较高完成度，是本站的优势；主要失分集中在“内容唯一性”（文章模板化、聚合页互相复制）与“Description 质量”两项，这两项也是修改成本最低、收益最明确的方向。

---

## 三、实际关键词覆盖数量

以本次审计从 Title / Description / H1–H3 / 正文 / 导航 / 品牌页 / 文章 / FAQ / 图片 ALT / 内链锚文本中提取并人工归类的 **159 个有实际搜索意义的关键词**（去重后）为基准：

| 指标 | 数量 |
|---|---:|
| 站内至少出现一次的关键词 | 155 / 159 |
| 在某页面 Title 或 H1 中获得明确承接的关键词 | 107 |
| 仅在正文/共享组件出现、无专属承接页面的关键词 | 48 |
| 站内完全未出现的关键词 | 4（机场哪个好、机场推荐 知乎、Telegram、Google） |
| 首页覆盖的关键词（任一字段） | 117 |
| 首页 Title/H1/H2/Description 层承接的关键词 | 约 20 |

完整关键词档案见 `02_全站关键词档案.md`，页面级对照见 `10_全站页面与关键词对照表.csv`。

---

## 四、存在的主要问题（按影响排序）

1. **30 篇文章正文完全模板化**（P1，影响面最大）：`scripts/generate-articles.mjs` 用同一正文生成全部文章，页面间相似度 0.77；文章 Title 承诺的长尾问题正文未作答，既是重复内容风险，也是内容-意图错配。首页、README、文章索引均宣称“原创深度文章”。
2. **聚合页互相复制**（P1）：/compare/ 与 /plans/ 几乎相同；/airports/ 与 /ranking/ 几乎相同；8 个场景专题页与 8 个套餐专题页大量复用品牌卡片与套餐表，页面独有文字过少。
3. **品牌页 Meta Description 拼接缺陷**（P1）：13 个品牌页 Description 超长且混入内部核验备注与“。，”标点，直接影响 Bing 摘要展示与点击率。
4. **Bing 验证与线上环境未就绪**（P0 前置项）：BingSiteAuth.xml 为占位符，域名未解析；在此状态下 IndexNow 推送与 sitemap 提交均无法生效，所有收录相关项目无法验证。
5. **关键词内部竞争**（P1）：首页 / /recommend/ / 文章 best-airports-2026-guide 三者争夺“2026 机场推荐”；8 组“专题页 vs 同名文章”Title 几乎一致（详见 05 报告）。
6. **内链权重分配失衡**（P2）：4 个套餐专题页仅 2 条入链；相关品牌固定为前三名；相关文章随机；锚文本泛化。
7. **技术细节**（P2/P3）：文章目录锚点失效（H2 的 id 含“、”而 TOC 链接不含）；404 页 canonical 指向 /404/；0 个 og:image；sitemap lastmod 硬编码；榜单页“NO. 010/011…”序号格式错误；首页/套餐页 HTML 体积偏大；图片无尺寸属性与现代格式。

---

## 五、重点保护页面（修改时必须保留 Title 定位、URL、AFF 链接与现有内链）

| 页面 | 原因 |
|---|---|
| `/` | 全站权重入口，承接“机场推荐/优质机场/稳定机场/高性价比机场”，316 条站内入链 |
| `/airports/lingdongyun/` | 排名第一品牌页，358 条入链，指定购买链接 `https://varnexa.lingdongaff.com/#/?code=VeMln3TT`，优惠码 ld888 |
| `/airports/dalaoyun/` | 专属购买链接 `https://a01vipaff.dalaoyunaff.com/#/?code=yN6HqG0d`，优惠码 dly888，承接“便宜机场/20 元月付”转化 |
| `/airports/twilight/`、`/airports/breezenet/` | TOP2/TOP3 品牌页，入链 283/205 |
| `/cheap-airports/`、`/stable-airports/`、`/clash-airports/` | 已有独有防坑/评估正文，分别独占“便宜机场/稳定机场/Clash 机场”核心词 |
| `/plans/`、`/ranking/`、`/airports/` | 页头主导航枢纽，入链 245/270/336 |

---

## 六、下一阶段修改建议（概要，详见 08 报告）

- **P0（上线前必做）**：替换 BingSiteAuth.xml 真实验证码；完成域名解析与 HTTPS；上线后提交 sitemap 并运行 `scripts/indexnow.mjs --submit`；修正 404 页 canonical。
- **P1**：按标题逐篇重写 30 篇文章正文（或先下线/合并，避免以模板内容首次进入 Bing 索引）；为 /compare/ 与 /plans/、/airports/ 与 /ranking/ 做意图分工或 canonical 归并；重写 18 个品牌页 Description 为 70–110 字通顺句；为首页、/recommend/ 与同名文章划定关键词分工。
- **P2**：套餐专题页补 400–800 字独有正文与 FAQ 并加入页脚/专题互链；相关品牌改为同价位/同线路推荐；相关文章改为确定性规则；锚文本关键词化；品牌页 FAQ 增加 FAQPage 结构化数据。
- **P3**：生成 og:image；图片 WebP + width/height；拆分首页套餐表（只渲染精选 20–30 行，其余交给 /plans/）；sitemap lastmod 改为真实更新时间；修复文章目录锚点与榜单序号格式。

> 以上所有建议均需站长审核后再执行；本报告不承诺任何关键词进入 Bing 首页或前三。
