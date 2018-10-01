// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
// import Vuex from 'vuex'
import myComponent from './'
import LYJ from './utils/lyj.js';
import 'es6-promise/auto';
import axios from './axios'



import store from './store'

Vue.prototype._ = LYJ;
Vue.prototype.$http = axios;
// Vue.use(Vuex);
Vue.config.productionTip = false
// 获得权限
Notification.requestPermission();
Vue.prototype.$Message = myComponent.Message;
Vue.prototype.$notification = myComponent.Lnotification;
// import todo from '@/store/todo.js';
/* eslint-disable no-new */




new Vue({
  el: '#app',
  router,
  store,
  components: myComponent,
  template: '<App/>'
})


