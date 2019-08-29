
//引入vue和Vuex
import Vue from 'vue'
import Vuex from 'vuex'

//引入之后，对vuex进行引用
Vue.use(Vuex)
const  store =  new Vuex.Store({
    state:{
        isStore:true
    }
});

export default  store;