export default{
    path:"/home",
    name:"首页",
    component:()=>import("../views/home.vue"),
    children: [
        {
            path: 'recommend',
            name:"推荐",
            component:()=>import("../components/home/recommend.vue"),
        },
        {
            path: 'phone',
            name:"手机",
            component:()=>import("../components/home/phone.vue"),
        },
        {
            path: 'capacity',
            name:"智能",
            component:()=>import("../components/home/capacity.vue"),
        },
        {
            path: 'television',
            name:"电视",
            component:()=>import("../components/home/television.vue"),
        },
        {
            path: 'notebook',
            name:"笔记本",
            component:()=>import("../components/home/notebook.vue"),
        },
        {
            path: 'appliances',
            name:"家电",
            component:()=>import("../components/home/appliances.vue"),
        },
    ]
}