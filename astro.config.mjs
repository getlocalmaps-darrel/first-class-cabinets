// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.firstclasswoodworks.com',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      serialize(item) {
        // Blog posts get their publish date as lastmod
        if (item.url.includes('/blog/') && item.url !== 'https://www.firstclasswoodworks.com/blog/') {
          // Default to recent date — actual dates come from frontmatter at build time
          item.lastmod = new Date().toISOString();
        } else {
          // Static pages: set a reasonable lastmod
          item.lastmod = new Date().toISOString();
        }
        return item;
      },
    }),
    mdx(),
  ]
});