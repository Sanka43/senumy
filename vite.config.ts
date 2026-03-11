import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Required for GitHub Pages: app is served at https://<user>.github.io/senumy/
export default defineConfig({
  base: '/senumy/',
  plugins: [react()],
})
