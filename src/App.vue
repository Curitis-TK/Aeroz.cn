<template>
  <div id="app">
    <el-main class="main">
      <transition
        mode="out-in"
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut"
      >
        <router-view/>
      </transition>
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
  .animated {
    animation-duration: .5s;
    animation-fill-mode: both;
  }
  #app{
    min-height: 100vh;
    position: relative;
  }
  .main{
    padding:0 0 100px;
    overflow: hidden;
  }
  @media (max-width: 992px){
    .main{
      padding-bottom: 130px;
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
