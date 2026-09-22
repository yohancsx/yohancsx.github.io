// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // CHANGE ME: your GitHub Pages root URL. Because the repo is named
  // <username>.github.io, the site lives at the root and needs no `base`.
  // This value is only used to build absolute URLs for social previews
  // and the sitemap, so a wrong value here won't break local dev.
  site: 'https://YOUR-USERNAME.github.io',

  build: {
    // Emit `/research/index.html` so URLs stay clean without a server.
    format: 'directory',
  },
});
