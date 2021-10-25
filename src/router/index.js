import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import publics from "./public.js";
import home from "./home.js";
import classify from "./classify.js";
import star from "./star.js";
import car from "./car.js";
import my from "./my.js";
import search from "./search.js";
import details from "./details.js";
import order from "./order.js";


const routes = [
  { 
    path:'/', 
    redirect:'/advertising',//跳到广告页
    
  },
  ...publics,//公共路由，引导页。。
  home,     //首页
  classify, //分类
  star,     //星球
  ...car,  //购物车
  ...my,       //我的   解构，访问时变成主路由
  search,   //搜索
  details,  //详情页
  ...order,//订单列表
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // linkActiveClass:"con"
})

export default router
