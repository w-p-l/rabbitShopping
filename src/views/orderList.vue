<template>
    <div>
        <!-- orderList 订单列表 点击支付后-->
        <!-- <van-sticky> -->
            <van-nav-bar 
            title="我的订单" 
            left-arrow
            @click-left="$router.push('/my')"
            >
            </van-nav-bar>
        <!-- </van-sticky> -->

            <!-- 导航 -->
            <van-tabs v-model="active"  @change="onadd" color="orange">
            <!-- <van-tabs v-model="active" color="orange"> -->
              <!-- <van-tab title="全部订单" to="/orderList/orderAll"></van-tab>
              <van-tab title="待付款" to="/orderList/orderPay"></van-tab>
              <van-tab title="待收货" to="/orderList/orderGoods"></van-tab>
              <van-tab title="已完成" to="/orderList/orderEnd"></van-tab> -->
              <van-tab title="全部订单" ></van-tab>
              <van-tab title="待付款" ></van-tab>
              <van-tab title="待收货"></van-tab>
              <van-tab title="已完成" ></van-tab>
            </van-tabs>
            
        <!-- 订单列表部分 -->
        <!-- 三级路由 -->
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        data() {
            return {
              active: 0,
            };
          },

          methods:{
              onadd(index){
                if(index ==0){
                    this.$router.push("/orderList/orderAll");
                }else if(index ==1){
                    this.$router.push("/orderList/orderPay");
                }else if(index ==2){
                    this.$router.push("/orderList/orderGoods");
                }else if(index ==3){
                    this.$router.push("/orderList/orderEnd");
                }
                  
              }
          },
        created(){
            this.$store.state.bottomNav=false;
            this.active = this.$route.query.id;
            this.onadd(this.active);
            // console.log(this.active);
            
        },
        destroyed(){//生命周期销毁时
            this.$store.state.bottomNav=true;
        }
    }
</script>

<style lang="scss" scoped>
.van-nav-bar .van-icon{
    color: rgb(136, 135, 135);
    font-size: 20px;
}

.van-panel__footer{
    text-align: right;
}
</style>