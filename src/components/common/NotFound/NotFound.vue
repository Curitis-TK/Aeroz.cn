<template>
    <div class="NotFound">
      <top-bar class="animated fadeInDown delay">
        <div slot="center">AeroZ - 404</div>
      </top-bar>
      <div class="content">
        <h2>(⊙o⊙)?</h2>
        <p>迷路了？</p>
        <p>ERROR: 404</p>
        <div class="backHome" @click="backHome">返回首页</div>
      </div>
    </div>
</template>

<script>
  import TopBar from "../TopBar/TopBar";

  export default {
    name: "NotFound",
    components:{
      TopBar,
    },
    methods: {
      backHome(){
        this.$router.push("/home")
      }
    }
  }
</script>

<style lang="less" scoped>
  .delay{
    -webkit-animation-delay: 150ms;//延迟执行动画
    animation-delay: 150ms;

  }
  .NotFound{
    user-select: none;
    text-align: center;
    font-family: "Arial","微软雅黑",sans-serif;
    color: #fff;
    .content{
      padding-top: 5vh;
    }
    h2{
      font-size: 10vh;
    }
    p{
      font-size: 5vh;
    }
    .backHome:after{

    }
    .backHome{
      padding: 10px 30px;
      display: inline-block;
      background-color: #fff;
      color: #333;
      font-weight: bold;
      transition: .5s;
      cursor: pointer;
      &:hover{
        background-color: #333;
        color: #fff;
      }
    }
  }
</style>
