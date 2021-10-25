<template>
    <div>
        <!-- 待收货 -->
        <!-- 订单遍历 -->
        <div v-for="(item,index) in lists" :key="index">
            <van-panel 
            :title="'订单:'+item.orderId" 
            :status="typeList[item.type]"
            v-if="item.type ==2"
            >
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
                <div slot="footer" class="van-panel__footer">
                    <!-- <van-button size="small">退款申请</van-button> -->
                    <van-button size="small" @click="onGoods(item.orderId)" class="takebtn">已收货</van-button>
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
                typeList:[],
            }
        },
        methods:{
            onGoods(orderId){//已收货
                let index=this.lists.findIndex(item=>item.orderId==orderId)
                this.lists[index].type = 3;//切换已收货，变成已完成
                // console.log(orderId);
                
            }
        },
        created(){
            this.typeList = this.$store.state.orderlist.typeList;
            let dataList = this.$store.state.orderlist.lists;
            this.lists=dataList.filter(item=>item.type == 2);
            
        },
        beforeDestroy(){//组件销毁前，同步当前数据到vuex里
           if(this.lists.length){
                this.$store.commit('orderlist/editId',this.lists);
            }
        }
    }
</script>

<style lang="scss" scoped>
.van-panel__footer{
    text-align: right;
}

.takebtn{//已收货按钮
    border: 1px solid rgba(143, 224, 35, 0.356);
    border-radius: 20px;
}

</style>