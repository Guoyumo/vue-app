// vue.config.js vue 配置文件
// created by gym 2019/10/18

// 请求代理地址
const proxyTargetMap = {
    production: 'http://10.167.3.60:9966/yktch',//生产地址
    development: 'http://10.167.3.60:9966/yktch'//郭灿本地
};

let proxyTarget = proxyTargetMap[process.env.NODE_ENV] || proxyTargetMap.production;
module.exports = {
    // options...
    publicPath:'',

    // webpack 请求代理配置
    devServer: {
        open: false,
        compress: true,
        // 本地运行端口号
        port: 9000,
        // 跨域请求
        proxy: {
            // 测试环境
            '/dev': {
                target: proxyTarget,
                changeOrigin: true,
                pathRewrite: {
                    '^/dev': ''
                }
            },
            // 生产环境
            '/prod': {
                target: proxyTarget,
                changeOrigin: true,
                pathRewrite: {
                    '^/prod': ''
                }
            }
        },
    }
};