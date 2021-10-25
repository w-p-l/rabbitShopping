<template>
    <div>
        <!-- 待付款 -->
        <!-- 订单遍历 -->
        <div v-for="(item,index) in lists" :key="index">
            <van-panel :title="'订单:'+item.orderId" 
            :status="typeList[item.type]"
             v-if="item.type ==1"
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
                    <van-button size="small" @click="onPay(item.orderId)" class="paybtn">支付订单</van-button>
                    <van-button size="small" @click="del(index)" class="delbtn">删除订单</van-button>
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
            onPay(orderId){//支付订单
                let index=this.lists.findIndex(item=>item.orderId==orderId)
                this.lists[index].type =2;//点击支付后切换成待收货，调用支付接口
                // console.log(this.lists);
            },
            del(index){
                // 修改数据状态,改为6
                this.lists[index].type =6;
            }
        },
        created(){
            this.typeList = this.$store.state.orderlist.typeList;
            let dataList = this.$store.state.orderlist.lists;
            this.lists = dataList.filter(item=>item.type == 1);


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

</style>