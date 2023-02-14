import { defineConfig } from 'astro/config';

// https://astro.build/config
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio.suzukisosaku.com',
  base: '/',
  server: {
    port: 4000,
  },
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});
