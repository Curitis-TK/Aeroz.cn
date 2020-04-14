<template>
  <div class="NavArea container">
    <el-row :gutter="20" v-show="show">
        <nav-area-item v-for="(item ,index ) in NavList" :key="index" :itemList="item"/>
    </el-row>
  </div>
</template>

<script>
  import NavAreaItem from "./NavAreaItem";

  export default {
    name: "NavArea",
    components: {
      NavAreaItem
    },
    data(){
      return {
        NavList : {
          skin:{
            title: "AeroZ 皮肤站",
            linkType : 0,
            link : "https://skin.aeroz.cn/",
            bg : "https://image.aeroz.cn/images/2020/01/14/skin.jpg",
            msg : ["通过皮肤站","管理您的账户","设定您的游戏皮肤"],
            disabled : false,
          },
          image:{
            title: "AeroZ 图床",
            linkType : 0,
            link : "https://image.aeroz.cn/",
            bg : "https://image.aeroz.cn/images/2020/01/14/skin.jpg",
            msg : ["通过图床站","上传您心爱的照片","并放入MineCraft中"],
            disabled : false,
          },
          test1:{
            title: "路由测试",
            linkType : 1,
            link : "/test",
            bg : "https://image.aeroz.cn/images/2020/01/14/image.jpg",
            msg : ["测试文字","测试文字"],
            disabled : false,
          },
          test2:{
            title: "空内容",
            linkType : 1,
            link : "/empty",
            bg : "https://image.aeroz.cn/images/2020/01/14/image.jpg",
            msg : ["测试文字"],
            disabled : false,
          },
        },
        show : false,
      }
    },
    created() {
      setTimeout(()=>{
        this.show = true
      },100)
    }
  }
</script>

<style scoped>
  .NavArea{
    text-align: center;
  }
</style>
