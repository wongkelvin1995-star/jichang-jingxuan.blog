import fs from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

const articlesMap = {
  'best-airports-2026-guide': 'photo-1451187580459-43490279c0fa', // Global digital connectivity & tech network
  'stable-airports-evaluation-guide': 'photo-1558494949-ef010cbdcc31', // Stable enterprise server rack data center
  'cheap-airports-selection-tips': 'photo-1498050108023-c5249f4df085', // Minimalist budget laptop workspace
  'high-value-airports-comparison': 'photo-1551288049-bebda4e38f71', // Data analysis and performance graphs
  'proxy-airports-comprehensive-guide': 'photo-1526778548025-fa2f459cd5c1', // Global map navigation & open internet
  'clash-airports-compatibility-guide': 'photo-1517694712202-14dd9538aa97', // Developer coding on laptop screen
  'premium-airports-worth-buying': 'photo-1507238691740-187a5b1d37b8', // High-end sleek dark desk aesthetic
  'popular-airport-brands-overview': 'photo-1512941937669-90a1b58e7e9c', // Modern mobile ecosystem
  '18-brands-airport-selection-reference': 'photo-1486406146926-c627a92ad1ab', // Modern architectural towers & choices
  'how-to-judge-long-term-airports': 'photo-1563986768609-322da13575f3', // Mobile security lock & long term trust
  'under-100-yearly-airports-comparison': 'photo-1579621970563-ebec7560ff3e', // Smart savings, coins, budget planning
  'under-20-monthly-airports-guide': 'photo-1527443224154-c4a3942d3acf', // Student clean notebook & coffee desk
  'under-30-monthly-airports-guide': 'photo-1505740420928-5e560c06d30e', // Everyday headphones & tech gadgets
  '30-to-60-monthly-airports-comparison': 'photo-1593642632823-8f785ba67e45', // Dual monitor productivity setup
  'monthly-versus-annual-billing-choice': 'photo-1506784983877-45594efa4cbe', // Planning notebook, calendar comparison
  'lifetime-traffic-packs-analysis': 'photo-1544197150-b99a580bb7a8', // Storage server bank, timeless vault
  'is-100gb-monthly-traffic-enough': 'photo-1460925895917-afdab827c52f', // Data charts, metrics & usage meters
  '500gb-vs-1tb-large-traffic-plans': 'photo-1544716278-ca5e3f4abd8c', // Deep high-capacity data archives
  'traffic-multiplier-explained': 'photo-1450133064473-71024230f91b', // Balance scales & auditing fine print
  'coupon-codes-and-discounts-guide': 'photo-1607082348824-0a96f2a4b9da', // Promotional discount tag & deals
  'beginner-first-time-airport-purchase': 'photo-1488190211105-8b0e65b80b4e', // Friendly learning notebook & compass
  'how-to-choose-chatgpt-ai-airports': 'photo-1677442136019-21780ecad995', // Glowing artificial intelligence neural brain
  'youtube-4k-streaming-airport-selection': 'photo-1516035069371-29a1b244cc32', // Ultra HD optical camera lens
  'netflix-disney-streaming-unlock-guide': 'photo-1574375927938-d5a98e8ffe85', // Home theater smart TV streaming
  'iepl-iplc-bgp-lines-difference': 'photo-1508739773434-c26b3d09e071', // High-speed optical fiber light trails
  'vless-shadowsocks-proxy-protocols': 'photo-1526374965328-7f61d4dc18c5', // Encrypted cybersecurity code stream
  'official-client-vs-clash-third-party': 'photo-1581291518857-4e27b48ff24e', // Side-by-side app UI interfaces
  'windows-android-ios-setup-guide': 'photo-1519389950473-47ba0277781c', // Multi-platform cross-device ecosystem
  'evening-peak-lag-troubleshooting': 'photo-1509114397022-ed747cca3f65', // Night city highway traffic light trails
  'airport-scam-risks-and-protection': 'photo-1550751827-4bd374c3f58b' // Cyber defense padlock & risk protection
};

const outputDir = path.resolve('public/images/articles');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadImages() {
  console.log('Downloading high quality article cover photos...');
  const entries = Object.entries(articlesMap);
  let successCount = 0;

  for (const [slug, photoId] of entries) {
    const dest = path.join(outputDir, `${slug}.jpg`);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 5000) {
      console.log(`[SKIP] Already exists: ${slug}.jpg`);
      successCount++;
      continue;
    }

    const url = `https://images.unsplash.com/${photoId}?w=800&q=80&auto=format&fit=crop`;
    try {
      console.log(`Fetching: ${slug} from ${photoId}...`);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const fileStream = fs.createWriteStream(dest);
      await pipeline(Readable.fromWeb(res.body), fileStream);
      console.log(`[DONE] Saved: ${slug}.jpg (${(fs.statSync(dest).size / 1024).toFixed(1)} KB)`);
      successCount++;
    } catch (err) {
      console.error(`[ERROR] Failed to download for ${slug}:`, err.message);
    }
  }

  console.log(`\nSuccessfully downloaded: ${successCount} / ${entries.length}`);

  // Now update src/content/articles/*.md
  console.log('Updating article markdown frontmatter...');
  const articlesDir = path.resolve('src/content/articles');
  for (const slug of Object.keys(articlesMap)) {
    const mdFile = path.join(articlesDir, `${slug}.md`);
    if (fs.existsSync(mdFile)) {
      let content = fs.readFileSync(mdFile, 'utf8');
      const coverPath = `/images/articles/${slug}.jpg`;
      if (content.includes('cover: ""')) {
        content = content.replace('cover: ""', `cover: "${coverPath}"`);
      } else if (content.match(/cover:\s*[^\r\n]*/)) {
        content = content.replace(/cover:\s*[^\r\n]*/, `cover: "${coverPath}"`);
      }
      fs.writeFileSync(mdFile, content, 'utf8');
    }
  }

  // Also update src/data/articles.json if present
  const articlesJsonPath = path.resolve('src/data/articles.json');
  if (fs.existsSync(articlesJsonPath)) {
    const data = JSON.parse(fs.readFileSync(articlesJsonPath, 'utf8'));
    for (const item of data) {
      item.cover = `/images/articles/${item.slug}.jpg`;
    }
    fs.writeFileSync(articlesJsonPath, JSON.stringify(data, null, 2), 'utf8');
    console.log('Updated src/data/articles.json with cover paths.');
  }

  console.log('All article cover updates completed.');
}

downloadImages();
