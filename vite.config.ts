import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 导入自动导包插件
import AutoImport from 'unplugin-auto-import/vite'
// 导入自动导vue组件的插件
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // imports用来指定需要自动啊导入的包（按需导入）
      imports: ['vue', 'vue-router', 'pinia'],

      // 自动生成类型描述文件
      dts: './src/types/auto-imports.d.ts',

      // 指定目录下模块会被自动导入
      dirs: ['./src/**/*'],

      // 是否支持在vue模板中使用
      vueTemplate: true,


      /* 
      精准导入：
      imports: [
        {
          vue: [['ref', 'hello'], 'computed'],
        },
        'vue-router',
        'pinia',
      ],
      */
    }),
    Components({
      dts: './src/types/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
