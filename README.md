## mini-vite@vue-ts搭建
本项目基于arco-design-pro-vue项目进行搭建vue-ts项目

可以先下载arco-design-pro-vue的源码进行配置与查看
链接：[arco-design-pro-vue](https://github.com/WestCraneLi/arco-design-pro-vue/tree/main/arco-design-pro-vite)

### 一、安装

```npm init vite```：vite版本4.0

```bash
npm init @vitejs/app 会报错：command C:\WINDOWS\system32\cmd.exe /d /s /c C:\Users\ADMINI~1\AppData\Local\Temp\npx-19de6a06.cmd
```

```bash
cd <programname> -> npm install
```

**运行项目**：```npm run dev```

### 二、修改vite配置文件

```
用@代替src路径->resolve:alias:@:resolve(__dirname,'src')->报错安装：npm i @types/node -D
```

同时```tsconfig.json```中配置以下两项
```json
"paths": {

"@/*": ["src/*"]

},

"baseUrl": ".",
```
**注：ESNext，ES6以后**

```server:port/open/cors/proxy```

### 三、目录结构（/src）

* api

  * xxx 文件夹

    * xxx.ts -> 参数类型集合

    * xxx.ts -> 接口方法

* assests

  * js文件夹

  * style文件夹(样式)

  * img文件夹

* commpoents

  * common文件夹（或者不选）

  * 组件名文件夹->index.vue

* hooks

* hook

* layout

  * 布局样式

* local

  * 国际化

* router

  * xxx各类路由集合（文件夹）

  * guard（文件夹）

  * other

  * index.ts->路由导出

* store

  * index.ts -> store导出

  * modules

    * xxx.ts

* views

  * xxx文件夹 -> index.vue -> 页面文件

* utils

  * 工具类文件夹

* 根目录下配置config->vite配置文件

* vite.config.base|dev|prod.ts

### 四、配置路由

**安装**：```npm i vue-router@4```

**安装**：```npm i nprogress ,npm i --save-dev @types/nprogress```

**配置**```index.ts```文件->```createRouter-export router```
```javascript
import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

import Home from '@/views/home/index.vue';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'home',
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/index.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

```

在```main.ts```挂载路由
```javascript
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
```

### 五、状态管理

**安装**：```npm install pinia```

```/src/store/module```->存储模块->模块文件夹```/index.ts``` ``&`` ```type.ts``` -> 类型与```index```(入口)

```javascript
// types.ts

export interface AppState {}

// index.ts

import { defineStore } from 'pinia';

const useAppStore = defineStore('name',{})

export default useAppStore;

// /src/store/index.ts

import { createPinia } from 'pinia';

import useAppStore from './modules/app';

const pinia = createPinia();

export { useAppStore };

export default pinia;
```

```main.ts```导入```store```

```javascript
import store from './store';

app.use(store);
```

### 六、配置UI框架：Element-plus

**安装**：```npm install element-plus --save```

```main.ts```里挂载

```javascript
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

app.use(ElementPlus)
```

### 七、配置axios

**安装**：```npm install axios```

**配置拦截器**

* ```main.ts```里挂载拦截器

* 在根目录下写入```.env.development：VITE_API_BASE_URL= 'http://localhost:5173'```

* 在根目录下写入```.env.production```

* 在根目录下```vite.env.ts```写入

```javascript
declare module '*.vue' {

import { DefineComponent } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types

const component: DefineComponent<{}, {}, any>;

export default component;

}

interface ImportMetaEnv {

readonly VITE_API_BASE_URL: string;

}
```

### 八、配置css

```npm i sass less stuls -D```

### 参考链接

[从 0 开始手把手带你搭建一套规范的 Vue3.x 项目工程环境](https://juejin.cn/post/6951649464637636622)

[vite](https://cn.vitejs.dev/)

[router]((https://router.vuejs.org/))

[pinia](https://pinia.web3doc.top/)

[axios](https://www.axios-http.cn/docs/interceptors)

[typescritpt](https://ts.yayujs.com/)

[Element-plus](https://element-plus.gitee.io/en-US/component/message-box.html#confirm)

[arco-design-pro-vue](https://github.com/WestCraneLi/arco-design-pro-vue/tree/main/arco-design-pro-vite)