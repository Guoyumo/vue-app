//项目主入口
//created by gym 2019/10/17

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
