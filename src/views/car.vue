<template>
    <div class="bg">
        <!-- 购物车 -->
        <!-- 顶部栏 -->
        <van-nav-bar 
        title="购物车" 
        left-arrow fixed 
        @click-left="$router.go(-1)"
        >
            <!-- <van-icon name="search" slot="right" /> -->
        </van-nav-bar>
        <!-- 顶部栏end -->
        <div class="car-top"></div>
        <div v-show="lists.length == 0" class="rook">
            <img src="../assets/images/go1.jpg" alt="">
             <router-link to="/home/recommend" class="carbtn" tag="button">去逛逛</router-link>
        </div>


        <!-- 购物车 -->
        <div class="cars" v-for="(item,index) in lists" :key="index">
            <!-- <div class="carbox" > -->
                <van-card
                    :desc="'售价：  '+item.price+'元'"
                    :title="item.name"
                    :thumb="item.image"
                >
                <div slot="tags">
                    <van-tag plain @click="reduce(index)" class="tagsleft">-</van-tag>
                    <input type="text" class="num" v-model="item.num">
                    <van-tag plain @click="add(index)" class="text-right">+</van-tag>
                    <span @click="del(index)" class="iconfont icon-shanchu"></span>
                </div>
                <div slot="footer">
                    <div class="checkboxselect" @click="inputSelect(index)">
                        <van-icon name="success" v-show="item.isSelect" />
                    </div>
                    <!-- <input type="checkbox" :checked="item.isSelect" @click="inputSelect(index)" class="checkboxbutton"> -->
                    <!-- <van-checkbox v-model="item.isSelect" class="checkboxbutton"></van-checkbox> -->
                </div>
                </van-card>
            <!-- </div> -->
        </div>
        <!-- 购物车end -->
        <!-- 文字 -->
        <p class="txt" v-show="lists.length != 0">温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
        <!-- 猜你喜欢 -->
        <div  class="hotSalebox" v-show="lists.length == 0">
            <h1 class="hotSale">猜你喜欢<span class="iconfont icon-mi1"></span></h1>
            <van-divider :style="{ borderColor: '#333', padding: '0 16px' }">
              实时推荐你的心心念念
            </van-divider>

            <div class="guess">
                <van-row gutter="10">
                  <van-col type="flex" justify="space-between" span="12" v-for="(item,index) in list" :key="index" gutter="5">
                     <router-link to="/details" >
                     <van-image
                          width="100%"
                          height="100%"
                          fit="cover"
                          :src='item.imgs'
                        />
                        <p class="guess-txt van-ellipsis">{{item.txt}}</p>
                        <span>{{item.price}}</span>
                    </router-link>
                  </van-col>
                </van-row>
            </div>
        </div>
        


        <!-- <div class="top"></div> -->
        <!-- 提交订单 -->
        <!-- label="共1件 金额：" -->
        <van-submit-bar
          button-text="提交订单"
          @submit="onsubmit"
           label="金额"
           :price=" totals*100"
           v-show="lists.length != 0"
        >
          <!-- <van-checkbox v-model="checkedAll">全选</van-checkbox> -->
          <van-checkbox class="van-checkbox__icon " @click="checkedAll" :value="checked" >全选
          </van-checkbox>
          
        </van-submit-bar>
        <!-- 提交订单end -->
<!-- $router.push('/order') -->
<!--  -->
    </div>
</template>

<script>
// import { createNamespacedHelpers } from 'vuex'
// const { mapState} = createNamespacedHelpers('car')

    export default {
        data() {
            return {
            //   checked: true,//购物车复选框
               value: 1,//步进器
               list:[//详情
                   {
                        imgs: require("../assets/images/g1.jpg"),
                        txt:"Redmi K20 Pro 6GB+64GB",
                        price:"￥2999",
                    },
                    {
                        imgs: require("../assets/images/g1.jpg"),
                        txt:"Redmi K20 Pro 6GB+64GB",
                        price:"￥2999",
                    },
                    {
                        imgs: require("../assets/images/g1.jpg"),
                        txt:"Redmi K20 Pro 6GB+64GB",
                        price:"￥2999",
                    },
                     {
                        imgs: require("../assets/images/g1.jpg"),
                        txt:"Redmi K20 Pro 6GB+64GB",
                        price:"￥2999",
                    },
                     {
                        imgs: require("../assets/images/g1.jpg"),
                        txt:"Redmi K20 Pro 6GB+64GB",
                        price:"￥2999",
                    },
                                
               ],
               lists:[],
               checked:true,//默认全选
               totals:0,//总价格
            // 购物车
            //    data:[
            //         {
            //             isSelect:true,
            //             name:"棒棒糖",
            //             price:100,
            //             num:1,
            //         },
            //     ]
            };
        },
        methods: {
           del(index){
               this.lists.splice(index,1)
               console.log(1);
           },
           add(index){
               this.lists[index].num +=1;
               this.checkboxclick();
               this.sum();
           },
           reduce(index){
               this.lists[index].num=this.lists[index].num<=1? 1:this.lists[index].num-=1;
               this.checkboxclick();
               this.sum();
           },
           checkedAll(){// 控制全选与反选
               this.lists.forEach((data)=>{
                  data.isSelect = !this.checked;
               })
               this.checked =!this.checked;
           },
           checkboxclick(){
            //第一次页面加载过程中，判断数据中isSelet状态
                this.checked = this.lists.every((item)=>{
                    return item.isSelect;//部为true，返回true。只要有一个false，返回false
                })
           },
           // 单击商品列表选项操作
           inputSelect(index){// 修改商品列表数据
                this.lists[index].isSelect =!this.lists[index].isSelect;
                this.checkboxclick();
           },
           sum(){
               this.totals=this.lists.reduce((total,item)=>{
                   if(!item.isSelect) return total;
                   return total + parseInt(item.price) * parseInt(item.num);//总价格
               },0)
           },
           onsubmit(){
            //    判断用户名是否为空,空跳到登录页面，不为空就跳转到
                if(this.$store.state.username){
                    this.$router.push('/order')
                }else{
                    this.$router.push({
                        path:"/login",
                        query:{
                            path:"/order"
                        }
                    })
                }
           }
         },
         created(){
             this.lists = this.$store.state.car.lists;
             this.sum();//执行计算总价格
             this.checkboxclick();
         },
         beforeUpdate(){//页面挂载时
             this.sum();//执行计算总价格
         },

    }
</script>

<style lang="scss" scoped>
.bg{
    // background-color: rgb(240, 253, 218);
}
.van-nav-bar--fixed{
    z-index: 999;
}
.van-nav-bar{
    // background-image: linear-gradient(to top,yellow 1%,rgb(199, 248, 126) 5%,#fff 40%);
    // background-color: rgb(156, 219, 46);
    // background-image: linear-gradient(to top,yellow 1%,rgb(132, 218, 4) 15%);

}
.van-nav-bar .van-icon{
    color: rgb(136, 135, 135);
    font-size: 20px;
}
.rook{
    position: relative;
    .carbtn{
        position: absolute;
        left: 50%;
        margin-left: -46px;
        bottom: 50px;
        border-radius: 20px;
        font-size: 16px;
        padding: 5px 20px;
        background-color: rgb(255, 253, 250);
        border: 1px solid orange;
    }
}

// 购物车
.car-top{
    margin-top: 46px;
    // background-color: rgb(240, 253, 218);
}

.cars{
    // background-color: rgb(240, 253, 218);
    padding-top: 10px;
    
    // position: relative;
    .checkboxbutton{
        position: absolute;
        left: 5px;
        top: 50%;
        margin-top: -20px;
        z-index: 55;
    }
    .van-card{
        font-size: 14px;
        background-color: #fff;
        padding: 8px 30px;
    }
    .van-card__title{
        margin-top: 7px;
    }
    .van-card__desc{
        padding: 5px 0;
        font-size: 10px;
    }
    .van-image{
        border: 1px solid rgb(216, 215, 215);
    }
    .van-stepper>.van-stepper__input{
        margin: 0;
    }
    .num{
        width: 30px;
        text-align: center;
        font-size: 16px;
    }
    .van-tag--plain {
        width: 10px;
        height: 10px;
        text-align: right;
        line-height: 10px;
    }
    .tagsleft{
        padding: 5px 3px 5px 9px;
    }
    .text-right{
        padding: 5px 5px 5px 7px;
    }
    .icon-shanchu{
        position: absolute;
        right:0px;
        bottom: 5px;
        font-size: 20px;
        color: rgb(197, 197, 197);
    }
    .checkboxselect{
        position: absolute;
        top:50%;
        left:5px;
        margin-top:-10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #C8C9CC;
        i{
            display: block;
            width: 20px;
            height: 20px;
            // background: orange;
            background: rgb(25,137,250);
            border-radius: 50%;
            text-align: center;
            line-height: 22px;
            font-size: 16px;
            color:#fff;
        }
    }
}
.van-checkbox__icon .van-icon{
            background: orange;

}
.van-goods-action{
    z-index: 99999;
}
// 温馨提示
.txt{
    color: #999;
    padding:10px;
    font-size: 14px;
    background-color: #fff;
}
// 猜你喜欢
.hotSalebox{
    background-color: #fff;
    .hotSale{
    color: rgb(255, 145, 0);
    font-size: 16px;
    text-align: center;
    letter-spacing: 0.5em;
    // padding-top: 15px;
    margin-bottom: -18px;
}
}

.carimg{
    width: 100%;
}
.guess{
    background-color: #fff;
    padding: 0 10px;
    .van-col{
        margin-top: 3px;
    }
    .guess-txt{
    margin: 0;
    font-size: 18px;
    }
    p,span{
        padding-left: 10px;
    }
    span{
        font-size: 14px;
        color: orange;
        
    }
}


// 提交订单
// .submits{
//     height: 50px;
// }
.van-button{
    border-radius: 0;
}
.van-submit-bar__bar{
    padding: 0;
    position: relative;
}
.van-submit-bar__button {
    height: 50px;
    line-height: 50px;
}
.van-submit-bar__button--danger {
    background: linear-gradient(to right,orange);
}
.van-submit-bar__text span{
    padding-left: 5px;
}
.van-checkbox__icon--checked .van-icon {
    color: #fff;
    background-color: orange !important;
    border-color: orange;
}


</style>