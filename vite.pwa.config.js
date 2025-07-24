// vite.pwa.config.js
import { VitePWA } from 'vite-plugin-pwa';

export const pwaPlugin = VitePWA({
  registerType: 'autoUpdate',
  includeAssets: [
    'favicon.ico',
    'apple-touch-icon.png',
    'robots.txt',
  ],
  manifest: {
    name: 'Ecomart',
    short_name: 'Ecomart',
    description: 'Your one-stop shop for everything!',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
    start_url: '/',
    icons: [
      {
        src: '/Icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/Icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
});
