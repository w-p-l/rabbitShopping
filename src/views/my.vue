<template>
    <div class="mybg">
        <!-- 我的 -->
        <!-- top头像 -->
                <div class="my-wrapper">

                <van-row class="my-top">
                  <van-col span="24" class="my-topimg">
                      <van-image
                          round
                          width="80px"
                          height="80px"
                          fit="cover"
                          src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                  </van-col>
                   <!-- 登录后 -->
                  <van-col  span="24" class="box-login">
                      <div v-if="$store.state.username" >
                            <span v-text="$store.state.username"></span>
                            <span @click="$store.state.username=''" class="san">退出</span>
                      </div>
                      <div v-else>
                            <router-link to="/login"    tag="span">登录</router-link>
                            <router-link to="/register" tag="span">注册</router-link>
                      </div>
                  </van-col>

                </van-row>
            </div>

        <!-- top头像end -->

        <!-- 我的订单 -->
            <div class="ding">
                <van-cell title="我的订单" to="/orderList/orderAll" is-link  size="large" />
            </div>

            <van-grid clickable :column-num="3" >
              <van-grid-item :icon="head[0].path" text="待付款" @click="hit(1)"  />
              <van-grid-item :icon="head[1].path" text="待收货" @click="hit(2)" />
              <van-grid-item :icon="head[2].path" text="历史定单" @click="hit(3)" />
            </van-grid>
        <!-- 我的订单end -->
        <!-- 会员中心 -->
        <!-- <div class="my-box">
            <van-cell title="会员中心" :icon="member[0].path" to="" is-link size="large"></van-cell>
            <van-cell title="我的优惠" :icon="member[1].path" to="" is-link size="large"></van-cell>
        </div> -->
        <div class="my-box">
            <van-cell title="我的地址" :icon="member[3].path" to="/address" is-link size="large"></van-cell>
            <van-cell title="新增地址" :icon="member[2].path" to="/addAddress" is-link size="large"></van-cell>
        </div>
        <div class="my-box">
            <van-cell title="我的收藏" :icon="member[4].path" to="/collect" is-link size="large"></van-cell>
            <!-- <van-cell title="礼物码兑换" :icon="member[5].path" to="" is-link size="large"></van-cell> -->
        </div>
       

        <!--  -->
        <div class="bottom"></div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                // 我的订单
                head:[
                    {path:require('.././assets/images/myicon3.png')},
                    {path:require('.././assets/images/myicon2.png')},
                    {path:require('.././assets/images/myicon9.png')},
                    ],
                // e饿了么
                 circleUrl: ".././assets/images/myicon3.png",
                // 会员
                member:[
                    {path:require('.././assets/images/myicon.png')},
                    {path:require('.././assets/images/myicon5.png')},
                    {path:require('.././assets/images/myicon6.png')},
                    // 
                    {path:require('.././assets/images/myicon7.png')},
                    {path:require('.././assets/images/myicon8.png')},
                    {path:require('.././assets/images/my-icon1.png')},
                    {path:require('.././assets/images/my-icon2.png')},

                    ],
  
            }
        },
        methods:{
            hit(index){
                this.$router.push({
                    path:'/orderList',
                    query:{
                        id:index
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.mybg{
    background-color: #f2f2f2;
}
// 头像

.my-top{
    width: 100%;
    min-height: 200px;
    padding:20px 0;
    background: url('../assets/images/g5.jpg') no-repeat;
    background-size: cover;
    // background-image: linear-gradient(to top,yellow 1%,rgb(132, 218, 4) 15%);
    .my-topimg{
        margin-top: 25%;
        margin-left: -15px;
    }
    .van-col{
        text-align: center;
        // min-height: 80px;
        .van-image{
            min-width: 60px;
            min-height: 60px;
            display: inline-block;
            margin: 0 2.5% 0 10%;
            border: 5px solid rgba(255, 250, 250, 0.719);
            border-radius: 50%;
        }
    }
    .box-login{
        margin-top: 10px;
        text-align: center;
        line-height: 30px;
        color: rgb(10, 10, 10);
        font-size: 16px;
        span{
            color: #000;
           margin: 0 20px;

        }
    }
    p{
        margin: 0;
        color:#fff;
        font-size: 16px;
        padding: 10px 40px 0;
    }
    .span{
        color: hsla(0,0%,100%,.6);
    }
    
}
// 我的订单
.van-cell,.van-cell__value,.van-cell__right-icon{
    color: #000;
    font-weight: 400;
}
.van-cell__title{
    font-size: 18px;
}
// 会员中心
.my-box{
    margin-top: 15PX;
}
.van-cell__left-icon, .van-cell__right-icon {
    min-width: 1em;
    height: 36px;
    font-size: 18px;
    line-height: 36px;
}
.van-cell{
    line-height: 36px;
    padding: 10px 30px;
}
.van-icon__image {
    width: 2em;
    height: 2em;
}
.van-cell__left-icon {
    margin-right: 30px;
}
.bottom{
    height: 60px;
}
</style>