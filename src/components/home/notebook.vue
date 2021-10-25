<template>
    <div>
        <!-- 笔记本 -->
        <!-- 图1 -->
        <div class="notebook-box">
            <router-link to="/details">
            <van-image width="100%" height="100%" fit="cover"
          :src="require('../../assets/images/notebook1.jpg')"
        />
         </router-link>
        </div>
        <!-- 今日推荐 -->
        <dayRecommend :dayRecommend="dayRecommend"></dayRecommend>
        
        <!-- 单独推荐 -->
        <div class="nominate">
            <router-link to="/details">
                <van-row>
                    <van-col span="12">
                        <van-image width="100%" height="100%" fit="cover"
                          :src="require('../../assets/images/fcomputer5.png')"/>
                      </van-col>
                    <van-col span="12">
                        <h3>RedmiBook 13</h3>
                        <p>全面屏包罗万千视界</p>
                        <div class="nominate-price">
                            <span class="rate1">19999</span>
                            <span class="rate2">起</span>
                            <del>222</del>
                            <van-button type="danger">立即购买</van-button>
                        </div>
                    </van-col>
                </van-row>
            </router-link>
        </div>
         <!--图2  -->

        <div class="notebook-box">
            <router-link to="/details">
                <van-image width="100%" height="100%" fit="cover"
                    :src="require('../../assets/images/notebook2.jpg')"/>
            </router-link>
        </div>
        <!-- 排版部分 -->
        <capacitycomposing :means="means" :meansdata="meansdata"></capacitycomposing>

        
        <!--  -->
        <div class="bottom"></div>
    </div>
</template>

<script>
import dayRecommend from "../public/dayRecommend.vue";
import capacitycomposing from "../public/capacitycomposing.vue";

    export default {
        data(){
            return{
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
                ],
                // 笔记本
                means:[{src:require("../../assets/images/appliance5.jpg")}],
                meansdata:[
                        {
                            path:require("../../assets/images/appliance4.jpg"),
                            title:"米家台灯1S",
                            content:"A 级光学照度/无可视频闪护眼台灯/无蓝光危害/Ra 90显色指数/小爱同学和Siri语音控制",
                        },
                        {
                            path:require("../../assets/images/appliance4.jpg"),
                            title:"米家台灯1S",
                            content:"A 级光学照度/无可视频闪护眼台灯/无蓝光危害/Ra 90显色指数/小爱同学和Siri语音控制",
                        },
                        {
                            path:require("../../assets/images/appliance4.jpg"),
                            title:"米家台灯1S",
                            content:"A 级光学照度/无可视频闪护眼台灯/无蓝光危害/Ra 90显色指数/小爱同学和Siri语音控制",
                        },
                ],
            }
        },
       
        components:{
            dayRecommend,
            capacitycomposing
        },
        
    }
</script>

<style lang="scss" scoped>
.notebook-box{

}
// 今日推荐
.top-title{
    font-size: 18px;
    color: #000;
    padding: 10px;
    font-weight: 600;
    background-color: #fff;
    // border-radius: 10px;
    overflow: hidden;
    .van-col{
        font-size: 14px;
        font-weight: 200;
        text-align: center;
        color: orange;
        margin-top: 10px;
    }
}
// 单独推荐
.nominate{
    padding: 10px;
    background-color: #fff;
    h3{
        font-size: 18px;
        margin-top: 20px;
        color: #000;
    }
    p{
        font-size: 14px;
        margin: 10px 0;
    }
    .nominate-price{
        text-align: center;
        margin-top: 20px;
    }
    .rate1{
        font-size: 16px;
        color: orangered;
    }
    .rate2{
        font-size: 12px;
        color: orangered;
        // padding: 1px 0;
    }
    del{
        font-size: 12px;
        color: rgba(0,0,0,.54);
        padding-left: 5px;
        box-sizing: border-box;
    }
    .van-button{
        background-color: orange;
        border: 0;
        padding: 0 20px;
        height: 38px;
        line-height: 38px;
    }
}
// 排版部分
.capacity-case{
    background-color: rgb(240,241,243);
    padding:5px;
    .case-top{
        padding: 20px 0;
    }
    .van-col{
        margin-top: 10px;
        .describe{
        padding-bottom: 10px;
        background-color: rgb(255, 255, 255);
        margin: 0 5px;
        }
        .van-image{
        display: block;
        }

        h3,p{
        background-color: rgb(255, 255, 255);
        margin: 0 5px;
        text-align: left;
        padding: 0 5px;
        }
        h3{
            font-size: 16px;
            line-height: 30px;
            color: #000;
        }
        p{
            color: rgb(158, 154, 154);
            line-height: 16px;
        }
    }
    
}
// 
.bottom{
    height: 50px;
} 
</style>