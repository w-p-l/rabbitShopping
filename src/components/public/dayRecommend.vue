<template>
    <div>
                        <!-- 今日推荐 -->
        <div class="top-title">今日推荐
            <van-row gutter="10" type="flex" justify="space-around" class="top-box" align="center">
                
                <van-col span="8" v-for="(item,index) in dayRecommend" :key="index">
                     <router-link to="/details" tag="div">
                        <van-image
                          width="100%"
                          height="100%"
                          fit="cover"
                          :src="item.src"
                        />
                        {{item.txt}}
                    </router-link>
                </van-col>
            </van-row>
        </div>

    </div>
</template>

<script>
    export default {
        props:["dayRecommend"]
    }
</script>

<style lang="scss" scoped>
// 今日推荐
.top-title{
    font-size: 18px;
    color: #000;
    padding: 10px;
    font-weight: 600;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    .van-col{
        font-size: 14px;
        font-weight: 200;
        text-align: center;
        color: orange;
        margin-top: 10px;
    }
}
</style>