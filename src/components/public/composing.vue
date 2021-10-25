<template>
    <div>
        <!-- 排版  品牌手机，家电部分 -->
                <van-row class="recommend-box" v-for="(item,index) in setting" :key="index">
                    <van-col span="24" >
                      <van-image :src="item.src" 
                            width="100%"
                            height="100%"
                            fit="cover"
                            :show-error="flag"
                        />
                    </van-col>
                    <van-col span="24" v-for="(val,index2) in settingdata" :key="index2">
                    <!-- <van-col span="24"> -->
                        <van-col span="8" >
                          <van-image :src="val.path" width="100%" height="100%" fit="cover"/>
                        </van-col>
                        <van-col span="16" >
                             <router-link to="/details">
                          <div class="brand-title">{{val.title}}</div>
                          <p class="brand-content">{{val.conten}}</p>
                          <p class="brand-price">{{val.price}}</p>
                          <p class="brand-spec"> {{val.spec}}</p>
                           </router-link>
                        </van-col>
                    </van-col>
                </van-row>
    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                flag:false
            }
        },
        props:["setting","settingdata"],//接收图片数据
    }
</script>

<style lang="scss" scoped>
// 品牌手机
.brand-title{
    padding-top: 15px;
    font-size: 20px;
    color: #000;
    // font-weight: 600;
}
.brand-content{
    font-size: 14px;
    padding: 2px 0 5px;
    color: rgb(114, 114, 114);
}
.brand-price{
    font-size: 16px;
    color: orange;
}
.brand-spec{
    font-size: 14px;
    color: rgb(216, 215, 214);
    text-align: right;
}
.recommend-box{
    padding: 10px;
    background-color: #fff;
}
</style>