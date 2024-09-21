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
  base:"./",
  server: {
    host: "127.0.0.1", // 开发服务器的地址
    port: 8000,        // 开发服务器的端口号
    proxy: {
      "/api": {
        target: "http://cuc-llm-f-1.natapp1.cc", // 目标地址
        changeOrigin: true,            // 是否换源
        rewrite: (path) => path.replace(/\/api/, ""),
      },
    },
  },
})
