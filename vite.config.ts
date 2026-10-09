import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages: https://stillset9.github.io/bosch-tools-uruguay/
  base: command === 'build' ? '/bosch-tools-uruguay/' : '/',
}))


