# 06 BING 收录技术检测

> 审计日期：2026-11-24 ｜ 检测对象：`dist/`（80 HTML + sitemap.xml + robots.txt + BingSiteAuth.xml + IndexNow Key 文件）、`public/`、`src/layouts/BaseLayout.astro`、`src/pages/sitemap.xml.ts`、`astro.config.mjs`、`scripts/indexnow.mjs`、`docs/DEPLOYMENT.md`。
> 线上探测：对 `https://jichang-jingxuan.blog/`、`/robots.txt`、`/sitemap.xml`、`/BingSiteAuth.xml`、`/7f3e…b.txt`、`/airports/lingdongyun/`、一个不存在的 URL 以及 `http://` 版本共 8 次请求，**全部“远程名称无法解析”**（域名未配置 DNS 或尚未部署）。因此凡依赖线上环境的项目均为“无法验证”。
> 状态定义：✅ 检测通过 ｜ ❌ 存在问题 ｜ ⚠️ 需要优化 ｜ ❔ 无法验证

## 一、四层状态区分（重要）

| 层级 | 含义 | 本站现状 |
|---|---|---|
| 技术上允许收录 | 页面可抓取、可索引、有 canonical、无 noindex | **78 页满足**（基于 dist 本地检测） |
| 已经提交收录 | sitemap 已在 Bing Webmaster Tools 提交 / IndexNow 已推送 | **未发生**：站点验证未完成，脚本未执行（`scripts/indexnow-payload.json` 仅为本地生成的清单） |
| Bing 已经抓取 | Bingbot 实际请求过 URL | **无法验证**（无线上日志、无 BWT 数据） |
| Bing 实际完成收录 | URL 出现在 Bing 索引中 | **无法验证**；本报告不作任何“已收录”声明 |

## 二、逐项检测

| # | 检测项目 | 状态 | 检测依据 | 问题 / 建议 |
|---:|---|:-:|---|---|
| 1 | sitemap.xml | ✅ / ⚠️ | `dist/sitemap.xml` 由 `src/pages/sitemap.xml.ts` 构建生成，Sitemap 0.9 协议，78 条 `<loc>`，与 dist 中 78 个可索引页面**完全一致**（0 缺失/0 多余/0 重复），不含 noindex 页面，URL 均带尾斜杠并使用 https 绝对地址 | ⚠️ 72 条 lastmod 为硬编码常量 `2026-11-24`（`sitemap.xml.ts` 第 6 行 `currentDate`），仅 6 个信任页为 2026-11-20；品牌页使用 `b.updatedAt` 但该值同样为 2026-11-24；建议改为按数据文件/文章实际更新时间生成。`priority/changefreq` Bing 基本忽略，无害。 |
| 2 | robots.txt | ✅ | `User-agent: *` / `Allow: /` / `Disallow: /search/` / `Sitemap: https://jichang-jingxuan.blog/sitemap.xml` | 合规。注意 /search/ 同时被 Disallow 与 noindex：Bing 因 Disallow 不会抓取到 noindex 标签，若有外链指向 /search/ 仍可能以“无内容”形式出现在索引，可接受；若希望彻底不出现，可只保留 noindex 而移除 Disallow。 |
| 3 | BingSiteAuth.xml | ❌ | `public/BingSiteAuth.xml` 内容为 `<user>PLACEHOLDER_FOR_BING_WEBMASTER_TOOLS_VERIFICATION</user>` | 占位符，站点验证无法通过；需在 BWT 获取真实验证码后替换并重新部署（或改用 DNS CNAME / meta 标签验证）。 |
| 4 | IndexNow | ✅ / ❔ | Key 文件 `public/7f3e8b4a2c1d9e5f8a0b3c4d5e6f7a8b.txt` 内容与 Key 一致（32 位十六进制，合法）；`scripts/indexnow.mjs` 构造 `{host,key,keyLocation,urlList}` 推送 `api.indexnow.org`，78 条 URL 与 sitemap 一致 | ❔ 推送是否成功无法验证（域名未上线，`keyLocation` 不可达则 IndexNow 会拒绝）。建议上线后再执行 `node scripts/indexnow.mjs --submit`，并在后续内容更新时只推送变更 URL（当前脚本为全量）。 |
| 5 | Canonical | ✅ / ❌ | 79 页 canonical 自指（`BaseLayout.astro` 第 26–30 行规范化为绝对 URL + 尾斜杠）；与 sitemap 一致 | ❌ `/404.html` canonical 为 `https://jichang-jingxuan.blog/404/`（不存在的 URL，源于 `Astro.url.href` 默认值）；因 noindex 影响低，建议 404 页显式传入 canonical 或省略 canonical。 |
| 6 | HTTP 状态码 | ❔ | 域名未解析 | 无法验证。上线后需确认：所有 78 个 URL 返回 200；不带尾斜杠的 URL 301 到带尾斜杠；`/index.html` 不与 `/` 并存（Cloudflare Pages 默认会 308 规范化）。 |
| 7 | 404 页面 | ✅ / ❔ | `dist/404.html` 存在，noindex，H1“抱歉，您访问的页面不存在”，含返回首页/榜单/品牌大全 3 个链接；本地 `scripts/serve.mjs` 对缺失路径返回 404 状态码 | ❔ 线上是否返回真实 HTTP 404（而非 200 软 404）无法验证；Cloudflare Pages 会自动使用根目录 404.html 并返回 404，需上线后用抓取工具确认。 |
| 8 | 301 跳转 | ❔ | 项目无 `_redirects` / `_headers` 文件；无 www→非 www、http→https 配置（依赖托管平台） | 无法验证。上线后需确认 http→https、www→裸域（或反向）单跳 301，避免链式跳转。 |
| 9 | noindex | ✅ | 仅 `/search/` 与 `/404.html` 为 `noindex, follow`；其余 78 页为 `index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1` | 合规。 |
| 10 | nofollow | ✅ | 全站外链 0 条缺失属性：所有购买链接 `rel="sponsored nofollow noopener"`（首页 163 条、品牌页每页 ≥ 3 条）；站内链接无 nofollow | 合规，符合 Bing 对付费/联盟链接的标注要求。 |
| 11 | 静态 HTML | ✅ | 80 个 HTML 由 Astro `output: 'static'` 构建，正文、表格、FAQ、结构化数据全部在 HTML 中 | 合规。 |
| 12 | SSR 或 SSG | ✅ | SSG（`astro.config.mjs` `output: 'static'`，`format: 'directory'`） | 合规。 |
| 13 | JavaScript 渲染 | ✅ / ⚠️ | 页面脚本仅用于移动端抽屉、套餐表筛选与站内搜索；关闭 JS 时正文完整可读 | ⚠️ /search/ 将 brands/articles/plans 三份 JSON 内联进页面（210KB），属 noindex 页，不影响收录但影响体积。 |
| 14 | 内部链接可抓取性 | ✅ | 全站链接均为标准 `<a href>` 相对路径，0 条死链（逐一核对 dist 目标文件）；无 JS 跳转、无 `#` 占位链接；面包屑为真实链接 | ⚠️ 文章页目录（TOC）6 个锚点 `href="#一背景概述…"` 与实际 `id="一、背景概述…"` 不匹配（`[slug].astro` 第 84 行去除了空格/括号但未去除“、”），页内跳转失效（不影响抓取，影响体验）。 |
| 15 | URL 独立性 | ✅ | 78 个唯一、语义化、小写英文 slug，统一尾斜杠；品牌页 `/airports/{slug}/`，文章 `/articles/{slug}/`，无参数页 | 合规。 |
| 16 | 移动端适配 | ✅ / ❔ | viewport 含 `viewport-fit=cover`；CSS 10 处断点；移动抽屉导航；表格横向滚动容器 | ❔ 未做真机与 Bing 移动友好性在线测试。 |
| 17 | HTTPS | ❔ | 所有 canonical/sitemap/og:url 均为 https；部署文档计划 Cloudflare Pages 自动证书 | 无法验证（未上线）。 |
| 18 | 结构化数据 | ✅ / ⚠️ | 全站 WebSite + Organization；带面包屑的页面有 BreadcrumbList；首页 FAQPage（8 问）；品牌页 WebPage（含 datePublished/dateModified）；文章页 BlogPosting（headline/author/datePublished/dateModified/mainEntityOfPage）；JSON 均可解析 | ⚠️ 品牌页 6 条 FAQ 无 FAQPage；BlogPosting 缺 `image` 与 `publisher`；Organization 的 logo 为 favicon.svg；0 页有 og:image（`dist/og/` 空目录）。 |
| 19 | 页面加载性能 | ⚠️ / ❔ | 单一 CSS 16.6KB；无外部脚本；图片 lazy/eager 策略合理 | ⚠️ HTML 体积：首页 243KB、/search/ 210KB、/plans/ 180KB、/compare/ 176KB、/plans/monthly/ 109KB（其余 9–86KB）；30 张 JPG 封面共 2.0MB，无 WebP/srcset/width/height。❔ LCP/CLS/TTFB 需上线后实测。 |

## 三、补充检测

| 项目 | 状态 | 说明 |
|---|:-:|---|
| `<html lang>` | ✅ | 80/80 为 `zh-CN`；og:locale `zh_CN` |
| 字符编码 | ✅ | `<meta charset="utf-8">`；BingSiteAuth.xml 构建后内容在 Windows 控制台显示乱码为控制台编码问题，文件本身 UTF-8 |
| hreflang | — | 单语言站点，不需要 |
| 单一 H1 | ✅ | 80/80 |
| Title/Description 唯一性 | ✅ | 78/78 唯一（质量问题见 01 报告） |
| 图片 ALT | ✅ | 37/37 张图片均有 ALT（文章标题） |
| 重复 URL 变体 | ✅ | 无 |
| 外链安全属性 | ✅ | `noopener` 已带 |
| Cloudflare `_headers` 安全头 | ⚠️ | 无文件；建议上线后添加 HSTS、X-Content-Type-Options 等（不影响收录，影响可信度评估） |

## 四、上线后验证清单（需站长执行并回传结果）

1. 在 Bing Webmaster Tools 完成站点验证（替换 BingSiteAuth.xml 或使用 DNS/meta 方式）。
2. 提交 `https://jichang-jingxuan.blog/sitemap.xml`，确认“已发现 78 / 已提交 78”。
3. 执行 `node scripts/indexnow.mjs --submit`，记录响应码（200/202 为成功）。
4. 使用 BWT URL Inspection 抓取 `/`、`/airports/lingdongyun/`、`/plans/`、任一文章页，确认 200、无阻塞、渲染正文完整。
5. 用抓取工具确认：http→https、无尾斜杠→有尾斜杠 的 301；不存在 URL 返回 404。
6. 两周后导出 BWT “索引覆盖/爬网统计/搜索性能”，用于 09 报告。
