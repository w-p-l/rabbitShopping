<template>
    <div>
        <!-- 注册页 -->
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
                        <div data-v-37c28a56="" class="van-cell van-field">
                            <div class="van-cell__value van-cell__value--alone van-field__value">
                                <div class="van-field__body">
                                    <input type="password" v-model="password" name="password" placeholder="请输入密码" class="van-field__control">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field-box">
                        <span class="iconfont icon-confirmpwd"></span>
                        <div data-v-37c28a56="" class="van-cell van-field van-field2">
                            <div class="van-cell__value van-cell__value--alone van-field__value">
                                <div class="van-field__body">
                                    <input type="password" v-model="password2" name="password2" placeholder="请确认密码密码" class="van-field__control">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="margin: -1px;">
                      <van-button round block type="info" native-type="submit">
                        注册
                      </van-button>
                    </div>
                </van-form>
                <div class="txt">
                <a @click="$router.go(-1)">返回 / </a>
                <router-link class="btns" to="/login" tag="a">去登录</router-link>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import { Toast } from 'vant';
    export default {
        data() {
            return {
              username: '',
              password: '',
              password2: '',
            };
        },
        methods: {

           onSubmit(params) {
                    //    params:{
                    //     username:this.username,
                    //     password:this.password,
                    //     password2:this.password2
                    // }

                    let _this = this;
                    
                // this.$axios.get(url,params).then()
                this.$axios.get('register',{params}).then((res)=>{
                    // console.log("请求成功后",req);
                    // Toast('提示文案');
                    if(res.data == "200"){
                        Toast({//插件中成功后的提示
                            message:"注册成功",
                            onOpened(){//提示后跳转路由
                                _this.$router.push("/login");
                            }
                        });
                    }else{
                        Toast('注册失败');
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
</style>