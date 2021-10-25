<template>
    <div class="addressbg">
        <!-- 选择我的地址页address -->
        <!-- 头部导航 -->
        <van-sticky>
            <van-nav-bar 
            :title="$route.name" 
            >
            </van-nav-bar>
        </van-sticky>
        <!-- 地址 -->
        <van-address-list
          v-model="chosenAddressId"
          :list="list"
          @add="onAdd"
          @edit="onEdit"
          @select="onSelect"
        />
        <!--  -->
    </div>
</template>

<script>
    export default {
        data() {
          return {
            chosenAddressId: 'null',//默认选项索引
            list:[], //注意：V-mode1双向数据绑定必须定义变量
          }
        },
        methods: {
           onAdd() {//点击增加地址
                this.$router.push("/addAddress")
            },
            onEdit(item) {//点击修改编辑时
              this.$router.push({
                 path:'editAddress',
                 query: {index:item.id}
                 })
                //  console.log(item);
                 
            },
            onSelect(item){//点击选择默认地址
            //   console.log(item);
              this.$store.state.address.defaultId =item.id;
              this.$router.go(-1);//点击默认选择

            }
        },
        created(){
          this.list=this.$store.state.address.lists;
          this.chosenAddressId=this.$store.state.address.defaultId;
          this.$store.state.bottomNav=false;
        },
        destroyed(){//生命周期销毁时
            this.$store.state.bottomNav=true;
            
        }

    }
</script>

<style lang="scss" scoped>
.addressbg{
    background-color: #fff;
}
.van-nav-bar{
    // background-image: linear-gradient(to top,yellow 1%,rgb(199, 248, 126) 5%,#fff 40%);
}
.van-nav-bar .van-icon{
    color: rgb(136, 135, 135);
    font-size: 20px;
}
.van-address-item{
    border: 1px solid rgb(214, 214, 214);
}
.van-address-item .van-radio__icon--checked .van-icon {
    background-color: #e4d4d6;
    border-color: #ee0a24;
}
// 单选框
.van-address-item .van-radio__icon--checked .van-icon {
    background-color: orange;
    border-color: orange;
}

// 新增地址
.van-button--danger {
    background-color: orange;
    border: 1px solid orange;
}
</style>