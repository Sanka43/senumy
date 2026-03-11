import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'
import { resolve } from 'path'

// Required for GitHub Pages: app is served at https://<user>.github.io/senumy/
export default defineConfig({
  base: '/senumy/',
  build: {
    target: 'es2020',
    cssMinify: true,
    modulePreload: { polyfill: false },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) return 'react-dom'
            if (id.includes('react-router')) return 'router'
            if (id.includes('react')) return 'react'
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    chunkSizeWarningLimit: 600,
  },
  plugins: [
    react(),
    // GitHub Pages serves 404.html for unknown paths; use it as SPA fallback so /senumy/prytexdmifgdv7um/ etc. work
    {
      name: 'github-pages-404',
      closeBundle() {
        const outDir = resolve(__dirname, 'dist')
        const index = resolve(outDir, 'index.html')
        const fallback = resolve(outDir, '404.html')
        if (existsSync(index)) {
          copyFileSync(index, fallback)
        }
      },
    },
  ],
})
