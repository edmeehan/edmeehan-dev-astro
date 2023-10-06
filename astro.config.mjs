import { defineConfig } from 'astro/config';
import bookshop from '@bookshop/astro-bookshop';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import AutoImport from 'astro-auto-import';

// https://astro.build/config
export default defineConfig({
  integrations: [ AutoImport({
    imports: [
      {'src/components/snippet/quote.astro':[['default','Quote']]}
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
  }
});