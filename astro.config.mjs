import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bewildfireaware.com',
  // Emit /about.html instead of /about/index.html so all existing URLs keep working
  build: { format: 'file' },
  trailingSlash: 'never',
});
