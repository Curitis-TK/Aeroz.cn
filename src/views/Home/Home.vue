<template>
  <div class="Home">
    <transition
      appear
      enter-active-class="animated flipInX"
      leave-active-class="animated flipOutX"
    >
      <h1 class="Home-title" v-if="show">AeroZ · 导航中心</h1>
    </transition>
    <nav-area></nav-area>
  </div>
</template>

<script>
  import NavArea from "../../components/common/NavArea/NavArea";

  export default {
    name: 'Home',
    components: {
      NavArea,
    },
    data(){
      return {
        show : true
      }
    },
    created() {

    }
  }
</script>

<style lang="less" scoped>
  .Home-title{
    text-align: center;
    margin-bottom: 50px;
    font-size: 50px;
    color: #fff;
    font-weight: normal;
    font-family: "Arial","微软雅黑",sans-serif;
  }
</style>
