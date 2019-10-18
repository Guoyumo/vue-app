//created by gym 2019/10/18
//配置请求基础url 用于vue.config.js 代理区分

const baseUrl = process.env.NODE_ENV === 'production' ? '/prod' : '/dev'
export default baseUrl