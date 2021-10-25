<template>
    <div>
        <!-- advertising 广告页 -->
        <h1>倒计时{{num}}秒</h1>
        <button @click="goHome">跳过</button>
        <img src="../../assets/images/advertising2.jpg" alt="">

    </div>
</template>

<script>
    export default {
        data(){
            return{
                num:3,
                time:0,
            }
        },
        methods:{
            goHome(){
                    this.$router.push('/home/recommend')
            }
        },
        created(){
            this.time=setInterval(()=>{
                if(this.num ==0){
                    // console.log("跳转页面");
                    this.$router.push('/home/recommend')
                }else{
                    this.num--;
                }
            },1000)
            this.$store.state.bottomNav=false;
        },
        beforeDestroy() {//销毁生命周期之前,停止定时器
            clearInterval(this.time);
        },
        destroyed(){//生命周期销毁时
            this.$store.state.bottomNav=true;//底部导航消失
        },
        
    }
</script>

<style lang="scss" scoped>
button,h1{
    position: fixed;
    z-index: 5;
}
h1{
    color: #fff;
    top:20px;
    right: 55px;
    font-size: 14px;
}
button{
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(252, 249, 249, 0.986);
    top:10px;
    border: 0;
}
img{
    height: 100%;
}
</style>