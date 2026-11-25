// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jichang-jingxuan.blog',
  trailingSlash: 'always',
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
    assets: '_astro',
    inlineStylesheets: 'auto'
  },
  devToolbar: {
    enabled: false
  },
  server: {
    host: true,
    port: 4535
  }
});
