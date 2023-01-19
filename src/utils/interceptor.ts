import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';
// import { useUserStore } from '@/store';
// import { getToken } from '@/utils/auth';

export interface HttpResponse<T = unknown> {
  status: number;
  msg: string;
  code: number;
  data: T;
}

// .env.development -> env.d.ts
// if (import.meta.env.VITE_API_BASE_URL) {
//   axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
// }

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // let each request carry token
    // this example using the JWT token
    // Authorization is a custom headers key
    // please modify it according to the actual situation
    // const token = getToken();
    // if (token) {
    //   if (!config.headers) {
    //     config.headers = {};
    //   }
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    // do something
    return Promise.reject(error);
  }
);
// add response interceptors
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      // ElMessage({
      //   message: res.msg || 'Request Error',
      //   grouping: true,
      //   type: 'error',
      //   duration: 5 * 1000,
      // })
      // // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if (
      //   [50008, 50012, 50014].includes(res.code) &&
      //   response.config.url !== '/api/user/info'
      // ) {
      //   ElMessageBox.confirm(
      //     'Confirm logout?',
      //     'Warning',
      //     {
      //       confirmButtonText: 'OK',
      //       cancelButtonText: 'Cancel',
      //       type: 'warning',
      //     }
      //   )
      //     .then(() => {
      //       ElMessage({
      //         type: 'success',
      //         message: 'logged completed',
      //       })
      //       window.location.reload();
      //     })
      //     .catch(() => {
      //       ElMessage({
      //         type: 'info',
      //         message: 'logged canceled',
      //       })
      //     })
      // }
      return Promise.reject(new Error(res.msg || 'Error'));
    }
    return res;
  },
  (error) => {
    ElMessage({
      message: error.msg || 'Request Error',
      grouping: true,
      type: 'error',
      duration: 5 * 1000,
    })
    return Promise.reject(error);
  }
);
