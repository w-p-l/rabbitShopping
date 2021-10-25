export default[
    {
        path:"/guidepage",
        name:"引导页",
        component:()=>import("../components/public/guidepage.vue")
    },
    {
        path:"/advertising",
        name:"广告页",
        component:()=>import("../components/public/advertising.vue"),
        // 独享路由守卫,进入路由前
        beforeEnter: (to, from, next) => {
            console.log(to.path,from.path);//to从哪里进入的
            // 1.通过存储过程，判断存储中是否存在数据
            if(localStorage.advertising){
                // 2.有参数值，进入过引导页，直接跳转广告页
                next();
            }else{
                localStorage.advertising=true;
                next("/guidepage")//3.没有参数值，跳到引导页
            }
      }
    }
]
