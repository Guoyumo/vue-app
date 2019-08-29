import VueRouter from "vue-router";


const routes = [
    {
        path:'/',
        component: reslove => require(['./components/HelloWorld'],reslove)
    },
    {
        path:'/second',
        component:reslove => require(['./components/second'],reslove)
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default  router;