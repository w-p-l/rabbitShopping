<template>
    <div class="seabg">
        <!-- 搜索详情页 -->
            <!-- 搜索框 -->
        <van-row class="searchtop">
          <van-col span="3">
              <van-icon @click="$router.go(-1)" name="arrow-left"  class="seachi"/>
          </van-col>
          <van-col span="18">
             <van-search
                  shape="round"
                  placeholder="请输入搜索关键词"
                />
          </van-col>
          <!-- <van-col span="3" class="seachit">
              搜索
            </van-col> -->
        </van-row>
            <!-- 搜索框end -->
            <!-- 热门搜索 -->
            <div class="searchcontent">热门搜索</div>
            <!-- 按钮 -->
            <div class="btnbox">
                <van-button type="default" size="small" to="/details">Redmi K30 5G</van-button>
                <van-button type="default" size="small" to="/details">黑鲨游戏手机3</van-button>
                <van-button type="default" size="small" to="/details">小米10头脑王</van-button>
                <van-button type="default" size="small" to="/details">小米10Pro</van-button>
                <van-button type="default" size="small" to="/details">Redmi Note 8</van-button>
                <van-button type="default" size="small" to="/details">小米手环4</van-button>
            </div>
            <!-- 排行榜 -->
            <div class="leaderboards">热门榜</div>
            <div class="leaderboards-box">
                <van-row>
                    <router-link to="/details" >
                    <van-col span="4" class="leaderboards-txt">1</van-col>
                        <van-col span="20">
                            <van-card
                              desc="描述信息"
                              title="商品标题wwwwwww"
                              thumb="https://i8.mifile.cn/v1/a1/ce8d4b39-18b3-5b8e-ea74-5a2c86856e20.webp"
                            >
                            </van-card>
                        </van-col>
                    </router-link >
                  <router-link to="/details" >
                    <van-col span="4" class="leaderboards-txt">2</van-col>
                        <van-col span="20">
                            <van-card
                              desc="描述信息"
                              title="商品标题"
                              thumb="https://i8.mifile.cn/v1/a1/ce8d4b39-18b3-5b8e-ea74-5a2c86856e20.webp"
                            >
                            </van-card>
                        </van-col>
                    </router-link >
                    <router-link to="/details" >
                    <van-col span="4" class="leaderboards-txt">3</van-col>
                        <van-col span="20">
                            <van-card
                              desc="描述信息"
                              title="商品标题"
                              thumb="https://i8.mifile.cn/v1/a1/ce8d4b39-18b3-5b8e-ea74-5a2c86856e20.webp"
                            >
                            </van-card>
                        </van-col>
                    </router-link >
                  
                </van-row>
            </div>

    </div>
</template>

<script>
    export default {
        methods: {
    
        },
        created(){
            this.$store.state.bottomNav=false;
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            this.$store.state.bottomNav=true;//修改导航数据
            
        },
    }
</script>

<style lang="scss" scoped>
.seabg{
    background-color:#fff;
}
.seachi{
    display: block;
    text-align: center;
    font-size: 20px;
    height: 44px;
    line-height: 44px;
    color: rgb(105, 104, 104);
}
.seachi,.seachit{
    display: block;
    text-align: center;
    height: 44px;
    line-height: 44px;
}
.seachit{
    font-size: 16px;
}
.searchtop{
    // background-image: linear-gradient(to top,yellow 1%,rgb(132, 218, 4) 5%,#fff 40%);
}
.van-search__content{
    background:transparent;
    border: 1px solid orange;
}
.van-search{
    padding: 5px;
    // background-image: linear-gradient(to top,yellow 1%,rgb(132, 218, 4) 5%,#fff 40%);
}
// 热门搜索
.searchcontent{
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    color: #000;
    padding-left: .3125rem;
}
.btnbox{
    padding-bottom: 20px;
// 按钮
        .van-button{
            height: 30px;
            line-height: 30px;
            // font-size: .21875rem;
            color: rgb(107, 106, 106);
            background-color: rgb(248,248,248);
            margin:5px;
            border-radius: 25px;
            border:0;
            padding: 0 15px;
        }
}
// 排行榜
.leaderboards{
    background-color: rgb(255, 255, 255);
    font-size: 20px;
    margin-left: .3125rem;
    color: orange;
}
.leaderboards-box{
    // background-color: rgb(242,225,201);
    margin: 10px;
    border-radius: 10px;
    overflow: hidden;
    .van-card__title{
        margin: 20px 0 10px;
        font-size: 16px;
    }
    .van-card__desc{
        color: rgb(175, 173, 173);
    }
   
    .leaderboards-txt{
        line-height: 104px;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        color: rgb(243, 135, 96);
        background-color: rgb(252, 252, 252);
        border: 0;
    }
    .van-card{
        background-color: rgb(252, 252, 252);

        border: 0;
    }
    

}

</style>