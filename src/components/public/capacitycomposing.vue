<template>
    <div>
        <!-- 智能，笔记本 bottom 部分-->
        <div class="capacity-case">
            <van-row v-for="(item,index) in means" :key="index">
                <van-col span="24" class="case-top" >
                    <van-image width="100%" height="100%" fit="cover"
                    :src="item.src"/>
                </van-col>
                
                <van-col span="12" align="center" v-for="(val,index2) in meansdata" :key="index2">
                    <router-link to="/details">
                        <van-image width="95%" height="100%" fit="cover" :src="val.path"/>
                        <div class="describe">
                            <h3>{{val.title}}</h3>
                            <p class="van-multi-ellipsis--l2">{{val.content}}</p>
                        </div>
                    </router-link>
                </van-col>
            </van-row>
        </div>

    </div>
</template>

<script>
    export default {
        props:["means","meansdata"]
    }
</script>

<style lang="scss" scoped>
// botton部分
.capacity-case{
    background-color: rgb(240,241,243);
    padding:5px;
    .case-top{
        padding: 20px 0;
    }
    .van-col{
        margin-top: 10px;
        .describe{
        padding-bottom: 10px;
        background-color: rgb(255, 255, 255);
        margin: 0 5px;
        }
        .van-image{
        display: block;
        }

        h3,p{
        background-color: rgb(255, 255, 255);
        margin: 0 5px;
        text-align: left;
        padding: 0 5px;
        }
        h3{
            font-size: 16px;
            line-height: 30px;
            color: #000;
        }
        p{
            color: rgb(158, 154, 154);
            line-height: 16px;
        }
    }
    
}
</style>