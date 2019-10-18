//axios 请求配置
// created by gym 2019/10/18

import qs from 'qs'
import axios from 'axios'
import baseUrl from './baseUrl'
import router from '../router'

//配置axios 基础数据
axios.defaults.timeout = 600000;
axios.defaults.baseURL = baseUrl;
// axios.defaults.withCredentials = true;
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
//application/json 才应该是常规操作
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// http request 拦截器
//增加token验证
axios.interceptors.request.use(
    config => {
        // if (config.method === 'post') {
        //     store.state.token && Object.assign(config.data, { token: store.state.token });
        // }
        // https://cnpmjs.org/package/qs
        //axios 默认发送数据为json格式， 再content type 为urlencode模式下后台接收有问题 用qs插件解决
        if (config.method === 'post') {
            config.data = qs.stringify(config.data);
        }
        config.headers.common['Authorization'] = localStorage.getItem('token');
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        if (response.data.status == 0 || response.data.status == 2) {
            // token失效或者不存在 清除token信息并跳转到登录页面
            localStorage.clear();
            sessionStorage.clear();
            router.push({ path: '/' });
        }
        return response.data;
    },
    err => {
        console.log(err);
        // 这里是返回状态码不为200时候的错误处理
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '请求错误';
                    break;

                case 401:
                    err.message = '未授权，请登录';
                    break;

                case 403:
                    err.message = '拒绝访问';
                    break;

                case 404:
                    err.message = `请求地址出错: ${err.response.config.url}`;
                    break;

                case 408:
                    err.message = '请求超时';
                    break;

                case 500:
                    err.message = '服务器内部错误';
                    break;

                case 501:
                    err.message = '服务未实现';
                    break;

                case 502:
                    err.message = '网关错误';
                    break;

                case 503:
                    err.message = '服务不可用';
                    break;

                case 504:
                    err.message = '网关超时';
                    break;

                case 505:
                    err.message = 'HTTP版本不受支持';
                    break;

                default:
                    break;
            }
        }
        console.log(err.response.status);
        // Vue.prototype
        //     .$alert(err.toString(), '提示', { type: 'error' })
        //     .then(() => {})
        //     .catch(() => {});
        return Promise.reject(err);
    }
);

export default axios;