<template>
    <div>
        <!-- 智能 -->
        <swiper :imgs="picture"></swiper>
        
        <!-- 图 -->

        <div class="capacity-box">
            <router-link to="/details">
                <van-image width="100%" height="100%" fit="cover"
                    :src="require('../../assets/images/z1.jpg')"/>
            </router-link>
        </div>
        <!--智能推荐  -->
        
        <div class="top-title">智能推荐
            <van-row 
                gutter="10" 
                class="top-box"
                >
                <van-col span="8" v-for="(item,index) in data" :key="index">
                    <router-link to="/details" tag="div">
                        <van-image
                          width="70%"
                          height="100%"
                          fit="cover"
                          :src="item.path"
                        />
                        <p class="van-ellipsis">扫拖一体机器人</p>
                    </router-link>
                </van-col>
            </van-row>
        </div>
        <!-- 智能bottom 部分-->
        <capacitycomposing :means="means" :meansdata="meansdata"></capacitycomposing>

        
        <!--bottom 部分end  -->
        <div class="bottom"></div>
    </div>
</template>

<script>
    import swiper from "../public/swiper.vue";
    import capacitycomposing from "../public/capacitycomposing.vue";

    export default {
        data(){
            return{
                picture:[
                    {src:require("../../assets/images/z9.png")},
                    {src:require("../../assets/images/z10.jpg")},
                    // {src:require("../../assets/images/z11.jpg")},
                ],
                data:[
                    {
                    path:require("../../assets/images/fhome3.png"),
                    content:"扫拖一体机器人",
                    price:"￥1999"
                    },
                    {
                    path:require("../../assets/images/fhome6.png"),
                    content:"扫拖一体机器人",
                    price:"￥1999"
                    },
                    {
                    path:require("../../assets/images/fhome5.png"),
                    content:"扫拖一体机器人",
                    price:"￥1999"
                    },
                ],
                means:[{src:require("../../assets/images/z4.jpg")}],
                meansdata:[
                        {
                            path:require("../../assets/images/z6.jpg"),
                            title:"米家台灯1S",
                            content:"A 级光学照度/无可视频闪护眼台灯/无蓝光危害/Ra 90显色指数/小爱同学和Siri语音控制",
                        },
                        {
                            path:require("../../assets/images/z7.jpg"),
                            title:"米家台灯1S",
                            content:"A 级光学照度/无可视频闪护眼台灯/无蓝光危害/Ra 90显色指数/小爱同学和Siri语音控制",
                        },
                        {
                            path:require("../../assets/images/z8.jpg"),
                            title:"米家台灯1S",
                            content:"A 级光学照度/无可视频闪护眼台灯/无蓝光危害/Ra 90显色指数/小爱同学和Siri语音控制",
                        },
                ],
            }
        },
        components:{
            swiper,
            capacitycomposing
        },
    }
</script>

<style lang="scss" scoped>
// 智能推荐
.top-title{
    font-size: 18px;
    color: rgba(255, 166, 0, 0.767);
    padding: 10px;
    font-weight: 600;
    background-color: rgba(252, 252, 252, 0.904);
    border-radius: 10px;
    overflow: hidden;
    p{
        color: #000;
    }
    .van-col{
        font-size: 14px;
        font-weight: 200;
        text-align: center;
        color: red;
        margin-top: 10px;
    }
}
// 图
.capacity-box{
    margin: 10px;
    overflow: hidden;
    border-radius: 10px;
}

// 
.bottom{
    height: 50px;
}

</style>