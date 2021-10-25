<template>
    <div>
        <!-- order 提交  订单-->
        <van-nav-bar
        :title="$route.name"
        left-text="返回"
        left-arrow
        @click-left="orderpay"
        />
        <!-- 地址 -->
        <van-contact-card
        type="edit"
        :name="name"
        :tel="tel"
        @click="add"
        />

        <!-- 商品列表 -->

        <div class="order-list" v-for="(item,index) in lists" :key="index">
            <van-card
            :num="item.num"
            :price="item.price"
            :desc="item.content"
            :title="item.name"
            :thumb="item.image"
            />
        </div>

        <!-- 支付 -->
        <van-submit-bar
        :price="sum*100"
        button-text="支付"
        @submit="onsubmit"
        />
    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                name:"",
                tel:"",
                totals:0,
            }
        },
        methods:{
            add(){
                this.$router.push('/address');
            },
            onsubmit(){//点击支付时
                // 保存订单数据
                let order = {
                    orderId:new Date().getTime(),//时间戳，验证可加上其他id什么的
                    address:this.address,
                    goodsList:this.lists,
                    type:2//已支付
                }
                this.$store.commit('orderlist/add',order);
                // 清除购物车
                this.$store.state.car.lists=[];
                this.$store.state.car.num=0;

                this.$router.push('/orderList/orderAll');
            },
            orderpay(){//点击返回,未支付处理
                // console.log('订单为支付');
                let order = {
                    orderId:new Date().getTime(),//时间戳，验证
                    address:this.address,
                    goodsList:this.lists,
                    type:1//1未支付  2代付款 3待收货 4.已完成
                }
                this.$store.commit('orderlist/add',order);

                // 清除购物车
                this.$store.state.car.lists=[];
                this.$store.state.car.num=0;

                this.$router.push("/car");
            }
            
        },
        computed:{
            sum(){
                return this.lists.reduce((total,item)=>{
                   if(!item.isSelect) return total;//false不让计算总价格
                   return total + parseInt(item.price) * parseInt(item.num);//总价格
               },0)
           }
        },
        created(){
            // 默认获取地址信息
            let defaultId = this.$store.state.address.defaultId;
            let data = this.$store.state.address.lists;
            this.address= data.find(item=>item.id == defaultId);// 默认id匹配数组中id的值
            
            this.name = this.address.name;
            this.tel=this.address.tel;
              // 获取购物车数据
            this.lists = this.$store.state.car.lists;

            this.$store.state.vanTabbar = false;
        },
        // beforeDestroy() {//生命周期销毁前
        //     console.log('待支付');
        // },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="scss" scoped>
// 头部
.van-nav-bar .van-icon{
    color: rgb(136, 135, 135);
    font-size: 20px;
}
.van-nav-bar__text{
    color: rgb(136, 135, 135);
}
.van-contact-card::before {
background: rgb(255, 255, 255);
}
// 提交
.van-submit-bar__button--danger {
    background: linear-gradient(to right,orange);
}
//商品列表 
.order-list{
    padding: 20px;
    background-color: #fff;
}
.van-card{
    background-color: #fff;
    border: 1px solid rgb(168, 166, 166);
    border-radius: 10px;
}
</style>