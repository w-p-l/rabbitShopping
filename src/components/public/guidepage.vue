<template>
    <div>
        <!-- 引导页 -->
        <!-- Swiper -->
        <div class="swiper-container swiperGuidepage">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
                <!-- <div v-show="flag"> -->
                <div>
                    <img class="animated inge guide-bg" src="../../assets/images/yy5.jpg" alt="">
                    <h3 class="animated fliplnX delay-2s">Just for quality life</h3>
                </div>
            </div>
             <div class="swiper-slide">
                <!-- <div v-show="flag"> -->
                <div>
                    <img class="animated inge guide-bg" src="../../assets/images/yy6.png" alt="">
                    <h3 class="animated fliplnX">A bargain for</h3>
                </div>
            </div>
            <div class="swiper-slide">
                <!-- <div v-show="flag"> -->
                <div>
                    <img class="animated inge guide-bg" src="../../assets/images/bgq1.jpg" alt="">
                    <h5 >Set limit to rob the</h5>
                    <van-button class="animated tada" plain hairline type="primary" size="small" to="/home/recommend">点击体验</van-button>
                </div>
            </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination swiperGuidepageDot"></div>
        </div>
        <!--  -->
    </div>
</template>

<script>
    import Swiper from "swiper";

    export default {
        data(){
            return{
                flag:[true,true,true]
            }
        },
        created(){
            this.$store.state.bottomNav=false;
        },
        mounted(){
            let _this = this;

            new Swiper('.swiperGuidepage', {
                pagination: {
                    el: '.swiperGuidepageDot',
                },
                on: {
                    // 轮播图切换前效果
                    slideChangeTransitionStart: function(){
                    //   _this.flag=false;//隐藏
                    //   console.log(this.activeIndex);
                      _this.activeIndex=false;
                    },
                    slideChangeTransitionEnd: function(){
                    //   _this.flag=true;//切换结束时
                      _this.activeIndex=true;
                    },
                }
            });
        },
        destroyed(){//生命周期销毁时
            this.$store.state.bottomNav=true;//底部导航消失
            
        }
    }
</script>

<style lang="scss" scoped>
.swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
}

.swiper-container{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    .swiper-slide{
        text-align: center;
        .guide-bg{
            margin-left: auto;
            margin-right: auto;
            height: 100vh;
        }
        h3,h5,p{
            position: absolute;
            z-index: 5;
            text-align: center;
            width: 100%;
            font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            font-weight:100;
            color: #fff;
        }
        h3{
            bottom: 120px;
            font-size: 25px;
        }
        h5{
            bottom: 230px;
            font-size: 16px;
        }
        p{
            bottom: 195px;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.829);
        }
        .van-button{
            position: absolute;
            left: 50%;
            bottom: 80px;
            margin-left: -75px;
            z-index: 5;
            background-color: transparent;
            width:150px;
            height: 50px;
            line-height: 40px;
            border: 1px solid #fff;
            border-radius: 5px;
            font-size: 18px;
            color: #fff;
            text-align: center;
            font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
    }
    .swiperGuidepageDot{
        color: #fff;
    }
    

}

</style>