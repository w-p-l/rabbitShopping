<template>
    <div>
        <!-- 登录页 -->
<!--  -->
        <div class="loginbg">
            <div class="login-box">
                <van-form @submit="onSubmit">
                    <div class="field-box">
                        <span class="iconfont icon-user"></span>
                        <div data-v-37c28a56="" class="van-cell van-field">
                            <div class="van-cell__value van-cell__value--alone van-field__value">
                                <div class="van-field__body">
                                    <input type="text" v-model="username" name="username" placeholder="用户名" class="van-field__control">
                               </div>
                           </div>
                        </div>
                    </div>

                    <div class="field-box">
                        <span class="iconfont icon-mima2"></span>
                        <div data-v-37c28a56="" class="van-cell van-field van-field2">
                            <div class="van-cell__value van-cell__value--alone van-field__value">
                                <div class="van-field__body">
                                    <input type="password" v-model="password" name="password" placeholder="请输入密码" class="van-field__control">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="margin: -1px;">
                      <van-button round block type="info" native-type="submit">
                        登录
                      </van-button>
                    </div>
                </van-form>
                <div class="txt">
                <a @click="$router.push('/home/recommend')">随便看看 / </a>
                <router-link class="btns" to="/register" tag="a">去注册?</router-link>
                </div>
            </div>
        </div>
        <!--  -->
        <!-- <div class="text">
            默认登录账号:admian
            密码：123456
        </div> -->


    </div>
</template>

<script>
import { Toast } from 'vant';

    export default {
        data() {
            return {
              username:'',
              password:'',
            };
        },
        methods: {
           onSubmit(params) {
            //    console.log(params);
                
            let _this = this;
            //    判断是否传参，修改返回的路径
            let path = '/my'
            if("path" in _this.$route.query){
                path = _this.$route.query.path;
            }


              this.$axios.get("login",{params}).then((res)=>{
                //   console.log(res);
                    if(res.data == "200"){
                        Toast({
                            message:"登录成功",
                            onOpened(){// 设置store中添加用户名
                            _this.$store.state.username = _this.username;
                            _this.$router.push(path);
                            // _this.$router.push("/my");
                            // console.log(_this.$store.state.username);
                            
                            }
                        })
                    }else{
                        Toast("登录失败")
                    }
                  
                  
              })
              
              
              
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
.loginbg{
    width: 100vw;
    height: 100vh;
    background: url("../../assets/images/deng.jpg") no-repeat;
    background-size: cover;
}
.login-box{
    padding: 50% 40px 0;

    // background-color: #fff;
    .field-box{
        padding-left: 40px;
        position: relative;
        span{
            display: block;
            position: absolute;
            left: 0;
            width: 30px;
            height: 30px;
            z-index: 5;
            color: rgba(255, 255, 255, 0.795);
            font-size: 20px;
            line-height: 44px;
        }
        .van-field{
            background-color: transparent;
            border-bottom: 1px solid rgba(255, 255, 255, 0.562);
            color: #fff;
            padding-right: 25px;
        }
        .van-field2{
            border-bottom: 1px solid transparent;

        }
        .van-field__control{
            color: #fff;
            font-size: 16px;
        }
    }
    
    .van-button--info{
        width: 100%;
        text-align: center;
        background-color: transparent;
        border: 1px solid rgba(255, 255, 255, 0.795);
    }
    .txt{
        text-align: center;
        color: rgba(255, 255, 255, 0.801);
        .btns,a{
        display: inline-block;
        padding-top: 25px;
        background-color: transparent;
        color: rgba(255, 255, 255, 0.801);
        font-size: 14px;
        }
        a{
            color: rgba(221, 220, 220, 0.76);
        }
        
    }
    
}
// 
.text{
    color: #fff;
    position: absolute;
    bottom: 150px;
    text-align: center;
    font-size: 18px;
    width: 100%;
}
</style>