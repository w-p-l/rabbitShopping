<template>
    <div>
        <!-- 内容排版  家电，电视页 -->
        <!-- <div class="capacity-case"> -->
            <van-row v-for="(item,index) in picture" :key="index">
                <van-col span="24" class="case-top">
                    <van-image width="100%" height="100%" fit="cover" class="img-top"
                    :src="item.src"/>
                </van-col>
                <van-col span="12" align="center" v-for="(value,index2) in item.data" :key="index2">
                    <router-link to="/details">
                    <van-image width="100%" height="100%" fit="cover"
                    :src="value.path"/>
                    <div class="describe">
                      <h3 class="van-ellipsis">{{value.title}}</h3>
                      <p class="van-ellipsis">{{value.txt}}</p>
                        <span>{{value.price}}</span>
                    </div>
                    </router-link>
                </van-col>
            </van-row>
        <!-- </div> -->

    </div>
</template>

<script>
    export default {
        props:["picture"],//接收图片数据
    }
</script>

<style lang="scss" scoped>
// .capacity-case{
//     background-color: rgb(38,1,104);
//     padding:5px;
//     margin: -1px 0 10px;
    .case-top{
        padding: 20px 0;
    }
    .img-top{
            display: block;
            font-size: 0;
            margin-top: -1px;
        }
    .van-col{
        margin-top: 10px;
        padding: 0 5px;
        border-radius: 10px;
        overflow: hidden;
        .describe{
        padding-bottom: 10px;
        background-color: rgb(255,255,255);
        // margin: 0 5px;
        }
        .van-image{
            display: block;
        }

        h3,p{
        background-color: rgb(255, 255, 255);
        // margin: 0 5px;
        text-align: left;
        padding: 0 5px;
        }
        h3{
            font-size: 16px;
            line-height: 30px;
            color: rgb(24, 23, 23);
        }
        .con{
            font-size: 14px;
        }
        p{
            color: rgb(158, 154, 154);
            line-height: 16px;
        }
        span{
            color: orange;
            // text-align: left;

        }
    }
    
// }
</style>