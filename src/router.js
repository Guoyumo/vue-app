//路由配置
//created by gym 2019/10/17
import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
    {
        path:'/',
        component: reslove => require(['./pages/login'],reslove)
    },
    {
        path:'/second',
        component:reslove => require(['./pages/second'],reslove)
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default  router;