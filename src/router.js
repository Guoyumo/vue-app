import VueRouter from "vue-router";
import helloWord from './components/HelloWorld'
import second from './components/second'

const routes = [
    {
        path:'/',
        component:helloWord
    },
    {
        path:'/second',
        component:second
    }
];

const router = new VueRouter({
    routes
});

export default  router;