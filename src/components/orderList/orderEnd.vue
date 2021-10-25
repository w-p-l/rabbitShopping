<template>
    <div>
        <!-- 已完成 -->
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
              <!-- 待评价 -->
                <div slot="footer" class="van-panel__footer">
                    <!-- <van-button size="small">待评价</van-button> -->
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
        created(){
            let dataList = this.$store.state.orderlist.lists;
            this.typeList = this.$store.state.orderlist.typeList;
            this.lists=dataList.filter(item=>item.type == 3);
            
        },
        beforeDestroy(){//在组件销毁之前，把当前列表数据同步vuex数据中
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
</style>