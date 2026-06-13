import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Base path is set for GitHub Pages deployment.
// Replace 'vocab-app' with your repository name, or set it to '/' for
// a user/organization page (e.g. <username>.github.io).
export default defineConfig({
  plugins: [react()],
  base: '/vocab-app/',
})
