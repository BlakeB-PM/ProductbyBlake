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
  // Dev server only - production is served by nginx (see Dockerfile).
  // Pinned off the default 5173 because another local project runs there and
  // registers a service worker on that origin, which then hijacks this site.
  server: {
    port: 5180,
    strictPort: true,
  },
})
