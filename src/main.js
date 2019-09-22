/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-25 00:52:30
 * @LastEditTime: 2019-09-01 12:58:01
 * @LastEditors: Please set LastEditors
 */
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

import App from './App'

import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '../static/global.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '../static/summernote/summernote-bs4.css';
import '../static/summernote/summernote-bs4.min';
import 'summernote'
import 'summernote/dist/lang/summernote-zh-CN'
import 'summernote/dist/summernote.css'

// import 'APlayer/dist/APlayer.min.css';
// import APlayer from 'APlayer';
// import Aplayer from 'vue-aplayer'


// import VueUeditorWrap from 'vue-ueditor-wrap'
// 视频播放器
// import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
// import VideoPlayer from 'vue-video-player'
// Vue.use(VideoPlayer);

import { Base64 } from 'js-base64';

Vue.use(ElementUI);

Vue.prototype.$http = axios;
Vue.prototype.$base64 = Base64;
// Vue.prototype.$ap = APlayer;
// Vue.use(Vuex);
Vue.config.productionTip = false;

Vue.prototype.$url=function(){
  var url = decodeURIComponent(location.search);
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    var strs = str.split("&");
    for(var i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
};


// 获得权限
// Notification.requestPermission();
// Vue.prototype.$Message = myComponent.Message;
// Vue.prototype.$notification = myComponent.Lnotification;
// import todo from '@/store/todo.js';
/* eslint-disable no-new */

// import component from 'component_path'

import i18n from './i18n'


new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {App},
  template: '<App/>'
})


