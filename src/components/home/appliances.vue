<template>
    <div>
        <!-- 家电 -->
        <div class="capacity-box">
            <router-link to="/details" tag="a">
            <van-image width="100%" height="100%" fit="cover"
                :src="require('../../assets/images/j7.jpg')"
            />
         </router-link>
        </div>
         <!-- 家电部分     -->
        <composing :setting="setting" :settingdata="settingdata"></composing>
            
        <!-- 内容排版 -->
        <div class="capacity-case">
            <contentlayout :picture="picture"></contentlayout>
        </div>
        <!--  -->
    <div class="bottom"></div>

    </div>
</template>

<script>
import contentlayout from "../public/contentlayout.vue"
import composing from "../public/composing.vue"
    export default {
        data(){
            return{
                picture:[
                    {
                        src:require("../../assets/images/j.jpg"),
                        data:[
                            {
                                path:require("../../assets/images/appliance3.jpg"),
                                title:"全面屏 55英寸",
                                txt:"全面屏设计，人工智能语音",
                                price:"￥1999"
                            },
                            {
                                path:require("../../assets/images/appliance3.jpg"),
                                title:"全面屏 55英寸",
                                txt:"全面屏设计，人工智能语音",
                                price:"￥1999"
                            },
                            {
                                path:require("../../assets/images/appliance3.jpg"),
                                title:"全面屏 55英寸",
                                txt:"全面屏设计，人工智能语音",
                                price:"￥1999"
                            },
                            {
                                path:require("../../assets/images/appliance3.jpg"),
                                title:"全面屏 55英寸",
                                txt:"全面屏设计，人工智能语音",
                                price:"￥1999"
                            },
                            {
                                path:require("../../assets/images/appliance3.jpg"),
                                title:"全面屏 55英寸",
                                txt:"全面屏设计，人工智能语音",
                                price:"￥1999"
                            },
                        ]
                    },
                    {
                        src:require("../../assets/images/j.jpg"),
                        data:[
                            {
                                path:require("../../assets/images/appliance3.jpg"),
                                title:"全面屏 55英寸",
                                txt:"全面屏设计，人工智能语音",
                                price:"￥1999"
                            },
                            {
                                path:require("../../assets/images/appliance3.jpg"),
                                title:"全面屏 55英寸",
                                txt:"全面屏设计，人工智能语音",
                                price:"￥1999"
                            },
                            {
                                path:require("../../assets/images/appliance3.jpg"),
                                title:"全面屏 55英寸",
                                txt:"全面屏设计，人工智能语音",
                                price:"￥1999"
                            },
                        ]
                    },
                   
                ],
                // 品牌手机
                setting:[{src:require("../../assets/images/j5.jpg")}],
                settingdata:[
                            {
                                path:require('../../assets/images/fstore26.png'),
                                title:"小米CC9 美图定制版",
                                content:"8GB+256GB，100%美图相机",
                                price:"￥1999",
                                spec:"立即购买",
                            },
                            {
                                path:require('../../assets/images/kitchen3.png'),
                                title:"小米CC9 美图定制版",
                                content:"8GB+256GB，100%美图相机",
                                price:"￥1999",
                                spec:"立即购买",
                            },
                        ],
                
            }
        },
        components:{
            contentlayout,
            composing
        }
    }
</script>

<style lang="scss" scoped>
.van-image{
    display: block;
}
.capacity-case{
    background-color: rgb(248, 245, 253);
    padding:5px;
    margin: -1px 0 10px;
}
.bottom{
    height: 50px;
}


</style>