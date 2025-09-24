import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2' // 修改导入路径
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()], // 直接使用 vue()
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000,
    open: true
  }
})