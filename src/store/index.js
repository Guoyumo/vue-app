// vuex 主入口 全局数据
// created by gym 2019/10/17


import Vue from 'vue'
import Vuex from 'vuex'
import point from './point'
import module2 from './module2'

//引入之后，对vuex进行引用
Vue.use(Vuex)


const  store =  new Vuex.Store({
    state:{
        test:"全局数据"
    },
    mutations:{
    },
    actions : {
    },
    modules: {
        point,
        module2
    }
});

export default  store;