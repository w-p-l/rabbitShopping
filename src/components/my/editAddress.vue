<template>
    <div>
        <!-- editAddress编辑修改地址 -->
        <van-sticky>
            <van-nav-bar 
            :title="$route.name" 
            left-arrow
            @click-left="$router.go(-1)"
            >
            </van-nav-bar>
        </van-sticky>
        <!-- 内容 -->
            <van-address-edit
              :area-list="areaList"
              :address-info="addressInfo"
              show-search-result
              :search-result="searchResult"
              :area-columns-placeholder="['请选择', '请选择', '请选择']"
              @save="onSave"

            />

<!--  -->
    </div>
</template>

<script>
import areaList from './area.js';
    export default {
        data() {
           return {
             areaList,
             searchResult: [],
             addressInfo:{},//收货人信息初始值
           }
         },
         methods: {
             //点击保存时，修改vuex中的数据
             onSave({name,tel,province,city,county,addressDetail,areaCode}) {//点击保存，回调
            //    console.log(content);
                this.$store.commit('address/edit',{
                    id:this.$route.query.index,//修改id
                    name,
                    tel,
                    province,
                    city,
                    county,
                    addressDetail,
                    address:province+city+county+addressDetail,
                    areaCode,
               })
               this.$router.go(-1);
           },


         },     
        created(){
            // 获取修改id
            let id = this.$route.query.index;
            let data = this.$store.state.address.lists;
            this.addressInfo=data.find(item=>item.id == id);//匹配相同id值
            this.$store.state.bottomNav=false;
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
</style>