<template>
  <div class="footer">
    <div class="container">
      <el-row>
        <el-col :span="6" :xs="24" :sm="24" :md="8" class="left">
          <p>Copyright 2020 by Curitis_X</p>
        </el-col>
        <el-col :span="6" :xs="24" :sm="24" :md="8" class="center">
          <p>粤ICP备19094962号-1</p>
        </el-col>
        <el-col :span="6" :xs="24" :sm="24" :md="8" class="right">
          <p>AeroZ.cn</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FixedBottom"
  }
</script>

<style lang="less" scoped>
  .footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0,0,0,0.3);
    p{
      font-family: "Arial", "微软雅黑", sans-serif;
      color: #fff;
    }
    .left{
      text-align: left;
    }
    .center{
      text-align: center;
    }
    .right{
      text-align: right;
    }
    @media (max-width: 992px){
      padding-top: 5px;
      p{
        text-align: center;
        margin: 5px auto;
      }
    }
  }
</style>
