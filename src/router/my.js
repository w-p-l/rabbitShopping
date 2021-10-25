// 我的路由
export default[
  {
    path:"/my",
    name:"我的",
    component:()=>import("../views/my.vue")
  },
  {
    path:"/login",
    name:"登录",
    component:()=>import("../components/my/login.vue"),

  },
  {
    path:"/register",
    name:"注册",
    component:()=>import("../components/my/register.vue"),
    // beforeRouteLeave (to, from, next) {
    //    console.log(to.path,from);
    //   console.log(this.$route.username);
      
    //   next();
    // }
  },
  {
    path:"/address",
    name:"我的地址",
    component:()=>import("../components/my/address.vue")
  },
  {
    path:"/addAddress",
    name:"添加地址",
    component:()=>import("../components/my/addAddress.vue")
  },
  {
    path:"/editAddress",
    name:"编辑地址",
    component:()=>import("../components/my/editAddress.vue")
  },
  {
    path:"/collect",
    name:"我的收藏",
    component:()=>import("../components/my/collect.vue")
  },
  
  

]