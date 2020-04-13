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
  #particles{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #232741;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
</style>
