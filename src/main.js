import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

// 配置全局的集中式的事件中间件 Bus
var bus = new Vue;
Vue.prototype.$bus = bus;

new Vue({
  render: h => h(App),
}).$mount('#app')
