import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use repo base only in production so dev server works at root
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/portofolio-new/' : '/',
  plugins: [react()],
}))
