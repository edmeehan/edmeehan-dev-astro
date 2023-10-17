import { defineConfig } from 'astro/config';
import bookshop from '@bookshop/astro-bookshop';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import AutoImport from 'astro-auto-import';

// https://astro.build/config
export default defineConfig({
  integrations: [ AutoImport({
    imports: [
      {'src/components/snippet/quote.astro':[['default','Quote']]},
      {'src/components/snippet/image.astro':[['default','Image']]}
    ]
  }), mdx(), bookshop(), react()],
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
    // syntaxHighlight: 'prism'
    // shikiConfig: {
    //   theme: 'github-dark',
    //   // langs: [],
    //   wrap: true
    // }
    render: [
      '@astrojs/markdown-remark',
      {
        syntaxHighlight: 'shiki',
        shikiConfig: {
          theme: 'monokai',
          langs: ['js', 'html', 'css', 'astro'],
          wrap: true,
        },
      },
    ],
  }
});