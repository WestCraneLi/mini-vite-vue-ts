import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import baseConfig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'development',
    server: {
      open: true,
      cors:true,
      fs: {
        strict: true,
      },
    // 设置代理
    // proxy:{
    //   '/api':{
    //     target:'http://xxx.xxx.xxx.com:8080',
    //     changeOrigin:true,
    //     secure:false,
    //     rewrite:(path) => path.replace('/api/','/')
    //   }
    // }
    },
    // plugins: [
    //   eslint({
    //     cache: false,
    //     include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
    //     exclude: ['node_modules'],
    //   }),
    // ],
  },
  baseConfig
);
