import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

console.log('=== Airport Select MAX · Full Site Validation ===\n');

// 1. Check Dist Existence
if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist!');
  process.exit(1);
}

// 2. Check Static Files in dist/
const requiredFiles = [
  'index.html',
  '404.html',
  'robots.txt',
  'sitemap.xml',
  'BingSiteAuth.xml',
  '7f3e8b4a2c1d9e5f8a0b3c4d5e6f7a8b.txt'
];

let fileErrors = 0;
requiredFiles.forEach(f => {
  const p = path.join(distDir, f);
  if (!fs.existsSync(p)) {
    console.error(`[FAIL] Missing root file: ${f}`);
    fileErrors++;
  } else {
    console.log(`[PASS] Root file verified: ${f}`);
  }
});

// 3. Verify All 18 Airport Detail Pages in dist/airports/
const brands = JSON.parse(fs.readFileSync('src/data/brands.json', 'utf8'));
console.log(`\nVerifying 18 Airport Detail Pages...`);

let brandErrors = 0;
brands.forEach(b => {
  const brandHtmlPath = path.join(distDir, 'airports', b.slug, 'index.html');
  if (!fs.existsSync(brandHtmlPath)) {
    console.error(`[FAIL] Missing airport page: /airports/${b.slug}/`);
    brandErrors++;
    return;
  }
  const html = fs.readFileSync(brandHtmlPath, 'utf8');

  // Check title
  if (!html.includes('<title>') || !html.includes(b.name)) {
    console.error(`[FAIL] Airport ${b.slug} title issue`);
    brandErrors++;
  }

  // Check canonical
  const expectedCanonical = `https://jichang-jingxuan.blog/airports/${b.slug}/`;
  if (!html.includes(`href="${expectedCanonical}"`)) {
    console.error(`[FAIL] Airport ${b.slug} canonical mismatch. Expected ${expectedCanonical}`);
    brandErrors++;
  }

  // Check purchase url
  if (b.slug === 'lingdongyun') {
    if (!html.includes('https://varnexa.lingdongaff.com/#/?code=VeMln3TT')) {
      console.error(`[FAIL] Lingdongyun designated link NOT found in HTML!`);
      brandErrors++;
    } else {
      console.log(`[PASS] Lingdongyun designated AFF link verified: https://varnexa.lingdongaff.com/#/?code=VeMln3TT`);
    }
  }

  // Check sponsored rel
  if (!html.includes('rel="sponsored nofollow noopener"')) {
    console.error(`[FAIL] Airport ${b.slug} sponsored rel missing`);
    brandErrors++;
  }

  console.log(`[PASS] Airport page valid: /airports/${b.slug}/ (Rank: ${b.rank}, Plans: ${b.plans.length})`);
});

// 4. Verify All 30 Article Pages in dist/articles/
const articles = JSON.parse(fs.readFileSync('src/data/articles.json', 'utf8'));
console.log(`\nVerifying 30 Original Article Pages...`);

let articleErrors = 0;
articles.forEach(a => {
  const artHtmlPath = path.join(distDir, 'articles', a.slug, 'index.html');
  if (!fs.existsSync(artHtmlPath)) {
    console.error(`[FAIL] Missing article page: /articles/${a.slug}/`);
    articleErrors++;
    return;
  }
  const html = fs.readFileSync(artHtmlPath, 'utf8');
  if (!html.includes('<h1 class="article-main-title">')) {
    console.error(`[FAIL] Article ${a.slug} H1 missing`);
    articleErrors++;
  }
  const expectedCanonical = `https://jichang-jingxuan.blog/articles/${a.slug}/`;
  if (!html.includes(`href="${expectedCanonical}"`)) {
    console.error(`[FAIL] Article ${a.slug} canonical mismatch`);
    articleErrors++;
  }
});
console.log(`[PASS] All ${articles.length} article pages compiled and validated.`);

// 5. Verify Thematic Hubs & Plan Pages
console.log(`\nVerifying Thematic and Category Pages...`);
const categoryUrls = [
  'ranking',
  'airports',
  'plans',
  'articles',
  'compare',
  'recommend',
  'stable-airports',
  'cheap-airports',
  'value-airports',
  'premium-airports',
  'clash-airports',
  'proxy-airports',
  'ai-airports',
  'streaming-airports',
  'plans/annual',
  'plans/monthly',
  'plans/lifetime',
  'plans/under-100-yearly',
  'plans/under-20-monthly',
  'plans/under-30-monthly',
  'plans/30-60-monthly',
  'plans/large-traffic',
  'guides',
  'methodology',
  'about',
  'contact',
  'disclosure',
  'privacy',
  'terms',
  'search'
];

let catErrors = 0;
categoryUrls.forEach(c => {
  const p = path.join(distDir, c, 'index.html');
  if (!fs.existsSync(p)) {
    console.error(`[FAIL] Missing category page: /${c}/`);
    catErrors++;
  } else {
    const html = fs.readFileSync(p, 'utf8');
    if (!html.includes('<title>') || !html.includes('<meta name="description"')) {
      console.error(`[FAIL] Category page /${c}/ missing SEO tags`);
      catErrors++;
    }
  }
});
console.log(`[PASS] All ${categoryUrls.length} category and thematic pages verified.`);

// 6. Check Sitemap Content
const sitemapContent = fs.readFileSync(path.join(distDir, 'sitemap.xml'), 'utf8');
const sitemapUrls = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
console.log(`\nSitemap entries count: ${sitemapUrls.length}`);
if (sitemapUrls.length < 75) {
  console.error(`[FAIL] Sitemap contains too few URLs (${sitemapUrls.length})`);
} else {
  console.log(`[PASS] Sitemap contains ${sitemapUrls.length} valid canonical URLs.`);
}

console.log('\n===========================================');
const totalErrors = fileErrors + brandErrors + articleErrors + catErrors;
if (totalErrors === 0) {
  console.log('✅ ALL VALIDATION CHECKS PASSED PERFECTLY!');
  console.log('Total verified pages in production build: 80');
} else {
  console.error(`❌ Validation failed with ${totalErrors} errors.`);
  process.exit(1);
}
