<template>
    <div>
        <!-- 全部订单 -->
        <!-- 订单遍历 -->
        <div v-for="(item,index) in lists" :key="index">
            <van-panel :title="'订单:'+item.orderId" :status="typeList[item.type]">
              <!-- 商品遍历 -->
              <div v-for="(value,index2) in item.goodsList" :key="index2">
                  <van-card
                      :num="value.num"
                      :price="value.price"
                      desc="描述信息"
                      :title="value.name"
                      :thumb="value.image"
                    />
              </div>
              <!-- 待支付 -->
                <div slot="footer" v-if="item.type == 1" class="van-panel__footer">
                    <van-button size="small" class="delbtn">删除订单</van-button>
                    <van-button size="small" class="paybtn" @click="onPay(item.orderId)">支付订单</van-button>
                </div>
                <!-- 待收货 -->
                <div slot="footer" v-else-if="item.type == 2" class="van-panel__footer">
                    <!-- <van-button size="small">退款申请</van-button> -->
                    <van-button size="small" @click="onGoods(item.orderId)" class="takebtn">已收货</van-button>
                </div>
                <!-- 评价 -->
                <div slot="footer" v-else-if="item.type == 3" class="van-panel__footer">
                    <van-button size="small" class="accomplishbtn">已完成</van-button>
                </div>
            </van-panel>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                lists:[],
                typeList:[],//订单状态
            } 
        },
        methods:{
            onPay(orderId){//支付订单
                let index=this.lists.findIndex(item=>item.orderId==orderId)
                this.lists[index].type =2;//切换成支付后待收货，调用支付接口
                // console.log(this.lists);
            },
            onGoods(orderId){//已收货
                let index=this.lists.findIndex(item=>item.orderId==orderId)
                this.lists[index].type =3;//切换已收货，变成已完成
                // console.log(orderId);
            }
        },
        created(){
            this.lists = this.$store.state.orderlist.lists;
            this.typeList = this.$store.state.orderlist.typeList;

        },
        beforeDestroy(){//在组件销毁之前，把当前列表数据同步vuex数据中
            if(this.lists.length){
                this.$store.commit('orderlist/edit',this.lists);
            }
        }

    }
</script>

<style lang="scss" scoped>
.van-panel__footer{
    text-align: right;
}
.delbtn{//删除按钮
    // background-color: yellow;
    border: 1px solid rgba(255, 68, 0, 0.37);
    border-radius: 20px;
    margin: 10px;
}
.paybtn{//支付按钮
    // background-color: greenyellow;
    border: 1px solid rgba(255, 166, 0, 0.356);
    border-radius: 20px;


}
.takebtn{//已收货按钮
    border: 1px solid rgba(143, 224, 35, 0.356);
    border-radius: 20px;
}
.accomplishbtn{
    border: 1px solid rgba(231, 231, 230, 0.356);
    border-radius: 20px;
}
</style>