import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import car from "./car.js";
import address from "./address.js";
import orderlist from "./orderlist.js";

export default new Vuex.Store({
  state: {
    bottomNav:true,//底部导航显示
    username:'',//用户信息
 
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    car,//购物车商品详情
    address,//我的地址
    orderlist//订单列表
  }
})

