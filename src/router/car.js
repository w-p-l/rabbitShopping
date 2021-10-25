// 购物车路由
export default[
  {
    path:"/car",
    name:"购物车",
    component:()=>import("../views/car.vue")
  },
  {
    path:"/order",
    name:"订单",
    component:()=>import("../components/car/order.vue")
  },
]