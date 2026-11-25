# Airport Select MAX · 部署说明指南

> 适用域名：https://jichang-jingxuan.blog/
> 生产构建目录：`dist/`
> 推荐托管平台：Cloudflare Pages / Vercel / GitHub Pages

---

## 1. Cloudflare Pages 部署说明（首选推荐）

Cloudflare Pages 是静态站点部署的最优选择，享有极速全球 CDN、免费 SSL 证书及对 Bingbot 优异的抓取性能。

### 1.1 自动 Git 集成部署
1. 将本项目推送到 GitHub 私有或公开仓库：
   ```bash
   git init
   git add .
   git commit -m "feat: complete airport-select-max flagship release"
   git branch -M main
   git remote add origin https://github.com/<your-user>/jichang-jingxuan.blog.git
   git push -u origin main
   ```
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)，进入 **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**。
3. 选择刚刚创建的代码仓库，配置构建设置：
   - **Framework preset:** `None` 或 `Astro`
   - **Build command:** `node scripts/build-data.mjs && node ./node_modules/astro/bin/astro.mjs build`
   - **Build output directory:** `dist`
   - **Node.js version:** `20` 或 `22`（在环境变量中添加 `NODE_VERSION=22`）
4. 点击 **Save and Deploy**，即可在 1–2 分钟内完成全站部署。

### 1.2 自定义域名绑定
1. 在 Cloudflare Pages 项目设置中进入 **Custom domains**。
2. 添加自定义域名：`jichang-jingxuan.blog`。
3. Cloudflare 会自动配置 DNS 解析与边缘 SSL 证书。
4. 开启 **Always Use HTTPS** 与 **Automatic HTTPS Rewrites**。

---

## 2. Bing Webmaster Tools 上线认证操作步骤

全站正式上线后，请按以下步骤完成 Bing 搜索引擎的提交与验证：

1. 登录 [Bing Webmaster Tools](https://www.bing.com/webmasters)。
2. 添加网站：输入 `https://jichang-jingxuan.blog/`。
3. 选择 **XML 文件验证**：
   - 下载官方提供的 `BingSiteAuth.xml` 文件。
   - 打开该文件查看其中的 `<user>xxxx</user>` 代码。
   - 替换本项目根目录下的 `public/BingSiteAuth.xml` 对应内容，并重新触发构建部署。
4. 在 Bing 平台点击“验证”，通过后进入控制台。
5. 在左侧菜单点击 **Sitemaps**，提交 Sitemap 链接：
   ```
   https://jichang-jingxuan.blog/sitemap.xml
   ```
6. 使用 **URL Inspection（网址检查）** 工具对首页 `https://jichang-jingxuan.blog/` 以及重点品牌页（如 `/airports/lingdongyun/`）进行抓取测试，确认返回 HTTP 200 及无阻塞。

---

## 3. IndexNow 即时推送机制

本项目已内置 IndexNow 完整提交规范：
- Key 字符串：`7f3e8b4a2c1d9e5f8a0b3c4d5e6f7a8b`
- 验证端点：`https://jichang-jingxuan.blog/7f3e8b4a2c1d9e5f8a0b3c4d5e6f7a8b.txt`
- 批量推送脚本：`scripts/indexnow.mjs`

### 自动或手动触发提交
每次全站内容有重大新增或修改时，在本地或 CI/CD 流水线中执行：
```bash
node scripts/indexnow.mjs --submit
```
终端将输出 `200 OK` 或 `202 Accepted`，IndexNow 网络会将全量 78 个正式 Canonical URL 同步通知至 Bing 及 Yandex 搜索引擎。
