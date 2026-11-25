import brands from '../data/brands.json';
import articles from '../data/articles.json';

export async function GET() {
  const site = 'https://jichang-jingxuan.blog';
  const currentDate = '2026-11-24';

  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily', lastmod: currentDate },
    { url: '/ranking/', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
    { url: '/airports/', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
    { url: '/plans/', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
    { url: '/articles/', priority: '0.8', changefreq: 'daily', lastmod: currentDate },
    { url: '/compare/', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/recommend/', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/stable-airports/', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/cheap-airports/', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/value-airports/', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/premium-airports/', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/clash-airports/', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/proxy-airports/', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/ai-airports/', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/streaming-airports/', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/plans/annual/', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/plans/monthly/', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/plans/lifetime/', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/plans/under-100-yearly/', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/plans/under-20-monthly/', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/plans/under-30-monthly/', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/plans/30-60-monthly/', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/plans/large-traffic/', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/guides/', priority: '0.7', changefreq: 'weekly', lastmod: currentDate },
    { url: '/methodology/', priority: '0.7', changefreq: 'monthly', lastmod: '2026-11-20' },
    { url: '/about/', priority: '0.7', changefreq: 'monthly', lastmod: '2026-11-20' },
    { url: '/contact/', priority: '0.6', changefreq: 'monthly', lastmod: '2026-11-20' },
    { url: '/disclosure/', priority: '0.6', changefreq: 'monthly', lastmod: '2026-11-20' },
    { url: '/privacy/', priority: '0.5', changefreq: 'monthly', lastmod: '2026-11-20' },
    { url: '/terms/', priority: '0.5', changefreq: 'monthly', lastmod: '2026-11-20' },
  ];

  const brandPages = brands.map(b => ({
    url: `/airports/${b.slug}/`,
    priority: b.rank === 1 ? '0.95' : '0.85',
    changefreq: 'weekly',
    lastmod: b.updatedAt || currentDate
  }));

  const articlePages = articles.map(a => ({
    url: `/articles/${a.slug}/`,
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: a.updatedDate || a.date
  }));

  const allUrls = [...staticPages, ...brandPages, ...articlePages];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(item => `  <url>
    <loc>${site}${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
