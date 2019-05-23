import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false;

// 配置全局的集中式的事件中间件 Bus
var bus = new Vue;
Vue.prototype.$bus = bus;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
