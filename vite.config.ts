import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // For GitHub Pages deployment - set to your repo name
  // e.g., base: '/portfolio/' if deploying to https://username.github.io/portfolio/
  // Leave as '/' for custom domain or root deployment
  base: '/',
})
