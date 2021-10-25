<template>
  <div id="pointView">
    <!--  -->
    <!-- 1 -->
    <transition mode="out-in" :duration="{ enter: 500, leave: 500 }" enter-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>

    <div class="height"></div>
    <!--  底部导航-->
    <van-tabbar v-model="active" 
    active-color="orange"
    v-show="$store.state.bottomNav"
    :route="roubool"
    >
      <van-tabbar-item to="/home/recommend"  icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/classify"  icon="apps-o">分类</van-tabbar-item>
      <!-- <van-tabbar-item to="/star"  icon="circle">星球</van-tabbar-item> -->
      <van-tabbar-item to="/car"  icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/my"  icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 底部导航end -->
  </div>
</template>

<script>
  export default {
    data() {
    return {
      active: 0,
      roubool:true,//开启路由模式
    };
  }
  }
</script>

<style lang="scss" scoped>
.pointView{
  overflow: hidden;
}
// .height{
//   height: 50px;
// }
</style>