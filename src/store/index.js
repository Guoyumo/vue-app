
//引入vue和Vuex
import Vue from 'vue'
import Vuex from 'vuex'
import module1 from './module1'
import module2 from './module2'

//引入之后，对vuex进行引用
Vue.use(Vuex)


const  store =  new Vuex.Store({
    state:{
        test:"rootState"
    },
    mutations:{
        testM: state =>{
            state.test = "123"
        }
    },
    actions : {
        testA: ({commit}) => {
            commit('testM')
        }
    },
    modules: {
        module1,
        module2
    }
});

export default  store;