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

      workbox: {
        runtimeCaching: [
          {

            urlPattern: /^https:\/\/jsonplaceholder\.typicode\.com\/posts.*/,

            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-posts-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7, 
              },
              cacheableResponse: {
                statuses: [0, 200], 
              },
            },
          },
        ],
      },
      manifest: {
        name: 'Post Application',
        short_name: 'PostApp',
        description: 'A Progressive Web Application for managing posts securely.',
        theme_color: '#4f46e5', 
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