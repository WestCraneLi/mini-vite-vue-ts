import { defineConfig, preview } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, './src/assets'),
      },
    ],
    extensions: ['.ts', '.js'],
  },
  // base: './',
  // server: {
  //   port: 5173,
  //   open: true,
  //   cors: true,
  //   // 设置代理
  //   // proxy:{
  //   //   '/api':{
  //   //     target:'http://xxx.xxx.xxx.com:8080',
  //   //     changeOrigin:true,
  //   //     secure:false,
  //   //     rewrite:(path) => path.replace('/api/','/')
  //   //   }
  //   // }
  // },
  // preview: {
  //   port: 5713,
  // },
});
