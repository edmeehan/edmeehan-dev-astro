import { defineConfig } from 'astro/config';
import bookshop from '@bookshop/astro-bookshop';
import mdx from "@astrojs/mdx";
import AutoImport from 'astro-auto-import';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://edmeehan.dev',
  integrations: [
    AutoImport({
      imports: [{
        'src/components/snippet/quote.astro': [['default', 'SnipQuote']]
      }, {
        'src/components/snippet/media.astro': [['default', 'SnipMedia']]
      }, {
        'src/components/snippet/image.astro': [['default', 'SnipImage']]
      }]
    }),
    mdx(),
    bookshop(),
    sitemap({
      serialize: (page) => {
        // blog listings
        if (/\/blog\/(\d*\/)?$/.test(page.url)) {
          return {
            url: page.url,
            changefreq: 'monthly'
          }
        }
        // blog posts
        if (/\/blog\/.*\/$/.test(page.url)) {
          return {
            url: page.url,
            changefreq: 'yearly'
          }
        }
        // project listings
        if (/\/projects\/(\d*\/)?$/.test(page.url)) {
          return {
            url: page.url,
            changefreq: 'monthly'
          }
        }
        // project posts
        if (/\/projects\/.*\/$/.test(page.url)) {
          return {
            url: page.url,
            changefreq: 'yearly'
          }
        }
        return page;
      }
    })
  ],
  trailingSlash: 'always',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "src/styles/variables.scss";
            @import "src/styles/placeholders.scss";
            @import "src/styles/mixins.scss";
          `
        }
      }
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});