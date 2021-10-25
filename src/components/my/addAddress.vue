<template>
    <div>
        <!-- addAddress添加地址 -->
        <van-sticky>
            <van-nav-bar 
            :title="$route.name" 
            left-arrow
            @click-left="$router.go(-1)"
            >
            </van-nav-bar>
        </van-sticky>
        <!--  -->
            <van-address-edit
              :area-list="areaList"
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
             searchResult: []
           }
         },
         methods: {
           onSave({name,tel,province,city,county,addressDetail,areaCode}) {//点击保存，回调
            //    console.log(content);
                this.$store.commit('address/add',{
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