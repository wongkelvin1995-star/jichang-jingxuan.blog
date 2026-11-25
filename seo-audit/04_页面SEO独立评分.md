# 04 页面 SEO 独立评分（内部审计评分）

> 审计日期：2026-11-24 ｜ 评分对象：dist/ 构建产物中 78 个可索引页面（/search/ 与 /404.html 为 noindex，不计分）
> 说明：本评分为内部 SEO 审计评分（100 分制），依据页面 Title/Description/标题结构/正文独有内容量/内链/重复风险综合给出，不代表 Bing 官方评分或真实权重。

## 1. 评分汇总

| 页面类型 | 页面数 | 平均分 | 最高 | 最低 |
|---|---:|---:|---:|---:|
| 首页 | 1 | 72.0 | 72 | 72 |
| 信任页 | 6 | 49.0 | 55 | 42 |
| 主题专题页 | 9 | 59.6 | 64 | 56 |
| 导航/聚合页 | 6 | 55.0 | 62 | 45 |
| 品牌详情页 | 18 | 62.4 | 70 | 58 |
| 文章页 | 30 | 38.8 | 42 | 38 |
| 套餐专题页 | 8 | 49.8 | 54 | 46 |
| **全站** | 78 | 50.2 | 72 | 38 |

## 2. 逐页评分表

| 页面名称 | 实际URL | SEO评分 | 核心关键词（Title/H1 命中） | 长尾/问答关键词（Title/H1/H2/H3/Description 命中） | 收录配置 | 重复内容风险 | 优化建议 |
|---|---|---:|---|---|---|---|---|
| 2026 机场精选｜优质机场推荐与选购指南 | / | 72 | 机场推荐、优质机场、稳定机场、高性价比机场、机场选购指南 | 机场月付和年付、低预算机场、怎么选、有什么区别、支持Clash吗、流量用完怎么办 | index,follow；canonical 自指；sitemap 已收录 | 低（首页 H3 品牌名重复出现两次） | Title 33 字略长；精简首页链接总量（534 条）与 HTML 体积（243KB）；与 /recommend/ 的“机场推荐”意图需分工 |
| 2026 机场品牌大全 | /airports/ | 62 | 机场品牌、机场品牌大全 | — | index,follow；canonical 自指；sitemap 已收录 | 高（与 /ranking/ 相似度 0.77） | 增加品牌横向对比表与分类导览文字，使其成为“品牌大全”而非榜单复制 |
| 2026 机场精选文章专栏 | /articles/ | 58 | — | 每月100GB流量够用吗、500GB与1TB套餐、机场月付和年付、IEPL IPLC BGP 区别、机场流量倍率、机场跑路 | index,follow；canonical 自指；sitemap 已收录 | 低 | 30 个 H2 全为文章标题，建议加入分类导览段落 |
| 2026 机场套餐横向全量对比 | /compare/ | 45 | 机场套餐 | — | index,follow；canonical 自指；sitemap 已收录 | 极高（与 /plans/ 相似度 0.93，均为 142 行套餐全表） | 二选一：保留 /plans/ 为套餐总指南，/compare/ 改为交互对比工具并 canonical 指向 /plans/，或改为差异化维度 |
| 2026 科学上网新手入门与配置指南 | /guides/ | 50 | 科学上网 | 机场流量倍率、新手第一次购买机场、官方客户端、多设备、有什么区别、需要注意什么 | index,follow；canonical 自指；sitemap 已收录 | 低 | 正文仅约 600 字且 H2 仅 1 个；可扩展为新手教程中心并承接“科学上网新手”长尾 |
| 2026 机场套餐选购总指南 | /plans/ | 55 | 机场套餐 | — | index,follow；canonical 自指；sitemap 已收录 | 极高（与 /compare/ 相似度 0.93） | 保留为套餐总览主页面；增加各专题导览说明文字 |
| 2026 机场精选排行榜 | /ranking/ | 60 | 机场品牌、机场排行榜 | — | index,follow；canonical 自指；sitemap 已收录 | 高（与 /airports/ 正文相似度 0.77，均为 18 张品牌卡片） | 补充榜单独有评分维度与排名理由正文；修复“NO. 010”序号显示；与 /airports/ 做意图分工 |
| 2026 机场推荐与选购决策指南 | /recommend/ | 58 | 机场推荐、优质机场、机场选购指南、2026机场推荐 | 机场流量倍率、晚高峰卡顿、怎么选 | index,follow；canonical 自指；sitemap 已收录 | 中（Title 与文章 best-airports-2026-guide 几乎相同，与首页意图重叠） | 明确为“选购决策指南”，Title 去掉与文章重复的问句，正文扩充五大法则细节 |
| 2026 AI 生产力工具机场推荐 | /ai-airports/ | 56 | 机场推荐、AI机场 | ChatGPT机场、新加坡节点、日本节点、为什么、能否访问ChatGPT | index,follow；canonical 自指；sitemap 已收录 | 中（正文约 1300 字含卡片） | 补充各品牌 ChatGPT/Claude 支持矩阵与节点地区建议 |
| 2026 便宜机场推荐与低预算指南 | /cheap-airports/ | 64 | 机场推荐、便宜机场、机场套餐、平价机场 | 低预算机场、学生机场 | index,follow；canonical 自指；sitemap 已收录 | 中 | 已有防坑正文，建议补第三条守则与价格区间对比表；承接“便宜机场”主词 |
| 2026 Clash 机场推荐与订阅指南 | /clash-airports/ | 62 | 机场推荐、Clash机场 | Clash订阅、为什么、客户端配置、Clash Verge、Mihomo、订阅导入 | index,follow；canonical 自指；sitemap 已收录 | 中 | Title 51 字过长；补充 18 品牌 Clash 支持矩阵表（数据已在 brands.json） |
| 2026 高端机场推荐与定制专线指南 | /premium-airports/ | 60 | 机场推荐、高端机场 | 独享IP、企业级专线、跨境办公 | index,follow；canonical 自指；sitemap 已收录 | 中（与 /plans/large-traffic/ 相似度 0.75） | 扩充高端定制套餐对比与适用场景正文 |
| 2026 翻墙机场指南与科学上网常识 | /proxy-airports/ | 60 | 机场推荐、科学上网、翻墙机场 | — | index,follow；canonical 自指；sitemap 已收录 | 中 | Title 39 字；补充入门常识正文，减少与 value/clash 页共享卡片比例 |
| 2026 稳定机场选购指南 | /stable-airports/ | 60 | 稳定机场、机场选购指南、长期稳定 | — | index,follow；canonical 自指；sitemap 已收录 | 中（独有正文约 500 字，其余为共享品牌卡与套餐表） | 扩充稳定性评估方法与各品牌稳定性对比表；承接“稳定机场”主词 |
| 2026 流媒体机场选购指南 | /streaming-airports/ | 58 | 机场推荐、机场选购指南、流媒体机场 | YouTube 4K机场、Netflix机场、Disney+ | index,follow；canonical 自指；sitemap 已收录 | 中 | Title 51 字过长；补充流媒体解锁支持矩阵 |
| 2026 高性价比机场选购指南 | /value-airports/ | 58 | 机场推荐、高性价比机场、机场选购指南 | — | index,follow；canonical 自指；sitemap 已收录 | 中（与 /proxy-airports/ 相似度 0.77） | 增加每 GB 成本计算表（真实数据可由 plans.json 生成） |
| 2026 每月 30–60 元机场推荐与对比 | /plans/30-60-monthly/ | 46 | 机场推荐、30–60元月付 | 多设备、是什么意思、为什么 | index,follow；canonical 自指；sitemap 已收录 | 中（套餐表为共享组件，独有文字极少） | 仅 2 条站内入链；Title 40 字；建议每页补 400–800 字选购说明与 FAQ |
| 2026 年付机场套餐精选与对比 | /plans/annual/ | 52 | 机场套餐、年付机场套餐、折算单月 | 需要注意什么 | index,follow；canonical 自指；sitemap 已收录 | 中（套餐表为共享组件，独有文字极少） | 仅 1 个 H2 与一段说明，正文约 150 字独有内容；建议每页补 400–800 字选购说明与 FAQ |
| 2026 大流量机场套餐选购指南 | /plans/large-traffic/ | 50 | 机场套餐、机场选购指南、大流量机场套餐 | 500GB与1TB套餐 | index,follow；canonical 自指；sitemap 已收录 | 中（套餐表为共享组件，独有文字极少） | 仅 2 条站内入链；Title 42 字；建议每页补 400–800 字选购说明与 FAQ |
| 2026 不限时流量机场套餐推荐 | /plans/lifetime/ | 54 | 机场套餐、不限时流量包 | 适合哪些用户、流量用完怎么办 | index,follow；canonical 自指；sitemap 已收录 | 中（套餐表为共享组件，独有文字极少） | 仅 1 个 H2；补充各品牌不限时包对比表；建议每页补 400–800 字选购说明与 FAQ |
| 2026 优质月付机场套餐精选 | /plans/monthly/ | 52 | 机场套餐、月付机场套餐 | 机场跑路、有哪些风险、为什么、新手入门 | index,follow；canonical 自指；sitemap 已收录 | 中（套餐表为共享组件，独有文字极少） | 仅 1 个 H2；HTML 109KB；建议每页补 400–800 字选购说明与 FAQ |
| 2026 百元以内年付机场精选 | /plans/under-100-yearly/ | 50 | 机场套餐、年付机场套餐、百元以内年付 | — | index,follow；canonical 自指；sitemap 已收录 | 中（套餐表为共享组件，独有文字极少） | 仅 1 个 H2；与 /plans/annual/ 相似度 0.77；建议每页补 400–800 字选购说明与 FAQ |
| 2026 每月 20 元及以下机场套餐推荐 | /plans/under-20-monthly/ | 46 | 机场套餐、20元以内月付 | 怎么选 | index,follow；canonical 自指；sitemap 已收录 | 中（套餐表为共享组件，独有文字极少） | 仅 2 条站内入链；正文独有约 100 字；建议每页补 400–800 字选购说明与 FAQ |
| 2026 每月 30 元以内机场套餐推荐 | /plans/under-30-monthly/ | 48 | 机场套餐、30元以内月付 | — | index,follow；canonical 自指；sitemap 已收录 | 中（套餐表为共享组件，独有文字极少） | 仅 2 条站内入链；与 under-20 相似度 0.71；建议每页补 400–800 字选购说明与 FAQ |
| 微风网络 | /airports/breezenet/ | 66 | 套餐价格对比、机场怎么样、微风网络 | 多设备、香港节点、新加坡节点、日本节点、美国节点、台湾节点 | index,follow；canonical 自指；sitemap 已收录 | 中（页面结构模板化，品牌间相似度均值 0.41；FAQ 六问模板化） | Meta Description 107 字且含拼接标点/内部核验备注，需改写为 70–110 字的通顺描述；为品牌 FAQ 增加 FAQPage 结构化数据；“相关品牌”固定为前三名，建议改为同价位/同线路品牌 |
| 大佬云 | /airports/dalaoyun/ | 68 | 机场怎么样、大佬云 | 机场流量倍率、多设备、香港节点、新加坡节点、日本节点、美国节点 | index,follow；canonical 自指；sitemap 已收录 | 中（页面结构模板化，品牌间相似度均值 0.41；FAQ 六问模板化） | Meta Description 159 字且含拼接标点/内部核验备注，需改写为 70–110 字的通顺描述；为品牌 FAQ 增加 FAQPage 结构化数据；“相关品牌”固定为前三名，建议改为同价位/同线路品牌 |
| 飞猫云 | /airports/feimaoyun/ | 58 | 飞猫云、年付机场套餐 | 多设备、香港节点、新加坡节点、日本节点、美国节点、台湾节点 | index,follow；canonical 自指；sitemap 已收录 | 中（页面结构模板化，品牌间相似度均值 0.41；FAQ 六问模板化） | Meta Description 169 字且含拼接标点/内部核验备注，需改写为 70–110 字的通顺描述；为品牌 FAQ 增加 FAQPage 结构化数据；“相关品牌”固定为前三名，建议改为同价位/同线路品牌 |
| Firefly | /airports/firefly/ | 60 | 机场怎么样、Firefly | 多设备、香港节点、新加坡节点、日本节点、美国节点、台湾节点 | index,follow；canonical 自指；sitemap 已收录 | 中（页面结构模板化，品牌间相似度均值 0.41；FAQ 六问模板化） | Meta Description 119 字且含拼接标点/内部核验备注，需改写为 70–110 字的通顺描述；为品牌 FAQ 增加 FAQPage 结构化数据；“相关品牌”固定为前三名，建议改为同价位/同线路品牌 |
| 闪跃 | /airports/flashleap/ | 60 | 机场怎么样、闪跃 | 多设备、香港节点、新加坡节点、日本节点、美国节点、台湾节点 | index,follow；canonical 自指；sitemap 已收录 | 中（页面结构模板化，品牌间相似度均值 0.41；FAQ 六问模板化） | Meta Description 112 字且含拼接标点/内部核验备注，需改写为 70–110 字的通顺描述；为品牌 FAQ 增加 FAQPage 结构化数据；“相关品牌”固定为前三名，建议改为同价位/同线路品牌 |
| FLYV | /airports/flyv/ | 62 | FLYV | 多设备、香港节点、新加坡节点、日本节点、美国节点、台湾节点 | index,follow；canonical 自指；sitemap 已收录 | 中（页面结构模板化，品牌间相似度均值 0.41；FAQ 六问模板化） | Meta Description 128 字且含拼接标点/内部核验备注，需改写为 70–110 字的通顺描述；为品牌 FAQ 增加 FAQPage 结构化数据；“相关品牌”固定为前三名，建议改为同价位/同线路品牌 |
| 隐形人 | /airports/invisible/ | 62 | 隐形人 | 多设备、香港节点、新加坡节点、日本节点、美国节点、台湾节点 | index,follow；canonical 自指；sitemap 已收录 | 中（页面结构模板化，品牌间相似度均值 0.41；FAQ 六问模板化） | Meta Description 149 字且含拼接标点/内部核验备注，需改写为 70–110 字的通顺描述；为品牌 FAQ 增加 FAQPage 结构化数据；“相关品牌”固定为前三名，建议改为同价位/同线路品牌 |
| 跨界云 | /airports/kuajieyun/ | 60 | 跨界云 | 多设备、香港节点、新加坡节点、日本节点、美国节点、台湾节点 | index,follow；canonical 自指；sitemap 已收录 | 中（页面结构模板化，品牌间相似度均值 0.41；FAQ 六问模板化） | Meta Description 106 字且含拼接标点/内部核验备注，需改写为 70–110 字的通顺描述；为品牌 FAQ 增加 FAQPage 结构化数据；“相关品牌”固定为前三名，建议改为同价位/同线路品牌 |
| 灵动云 | /airports/lingdongyun/ | 70 | 机场怎么样、灵动云 | 独享IP、多设备、香港节点、新加坡节点、日本节点、美国节点 | index,follow；canonical 自指；sitemap 已收录 | 中（页面结构模板化，品牌间相似度均值 0.41；FAQ 六问模板化） | Meta Description 155 字且含拼接标点/内部核验备注，需改写为 70–110 字的通顺描述；为品牌 FAQ 增加 FAQPage 结构化数据；“相关品牌”固定为前三名，建议改为同价位/同线路品牌 |
| 灵猫网络 | /airports/lingmao/ | 60 | 灵猫网络、月付机场套餐 | 多设备、香港节点、新加坡节点、日本节点、美国节点、台湾节点 | index,follow；canonical 自指；sitemap 已收录 | 中（页面结构模板化，品牌间相似度均值 0.41；FAQ 六问模板化） | Meta Description 107 字且含拼接标点/内部核验备注，需改写为 70–110 字的通顺描述；为品牌 FAQ 增加 FAQPage 结构化数据；“相关品牌”固定为前三名，建议改为同价位/同线路品牌 |
| 全球云 | /airports/quanqiuyun/ | 60 | 全球云 | 多设备、香港节点、新加坡节点、日本节点、美国节点、台湾节点 | index,follow；canonical 自指；sitemap 已收录 | 中（页面结构模板化，品牌间相似度均值 0.41；FAQ 六问模板化） | Meta Description 171 字且含拼接标点/内部核验备注，需改写为 70–110 字的通顺描述；为品牌 FAQ 增加 FAQPage 结构化数据；“相关品牌”固定为前三名，建议改为同价位/同线路品牌 |
| Sogo云 | /airports/sogoyun/ | 62 | 机场怎么样、Sogo云 | 多设备、香港节点、新加坡节点、日本节点、美国节点、台湾节点 | index,follow；canonical 自指；sitemap 已收录 | 中（页面结构模板化，品牌间相似度均值 0.41；FAQ 六问模板化） | Meta Description 152 字且含拼接标点/内部核验备注，需改写为 70–110 字的通顺描述；为品牌 FAQ 增加 FAQPage 结构化数据；“相关品牌”固定为前三名，建议改为同价位/同线路品牌 |
| 梯子云 | /airports/tiziyun/ | 62 | 机场怎么样、梯子云、年付机场套餐、不限时流量包 | 企业级专线、多设备、香港节点、新加坡节点、日本节点、美国节点 | index,follow；canonical 自指；sitemap 已收录 | 中（页面结构模板化，品牌间相似度均值 0.41；FAQ 六问模板化） | Meta Description 162 字且含拼接标点/内部核验备注，需改写为 70–110 字的通顺描述；为品牌 FAQ 增加 FAQPage 结构化数据；“相关品牌”固定为前三名，建议改为同价位/同线路品牌 |
| 暮光加速 | /airports/twilight/ | 68 | 暮光加速 | 多设备、香港节点、新加坡节点、日本节点、美国节点、台湾节点 | index,follow；canonical 自指；sitemap 已收录 | 中（页面结构模板化，品牌间相似度均值 0.41；FAQ 六问模板化） | Meta Description 181 字且含拼接标点/内部核验备注，需改写为 70–110 字的通顺描述；为品牌 FAQ 增加 FAQPage 结构化数据；“相关品牌”固定为前三名，建议改为同价位/同线路品牌 |
| U1S1（有一说一） | /airports/u1s1/ | 60 | U1S1 | 多设备、香港节点、新加坡节点、日本节点、美国节点、台湾节点 | index,follow；canonical 自指；sitemap 已收录 | 中（页面结构模板化，品牌间相似度均值 0.41；FAQ 六问模板化） | Meta Description 147 字且含拼接标点/内部核验备注，需改写为 70–110 字的通顺描述；为品牌 FAQ 增加 FAQPage 结构化数据；“相关品牌”固定为前三名，建议改为同价位/同线路品牌 |
| 唯兔云 | /airports/v2yun/ | 62 | 机场怎么样、唯兔云 | 多设备、备用机场、香港节点、新加坡节点、日本节点、美国节点 | index,follow；canonical 自指；sitemap 已收录 | 中（页面结构模板化，品牌间相似度均值 0.41；FAQ 六问模板化） | Meta Description 158 字且含拼接标点/内部核验备注，需改写为 70–110 字的通顺描述；为品牌 FAQ 增加 FAQPage 结构化数据；“相关品牌”固定为前三名，建议改为同价位/同线路品牌 |
| 浪网 | /airports/wavenet/ | 62 | 机场怎么样、浪网 | 多设备、香港节点、新加坡节点、日本节点、美国节点、台湾节点 | index,follow；canonical 自指；sitemap 已收录 | 中（页面结构模板化，品牌间相似度均值 0.41；FAQ 六问模板化） | Meta Description 162 字且含拼接标点/内部核验备注，需改写为 70–110 字的通顺描述；为品牌 FAQ 增加 FAQPage 结构化数据；“相关品牌”固定为前三名，建议改为同价位/同线路品牌 |
| 无忧连接 | /airports/wuyou/ | 62 | 无忧连接 | 多设备、香港节点、新加坡节点、日本节点、美国节点、台湾节点 | index,follow；canonical 自指；sitemap 已收录 | 中（页面结构模板化，品牌间相似度均值 0.41；FAQ 六问模板化） | Meta Description 145 字且含拼接标点/内部核验备注，需改写为 70–110 字的通顺描述；为品牌 FAQ 增加 FAQPage 结构化数据；“相关品牌”固定为前三名，建议改为同价位/同线路品牌 |
| 机场精选：18个热门机场品牌选购参考 | /articles/18-brands-airport-selection-reference/ | 38 | 机场品牌 | 机场流量倍率、多设备 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 每月30–60元机场推荐与流量对比 | /articles/30-to-60-monthly-airports-comparison/ | 38 | 机场推荐、30–60元月付 | 机场流量倍率、多设备、跨境办公、家庭共享 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 每月500GB与1TB机场套餐应该怎么选？ | /articles/500gb-vs-1tb-large-traffic-plans/ | 38 | 机场套餐 | 500GB与1TB套餐、机场流量倍率、多设备、怎么选 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 机场跑路有哪些风险？如何降低长期购买风险？ | /articles/airport-scam-risks-and-protection/ | 38 | — | 机场流量倍率、机场跑路、多设备、备用机场、有哪些风险 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 新手第一次购买机场需要注意什么？ | /articles/beginner-first-time-airport-purchase/ | 38 | — | 机场流量倍率、新手第一次购买机场、多设备、需要注意什么、下载客户端 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 2026机场推荐：如何选择适合自己的优质机场？ | /articles/best-airports-2026-guide/ | 42 | 机场推荐、优质机场、2026机场推荐 | 机场流量倍率、多设备、怎么选 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 2026便宜机场推荐：低预算机场选购指南 | /articles/cheap-airports-selection-tips/ | 42 | 机场推荐、便宜机场、机场选购指南 | 机场流量倍率、多设备、低预算机场 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 2026 Clash机场推荐与客户端兼容指南 | /articles/clash-airports-compatibility-guide/ | 42 | 机场推荐、Clash机场 | 机场流量倍率、Clash订阅、多设备、为什么、支持Clash吗、Clash Verge | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 机场优惠券使用指南与购买注意事项 | /articles/coupon-codes-and-discounts-guide/ | 38 | 机场优惠券 | 机场流量倍率、多设备、需要注意什么 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 机场晚高峰卡顿的原因及排查建议 | /articles/evening-peak-lag-troubleshooting/ | 38 | — | 机场流量倍率、晚高峰卡顿、多设备、分流规则、排查 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 2026高性价比机场推荐与套餐价格对比 | /articles/high-value-airports-comparison/ | 42 | 机场推荐、高性价比机场、套餐价格对比 | 机场流量倍率、多设备 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 如何选择适合 ChatGPT 使用的机场？ | /articles/how-to-choose-chatgpt-ai-airports/ | 38 | — | 机场流量倍率、ChatGPT机场、多设备、怎么选、分流规则 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 如何判断一个机场品牌是否适合长期购买？ | /articles/how-to-judge-long-term-airports/ | 38 | 机场品牌 | 机场流量倍率、机场跑路、多设备、有哪些风险 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| IEPL、IPLC、BGP线路有什么区别？ | /articles/iepl-iplc-bgp-lines-difference/ | 38 | — | IEPL IPLC BGP 区别、机场流量倍率、多设备、有什么区别、是什么意思 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 每月100GB机场流量够用吗？ | /articles/is-100gb-monthly-traffic-enough/ | 38 | — | 每月100GB流量够用吗、机场流量倍率、多设备、够用吗 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 不限时流量机场套餐适合哪些用户？ | /articles/lifetime-traffic-packs-analysis/ | 38 | 机场套餐、不限时流量包 | 机场流量倍率、多设备、适合哪些用户、流量用完怎么办 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 机场月付和年付哪个更加划算？ | /articles/monthly-versus-annual-billing-choice/ | 38 | — | 机场月付和年付、机场流量倍率、多设备、哪个更划算、有哪些风险 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| Netflix 与 Disney+ 流媒体机场选购指南 | /articles/netflix-disney-streaming-unlock-guide/ | 38 | 机场选购指南、流媒体机场 | 机场流量倍率、Netflix机场、Disney+、多设备 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 官方客户端与 Clash 第三方客户端有什么区别？ | /articles/official-client-vs-clash-third-party/ | 38 | — | 机场流量倍率、官方客户端、多设备、有什么区别、客户端配置、分流规则 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 2026热门机场品牌大全与服务特点介绍 | /articles/popular-airport-brands-overview/ | 38 | 机场品牌、机场品牌大全 | 机场流量倍率、多设备 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 2026高端机场推荐：高价套餐值得购买吗？ | /articles/premium-airports-worth-buying/ | 38 | 机场推荐、高端机场 | 机场流量倍率、独享IP、多设备、值得购买吗 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 2026翻墙机场推荐与科学上网选购指南 | /articles/proxy-airports-comprehensive-guide/ | 42 | 机场推荐、科学上网、翻墙机场 | 机场流量倍率、多设备 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 2026稳定机场推荐：长期使用应该关注哪些因素？ | /articles/stable-airports-evaluation-guide/ | 42 | 机场推荐、稳定机场、长期稳定 | 机场流量倍率、多设备、跨境办公、有哪些风险 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 机场流量倍率是什么意思？购买前必看 | /articles/traffic-multiplier-explained/ | 38 | — | 机场流量倍率、多设备、是什么意思、为什么 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 百元以内年付机场有哪些？低预算套餐对比 | /articles/under-100-yearly-airports-comparison/ | 38 | 百元以内年付 | 机场流量倍率、多设备、低预算机场 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 每月20元及以下的机场套餐怎么选？ | /articles/under-20-monthly-airports-guide/ | 38 | 机场套餐、20元以内月付 | 机场流量倍率、多设备、怎么选 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 每月30元以内机场套餐选购指南 | /articles/under-30-monthly-airports-guide/ | 38 | 机场套餐、机场选购指南、30元以内月付 | 机场流量倍率、多设备 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| VLESS、Shadowsocks及常见代理协议介绍 | /articles/vless-shadowsocks-proxy-protocols/ | 38 | — | 机场流量倍率、多设备 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| Windows、安卓及 iOS 用户如何选择机场？ | /articles/windows-android-ios-setup-guide/ | 38 | — | 机场流量倍率、多设备、怎么选、Windows客户端、iOS客户端、安卓客户端 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 如何选择适合 YouTube 4K 视频的机场？ | /articles/youtube-4k-streaming-airport-selection/ | 38 | — | 机场流量倍率、YouTube 4K机场、多设备、怎么选 | index,follow；canonical 自指；sitemap 已收录 | 极高（30 篇正文由同一模板生成，仅标题替换，两两相似度均值 0.77） | 需按标题重写正文使其真正回答标题问题；目录锚点失效需修复；增加 FAQPage/段落级独有信息 |
| 关于机场精选 · Airport Select | /about/ | 55 | — | — | index,follow；canonical 自指；sitemap 已收录 | 低 | 补充团队/编辑信息与可验证联系方式以提升可信度 |
| 联系我们与数据勘误通道 | /contact/ | 42 | — | — | index,follow；canonical 自指；sitemap 已收录 | 低 | 正文仅 412 字，缺少可验证联系邮箱/表单 |
| 商业推广与联盟关系公开披露 | /disclosure/ | 52 | — | — | index,follow；canonical 自指；sitemap 已收录 | 低 | 合规页，保持即可 |
| 机场精选标准与评估方法论 | /methodology/ | 55 | — | — | index,follow；canonical 自指；sitemap 已收录 | 低 | 可加入评分权重表以支撑榜单权威性 |
| 机场精选隐私保护政策 | /privacy/ | 45 | — | — | index,follow；canonical 自指；sitemap 已收录 | 低 | 合规页 |
| 机场精选网站使用条款 | /terms/ | 45 | — | — | index,follow；canonical 自指；sitemap 已收录 | 低 | 合规页 |

## 3. 特别标记

### 高价值页面（26）

- /
- /airports/
- /articles/
- /plans/
- /ranking/
- /cheap-airports/
- /clash-airports/
- /stable-airports/
- /airports/breezenet/
- /airports/dalaoyun/
- /airports/feimaoyun/
- /airports/firefly/
- …共 26 个（）

### 重点保护页面（5）

- /
- /cheap-airports/
- /airports/dalaoyun/
- /airports/lingdongyun/
- /airports/twilight/

### 内容不足页面（11）

- /guides/
- /ai-airports/
- /plans/30-60-monthly/
- /plans/annual/
- /plans/large-traffic/
- /plans/lifetime/
- /plans/monthly/
- /plans/under-100-yearly/
- /plans/under-20-monthly/
- /plans/under-30-monthly/
- /contact/

### 重复内容页面（34）

- /airports/
- /compare/
- /plans/
- /ranking/
- /articles/18-brands-airport-selection-reference/
- /articles/30-to-60-monthly-airports-comparison/
- /articles/500gb-vs-1tb-large-traffic-plans/
- /articles/airport-scam-risks-and-protection/
- /articles/beginner-first-time-airport-purchase/
- /articles/best-airports-2026-guide/
- /articles/cheap-airports-selection-tips/
- /articles/clash-airports-compatibility-guide/
- …共 34 个（含全部 30 篇文章页）

### 技术错误页面（30）

- /articles/18-brands-airport-selection-reference/
- /articles/30-to-60-monthly-airports-comparison/
- /articles/500gb-vs-1tb-large-traffic-plans/
- /articles/airport-scam-risks-and-protection/
- /articles/beginner-first-time-airport-purchase/
- /articles/best-airports-2026-guide/
- /articles/cheap-airports-selection-tips/
- /articles/clash-airports-compatibility-guide/
- /articles/coupon-codes-and-discounts-guide/
- /articles/evening-peak-lag-troubleshooting/
- /articles/high-value-airports-comparison/
- /articles/how-to-choose-chatgpt-ai-airports/
- …共 30 个（含全部 30 篇文章页）

### 拓展潜力页面（14）

- /guides/
- /ai-airports/
- /clash-airports/
- /premium-airports/
- /proxy-airports/
- /stable-airports/
- /streaming-airports/
- /value-airports/
- /articles/best-airports-2026-guide/
- /articles/cheap-airports-selection-tips/
- /articles/clash-airports-compatibility-guide/
- /articles/high-value-airports-comparison/
- …共 14 个（）

### 关键词竞争页面（2）

- /compare/
- /recommend/

说明：
- “高价值页面”指承担核心商业或导航关键词、入链充足、具备转化入口的页面。
- “重点保护页面”指修改时必须保留 Title 关键词定位、URL 与 AFF 链接的页面。
- “内容不足页面”指独有正文少于约 600 字（不计共享品牌卡片与套餐表）的页面。
- “重复内容页面”指与站内其他页面 8 字分片 Jaccard 相似度 ≥ 0.7 的页面。
- “技术错误页面”指存在可验证的 HTML/链接缺陷（文章页目录锚点失效）。
