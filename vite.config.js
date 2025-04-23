import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  base: '/aids-center/',
  build: {
    outDir: 'build',
  },

  plugins: [
    react(),
    svgr(),
    Pages({
      dist: 'src/pages',
      resolver: 'react',
      moduleId: '~react-pages',
    }),
  ],
})
