import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/modules/core', import.meta.url)),
      '@search': fileURLToPath(new URL('./src/modules/search', import.meta.url)),
      '@auth': fileURLToPath(new URL('./src/modules/auth', import.meta.url)),
      '@duplicate': fileURLToPath(new URL('./src/modules/duplicate', import.meta.url)),
      '@invalid-replacement': fileURLToPath(
        new URL('./src/modules/invalid-replacement', import.meta.url)
      ),
      '@obsolete-without-replacement': fileURLToPath(
        new URL('./src/modules/obsolete-without-replacement', import.meta.url)
      ),
      '@relevant-with-replacement': fileURLToPath(
        new URL('./src/modules/relevant-with-replacement', import.meta.url)
      ),
      '@self-replacement': fileURLToPath(
        new URL('./src/modules/self-replacement', import.meta.url)
      ),
      '@without-brand': fileURLToPath(new URL('./src/modules/without-brand', import.meta.url))
    }
  }
})
