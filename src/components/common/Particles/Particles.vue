<template>

  <div id="particles"></div>
</template>

<script>
  import particles from 'particles.js'
  import particlesConfig from './default.json'


  export default {
    name: "Particles",
    mounted(){
      particlesJS('particles',particlesConfig);
    }
  }
</script>

<style scoped>
  /*挡住canvas，用默认右键菜单*/
  #particles:after{
    content: "";
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  #particles{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #232741;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
</style>
