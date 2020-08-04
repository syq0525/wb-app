/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-03 09:08:18
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-04 10:54:45
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
import store from './store'
import Utils from './utils/index'; 
import routes from './config/routes';
import App from './App.vue'
import Components from './components/index';
Vue.use(Components);
import Fastclick from 'fastclick';
Fastclick.attach(document.body);

Vue.use(Utils);
Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'hash',
	base: __dirname,
	routes
});
Vue.$router = router;
Vue.$store = Vue.prototype.$store = store;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
