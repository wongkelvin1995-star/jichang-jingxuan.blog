import fs from 'node:fs';
import path from 'node:path';

const site = 'https://jichang-jingxuan.blog';
const host = 'jichang-jingxuan.blog';
const key = '7f3e8b4a2c1d9e5f8a0b3c4d5e6f7a8b';
const keyLocation = `${site}/${key}.txt`;

const brands = JSON.parse(fs.readFileSync('src/data/brands.json', 'utf8'));
const articles = JSON.parse(fs.readFileSync('src/data/articles.json', 'utf8'));

const staticUrls = [
  '/',
  '/ranking/',
  '/airports/',
  '/plans/',
  '/articles/',
  '/compare/',
  '/recommend/',
  '/stable-airports/',
  '/cheap-airports/',
  '/value-airports/',
  '/premium-airports/',
  '/clash-airports/',
  '/proxy-airports/',
  '/ai-airports/',
  '/streaming-airports/',
  '/plans/annual/',
  '/plans/monthly/',
  '/plans/lifetime/',
  '/plans/under-100-yearly/',
  '/plans/under-20-monthly/',
  '/plans/under-30-monthly/',
  '/plans/30-60-monthly/',
  '/plans/large-traffic/',
  '/guides/',
  '/methodology/',
  '/about/',
  '/contact/',
  '/disclosure/',
  '/privacy/',
  '/terms/'
];

const brandUrls = brands.map(b => `/airports/${b.slug}/`);
const articleUrls = articles.map(a => `/articles/${a.slug}/`);

const urlList = [...staticUrls, ...brandUrls, ...articleUrls].map(u => `${site}${u}`);

console.log(`Prepared ${urlList.length} URLs for IndexNow submission.`);

const payload = {
  host,
  key,
  keyLocation,
  urlList
};

async function submitToIndexNow() {
  console.log(`Submitting to IndexNow API (https://api.indexnow.org/indexnow)...`);
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    console.log(`Response status: ${res.status} ${res.statusText}`);
    if (res.status === 200 || res.status === 202) {
      console.log('IndexNow submission successful!');
    } else {
      console.log(`Note: HTTP status ${res.status}. Response:`, await res.text());
    }
  } catch (err) {
    console.error('IndexNow submission error:', err.message);
  }
}

// Write submission manifest for audit
fs.writeFileSync('scripts/indexnow-payload.json', JSON.stringify(payload, null, 2), 'utf8');
console.log('Saved scripts/indexnow-payload.json successfully.');

// If run with --submit flag, execute the HTTP request
if (process.argv.includes('--submit')) {
  submitToIndexNow();
}
