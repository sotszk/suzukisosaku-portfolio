import { defineConfig } from 'astro/config';

// https://astro.build/config
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/sotszk.github.io',
  base: '/suzukisosaku-portfolio',
  server: {
    port: 4000,
  },
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});
