// 订单列表
export default[
    {
    path:"/orderList",
    name:"订单列表",
    component:()=>import("../views/orderList.vue"),
    children:[
        {
            path:"orderAll",
            name:"全部订单",
            component:()=>import("../components/orderList/orderAll.vue"),

        },
        {
            path:"orderPay",
            name:"待付款",
            component:()=>import("../components/orderList/orderPay.vue"),

        },
        {
            path:"orderGoods",
            name:"待收货",
            component:()=>import("../components/orderList/orderGoods.vue"),

        },
        {
            path:"orderEnd",
            name:"已完成",
            component:()=>import("../components/orderList/orderEnd.vue"),

        }
        
    ]
    }
    
]