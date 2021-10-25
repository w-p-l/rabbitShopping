import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Vant from 'vant';
import 'vant/lib/index.css';

import App from './App.vue'
import router from './router'
import store from './store'
// 移动端公共样式css
import "./assets/css/base.css";
// swiper
import "../node_modules/swiper/css/swiper.css";
// 字体图标
import "./assets/font/iconfont.css"
// 动画效果
import "animate.css";

// axios配置
import axios from "axios";
// 路径默认配置,所有访问的路径
axios.defaults.baseURL = 'http://127.0.0.1:3000/';
Vue.prototype.$axios = axios;
// 

Vue.use(ElementUI);
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
