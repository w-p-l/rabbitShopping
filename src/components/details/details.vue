<template>
    <div>
        <!-- 详情页-->
        <!-- 返回按钮 -->
        <van-button class="arrowtop" 
        @click="$router.go(-1)" 
        icon="arrow-left" round type="default" />

        <!-- 引入组件轮播   v-bind数据组件传参，组件与数据分离，让组件复用-->
        <swiper :imgs="Images"></swiper>

        <!--内容描述  -->
        <div class="commodity">
            <h1>{{goods.name}}</h1>
            <p>{{goods.content}}
            </p>
            <div class="rate">￥{{goods.price}}</div>
            <van-image width="100%" height="100%" fit="cover"
              :src="require('../../assets/images/w2.png')"
            />

            <!-- 轮播   为你推荐 -->
            <div class="introducers">为你推荐</div>

            <div class="swiperbox2">
                <div class="swiper-container swiper2">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in Images" :key=index>
                            <van-image
                                width="8rem"
                                height="8rem"
                                fit="contain"
                                :src="item"
                              /> <br>
                                <!-- :src="item.src" -->

                              <!-- <p class="textp van-ellipsis">{{item.txt}}</p> -->
                        </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination swiper2dian"></div>
                </div>
            </div>
        <!-- 图 商品详情-->
            <van-tabs v-model="active" color="orange">
                <van-tab title="商品详情">
                    <div v-for="(item,index) in path" :key=index>
                      <van-image
                          width="100%"
                          height="100%"
                          fit="cover"
                          :src="item"
                        />
                    </div>
                </van-tab>
                <van-tab title="参数">
                    <div v-for="(item,index) in parameter" :key=index>
                      <van-image
                          width="100%"
                          height="100%"
                          fit="cover"
                         :src="item"
                        />
                    </div>
                </van-tab>
            </van-tabs>
        </div>
<!-- 内容描述end -->
        <div class="ttop"></div>
        <!-- 加入购物车导航 -->
        <van-goods-action>
          <van-goods-action-icon icon="wap-home-o" @click="$router.push('/')"/>
          <van-goods-action-icon icon="cart-o" :info="num" @click="$router.push('/car')"/>

          <div @click="collect(goods)">
            <van-goods-action-icon icon="star-o" v-show="collectbool==false" />
            <van-goods-action-icon icon="star" v-show="collectbool ==true" color="orange"/>
          </div>

          <van-goods-action-button @click="add(goods)" color="rgb(255, 196, 0)" type="warning" text="加入购物车" />
          <van-goods-action-button color="orange" type="danger" text="立即购买" />
        </van-goods-action>
        <!-- 加入购物车导航end -->
        

        <!--  -->
    </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex'
    const { mapState,mapMutations } = createNamespacedHelpers('car')
// 引入轮播图组件
    import swiper from "../public/swiper";
    import Swiper from "swiper";


    export default {
        data(){
            return{
                active: 2,
                Images:[
                    // {src:require("../../assets/images/x.jpg")},
                    // {src:require("../../assets/images/x2.jpg")},
                ],
                // 轮播图推荐
                data:[
                    {
                        src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccd09671448c4cdb4a3817f68f788662.jpg",
                        txt:"小米10pro"
                    },
                     {
                        src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccd09671448c4cdb4a3817f68f788662.jpg",
                        txt:"小米10pro"
                    },
                     {
                        src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccd09671448c4cdb4a3817f68f788662.jpg",
                        txt:"小米10pro"
                    },
                     {
                        src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccd09671448c4cdb4a3817f68f788662.jpg",
                        txt:"小米10pro"
                    },
                     {
                        src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccd09671448c4cdb4a3817f68f788662.jpg",
                        txt:"小米10pro"
                    },
                ],
                // 商品详情
                datum:[
                    {src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c3663eb67d6975ba4d2eb390b4e9945.jpg?w=1080&h=1742"},
                    {src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4924aa1695e106c72472035b2bc40702.jpg?w=1080&h=1541"},
                    {src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7d96c463d8466399c98126cfabbd244.jpg?w=1080&h=1066"},
                    {src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d96725158d2d30ff2923da02006f43d.jpg?w=1080&h=1049"},
                ],
                // // 商品参数
                // parameter:[
                //     {src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9b29bb8ef5ec3c13916b574fc427056a.jpg?w=1080&h=1016"},
                //     {src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4540099341103361102880e01f16ee8.jpg?w=1080&h=1125"},

                // ],
                goods:{
                    // id:5,
                    // name:"小米10 Pro",
                    // content:"前置3200万自拍 / 索尼4800万超广角三摄 ",
                    // price:"3999",
                    // num:1,
                },
                path:{
                    
                },
                parameter:{
                    
                },
            }
        },
        methods:{
            // getCart(){
            //     // 把数据添加入vuex购物车
            //     this.$store.commit('car/add',this.goods);
            // }
            //add 直接调用vuex购物车里面add方法
            ...mapMutations(['add','collect']),
        },
        components:{
            swiper
        },
        computed:{
            ...mapState({
                num:state=>state.num,
                collectbool: state=>state.collectbool,
            })
        },
        created(){
            this.$store.state.bottomNav=false;
            
            //得到对应的id值
            let goodsId = this.$route.query.id || 1;
            console.log(goodsId);


            // 请求接口数据
            // http://127.0.0.1:3000/goodsList/1
            // http://127.0.0.1:3000/goodsList?id=1
            this.$axios.get("goodsList/"+goodsId).then((data)=>{
                console.log("详情页得到的数据",data);
                this.goods = data.data.result;
                this.goods.num = 1;
                this.Images = data.data.result.imgs;
                this.path = data.data.result.path;
                this.parameter = data.data.result.parameter;
                console.log("轮播imgs",this.Images);
                
                
            })

            
            
        },
        mounted(){
             new Swiper('.swiper2', {
                pagination: '.swiper2dian',
                slidesPerView: 3,
                paginationClickable: true,
                spaceBetween: 30
            });
        },
        destroyed(){//生命周期销毁时
            this.$store.state.bottomNav=true;//底部导航消失
            
        }
    }
</script>

<style lang="scss" scoped>
.con{
    color: #ff5000;
}
.ttop{
    height: 50px;
}
// 按钮
.arrowtop{
        position:fixed;
        top:30px;
        left:30px;
        z-index: 200;
        width: 42px;
        background-color: rgba(7, 7, 7, 0.438);
        border: 1px solid rgba(7, 7, 7, 0);
        color: #fff;
        
        i{
            display: block;
            width: 42px;
            height: 42px;
            position: absolute;
            left: 0px;
            top:0px;
            font-size: 24px;
        }
    }
   .van-button--large{
        width: 50%;
    }
// 内容描述
.commodity{
    padding: 10px 20px;
    background-color: #fff;
    h1{
        font-size: 24px;
        color: rgb(58, 58, 58);
    }
    p{
        font-size: 14px;
        color: grey;
    }
    .rate{
        font-size: 20px;
        color: rgb(255,92,56);
        margin: 20px 0px 10px;
    }
    .van-button{
        line-height: 25px;
        height: 25px;
    }
    .van-button--info{
        background-color: #fff;
        border: 1px solid rgb(255,92,56);
        color: rgb(255,92,56);
    }
    // 内容
    .descrbox{
        // margin: 20px 0;
        // border: 1px solid rgb(202, 198, 198);
        border-radius: 10px;
        // height: 200px;
        overflow: hidden;
    }
}
// 轮播
.introducers{
    text-align: center;
    font-size: 20px;
    color: orange;
    padding: 5px 0;

}
.swiperbox2{
    margin: 40px 0;
}
.textp{
    width: 80px;
    overflow: hidden;
    position: absolute;
    bottom: 0px;
    // padding-bottom: 20px;
}
.van-image{
    margin-bottom: 20px;
}
    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        position: relative;
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
    // 
    .van-goods-action{
        z-index: 999;
    }

</style>