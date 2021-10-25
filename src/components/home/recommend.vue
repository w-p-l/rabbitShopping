<template>
    <div>
        <!-- 推荐 -->
        <!-- 轮播 -->
        <div class="swiperRecommendBox">
            <div class="swipercase">
                <swiper :imgs="picture"></swiper>
            </div>
        </div>
        <!-- 分类 -->

        <van-grid :border="false" icon-size="40px">
            <van-grid-item to="/classify?id=0" icon="https://gw.alicdn.com/tfs/TB1tikBVAPoK1RjSZKbXXX1IXXa-183-144.png?getAvatar=1" text="爆款新品" />
            <van-grid-item to="/classify?id=1" icon="https://gw.alicdn.com/tfs/TB1nBktVxTpK1RjSZR0XXbEwXXa-183-144.png?getAvatar=1" text="众筹" />
            <van-grid-item to="/classify?id=2" icon="https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1" text="小米手机" />
            <van-grid-item to="/classify?id=3" icon="https://gw.alicdn.com/tfs/TB1fcOKXkCy2eVjSZSyXXXukVXa-183-144.png?getAvatar=1" text="Redmi" />
            <van-grid-item to="/classify?id=4" icon="https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1" text="黑鲨" />
            <van-grid-item to="/classify?id=5" icon="https://gw.alicdn.com/tfs/TB19dcwVyrpK1RjSZFhXXXSdXXa-183-144.png?getAvatar=1" text="电视" />
            <van-grid-item to="/classify?id=6" icon="https://gw.alicdn.com/tfs/TB11tFkr7L0gK0jSZFxXXXWHVXa-183-144.png?getAvatar=1" text="大家电" />
            <van-grid-item to="/classify?id=7" icon="https://gw.alicdn.com/tfs/TB1tOGokubviK0jSZFNXXaApXXa-183-144.png?getAvatar=1" text="电脑办公" />
        </van-grid>
        <!--  -->
        <!-- 宫格 choose   index
        <van-grid :column-num="5">
            <van-grid-item
              v-for="(num,index) in choose"
              :key="index"
              :to="'/classify?id='+index"
            >
            <van-image :src="num.path" 
                width="100%"
                height="100%"
                fit="cover"
            />
            </van-grid-item>
        </van-grid> -->
  
        <!-- 淘尖货 -->
        <van-row class="recommend-box" gutter="20">
          <van-col span="12" class="cargobox" v-for="(item,index) in cargo" :key="index">
              <router-link to="/details">
              <van-col span="12" class="cargo">
                  <router-link to="/details">
                   <h2 class="describe-title van-ellipsis">{{item.title}}</h2>
                   <p class="van-ellipsis">{{item.txt}}</p>
                   <van-button round type="primary" size="mini">{{item.content}}</van-button>
              </router-link>
              </van-col>
              <van-col span="12">
                  <van-image
                      width="100%"
                      height="100%"
                      fit="cover"
                      :src="item.src"
                    />
              </van-col>
              </router-link>
          </van-col>
        </van-row>

        <!-- 品牌手机 -->
            <composing :setting="setting" :settingdata="settingdata"></composing>
            
        <!-- 精选单品 -->
        <div class="choiceness">
                
            
        <!-- 排版部分 -->
        <div class="capacity-case">
            <van-row v-for="(item,index) in lists" :key="index">
                <van-col span="24" class="case-top">
                    <van-image width="100%" height="100%" fit="cover"
                    :src="item.path"/>
                </van-col>
                <van-col span="12" align="center" v-for="(item2,index2) in item.wd" :key="index2">
                    <router-link to="/details">
                        <van-image width="95%" height="100%" fit="cover"
                        :src="require('../../assets/images/appliance4.jpg')"/>
                        <div class="describe">
                            <h3>{{item2.title}}</h3>
                            <p class="van-multi-ellipsis--l2">{{item2.content}}</p>
                            <div class="cost">
                                <span class="rate1">{{item2.price}}</span>
                                <span class="rate2">起</span>
                                <del>{{item2.delprice}}</del>
                            </div>
                        </div>
                    </router-link>
                </van-col>
            </van-row>
        </div>
        </div>
            
        <!-- </div> -->
        <div class="height"></div>
    </div>
</template>

<script>
    import swiper from "../public/swiper.vue";
    import composing from "../public/composing.vue";
    export default {
        data(){
            return{
                
                // 轮播
                picture:[
                    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/38c35f5e5c0b8039553299a9090579d1.jpg?thumb=1&w=720&h=360',
                    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/38c35f5e5c0b8039553299a9090579d1.jpg?thumb=1&w=720&h=360',
                    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/38c35f5e5c0b8039553299a9090579d1.jpg?thumb=1&w=720&h=360',
                    // {src:require("../../assets/images/t5.jpg")},
                    // {src:require("../../assets/images/t4.jpg")},
                    // {src:require("../../assets/images/t3.jpg")},
                ],
                // 宫格
                choose:[
                    {
                        path: require("../../assets/images/tw1.webp.jpg"),
                        
                    },
                    {
                        path: require("../../assets/images/tw8.webp.jpg"),
                        
                    },
                    {
                        path: require("../../assets/images/tw5.jpg"),
                    },
                    {
                        path: require("../../assets/images/tw1.webp.jpg"),
                    },
                    // 
                    {
                        path: require("../../assets/images/tw6.webp.jpg"),
                    },
                    {
                        path: require("../../assets/images/tw7.png"),
                    },
                    {
                        path: require("../../assets/images/tw2.png"),
                    },
                    {
                        path: require("../../assets/images/tw3.png"),
                    },
                    // 
                    {
                        path: require("../../assets/images/tw4.png"),
                    },{
                        path: require("../../assets/images/tw9.png"),
                    },
                ],
                // 淘尖货
                cargo:[
                    {
                        src:require("../../assets/images/fstore9.png"),
                        title:"淘尖货",
                        txt:"就爱占便宜",
                        content:"超值价",
                    },
                    {
                        src:require("../../assets/images/fstore3.png"),
                        title:"NEW",
                        txt:"新品抢先购",
                        content:"尝鲜价",
                    }
                ],
                // 品牌手机
                setting:[{src:require("../../assets/images/11.png")}],
                settingdata:[
                            {
                                path:require("../../assets/images/fphonec5.png"),
                                title:"小米CC9 美图定制版",
                                content:"8GB+256GB，100%美图相机",
                                price:"￥1999",
                                spec:"立即购买",
                            },
                            {
                                path:require("../../assets/images/fphonec5.png"),
                                title:"小米CC9 美图定制版",
                                content:"8GB+256GB，100%美图相机",
                                price:"￥1999",
                                spec:"立即购买",
                            },
                        ],
                // 模块
                lists:[
                    {
                        path: require("../../assets/images/xx.jpg"),
                        wd:[
                            {
                                chang:true,
                                wdpath: require("../../assets/images/fx7.png"),
                                title:"Redmi K30c",
                                content:"6400万全场景四摄",
                                price:"2999",
                                delprice:"299",
                            },
                            {
                                chang:true,
                                wdpath: require("../../assets/images/fx7.png"),
                                title:"Redmi K30c",
                                content:"6400万全场景四摄",
                                price:"2999",
                                delprice:"299",
                            },
                            {
                                chang:true,
                                wdpath: require("../../assets/images/sj1.jpg"),
                                title:"Redmi K30c",
                                content:"6400万全场景四摄",
                                price:"2999",
                                delprice:"299",
                            },
                            {
                                chang:true,
                                wdpath: require("../../assets/images/sj1.jpg"),
                                title:"Redmi K30c",
                                content:"6400万全场景四摄",
                                price:"2999",
                                delprice:"299",
                            },
                            {
                                chang:true,
                                wdpath: require("../../assets/images/sj1.jpg"),
                                title:"Redmi K30c",
                                content:"6400万全场景四摄",
                                price:"2999",
                                delprice:"299",
                            },
                            {
                                chang:true,
                                wdpath: require("../../assets/images/sj1.jpg"),
                                title:"Redmi K30c",
                                content:"6400万全场景四摄",
                                price:"2999",
                                delprice:"299",
                            },

                        ]
                    },
                    {
                        path: require("../../assets/images/ftv14.webp"),
                        wd:[
                            {
                                chang:true,
                                wdpath: require("../../assets/images/sj1.jpg"),
                                title:"sdc",
                                content:"6400万全场景四摄v",
                                price:"2999",
                                delprice:"299",
                            },

                        ]
                    },
                ],
            }
        },
        components:{
            swiper,
            composing
        },
        mounted(){
            
        
        }

    }
</script>

<style lang="scss" scoped>
// 轮播
.swiperRecommendBox{
    padding: 10px 20px 10px;
    background-color: rgb(252, 252, 249);
    .swipercase{
        border-radius: 10px;
        overflow: hidden;
    }
}
.divbox{
    width: 100%;
    overflow: hidden;
}
// 淘尖货
.cargobox{
    padding: 20px 0 10px;

    .cargo{
        text-align: center;
        h2{
            font-size: 20px;
            font-weight: 900;
            color: #000;
        }
        p{
            color: rgb(190, 187, 187);
            font-size: 12px;
            line-height: 30px;
        }
        .van-button{
            font-size: 14px;
        }
    }
}

.brand-content{
    font-size: 14px;
    padding: 2px 0 5px;
    color: rgb(114, 114, 114);
}
.brand-price{
    font-size: 16px;
    color: orange;
}
.brand-spec{
    font-size: 14px;
    color: rgb(216, 215, 214);
    text-align: right;
}
.recommend-box{
    padding: 10px;
    background-color: #fff;
}

    // 排版部分
 .capacity-case{
  
    background-color: rgb(255, 255, 255);
    padding:5px;
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
            margin: 0 5px;
            text-align: left;
            padding: 0 5px;
        }
        h3{
            font-size: 16px;
            line-height: 30px;
            color: #000;
            font-weight: 400;
        }
        p{
            color: rgb(158, 154, 154);
            line-height: 16px;
        }
        .cost{
            text-align: left;
            padding: 5px 0 0 5px;

            .rate1{
                font-size: 14px;
                color: orangered;

            }
            .rate2{
                font-size: 10px;
                color: orangered;
            }
            del{
                font-size: 10px;
                color: rgba(0,0,0,.54);
                padding-left: 5px;
                box-sizing: border-box;
            }
        }
        
    }
    
}
// height
.height{
    height: 50px;
}

</style>