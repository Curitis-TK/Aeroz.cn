<template>
  <div class="Home">
    <h1 class="Home-title">AeroZ · 导航中心</h1>
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
  }
</script>

<style lang="less" scoped>
  .Home-title{
    text-align: center;
    margin-bottom: 50px;
    font-size: 64px;
    color: #fff;
    font-weight: normal;
    font-family: "Arial","微软雅黑",sans-serif;
  }
</style>
