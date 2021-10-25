<template>
    <div id="viewport">
        <!--  -->
      <div class="wrapper">
      <!-- 搜索 -->
        <van-sticky>
        <van-row type="flex" justify="space-between" class="topSearchNav">
          <van-col span="3" align="center">    
            <span class="iconfont icon-mi2 searchicon"></span>
          </van-col>
          <van-col span="19">      
            <van-search shape="round" placeholder="搜索商品名称" @focus="getSearch"  />
          </van-col>
          <van-col span="2">
          </van-col>

        </van-row>
      <!-- 搜索end -->

     <!-- 头部导航路由 -->
        <div class="nav-route">
            <van-row>
                <van-col span="23">
                  <van-tabs
                          title-active-color="orange" 
                          line-height="2px"
                          line-width="30px"
                          background="#fff"
                          color="orange"
                  >
                    <van-tab to="/home/recommend" title="推荐"></van-tab>
                    <van-tab to="/home/phone" title="手机"></van-tab>
                    <van-tab to="/home/capacity" title="智能"></van-tab>
                    <van-tab to="/home/television" title="电视"></van-tab>
                    <van-tab to="/home/notebook" title="笔记本"></van-tab>
                    <van-tab to="/home/appliances" title="家电"></van-tab>
                  </van-tabs>
                </van-col>
              
            </van-row>
           
        </div>
      <!-- 路由end -->
        </van-sticky>

      <!--  -->

      </div>
      <transition mode="out-in">
        <router-view></router-view>
      
      </transition>
<!--  -->
    </div>
</template>

<script>
    import Swiper from "swiper";
    export default {
      data:function(){
        return{
          value:"",//搜索框
          flag:false,
          //标签路由:
          routerarr:[
                    {
                        text:"推荐",
                        link:"/Home/recommend",
                    },
                    {
                        text:"手机",
                        link:"/Home/phone",
                    },
                    {
                        text:"智能",
                        link:"/Home/capacity",
                    },
                    {
                        text:"电视",
                        link:"/Home/television",
                    },
                    {
                        text:"笔记本",
                        link:"/Home/notebook",
                    },
                    {
                        text:"家电",
                        link:"/Home/appliances",
                    },
          ],
        }
      },
      methods:{
        getSearch(){//搜索框获取焦点
          this.$router.push("/search")
        },
        hide(){

        }
      },
      mounted(){
            // 注意：.swiper-container swiper中实例化对象第一值，是swiper显示最外面对象容器。这个类在重复使用swiper容易冲突，重新定义类名解决 
            new Swiper('.swiperBox', {
                slidesPerView: 6, //显示可视轮播图个数
                freeMode: true
            });
        }
    }
</script>

<style lang="scss" scoped>
#viewport{
  overflow: hidden;
}
// 路由过度效果
	.v-enter,
	.v-leave-to{
		opacity: 0;
		transform: translateX(-200px);
	}
	.v-enter-active,
	.v-leave-active{
		transition: all 0.3s ease;
	}

  .wrapper{
    width: 100%;
    background-color: #fff;
    // 搜索
      .topSearchNav{
        background-color: #fff;

        // background-image: linear-gradient(to top,yellow 1%,rgb(132, 218, 4) 5%,#fff 40%);
      .searchicon{
        display: block;
        text-align: center;
        font-size: 24px;
        height: 44px;
        line-height: 44px;
      }
      .icon-mi2{
        color: orange;
      }
      .icon-ren1{
        color: 89,89,89;
      }
      .van-search {
        padding: 5px;
        // background-image: linear-gradient(to top,yellow 1%,rgb(132, 218, 4) 5%,#fff 40%);
        .van-cell{
        background-color: transparent;
        }
      }
      .van-search__content{
        background:transparent;
        border: 1px solid orange;
        }
      }
    // 路由
    .nav-route{
        width: 100%;
        position: relative;
         background-color: #fff;
        .nav-right{
         text-align: center;
         height: 44px;
         line-height: 40px;
         position: relative;
         z-index: 999;
         color: rgb(116, 116, 116);
         background-color: #fff;
      }
    }
  }
  // swiper公共样式
        .swiper-container {
        width: 100%;
        height: 100%;
        }
        .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        width: 16.6%;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        }
</style>