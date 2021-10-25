<template>
    <div>
        <!-- collect我的收藏 -->
        
        <van-sticky>
            <van-nav-bar 
            :title="$route.name" 
            left-arrow
            @click-left="$router.go(-1)"
            >
            </van-nav-bar>
        </van-sticky>
        <!--  -->
        <!-- 商品列表 -->
        <div class="collect-bg">


        <div class="order-list" v-for="(item,index) in data" :key="index">
            <div class="box">
                <van-card
                :num="item.num"
                :price="item.price"
                :desc="item.content"
                :title="item.name"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                />
                <span @click="del(index)" class="iconfont icon-shanchu"></span>
            </div>
        </div>
        </div>
<!--  -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                data:[
                //     // {
                //     //     isSelect:true,
                //     //     name:"棒棒糖",
                //     //     price:100,
                //     //     num:1,
                //     // },
                ]
            }
        },
        methods:{
            del(index){
                this.$store.commit('car/del',index)
            }
        },
        created(){
            this.$store.state.bottomNav=false;
            this.data=this.$store.state.car.data;
            // this.collectbool=this.$store.state.car.collectbool;
            // console.log(this.data);
            
        },
        beforeUpdate(){
            this.$store.state.car.data=this.data
        },
        destroyed(){//生命周期销毁时
            this.$store.state.bottomNav=true;
            
        }
    }
</script>

<style lang="scss" scoped>
// 头部箭头
.van-nav-bar .van-icon{
    color: rgb(136, 135, 135);
    font-size: 20px;
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
// 背景
.collect-bg{
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    background: url("../../assets/images/111.png") no-repeat;
    background-size: 100% 100%;
    position: fixed;
    // top: 0;
    z-index: 0.5;
}
// 
.box{
position: relative;
margin-top: 20px;
}
.icon-shanchu{
    position: absolute;
    bottom:30px;
    right: 38px;
}
</style>