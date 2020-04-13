<template>
  <div id="app">
    <el-main>
      <router-view/>
    </el-main>
    <Particles class="Particles"/>
  </div>
</template>

<script>
  import Particles from "./components/common/Particles/Particles";

  export default {
    name: 'app',
    components: {
      Particles
    }
  }

</script>

<style scoped>
  .Particles{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
</style>
