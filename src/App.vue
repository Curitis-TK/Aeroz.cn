<template>
  <div id="app">
    <el-main class="main">
      <router-view/>
    </el-main>
    <fixed-bottom/>
    <Particles class="Particles"/>
  </div>
</template>

<script>
  import Particles from "./components/common/Particles/Particles";
  import FixedBottom from "./components/content/FixedBottom/FixedBottom";

  export default {
    name: 'app',
    components: {
      Particles,
      FixedBottom,
    }
  }

</script>

<style scoped>
  #app{
    min-height: 100vh;
    position: relative;
  }
  .main{
    padding-bottom: 100px;
  }
  @media (max-width: 992px){
    .main{
      padding-bottom: 150px;
    }
  }
  @media (max-width: 768px){
    .main{
      padding-bottom: 250px;
    }
  }

  .Particles{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
</style>
