import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            "src": "/pwa-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/pwa-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/pwa-maskable-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/pwa-maskable-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/jsonplaceholder\.typicode\.com\/posts/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
              },
              networkTimeoutSeconds: 10,
            },
          },
        ],
      },
    })
  ]
});