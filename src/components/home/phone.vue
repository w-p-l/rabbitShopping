<template>
    <div>
        <!-- 手机 -->
        <div class="phone-title">
            <swiper :imgs="picture"></swiper>
        </div>
        
        <van-image
          width="100%"
          height="100%"
          :src="require('../../assets/images/w2.png')"
        />
        <!-- 今日推荐 -->
        <dayRecommend :dayRecommend="dayRecommend"></dayRecommend>
        
        <!-- 详情 -->
        <div class="phone-box">
            <router-link to="/details" tag="div">
                <van-image
                  width="100%"
                  height="100%"
                  fit="cover"
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/369da5b95afd2dec52fdb2329810b2fc.jpg?thumb=1&w=696&h=436"
                />
                <div class="bottom-txt">小米CC9 Pro
                    <van-button size="small" type="danger">立即抢购</van-button>
                </div>
            </router-link>
            <!-- 下面的排版 -->

            <van-row gutter="10">
                <van-col span="12" v-for="(item,index) in goodsList" :key="index">
                    <router-link :to="'/details?id='+item.id" tag="div">
                        <van-image
                          width="100%"
                           fit="cover"
                          :src="item.image"
                        />
                        <h3 class="van-multi-ellipsis--l2">{{item.content}}</h3>
                        <h6>{{item.price}}</h6>
                        <p>立即购买</p>
                    </router-link>
                </van-col>
            </van-row>

            
        </div>
        <!--  -->
        <div class="height"></div>
    </div>
</template>

<script>
    import swiper from "../public/swiper.vue";
    import dayRecommend from "../public/dayRecommend.vue";

    export default {
        data(){
            return{
                picture:[
                    {src:require("../../assets/images/t5.jpg")},
                    {src:require("../../assets/images/t4.jpg")},
                    {src:require("../../assets/images/t3.jpg")},
                ],
                // 下面排版部分
                phone:[
                    {
                        src:"https://i8.mifile.cn/v1/a1/734e5838-b80a-a49f-ea12-5ef05eb513a5.webp",
                        txt:"小米CC9 8GB+256GB 美图定制版「赠Redmi小爱音箱Play，+1元得50GB云空间月卡，付款成功可参与抽奖，最高赢小米电视」",
                        price:"￥1999元",
                        buy:"立即购买"
                    },
                    {
                        src:"https://i8.mifile.cn/v1/a1/734e5838-b80a-a49f-ea12-5ef05eb513a5.webp",
                        txt:"小米CC9 8GB+256GB 美图定制版「赠Redmi小爱音箱Play，+1元得50GB云空间月卡，付款成功可参与抽奖，最高赢小米电视」",
                        price:"￥1999元",
                        buy:"立即购买"
                    },
                    {
                        src:"https://i8.mifile.cn/v1/a1/734e5838-b80a-a49f-ea12-5ef05eb513a5.webp",
                        txt:"小米CC9 8GB+256GB 美图定制版「赠Redmi小爱音箱Play，+1元得50GB云空间月卡，付款成功可参与抽奖，最高赢小米电视」",
                        price:"￥1999元",
                        buy:"立即购买"
                    },
                    {
                        src:"https://i8.mifile.cn/v1/a1/734e5838-b80a-a49f-ea12-5ef05eb513a5.webp",
                        txt:"小米CC9 8GB+256GB 美图定制版「赠Redmi小爱音箱Play，+1元得50GB云空间月卡，付款成功可参与抽奖，最高赢小米电视」",
                        price:"￥1999元",
                        buy:"立即购买"
                    },
                ],
                // 今日推荐
                dayRecommend:[
                    {
                        src:require("../../assets/images/fphonec6.jpg"),
                        txt:"2000元"
                    },
                    {
                        src:require("../../assets/images/fphonec6.jpg"),
                        txt:"2000元"
                    },
                    {
                        src:require("../../assets/images/fphonec6.jpg"),
                        txt:"2000元"
                    },
                ],
                goodsList:[],//获取axios数据

            }
        },
         created(){
            this.$axios.get("goodsList").then((data)=>{
                console.log(data);
                this.goodsList= data.data.result;
            })
        },
        components:{
            swiper,
            dayRecommend
        },
    }
</script>

<style lang="scss" scoped>
// 轮播
.phone-title{
    margin: 10px;
    border-radius: 10px;
    overflow: hidden;
}


// 详情
.phone-box{
        margin: 10px;
    .bottom-txt{
        font-size: 18px;
        line-height: 30px;
        padding-bottom: 30px;
        position: relative;
        background-color: #fff;
    }
    .van-button{
        // height: 30px;
        position: absolute;
        top: 15px;
        right: 10px;
        background-color: orange;
        border: 1px solid orange;
        padding: 0 20px;
    }
    .van-col,.van-col--12{
        width: 50%;
        // background-color: #fff;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 5px;
        overflow: hidden;
        div{
            background-color: #fff;
            padding: 5px 5px 0px;
            overflow: hidden;
            box-sizing: border-box;
            border-radius: 5px;

        }
    }
    h3{
        margin: 5px 0;
        line-height: 20px;
        font-size: 14px;
        font-weight: 400;
    }
    h6{
        color: orange;
        padding-top: 5px;
        font-size: 12px;

    }
    p{
        color: rgb(184, 183, 181);
        text-align: right;
        padding: 5px 0;
    }
}
// height
.height{
    height: 50px;
}

</style>