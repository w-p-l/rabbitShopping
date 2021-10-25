<template>
    <div>
        <!-- 电视 -->
        <div class="capacity-box">
            <router-link to="/details" tag="a">
            <van-image width="100%" height="100%" fit="cover"
                :src="require('../../assets/images/d1.jpg')"
            />
         </router-link>
        </div>
        <!-- 今日推荐 -->
        <dayRecommend :dayRecommend="dayRecommend"></dayRecommend>

        <!--立即抢购  -->
        <div class="phone-box">
            <div>

            <router-link to="/details" tag="div">
                <van-image
                  width="100%"
                  height="100%"
                  fit="cover"
                  :src="require('../../assets/images/d2.jpg')"
                />
                <div class="bottom-txt">小米CC9 Pro
                    <van-button size="small" type="danger">立即抢购</van-button>
                </div>
            </router-link>
            </div>

        </div>

        <!--后面排版部分  -->
        <div class="capacity-case">
           <contentlayout :picture="picture"></contentlayout>
        </div>

        <!-- bottom -->
        <div class="bottom"></div>
        </div>
</template>

<script>
import contentlayout from "../public/contentlayout.vue"
import dayRecommend from "../public/dayRecommend.vue";

    export default {
        data(){
            return{
                picture:[
                    {
                        // src:require("../../assets/images/d2.jpg"),
                        data:[
                            {
                                path:require("../../assets/images/f3.png"),
                                title:"全面屏 55英寸",
                                txt:"全面屏设计，人工智能语音",
                                price:"￥1999"
                            },
                            {
                                path:require("../../assets/images/fcomputer1.png"),
                                title:"全面屏 55英寸",
                                txt:"全面屏设计，人工智能语音",
                                price:"￥1999"
                            },
                            {
                                path:require("../../assets/images/tv4.jpg"),
                                title:"全面屏 55英寸",
                                txt:"全面屏设计，人工智能语音",
                                price:"￥1999"
                            },
                            {
                                path:require("../../assets/images/f3.png"),
                                title:"全面屏 55英寸",
                                txt:"全面屏设计，人工智能语音",
                                price:"￥1999"
                            },
                        ]
                    },
                    {
                        src:require("../../assets/images/d4.jpg"),
                        data:[
                            {
                                path:require("../../assets/images/tv4.jpg"),
                                title:"全面屏 55英寸",
                                txt:"全面屏设计，人工智能语音",
                                price:"￥1999"
                            },
                            {
                                path:require("../../assets/images/tv4.jpg"),
                                title:"全面屏 55英寸",
                                txt:"全面屏设计，人工智能语音",
                                price:"￥1999"
                            },
                            {
                                path:require("../../assets/images/tv4.jpg"),
                                title:"全面屏 55英寸",
                                txt:"全面屏设计，人工智能语音",
                                price:"￥1999"
                            },
                        ]
                    },
                   
                ],
                // 今日推荐
                dayRecommend:[
                    {
                        src:"https://i8.mifile.cn/v1/a1/01669a1a-aa77-77bd-5425-2709a7451858.webp",
                        txt:"2000元"
                    },
                    {
                        src:"https://i8.mifile.cn/v1/a1/01669a1a-aa77-77bd-5425-2709a7451858.webp",
                        txt:"2000元"
                    },
                    {
                        src:"https://i8.mifile.cn/v1/a1/01669a1a-aa77-77bd-5425-2709a7451858.webp",
                        txt:"2000元"
                    },
                ]
                
            }
        },
        components:{
            contentlayout,
            dayRecommend,
        }
    }
</script>

<style lang="scss" scoped>

.van-image{
    display: block;
    font-size: 0;
}
// 
.capacity-case{
    background-color: rgb(240,241,243);
    padding:5px;
    margin: -1px 0 10px;
}
// bottom
.bottom{
    height: 50px;
}


// 立即抢购
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
}

</style>