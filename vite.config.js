import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Tailwind doesn't require a Vite plugin — it's configured via PostCSS/tailwind.config.js
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
