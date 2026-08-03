import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'maskable-icon.png'],
      // Workbox configurations handles your background data strategies
      workbox: {
        runtimeCaching: [
          {
            // Intercept any fetch request going to JSONPlaceholder
            urlPattern: /^https:\/\/jsonplaceholder\.typicode\.com\/posts.*/,
            // NetworkFirst means: try the internet first. If internet fails, use cache!
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-posts-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7, // Keep cached posts secure for 7 days
              },
              cacheableResponse: {
                statuses: [0, 200], // Only cache valid successful network returns
              },
            },
          },
        ],
      },
      manifest: {
        name: 'Post Application',
        short_name: 'PostApp',
        description: 'A Progressive Web Application for managing posts securely.',
        theme_color: '#4f46e5', // Beautiful Indigo theme matching your UI
        background_color: '#f8fafc',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})