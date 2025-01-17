import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: { 
    port: 8080, 
    host: '0.0.0.0'
  },
  build: {
    target: 'esnext' //browsers can handle the latest ES features
  }

  // build: {
  //   rollupOptions: {
  //     input: 'src/main.js'
  //   }
  // }
})
