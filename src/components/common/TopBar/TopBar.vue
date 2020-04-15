<template>
    <div class="TopBar">
      <div class="container">
        <div class="left">
          <slot name="left"></slot>
        </div>
        <div class="center">
          <slot name="center"></slot>
        </div><div class="right">
        <slot name="right"></slot>
      </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "TopBar"
  }
</script>

<style scoped>
  .TopBar{
    background-color: rgba(0,0,100,0.3);
    font-size: 32px;
  }
  .container{
    display: flex;
    height: 60px;
  }
  .container>div{
    line-height: 60px;
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>
