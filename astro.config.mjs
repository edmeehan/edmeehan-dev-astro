import { defineConfig } from 'astro/config';
import bookshop from '@bookshop/astro-bookshop';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), bookshop(), react()],
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